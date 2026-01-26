import { TransactionRequestEIP1559 } from "../types/misc.js";
/**
 * Serializes a transaction for the Coinbase API.
 *
 * @param transaction - The transaction to serialize.
 * @returns The serialized transaction.
 */
export declare function serializeEIP1559Transaction(transaction: TransactionRequestEIP1559): `0x02${string}`;
//# sourceMappingURL=serializeTransaction.d.ts.map