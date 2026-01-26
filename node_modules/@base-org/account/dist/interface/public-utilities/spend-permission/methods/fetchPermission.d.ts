import { ProviderInterface } from '../../../../core/provider/interface.js';
import { SpendPermission } from '../../../../core/rpc/coinbase_fetchSpendPermissions.js';
type FetchPermissionType = {
    permissionHash: string;
    provider?: ProviderInterface;
};
export declare const fetchPermission: (({ provider, permissionHash, }: FetchPermissionType) => Promise<SpendPermission>) | ((args_0: FetchPermissionType) => Promise<SpendPermission>);
export {};
//# sourceMappingURL=fetchPermission.d.ts.map