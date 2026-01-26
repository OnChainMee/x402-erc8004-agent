"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeEIP1559Transaction = serializeEIP1559Transaction;
const viem_1 = require("viem");
/**
 * Serializes a transaction for the Coinbase API.
 *
 * @param transaction - The transaction to serialize.
 * @returns The serialized transaction.
 */
function serializeEIP1559Transaction(transaction) {
    return (0, viem_1.serializeTransaction)({
        ...transaction,
        chainId: 1, // ignored by Coinbase API
        type: "eip1559",
    });
}
//# sourceMappingURL=serializeTransaction.js.map