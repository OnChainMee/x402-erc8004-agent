import { BaseTransactionMessage, TransactionMessageWithFeePayer } from '@solana/transaction-messages';
import { InstructionPlan } from './instruction-plan';
import { TransactionPlan } from './transaction-plan';
/**
 * Plans one or more transactions according to the provided instruction plan.
 *
 * @param instructionPlan - The instruction plan to be planned and executed.
 * @param config - Optional configuration object that can include an `AbortSignal` to cancel the planning process.
 *
 * @see {@link InstructionPlan}
 * @see {@link TransactionPlan}
 */
export type TransactionPlanner = (instructionPlan: InstructionPlan, config?: {
    abortSignal?: AbortSignal;
}) => Promise<TransactionPlan>;
type CreateTransactionMessage = (config?: {
    abortSignal?: AbortSignal;
}) => Promise<BaseTransactionMessage & TransactionMessageWithFeePayer> | (BaseTransactionMessage & TransactionMessageWithFeePayer);
type OnTransactionMessageUpdated = (transactionMessage: BaseTransactionMessage & TransactionMessageWithFeePayer, config?: {
    abortSignal?: AbortSignal;
}) => Promise<BaseTransactionMessage & TransactionMessageWithFeePayer> | (BaseTransactionMessage & TransactionMessageWithFeePayer);
/**
 * Configuration object for creating a new transaction planner.
 *
 * @see {@link createTransactionPlanner}
 */
export type TransactionPlannerConfig = {
    /** Called whenever a new transaction message is needed. */
    createTransactionMessage: CreateTransactionMessage;
    /**
     * Called whenever a transaction message is updated — e.g. new instructions were added.
     * This function must return the updated transaction message back — even if no changes were made.
     */
    onTransactionMessageUpdated?: OnTransactionMessageUpdated;
};
/**
 * Creates a new transaction planner based on the provided configuration.
 *
 * At the very least, the `createTransactionMessage` function must be provided.
 * This function is used to create new transaction messages whenever needed.
 *
 * Additionally, the `onTransactionMessageUpdated` function can be provided
 * to update transaction messages during the planning process. This function will
 * be called whenever a transaction message is updated, e.g. when new instructions
 * are added to a transaction message. It accepts the updated transaction message
 * and must return a transaction message back, even if no changes were made.
 *
 * @example
 * ```ts
 * const transactionPlanner = createTransactionPlanner({
 *   createTransactionMessage: () => pipe(
 *     createTransactionMessage({ version: 0 }),
 *     message => setTransactionMessageFeePayerSigner(mySigner, message),
 *   )
 * });
 * ```
 *
 * @see {@link TransactionPlannerConfig}
 */
export declare function createTransactionPlanner(config: TransactionPlannerConfig): TransactionPlanner;
export {};
//# sourceMappingURL=transaction-planner.d.ts.map