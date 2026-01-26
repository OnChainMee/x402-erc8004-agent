import { CreateSwapQuoteOptions, CreateSwapQuoteResult, SwapUnavailableResult } from "../../../client/evm/evm.types.js";
import { CdpOpenApiClientType } from "../../../openapi-client/index.js";
/**
 * Creates a quote for a swap between two tokens on an EVM network.
 *
 * @param {CdpOpenApiClientType} client - The client to use to create the swap quote.
 * @param {CreateSwapQuoteOptions} options - The options for creating a swap quote.
 *
 * @returns {Promise<CreateSwapQuoteResult | SwapUnavailableResult>} A promise that resolves to the swap quote result or a response indicating that liquidity is unavailable.
 *
 * @example **Creating a swap quote**
 * ```ts
 * const swapQuote = await createSwapQuote(client, {
 *   network: "ethereum",
 *   toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
 *   fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
 *   fromAmount: BigInt("1000000000000000000"), // 1 WETH in wei
 *   taker: "0x1234567890123456789012345678901234567890"
 * });
 * ```
 */
export declare function createSwapQuote(client: CdpOpenApiClientType, options: CreateSwapQuoteOptions): Promise<CreateSwapQuoteResult | SwapUnavailableResult>;
//# sourceMappingURL=createSwapQuote.d.ts.map