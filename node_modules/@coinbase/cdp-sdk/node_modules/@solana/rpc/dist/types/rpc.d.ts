import { RpcTransport } from '@solana/rpc-spec';
import { ClusterUrl } from '@solana/rpc-types';
import type { RpcFromTransport, SolanaRpcApiFromTransport } from './rpc-clusters';
import { createDefaultRpcTransport } from './rpc-transport';
type DefaultRpcTransportConfig<TClusterUrl extends ClusterUrl> = Parameters<typeof createDefaultRpcTransport<TClusterUrl>>[0];
/**
 * Creates a {@link Rpc} instance that exposes the Solana JSON RPC API given a cluster URL and some
 * optional transport config. See {@link createDefaultRpcTransport} for the shape of the transport
 * config.
 */
export declare function createSolanaRpc<TClusterUrl extends ClusterUrl>(clusterUrl: TClusterUrl, config?: Omit<DefaultRpcTransportConfig<TClusterUrl>, 'url'>): RpcFromTransport<SolanaRpcApiFromTransport<import("./rpc-clusters").RpcTransportFromClusterUrl<TClusterUrl>>, import("./rpc-clusters").RpcTransportFromClusterUrl<TClusterUrl>>;
/**
 * Creates a {@link Rpc} instance that exposes the Solana JSON RPC API given the supplied
 * {@link RpcTransport}.
 */
export declare function createSolanaRpcFromTransport<TTransport extends RpcTransport>(transport: TTransport): RpcFromTransport<SolanaRpcApiFromTransport<TTransport>, TTransport>;
export {};
//# sourceMappingURL=rpc.d.ts.map