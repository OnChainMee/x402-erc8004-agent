/**
 * Logs when a subscription request is started
 */
export declare function logSubscriptionStarted(data: {
    recurringCharge: string;
    periodInDays: number;
    periodInSeconds?: number;
    testnet: boolean;
    correlationId: string;
}): void;
/**
 * Logs when a subscription request is completed successfully
 */
export declare function logSubscriptionCompleted(data: {
    recurringCharge: string;
    periodInDays: number;
    periodInSeconds?: number;
    testnet: boolean;
    correlationId: string;
    permissionHash: string;
}): void;
/**
 * Logs when a subscription request fails
 */
export declare function logSubscriptionError(data: {
    recurringCharge: string;
    periodInDays: number;
    periodInSeconds?: number;
    testnet: boolean;
    correlationId: string;
    errorMessage: string;
}): void;
//# sourceMappingURL=subscription.d.ts.map