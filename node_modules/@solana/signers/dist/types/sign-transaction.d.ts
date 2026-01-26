import { SignatureBytes } from '@solana/keys';
import { BaseTransactionMessage, TransactionMessageWithFeePayer } from '@solana/transaction-messages';
import { SendableTransaction, Transaction, TransactionWithinSizeLimit, TransactionWithLifetime } from '@solana/transactions';
import { TransactionMessageWithSigners } from './account-signer-meta';
import { TransactionPartialSignerConfig } from './transaction-partial-signer';
import { TransactionSendingSignerConfig } from './transaction-sending-signer';
/**
 * Extracts all {@link TransactionSigner | TransactionSigners} inside the provided
 * transaction message and uses them to return a signed transaction.
 *
 * It first uses all {@link TransactionModifyingSigner | TransactionModifyingSigners} sequentially before
 * using all {@link TransactionPartialSigner | TransactionPartialSigners} in parallel.
 *
 * If a composite signer implements both interfaces, it will be used as a
 * {@link TransactionModifyingSigner} if no other signer implements that interface.
 * Otherwise, it will be used as a {@link TransactionPartialSigner}.
 *
 * @example
 * ```ts
 * const signedTransaction = await partiallySignTransactionMessageWithSigners(transactionMessage);
 * ```
 *
 * It also accepts an optional {@link AbortSignal} that will be propagated to all signers.
 *
 * ```ts
 * const signedTransaction = await partiallySignTransactionMessageWithSigners(transactionMessage, {
 *     abortSignal: myAbortController.signal,
 * });
 * ```
 *
 * @remarks
 * Finally, note that this function ignores {@link TransactionSendingSigner | TransactionSendingSigners}
 * as it does not send the transaction. Check out the {@link signAndSendTransactionMessageWithSigners}
 * function for more details on how to use sending signers.
 *
 * @see {@link signTransactionMessageWithSigners}
 * @see {@link signAndSendTransactionMessageWithSigners}
 */
export declare function partiallySignTransactionMessageWithSigners(transactionMessage: BaseTransactionMessage & TransactionMessageWithFeePayer & TransactionMessageWithSigners, config?: TransactionPartialSignerConfig): Promise<Transaction & TransactionWithinSizeLimit & TransactionWithLifetime>;
/**
 * Extracts all {@link TransactionSigner | TransactionSigners} inside the provided
 * transaction message and uses them to return a signed transaction before asserting
 * that all signatures required by the transaction are present.
 *
 * This function delegates to the {@link partiallySignTransactionMessageWithSigners} function
 * in order to extract signers from the transaction message and sign the transaction.
 *
 * @example
 * ```ts
 * const mySignedTransaction = await signTransactionMessageWithSigners(myTransactionMessage);
 *
 * // With additional config.
 * const mySignedTransaction = await signTransactionMessageWithSigners(myTransactionMessage, {
 *     abortSignal: myAbortController.signal,
 * });
 *
 * // We now know the transaction is fully signed.
 * mySignedTransaction satisfies FullySignedTransaction;
 * ```
 *
 * @see {@link partiallySignTransactionMessageWithSigners}
 * @see {@link signAndSendTransactionMessageWithSigners}
 */
export declare function signTransactionMessageWithSigners(transactionMessage: BaseTransactionMessage & TransactionMessageWithFeePayer & TransactionMessageWithSigners, config?: TransactionPartialSignerConfig): Promise<SendableTransaction & Transaction & TransactionWithLifetime>;
/**
 * Extracts all {@link TransactionSigner | TransactionSigners} inside the provided
 * transaction message and uses them to sign it before sending it immediately to the blockchain.
 *
 * It returns the signature of the sent transaction (i.e. its identifier) as bytes.
 *
 * @example
 * ```ts
 * import { signAndSendTransactionMessageWithSigners } from '@solana/signers';
 *
 * const transactionSignature = await signAndSendTransactionMessageWithSigners(transactionMessage);
 *
 * // With additional config.
 * const transactionSignature = await signAndSendTransactionMessageWithSigners(transactionMessage, {
 *     abortSignal: myAbortController.signal,
 * });
 * ```
 *
 * @remarks
 * Similarly to the {@link partiallySignTransactionMessageWithSigners} function, it first uses all
 * {@link TransactionModifyingSigner | TransactionModifyingSigners} sequentially before using all
 * {@link TransactionPartialSigner | TransactionPartialSigners} in parallel.
 * It then sends the transaction using the {@link TransactionSendingSigner} it identified.
 *
 * Composite transaction signers are treated such that at least one sending signer is used if any.
 * When a {@link TransactionSigner} implements more than one interface, we use it as a:
 *
 * - {@link TransactionSendingSigner}, if no other {@link TransactionSendingSigner} exists.
 * - {@link TransactionModifyingSigner}, if no other {@link TransactionModifyingSigner} exists.
 * - {@link TransactionPartialSigner}, otherwise.
 *
 * The provided transaction must contain exactly one {@link TransactionSendingSigner} inside its account metas.
 * If more than one composite signers implement the {@link TransactionSendingSigner} interface,
 * one of them will be selected as the sending signer. Otherwise, if multiple
 * {@link TransactionSendingSigner | TransactionSendingSigners} must be selected, the function will throw an error.
 *
 * If you'd like to assert that a transaction makes use of exactly one {@link TransactionSendingSigner}
 * _before_ calling this function, you may use the {@link assertIsTransactionMessageWithSingleSendingSigner} function.
 *
 * Alternatively, you may use the {@link isTransactionMessageWithSingleSendingSigner} function to provide a
 * fallback in case the transaction does not contain any sending signer.
 *
 * @see {@link assertIsTransactionMessageWithSingleSendingSigner}
 * @see {@link isTransactionMessageWithSingleSendingSigner}
 * @see {@link partiallySignTransactionMessageWithSigners}
 * @see {@link signTransactionMessageWithSigners}
 *
 */
export declare function signAndSendTransactionMessageWithSigners(transaction: BaseTransactionMessage & TransactionMessageWithFeePayer & TransactionMessageWithSigners, config?: TransactionSendingSignerConfig): Promise<SignatureBytes>;
//# sourceMappingURL=sign-transaction.d.ts.map