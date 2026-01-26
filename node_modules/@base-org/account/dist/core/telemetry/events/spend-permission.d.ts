import * as spendPermissionUtils from '../../../interface/public-utilities/spend-permission/index.js';
export type SpendPermissionUtilType = keyof typeof spendPermissionUtils;
export declare const logSpendPermissionUtilStarted: (functionName: SpendPermissionUtilType) => void;
export declare const logSpendPermissionUtilCompleted: (functionName: SpendPermissionUtilType) => void;
export declare const logSpendPermissionUtilError: (functionName: SpendPermissionUtilType, errorMessage: string) => void;
//# sourceMappingURL=spend-permission.d.ts.map