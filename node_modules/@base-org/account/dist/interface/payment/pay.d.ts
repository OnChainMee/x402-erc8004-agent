import type { PaymentOptions, PaymentResult } from './types.js';
/**
 * Pay a specified address with USDC on Base network using an ephemeral wallet
 *
 * @param options - Payment options
 * @param options.amount - Amount of USDC to send as a string (e.g., "10.50")
 * @param options.to - Ethereum address to send payment to
 * @param options.testnet - Whether to use Base Sepolia testnet (default: false)
 * @param options.payerInfo - Optional payer information configuration for data callbacks
 * @returns Promise<PaymentResult> - Result of the payment transaction
 * @throws Error if the payment fails
 *
 * @example
 * ```typescript
 * try {
 *   const payment = await pay({
 *     amount: "10.50",
 *     to: "0xFe21034794A5a574B94fE4fDfD16e005F1C96e51",
 *     testnet: true
 *   });
 *
 *   console.log(`Payment sent! Transaction ID: ${payment.id}`);
 * } catch (error) {
 *   console.error(`Payment failed: ${error.message}`);
 * }
 * ```
 */
export declare function pay(options: PaymentOptions): Promise<PaymentResult>;
//# sourceMappingURL=pay.d.ts.map