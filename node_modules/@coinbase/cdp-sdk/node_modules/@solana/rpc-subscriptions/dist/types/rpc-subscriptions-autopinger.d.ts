import type { RpcSubscriptionsChannel } from '@solana/rpc-subscriptions-spec';
type Config<TChannel extends RpcSubscriptionsChannel<unknown, unknown>> = Readonly<{
    abortSignal: AbortSignal;
    channel: TChannel;
    intervalMs: number;
}>;
/**
 * Given a {@link RpcSubscriptionsChannel}, will return a new channel that sends a ping message to
 * the inner channel if a message has not been sent or received in the last `intervalMs`. In web
 * browsers, this implementation sends no ping when the network is down, and sends a ping
 * immediately upon the network coming back up.
 */
export declare function getRpcSubscriptionsChannelWithAutoping<TChannel extends RpcSubscriptionsChannel<object, unknown>>({ abortSignal: callerAbortSignal, channel, intervalMs, }: Config<TChannel>): TChannel;
export {};
//# sourceMappingURL=rpc-subscriptions-autopinger.d.ts.map