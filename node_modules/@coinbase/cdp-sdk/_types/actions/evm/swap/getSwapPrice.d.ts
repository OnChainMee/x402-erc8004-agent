import { GetSwapPriceOptions, GetSwapPriceResult, SwapUnavailableResult } from "../../../client/evm/evm.types.js";
import { CdpOpenApiClientType } from "../../../openapi-client/index.js";
/**
 * Gets the price for a swap between two tokens on an EVM network.
 *
 * @param {CdpOpenApiClientType} client - The client to use to get the swap price.
 * @param {GetSwapPriceOptions} options - The options for getting a swap price.
 *
 * @returns {Promise<GetSwapPriceResult | SwapUnavailableResult>} A promise that resolves to the swap price result or a response indicating that liquidity is unavailable.
 *
 * @example **Getting a swap price**
 * ```ts
 * const price = await getSwapPrice(client, {
 *   network: "ethereum-mainnet",
 *   toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
 *   fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
 *   fromAmount: BigInt("1000000000000000000"), // 1 WETH in wei
 *   taker: "0x1234567890123456789012345678901234567890",
 *   idempotencyKey: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" // Optional: for request deduplication
 * });
 * ```
 */
export declare function getSwapPrice(client: CdpOpenApiClientType, options: GetSwapPriceOptions): Promise<GetSwapPriceResult | SwapUnavailableResult>;
//# sourceMappingURL=getSwapPrice.d.ts.map