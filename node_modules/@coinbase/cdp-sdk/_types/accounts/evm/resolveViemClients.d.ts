import { Account, Transport, type Chain, type PublicClient, type WalletClient } from "viem";
import type { EvmAccount } from "./types.js";
/**
 * Options for resolving viem clients
 */
export type ResolveViemClientsOptions = {
    /** The network identifier (e.g., "base", "base-sepolia") or Node URL */
    networkOrNodeUrl: string;
    /** Optional account to use for the wallet client */
    account: EvmAccount;
};
/**
 * Result of resolving viem clients
 */
export type ResolvedViemClients = {
    /** The resolved viem chain */
    chain: Chain;
    /** The public client for reading blockchain data */
    publicClient: PublicClient<Transport, Chain>;
    /** The wallet client for sending transactions */
    walletClient: WalletClient<Transport, Chain, Account>;
};
/**
 * Resolves viem clients based on a network identifier or Node URL.
 *
 * @param options - Configuration options
 * @param options.networkOrNodeUrl - Either a network identifier (e.g., "base", "base-sepolia") or a full Node URL
 * @param options.account - Optional account to use for the wallet client
 * @returns Promise resolving to an object containing the chain, publicClient, and walletClient
 *
 * @example
 * ```typescript
 * // Using network identifier
 * const clients = await resolveViemClients({
 *   networkOrNodeUrl: "base",
 *   account: myAccount
 * });
 *
 * // Using Node URL
 * const clients = await resolveViemClients({
 *   networkOrNodeUrl: "https://mainnet.base.org",
 *   account: myAccount
 * });
 * ```
 */
export declare function resolveViemClients(options: ResolveViemClientsOptions): Promise<ResolvedViemClients>;
//# sourceMappingURL=resolveViemClients.d.ts.map