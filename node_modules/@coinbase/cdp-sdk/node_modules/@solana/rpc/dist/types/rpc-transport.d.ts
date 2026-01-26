import { createHttpTransport } from '@solana/rpc-transport-http';
import type { ClusterUrl } from '@solana/rpc-types';
import { RpcTransportFromClusterUrl } from './rpc-clusters';
type RpcTransportConfig = Parameters<typeof createHttpTransport>[0];
interface DefaultRpcTransportConfig<TClusterUrl extends ClusterUrl> extends RpcTransportConfig {
    url: TClusterUrl;
}
/**
 * Creates a {@link RpcTransport} with some default behaviours.
 *
 * The default behaviours include:
 * - An automatically-set `Solana-Client` request header, containing the version of `@solana/kit`
 * - Logic that coalesces multiple calls in the same runloop, for the same methods with the same
 *   arguments, into a single network request.
 * - [node-only] An automatically-set `Accept-Encoding` request header asking the server to compress
 *   responses
 *
 * @param config
 */
export declare function createDefaultRpcTransport<TClusterUrl extends ClusterUrl>(config: DefaultRpcTransportConfig<TClusterUrl>): RpcTransportFromClusterUrl<TClusterUrl>;
export {};
//# sourceMappingURL=rpc-transport.d.ts.map