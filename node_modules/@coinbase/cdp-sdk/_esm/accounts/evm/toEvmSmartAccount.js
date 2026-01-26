import { resolveNetworkToChain } from "./networkToChainResolver.js";
import { toNetworkScopedEvmSmartAccount } from "./toNetworkScopedEvmSmartAccount.js";
import { getUserOperation } from "../../actions/evm/getUserOperation.js";
import { listTokenBalances, } from "../../actions/evm/listTokenBalances.js";
import { requestFaucet, } from "../../actions/evm/requestFaucet.js";
import { sendUserOperation, } from "../../actions/evm/sendUserOperation.js";
import { signAndWrapTypedDataForSmartAccount } from "../../actions/evm/signAndWrapTypedDataForSmartAccount.js";
import { useSpendPermission } from "../../actions/evm/spend-permissions/smartAccount.use.js";
import { createSwapQuote } from "../../actions/evm/swap/createSwapQuote.js";
import { sendSwapOperation } from "../../actions/evm/swap/sendSwapOperation.js";
import { smartAccountTransferStrategy } from "../../actions/evm/transfer/smartAccountTransferStrategy.js";
import { transfer } from "../../actions/evm/transfer/transfer.js";
import { waitForUserOperation, } from "../../actions/evm/waitForUserOperation.js";
import { Analytics } from "../../analytics.js";
/**
 * Creates a EvmSmartAccount instance from an existing EvmSmartAccount and owner.
 * Use this to interact with previously deployed EvmSmartAccounts, rather than creating new ones.
 *
 * The owner must be the original owner of the evm smart account.
 *
 * @param {CdpOpenApiClientType} apiClient - The API client.
 * @param {ToEvmSmartAccountOptions} options - Configuration options.
 * @param {EvmSmartAccount} options.smartAccount - The deployed evm smart account.
 * @param {EvmAccount} options.owner - The owner which signs for the smart account.
 * @returns {EvmSmartAccount} A configured EvmSmartAccount instance ready for user operation submission.
 */
export function toEvmSmartAccount(apiClient, options) {
    const account = {
        address: options.smartAccount.address,
        owners: [options.owner],
        policies: options.smartAccount.policies,
        async transfer(transferArgs) {
            Analytics.trackAction({
                action: "transfer",
                accountType: "evm_smart",
                properties: {
                    network: transferArgs.network,
                },
            });
            return transfer(apiClient, account, transferArgs, smartAccountTransferStrategy);
        },
        async listTokenBalances(options) {
            Analytics.trackAction({
                action: "list_token_balances",
                accountType: "evm_smart",
                properties: {
                    network: options.network,
                },
            });
            return listTokenBalances(apiClient, {
                ...options,
                address: this.address,
            });
        },
        async sendUserOperation(options) {
            Analytics.trackAction({
                action: "send_user_operation",
                accountType: "evm_smart",
                properties: {
                    network: options.network,
                },
            });
            return sendUserOperation(apiClient, {
                ...options,
                smartAccount: account,
            });
        },
        async waitForUserOperation(options) {
            Analytics.trackAction({
                action: "wait_for_user_operation",
                accountType: "evm_smart",
            });
            return waitForUserOperation(apiClient, {
                ...options,
                smartAccountAddress: account.address,
            });
        },
        async getUserOperation(options) {
            Analytics.trackAction({
                action: "get_user_operation",
                accountType: "evm_smart",
            });
            return getUserOperation(apiClient, {
                ...options,
                smartAccount: account,
            });
        },
        async requestFaucet(options) {
            Analytics.trackAction({
                action: "request_faucet",
                accountType: "evm_smart",
                properties: {
                    network: options.network,
                },
            });
            return requestFaucet(apiClient, {
                ...options,
                address: account.address,
            });
        },
        async quoteSwap(options) {
            Analytics.trackAction({
                action: "quote_swap",
                accountType: "evm_smart",
                properties: {
                    network: options.network,
                },
            });
            return createSwapQuote(apiClient, {
                ...options,
                taker: this.address, // Always use smart account's address as taker
                signerAddress: this.owners[0].address, // Always use owner's address as signer
                smartAccount: account, // Pass smart account for execute method support
            });
        },
        async swap(options) {
            Analytics.trackAction({
                action: "swap",
                accountType: "evm_smart",
                properties: {
                    network: "network" in options ? options.network : undefined,
                },
            });
            return sendSwapOperation(apiClient, {
                ...options,
                smartAccount: account,
                taker: this.address, // Always use smart account's address as taker
                signerAddress: this.owners[0].address, // Always use owner's address as signer
            });
        },
        async signTypedData(options) {
            Analytics.trackAction({
                action: "sign_typed_data",
                accountType: "evm_smart",
                properties: {
                    network: options.network,
                },
            });
            const result = await signAndWrapTypedDataForSmartAccount(apiClient, {
                chainId: BigInt(resolveNetworkToChain(options.network).id),
                smartAccount: account,
                typedData: options,
            });
            return result.signature;
        },
        async useSpendPermission(options) {
            Analytics.trackAction({
                action: "use_spend_permission",
                accountType: "evm_smart",
                properties: {
                    network: options.network,
                },
            });
            return useSpendPermission(apiClient, account, options);
        },
        name: options.smartAccount.name,
        type: "evm-smart",
        useNetwork: async (network) => {
            Analytics.trackAction({
                action: "use_network",
                accountType: "evm_smart",
                properties: {
                    network,
                },
            });
            return toNetworkScopedEvmSmartAccount(apiClient, {
                smartAccount: account,
                owner: options.owner,
                network,
            });
        },
    };
    return account;
}
//# sourceMappingURL=toEvmSmartAccount.js.map