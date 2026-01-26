import type { EvmAccount, EvmSmartAccount, KnownEvmNetworks, NetworkScopedEvmSmartAccount } from "./types.js";
import type { CdpOpenApiClientType } from "../../openapi-client/index.js";
/**
 * Options for converting a pre-existing EvmSmartAccount and owner to a NetworkScopedEvmSmartAccount
 */
export type ToNetworkScopedEvmSmartAccountOptions = {
    /** The pre-existing EvmSmartAccount. */
    smartAccount: EvmSmartAccount;
    /** The network to scope the smart account object to. */
    network: KnownEvmNetworks;
    /** The owner of the smart account. */
    owner: EvmAccount;
};
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
export declare function toNetworkScopedEvmSmartAccount<Network extends KnownEvmNetworks>(apiClient: CdpOpenApiClientType, options: ToNetworkScopedEvmSmartAccountOptions & {
    network: Network;
}): Promise<NetworkScopedEvmSmartAccount<Network>>;
//# sourceMappingURL=toNetworkScopedEvmSmartAccount.d.ts.map