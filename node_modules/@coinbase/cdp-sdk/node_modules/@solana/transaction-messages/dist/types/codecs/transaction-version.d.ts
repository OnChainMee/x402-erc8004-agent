import { VariableSizeCodec, VariableSizeDecoder, VariableSizeEncoder } from '@solana/codecs-core';
import { TransactionVersion } from '../transaction-message';
/**
 * Returns an encoder that you can use to encode a {@link TransactionVersion} to a byte array.
 *
 * Legacy messages will produce an empty array and will not advance the offset. Versioned messages
 * will produce an array with a single byte.
 */
export declare function getTransactionVersionEncoder(): VariableSizeEncoder<TransactionVersion>;
/**
 * Returns a decoder that you can use to decode a byte array representing a
 * {@link TransactionVersion}.
 *
 * When the byte at the current offset is determined to represent a legacy transaction, this decoder
 * will return `'legacy'` and will not advance the offset.
 */
export declare function getTransactionVersionDecoder(): VariableSizeDecoder<TransactionVersion>;
/**
 * Returns a codec that you can use to encode from or decode to {@link TransactionVersion}
 *
 * @see {@link getTransactionVersionDecoder}
 * @see {@link getTransactionVersionEncoder}
 */
export declare function getTransactionVersionCodec(): VariableSizeCodec<TransactionVersion>;
//# sourceMappingURL=transaction-version.d.ts.map