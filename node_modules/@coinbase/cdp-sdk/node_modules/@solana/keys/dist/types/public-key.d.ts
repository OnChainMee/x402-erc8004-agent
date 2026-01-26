/**
 * Given an extractable [`CryptoKey`](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey)
 * private key, gets the corresponding public key as a
 * [`CryptoKey`](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey).
 *
 * @param extractable Setting this to `true` makes it possible to extract the bytes of the public
 * key using the [`crypto.subtle.exportKey()`](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/exportKey)
 * API. Defaults to `false`.
 *
 * @example
 * ```ts
 * import { createPrivateKeyFromBytes, getPublicKeyFromPrivateKey } from '@solana/keys';
 *
 * const privateKey = await createPrivateKeyFromBytes(new Uint8Array([...]), true);
 *
 * const publicKey = await getPublicKeyFromPrivateKey(privateKey);
 * const extractablePublicKey = await getPublicKeyFromPrivateKey(privateKey, true);
 * ```
 */
export declare function getPublicKeyFromPrivateKey(privateKey: CryptoKey, extractable?: boolean): Promise<CryptoKey>;
//# sourceMappingURL=public-key.d.ts.map