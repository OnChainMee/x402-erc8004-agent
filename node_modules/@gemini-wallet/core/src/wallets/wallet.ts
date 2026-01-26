import {
  type Address,
  type Hex,
  type SignMessageParameters,
  type SignTypedDataParameters,
  type SwitchChainParameters,
  type TransactionRequest,
} from "viem";

import { Communicator } from "../communicator";
import { DEFAULT_CHAIN_ID, getDefaultRpcUrl, SUPPORTED_CHAIN_IDS } from "../constants";
import {
  GeminiStorage,
  type IStorage,
  STORAGE_CALL_BATCHES_KEY,
  STORAGE_ETH_ACCOUNTS_KEY,
  STORAGE_ETH_ACTIVE_CHAIN_KEY,
} from "../storage";
import {
  type CallBatchMetadata,
  type Chain,
  type ConnectResponse,
  type GeminiProviderConfig,
  GeminiSdkEvent,
  type GeminiSdkMessage,
  type GeminiSdkMessageResponse,
  type GeminiSdkSendTransaction,
  type GeminiSdkSignMessage,
  type GeminiSdkSignTypedData,
  type GetCallsStatusResponse,
  type SendCallsParams,
  type SendCallsResponse,
  type SendTransactionResponse,
  type SignMessageResponse,
  type SignTypedDataResponse,
  type SwitchChainResponse,
  type WalletCapabilities,
} from "../types";
import { hexStringFromNumber } from "../utils";

export function isChainSupportedByGeminiSw(chainId: number): boolean {
  return SUPPORTED_CHAIN_IDS.includes(chainId as (typeof SUPPORTED_CHAIN_IDS)[number]);
}

export class GeminiWallet {
  private readonly communicator: Communicator;
  private readonly storage: IStorage;
  private initPromise: Promise<void>;
  public accounts: Address[] = [];
  public chain: Chain = { id: DEFAULT_CHAIN_ID };

  constructor({ appMetadata, chain, onDisconnectCallback, storage }: Readonly<GeminiProviderConfig>) {
    this.communicator = new Communicator({
      appMetadata,
      onDisconnectCallback,
    });
    // Use provided storage or create default GeminiStorage for web
    this.storage = storage || new GeminiStorage();

    // Initialize storage data - use provided chain config or fallback to default
    const fallbackChainId = chain?.id ?? DEFAULT_CHAIN_ID;
    const fallbackRpcUrl = chain?.rpcUrl ?? getDefaultRpcUrl(fallbackChainId);
    const defaultChain: Chain = {
      id: fallbackChainId,
      rpcUrl: fallbackRpcUrl,
    };
    this.initPromise = this.initializeFromStorage(defaultChain);
  }

  private async initializeFromStorage(defaultChain: Chain): Promise<void> {
    const fallbackChain: Chain = {
      ...defaultChain,
      rpcUrl: defaultChain.rpcUrl || getDefaultRpcUrl(defaultChain.id),
    };
    const [storedChain, storedAccounts] = await Promise.all([
      this.storage.loadObject<Chain>(STORAGE_ETH_ACTIVE_CHAIN_KEY, fallbackChain),
      this.storage.loadObject<Address[]>(STORAGE_ETH_ACCOUNTS_KEY, this.accounts),
    ]);

    // Ensure chain has rpcUrl fallback
    this.chain = {
      ...storedChain,
      rpcUrl: storedChain.rpcUrl || getDefaultRpcUrl(storedChain.id),
    };
    this.accounts = storedAccounts;
  }

  private async ensureInitialized(): Promise<void> {
    await this.initPromise;
  }

  async connect(): Promise<Address[]> {
    await this.ensureInitialized();
    const response = await this.sendMessageToPopup<GeminiSdkMessage, ConnectResponse>({
      chainId: this.chain.id,
      event: GeminiSdkEvent.SDK_CONNECT,
      origin: window.location.origin,
    });

    this.accounts = response.data.address ? [response.data.address] : [];
    await this.storage.storeObject(STORAGE_ETH_ACCOUNTS_KEY, this.accounts);

    return this.accounts;
  }

  async disconnect(): Promise<void> {
    await this.ensureInitialized();
    this.accounts = [];
    await this.storage.storeObject(STORAGE_ETH_ACCOUNTS_KEY, this.accounts);
  }

  async switchChain({ id }: SwitchChainParameters): Promise<string | null> {
    await this.ensureInitialized();
    // If chain is supported return response immediately
    if (isChainSupportedByGeminiSw(id)) {
      this.chain = {
        id,
        rpcUrl: getDefaultRpcUrl(id),
      };
      // Store new active chain with rpcUrl
      await this.storage.storeObject(STORAGE_ETH_ACTIVE_CHAIN_KEY, this.chain);
      // Per EIP-3326, must return null if chain switch was success
      return null;
    }

    // Message sdk to inform user of error
    const response = await this.sendMessageToPopup<GeminiSdkMessage, SwitchChainResponse>({
      chainId: this.chain.id,
      data: id,
      event: GeminiSdkEvent.SDK_SWITCH_CHAIN,
      origin: window.location.origin,
    });

    // Return error message
    return response.data.error ?? "Unsupported chain.";
  }

  async sendTransaction(txData: TransactionRequest): Promise<SendTransactionResponse["data"]> {
    await this.ensureInitialized();
    const response = await this.sendMessageToPopup<GeminiSdkSendTransaction, SendTransactionResponse>({
      chainId: this.chain.id,
      data: txData,
      event: GeminiSdkEvent.SDK_SEND_TRANSACTION,
      origin: window.location.origin,
    });

    return response.data;
  }

  async signData({ message }: SignMessageParameters): Promise<SignMessageResponse["data"]> {
    await this.ensureInitialized();
    const response = await this.sendMessageToPopup<GeminiSdkSignMessage, SignMessageResponse>({
      chainId: this.chain.id,
      data: { message },
      event: GeminiSdkEvent.SDK_SIGN_DATA,
      origin: window.location.origin,
    });

    return response.data;
  }

  async signTypedData({
    message,
    types,
    primaryType,
    domain,
  }: SignTypedDataParameters): Promise<SignTypedDataResponse["data"]> {
    await this.ensureInitialized();
    const response = await this.sendMessageToPopup<GeminiSdkSignTypedData, SignTypedDataResponse>({
      chainId: this.chain.id,
      data: {
        domain,
        message,
        primaryType,
        types,
      },
      event: GeminiSdkEvent.SDK_SIGN_TYPED_DATA,
      origin: window.location.origin,
    });
    return response.data;
  }

  async openSettings(): Promise<void> {
    await this.ensureInitialized();
    await this.sendMessageToPopup<GeminiSdkMessage, GeminiSdkMessageResponse>({
      chainId: this.chain.id,
      data: {},
      event: GeminiSdkEvent.SDK_OPEN_SETTINGS,
      origin: window.location.origin,
    });
  }

  // EIP-5792 Wallet Call API Methods

  getCapabilities(requestedChainIds?: string[]): WalletCapabilities {
    const capabilities: WalletCapabilities = {};
    const chainIds = requestedChainIds?.map(id => parseInt(id, 16)) || [this.chain.id];

    for (const chainId of chainIds) {
      const chainIdHex = hexStringFromNumber(chainId);
      capabilities[chainIdHex] = {
        atomic: {
          status: "supported", // Smart accounts support atomic batch execution
        },
        paymasterService: {
          supported: true,
        },
      };
    }

    return capabilities;
  }

  async sendCalls(params: SendCallsParams): Promise<SendCallsResponse> {
    await this.ensureInitialized();

    // Generate unique bundle ID
    const batchId = window?.crypto?.randomUUID() || `batch-${Date.now()}-${Math.random()}`;

    // Validate chain ID matches current chain
    const requestedChainId = parseInt(params.chainId, 16);
    if (requestedChainId !== this.chain.id) {
      throw new Error(`Chain mismatch. Expected ${this.chain.id}, got ${requestedChainId}`);
    }

    // Validate we have calls
    if (!params.calls || params.calls.length === 0) {
      throw new Error("No calls provided");
    }

    // Create batch metadata
    const batchMetadata: CallBatchMetadata = {
      calls: params.calls,
      capabilities: params.capabilities,
      chainId: params.chainId,
      from: params.from,
      id: batchId,
      status: "pending",
      timestamp: Date.now(),
    };

    // Store batch metadata for status tracking
    const batches = await this.storage.loadObject<Record<string, CallBatchMetadata>>(STORAGE_CALL_BATCHES_KEY, {});
    batches[batchId] = batchMetadata;
    await this.storage.storeObject(STORAGE_CALL_BATCHES_KEY, batches);

    try {
      // Send the batch call through the popup/iframe
      // The wallet-web will handle this through the smart account client
      const response = await this.sendMessageToPopup<GeminiSdkMessage, SendTransactionResponse>({
        chainId: this.chain.id,
        data: {
          calls: params.calls,
        },
        event: GeminiSdkEvent.SDK_SEND_BATCH_CALLS,
        origin: window.location.origin,
      });

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      // Update batch with transaction hash
      batchMetadata.transactionHash = response.data.hash as Hex;
      batchMetadata.status = "pending";
      batches[batchId] = batchMetadata;
      await this.storage.storeObject(STORAGE_CALL_BATCHES_KEY, batches);

      // Return response with bundle ID and transaction hash
      return {
        capabilities: {
          caip345: {
            caip2: `eip155:${requestedChainId}`,
            transactionHashes: [response.data.hash as Hex],
          },
        },
        id: batchId,
      };
    } catch (error) {
      // Mark batch as failed
      batchMetadata.status = "failed";
      batches[batchId] = batchMetadata;
      await this.storage.storeObject(STORAGE_CALL_BATCHES_KEY, batches);
      throw error;
    }
  }

  async getCallsStatus(batchId: string): Promise<GetCallsStatusResponse> {
    await this.ensureInitialized();

    const batches = await this.storage.loadObject<Record<string, CallBatchMetadata>>(STORAGE_CALL_BATCHES_KEY, {});
    const batch = batches[batchId];

    if (!batch) {
      throw new Error(`Unknown bundle ID: ${batchId}`);
    }

    // If we have a transaction hash, check its status on chain
    if (batch.transactionHash && this.chain.rpcUrl) {
      try {
        const response = await fetch(this.chain.rpcUrl, {
          body: JSON.stringify({
            id: 1,
            jsonrpc: "2.0",
            method: "eth_getTransactionReceipt",
            params: [batch.transactionHash],
          }),
          headers: { "Content-Type": "application/json" },
          method: "POST",
        });

        const json = await response.json();
        const receipt = json.result;

        if (receipt) {
          // Update batch status based on receipt
          const receiptStatus = receipt.status === "0x1" ? "confirmed" : "reverted";
          batch.status = receiptStatus;
          batches[batchId] = batch;
          await this.storage.storeObject(STORAGE_CALL_BATCHES_KEY, batches);

          return {
            atomic: true,
            chainId: batch.chainId as Hex,
            id: batchId,
            receipts: [
              {
                blockHash: receipt.blockHash,
                blockNumber: receipt.blockNumber,
                gasUsed: receipt.gasUsed,
                logs: receipt.logs.map((log: { address: string; data: string; topics: string[] }) => ({
                  address: log.address,
                  data: log.data,
                  topics: log.topics,
                })),
                status: receiptStatus === "confirmed" ? "success" : "reverted",
                transactionHash: receipt.transactionHash,
              },
            ],
            status: receiptStatus === "confirmed" ? 200 : 500,
            version: "2.0.0",
          };
        }
      } catch (error) {
        // If receipt fetch fails, return pending status
        console.error("Failed to fetch transaction receipt:", error);
      }
    }

    // Return status based on batch metadata
    let statusCode: 100 | 200 | 400 | 500;
    switch (batch.status) {
      case "pending":
        statusCode = 100;
        break;
      case "confirmed":
        statusCode = 200;
        break;
      case "failed":
        statusCode = 400;
        break;
      case "reverted":
        statusCode = 500;
        break;
      default:
        statusCode = 100;
    }

    return {
      atomic: true,
      chainId: batch.chainId as Hex,
      id: batchId,
      status: statusCode,
      version: "2.0.0",
    };
  }

  async showCallsStatus(batchId: string): Promise<void> {
    await this.ensureInitialized();

    // Validate batch exists
    const batches = await this.storage.loadObject<Record<string, CallBatchMetadata>>(STORAGE_CALL_BATCHES_KEY, {});
    const batch = batches[batchId];

    if (!batch) {
      throw new Error(`Unknown bundle ID: ${batchId}`);
    }

    // Open SDK UI to show call status
    // TODO: Implement actual UI showing via communicator
    // For now, this just validates the batch exists
  }

  private sendMessageToPopup<M extends GeminiSdkMessage, R extends GeminiSdkMessageResponse>(
    request: GeminiSdkMessage,
  ): Promise<R> {
    return this.communicator.postRequestAndWaitForResponse<M, R>({
      ...request,
      requestId: window?.crypto?.randomUUID(),
    });
  }
}
