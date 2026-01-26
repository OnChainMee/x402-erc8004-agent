import { RpcResponseTransformer } from '@solana/rpc-spec-types';
import { AllowedNumericKeypaths } from './response-transformer-allowed-numeric-values';
export type ResponseTransformerConfig<TApi> = Readonly<{
    /**
     * An optional map from the name of an API method to an array of {@link KeyPath | KeyPaths}
     * pointing to values in the response that should materialize in the application as `Number`
     * instead of `BigInt`.
     */
    allowedNumericKeyPaths?: AllowedNumericKeypaths<TApi>;
}>;
/**
 * Returns the default response transformer for the Solana RPC API.
 *
 * Under the hood, this function composes multiple
 * {@link RpcResponseTransformer | RpcResponseTransformers} together such as the
 * {@link getThrowSolanaErrorResponseTransformer}, the {@link getResultResponseTransformer} and the
 * {@link getBigIntUpcastResponseTransformer}.
 *
 * @example
 * ```ts
 * import { getDefaultResponseTransformerForSolanaRpc } from '@solana/rpc-transformers';
 *
 * const responseTransformer = getDefaultResponseTransformerForSolanaRpc({
 *     allowedNumericKeyPaths: getAllowedNumericKeypaths(),
 * });
 * ```
 */
export declare function getDefaultResponseTransformerForSolanaRpc<TApi>(config?: ResponseTransformerConfig<TApi>): RpcResponseTransformer;
/**
 * Returns the default response transformer for the Solana RPC Subscriptions API.
 *
 * Under the hood, this function composes the {@link getBigIntUpcastResponseTransformer}.
 *
 * @example
 * ```ts
 * import { getDefaultResponseTransformerForSolanaRpcSubscriptions } from '@solana/rpc-transformers';
 *
 * const responseTransformer = getDefaultResponseTransformerForSolanaRpcSubscriptions({
 *     allowedNumericKeyPaths: getAllowedNumericKeypaths(),
 * });
 * ```
 */
export declare function getDefaultResponseTransformerForSolanaRpcSubscriptions<TApi>(config?: ResponseTransformerConfig<TApi>): RpcResponseTransformer;
//# sourceMappingURL=response-transformer.d.ts.map