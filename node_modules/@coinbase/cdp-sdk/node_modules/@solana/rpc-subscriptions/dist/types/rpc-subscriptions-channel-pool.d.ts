import { RpcSubscriptionsChannelCreator } from '@solana/rpc-subscriptions-spec';
type Config = Readonly<{
    maxSubscriptionsPerChannel: number;
    minChannels: number;
}>;
/**
 * Given a channel creator, will return a new channel creator with the following behavior.
 *
 * 1. When called, returns a {@link RpcSubscriptionsChannel}. Adds that channel to a pool.
 * 2. When called again, creates and returns new
 *    {@link RpcSubscriptionChannel | RpcSubscriptionChannels} up to the number specified by
 *    `minChannels`.
 * 3. When `minChannels` channels have been created, subsequent calls vend whichever existing
 *    channel from the pool has the fewest subscribers, or the next one in rotation in the event of
 *    a tie.
 * 4. Once all channels carry the number of subscribers specified by the number
 *    `maxSubscriptionsPerChannel`, new channels in excess of `minChannel` will be created,
 *    returned, and added to the pool.
 * 5. A channel will be destroyed once all of its subscribers' abort signals fire.
 */
export declare function getChannelPoolingChannelCreator<TChannelCreator extends RpcSubscriptionsChannelCreator<unknown, unknown>>(createChannel: TChannelCreator, { maxSubscriptionsPerChannel, minChannels }: Config): TChannelCreator;
export {};
//# sourceMappingURL=rpc-subscriptions-channel-pool.d.ts.map