import { serializeTransaction } from "viem";
/**
 * Sends an EVM transaction.
 *
 * @param apiClient - The API client.
 * @param options - The options for sending the transaction.
 *
 * @returns The result of the transaction.
 */
export async function sendTransaction(apiClient, options) {
    const { address, network, idempotencyKey } = options;
    let transaction = options.transaction;
    if (typeof transaction !== "string") {
        transaction = serializeTransaction({
            ...transaction,
            // chainId is ignored in favor of network
            chainId: 1,
            type: "eip1559",
        });
    }
    const result = await apiClient.sendEvmTransaction(address, { transaction, network }, idempotencyKey);
    return {
        transactionHash: result.transactionHash,
    };
}
//# sourceMappingURL=sendTransaction.js.map