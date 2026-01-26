import type { Chain } from "viem";
/**
 * Network identifier to viem chain mapping
 */
export declare const NETWORK_TO_CHAIN_MAP: Record<string, Chain>;
/**
 * Resolves a network identifier to a viem chain
 *
 * @param network - The network identifier to resolve
 * @returns The resolved viem chain
 * @throws Error if the network identifier is not supported
 */
export declare function resolveNetworkToChain(network: string): Chain;
//# sourceMappingURL=networkToChainResolver.d.ts.map