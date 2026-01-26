import type { SendSwapTransactionOptions, SendSwapTransactionResult } from "./types.js";
import type { CdpOpenApiClientType } from "../../../openapi-client/index.js";
/**
 * Sends a swap transaction to the blockchain.
 * Handles any permit2 signatures required for the swap.
 *
 * If you encounter token allowance issues, you'll need to perform a token approval transaction first to allow
 * the Permit2 contract to spend the appropriate amount of your fromToken.
 * See `examples/typescript/evm/account.sendSwapTransaction.ts` for example code on handling token approvals.
 *
 * @param {CdpOpenApiClientType} client - The client to use for sending the swap.
 * @param {SendSwapTransactionOptions} options - The options for the swap submission.
 *
 * @returns {Promise<SendSwapTransactionResult>} A promise that resolves to the transaction hash.
 *
 * @throws {Error} If liquidity is not available for the swap.
 * @throws {Error} If there are insufficient token allowances. In this case, you need to approve the
 *                 Permit2 contract to spend your tokens before attempting the swap. The error message
 *                 will include the current allowance and the spender address that needs approval.
 * @throws {Error} If no transaction data is found in the swap result.
 *
 * @example **Sending a swap with pre-created swap quote object**
 * ```ts
 * // First create a swap quote
 * const swapQuote = await cdp.evm.createSwapQuote({
 *   network: "base",
 *   toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
 *   fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
 *   fromAmount: BigInt("1000000000000000000"), // 1 WETH in wei
 *   taker: account.address
 * });
 *
 * // Check if liquidity is available
 * if (!swapQuote.liquidityAvailable) {
 *   console.error("Insufficient liquidity for swap");
 *   return;
 * }
 *
 * // Send the swap
 * const result = await sendSwapTransaction(client, {
 *   address: account.address,
 *   swapQuote: swapQuote
 * });
 *
 * console.log(`Swap sent with transaction hash: ${result.transactionHash}`);
 * ```
 *
 * @example **Sending a swap with inline options (all-in-one)**
 * ```ts
 * // Send swap in one call
 * const result = await sendSwapTransaction(client, {
 *   address: account.address,
 *   network: "base",
 *   toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
 *   fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
 *   fromAmount: BigInt("1000000000000000000"), // 1 WETH in wei
 *   taker: account.address
 * });
 *
 * console.log(`Swap sent with transaction hash: ${result.transactionHash}`);
 * ```
 */
export declare function sendSwapTransaction(client: CdpOpenApiClientType, options: SendSwapTransactionOptions): Promise<SendSwapTransactionResult>;
//# sourceMappingURL=sendSwapTransaction.d.ts.map