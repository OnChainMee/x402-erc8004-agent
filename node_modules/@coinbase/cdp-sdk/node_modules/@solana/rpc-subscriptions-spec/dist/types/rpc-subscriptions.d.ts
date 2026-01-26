import { Callable, Flatten, OverloadImplementations, UnionToIntersection } from '@solana/rpc-spec-types';
import { RpcSubscriptionsApi } from './rpc-subscriptions-api';
import { PendingRpcSubscriptionsRequest } from './rpc-subscriptions-request';
import { RpcSubscriptionsTransport } from './rpc-subscriptions-transport';
export type RpcSubscriptionsConfig<TRpcMethods> = Readonly<{
    api: RpcSubscriptionsApi<TRpcMethods>;
    transport: RpcSubscriptionsTransport;
}>;
/**
 * An object that exposes all of the functions described by `TRpcSubscriptionsMethods`.
 *
 * Calling each method returns a
 * {@link PendingRpcSubscriptionsRequest | PendingRpcSubscriptionsRequest<TNotification>} where
 * `TNotification` is that method's notification type.
 */
export type RpcSubscriptions<TRpcSubscriptionsMethods> = {
    [TMethodName in keyof TRpcSubscriptionsMethods]: PendingRpcSubscriptionsRequestBuilder<OverloadImplementations<TRpcSubscriptionsMethods, TMethodName>>;
};
type PendingRpcSubscriptionsRequestBuilder<TSubscriptionMethodImplementations> = UnionToIntersection<Flatten<{
    [P in keyof TSubscriptionMethodImplementations]: PendingRpcSubscriptionsRequestReturnTypeMapper<TSubscriptionMethodImplementations[P]>;
}>>;
type PendingRpcSubscriptionsRequestReturnTypeMapper<TSubscriptionMethodImplementation> = TSubscriptionMethodImplementation extends Callable ? (...args: Parameters<TSubscriptionMethodImplementation>) => PendingRpcSubscriptionsRequest<ReturnType<TSubscriptionMethodImplementation>> : never;
/**
 * Creates a {@link RpcSubscriptions} instance given a
 * {@link RpcSubscriptionsApi | RpcSubscriptionsApi<TRpcSubscriptionsApiMethods>} and a
 * {@link RpcSubscriptionsTransport} capable of fulfilling them.
 */
export declare function createSubscriptionRpc<TRpcSubscriptionsApiMethods>(rpcConfig: RpcSubscriptionsConfig<TRpcSubscriptionsApiMethods>): RpcSubscriptions<TRpcSubscriptionsApiMethods>;
export {};
//# sourceMappingURL=rpc-subscriptions.d.ts.map