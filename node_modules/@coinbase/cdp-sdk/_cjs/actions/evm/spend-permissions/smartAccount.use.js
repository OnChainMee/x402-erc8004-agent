"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpendPermission = useSpendPermission;
const viem_1 = require("viem");
const constants_js_1 = require("../../../spend-permissions/constants.js");
const sendUserOperation_js_1 = require("../sendUserOperation.js");
/**
 * Use a spend permission to spend tokens.
 *
 * @param apiClient - The API client to use.
 * @param account - The smart account to use.
 * @param options - The options for the spend permission.
 *
 * @returns The result of the spend permission.
 */
function useSpendPermission(apiClient, account, options) {
    const { spendPermission, value, network } = options;
    const data = (0, viem_1.encodeFunctionData)({
        abi: constants_js_1.SPEND_PERMISSION_MANAGER_ABI,
        functionName: "spend",
        args: [spendPermission, value],
    });
    return (0, sendUserOperation_js_1.sendUserOperation)(apiClient, {
        smartAccount: account,
        network: network,
        calls: [
            {
                to: constants_js_1.SPEND_PERMISSION_MANAGER_ADDRESS,
                data,
                value: 0n,
            },
        ],
    });
}
//# sourceMappingURL=smartAccount.use.js.map