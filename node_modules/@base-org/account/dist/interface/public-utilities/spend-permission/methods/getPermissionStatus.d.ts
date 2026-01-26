import { SpendPermission } from '../../../../core/rpc/coinbase_fetchSpendPermissions.js';
export type GetPermissionStatusResponseType = {
    remainingSpend: bigint;
    nextPeriodStart: Date;
    isRevoked: boolean;
    isExpired: boolean;
    isActive: boolean;
    isApprovedOnchain: boolean;
    currentPeriod: {
        start: number;
        end: number;
        spend: bigint;
    };
};
export declare const getPermissionStatus: ((permission: SpendPermission) => Promise<GetPermissionStatusResponseType>) | ((permission: SpendPermission) => Promise<GetPermissionStatusResponseType>);
//# sourceMappingURL=getPermissionStatus.d.ts.map