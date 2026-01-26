import { BaseTransactionMessage, MicroLamports } from '@solana/kit';
/**
 * Sets the compute unit price of a transaction message in micro-Lamports.
 *
 * @example
 * ```ts
 * const transactionMessage = pipe(
 *   createTransactionMessage({ version: 0 }),
 *   (m) => setTransactionMessageComputeUnitPrice(10_000, m),
 *   // ...
 * );
 * ```
 */
export declare function setTransactionMessageComputeUnitPrice<TTransactionMessage extends BaseTransactionMessage>(microLamports: number | bigint, transactionMessage: TTransactionMessage): Omit<import("@solana/kit").ExcludeTransactionMessageWithinSizeLimit<TTransactionMessage>, "instructions"> & {
    readonly instructions: readonly [...TTransactionMessage["instructions"], import("./generated").SetComputeUnitPriceInstruction<import("@solana/kit").Address<"ComputeBudget111111111111111111111111111111">, []>];
};
/**
 * Updates the first `SetComputeUnitPrice` instruction in a transaction message
 * with the given micro-Lamports, or appends a new instruction if none exists.
 * A function of the current value can be provided instead of a static value.
 *
 * @param microLamports - The new compute unit price, or a function that
 *                        takes the previous price and returns the new one.
 * @param transactionMessage - The transaction message to update.
 *
 * @example
 * ```ts
 * const updatedTransactionMessage = updateOrAppendSetComputeUnitPriceInstruction(
 *   // E.g. double the current price or set it to 10_000 if it isn't set.
 *   (currentPrice) => currentPrice === null ? 10_000 : currentPrice * 2,
 *   transactionMessage,
 * );
 * ```
 */
export declare function updateOrAppendSetComputeUnitPriceInstruction<TTransactionMessage extends BaseTransactionMessage>(microLamports: MicroLamports | ((previousMicroLamports: MicroLamports | null) => MicroLamports), transactionMessage: TTransactionMessage): TTransactionMessage;
//# sourceMappingURL=setComputePrice.d.ts.map