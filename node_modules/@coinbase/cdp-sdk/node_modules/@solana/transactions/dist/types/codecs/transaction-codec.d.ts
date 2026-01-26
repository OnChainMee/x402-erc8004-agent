import { VariableSizeCodec, VariableSizeDecoder, VariableSizeEncoder } from '@solana/codecs-core';
import { Transaction } from '../transaction';
/**
 * Returns an encoder that you can use to encode a {@link Transaction} to a byte array in a wire
 * format appropriate for sending to the Solana network for execution.
 */
export declare function getTransactionEncoder(): VariableSizeEncoder<Transaction>;
/**
 * Returns a decoder that you can use to convert a byte array in the Solana transaction wire format
 * to a {@link Transaction} object.
 *
 * @example
 * ```ts
 * import { getTransactionDecoder } from '@solana/transactions';
 *
 * const transactionDecoder = getTransactionDecoder();
 * const transaction = transactionDecoder.decode(wireTransactionBytes);
 * for (const [address, signature] in Object.entries(transaction.signatures)) {
 *     console.log(`Signature by ${address}`, signature);
 * }
 * ```
 */
export declare function getTransactionDecoder(): VariableSizeDecoder<Transaction>;
/**
 * Returns a codec that you can use to encode from or decode to a {@link Transaction}
 *
 * @see {@link getTransactionDecoder}
 * @see {@link getTransactionEncoder}
 */
export declare function getTransactionCodec(): VariableSizeCodec<Transaction>;
//# sourceMappingURL=transaction-codec.d.ts.map