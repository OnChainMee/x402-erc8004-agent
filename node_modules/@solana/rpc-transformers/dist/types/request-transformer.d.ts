import { RpcRequestTransformer } from '@solana/rpc-spec-types';
import { Commitment } from '@solana/rpc-types';
import { IntegerOverflowHandler } from './request-transformer-integer-overflow';
export type RequestTransformerConfig = Readonly<{
    /**
     * An optional {@link Commitment} value to use as the default when none is supplied by the
     * caller.
     */
    defaultCommitment?: Commitment;
    /**
     * An optional function that will be called whenever a `bigint` input exceeds that which can be
     * expressed using JavaScript numbers.
     *
     * This is used in the default {@link SolanaRpcSubscriptionsApi} to throw an exception rather
     * than to allow truncated values to propagate through a program.
     */
    onIntegerOverflow?: IntegerOverflowHandler;
}>;
/**
 * Returns the default request transformer for the Solana RPC API.
 *
 * Under the hood, this function composes multiple
 * {@link RpcRequestTransformer | RpcRequestTransformers} together such as the
 * {@link getDefaultCommitmentTransformer}, the {@link getIntegerOverflowRequestTransformer} and the
 * {@link getBigIntDowncastRequestTransformer}.
 *
 * @example
 * ```ts
 * import { getDefaultRequestTransformerForSolanaRpc } from '@solana/rpc-transformers';
 *
 * const requestTransformer = getDefaultRequestTransformerForSolanaRpc({
 *     defaultCommitment: 'confirmed',
 *     onIntegerOverflow: (request, keyPath, value) => {
 *         throw new Error(`Integer overflow at ${keyPath.join('.')}: ${value}`);
 *     },
 * });
 * ```
 */
export declare function getDefaultRequestTransformerForSolanaRpc(config?: RequestTransformerConfig): RpcRequestTransformer;
//# sourceMappingURL=request-transformer.d.ts.map