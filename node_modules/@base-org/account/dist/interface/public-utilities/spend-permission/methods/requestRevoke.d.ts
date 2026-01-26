import { ProviderInterface } from '../../../../core/provider/interface.js';
import { SpendPermission } from '../../../../core/rpc/coinbase_fetchSpendPermissions.js';
import { Hex } from 'viem';
export declare const requestRevoke: (({ provider, permission, }: {
    provider: ProviderInterface;
    permission: SpendPermission;
}) => Promise<Hex>) | ((args_0: {
    provider: ProviderInterface;
    permission: SpendPermission;
}) => Promise<`0x${string}`>);
//# sourceMappingURL=requestRevoke.d.ts.map