import type { Commitment } from '@solana/rpc-types';
type Config = Readonly<{
    abortSignal: AbortSignal;
    /**
     * The timeout promise will throw after 30 seconds when the commitment is `processed`, and 60
     * seconds otherwise.
     */
    commitment: Commitment;
}>;
/**
 * When no other heuristic exists to infer that a transaction has expired, you can use this promise
 * factory with a commitment level. It throws after 30 seconds when the commitment is `processed`,
 * and 60 seconds otherwise. You would typically race this with another confirmation strategy.
 *
 * @param config
 *
 * @example
 * ```ts
 * import { safeRace } from '@solana/promises';
 * import { getTimeoutPromise } from '@solana/transaction-confirmation';
 *
 * try {
 *     await safeRace([getCustomTransactionConfirmationPromise(/* ... *\/), getTimeoutPromise({ commitment })]);
 * } catch (e) {
 *     if (e instanceof DOMException && e.name === 'TimeoutError') {
 *         console.log('Could not confirm transaction after a timeout');
 *     }
 *     throw e;
 * }
 * ```
 */
export declare function getTimeoutPromise({ abortSignal: callerAbortSignal, commitment }: Config): Promise<unknown>;
export {};
//# sourceMappingURL=confirmation-strategy-timeout.d.ts.map