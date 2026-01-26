"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSpendPermissions = listSpendPermissions;
/**
 * Lists the spend permissions for a smart account.
 *
 * @param client - The OpenApiClient instance.
 * @param options - The options for listing the spend permissions.
 *
 * @returns A promise that resolves to the spend permissions.
 */
async function listSpendPermissions(client, options) {
    const result = await client.listSpendPermissions(options.address, {
        pageSize: options.pageSize,
        pageToken: options.pageToken,
    });
    return {
        spendPermissions: result.spendPermissions.map(permission => ({
            ...permission,
            permissionHash: permission.permissionHash,
            permission: {
                ...permission.permission,
                account: permission.permission.account,
                spender: permission.permission.spender,
                token: permission.permission.token,
                allowance: BigInt(permission.permission.allowance),
                period: Number(permission.permission.period),
                start: Number(permission.permission.start),
                end: Number(permission.permission.end),
                salt: BigInt(permission.permission.salt),
                extraData: permission.permission.extraData,
            },
        })),
    };
}
//# sourceMappingURL=listSpendPermissions.js.map