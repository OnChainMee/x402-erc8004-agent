import { ProviderInterface } from '../../../../core/provider/interface.js';
import { SpendPermission } from '../../../../core/rpc/coinbase_fetchSpendPermissions.js';
type FetchPermissionsType = {
    account: string;
    chainId: number;
    spender: string;
    provider?: ProviderInterface;
};
export declare const fetchPermissions: (({ provider, account, chainId, spender, }: FetchPermissionsType) => Promise<SpendPermission[]>) | ((args_0: FetchPermissionsType) => Promise<SpendPermission[]>);
export {};
//# sourceMappingURL=fetchPermissions.d.ts.map