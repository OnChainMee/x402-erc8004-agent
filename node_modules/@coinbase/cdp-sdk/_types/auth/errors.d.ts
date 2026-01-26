/**
 * @module Errors
 */
/**
 * A class of errors for capturing stack traces.
 */
declare class BaseError extends Error {
    /**
     * Base error constructor.
     *
     * @param message - The message to display.
     */
    constructor(message: string);
}
/**
 * An error for invalid API key format.
 */
export declare class InvalidAPIKeyFormatError extends BaseError {
    /**
     * Invalid API key format error constructor.
     *
     * @param message - The message to display.
     */
    constructor(message: string);
}
/**
 * An error for invalid Wallet Secret format.
 */
export declare class InvalidWalletSecretFormatError extends BaseError {
    /**
     * Invalid Wallet Secret format error constructor.
     *
     * @param message - The message to display.
     */
    constructor(message: string);
}
/**
 * An error for an undefined Wallet Secret.
 */
export declare class UndefinedWalletSecretError extends BaseError {
    /**
     * Undefined Wallet Secret error constructor.
     *
     * @param message - The message to display.
     */
    constructor(message: string);
}
export {};
//# sourceMappingURL=errors.d.ts.map