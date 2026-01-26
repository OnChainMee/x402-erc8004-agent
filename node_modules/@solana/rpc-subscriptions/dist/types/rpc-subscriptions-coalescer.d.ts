import { RpcSubscriptionsTransport } from '@solana/rpc-subscriptions-spec';
/**
 * Given a {@link RpcSubscriptionsTransport}, will return a new transport that coalesces identical
 * subscriptions into a single subscription request to the server. The determination of whether a
 * subscription is the same as another is based on the `rpcRequest` returned by its
 * {@link RpcSubscriptionsPlan}. The subscription will only be aborted once all subscribers abort,
 * or there is an error.
 */
export declare function getRpcSubscriptionsTransportWithSubscriptionCoalescing<TTransport extends RpcSubscriptionsTransport>(transport: TTransport): TTransport;
//# sourceMappingURL=rpc-subscriptions-coalescer.d.ts.map