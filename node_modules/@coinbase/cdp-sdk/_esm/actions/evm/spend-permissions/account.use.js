import { encodeFunctionData } from "viem";
import { SPEND_PERMISSION_MANAGER_ABI, SPEND_PERMISSION_MANAGER_ADDRESS, } from "../../../spend-permissions/constants.js";
import { serializeEIP1559Transaction } from "../../../utils/serializeTransaction.js";
/**
 * Use a spend permission to spend tokens.
 *
 * @param apiClient - The API client to use.
 * @param address - The address of the account to use the spend permission on.
 * @param options - The options for the spend permission.
 *
 * @returns The transaction hash of the spend permission.
 */
export async function useSpendPermission(apiClient, address, options) {
    const { spendPermission, value, network } = options;
    const result = await apiClient.sendEvmTransaction(address, {
        transaction: serializeEIP1559Transaction({
            to: SPEND_PERMISSION_MANAGER_ADDRESS,
            data: encodeFunctionData({
                abi: SPEND_PERMISSION_MANAGER_ABI,
                functionName: "spend",
                args: [spendPermission, value],
            }),
        }),
        network: network,
    });
    return {
        transactionHash: result.transactionHash,
    };
}
//# sourceMappingURL=account.use.js.map