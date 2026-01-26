import { encodeFunctionData } from "viem";
import { SPEND_PERMISSION_MANAGER_ABI, SPEND_PERMISSION_MANAGER_ADDRESS, } from "../../../spend-permissions/constants.js";
import { sendUserOperation } from "../sendUserOperation.js";
/**
 * Use a spend permission to spend tokens.
 *
 * @param apiClient - The API client to use.
 * @param account - The smart account to use.
 * @param options - The options for the spend permission.
 *
 * @returns The result of the spend permission.
 */
export function useSpendPermission(apiClient, account, options) {
    const { spendPermission, value, network } = options;
    const data = encodeFunctionData({
        abi: SPEND_PERMISSION_MANAGER_ABI,
        functionName: "spend",
        args: [spendPermission, value],
    });
    return sendUserOperation(apiClient, {
        smartAccount: account,
        network: network,
        calls: [
            {
                to: SPEND_PERMISSION_MANAGER_ADDRESS,
                data,
                value: 0n,
            },
        ],
    });
}
//# sourceMappingURL=smartAccount.use.js.map