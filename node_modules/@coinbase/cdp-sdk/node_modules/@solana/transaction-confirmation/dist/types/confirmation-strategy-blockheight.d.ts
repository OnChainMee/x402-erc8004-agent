import type { GetEpochInfoApi, Rpc } from '@solana/rpc';
import type { RpcSubscriptions, SlotNotificationsApi } from '@solana/rpc-subscriptions';
import type { Commitment } from '@solana/rpc-types';
type GetBlockHeightExceedencePromiseFn = (config: {
    abortSignal: AbortSignal;
    /**
     * Fetch the block height as of the highest slot that has reached this level of commitment.
     *
     * @defaultValue Whichever default is applied by the underlying {@link RpcApi} in use. For
     * example, when using an API created by a `createSolanaRpc*()` helper, the default commitment
     * is `"confirmed"` unless configured otherwise. Unmitigated by an API layer on the client, the
     * default commitment applied by the server is `"finalized"`.
     */
    commitment?: Commitment;
    /** The block height after which to reject the promise */
    lastValidBlockHeight: bigint;
}) => Promise<void>;
type CreateBlockHeightExceedencePromiseFactoryConfig<TCluster> = {
    rpc: Rpc<GetEpochInfoApi> & {
        '~cluster'?: TCluster;
    };
    rpcSubscriptions: RpcSubscriptions<SlotNotificationsApi> & {
        '~cluster'?: TCluster;
    };
};
/**
 * Creates a promise that throws when the network progresses past the block height after which the
 * supplied blockhash is considered expired for use as a transaction lifetime specifier.
 *
 * When a transaction's lifetime is tied to a blockhash, that transaction can be landed on the
 * network until that blockhash expires. All blockhashes have a block height after which they are
 * considered to have expired.
 *
 * @param config
 *
 * @example
 * ```ts
 * import { isSolanaError, SolanaError } from '@solana/errors';
 * import { createBlockHeightExceedencePromiseFactory } from '@solana/transaction-confirmation';
 *
 * const getBlockHeightExceedencePromise = createBlockHeightExceedencePromiseFactory({
 *     rpc,
 *     rpcSubscriptions,
 * });
 * try {
 *     await getBlockHeightExceedencePromise({ lastValidBlockHeight });
 * } catch (e) {
 *     if (isSolanaError(e, SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED)) {
 *         console.error(
 *             `The block height of the network has exceeded ${e.context.lastValidBlockHeight}. ` +
 *                 `It is now ${e.context.currentBlockHeight}`,
 *         );
 *         // Re-sign and retry the transaction.
 *         return;
 *     }
 *     throw e;
 * }
 * ```
 */
export declare function createBlockHeightExceedencePromiseFactory({ rpc, rpcSubscriptions, }: CreateBlockHeightExceedencePromiseFactoryConfig<'devnet'>): GetBlockHeightExceedencePromiseFn;
export declare function createBlockHeightExceedencePromiseFactory({ rpc, rpcSubscriptions, }: CreateBlockHeightExceedencePromiseFactoryConfig<'testnet'>): GetBlockHeightExceedencePromiseFn;
export declare function createBlockHeightExceedencePromiseFactory({ rpc, rpcSubscriptions, }: CreateBlockHeightExceedencePromiseFactoryConfig<'mainnet'>): GetBlockHeightExceedencePromiseFn;
export {};
//# sourceMappingURL=confirmation-strategy-blockheight.d.ts.map