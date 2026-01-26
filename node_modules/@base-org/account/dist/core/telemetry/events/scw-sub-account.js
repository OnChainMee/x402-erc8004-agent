import { store } from '../../../store/store.js';
import { ActionType, AnalyticsEventImportance, ComponentType, logEvent } from '../logEvent.js';
export const logSubAccountRequestStarted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.request.started', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
export const logSubAccountRequestCompleted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.request.completed', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
export const logSubAccountRequestError = ({ method, correlationId, errorMessage, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.request.error', {
        action: ActionType.error,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        errorMessage,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
export const logAddOwnerStarted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.add_owner.started', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
export const logAddOwnerCompleted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.add_owner.completed', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
export const logAddOwnerError = ({ method, correlationId, errorMessage, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.add_owner.error', {
        action: ActionType.error,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        errorMessage,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
export const logInsufficientBalanceErrorHandlingStarted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.insufficient_balance.error_handling.started', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
export const logInsufficientBalanceErrorHandlingCompleted = ({ method, correlationId, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.insufficient_balance.error_handling.completed', {
        action: ActionType.unknown,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
export const logInsufficientBalanceErrorHandlingError = ({ method, correlationId, errorMessage, }) => {
    const config = store.subAccountsConfig.get();
    logEvent('scw_sub_account.insufficient_balance.error_handling.error', {
        action: ActionType.error,
        componentType: ComponentType.unknown,
        method,
        correlationId,
        errorMessage,
        subAccountCreation: config?.creation,
        subAccountDefaultAccount: config?.defaultAccount,
        subAccountFunding: config?.funding,
    }, AnalyticsEventImportance.high);
};
//# sourceMappingURL=scw-sub-account.js.map