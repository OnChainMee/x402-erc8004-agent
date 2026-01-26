import type { GetOrCreateSubscriptionOwnerWalletOptions, GetOrCreateSubscriptionOwnerWalletResult } from './types.js';
/**
 * Gets or creates a CDP smart wallet to act as the subscription owner (spender).
 *
 * Note: This function relies on Node.js APIs and is only available in Node.js environments.
 *
 * This function creates or retrieves a CDP smart wallet that can be used as the
 * subscriptionOwner when calling the subscribe() function. The smart wallet is
 * controlled by an EVM account (EOA) and can leverage paymasters for gas sponsorship.
 *
 * The function will:
 * - Use the provided CDP credentials or fall back to environment variables
 * - Create or retrieve an EVM account to act as the smart wallet owner
 * - Create or retrieve a smart wallet controlled by that EVM account
 * - Return the smart wallet address (not the EOA address)
 *
 * @param options - Options for getting or creating the subscription owner smart wallet
 * @param options.cdpApiKeyId - CDP API key ID. Falls back to CDP_API_KEY_ID env var
 * @param options.cdpApiKeySecret - CDP API key secret. Falls back to CDP_API_KEY_SECRET env var
 * @param options.cdpWalletSecret - CDP wallet secret. Falls back to CDP_WALLET_SECRET env var
 * @param options.walletName - Custom wallet name. Defaults to "subscription owner"
 * @returns Promise<GetOrCreateSubscriptionOwnerWalletResult> - The smart wallet address and metadata
 * @throws Error if CDP credentials are missing or invalid
 *
 * @example
 * ```typescript
 * import { base } from '@base-org/account/payment';
 *
 * // Using environment variables (CDP_API_KEY_ID, CDP_API_KEY_SECRET, CDP_WALLET_SECRET)
 * const owner = await base.subscription.getOrCreateSubscriptionOwnerWallet();
 * console.log(`Subscription owner smart wallet: ${owner.address}`);
 *
 * // Using explicit credentials
 * const owner = await base.subscription.getOrCreateSubscriptionOwnerWallet({
 *   cdpApiKeyId: 'your-api-key-id',
 *   cdpApiKeySecret: 'your-api-key-secret',
 *   cdpWalletSecret: 'your-wallet-secret'
 * });
 *
 * // Use with subscribe function - now uses smart wallet address
 * const subscription = await base.subscription.subscribe({
 *   recurringCharge: "10.50",
 *   subscriptionOwner: owner.address, // Smart wallet address
 *   periodInDays: 30,
 *   testnet: false
 * });
 *
 * // Using a custom wallet name
 * const customOwner = await base.subscription.getOrCreateSubscriptionOwnerWallet({
 *   walletName: 'my-app-subscription-wallet'
 * });
 * ```
 */
export declare function getOrCreateSubscriptionOwnerWallet(options?: GetOrCreateSubscriptionOwnerWalletOptions): Promise<GetOrCreateSubscriptionOwnerWalletResult>;
//# sourceMappingURL=getOrCreateSubscriptionOwnerWallet.d.ts.map