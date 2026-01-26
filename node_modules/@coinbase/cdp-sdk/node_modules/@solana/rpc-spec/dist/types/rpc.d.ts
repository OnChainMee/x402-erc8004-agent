import { Callable, Flatten, OverloadImplementations, UnionToIntersection } from '@solana/rpc-spec-types';
import { RpcApi } from './rpc-api';
import { RpcTransport } from './rpc-transport';
export type RpcConfig<TRpcMethods, TRpcTransport extends RpcTransport> = Readonly<{
    api: RpcApi<TRpcMethods>;
    transport: TRpcTransport;
}>;
/**
 * An object that exposes all of the functions described by `TRpcMethods`.
 *
 * Calling each method returns a {@link PendingRpcRequest | PendingRpcRequest<TResponse>} where
 * `TResponse` is that method's response type.
 */
export type Rpc<TRpcMethods> = {
    [TMethodName in keyof TRpcMethods]: PendingRpcRequestBuilder<OverloadImplementations<TRpcMethods, TMethodName>>;
};
/**
 * Pending requests are the result of calling a supported method on a {@link Rpc} object. They
 * encapsulate all of the information necessary to make the request without actually making it.
 *
 * Calling the {@link PendingRpcRequest.send | `send(options)`} method on a
 * {@link PendingRpcRequest | PendingRpcRequest<TResponse>} will trigger the request and return a
 * promise for `TResponse`.
 */
export type PendingRpcRequest<TResponse> = {
    send(options?: RpcSendOptions): Promise<TResponse>;
};
export type RpcSendOptions = Readonly<{
    /**
     * An optional signal that you can supply when triggering a {@link PendingRpcRequest} that you
     * might later need to abort.
     */
    abortSignal?: AbortSignal;
}>;
type PendingRpcRequestBuilder<TMethodImplementations> = UnionToIntersection<Flatten<{
    [P in keyof TMethodImplementations]: PendingRpcRequestReturnTypeMapper<TMethodImplementations[P]>;
}>>;
type PendingRpcRequestReturnTypeMapper<TMethodImplementation> = TMethodImplementation extends Callable ? (...args: Parameters<TMethodImplementation>) => PendingRpcRequest<ReturnType<TMethodImplementation>> : never;
/**
 * Creates a {@link Rpc} instance given a {@link RpcApi | RpcApi<TRpcMethods>} and a
 * {@link RpcTransport} capable of fulfilling them.
 */
export declare function createRpc<TRpcMethods, TRpcTransport extends RpcTransport>(rpcConfig: RpcConfig<TRpcMethods, TRpcTransport>): Rpc<TRpcMethods>;
export {};
//# sourceMappingURL=rpc.d.ts.map