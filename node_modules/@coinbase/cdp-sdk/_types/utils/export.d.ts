/**
 * Generates a new RSA key pair with 4096-bit private key.
 * - Private key in PKCS1 DER format
 * - Public key in PKIX/SPKI DER format
 *
 * @returns A promise that resolves to the generated key pair, or rejects with an error.
 */
export declare const generateExportEncryptionKeyPair: () => Promise<{
    publicKey: string;
    privateKey: string;
}>;
/**
 * Decrypts a ciphertext using RSA-OAEP-SHA256.
 * - Parses PKCS1 private key
 * - Uses RSA-OAEP-SHA256 for decryption
 * - Returns hex-encoded result
 *
 * @param b64PrivateKey - The base64-encoded private key in PKCS1 DER format.
 * @param b64Cipher - The base64-encoded ciphertext.
 * @returns The decrypted key hex string, or throws an error if decryption fails.
 */
export declare const decryptWithPrivateKey: (b64PrivateKey: string, b64Cipher: string) => string;
/**
 * Format a private key to a base58 string for easy import into Solana wallet apps.
 *
 * @param privateKey - The private key as a hex string
 * @returns The formatted private key as a base58 string
 */
export declare const formatSolanaPrivateKey: (privateKey: string) => string;
//# sourceMappingURL=export.d.ts.map