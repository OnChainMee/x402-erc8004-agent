"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signMessage = signMessage;
/**
 * Sign a message.
 *
 * @param apiClient - The API client.
 * @param {SignMessageOptions} options - Parameters for signing the message.
 * @param {string} options.address - The address to sign the message for.
 * @param {string} options.message - The message to sign.
 * @param {string} [options.idempotencyKey] - An idempotency key.
 *
 * @returns A promise that resolves to the transaction signature.
 *
 * @example
 *          ```ts
 *          const signature = await signMessage(cdp.solana, {
 *            address: "1234567890123456789012345678901234567890",
 *            message: "Hello, world!",
 *          });
 *          ```
 */
async function signMessage(apiClient, options) {
    const signature = await apiClient.signSolanaMessage(options.address, { message: options.message }, options.idempotencyKey);
    return {
        signature: signature.signature,
    };
}
//# sourceMappingURL=signMessage.js.map