import { BaseTransactionMessage } from '@solana/kit';
/**
 * Appends a `SetComputeUnitLimit` instruction with a provisory
 * compute unit limit to a given transaction message
 * if and only if it does not already have one.
 *
 * @example
 * ```ts
 * const transactionMessage = pipe(
 *   createTransactionMessage({ version: 0 }),
 *   fillProvisorySetComputeUnitLimitInstruction,
 *   // ...
 * );
 * ```
 */
export declare function fillProvisorySetComputeUnitLimitInstruction<TTransactionMessage extends BaseTransactionMessage>(transactionMessage: TTransactionMessage): TTransactionMessage;
/**
 * Updates the first `SetComputeUnitLimit` instruction in a transaction message
 * with the given units, or appends a new instruction if none exists.
 * A function of the current value can be provided instead of a static value.
 *
 * @param units - The new compute unit limit, or a function that takes the previous
 *                compute unit limit and returns the new limit.
 * @param transactionMessage - The transaction message to update.
 *
 * @example
 * ```ts
 * const updatedTransactionMessage = updateOrAppendSetComputeUnitLimitInstruction(
 *   // E.g. Keep the current limit if it is set, otherwise set it to the maximum.
 *   (currentUnits) => currentUnits === null ? MAX_COMPUTE_UNIT_LIMIT : currentUnits,
 *   transactionMessage,
 * );
 * ```
 */
export declare function updateOrAppendSetComputeUnitLimitInstruction<TTransactionMessage extends BaseTransactionMessage>(units: number | ((previousUnits: number | null) => number), transactionMessage: TTransactionMessage): TTransactionMessage;
//# sourceMappingURL=setComputeLimit.d.ts.map