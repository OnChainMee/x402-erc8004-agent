import { createSpendPermissionTypedData, dateToTimestampInSeconds } from '../utils.js';
import { withTelemetry } from '../withTelemetry.js';
import { getHash } from './getHash.js';
/**
 * Requests user approval to create a new spend permission.
 *
 * This helper method opens a prompt to ask the user to sign a spend permission.
 * To learn more about spend permissions, see the [Spend Permission documentation](https://docs.base.org/base-account/improve-ux/spend-permissions).
 *
 * The method uses EIP-712 typed data signing to create a cryptographically secure
 * permission that can be verified on-chain. The resulting permission object contains
 * the signature and all necessary data for later use.
 *
 * @param params - The parameters for the requestSpendPermission method.
 * @param params.provider - Base Account Provider
 * @param params.account - The account to request a spend permission for.
 * @param params.spender - The spender to request a spend permission for.
 * @param params.token - The token to request a spend permission for.
 * @param params.chainId - The chain ID to request a spend permission for.
 * @param params.allowance - The allowance to request a spend permission for.
 * @param params.periodInDays - The peroid in days for the allowance to be valid for.
 * @param params.start - The start date for the allowance to be valid from.
 * @param params.end - The end date for the allowance to be valid until next period starts.
 * @param params.salt - Salt
 * @param params.extraData - The extra data to use for the allowance.
 *
 * @returns A promise that resolves to a SpendPermission object containing the signature and permission details.
 *
 * @example
 * ```typescript
 * import { requestSpendPermission } from '@base-org/account/spend-permission';
 *
 * // Request approval for a spend permission
 * const permission = await requestSpendPermission({
 *   provider, // Base Account Provider
 *   account: '0x1234...',
 *   spender: '0x5678...',
 *   token: '0xabcd...', // USDC address
 *   chainId: 8453, // Base mainnet
 *   allowance: parseUnits('100', 6), // 100 USDC
 *   periodInDays: 30, // Monthly allowance
 * });
 *
 * console.log('Permission created:', permission.signature);
 * ```
 */
const requestSpendPermissionFn = async (request) => {
    const { provider, account, chainId } = request;
    const typedData = createSpendPermissionTypedData(request);
    const [signature, permissionHash] = await Promise.all([
        provider.request({
            method: 'eth_signTypedData_v4',
            params: [account, typedData],
        }),
        getHash({ permission: typedData.message, chainId }),
    ]);
    const permission = {
        createdAt: dateToTimestampInSeconds(new Date()),
        permissionHash,
        signature,
        chainId,
        permission: typedData.message,
    };
    return permission;
};
export const requestSpendPermission = withTelemetry(requestSpendPermissionFn);
//# sourceMappingURL=requestSpendPermission.js.map