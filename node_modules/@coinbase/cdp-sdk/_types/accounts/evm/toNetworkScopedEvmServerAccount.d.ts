import type { EvmServerAccount, NetworkScopedEvmServerAccount } from "./types.js";
/**
 * Options for converting a pre-existing EvmAccount to a NetworkScopedEvmServerAccount.
 */
export type ToNetworkScopedEvmServerAccountOptions = {
    /** The EvmAccount that was previously created. */
    account: EvmServerAccount;
    /** The network to scope the account to. */
    network: string;
};
/**
 * Creates a Network-scoped Server-managed EvmAccount instance from an existing EvmAccount.
 * Use this to interact with previously deployed EvmAccounts on a specific network.
 *
 * @param {ToNetworkScopedEvmServerAccountOptions} options - Configuration options.
 * @param {EvmServerAccount} options.account - The EvmServerAccount that was previously created.
 * @param {string} options.network - The network to scope the account to.
 * @returns {NetworkScopedEvmServerAccount} A configured NetworkScopedEvmServerAccount instance ready for signing.
 */
export declare function toNetworkScopedEvmServerAccount<Network extends string>(options: ToNetworkScopedEvmServerAccountOptions & {
    network: Network;
}): Promise<NetworkScopedEvmServerAccount<Network>>;
//# sourceMappingURL=toNetworkScopedEvmServerAccount.d.ts.map