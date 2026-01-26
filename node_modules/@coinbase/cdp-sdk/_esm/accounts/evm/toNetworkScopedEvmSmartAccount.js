import { getBaseNodeRpcUrl } from "./getBaseNodeRpcUrl.js";
import { isMethodSupportedOnNetwork } from "./networkCapabilities.js";
import { getUserOperation } from "../../actions/evm/getUserOperation.js";
import { listTokenBalances } from "../../actions/evm/listTokenBalances.js";
import { requestFaucet } from "../../actions/evm/requestFaucet.js";
import { sendUserOperation } from "../../actions/evm/sendUserOperation.js";
import { createSwapQuote } from "../../actions/evm/swap/createSwapQuote.js";
import { sendSwapOperation } from "../../actions/evm/swap/sendSwapOperation.js";
import { smartAccountTransferStrategy } from "../../actions/evm/transfer/smartAccountTransferStrategy.js";
import { transfer } from "../../actions/evm/transfer/transfer.js";
import { waitForUserOperation } from "../../actions/evm/waitForUserOperation.js";
import { Analytics } from "../../analytics.js";
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
export async function toNetworkScopedEvmSmartAccount(apiClient, options) {
    const paymasterUrl = await (async () => {
        if (options.network === "base") {
            return getBaseNodeRpcUrl(options.network);
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
            Analytics.trackAction({
                action: "send_user_operation",
                accountType: "evm_smart",
                properties: {
                    network: options.network,
                    managed: true,
                },
            });
            return sendUserOperation(apiClient, {
                ...userOpOptions,
                smartAccount: options.smartAccount,
                network: options.network,
                paymasterUrl: userOpOptions.paymasterUrl ?? paymasterUrl,
            });
        },
        waitForUserOperation: async (waitOptions) => {
            Analytics.trackAction({
                action: "wait_for_user_operation",
                accountType: "evm_smart",
                properties: {
                    managed: true,
                },
            });
            return waitForUserOperation(apiClient, {
                ...waitOptions,
                smartAccountAddress: options.smartAccount.address,
            });
        },
        getUserOperation: async (getOptions) => {
            Analytics.trackAction({
                action: "get_user_operation",
                accountType: "evm_smart",
                properties: {
                    managed: true,
                },
            });
            return getUserOperation(apiClient, {
                ...getOptions,
                smartAccount: options.smartAccount,
            });
        },
    };
    if (isMethodSupportedOnNetwork("transfer", options.network)) {
        Object.assign(account, {
            transfer: async (transferOptions) => {
                Analytics.trackAction({
                    action: "transfer",
                    accountType: "evm_smart",
                    properties: {
                        network: options.network,
                        managed: true,
                    },
                });
                return transfer(apiClient, options.smartAccount, {
                    ...transferOptions,
                    network: options.network,
                    paymasterUrl: transferOptions.paymasterUrl ?? paymasterUrl,
                }, smartAccountTransferStrategy);
            },
        });
    }
    if (isMethodSupportedOnNetwork("listTokenBalances", options.network)) {
        Object.assign(account, {
            listTokenBalances: async (listOptions) => {
                Analytics.trackAction({
                    action: "list_token_balances",
                    accountType: "evm_smart",
                    properties: {
                        network: options.network,
                        managed: true,
                    },
                });
                return listTokenBalances(apiClient, {
                    ...listOptions,
                    address: options.smartAccount.address,
                    network: options.network,
                });
            },
        });
    }
    if (isMethodSupportedOnNetwork("requestFaucet", options.network)) {
        Object.assign(account, {
            requestFaucet: async (faucetOptions) => {
                Analytics.trackAction({
                    action: "request_faucet",
                    accountType: "evm_smart",
                    properties: {
                        network: options.network,
                        managed: true,
                    },
                });
                return requestFaucet(apiClient, {
                    ...faucetOptions,
                    address: options.smartAccount.address,
                    network: options.network,
                });
            },
        });
    }
    if (isMethodSupportedOnNetwork("quoteSwap", options.network)) {
        Object.assign(account, {
            quoteSwap: async (quoteSwapOptions) => {
                Analytics.trackAction({
                    action: "quote_swap",
                    accountType: "evm_smart",
                    properties: {
                        network: options.network,
                        managed: true,
                    },
                });
                return createSwapQuote(apiClient, {
                    ...quoteSwapOptions,
                    taker: options.smartAccount.address,
                    signerAddress: options.owner.address,
                    smartAccount: options.smartAccount,
                    network: options.network,
                });
            },
        });
    }
    if (isMethodSupportedOnNetwork("swap", options.network)) {
        Object.assign(account, {
            swap: async (swapOptions) => {
                Analytics.trackAction({
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
                return sendSwapOperation(apiClient, {
                    ...swapOptionsWithNetwork,
                    smartAccount: options.smartAccount,
                    taker: options.smartAccount.address,
                    signerAddress: options.owner.address,
                    paymasterUrl: swapOptions.paymasterUrl ?? paymasterUrl,
                });
            },
        });
    }
    if (isMethodSupportedOnNetwork("useSpendPermission", options.network)) {
        Object.assign(account, {
            useSpendPermission: async (spendPermissionOptions) => {
                Analytics.trackAction({
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