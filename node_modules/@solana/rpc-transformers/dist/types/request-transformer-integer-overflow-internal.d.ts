import { KeyPath, TraversalState } from './tree-traversal';
export declare function getIntegerOverflowNodeVisitor(onIntegerOverflow: (keyPath: KeyPath, value: bigint) => void): <T>(value: T, { keyPath }: TraversalState) => T;
//# sourceMappingURL=request-transformer-integer-overflow-internal.d.ts.map