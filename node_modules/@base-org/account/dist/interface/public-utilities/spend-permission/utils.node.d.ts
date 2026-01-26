import { PublicClient } from 'viem';
/**
 * Converts a chainId to a viem PublicClient.
 *
 * This helper is for the node environment or server side rendering. It imports all the chains from viem,
 * which can be bloated for frontend applications.
 *
 * @param chainId - The chain ID to get a public client for
 * @returns PublicClient instance or undefined if chain is not supported
 */
export declare function getPublicClientFromChainId(chainId: number): PublicClient | undefined;
//# sourceMappingURL=utils.node.d.ts.map