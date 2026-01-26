import { ActionType, AnalyticsEventImportance, ComponentType, logEvent } from '../logEvent.js';
export const logSpendPermissionUtilStarted = (functionName) => {
    logEvent(`spend_permission_utils.${functionName}.started`, {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
    }, AnalyticsEventImportance.high);
};
export const logSpendPermissionUtilCompleted = (functionName) => {
    logEvent(`spend_permission_utils.${functionName}.completed`, {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
    }, AnalyticsEventImportance.high);
};
export const logSpendPermissionUtilError = (functionName, errorMessage) => {
    logEvent(`spend_permission_utils.${functionName}.error`, {
        action: ActionType.error,
        componentType: ComponentType.unknown,
        errorMessage,
    }, AnalyticsEventImportance.high);
};
//# sourceMappingURL=spend-permission.js.map