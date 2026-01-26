import { RpcRequest, RpcResponseData, RpcResponseTransformer } from '@solana/rpc-spec-types';
import { DataPublisher } from '@solana/subscribable';
import { RpcSubscriptionChannelEvents } from './rpc-subscriptions-channel';
import { RpcSubscriptionsChannel } from './rpc-subscriptions-channel';
type Config<TNotification> = Readonly<{
    channel: RpcSubscriptionsChannel<unknown, RpcNotification<TNotification> | RpcResponseData<RpcSubscriptionId>>;
    responseTransformer?: RpcResponseTransformer;
    signal: AbortSignal;
    subscribeRequest: RpcRequest;
    unsubscribeMethodName: string;
}>;
type RpcNotification<TNotification> = Readonly<{
    method: string;
    params: Readonly<{
        result: TNotification;
        subscription: number;
    }>;
}>;
type RpcSubscriptionId = number;
type RpcSubscriptionNotificationEvents<TNotification> = Omit<RpcSubscriptionChannelEvents<TNotification>, 'message'> & {
    notification: TNotification;
};
/**
 * Given a channel, this function executes the particular subscription plan required by the Solana
 * JSON RPC Subscriptions API.
 *
 * @param config
 *
 * 1. Calls the `subscribeRequest` on the remote RPC
 * 2. Waits for a response containing the subscription id
 * 3. Returns a {@link DataPublisher} that publishes notifications related to that subscriptions id,
 *    filtering out all others
 * 4. Calls the `unsubscribeMethodName` on the remote RPC when the abort signal is fired.
 */
export declare function executeRpcPubSubSubscriptionPlan<TNotification>({ channel, responseTransformer, signal, subscribeRequest, unsubscribeMethodName, }: Config<TNotification>): Promise<DataPublisher<RpcSubscriptionNotificationEvents<TNotification>>>;
export {};
//# sourceMappingURL=rpc-subscriptions-pubsub-plan.d.ts.map