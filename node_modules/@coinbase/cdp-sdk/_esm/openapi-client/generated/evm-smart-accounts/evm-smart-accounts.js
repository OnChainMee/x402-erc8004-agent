import { cdpApiClient } from "../../cdpApiClient.js";
/**
 * Lists the Smart Accounts belonging to the developer's CDP Project.
The response is paginated, and by default, returns 20 accounts per page.
 * @summary List Smart Accounts
 */
export const listEvmSmartAccounts = (params, options) => {
    return cdpApiClient({ url: `/v2/evm/smart-accounts`, method: "GET", params }, options);
};
/**
 * Creates a new Smart Account.
 * @summary Create a Smart Account
 */
export const createEvmSmartAccount = (createEvmSmartAccountBody, options) => {
    return cdpApiClient({
        url: `/v2/evm/smart-accounts`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: createEvmSmartAccountBody,
    }, options);
};
/**
 * Gets a Smart Account by its name.
 * @summary Get a Smart Account by name
 */
export const getEvmSmartAccountByName = (name, options) => {
    return cdpApiClient({ url: `/v2/evm/smart-accounts/by-name/${name}`, method: "GET" }, options);
};
/**
 * Gets a Smart Account by its address.
 * @summary Get a Smart Account by address
 */
export const getEvmSmartAccount = (address, options) => {
    return cdpApiClient({ url: `/v2/evm/smart-accounts/${address}`, method: "GET" }, options);
};
/**
 * Updates an existing EVM smart account. Use this to update the smart account's name.
 * @summary Update an EVM Smart Account
 */
export const updateEvmSmartAccount = (address, updateEvmSmartAccountBody, options) => {
    return cdpApiClient({
        url: `/v2/evm/smart-accounts/${address}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        data: updateEvmSmartAccountBody,
    }, options);
};
/**
 * Prepares a new user operation on a Smart Account for a specific network.
 * @summary Prepare a user operation
 */
export const prepareUserOperation = (address, prepareUserOperationBody, options) => {
    return cdpApiClient({
        url: `/v2/evm/smart-accounts/${address}/user-operations`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: prepareUserOperationBody,
    }, options);
};
/**
 * Prepares, signs, and sends a user operation for an EVM Smart Account. This API can be used only if the owner on Smart Account is a CDP EVM Account.
 * @summary Prepare and send a user operation for EVM Smart Account
 */
export const prepareAndSendUserOperation = (address, prepareAndSendUserOperationBody, options) => {
    return cdpApiClient({
        url: `/v2/evm/smart-accounts/${address}/user-operations/prepare-and-send`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: prepareAndSendUserOperationBody,
    }, options);
};
/**
 * Gets a user operation by its hash.
 * @summary Get a user operation
 */
export const getUserOperation = (address, userOpHash, options) => {
    return cdpApiClient({ url: `/v2/evm/smart-accounts/${address}/user-operations/${userOpHash}`, method: "GET" }, options);
};
/**
 * Sends a user operation with a signature.
The payload to sign must be the `userOpHash` field of the user operation. This hash should be signed directly (not using `personal_sign` or EIP-191 message hashing).
The signature must be 65 bytes in length, consisting of: - 32 bytes for the `r` value - 32 bytes for the `s` value - 1 byte for the `v` value (must be 27 or 28)
If using the CDP Paymaster, the user operation must be signed and sent within 2 minutes of being prepared.
 * @summary Send a user operation
 */
export const sendUserOperation = (address, userOpHash, sendUserOperationBody, options) => {
    return cdpApiClient({
        url: `/v2/evm/smart-accounts/${address}/user-operations/${userOpHash}/send`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: sendUserOperationBody,
    }, options);
};
/**
 * Creates a spend permission for the given smart account address.
 * @summary Create a spend permission
 */
export const createSpendPermission = (address, createSpendPermissionRequest, options) => {
    return cdpApiClient({
        url: `/v2/evm/smart-accounts/${address}/spend-permissions`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: createSpendPermissionRequest,
    }, options);
};
/**
 * Lists spend permission for the given smart account address.
 * @summary List spend permissions
 */
export const listSpendPermissions = (address, params, options) => {
    return cdpApiClient({ url: `/v2/evm/smart-accounts/${address}/spend-permissions/list`, method: "GET", params }, options);
};
/**
 * Revokes an existing spend permission.
 * @summary Revoke a spend permission
 */
export const revokeSpendPermission = (address, revokeSpendPermissionRequest, options) => {
    return cdpApiClient({
        url: `/v2/evm/smart-accounts/${address}/spend-permissions/revoke`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: revokeSpendPermissionRequest,
    }, options);
};
//# sourceMappingURL=evm-smart-accounts.js.map