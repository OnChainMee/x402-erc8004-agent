import { errorCodes, providerErrors, rpcErrors, serializeError } from "@metamask/rpc-errors";
import {
  type Address,
  type Hex,
  type SignMessageParameters,
  SignTypedDataParameters,
  type TransactionRequest,
} from "viem";

import { DEFAULT_CHAIN_ID } from "../constants";
import { GeminiStorage, STORAGE_ETH_ACCOUNTS_KEY, STORAGE_ETH_ACTIVE_CHAIN_KEY } from "../storage";
import {
  type GeminiProviderConfig,
  type GetCallsStatusResponse,
  ProviderEventEmitter,
  type ProviderInterface,
  type RpcRequestArgs,
  type SendCallsParams,
  type SendCallsResponse,
  type WalletCapabilities,
} from "../types";
import { hexStringFromNumber } from "../utils";
import { GeminiWallet } from "../wallets";
import { convertSendValuesToBigInt, fetchRpcRequest, validateRpcRequestArgs } from "./provider.utils";

export class GeminiWalletProvider extends ProviderEventEmitter implements ProviderInterface {
  private readonly config: GeminiProviderConfig;
  private wallet: GeminiWallet | null = null;

  constructor(providerConfig: Readonly<GeminiProviderConfig>) {
    super();
    this.config = providerConfig;

    // Preserve user's disconnect callback while adding provider cleanup
    const userDisconnectCallback = providerConfig.onDisconnectCallback;
    this.wallet = new GeminiWallet({
      ...providerConfig,
      onDisconnectCallback: () => {
        // Call user's callback first
        userDisconnectCallback?.();
        // Then handle provider cleanup
        this.disconnect();
      },
    });
  }

  public async request<T>(args: RpcRequestArgs): Promise<T> {
    try {
      validateRpcRequestArgs(args);

      if (!this.wallet?.accounts?.length) {
        switch (args.method) {
          case "eth_requestAccounts": {
            // Use existing wallet instance instead of recreating
            if (!this.wallet) {
              // Preserve user's disconnect callback while adding provider cleanup
              const userDisconnectCallback = this.config.onDisconnectCallback;
              this.wallet = new GeminiWallet({
                ...this.config,
                onDisconnectCallback: () => {
                  // Call user's callback first
                  userDisconnectCallback?.();
                  // Then handle provider cleanup
                  this.disconnect();
                },
              });
            }
            await this.wallet.connect();
            this.emit("accountsChanged", this.wallet.accounts);
            break;
          }
          case "net_version":
            // not connected default value
            return DEFAULT_CHAIN_ID as T;
          case "eth_chainId":
            // not connected default value
            return hexStringFromNumber(DEFAULT_CHAIN_ID) as T;
          default: {
            // all other methods require active connection
            throw providerErrors.unauthorized();
          }
        }
      }

      let response;
      let requestParams;
      switch (args.method) {
        case "eth_requestAccounts":
        case "eth_accounts":
          response = this.wallet.accounts;
          break;
        case "net_version":
          response = this.wallet.chain.id;
          break;
        case "eth_chainId":
          response = hexStringFromNumber(this.wallet.chain.id);
          break;
        case "personal_sign":
        case "wallet_sign":
          requestParams = args.params as Array<Hex | Address>;
          response = await this.wallet.signData({
            account: requestParams[1] as Address,
            message: requestParams[0] as Hex,
          } as SignMessageParameters);
          if (response.error) {
            throw rpcErrors.transactionRejected(response.error);
          } else {
            response = response.hash;
          }
          break;
        case "eth_sendTransaction":
        case "wallet_sendTransaction":
          requestParams = args.params as Array<TransactionRequest>;
          requestParams = convertSendValuesToBigInt(requestParams[0]);
          response = await this.wallet.sendTransaction(requestParams);
          if (response.error) {
            throw rpcErrors.transactionRejected(response.error);
          } else {
            response = response.hash;
          }
          break;
        case "wallet_switchEthereumChain": {
          // Handle both standard EIP-3326 format [{ chainId: hex }] and legacy format { id: number }
          const rawParams = args.params as [{ chainId: string }] | { id: number };
          let chainId: number;

          if (Array.isArray(rawParams) && rawParams[0]?.chainId) {
            // Standard EIP-3326 format: [{ chainId: "0x1" }]
            chainId = parseInt(rawParams[0].chainId, 16);
          } else if (
            rawParams &&
            typeof rawParams === "object" &&
            "id" in rawParams &&
            Number.isInteger(rawParams.id)
          ) {
            // Legacy format: { id: 1 }
            chainId = rawParams.id;
          } else {
            throw rpcErrors.invalidParams(
              "Invalid chain id argument. Expected [{ chainId: hex_string }] or { id: number }.",
            );
          }

          response = await this.wallet.switchChain({ id: chainId });

          // Per EIP-3326, a non-null response indicates error
          if (response) {
            throw providerErrors.custom({ code: 4902, message: response });
          }

          await this.emit("chainChanged", hexStringFromNumber(chainId));
          break;
        }
        case "eth_signTypedData_v1":
        case "eth_signTypedData_v2":
        case "eth_signTypedData_v3":
        case "eth_signTypedData_v4":
        case "eth_signTypedData": {
          requestParams = args.params as Array<Hex | Address>;
          const signedTypedDataParams = JSON.parse(requestParams[1] as string) as SignTypedDataParameters;
          response = await this.wallet.signTypedData({
            account: requestParams[0] as Address,
            domain: signedTypedDataParams.domain,
            message: signedTypedDataParams.message,
            primaryType: signedTypedDataParams.primaryType,
            types: signedTypedDataParams.types,
          });
          if (response.error) {
            throw rpcErrors.transactionRejected(response.error);
          } else {
            response = response.hash;
          }
          break;
        }
        // EIP-5792 Wallet Call API
        case "wallet_getCapabilities": {
          const capabilityParams = Array.isArray(args.params) ? args.params : undefined;
          response = this.getCapabilities(capabilityParams);
          break;
        }
        case "wallet_sendCalls": {
          requestParams = args.params as [SendCallsParams];
          response = await this.sendCalls(requestParams[0]);
          break;
        }
        case "wallet_getCallsStatus": {
          requestParams = args.params as [string];
          response = await this.getCallsStatus(requestParams[0]);
          break;
        }
        case "wallet_showCallsStatus": {
          requestParams = args.params as [string];
          await this.showCallsStatus(requestParams[0]);
          response = null;
          break;
        }

        // TODO: not yet implemented or unclear if we support
        case "eth_ecRecover":
        case "eth_subscribe":
        case "eth_unsubscribe":
        case "personal_ecRecover":
        case "eth_signTransaction":
        case "wallet_watchAsset":
        case "wallet_grantPermissions":
          throw rpcErrors.methodNotSupported("Not yet implemented.");

        // not supported
        case "eth_sign":
        case "eth_coinbase":
        case "wallet_addEthereumChain":
          throw rpcErrors.methodNotSupported();

        // call rpc directly for everything else
        default:
          if (!this.wallet.chain.rpcUrl)
            throw rpcErrors.internal(`RPC URL missing for current chain (${this.wallet.chain.id})`);
          return fetchRpcRequest(args, this.wallet.chain.rpcUrl);
      }

      return response as T;
    } catch (error) {
      const { code } = error as { code?: number };
      if (code === errorCodes.provider.unauthorized) this.disconnect();
      return Promise.reject(serializeError(error));
    }
  }

  // custom wallet function to open settings page
  async openSettings() {
    await this.wallet?.openSettings();
  }

  // EIP-5792 Implementation Methods - delegating to wallet

  private getCapabilities(params?: readonly unknown[]): WalletCapabilities {
    if (!this.wallet) {
      throw providerErrors.unauthorized();
    }
    const requestedChainIds = params?.[0] as string[] | undefined;
    return this.wallet.getCapabilities(requestedChainIds);
  }

  private async sendCalls(params: SendCallsParams): Promise<SendCallsResponse> {
    if (!this.wallet) {
      throw providerErrors.unauthorized();
    }
    try {
      return await this.wallet.sendCalls(params);
    } catch (error) {
      throw rpcErrors.transactionRejected(error instanceof Error ? error.message : String(error));
    }
  }

  private async getCallsStatus(batchId: string): Promise<GetCallsStatusResponse> {
    if (!this.wallet) {
      throw providerErrors.unauthorized();
    }
    try {
      return await this.wallet.getCallsStatus(batchId);
    } catch (error) {
      throw rpcErrors.invalidParams(error instanceof Error ? error.message : String(error));
    }
  }

  private async showCallsStatus(batchId: string): Promise<void> {
    if (!this.wallet) {
      throw providerErrors.unauthorized();
    }
    try {
      await this.wallet.showCallsStatus(batchId);
    } catch (error) {
      throw rpcErrors.invalidParams(error instanceof Error ? error.message : String(error));
    }
  }

  async disconnect() {
    // If wallet exists, let it handle its own storage cleanup
    if (this.wallet) {
      // Create a temporary storage instance with the same config to clean up
      const storage = this.config.storage || new GeminiStorage();
      await storage.removeItem(STORAGE_ETH_ACCOUNTS_KEY);
      await storage.removeItem(STORAGE_ETH_ACTIVE_CHAIN_KEY);
    }
    this.wallet = null;
    // Call the user's disconnect callback if provided
    this.config.onDisconnectCallback?.();
    await this.emit("disconnect", "User initiated disconnection");
    await this.emit("accountsChanged", []);
  }
}
