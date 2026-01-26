"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNetworkScopedEvmSmartAccount = toNetworkScopedEvmSmartAccount;
const getBaseNodeRpcUrl_js_1 = require("./getBaseNodeRpcUrl.js");
const networkCapabilities_js_1 = require("./networkCapabilities.js");
const getUserOperation_js_1 = require("../../actions/evm/getUserOperation.js");
const listTokenBalances_js_1 = require("../../actions/evm/listTokenBalances.js");
const requestFaucet_js_1 = require("../../actions/evm/requestFaucet.js");
const sendUserOperation_js_1 = require("../../actions/evm/sendUserOperation.js");
const createSwapQuote_js_1 = require("../../actions/evm/swap/createSwapQuote.js");
const sendSwapOperation_js_1 = require("../../actions/evm/swap/sendSwapOperation.js");
const smartAccountTransferStrategy_js_1 = require("../../actions/evm/transfer/smartAccountTransferStrategy.js");
const transfer_js_1 = require("../../actions/evm/transfer/transfer.js");
const waitForUserOperation_js_1 = require("../../actions/evm/waitForUserOperation.js");
const analytics_js_1 = require("../../analytics.js");
/**
 * Creates a NetworkScopedEvmSmartAccount instance from an existing EvmSmartAccount and owner.
 * Use this to interact with previously deployed EvmSmartAccounts, rather than creating new ones.
 *
 * The owner must be the original owner of the evm smart account.
 *
 * @param {CdpOpenApiClientType} apiClient - The API client.
 * @param {ToNetworkScopedEvmSmartAccountOptions} options - Configuration options.
 * @param {EvmSmartAccount} options.smartAccount - The deployed evm smart account.
 * @param {EvmAccount} options.owner - The owner which signs for the smart account.
 * @param {KnownEvmNetworks} options.network - The network to scope the smart account to.
 * @returns {NetworkScopedEvmSmartAccount} A configured NetworkScopedEvmSmartAccount instance ready for user operation submission.
 */
async function toNetworkScopedEvmSmartAccount(apiClient, options) {
    const paymasterUrl = await (async () => {
        if (options.network === "base") {
            return (0, getBaseNodeRpcUrl_js_1.getBaseNodeRpcUrl)(options.network);
        }
        return undefined;
    })();
    const account = {
        address: options.smartAccount.address,
        network: options.network,
        owners: [options.owner],
        name: options.smartAccount.name,
        type: "evm-smart",
        sendUserOperation: async (userOpOptions) => {
            analytics_js_1.Analytics.trackAction({
                action: "send_user_operation",
                accountType: "evm_smart",
                properties: {
                    network: options.network,
                    managed: true,
                },
            });
            return (0, sendUserOperation_js_1.sendUserOperation)(apiClient, {
                ...userOpOptions,
                smartAccount: options.smartAccount,
                network: options.network,
                paymasterUrl: userOpOptions.paymasterUrl ?? paymasterUrl,
            });
        },
        waitForUserOperation: async (waitOptions) => {
            analytics_js_1.Analytics.trackAction({
                action: "wait_for_user_operation",
                accountType: "evm_smart",
                properties: {
                    managed: true,
                },
            });
            return (0, waitForUserOperation_js_1.waitForUserOperation)(apiClient, {
                ...waitOptions,
                smartAccountAddress: options.smartAccount.address,
            });
        },
        getUserOperation: async (getOptions) => {
            analytics_js_1.Analytics.trackAction({
                action: "get_user_operation",
                accountType: "evm_smart",
                properties: {
                    managed: true,
                },
            });
            return (0, getUserOperation_js_1.getUserOperation)(apiClient, {
                ...getOptions,
                smartAccount: options.smartAccount,
            });
        },
    };
    if ((0, networkCapabilities_js_1.isMethodSupportedOnNetwork)("transfer", options.network)) {
        Object.assign(account, {
            transfer: async (transferOptions) => {
                analytics_js_1.Analytics.trackAction({
                    action: "transfer",
                    accountType: "evm_smart",
                    properties: {
                        network: options.network,
                        managed: true,
                    },
                });
                return (0, transfer_js_1.transfer)(apiClient, options.smartAccount, {
                    ...transferOptions,
                    network: options.network,
                    paymasterUrl: transferOptions.paymasterUrl ?? paymasterUrl,
                }, smartAccountTransferStrategy_js_1.smartAccountTransferStrategy);
            },
        });
    }
    if ((0, networkCapabilities_js_1.isMethodSupportedOnNetwork)("listTokenBalances", options.network)) {
        Object.assign(account, {
            listTokenBalances: async (listOptions) => {
                analytics_js_1.Analytics.trackAction({
                    action: "list_token_balances",
                    accountType: "evm_smart",
                    properties: {
                        network: options.network,
                        managed: true,
                    },
                });
                return (0, listTokenBalances_js_1.listTokenBalances)(apiClient, {
                    ...listOptions,
                    address: options.smartAccount.address,
                    network: options.network,
                });
            },
        });
    }
    if ((0, networkCapabilities_js_1.isMethodSupportedOnNetwork)("requestFaucet", options.network)) {
        Object.assign(account, {
            requestFaucet: async (faucetOptions) => {
                analytics_js_1.Analytics.trackAction({
                    action: "request_faucet",
                    accountType: "evm_smart",
                    properties: {
                        network: options.network,
                        managed: true,
                    },
                });
                return (0, requestFaucet_js_1.requestFaucet)(apiClient, {
                    ...faucetOptions,
                    address: options.smartAccount.address,
                    network: options.network,
                });
            },
        });
    }
    if ((0, networkCapabilities_js_1.isMethodSupportedOnNetwork)("quoteSwap", options.network)) {
        Object.assign(account, {
            quoteSwap: async (quoteSwapOptions) => {
                analytics_js_1.Analytics.trackAction({
                    action: "quote_swap",
                    accountType: "evm_smart",
                    properties: {
                        network: options.network,
                        managed: true,
                    },
                });
                return (0, createSwapQuote_js_1.createSwapQuote)(apiClient, {
                    ...quoteSwapOptions,
                    taker: options.smartAccount.address,
                    signerAddress: options.owner.address,
                    smartAccount: options.smartAccount,
                    network: options.network,
                });
            },
        });
    }
    if ((0, networkCapabilities_js_1.isMethodSupportedOnNetwork)("swap", options.network)) {
        Object.assign(account, {
            swap: async (swapOptions) => {
                analytics_js_1.Analytics.trackAction({
                    action: "swap",
                    accountType: "evm_smart",
                    properties: {
                        network: options.network,
                        managed: true,
                    },
                });
                /*
                 * For network-scoped accounts, we need to add the network parameter
                 * for inline swaps while preserving quote-based swaps as-is
                 */
                const swapOptionsWithNetwork = "swapQuote" in swapOptions
                    ? swapOptions // Quote-based swap, pass through
                    : { ...swapOptions, network: options.network }; // Inline swap, add network
                return (0, sendSwapOperation_js_1.sendSwapOperation)(apiClient, {
                    ...swapOptionsWithNetwork,
                    smartAccount: options.smartAccount,
                    taker: options.smartAccount.address,
                    signerAddress: options.owner.address,
                    paymasterUrl: swapOptions.paymasterUrl ?? paymasterUrl,
                });
            },
        });
    }
    if ((0, networkCapabilities_js_1.isMethodSupportedOnNetwork)("useSpendPermission", options.network)) {
        Object.assign(account, {
            useSpendPermission: async (spendPermissionOptions) => {
                analytics_js_1.Analytics.trackAction({
                    action: "use_spend_permission",
                    accountType: "evm_smart",
                    properties: {
                        managed: true,
                    },
                });
                return options.smartAccount.useSpendPermission({
                    ...spendPermissionOptions,
                    network: options.network,
                });
            },
        });
    }
    return account;
}
//# sourceMappingURL=toNetworkScopedEvmSmartAccount.js.map