import { ReadonlyUint8Array } from '@solana/codecs-core';
/**
 * Given a private key represented as a 32-byte `Uint8Array`, creates an Ed25519 private key for use
 * with other methods in this package that accept
 * [`CryptoKey`](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey) objects.
 *
 * @param bytes 32 bytes that represent the private key
 * @param extractable Setting this to `true` makes it possible to extract the bytes of the private
 * key using the [`crypto.subtle.exportKey()`](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/exportKey)
 * API. Defaults to `false`.
 *
 * @example
 * ```ts
 * import { createPrivateKeyFromBytes } from '@solana/keys';
 *
 * const privateKey = await createPrivateKeyFromBytes(new Uint8Array([...]));
 * const extractablePrivateKey = await createPrivateKeyFromBytes(new Uint8Array([...]), true);
 * ```
 */
export declare function createPrivateKeyFromBytes(bytes: ReadonlyUint8Array, extractable?: boolean): Promise<CryptoKey>;
//# sourceMappingURL=private-key.d.ts.map