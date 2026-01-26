"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSolanaAccount = toSolanaAccount;
const requestFaucet_js_1 = require("../../actions/solana/requestFaucet.js");
const sendTransaction_js_1 = require("../../actions/solana/sendTransaction.js");
const signMessage_js_1 = require("../../actions/solana/signMessage.js");
const signTransaction_js_1 = require("../../actions/solana/signTransaction.js");
const transfer_js_1 = require("../../actions/solana/transfer.js");
const analytics_js_1 = require("../../analytics.js");
/**
 * Creates a Solana account instance with actions from an existing Solana account.
 * Use this to interact with previously deployed Solana accounts, rather than creating new ones.
 *
 * @param {CdpOpenApiClientType} apiClient - The API client.
 * @param {ToSolanaAccountOptions} options - Configuration options.
 * @param {Account} options.account - The Solana account that was previously created.
 * @returns {SolanaAccount} A configured SolanaAccount instance ready for signing.
 */
function toSolanaAccount(apiClient, options) {
    const account = {
        address: options.account.address,
        name: options.account.name,
        policies: options.account.policies,
        async requestFaucet(options) {
            analytics_js_1.Analytics.trackAction({
                action: "request_faucet",
                accountType: "solana",
            });
            return (0, requestFaucet_js_1.requestFaucet)(apiClient, {
                ...options,
                address: account.address,
            });
        },
        async signMessage(options) {
            analytics_js_1.Analytics.trackAction({
                action: "sign_message",
                accountType: "solana",
            });
            return (0, signMessage_js_1.signMessage)(apiClient, {
                ...options,
                address: account.address,
            });
        },
        async signTransaction(options) {
            analytics_js_1.Analytics.trackAction({
                action: "sign_transaction",
                accountType: "solana",
            });
            return (0, signTransaction_js_1.signTransaction)(apiClient, {
                ...options,
                address: account.address,
            });
        },
        async sendTransaction(options) {
            analytics_js_1.Analytics.trackAction({
                action: "send_transaction",
                accountType: "solana",
            });
            return (0, sendTransaction_js_1.sendTransaction)(apiClient, {
                ...options,
            });
        },
        async transfer(options) {
            analytics_js_1.Analytics.trackAction({
                action: "transfer",
                accountType: "solana",
                properties: {
                    network: options.network,
                },
            });
            return (0, transfer_js_1.transfer)(apiClient, {
                ...options,
                from: account.address,
            });
        },
    };
    return account;
}
//# sourceMappingURL=toSolanaAccount.js.map