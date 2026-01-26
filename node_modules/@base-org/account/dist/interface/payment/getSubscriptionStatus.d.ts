import type { SubscriptionStatus, SubscriptionStatusOptions } from './types.js';
/**
 * Gets the current status and details of a subscription.
 *
 * This function fetches the subscription (spend permission) details using its ID (permission hash)
 * and returns status information about the subscription.
 *
 * @param options - Options for checking subscription status
 * @param options.id - The subscription ID (permission hash) returned from subscribe()
 * @param options.testnet - Whether to check on testnet (Base Sepolia). Defaults to false (mainnet)
 * @returns Promise<SubscriptionStatus> - Subscription status information
 * @throws Error if the subscription cannot be found or if fetching fails
 *
 * @example
 * ```typescript
 * import { getSubscriptionStatus } from '@base-org/account/payment';
 *
 * // Check status of a subscription using its ID
 * const status = await getSubscriptionStatus({
 *   id: '0x71319cd488f8e4f24687711ec5c95d9e0c1bacbf5c1064942937eba4c7cf2984',
 *   testnet: false
 * });
 *
 * console.log(`Subscribed: ${status.isSubscribed}`);
 * console.log(`Next payment: ${status.nextPeriodStart}`);
 * console.log(`Recurring amount: $${status.recurringCharge}`);
 * console.log(`Owner address: ${status.subscriptionOwner}`);
 * ```
 */
export declare function getSubscriptionStatus(options: SubscriptionStatusOptions): Promise<SubscriptionStatus>;
//# sourceMappingURL=getSubscriptionStatus.d.ts.map