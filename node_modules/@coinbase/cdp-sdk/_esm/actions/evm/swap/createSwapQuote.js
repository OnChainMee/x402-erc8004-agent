import { sendSwapOperation } from "./sendSwapOperation.js";
import { sendSwapTransaction } from "./sendSwapTransaction.js";
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
export async function createSwapQuote(client, options) {
    // Validate required parameters
    if (!options.taker) {
        throw new Error("taker is required for createSwapQuote");
    }
    // Store validated taker for type safety
    const taker = options.taker;
    // Call the createEvmSwapQuote function directly with the client's configured API
    const response = await client.createEvmSwapQuote({
        network: options.network,
        toToken: options.toToken,
        fromToken: options.fromToken,
        fromAmount: options.fromAmount.toString(),
        taker: taker,
        signerAddress: options.signerAddress,
        gasPrice: options.gasPrice?.toString(),
        slippageBps: options.slippageBps,
    }, options.idempotencyKey);
    // Check if liquidity is unavailable
    if (!response.liquidityAvailable) {
        // Return the SwapUnavailableResult
        return {
            liquidityAvailable: false,
        };
    }
    // At this point we know it's a CreateSwapQuoteResponse with liquidityAvailable as true
    const swapResponse = response;
    const result = {
        liquidityAvailable: true,
        network: options.network,
        toToken: swapResponse.toToken,
        fromToken: swapResponse.fromToken,
        fromAmount: BigInt(swapResponse.fromAmount),
        toAmount: BigInt(swapResponse.toAmount),
        minToAmount: BigInt(swapResponse.minToAmount),
        blockNumber: BigInt(swapResponse.blockNumber),
        fees: {
            gasFee: swapResponse.fees.gasFee
                ? {
                    amount: BigInt(swapResponse.fees.gasFee.amount),
                    token: swapResponse.fees.gasFee.token,
                }
                : undefined,
            protocolFee: swapResponse.fees.protocolFee
                ? {
                    amount: BigInt(swapResponse.fees.protocolFee.amount),
                    token: swapResponse.fees.protocolFee.token,
                }
                : undefined,
        },
        issues: {
            allowance: swapResponse.issues.allowance
                ? {
                    currentAllowance: BigInt(swapResponse.issues.allowance.currentAllowance),
                    spender: swapResponse.issues.allowance.spender,
                }
                : undefined,
            balance: swapResponse.issues.balance
                ? {
                    token: swapResponse.issues.balance.token,
                    currentBalance: BigInt(swapResponse.issues.balance.currentBalance),
                    requiredBalance: BigInt(swapResponse.issues.balance.requiredBalance),
                }
                : undefined,
            simulationIncomplete: swapResponse.issues.simulationIncomplete,
        },
        transaction: swapResponse.transaction
            ? {
                to: swapResponse.transaction.to,
                data: swapResponse.transaction.data,
                value: BigInt(swapResponse.transaction.value),
                gas: BigInt(swapResponse.transaction.gas),
                gasPrice: BigInt(swapResponse.transaction.gasPrice),
            }
            : undefined,
        permit2: swapResponse.permit2
            ? {
                eip712: {
                    domain: {
                        ...swapResponse.permit2.eip712.domain,
                        verifyingContract: swapResponse.permit2.eip712.domain.verifyingContract,
                        salt: swapResponse.permit2.eip712.domain.salt,
                    },
                    types: swapResponse.permit2.eip712.types,
                    primaryType: swapResponse.permit2.eip712.primaryType,
                    message: swapResponse.permit2.eip712.message,
                },
            }
            : undefined,
        // Add the execute method
        execute: async (executeOptions = {}) => {
            if (options.smartAccount) {
                // Smart account execution - use sendSwapOperation
                const userOpResult = await sendSwapOperation(client, {
                    smartAccount: options.smartAccount,
                    network: result.network,
                    swapQuote: result,
                    idempotencyKey: executeOptions.idempotencyKey,
                });
                return {
                    userOpHash: userOpResult.userOpHash,
                    smartAccountAddress: userOpResult.smartAccountAddress,
                    status: userOpResult.status,
                };
            }
            else {
                // EOA execution - use sendSwapTransaction
                const { transactionHash } = await sendSwapTransaction(client, {
                    address: taker,
                    network: result.network,
                    swapQuote: result,
                    idempotencyKey: executeOptions.idempotencyKey,
                });
                return { transactionHash };
            }
        },
    };
    return result;
}
//# sourceMappingURL=createSwapQuote.js.map