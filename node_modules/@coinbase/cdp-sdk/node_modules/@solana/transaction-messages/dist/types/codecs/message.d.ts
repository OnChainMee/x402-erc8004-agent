import { VariableSizeCodec, VariableSizeDecoder, VariableSizeEncoder } from '@solana/codecs-core';
import { CompiledTransactionMessage, CompiledTransactionMessageWithLifetime } from '../compile/message';
/**
 * Returns an encoder that you can use to encode a {@link CompiledTransactionMessage} to a byte
 * array.
 *
 * The wire format of a Solana transaction consists of signatures followed by a compiled transaction
 * message. The byte array produced by this encoder is the message part.
 */
export declare function getCompiledTransactionMessageEncoder(): VariableSizeEncoder<CompiledTransactionMessage | (CompiledTransactionMessage & CompiledTransactionMessageWithLifetime)>;
/**
 * Returns a decoder that you can use to decode a byte array representing a
 * {@link CompiledTransactionMessage}.
 *
 * The wire format of a Solana transaction consists of signatures followed by a compiled transaction
 * message. You can use this decoder to decode the message part.
 */
export declare function getCompiledTransactionMessageDecoder(): VariableSizeDecoder<CompiledTransactionMessage & CompiledTransactionMessageWithLifetime>;
/**
 * Returns a codec that you can use to encode from or decode to {@link CompiledTransactionMessage}
 *
 * @see {@link getCompiledTransactionMessageDecoder}
 * @see {@link getCompiledTransactionMessageEncoder}
 */
export declare function getCompiledTransactionMessageCodec(): VariableSizeCodec<CompiledTransactionMessage | (CompiledTransactionMessage & CompiledTransactionMessageWithLifetime), CompiledTransactionMessage & CompiledTransactionMessageWithLifetime>;
//# sourceMappingURL=message.d.ts.map