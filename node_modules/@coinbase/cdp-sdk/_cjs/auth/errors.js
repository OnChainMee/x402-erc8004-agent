"use strict";
/**
 * @module Errors
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndefinedWalletSecretError = exports.InvalidWalletSecretFormatError = exports.InvalidAPIKeyFormatError = void 0;
/**
 * A class of errors for capturing stack traces.
 */
class BaseError extends Error {
    /**
     * Base error constructor.
     *
     * @param message - The message to display.
     */
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
/**
 * An error for invalid API key format.
 */
class InvalidAPIKeyFormatError extends BaseError {
    /**
     * Invalid API key format error constructor.
     *
     * @param message - The message to display.
     */
    constructor(message) {
        super("Invalid API key format: " + message);
    }
}
exports.InvalidAPIKeyFormatError = InvalidAPIKeyFormatError;
/**
 * An error for invalid Wallet Secret format.
 */
class InvalidWalletSecretFormatError extends BaseError {
    /**
     * Invalid Wallet Secret format error constructor.
     *
     * @param message - The message to display.
     */
    constructor(message) {
        super("Invalid Wallet Secret format: " + message);
    }
}
exports.InvalidWalletSecretFormatError = InvalidWalletSecretFormatError;
/**
 * An error for an undefined Wallet Secret.
 */
class UndefinedWalletSecretError extends BaseError {
    /**
     * Undefined Wallet Secret error constructor.
     *
     * @param message - The message to display.
     */
    constructor(message) {
        super("Undefined Wallet Secret: " + message);
    }
}
exports.UndefinedWalletSecretError = UndefinedWalletSecretError;
//# sourceMappingURL=errors.js.map