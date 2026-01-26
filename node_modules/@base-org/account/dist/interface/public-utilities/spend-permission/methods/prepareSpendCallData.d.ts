import { SpendPermission } from '../../../../core/rpc/coinbase_fetchSpendPermissions.js';
import { Address, Hex } from 'viem';
type Call = {
    to: Address;
    data: Hex;
    value: bigint;
};
export type PrepareSpendCallDataResponseType = Call[];
export declare const prepareSpendCallData: ((permission: SpendPermission, amount: bigint | "max-remaining-allowance", recipient?: Address) => Promise<PrepareSpendCallDataResponseType>) | ((permission: SpendPermission, amount: bigint | "max-remaining-allowance", recipient?: `0x${string}` | undefined) => Promise<PrepareSpendCallDataResponseType>);
export {};
//# sourceMappingURL=prepareSpendCallData.d.ts.map