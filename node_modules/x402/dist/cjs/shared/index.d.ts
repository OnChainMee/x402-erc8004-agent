import { N as Network } from '../network-DLlUXjbR.js';
import * as _solana_kit from '@solana/kit';
import { Transaction, TransactionSigner, RpcDevnet, SolanaRpcApiDevnet, RpcMainnet, SolanaRpcApiMainnet, KeyPairSigner } from '@solana/kit';
import { Hex, Address } from 'viem';
import { R as RoutesConfig, a as RoutePattern, P as Price, E as ERC20TokenAmount, S as SPLTokenAmount } from '../middleware-alpfvMZ2.js';
import { P as PaymentRequirements, a as PaymentPayload, E as ExactSvmPayload } from '../x402Specs-COgRh4j6.js';
import { c as createDevnetRpcClient, a as createMainnetRpcClient, g as getRpcClient, b as getRpcSubscriptions } from '../rpc-s3UR-yB2.js';
import { a as SvmConnectedClient, S as SvmSigner, c as createSignerFromBase58, b as createSvmConnectedClient, i as isSignerWallet } from '../wallet-BHq0zJhq.js';
import 'zod';
import '../wallet-h2_C4cJt.js';
import 'viem/chains';

/**
 * Converts an object to a JSON-safe format by converting bigint values to strings
 * and recursively processing nested objects and arrays
 *
 * @param data - The object to convert to JSON-safe format
 * @returns A new object with all bigint values converted to strings
 */
declare function toJsonSafe<T extends object>(data: T): object;

declare const Base64EncodedRegex: RegExp;
/**
 * Encodes a string to base64 format
 *
 * @param data - The string to be encoded to base64
 * @returns The base64 encoded string
 */
declare function safeBase64Encode(data: string): string;
/**
 * Decodes a base64 string back to its original format
 *
 * @param data - The base64 encoded string to be decoded
 * @returns The decoded string in UTF-8 format
 */
declare function safeBase64Decode(data: string): string;

/**
 * Converts a network name to its corresponding chain ID
 *
 * @param network - The network name to convert to a chain ID
 * @returns The chain ID for the specified network
 * @throws Error if the network is not supported
 */
declare function getNetworkId(network: Network): number;

/**
 * Computes the route patterns for the given routes config
 *
 * @param routes - The routes config to compute the patterns for
 * @returns The route patterns
 */
declare function computeRoutePatterns(routes: RoutesConfig): RoutePattern[];
/**
 * Finds the matching route pattern for the given path and method
 *
 * @param routePatterns - The route patterns to search through
 * @param path - The path to match against
 * @param method - The HTTP method to match against
 * @returns The matching route pattern or undefined if no match is found
 */
declare function findMatchingRoute(routePatterns: RoutePattern[], path: string, method: string): RoutePattern | undefined;
/**
 * Gets the default asset (USDC) for the given network
 *
 * @param network - The network to get the default asset for
 * @returns The default asset
 */
declare function getDefaultAsset(network: Network): {
    address: `0x${string}` | _solana_kit.Address;
    decimals: number;
    eip712: {
        name: string;
        version: string;
    };
};
/**
 * Parses the amount from the given price
 *
 * @param price - The price to parse
 * @param network - The network to get the default asset for
 * @returns The parsed amount or an error message
 */
declare function processPriceToAtomicAmount(price: Price, network: Network): {
    maxAmountRequired: string;
    asset: ERC20TokenAmount["asset"] | SPLTokenAmount["asset"];
} | {
    error: string;
};
/**
 * Finds the matching payment requirements for the given payment
 *
 * @param paymentRequirements - The payment requirements to search through
 * @param payment - The payment to match against
 * @returns The matching payment requirements or undefined if no match is found
 */
declare function findMatchingPaymentRequirements(paymentRequirements: PaymentRequirements[], payment: PaymentPayload): {
    scheme: "exact";
    description: string;
    asset: string;
    maxAmountRequired: string;
    network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
    resource: string;
    mimeType: string;
    payTo: string;
    maxTimeoutSeconds: number;
    outputSchema?: Record<string, any> | undefined;
    extra?: Record<string, any> | undefined;
} | undefined;
/**
 * Decodes the X-PAYMENT-RESPONSE header
 *
 * @param header - The X-PAYMENT-RESPONSE header to decode
 * @returns The decoded payment response
 */
declare function decodeXPaymentResponse(header: string): {
    success: boolean;
    transaction: Hex;
    network: Network;
    payer: Address;
};

/**
 * Given an object with a base64 encoded transaction, decode the
 * base64 encoded transaction into a solana transaction object.
 *
 * @param svmPayload - The SVM payload to decode
 * @returns The decoded transaction
 */
declare function decodeTransactionFromPayload(svmPayload: ExactSvmPayload): Transaction;
/**
 * Extract the token sender (owner of the source token account)
 * from the TransferChecked instruction.
 *
 * @param transaction - The transaction to extract the token payer from
 * @returns The token payer address as a base58 string
 */
declare function getTokenPayerFromTransaction(transaction: Transaction): string;
/**
 * Sign and simulate a transaction.
 *
 * @param signer - The signer that will sign the transaction
 * @param transaction - The transaction to sign and simulate
 * @param rpc - The RPC client to use to simulate the transaction
 * @returns The transaction simulation result
 */
declare function signAndSimulateTransaction(signer: TransactionSigner, transaction: Transaction, rpc: RpcDevnet<SolanaRpcApiDevnet> | RpcMainnet<SolanaRpcApiMainnet>): Promise<Readonly<{
    context: Readonly<{
        slot: _solana_kit.Slot;
    }>;
    value: Readonly<{
        readonly accounts: null;
    }> & Readonly<{
        err: _solana_kit.TransactionError | null;
        loadedAccountsDataSize?: number;
        logs: string[] | null;
        returnData: Readonly<{
            data: _solana_kit.Base64EncodedDataResponse;
            programId: _solana_kit.Address;
        }> | null;
        unitsConsumed?: bigint;
    }>;
}>>;
/**
 * Signs a transaction using the provided {@link TransactionSigner}.
 *
 * Prefers modifying signers (wallets that can rewrite the transaction) and falls
 * back to partial signers that only append signatures.
 *
 * @param signer - Wallet or signer capable of producing transaction signatures
 * @param transaction - Compiled transaction to sign
 * @returns The transaction including any signatures added by the signer
 */
declare function signTransactionWithSigner<TTransaction extends Transaction>(signer: TransactionSigner, transaction: TTransaction): Promise<TTransaction>;

declare const index_KeyPairSigner: typeof KeyPairSigner;
declare const index_SvmConnectedClient: typeof SvmConnectedClient;
declare const index_SvmSigner: typeof SvmSigner;
declare const index_createDevnetRpcClient: typeof createDevnetRpcClient;
declare const index_createMainnetRpcClient: typeof createMainnetRpcClient;
declare const index_createSignerFromBase58: typeof createSignerFromBase58;
declare const index_createSvmConnectedClient: typeof createSvmConnectedClient;
declare const index_decodeTransactionFromPayload: typeof decodeTransactionFromPayload;
declare const index_getRpcClient: typeof getRpcClient;
declare const index_getRpcSubscriptions: typeof getRpcSubscriptions;
declare const index_getTokenPayerFromTransaction: typeof getTokenPayerFromTransaction;
declare const index_isSignerWallet: typeof isSignerWallet;
declare const index_signAndSimulateTransaction: typeof signAndSimulateTransaction;
declare const index_signTransactionWithSigner: typeof signTransactionWithSigner;
declare namespace index {
  export { index_KeyPairSigner as KeyPairSigner, index_SvmConnectedClient as SvmConnectedClient, index_SvmSigner as SvmSigner, index_createDevnetRpcClient as createDevnetRpcClient, index_createMainnetRpcClient as createMainnetRpcClient, index_createSignerFromBase58 as createSignerFromBase58, index_createSvmConnectedClient as createSvmConnectedClient, index_decodeTransactionFromPayload as decodeTransactionFromPayload, index_getRpcClient as getRpcClient, index_getRpcSubscriptions as getRpcSubscriptions, index_getTokenPayerFromTransaction as getTokenPayerFromTransaction, index_isSignerWallet as isSignerWallet, index_signAndSimulateTransaction as signAndSimulateTransaction, index_signTransactionWithSigner as signTransactionWithSigner };
}

export { Base64EncodedRegex, computeRoutePatterns, decodeXPaymentResponse, findMatchingPaymentRequirements, findMatchingRoute, getDefaultAsset, getNetworkId, processPriceToAtomicAmount, safeBase64Decode, safeBase64Encode, index as svm, toJsonSafe };
