import { RpcDevnet, SolanaRpcApiDevnet, RpcMainnet, SolanaRpcApiMainnet, RpcSubscriptionsFromTransport, SolanaRpcSubscriptionsApi, RpcSubscriptionsTransportFromClusterUrl, ClusterUrl } from '@solana/kit';
import { N as Network } from './network-DLlUXjbR.mjs';

/**
 * Creates a Solana RPC client for the devnet network.
 *
 * @param url - Optional URL of the devnet network.
 * @returns A Solana RPC client.
 */
declare function createDevnetRpcClient(url?: string): RpcDevnet<SolanaRpcApiDevnet>;
/**
 * Creates a Solana RPC client for the mainnet network.
 *
 * @param url - Optional URL of the mainnet network.
 * @returns A Solana RPC client.
 */
declare function createMainnetRpcClient(url?: string): RpcMainnet<SolanaRpcApiMainnet>;
/**
 * Gets the RPC client for the given network.
 *
 * @param network - The network to get the RPC client for
 * @param url - Optional URL of the network. If not provided, the default URL will be used.
 * @returns The RPC client for the given network
 */
declare function getRpcClient(network: Network, url?: string): RpcDevnet<SolanaRpcApiDevnet> | RpcMainnet<SolanaRpcApiMainnet>;
/**
 * Gets the RPC subscriptions for the given network.
 *
 * @param network - The network to get the RPC subscriptions for
 * @param url - Optional URL of the network. If not provided, the default URL will be used.
 * @returns The RPC subscriptions for the given network
 */
declare function getRpcSubscriptions(network: Network, url?: string): RpcSubscriptionsFromTransport<SolanaRpcSubscriptionsApi, RpcSubscriptionsTransportFromClusterUrl<ClusterUrl>>;

export { createMainnetRpcClient as a, getRpcSubscriptions as b, createDevnetRpcClient as c, getRpcClient as g };
