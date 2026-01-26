import { BaseTransactionMessage, TransactionMessageWithFeePayer } from '@solana/transaction-messages';
import { Transaction } from '@solana/transactions';
import type { TransactionPlan } from './transaction-plan';
import { type TransactionPlanResult, type TransactionPlanResultContext } from './transaction-plan-result';
export type TransactionPlanExecutor<TContext extends TransactionPlanResultContext = TransactionPlanResultContext> = (transactionPlan: TransactionPlan, config?: {
    abortSignal?: AbortSignal;
}) => Promise<TransactionPlanResult<TContext>>;
type ExecuteTransactionMessage = <TContext extends TransactionPlanResultContext = TransactionPlanResultContext>(transactionMessage: BaseTransactionMessage & TransactionMessageWithFeePayer, config?: {
    abortSignal?: AbortSignal;
}) => Promise<{
    context?: TContext;
    transaction: Transaction;
}>;
/**
 * Configuration object for creating a new transaction plan executor.
 *
 * @see {@link createTransactionPlanExecutor}
 */
export type TransactionPlanExecutorConfig = {
    /** Called whenever a transaction message must be sent to the blockchain. */
    executeTransactionMessage: ExecuteTransactionMessage;
};
/**
 * Creates a new transaction plan executor based on the provided configuration.
 *
 * The executor will traverse the provided `TransactionPlan` sequentially or in parallel,
 * executing each transaction message using the `executeTransactionMessage` function.
 *
 * - If that function is successful, the executor will return a successful `TransactionPlanResult`
 * for that message including the transaction and any custom context.
 * - If that function throws an error, the executor will stop processing and cancel all
 * remaining transaction messages in the plan.
 * - If the `abortSignal` is triggered, the executor will immediately stop processing the plan and
 * return a `TransactionPlanResult` with the status set to `canceled`.
 *
 * @example
 * ```ts
 * const sendAndConfirmTransaction = sendAndConfirmTransactionFactory({ rpc, rpcSubscriptions });
 *
 * const transactionPlanExecutor = createTransactionPlanExecutor({
 *   executeTransactionMessage: (message) => {
 *     const transaction = await signTransactionMessageWithSigners(message);
 *     await sendAndConfirmTransaction(transaction, { commitment: 'confirmed' });
 *     return { transaction };
 *   }
 * });
 * ```
 *
 * @see {@link TransactionPlannerConfig}
 */
export declare function createTransactionPlanExecutor(config: TransactionPlanExecutorConfig): TransactionPlanExecutor;
export {};
//# sourceMappingURL=transaction-plan-executor.d.ts.map