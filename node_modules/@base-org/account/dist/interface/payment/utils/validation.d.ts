import { type Address } from 'viem';
/**
 * Validates that the amount is a positive string with max decimal places
 * @param amount - The amount to validate as a string
 * @param maxDecimals - Maximum number of decimal places allowed
 * @throws Error if amount is invalid
 */
export declare function validateStringAmount(amount: string, maxDecimals: number): void;
/**
 * Validates that the address is a valid Ethereum address
 * @param address - The address to validate
 * @throws Error if address is invalid
 * @returns The checksummed address
 */
export declare function normalizeAddress(address: string): Address;
//# sourceMappingURL=validation.d.ts.map