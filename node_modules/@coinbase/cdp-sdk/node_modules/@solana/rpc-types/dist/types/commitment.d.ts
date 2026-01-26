/**
 * A union of all possible commitment statuses -- each a measure of the network confirmation and
 * stake levels on a particular block.
 *
 * Read more about the statuses themselves, [here](https://docs.solana.com/cluster/commitments).
 */
export type Commitment = 'confirmed' | 'finalized' | 'processed';
export declare function commitmentComparator(a: Commitment, b: Commitment): -1 | 0 | 1;
//# sourceMappingURL=commitment.d.ts.map