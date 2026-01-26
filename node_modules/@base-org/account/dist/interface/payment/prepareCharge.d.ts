import type { PrepareChargeOptions, PrepareChargeResult } from './types.js';
/**
 * Prepares call data for charging a subscription.
 *
 * This function fetches the subscription (spend permission) details using its ID (permission hash)
 * and prepares the necessary call data to charge the subscription. It wraps the lower-level
 * prepareSpendCallData function with subscription-specific logic.
 *
 * The resulting call data includes:
 * - An approval call (if the permission is not yet active)
 * - A spend call to charge the subscription
 *
 * @param options - Options for preparing the charge
 * @param options.id - The subscription ID (permission hash) returned from subscribe()
 * @param options.amount - Amount to charge as a string (e.g., "10.50") or 'max-remaining-charge'
 * @param options.testnet - Whether this permission is on testnet (Base Sepolia). Defaults to false (mainnet)
 * @param options.recipient - Optional recipient address to receive the charged USDC
 * @returns Promise<PrepareChargeResult> - Array of call data for the charge
 * @throws Error if the subscription cannot be found or if the amount exceeds remaining allowance
 *
 * @example
 * ```typescript
 * import { base } from '@base-org/account/payment';
 *
 * // Prepare to charge a specific amount from a subscription
 * const chargeCalls = await base.subscription.prepareCharge({
 *   id: '0x71319cd488f8e4f24687711ec5c95d9e0c1bacbf5c1064942937eba4c7cf2984',
 *   amount: '9.99',
 *   testnet: false
 * });
 *
 * // Prepare to charge the full remaining charge
 * const maxChargeCalls = await base.subscription.prepareCharge({
 *   id: '0x71319cd488f8e4f24687711ec5c95d9e0c1bacbf5c1064942937eba4c7cf2984',
 *   amount: 'max-remaining-charge'
 * });
 *
 * // Prepare to charge and transfer to a recipient
 * const chargeWithRecipient = await base.subscription.prepareCharge({
 *   id: '0x71319cd488f8e4f24687711ec5c95d9e0c1bacbf5c1064942937eba4c7cf2984',
 *   amount: '10.00',
 *   recipient: '0x0000000000000000000000000000000000000001'
 * });
 *
 * // Send the calls using your app's spender account
 * await provider.request({
 *   method: 'wallet_sendCalls',
 *   params: [{
 *     version: '2.0.0',
 *     atomicRequired: true,
 *     from: subscriptionOwner, // Must be the spender/subscription owner!
 *     chainId: testnet ? '0x14a34' : '0x2105',
 *     calls: chargeCalls,
 *   }],
 * });
 * ```
 */
export declare function prepareCharge(options: PrepareChargeOptions): Promise<PrepareChargeResult>;
//# sourceMappingURL=prepareCharge.d.ts.map