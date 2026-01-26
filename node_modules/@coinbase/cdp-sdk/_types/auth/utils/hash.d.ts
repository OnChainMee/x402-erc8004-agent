/**
 * @module Hash
 */
/**
 * Auth-specific hash function using uncrypto for Edge runtime compatibility.
 * Computes SHA-256 hash of the given data.
 *
 * @param data - The data to hash
 * @returns Promise that resolves to the hex-encoded hash
 */
export declare const authHash: (data: Buffer) => Promise<string>;
//# sourceMappingURL=hash.d.ts.map