import { RpcSubscriptionsChannel } from '@solana/rpc-subscriptions-spec';
/**
 * Given a {@link RpcSubscriptionsChannel}, will return a new channel that parses data published to
 * the `'message'` channel as JSON, and JSON-stringifies messages sent via the
 * {@link RpcSubscriptionsChannel.send | send(message)} method.
 */
export declare function getRpcSubscriptionsChannelWithJSONSerialization(channel: RpcSubscriptionsChannel<string, string>): RpcSubscriptionsChannel<unknown, unknown>;
//# sourceMappingURL=rpc-subscriptions-json.d.ts.map