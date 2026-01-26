import type { ChargeOptions, ChargeResult } from './types.js';
/**
 * Prepares and executes a charge for a given spend permission.
 *
 * Note: This function relies on Node.js APIs and is only available in Node.js environments.
 *
 * This function combines the functionality of getOrCreateSubscriptionOwnerWallet and prepareCharge,
 * then executes the charge using a CDP smart wallet. The smart wallet is controlled
 * by an EVM account and can leverage paymasters for gas sponsorship.
 *
 * The function will:
 * - Use the provided CDP credentials or fall back to environment variables
 * - Create or retrieve a smart wallet to act as the subscription owner
 * - Prepare the charge call data using the subscription ID
 * - Execute the charge transaction using the smart wallet
 * - Optionally use a paymaster for transaction sponsorship
 *
 * @param options - Options for charging the subscription
 * @param options.id - The subscription ID (permission hash) to charge
 * @param options.amount - Amount to charge as a string (e.g., "10.50") or 'max-remaining-charge'
 * @param options.testnet - Whether this is on testnet (Base Sepolia). Defaults to false (mainnet)
 * @param options.cdpApiKeyId - CDP API key ID. Falls back to CDP_API_KEY_ID env var
 * @param options.cdpApiKeySecret - CDP API key secret. Falls back to CDP_API_KEY_SECRET env var
 * @param options.cdpWalletSecret - CDP wallet secret. Falls back to CDP_WALLET_SECRET env var
 * @param options.walletName - Custom wallet name. Defaults to "subscription owner"
 * @param options.paymasterUrl - Paymaster URL for sponsorship. Falls back to PAYMASTER_URL env var
 * @param options.recipient - Optional recipient address to receive the charged USDC
 * @returns Promise<ChargeResult> - Result of the charge transaction
 * @throws Error if CDP credentials are missing, subscription not found, or charge fails
 *
 * @example
 * ```typescript
 * import { base } from '@base-org/account/payment';
 *
 * // Using environment variables for credentials and paymaster
 * const charge = await base.subscription.charge({
 *   id: '0x71319cd488f8e4f24687711ec5c95d9e0c1bacbf5c1064942937eba4c7cf2984',
 *   amount: '9.99',
 *   testnet: false
 * });
 * console.log(`Charged ${charge.amount} - Transaction: ${charge.id}`);
 *
 * // Using explicit credentials and paymaster URL
 * const charge = await base.subscription.charge({
 *   id: '0x71319cd488f8e4f24687711ec5c95d9e0c1bacbf5c1064942937eba4c7cf2984',
 *   amount: 'max-remaining-charge',
 *   cdpApiKeyId: 'your-api-key-id',
 *   cdpApiKeySecret: 'your-api-key-secret',
 *   cdpWalletSecret: 'your-wallet-secret',
 *   paymasterUrl: 'https://your-paymaster.com',
 *   testnet: false
 * });
 *
 * // Using a custom wallet name
 * const charge = await base.subscription.charge({
 *   id: '0x71319cd488f8e4f24687711ec5c95d9e0c1bacbf5c1064942937eba4c7cf2984',
 *   amount: '5.00',
 *   walletName: 'my-app-charge-wallet',
 *   testnet: true
 * });
 *
 * // Charging with a recipient to receive the USDC
 * const charge = await base.subscription.charge({
 *   id: '0x71319cd488f8e4f24687711ec5c95d9e0c1bacbf5c1064942937eba4c7cf2984',
 *   amount: '10.00',
 *   recipient: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb8',
 *   testnet: false
 * });
 * ```
 */
export declare function charge(options: ChargeOptions): Promise<ChargeResult>;
//# sourceMappingURL=charge.d.ts.map