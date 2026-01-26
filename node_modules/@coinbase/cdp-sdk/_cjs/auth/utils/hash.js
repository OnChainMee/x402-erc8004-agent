"use strict";
/**
 * @module Hash
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.authHash = void 0;
const uncrypto_1 = require("uncrypto");
/**
 * Auth-specific hash function using uncrypto for Edge runtime compatibility.
 * Computes SHA-256 hash of the given data.
 *
 * @param data - The data to hash
 * @returns Promise that resolves to the hex-encoded hash
 */
const authHash = async (data) => {
    const hashBuffer = await uncrypto_1.subtle.digest("SHA-256", data);
    return Buffer.from(hashBuffer).toString("hex");
};
exports.authHash = authHash;
//# sourceMappingURL=hash.js.map