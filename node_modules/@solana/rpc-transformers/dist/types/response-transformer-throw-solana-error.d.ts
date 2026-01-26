import { RpcResponseTransformer } from '@solana/rpc-spec-types';
/**
 * Returns a transformer that throws a {@link SolanaError} with the appropriate RPC error code if
 * the body of the RPC response contains an error.
 *
 * @example
 * ```ts
 * import { getThrowSolanaErrorResponseTransformer } from '@solana/rpc-transformers';
 *
 * const responseTransformer = getThrowSolanaErrorResponseTransformer();
 * ```
 */
export declare function getThrowSolanaErrorResponseTransformer(): RpcResponseTransformer;
//# sourceMappingURL=response-transformer-throw-solana-error.d.ts.map