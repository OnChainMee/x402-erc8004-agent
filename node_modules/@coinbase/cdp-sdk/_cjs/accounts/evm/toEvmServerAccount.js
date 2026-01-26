"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEvmServerAccount = toEvmServerAccount;
const viem_1 = require("viem");
const toNetworkScopedEvmServerAccount_js_1 = require("./toNetworkScopedEvmServerAccount.js");
const listTokenBalances_js_1 = require("../../actions/evm/listTokenBalances.js");
const requestFaucet_js_1 = require("../../actions/evm/requestFaucet.js");
const sendTransaction_js_1 = require("../../actions/evm/sendTransaction.js");
const account_use_js_1 = require("../../actions/evm/spend-permissions/account.use.js");
const createSwapQuote_js_1 = require("../../actions/evm/swap/createSwapQuote.js");
const sendSwapTransaction_js_1 = require("../../actions/evm/swap/sendSwapTransaction.js");
const accountTransferStrategy_js_1 = require("../../actions/evm/transfer/accountTransferStrategy.js");
const transfer_js_1 = require("../../actions/evm/transfer/transfer.js");
const analytics_js_1 = require("../../analytics.js");
/**
 * Creates a Server-managed EvmAccount instance from an existing EvmAccount.
 * Use this to interact with previously deployed EvmAccounts, rather than creating new ones.
 *
 * @param {CdpOpenApiClientType} apiClient - The API client.
 * @param {ToEvmServerAccountOptions} options - Configuration options.
 * @param {EvmAccount} options.account - The EvmAccount that was previously created.
 * @returns {EvmServerAccount} A configured EvmAccount instance ready for signing.
 */
function toEvmServerAccount(apiClient, options) {
    const account = {
        address: options.account.address,
        async signMessage({ message }) {
            analytics_js_1.Analytics.trackAction({
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
                hash: (0, viem_1.hashMessage)(message),
            });
            return result.signature;
        },
        async sign(parameters) {
            analytics_js_1.Analytics.trackAction({
                action: "sign",
                accountType: "evm_server",
            });
            const result = await apiClient.signEvmHash(options.account.address, {
                hash: parameters.hash,
            });
            return result.signature;
        },
        async signTransaction(transaction) {
            analytics_js_1.Analytics.trackAction({
                action: "sign_transaction",
                accountType: "evm_server",
            });
            const result = await apiClient.signEvmTransaction(options.account.address, {
                transaction: (0, viem_1.serializeTransaction)(transaction),
            });
            return result.signedTransaction;
        },
        async signTypedData(parameters) {
            analytics_js_1.Analytics.trackAction({
                action: "sign_typed_data",
                accountType: "evm_server",
            });
            const { domain = {}, message, primaryType } = parameters;
            const types = {
                EIP712Domain: (0, viem_1.getTypesForEIP712Domain)({ domain }),
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
            analytics_js_1.Analytics.trackAction({
                action: "transfer",
                accountType: "evm_server",
                properties: {
                    network: transferArgs.network,
                },
            });
            return (0, transfer_js_1.transfer)(apiClient, account, transferArgs, accountTransferStrategy_js_1.accountTransferStrategy);
        },
        async listTokenBalances(options) {
            analytics_js_1.Analytics.trackAction({
                action: "list_token_balances",
                accountType: "evm_server",
                properties: {
                    network: options.network,
                },
            });
            return (0, listTokenBalances_js_1.listTokenBalances)(apiClient, {
                ...options,
                address: this.address,
            });
        },
        async requestFaucet(options) {
            analytics_js_1.Analytics.trackAction({
                action: "request_faucet",
                accountType: "evm_server",
                properties: {
                    network: options.network,
                },
            });
            return (0, requestFaucet_js_1.requestFaucet)(apiClient, {
                ...options,
                address: this.address,
            });
        },
        async sendTransaction(options) {
            analytics_js_1.Analytics.trackAction({
                action: "send_transaction",
                accountType: "evm_server",
                properties: {
                    network: options.network,
                },
            });
            return (0, sendTransaction_js_1.sendTransaction)(apiClient, {
                ...options,
                address: this.address,
            });
        },
        async quoteSwap(options) {
            analytics_js_1.Analytics.trackAction({
                action: "quote_swap",
                accountType: "evm_server",
                properties: {
                    network: options.network,
                },
            });
            return (0, createSwapQuote_js_1.createSwapQuote)(apiClient, {
                ...options,
                taker: this.address,
            });
        },
        async swap(options) {
            analytics_js_1.Analytics.trackAction({
                action: "swap",
                accountType: "evm_server",
                properties: {
                    network: "network" in options ? options.network : undefined,
                },
            });
            return (0, sendSwapTransaction_js_1.sendSwapTransaction)(apiClient, {
                ...options,
                address: this.address,
                taker: this.address, // Always use account's address as taker
            });
        },
        async useSpendPermission(options) {
            analytics_js_1.Analytics.trackAction({
                action: "use_spend_permission",
                accountType: "evm_server",
                properties: {
                    network: options.network,
                },
            });
            return (0, account_use_js_1.useSpendPermission)(apiClient, this.address, options);
        },
        name: options.account.name,
        type: "evm-server",
        policies: options.account.policies,
        useNetwork: async (networkOrRpcUrl) => {
            analytics_js_1.Analytics.trackAction({
                action: "use_network",
                accountType: "evm_server",
                properties: {
                    network: networkOrRpcUrl,
                },
            });
            return (0, toNetworkScopedEvmServerAccount_js_1.toNetworkScopedEvmServerAccount)({
                account,
                network: networkOrRpcUrl,
            });
        },
    };
    return account;
}
//# sourceMappingURL=toEvmServerAccount.js.map