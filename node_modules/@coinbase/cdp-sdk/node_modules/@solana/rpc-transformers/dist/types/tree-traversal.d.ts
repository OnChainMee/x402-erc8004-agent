import { RpcRequestTransformer, RpcResponseTransformer } from '@solana/rpc-spec-types';
export type KeyPathWildcard = {
    readonly ['__keyPathWildcard:@solana/kit']: unique symbol;
};
export type KeyPath = ReadonlyArray<KeyPath | KeyPathWildcard | number | string>;
export declare const KEYPATH_WILDCARD: KeyPathWildcard;
type NodeVisitor = <TState extends TraversalState>(value: unknown, state: TState) => unknown;
export type TraversalState = Readonly<{
    keyPath: KeyPath;
}>;
/**
 * Creates a transformer that traverses the request parameters and executes the provided visitors at
 * each node. A custom initial state can be provided but must at least provide `{ keyPath: [] }`.
 *
 * @example
 * ```ts
 * import { getTreeWalkerRequestTransformer } from '@solana/rpc-transformers';
 *
 * const requestTransformer = getTreeWalkerRequestTransformer(
 *     [
 *         // Replaces foo.bar with "baz".
 *         (node, state) => (state.keyPath === ['foo', 'bar'] ? 'baz' : node),
 *         // Increments all numbers by 1.
 *         node => (typeof node === number ? node + 1 : node),
 *     ],
 *     { keyPath: [] },
 * );
 * ```
 */
export declare function getTreeWalkerRequestTransformer<TState extends TraversalState>(visitors: NodeVisitor[], initialState: TState): RpcRequestTransformer;
export declare function getTreeWalkerResponseTransformer<TState extends TraversalState>(visitors: NodeVisitor[], initialState: TState): RpcResponseTransformer;
export {};
//# sourceMappingURL=tree-traversal.d.ts.map