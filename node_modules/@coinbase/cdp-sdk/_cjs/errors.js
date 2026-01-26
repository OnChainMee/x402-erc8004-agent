"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInputValidationError = exports.TimeoutError = void 0;
/**
 * TimeoutError is thrown when an operation times out.
 */
class TimeoutError extends Error {
    /**
     * Initializes a new TimeoutError instance.
     *
     * @param message - The error message.
     */
    constructor(message = "Timeout Error") {
        super(message);
        this.name = "TimeoutError";
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, TimeoutError);
        }
    }
}
exports.TimeoutError = TimeoutError;
/**
 * UserInputValidationError is thrown when validation of a user-supplied input fails.
 */
class UserInputValidationError extends Error {
    /**
     * Initializes a new UserInputValidationError instance.
     *
     * @param message - The user input validation error message.
     */
    constructor(message) {
        super(message);
        this.name = "UserInputValidationError";
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UserInputValidationError);
        }
    }
}
exports.UserInputValidationError = UserInputValidationError;
//# sourceMappingURL=errors.js.map