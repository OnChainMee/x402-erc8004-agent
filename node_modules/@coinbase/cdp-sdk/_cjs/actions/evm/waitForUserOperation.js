"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForUserOperation = waitForUserOperation;
const index_js_1 = require("../../openapi-client/index.js");
const wait_js_1 = require("../../utils/wait.js");
/**
 * Waits for a user operation to complete or fail.
 *
 * @example
 * ```ts
 * import { waitForUserOperation } from "@coinbase/cdp-sdk";
 *
 * const result = await waitForUserOperation(client, {
 *   userOpHash: "0x1234567890123456789012345678901234567890",
 *   smartAccountAddress: "0x1234567890123456789012345678901234567890",
 *   waitOptions: {
 *     timeoutSeconds: 30,
 *   },
 * });
 * ```
 *
 * @param {CdpOpenApiClientType} client - The client to use to wait for the user operation.
 * @param {WaitForUserOperationOptions} options - The options for the wait operation.
 * @returns {Promise<WaitForUserOperationReturnType>} The result of the user operation.
 */
async function waitForUserOperation(client, options) {
    const { userOpHash, smartAccountAddress } = options;
    const reload = async () => {
        const response = await client.getUserOperation(smartAccountAddress, userOpHash);
        return response;
    };
    const transform = (operation) => {
        if (operation.status === index_js_1.EvmUserOperationStatus.failed) {
            return {
                smartAccountAddress: smartAccountAddress,
                status: index_js_1.EvmUserOperationStatus.failed,
                userOpHash: operation.userOpHash,
            };
        }
        else if (operation.status === index_js_1.EvmUserOperationStatus.complete) {
            return {
                smartAccountAddress: smartAccountAddress,
                transactionHash: operation.transactionHash,
                status: index_js_1.EvmUserOperationStatus.complete,
                userOpHash: operation.userOpHash,
            };
        }
        else {
            throw new Error("User operation is not terminal");
        }
    };
    const waitOptions = options.waitOptions || {
        timeoutSeconds: 30,
    };
    return await (0, wait_js_1.wait)(reload, isTerminal, transform, waitOptions);
}
const isTerminal = (operation) => {
    return (operation.status === index_js_1.EvmUserOperationStatus.complete ||
        operation.status === index_js_1.EvmUserOperationStatus.failed);
};
//# sourceMappingURL=waitForUserOperation.js.map