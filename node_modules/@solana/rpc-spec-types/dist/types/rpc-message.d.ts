import { RpcRequest } from './rpc-request';
/**
 * Returns a spec-compliant JSON RPC 2.0 message, given a method name and some params.
 *
 * Generates a new `id` on each call by incrementing a `bigint` and casting it to a string.
 */
export declare function createRpcMessage<TParams>(request: RpcRequest<TParams>): {
    id: string;
    jsonrpc: string;
    method: string;
    params: TParams;
};
//# sourceMappingURL=rpc-message.d.ts.map