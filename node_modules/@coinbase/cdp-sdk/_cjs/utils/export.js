"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSolanaPrivateKey = exports.decryptWithPrivateKey = exports.generateExportEncryptionKeyPair = void 0;
const crypto_1 = require("crypto");
const web3_js_1 = require("@solana/web3.js");
const bs58_1 = __importDefault(require("bs58"));
/**
 * Generates a new RSA key pair with 4096-bit private key.
 * - Private key in PKCS1 DER format
 * - Public key in PKIX/SPKI DER format
 *
 * @returns A promise that resolves to the generated key pair, or rejects with an error.
 */
const generateExportEncryptionKeyPair = async () => {
    return await new Promise((resolve, reject) => {
        (0, crypto_1.generateKeyPair)("rsa", {
            modulusLength: 4096,
            publicKeyEncoding: {
                type: "spki",
                format: "der",
            },
            privateKeyEncoding: {
                type: "pkcs1",
                format: "der",
            },
        }, (err, publicKey, privateKey) => {
            if (err) {
                reject(err);
            }
            resolve({
                publicKey: publicKey.toString("base64"),
                privateKey: privateKey.toString("base64"),
            });
        });
    });
};
exports.generateExportEncryptionKeyPair = generateExportEncryptionKeyPair;
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
const decryptWithPrivateKey = (b64PrivateKey, b64Cipher) => {
    try {
        // Create a private key object from the PKCS1 DER format
        const privateKey = (0, crypto_1.createPrivateKey)({
            key: Buffer.from(b64PrivateKey, "base64"),
            format: "der",
            type: "pkcs1",
        });
        const decryptedBuffer = (0, crypto_1.privateDecrypt)({
            key: privateKey,
            padding: crypto_1.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        }, Buffer.from(b64Cipher, "base64"));
        return decryptedBuffer.toString("hex");
    }
    catch (error) {
        throw new Error(`Decryption failed: ${String(error)}`);
    }
};
exports.decryptWithPrivateKey = decryptWithPrivateKey;
/**
 * Format a private key to a base58 string for easy import into Solana wallet apps.
 *
 * @param privateKey - The private key as a hex string
 * @returns The formatted private key as a base58 string
 */
const formatSolanaPrivateKey = (privateKey) => {
    const privateKeyBytes = Buffer.from(privateKey, "hex");
    const keypair = web3_js_1.Keypair.fromSeed(privateKeyBytes);
    const fullKey = Buffer.concat([keypair.secretKey.subarray(0, 32), keypair.publicKey.toBytes()]);
    return bs58_1.default.encode(fullKey);
};
exports.formatSolanaPrivateKey = formatSolanaPrivateKey;
//# sourceMappingURL=export.js.map