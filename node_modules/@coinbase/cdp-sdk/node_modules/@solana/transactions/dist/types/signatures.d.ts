import { Signature } from '@solana/keys';
import { NominalType } from '@solana/nominal-types';
import { TransactionWithLifetime } from './lifetime';
import { Transaction } from './transaction';
/**
 * Represents a transaction that is signed by all of its required signers. Being fully signed is a
 * prerequisite of functions designed to land transactions on the network.
 */
export type FullySignedTransaction = NominalType<'transactionSignedness', 'fullySigned'>;
/**
 * Given a transaction signed by its fee payer, this method will return the {@link Signature} that
 * uniquely identifies it. This string can be used to look up transactions at a later date, for
 * example on a Solana block explorer.
 *
 * @example
 * ```ts
 * import { getSignatureFromTransaction } from '@solana/transactions';
 *
 * const signature = getSignatureFromTransaction(tx);
 * console.debug(`Inspect this transaction at https://explorer.solana.com/tx/${signature}`);
 * ```
 */
export declare function getSignatureFromTransaction(transaction: Transaction): Signature;
/**
 * Given an array of `CryptoKey` objects which are private keys pertaining to addresses that are
 * required to sign a transaction, this method will return a new signed transaction of type
 * {@link Transaction}.
 *
 * Though the resulting transaction might have every signature it needs to land on the network, this
 * function will not assert that it does. A partially signed transaction cannot be landed on the
 * network, but can be serialized and deserialized.
 *
 * @example
 * ```ts
 * import { generateKeyPair } from '@solana/keys';
 * import { partiallySignTransaction } from '@solana/transactions';
 *
 * const partiallySignedTransaction = await partiallySignTransaction([myPrivateKey], tx);
 * ```
 *
 * @see {@link signTransaction} if you want to assert that the transaction has all of its required
 * signatures after signing.
 */
export declare function partiallySignTransaction<TTransaction extends Transaction & TransactionWithLifetime>(keyPairs: CryptoKeyPair[], transaction: TTransaction): Promise<TTransaction>;
/**
 * Given an array of `CryptoKey` objects which are private keys pertaining to addresses that are
 * required to sign a transaction, this method will return a new signed transaction of type
 * {@link FullySignedTransaction}.
 *
 * This function will throw unless the resulting transaction is fully signed.
 *
 * @example
 * ```ts
 * import { generateKeyPair } from '@solana/keys';
 * import { signTransaction } from '@solana/transactions';
 *
 * const signedTransaction = await signTransaction([myPrivateKey], tx);
 * ```
 *
 * @see {@link partiallySignTransaction} if you want to sign the transaction without asserting that
 * the resulting transaction is fully signed.
 */
export declare function signTransaction<TTransaction extends Transaction & TransactionWithLifetime>(keyPairs: CryptoKeyPair[], transaction: TTransaction): Promise<FullySignedTransaction & TTransaction>;
/**
 * Checks whether a given {@link Transaction} is fully signed.
 *
 * @example
 * ```ts
 * import { isFullySignedTransaction } from '@solana/transactions';
 *
 * const transaction = getTransactionDecoder().decode(transactionBytes);
 * if (isFullySignedTransaction(transaction)) {
 *   // At this point we know that the transaction is signed and can be sent to the network.
 * }
 * ```
 */
export declare function isFullySignedTransaction<TTransaction extends Transaction>(transaction: TTransaction): transaction is FullySignedTransaction & TTransaction;
/**
 * From time to time you might acquire a {@link Transaction}, that you expect to be fully signed,
 * from an untrusted network API or user input. Use this function to assert that such a transaction
 * is fully signed.
 *
 * @example
 * ```ts
 * import { assertIsFullySignedTransaction } from '@solana/transactions';
 *
 * const transaction = getTransactionDecoder().decode(transactionBytes);
 * try {
 *     // If this type assertion function doesn't throw, then Typescript will upcast `transaction`
 *     // to `FullySignedTransaction`.
 *     assertIsFullySignedTransaction(transaction);
 *     // At this point we know that the transaction is signed and can be sent to the network.
 *     await sendAndConfirmTransaction(transaction, { commitment: 'confirmed' });
 * } catch(e) {
 *     if (isSolanaError(e, SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING)) {
 *         setError(`Missing signatures for ${e.context.addresses.join(', ')}`);
 *     }
 *     throw;
 * }
 * ```
 */
export declare function assertIsFullySignedTransaction<TTransaction extends Transaction>(transaction: TTransaction): asserts transaction is FullySignedTransaction & TTransaction;
//# sourceMappingURL=signatures.d.ts.map