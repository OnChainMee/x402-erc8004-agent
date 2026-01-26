import { getTypesForEIP712Domain, serializeTransaction, hashMessage, } from "viem";
import { toNetworkScopedEvmServerAccount } from "./toNetworkScopedEvmServerAccount.js";
import { listTokenBalances, } from "../../actions/evm/listTokenBalances.js";
import { requestFaucet, } from "../../actions/evm/requestFaucet.js";
import { sendTransaction } from "../../actions/evm/sendTransaction.js";
import { useSpendPermission } from "../../actions/evm/spend-permissions/account.use.js";
import { createSwapQuote } from "../../actions/evm/swap/createSwapQuote.js";
import { sendSwapTransaction } from "../../actions/evm/swap/sendSwapTransaction.js";
import { accountTransferStrategy } from "../../actions/evm/transfer/accountTransferStrategy.js";
import { transfer } from "../../actions/evm/transfer/transfer.js";
import { Analytics } from "../../analytics.js";
/**
 * Creates a Server-managed EvmAccount instance from an existing EvmAccount.
 * Use this to interact with previously deployed EvmAccounts, rather than creating new ones.
 *
 * @param {CdpOpenApiClientType} apiClient - The API client.
 * @param {ToEvmServerAccountOptions} options - Configuration options.
 * @param {EvmAccount} options.account - The EvmAccount that was previously created.
 * @returns {EvmServerAccount} A configured EvmAccount instance ready for signing.
 */
export function toEvmServerAccount(apiClient, options) {
    const account = {
        address: options.account.address,
        async signMessage({ message }) {
            Analytics.trackAction({
                action: "sign_message",
                accountType: "evm_server",
            });
            if (typeof message === "string") {
                const result = await apiClient.signEvmMessage(options.account.address, {
                    message,
                });
                return result.signature;
            }
            const result = await apiClient.signEvmHash(options.account.address, {
                hash: hashMessage(message),
            });
            return result.signature;
        },
        async sign(parameters) {
            Analytics.trackAction({
                action: "sign",
                accountType: "evm_server",
            });
            const result = await apiClient.signEvmHash(options.account.address, {
                hash: parameters.hash,
            });
            return result.signature;
        },
        async signTransaction(transaction) {
            Analytics.trackAction({
                action: "sign_transaction",
                accountType: "evm_server",
            });
            const result = await apiClient.signEvmTransaction(options.account.address, {
                transaction: serializeTransaction(transaction),
            });
            return result.signedTransaction;
        },
        async signTypedData(parameters) {
            Analytics.trackAction({
                action: "sign_typed_data",
                accountType: "evm_server",
            });
            const { domain = {}, message, primaryType } = parameters;
            const types = {
                EIP712Domain: getTypesForEIP712Domain({ domain }),
                ...parameters.types,
            };
            const openApiMessage = {
                domain: domain,
                types,
                primaryType,
                message,
            };
            const result = await apiClient.signEvmTypedData(options.account.address, openApiMessage);
            return result.signature;
        },
        async transfer(transferArgs) {
            Analytics.trackAction({
                action: "transfer",
                accountType: "evm_server",
                properties: {
                    network: transferArgs.network,
                },
            });
            return transfer(apiClient, account, transferArgs, accountTransferStrategy);
        },
        async listTokenBalances(options) {
            Analytics.trackAction({
                action: "list_token_balances",
                accountType: "evm_server",
                properties: {
                    network: options.network,
                },
            });
            return listTokenBalances(apiClient, {
                ...options,
                address: this.address,
            });
        },
        async requestFaucet(options) {
            Analytics.trackAction({
                action: "request_faucet",
                accountType: "evm_server",
                properties: {
                    network: options.network,
                },
            });
            return requestFaucet(apiClient, {
                ...options,
                address: this.address,
            });
        },
        async sendTransaction(options) {
            Analytics.trackAction({
                action: "send_transaction",
                accountType: "evm_server",
                properties: {
                    network: options.network,
                },
            });
            return sendTransaction(apiClient, {
                ...options,
                address: this.address,
            });
        },
        async quoteSwap(options) {
            Analytics.trackAction({
                action: "quote_swap",
                accountType: "evm_server",
                properties: {
                    network: options.network,
                },
            });
            return createSwapQuote(apiClient, {
                ...options,
                taker: this.address,
            });
        },
        async swap(options) {
            Analytics.trackAction({
                action: "swap",
                accountType: "evm_server",
                properties: {
                    network: "network" in options ? options.network : undefined,
                },
            });
            return sendSwapTransaction(apiClient, {
                ...options,
                address: this.address,
                taker: this.address, // Always use account's address as taker
            });
        },
        async useSpendPermission(options) {
            Analytics.trackAction({
                action: "use_spend_permission",
                accountType: "evm_server",
                properties: {
                    network: options.network,
                },
            });
            return useSpendPermission(apiClient, this.address, options);
        },
        name: options.account.name,
        type: "evm-server",
        policies: options.account.policies,
        useNetwork: async (networkOrRpcUrl) => {
            Analytics.trackAction({
                action: "use_network",
                accountType: "evm_server",
                properties: {
                    network: networkOrRpcUrl,
                },
            });
            return toNetworkScopedEvmServerAccount({
                account,
                network: networkOrRpcUrl,
            });
        },
    };
    return account;
}
//# sourceMappingURL=toEvmServerAccount.js.map