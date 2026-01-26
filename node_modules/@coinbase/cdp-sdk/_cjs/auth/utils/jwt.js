"use strict";
/**
 * @module JWT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJwt = generateJwt;
exports.generateWalletJwt = generateWalletJwt;
const jose_1 = require("jose");
const uncrypto_1 = require("uncrypto");
const hash_js_1 = require("./hash.js");
const errors_js_1 = require("../../errors.js");
const sortKeys_js_1 = require("../../utils/sortKeys.js");
const errors_js_2 = require("../errors.js");
/**
 * Generates a JWT (also known as a Bearer token) for authenticating with Coinbase's REST APIs.
 * Supports both EC (ES256) and Ed25519 (EdDSA) keys. Also supports JWTs meant for
 * websocket connections by allowing requestMethod, requestHost, and requestPath to all be
 * null, in which case the 'uris' claim is omitted from the JWT.
 *
 * @param options - The configuration options for generating the JWT
 * @returns The generated JWT (Bearer token) string
 * @throws {Error} If required parameters are missing, invalid, or if JWT signing fails
 */
async function generateJwt(options) {
    // Validate required parameters
    if (!options.apiKeyId) {
        throw new Error("Key name is required");
    }
    if (!options.apiKeySecret) {
        throw new Error("Private key is required");
    }
    // Check if we have a REST API request or a websocket connection
    const hasAllRequestParams = Boolean(options.requestMethod && options.requestHost && options.requestPath);
    const hasNoRequestParams = (options.requestMethod === undefined || options.requestMethod === null) &&
        (options.requestHost === undefined || options.requestHost === null) &&
        (options.requestPath === undefined || options.requestPath === null);
    // Ensure we either have all request parameters or none (for websocket)
    if (!hasAllRequestParams && !hasNoRequestParams) {
        throw new Error("Either all request details (method, host, path) must be provided, or all must be null for JWTs intended for websocket connections");
    }
    const now = Math.floor(Date.now() / 1000);
    const expiresIn = options.expiresIn || 120; // Default to 120 seconds if not specified
    // Prepare the JWT payload
    const claims = {
        sub: options.apiKeyId,
        iss: "cdp",
        aud: options.audience,
    };
    // Add the uris claim only for REST API requests
    if (hasAllRequestParams) {
        claims.uris = [`${options.requestMethod} ${options.requestHost}${options.requestPath}`];
    }
    // Generate random nonce for the header
    const randomNonce = nonce();
    // Determine if we're using EC or Edwards key based on the key format
    if (await isValidECKey(options.apiKeySecret)) {
        return await buildECJWT(options.apiKeySecret, options.apiKeyId, claims, now, expiresIn, randomNonce);
    }
    else if (isValidEd25519Key(options.apiKeySecret)) {
        return await buildEdwardsJWT(options.apiKeySecret, options.apiKeyId, claims, now, expiresIn, randomNonce);
    }
    else {
        throw new errors_js_1.UserInputValidationError("Invalid key format - must be either PEM EC key or base64 Ed25519 key");
    }
}
/**
 * Generates a wallet authentication JWT for the given API endpoint URL.
 * Used for authenticating with specific endpoints that require wallet authentication.
 *
 * @param options - The configuration options for generating the JWT
 * @returns The generated JWT (Bearer token) string
 * @throws {UndefinedWalletSecretError} If the Wallet Secret is not defined.
 * @throws {InvalidWalletSecretFormatError} If the private key is not in the correct format or signing fails.
 */
async function generateWalletJwt(options) {
    if (!options.walletSecret) {
        throw new errors_js_2.UndefinedWalletSecretError("Wallet Secret is not defined");
    }
    const uri = `${options.requestMethod} ${options.requestHost}${options.requestPath}`;
    const now = Math.floor(Date.now() / 1000);
    const claims = {
        uris: [uri],
    };
    const shouldIncludeReqHash = typeof options.requestData === "object" &&
        Object.keys(options.requestData).length > 0 &&
        Object.values(options.requestData).some(value => value !== undefined);
    if (shouldIncludeReqHash) {
        const sortedData = (0, sortKeys_js_1.sortKeys)(options.requestData);
        claims.reqHash = await (0, hash_js_1.authHash)(Buffer.from(JSON.stringify(sortedData)));
    }
    try {
        // Convert base64 DER to PEM format for jose
        const derBuffer = Buffer.from(options.walletSecret, "base64");
        const pemKey = `-----BEGIN PRIVATE KEY-----\n${derBuffer
            .toString("base64")
            .match(/.{1,64}/g)
            ?.join("\n")}\n-----END PRIVATE KEY-----`;
        const ecKey = await (0, jose_1.importPKCS8)(pemKey, "ES256");
        return await new jose_1.SignJWT(claims)
            .setProtectedHeader({ alg: "ES256", typ: "JWT" })
            .setIssuedAt(now)
            .setNotBefore(now)
            .setJti(nonce())
            .sign(ecKey);
    }
    catch (error) {
        throw new errors_js_2.InvalidWalletSecretFormatError("Could not create the EC key: " + error);
    }
}
/**
 * Determines if a string could be a valid Ed25519 key
 *
 * @param str - The string to test
 * @returns True if the string could be a valid Ed25519 key, false otherwise
 */
function isValidEd25519Key(str) {
    try {
        const decoded = Buffer.from(str, "base64");
        return decoded.length === 64;
    }
    catch {
        return false;
    }
}
/**
 * Determines if a string is a valid EC private key in PEM format
 *
 * @param str - The string to test
 * @returns True if the string is a valid EC private key in PEM format
 */
async function isValidECKey(str) {
    try {
        // Try to import the key with jose - if it works, it's a valid EC key
        await (0, jose_1.importPKCS8)(str, "ES256");
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Builds a JWT using an EC key.
 *
 * @param privateKey - The EC private key in PEM format
 * @param keyName - The key name/ID
 * @param claims - The JWT claims
 * @param now - Current timestamp in seconds
 * @param expiresIn - Number of seconds until the token expires
 * @param nonce - Random nonce for the JWT header
 * @returns A JWT token signed with an EC key
 * @throws {Error} If key conversion, import, or signing fails
 */
async function buildECJWT(privateKey, keyName, claims, now, expiresIn, nonce) {
    try {
        // Import the key directly with jose
        const ecKey = await (0, jose_1.importPKCS8)(privateKey, "ES256");
        // Sign and return the JWT
        return await new jose_1.SignJWT(claims)
            .setProtectedHeader({ alg: "ES256", kid: keyName, typ: "JWT", nonce })
            .setIssuedAt(Math.floor(now))
            .setNotBefore(Math.floor(now))
            .setExpirationTime(Math.floor(now + expiresIn))
            .sign(ecKey);
    }
    catch (error) {
        throw new Error(`Failed to generate EC JWT: ${error.message}`);
    }
}
/**
 * Builds a JWT using an Ed25519 key.
 *
 * @param privateKey - The Ed25519 private key in base64 format
 * @param keyName - The key name/ID
 * @param claims - The JWT claims
 * @param now - Current timestamp in seconds
 * @param expiresIn - Number of seconds until the token expires
 * @param nonce - Random nonce for the JWT header
 * @returns A JWT token using an Ed25519 key
 * @throws {Error} If key parsing, import, or signing fails
 */
async function buildEdwardsJWT(privateKey, keyName, claims, now, expiresIn, nonce) {
    try {
        // Decode the base64 key (expecting 64 bytes: 32 for seed + 32 for public key)
        const decoded = Buffer.from(privateKey, "base64");
        if (decoded.length !== 64) {
            throw new errors_js_1.UserInputValidationError("Invalid Ed25519 key length");
        }
        const seed = decoded.subarray(0, 32);
        const publicKey = decoded.subarray(32);
        // Create JWK from the key components
        const jwk = {
            kty: "OKP",
            crv: "Ed25519",
            d: seed.toString("base64url"),
            x: publicKey.toString("base64url"),
        };
        // Import the key for signing
        const key = await (0, jose_1.importJWK)(jwk, "EdDSA");
        // Sign and return the JWT
        return await new jose_1.SignJWT(claims)
            .setProtectedHeader({ alg: "EdDSA", kid: keyName, typ: "JWT", nonce })
            .setIssuedAt(Math.floor(now))
            .setNotBefore(Math.floor(now))
            .setExpirationTime(Math.floor(now + expiresIn))
            .sign(key);
    }
    catch (error) {
        throw new Error(`Failed to generate Ed25519 JWT: ${error.message}`);
    }
}
/**
 * Generates a random nonce for the JWT.
 *
 * @returns {string} The generated nonce.
 */
function nonce() {
    const bytes = new Uint8Array(16);
    (0, uncrypto_1.getRandomValues)(bytes);
    return Buffer.from(bytes).toString("hex");
}
//# sourceMappingURL=jwt.js.map