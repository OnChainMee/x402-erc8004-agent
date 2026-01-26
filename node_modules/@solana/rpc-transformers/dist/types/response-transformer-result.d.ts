import { RpcResponseTransformer } from '@solana/rpc-spec-types';
/**
 * Returns a transformer that extracts the `result` field from the body of the RPC response.
 *
 * For instance, we go from `{ jsonrpc: '2.0', result: 'foo', id: 1 }` to `'foo'`.
 *
 * @example
 * ```ts
 * import { getResultResponseTransformer } from '@solana/rpc-transformers';
 *
 * const responseTransformer = getResultResponseTransformer();
 * ```
 */
export declare function getResultResponseTransformer(): RpcResponseTransformer;
//# sourceMappingURL=response-transformer-result.d.ts.map