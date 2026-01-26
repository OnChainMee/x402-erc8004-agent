import type { ClusterUrl } from '@solana/rpc-types';
import { RpcSubscriptionsChannelCreatorFromClusterUrl } from './rpc-subscriptions-clusters';
export type DefaultRpcSubscriptionsChannelConfig<TClusterUrl extends ClusterUrl> = Readonly<{
    /**
     * The number of milliseconds to wait since the last message sent or received over the channel
     * before sending a ping message to keep the channel open.
     */
    intervalMs?: number;
    /**
     * The number of subscribers that may share a channel before a new channel must be created.
     *
     * It is important that you set this to the maximum number of subscriptions that your RPC
     * provider recommends making over a single connection; the default is set deliberately low, so
     * as to comply with the restrictive limits of the public mainnet RPC node.
     *
     * @defaultValue 100
     */
    maxSubscriptionsPerChannel?: number;
    /** The number of channels to create before reusing a channel for a new subscription. */
    minChannels?: number;
    /**
     * The number of bytes of data to admit into the
     * [`WebSocket`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) buffer before
     * buffering data on the client.
     */
    sendBufferHighWatermark?: number;
    /** The URL of the web socket server. Must use the `ws` or `wss` protocols. */
    url: TClusterUrl;
}>;
/**
 * Similar to {@link createDefaultRpcSubscriptionsChannelCreator} with some Solana-specific
 * defaults.
 *
 * For instance, it safely handles `BigInt` values in JSON messages since Solana RPC servers accept
 * and return integers larger than [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).
 */
export declare function createDefaultSolanaRpcSubscriptionsChannelCreator<TClusterUrl extends ClusterUrl>(config: DefaultRpcSubscriptionsChannelConfig<TClusterUrl>): RpcSubscriptionsChannelCreatorFromClusterUrl<TClusterUrl, unknown, unknown>;
/**
 * Creates a function that returns new subscription channels when called.
 */
export declare function createDefaultRpcSubscriptionsChannelCreator<TClusterUrl extends ClusterUrl>(config: DefaultRpcSubscriptionsChannelConfig<TClusterUrl>): RpcSubscriptionsChannelCreatorFromClusterUrl<TClusterUrl, unknown, unknown>;
//# sourceMappingURL=rpc-subscriptions-channel.d.ts.map