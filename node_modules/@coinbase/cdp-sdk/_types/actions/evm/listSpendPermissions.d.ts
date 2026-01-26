import type { CdpOpenApiClient, ListResponse, SpendPermissionResponseObject as SpendPermissionResponseObjectApi } from "../../openapi-client/index.js";
import type { ListSpendPermissionsOptions, SpendPermission } from "../../spend-permissions/types.js";
import type { Hex } from "../../types/misc.js";
export type SpendPermissionResponseObject = Omit<SpendPermissionResponseObjectApi, "permission" | "permissionHash"> & {
    permissionHash: Hex;
    permission: SpendPermission;
};
export type ListSpendPermissionsResult = ListResponse & {
    spendPermissions: SpendPermissionResponseObject[];
};
/**
 * Lists the spend permissions for a smart account.
 *
 * @param client - The OpenApiClient instance.
 * @param options - The options for listing the spend permissions.
 *
 * @returns A promise that resolves to the spend permissions.
 */
export declare function listSpendPermissions(client: typeof CdpOpenApiClient, options: ListSpendPermissionsOptions): Promise<ListSpendPermissionsResult>;
//# sourceMappingURL=listSpendPermissions.d.ts.map