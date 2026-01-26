"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revokeSpendPermission = exports.listSpendPermissions = exports.createSpendPermission = exports.sendUserOperation = exports.getUserOperation = exports.prepareAndSendUserOperation = exports.prepareUserOperation = exports.updateEvmSmartAccount = exports.getEvmSmartAccount = exports.getEvmSmartAccountByName = exports.createEvmSmartAccount = exports.listEvmSmartAccounts = void 0;
const cdpApiClient_js_1 = require("../../cdpApiClient.js");
/**
 * Lists the Smart Accounts belonging to the developer's CDP Project.
The response is paginated, and by default, returns 20 accounts per page.
 * @summary List Smart Accounts
 */
const listEvmSmartAccounts = (params, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/evm/smart-accounts`, method: "GET", params }, options);
};
exports.listEvmSmartAccounts = listEvmSmartAccounts;
/**
 * Creates a new Smart Account.
 * @summary Create a Smart Account
 */
const createEvmSmartAccount = (createEvmSmartAccountBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/smart-accounts`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: createEvmSmartAccountBody,
    }, options);
};
exports.createEvmSmartAccount = createEvmSmartAccount;
/**
 * Gets a Smart Account by its name.
 * @summary Get a Smart Account by name
 */
const getEvmSmartAccountByName = (name, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/evm/smart-accounts/by-name/${name}`, method: "GET" }, options);
};
exports.getEvmSmartAccountByName = getEvmSmartAccountByName;
/**
 * Gets a Smart Account by its address.
 * @summary Get a Smart Account by address
 */
const getEvmSmartAccount = (address, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/evm/smart-accounts/${address}`, method: "GET" }, options);
};
exports.getEvmSmartAccount = getEvmSmartAccount;
/**
 * Updates an existing EVM smart account. Use this to update the smart account's name.
 * @summary Update an EVM Smart Account
 */
const updateEvmSmartAccount = (address, updateEvmSmartAccountBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/smart-accounts/${address}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        data: updateEvmSmartAccountBody,
    }, options);
};
exports.updateEvmSmartAccount = updateEvmSmartAccount;
/**
 * Prepares a new user operation on a Smart Account for a specific network.
 * @summary Prepare a user operation
 */
const prepareUserOperation = (address, prepareUserOperationBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/smart-accounts/${address}/user-operations`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: prepareUserOperationBody,
    }, options);
};
exports.prepareUserOperation = prepareUserOperation;
/**
 * Prepares, signs, and sends a user operation for an EVM Smart Account. This API can be used only if the owner on Smart Account is a CDP EVM Account.
 * @summary Prepare and send a user operation for EVM Smart Account
 */
const prepareAndSendUserOperation = (address, prepareAndSendUserOperationBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/smart-accounts/${address}/user-operations/prepare-and-send`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: prepareAndSendUserOperationBody,
    }, options);
};
exports.prepareAndSendUserOperation = prepareAndSendUserOperation;
/**
 * Gets a user operation by its hash.
 * @summary Get a user operation
 */
const getUserOperation = (address, userOpHash, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/evm/smart-accounts/${address}/user-operations/${userOpHash}`, method: "GET" }, options);
};
exports.getUserOperation = getUserOperation;
/**
 * Sends a user operation with a signature.
The payload to sign must be the `userOpHash` field of the user operation. This hash should be signed directly (not using `personal_sign` or EIP-191 message hashing).
The signature must be 65 bytes in length, consisting of: - 32 bytes for the `r` value - 32 bytes for the `s` value - 1 byte for the `v` value (must be 27 or 28)
If using the CDP Paymaster, the user operation must be signed and sent within 2 minutes of being prepared.
 * @summary Send a user operation
 */
const sendUserOperation = (address, userOpHash, sendUserOperationBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/smart-accounts/${address}/user-operations/${userOpHash}/send`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: sendUserOperationBody,
    }, options);
};
exports.sendUserOperation = sendUserOperation;
/**
 * Creates a spend permission for the given smart account address.
 * @summary Create a spend permission
 */
const createSpendPermission = (address, createSpendPermissionRequest, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/smart-accounts/${address}/spend-permissions`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: createSpendPermissionRequest,
    }, options);
};
exports.createSpendPermission = createSpendPermission;
/**
 * Lists spend permission for the given smart account address.
 * @summary List spend permissions
 */
const listSpendPermissions = (address, params, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/evm/smart-accounts/${address}/spend-permissions/list`, method: "GET", params }, options);
};
exports.listSpendPermissions = listSpendPermissions;
/**
 * Revokes an existing spend permission.
 * @summary Revoke a spend permission
 */
const revokeSpendPermission = (address, revokeSpendPermissionRequest, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/smart-accounts/${address}/spend-permissions/revoke`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: revokeSpendPermissionRequest,
    }, options);
};
exports.revokeSpendPermission = revokeSpendPermission;
//# sourceMappingURL=evm-smart-accounts.js.map