import type { RpcRequestTransformer } from '@solana/rpc-spec-types';
import type { Commitment } from '@solana/rpc-types';
/**
 * Creates a transformer that adds the provided default commitment to the configuration object of the request when applicable.
 *
 * @param config
 *
 * @example
 * ```ts
 * import { getDefaultCommitmentRequestTransformer, OPTIONS_OBJECT_POSITION_BY_METHOD } from '@solana/rpc-transformers';
 *
 * const requestTransformer = getDefaultCommitmentRequestTransformer({
 *     defaultCommitment: 'confirmed',
 *     optionsObjectPositionByMethod: OPTIONS_OBJECT_POSITION_BY_METHOD,
 * });
 */
export declare function getDefaultCommitmentRequestTransformer({ defaultCommitment, optionsObjectPositionByMethod, }: Readonly<{
    defaultCommitment?: Commitment;
    optionsObjectPositionByMethod: Record<string, number>;
}>): RpcRequestTransformer;
//# sourceMappingURL=request-transformer-default-commitment.d.ts.map