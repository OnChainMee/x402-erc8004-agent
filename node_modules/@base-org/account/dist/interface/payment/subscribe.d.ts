import type { SubscriptionOptions, SubscriptionResult } from './types.js';
/**
 * Creates a subscription using spend permissions on Base network
 *
 * @param options - Subscription options
 * @param options.recurringCharge - Amount of USDC to charge per period as a string (e.g., "10.50")
 * @param options.subscriptionOwner - Ethereum address that will be the spender (your application's address)
 * @param options.periodInDays - The period in days for the subscription (default: 30)
 * @param options.overridePeriodInSecondsForTestnet - TEST ONLY: Override period in seconds (only works when testnet=true)
 * @param options.testnet - Whether to use Base Sepolia testnet (default: false)
 * @param options.walletUrl - Optional wallet URL to use
 * @param options.telemetry - Whether to enable telemetry logging (default: true)
 * @returns Promise<SubscriptionResult> - Simplified result with subscription details
 * @throws Error if the subscription fails
 *
 * @example
 * ```typescript
 * try {
 *   const subscription = await subscribe({
 *     recurringCharge: "10.50",
 *     subscriptionOwner: "0xFe21034794A5a574B94fE4fDfD16e005F1C96e51", // Your app's address
 *     periodInDays: 30, // Monthly subscription
 *     testnet: true
 *   });
 *
 *   console.log(`Subscription created!`);
 *   console.log(`ID: ${subscription.id}`);
 *   console.log(`Payer: ${subscription.subscriptionPayer}`);
 *   console.log(`Owner: ${subscription.subscriptionOwner}`);
 *   console.log(`Charge: $${subscription.recurringCharge} every ${subscription.periodInDays} days`);
 * } catch (error) {
 *   console.error(`Subscription failed: ${error.message}`);
 * }
 * ```
 *
 * @example
 * ```typescript
 * // TEST ONLY: Using overridePeriodInSecondsForTestnet for faster testing
 * try {
 *   const subscription = await subscribe({
 *     recurringCharge: "0.01",
 *     subscriptionOwner: "0xFe21034794A5a574B94fE4fDfD16e005F1C96e51",
 *     overridePeriodInSecondsForTestnet: 300, // 5 minutes for testing - ONLY WORKS ON TESTNET
 *     testnet: true // REQUIRED when using overridePeriodInSecondsForTestnet
 *   });
 *
 *   console.log(`Test subscription created with 5-minute period`);
 * } catch (error) {
 *   console.error(`Subscription failed: ${error.message}`);
 * }
 * ```
 */
export declare function subscribe(options: SubscriptionOptions): Promise<SubscriptionResult>;
//# sourceMappingURL=subscribe.d.ts.map