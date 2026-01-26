import { RpcSubscriptionsChannelCreator, RpcSubscriptionsTransport } from '@solana/rpc-subscriptions-spec';
import { ClusterUrl } from '@solana/rpc-types';
import { RpcSubscriptionsChannelCreatorDevnet, RpcSubscriptionsChannelCreatorFromClusterUrl, RpcSubscriptionsChannelCreatorMainnet, RpcSubscriptionsChannelCreatorTestnet, RpcSubscriptionsTransportDevnet, RpcSubscriptionsTransportFromClusterUrl, RpcSubscriptionsTransportMainnet, RpcSubscriptionsTransportTestnet } from './rpc-subscriptions-clusters';
export type DefaultRpcSubscriptionsTransportConfig<TClusterUrl extends ClusterUrl> = Readonly<{
    createChannel: RpcSubscriptionsChannelCreatorFromClusterUrl<TClusterUrl, unknown, unknown>;
}>;
/**
 * Creates a {@link RpcSubscriptionsTransport} with some default behaviours.
 *
 * The default behaviours include:
 * - Logic that coalesces multiple subscriptions for the same notifications with the same arguments
 *   into a single subscription.
 *
 * @param config
 */
export declare function createDefaultRpcSubscriptionsTransport<TClusterUrl extends ClusterUrl>({ createChannel, }: DefaultRpcSubscriptionsTransportConfig<TClusterUrl>): RpcSubscriptionsTransportFromClusterUrl<TClusterUrl>;
export declare function createRpcSubscriptionsTransportFromChannelCreator<TChannelCreator extends RpcSubscriptionsChannelCreator<TOutboundMessage, TInboundMessage>, TInboundMessage, TOutboundMessage>(createChannel: TChannelCreator): TChannelCreator extends RpcSubscriptionsChannelCreatorDevnet<TOutboundMessage, TInboundMessage> ? RpcSubscriptionsTransportDevnet : TChannelCreator extends RpcSubscriptionsChannelCreatorTestnet<TOutboundMessage, TInboundMessage> ? RpcSubscriptionsTransportTestnet : TChannelCreator extends RpcSubscriptionsChannelCreatorMainnet<TOutboundMessage, TInboundMessage> ? RpcSubscriptionsTransportMainnet : RpcSubscriptionsTransport;
//# sourceMappingURL=rpc-subscriptions-transport.d.ts.map