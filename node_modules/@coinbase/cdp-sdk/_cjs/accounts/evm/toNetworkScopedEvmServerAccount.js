"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNetworkScopedEvmServerAccount = toNetworkScopedEvmServerAccount;
const chains_1 = require("viem/chains");
const chainToNetworkMapper_js_1 = require("./chainToNetworkMapper.js");
const networkCapabilities_js_1 = require("./networkCapabilities.js");
const resolveViemClients_js_1 = require("./resolveViemClients.js");
const transferWithViem_js_1 = require("../../actions/evm/transfer/transferWithViem.js");
const analytics_js_1 = require("../../analytics.js");
/**
 * Creates a Network-scoped Server-managed EvmAccount instance from an existing EvmAccount.
 * Use this to interact with previously deployed EvmAccounts on a specific network.
 *
 * @param {ToNetworkScopedEvmServerAccountOptions} options - Configuration options.
 * @param {EvmServerAccount} options.account - The EvmServerAccount that was previously created.
 * @param {string} options.network - The network to scope the account to.
 * @returns {NetworkScopedEvmServerAccount} A configured NetworkScopedEvmServerAccount instance ready for signing.
 */
async function toNetworkScopedEvmServerAccount(options) {
    const { publicClient, walletClient, chain } = await (0, resolveViemClients_js_1.resolveViemClients)({
        networkOrNodeUrl: options.network,
        account: options.account,
    });
    /*
     * Determine the actual network name from the resolved chain
     * This handles cases where options.network is an RPC URL
     */
    const resolvedNetworkName = (0, chainToNetworkMapper_js_1.mapChainToNetwork)(chain) ?? options.network;
    const shouldUseApiForSends = chain.id === chains_1.base.id ||
        chain.id === chains_1.baseSepolia.id ||
        chain.id === chains_1.mainnet.id ||
        chain.id === chains_1.sepolia.id;
    const account = {
        address: options.account.address,
        network: options.network,
        signMessage: options.account.signMessage,
        sign: options.account.sign,
        signTransaction: options.account.signTransaction,
        signTypedData: options.account.signTypedData,
        name: options.account.name,
        type: "evm-server",
        policies: options.account.policies,
        sendTransaction: async (txOpts) => {
            if (shouldUseApiForSends) {
                return options.account.sendTransaction({
                    ...txOpts,
                    network: (0, chainToNetworkMapper_js_1.mapChainToNetwork)(chain),
                });
            }
            else {
                analytics_js_1.Analytics.trackAction({
                    action: "send_transaction",
                    accountType: "evm_server",
                    properties: {
                        network: options.network,
                        managed: true,
                    },
                });
                const hash = await walletClient.sendTransaction(txOpts.transaction);
                return { transactionHash: hash };
            }
        },
        transfer: async (transferArgs) => {
            if (shouldUseApiForSends) {
                return options.account.transfer({
                    ...transferArgs,
                    network: (0, chainToNetworkMapper_js_1.mapChainToNetwork)(chain),
                });
            }
            else {
                analytics_js_1.Analytics.trackAction({
                    action: "transfer",
                    accountType: "evm_server",
                    properties: {
                        network: options.network,
                        managed: true,
                    },
                });
                return (0, transferWithViem_js_1.transferWithViem)(walletClient, account, transferArgs);
            }
        },
        waitForTransactionReceipt: async (waitOptions) => {
            analytics_js_1.Analytics.trackAction({
                action: "wait_for_transaction_receipt",
                accountType: "evm_server",
                properties: {
                    managed: true,
                },
            });
            if ("transactionHash" in waitOptions) {
                return publicClient.waitForTransactionReceipt({
                    hash: waitOptions.transactionHash,
                });
            }
            return publicClient.waitForTransactionReceipt(waitOptions);
        },
    };
    if ((0, networkCapabilities_js_1.isMethodSupportedOnNetwork)("listTokenBalances", resolvedNetworkName)) {
        Object.assign(account, {
            listTokenBalances: async (listTokenBalancesOptions) => {
                analytics_js_1.Analytics.trackAction({
                    action: "list_token_balances",
                    accountType: "evm_server",
                    properties: {
                        managed: true,
                    },
                });
                return options.account.listTokenBalances({
                    ...listTokenBalancesOptions,
                    network: options.network,
                });
            },
        });
    }
    if ((0, networkCapabilities_js_1.isMethodSupportedOnNetwork)("requestFaucet", resolvedNetworkName)) {
        Object.assign(account, {
            requestFaucet: async (faucetOptions) => {
                analytics_js_1.Analytics.trackAction({
                    action: "request_faucet",
                    accountType: "evm_server",
                    properties: {
                        managed: true,
                    },
                });
                return options.account.requestFaucet({
                    ...faucetOptions,
                    network: chain.id === chains_1.baseSepolia.id ? "base-sepolia" : "ethereum-sepolia",
                });
            },
        });
    }
    if ((0, networkCapabilities_js_1.isMethodSupportedOnNetwork)("quoteSwap", resolvedNetworkName)) {
        Object.assign(account, {
            quoteSwap: async (quoteSwapOptions) => {
                analytics_js_1.Analytics.trackAction({
                    action: "quote_swap",
                    accountType: "evm_server",
                    properties: {
                        managed: true,
                    },
                });
                return options.account.quoteSwap({
                    ...quoteSwapOptions,
                    network: options.network,
                });
            },
        });
    }
    if ((0, networkCapabilities_js_1.isMethodSupportedOnNetwork)("swap", resolvedNetworkName)) {
        Object.assign(account, {
            swap: async (swapOptions) => {
                analytics_js_1.Analytics.trackAction({
                    action: "swap",
                    accountType: "evm_server",
                    properties: {
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
                return options.account.swap(swapOptionsWithNetwork);
            },
        });
    }
    if ((0, networkCapabilities_js_1.isMethodSupportedOnNetwork)("useSpendPermission", resolvedNetworkName)) {
        Object.assign(account, {
            useSpendPermission: async (spendPermissionOptions) => {
                analytics_js_1.Analytics.trackAction({
                    action: "use_spend_permission",
                    accountType: "evm_server",
                    properties: {
                        managed: true,
                    },
                });
                return options.account.useSpendPermission({
                    ...spendPermissionOptions,
                    network: options.network,
                });
            },
        });
    }
    return account;
}
//# sourceMappingURL=toNetworkScopedEvmServerAccount.js.map