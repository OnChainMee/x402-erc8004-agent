/**
 * Deterministically generates a UUIDv4 from a given input string.
 * This is necessary when we need to generate downstream idempotency keys for operations that have multiple calls.
 *
 * @param input - The input string to derive from
 * @param salt - Optional salt to append to the input (defaults to "salt")
 * @returns A UUIDv4 formatted string
 */
export declare function createDeterministicUuidV4(input: string, salt?: string): string;
//# sourceMappingURL=uuidV4.d.ts.map