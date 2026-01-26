import { RpcRequest } from '@solana/rpc-spec-types';
import { KeyPath } from './tree-traversal';
export type IntegerOverflowHandler = (request: RpcRequest, keyPath: KeyPath, value: bigint) => void;
/**
 * Creates a transformer that traverses the request parameters and executes the provided handler
 * when an integer overflow is detected.
 *
 * @example
 * ```ts
 * import { getIntegerOverflowRequestTransformer } from '@solana/rpc-transformers';
 *
 * const requestTransformer = getIntegerOverflowRequestTransformer((request, keyPath, value) => {
 *     throw new Error(`Integer overflow at ${keyPath.join('.')}: ${value}`);
 * });
 * ```
 */
export declare function getIntegerOverflowRequestTransformer(onIntegerOverflow: IntegerOverflowHandler): <TParams>(request: RpcRequest<TParams>) => RpcRequest;
//# sourceMappingURL=request-transformer-integer-overflow.d.ts.map