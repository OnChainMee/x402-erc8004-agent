"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestFaucet = requestFaucet;
/**
 * Requests funds from an EVM faucet.
 *
 * @param apiClient - The API client.
 * @param options - The options for requesting funds from the EVM faucet.
 *
 * @returns A promise that resolves to the transaction hash.
 */
async function requestFaucet(apiClient, options) {
    const { transactionHash } = await apiClient.requestEvmFaucet({ address: options.address, network: options.network, token: options.token }, options.idempotencyKey);
    return {
        transactionHash: transactionHash,
    };
}
//# sourceMappingURL=requestFaucet.js.map