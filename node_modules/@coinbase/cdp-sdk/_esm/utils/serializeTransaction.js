import { serializeTransaction } from "viem";
/**
 * Serializes a transaction for the Coinbase API.
 *
 * @param transaction - The transaction to serialize.
 * @returns The serialized transaction.
 */
export function serializeEIP1559Transaction(transaction) {
    return serializeTransaction({
        ...transaction,
        chainId: 1, // ignored by Coinbase API
        type: "eip1559",
    });
}
//# sourceMappingURL=serializeTransaction.js.map