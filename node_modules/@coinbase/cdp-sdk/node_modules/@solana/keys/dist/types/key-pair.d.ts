import { ReadonlyUint8Array } from '@solana/codecs-core';
/**
 * Generates an Ed25519 public/private key pair for use with other methods in this package that
 * accept [`CryptoKey`](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey) objects.
 *
 * @example
 * ```ts
 * import { generateKeyPair } from '@solana/keys';
 *
 * const { privateKey, publicKey } = await generateKeyPair();
 * ```
 */
export declare function generateKeyPair(): Promise<CryptoKeyPair>;
/**
 * Given a 64-byte `Uint8Array` secret key, creates an Ed25519 public/private key pair for use with
 * other methods in this package that accept [`CryptoKey`](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey)
 * objects.
 *
 * @param bytes 64 bytes, the first 32 of which represent the private key and the last 32 of which
 * represent its associated public key
 * @param extractable Setting this to `true` makes it possible to extract the bytes of the private
 * key using the [`crypto.subtle.exportKey()`](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/exportKey)
 * API. Defaults to `false`.
 *
 * @example
 * ```ts
 * import fs from 'fs';
 * import { createKeyPairFromBytes } from '@solana/keys';
 *
 * // Get bytes from local keypair file.
 * const keypairFile = fs.readFileSync('~/.config/solana/id.json');
 * const keypairBytes = new Uint8Array(JSON.parse(keypairFile.toString()));
 *
 * // Create a CryptoKeyPair from the bytes.
 * const { privateKey, publicKey } = await createKeyPairFromBytes(keypairBytes);
 * ```
 */
export declare function createKeyPairFromBytes(bytes: ReadonlyUint8Array, extractable?: boolean): Promise<CryptoKeyPair>;
/**
 * Given a private key represented as a 32-byte `Uint8Array`, creates an Ed25519 public/private key
 * pair for use with other methods in this package that accept [`CryptoKey`](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey)
 * objects.
 *
 * @param bytes 32 bytes that represent the private key
 * @param extractable Setting this to `true` makes it possible to extract the bytes of the private
 * key using the [`crypto.subtle.exportKey()`](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/exportKey)
 * API. Defaults to `false`.
 *
 * @example
 * ```ts
 * import { createKeyPairFromPrivateKeyBytes } from '@solana/keys';
 *
 * const { privateKey, publicKey } = await createKeyPairFromPrivateKeyBytes(new Uint8Array([...]));
 * ```
 *
 * This can be useful when you have a private key but not the corresponding public key or when you
 * need to derive key pairs from seeds. For instance, the following code snippet derives a key pair
 * from the hash of a message.
 *
 * ```ts
 * import { getUtf8Encoder } from '@solana/codecs-strings';
 * import { createKeyPairFromPrivateKeyBytes } from '@solana/keys';
 *
 * const message = getUtf8Encoder().encode('Hello, World!');
 * const seed = new Uint8Array(await crypto.subtle.digest('SHA-256', message));
 *
 * const derivedKeypair = await createKeyPairFromPrivateKeyBytes(seed);
 * ```
 */
export declare function createKeyPairFromPrivateKeyBytes(bytes: ReadonlyUint8Array, extractable?: boolean): Promise<CryptoKeyPair>;
//# sourceMappingURL=key-pair.d.ts.map