"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transfer = transfer;
const types_js_1 = require("./types.js");
/**
 * Transfer an amount of a token from an account to another account.
 *
 * @param apiClient - The client to use to send the transaction.
 * @param from - The account to send the transaction from.
 * @param transferArgs - The options for the transfer.
 * @param transferStrategy - The strategy to use to execute the transfer.
 * @returns The result of the transfer.
 */
async function transfer(apiClient, from, transferArgs, transferStrategy) {
    if (!(0, types_js_1.isValidNetworkForAccount)(transferArgs.network, from)) {
        throw new Error(`Network "${transferArgs.network}" is not supported for the given account type.`);
    }
    const to = typeof transferArgs.to === "string" ? transferArgs.to : transferArgs.to.address;
    const transfer = {
        apiClient,
        from,
        to,
        value: transferArgs.amount,
        token: transferArgs.token,
        network: transferArgs.network,
        paymasterUrl: "paymasterUrl" in transferArgs ? transferArgs.paymasterUrl : undefined,
    };
    return transferStrategy.executeTransfer(transfer);
}
//# sourceMappingURL=transfer.js.map