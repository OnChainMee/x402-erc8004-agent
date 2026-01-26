import type { PaymentStatus, PaymentStatusOptions } from './types.js';
/**
 * Check the status of a payment transaction using its transaction ID (userOp hash)
 *
 * @param options - Payment status check options
 * @returns Promise<PaymentStatus> - Status information about the payment
 * @throws Error if unable to connect to the RPC endpoint or if the RPC request fails
 *
 * @example
 * ```typescript
 * try {
 *   const status = await getPaymentStatus({
 *     id: "0x1234...5678",
 *     testnet: true
 *   })
 *
 *   if (status.status === 'failed') {
 *     console.log(`Payment failed: ${status.reason}`)
 *   }
 * } catch (error) {
 *   console.error('Unable to check payment status:', error.message)
 * }
 * ```
 *
 * @note The id is the userOp hash returned from the pay function
 */
export declare function getPaymentStatus(options: PaymentStatusOptions): Promise<PaymentStatus>;
//# sourceMappingURL=getPaymentStatus.d.ts.map