import { Address, Transport, Chain, LocalAccount, Account } from 'viem';
import { S as SignerWallet, C as ConnectedClient } from '../wallet-h2_C4cJt.js';
import { P as PaymentRequirements, U as UnsignedPaymentPayload, a as PaymentPayload, u as VerifyResponse, S as SettleResponse, b as ErrorReasons, E as ExactSvmPayload } from '../x402Specs-COgRh4j6.js';
import { X as X402Config } from '../config-Dfuvno71.js';
import { TransactionSigner, Transaction, RpcDevnet, SolanaRpcApiDevnet, RpcMainnet, SolanaRpcApiMainnet, SendTransactionApi, BaseTransactionMessage, TransactionMessageWithFeePayer, TransactionMessageWithLifetime, Instruction, AccountLookupMeta, AccountMeta } from '@solana/kit';
import { b as getRpcSubscriptions } from '../rpc-s3UR-yB2.js';
import * as _solana_program_token from '@solana-program/token';
import { parseTransferCheckedInstruction } from '@solana-program/token-2022';
import 'viem/chains';
import 'zod';
import '../network-DLlUXjbR.js';

/**
 * Prepares an unsigned payment header with the given sender address and payment requirements.
 *
 * @param from - The sender's address from which the payment will be made
 * @param x402Version - The version of the X402 protocol to use
 * @param paymentRequirements - The payment requirements containing scheme and network information
 * @returns An unsigned payment payload containing authorization details
 */
declare function preparePaymentHeader(from: Address, x402Version: number, paymentRequirements: PaymentRequirements): UnsignedPaymentPayload;
/**
 * Signs a payment header using the provided client and payment requirements.
 *
 * @param client - The signer wallet instance used to sign the payment header
 * @param paymentRequirements - The payment requirements containing scheme and network information
 * @param unsignedPaymentHeader - The unsigned payment payload to be signed
 * @returns A promise that resolves to the signed payment payload
 */
declare function signPaymentHeader<transport extends Transport, chain extends Chain>(client: SignerWallet<chain, transport> | LocalAccount, paymentRequirements: PaymentRequirements, unsignedPaymentHeader: UnsignedPaymentPayload): Promise<PaymentPayload>;
/**
 * Creates a complete payment payload by preparing and signing a payment header.
 *
 * @param client - The signer wallet instance used to create and sign the payment
 * @param x402Version - The version of the X402 protocol to use
 * @param paymentRequirements - The payment requirements containing scheme and network information
 * @returns A promise that resolves to the complete signed payment payload
 */
declare function createPayment<transport extends Transport, chain extends Chain>(client: SignerWallet<chain, transport> | LocalAccount, x402Version: number, paymentRequirements: PaymentRequirements): Promise<PaymentPayload>;
/**
 * Creates and encodes a payment header for the given client and payment requirements.
 *
 * @param client - The signer wallet instance used to create the payment header
 * @param x402Version - The version of the X402 protocol to use
 * @param paymentRequirements - The payment requirements containing scheme and network information
 * @returns A promise that resolves to the encoded payment header string
 */
declare function createPaymentHeader$1(client: SignerWallet | LocalAccount, x402Version: number, paymentRequirements: PaymentRequirements): Promise<string>;

/**
 * Verifies a payment payload against the required payment details
 *
 * This function performs several verification steps:
 * - Verifies protocol version compatibility
 * - Validates the permit signature
 * - Confirms USDC contract address is correct for the chain
 * - Checks permit deadline is sufficiently in the future
 * - Verifies client has sufficient USDC balance
 * - Ensures payment amount meets required minimum
 *
 * @param client - The public client used for blockchain interactions
 * @param payload - The signed payment payload containing transfer parameters and signature
 * @param paymentRequirements - The payment requirements that the payload must satisfy
 * @returns A ValidPaymentRequest indicating if the payment is valid and any invalidation reason
 */
declare function verify$1<transport extends Transport, chain extends Chain, account extends Account | undefined>(client: ConnectedClient<transport, chain, account>, payload: PaymentPayload, paymentRequirements: PaymentRequirements): Promise<VerifyResponse>;
/**
 * Settles a payment by executing a USDC transferWithAuthorization transaction
 *
 * This function executes the actual USDC transfer using the signed authorization from the user.
 * The facilitator wallet submits the transaction but does not need to hold or transfer any tokens itself.
 *
 * @param wallet - The facilitator wallet that will submit the transaction
 * @param paymentPayload - The signed payment payload containing the transfer parameters and signature
 * @param paymentRequirements - The original payment details that were used to create the payload
 * @returns A PaymentExecutionResponse containing the transaction status and hash
 */
declare function settle$1<transport extends Transport, chain extends Chain>(wallet: SignerWallet<chain, transport>, paymentPayload: PaymentPayload, paymentRequirements: PaymentRequirements): Promise<SettleResponse>;

/**
 * Encodes a payment payload into a base64 string, ensuring bigint values are properly stringified
 *
 * @param payment - The payment payload to encode
 * @returns A base64 encoded string representation of the payment payload
 */
declare function encodePayment(payment: PaymentPayload): string;
/**
 * Decodes a base64 encoded payment string back into a PaymentPayload object
 *
 * @param payment - The base64 encoded payment string to decode
 * @returns The decoded and validated PaymentPayload object
 */
declare function decodePayment(payment: string): PaymentPayload;

declare const index$2_createPayment: typeof createPayment;
declare const index$2_decodePayment: typeof decodePayment;
declare const index$2_encodePayment: typeof encodePayment;
declare const index$2_preparePaymentHeader: typeof preparePaymentHeader;
declare const index$2_signPaymentHeader: typeof signPaymentHeader;
declare namespace index$2 {
  export { index$2_createPayment as createPayment, createPaymentHeader$1 as createPaymentHeader, index$2_decodePayment as decodePayment, index$2_encodePayment as encodePayment, index$2_preparePaymentHeader as preparePaymentHeader, settle$1 as settle, index$2_signPaymentHeader as signPaymentHeader, verify$1 as verify };
}

/**
 * Settle the payment payload against the payment requirements.
 * TODO: handle durable nonce lifetime transactions
 *
 * @param signer - The signer that will sign the transaction
 * @param payload - The payment payload to settle
 * @param paymentRequirements - The payment requirements to settle against
 * @param config - Optional configuration for X402 operations (e.g., custom RPC URLs)
 * @returns A SettleResponse indicating if the payment is settled and any error reason
 */
declare function settle(signer: TransactionSigner, payload: PaymentPayload, paymentRequirements: PaymentRequirements, config?: X402Config): Promise<SettleResponse>;
/**
 * Send a signed transaction to the RPC.
 * TODO: should this be moved to the shared/svm/rpc.ts file?
 *
 * @param signedTransaction - The signed transaction to send
 * @param rpc - The RPC client to use to send the transaction
 * @param sendTxConfig - The configuration for the transaction send
 * @returns The signature of the sent transaction
 */
declare function sendSignedTransaction(signedTransaction: Transaction, rpc: RpcDevnet<SolanaRpcApiDevnet> | RpcMainnet<SolanaRpcApiMainnet>, sendTxConfig?: Parameters<SendTransactionApi["sendTransaction"]>[1]): Promise<string>;
/**
 * Confirm a signed transaction.
 * TODO: can some of this be refactored to be moved to the shared/svm/rpc.ts file?
 * TODO: should the commitment and the timeout be passed in as parameters?
 *
 * @param signedTransaction - The signed transaction to confirm
 * @param rpc - The RPC client to use to confirm the transaction
 * @param rpcSubscriptions - The RPC subscriptions to use to confirm the transaction
 * @returns The success and signature of the confirmed transaction
 */
declare function confirmSignedTransaction(signedTransaction: Transaction, rpc: RpcDevnet<SolanaRpcApiDevnet> | RpcMainnet<SolanaRpcApiMainnet>, rpcSubscriptions: ReturnType<typeof getRpcSubscriptions>): Promise<{
    success: boolean;
    errorReason?: (typeof ErrorReasons)[number];
    signature: string;
}>;
/**
 * Send and confirm a signed transaction.
 *
 * @param signedTransaction - The signed transaction to send and confirm
 * @param rpc - The RPC client to use to send and confirm the transaction
 * @param rpcSubscriptions - The RPC subscriptions to use to send and confirm the transaction
 * @returns The success and signature of the confirmed transaction
 */
declare function sendAndConfirmSignedTransaction(signedTransaction: Transaction, rpc: RpcDevnet<SolanaRpcApiDevnet> | RpcMainnet<SolanaRpcApiMainnet>, rpcSubscriptions: ReturnType<typeof getRpcSubscriptions>): Promise<{
    success: boolean;
    errorReason?: (typeof ErrorReasons)[number];
    signature: string;
}>;

/**
 * Verify the payment payload against the payment requirements.
 *
 * @param signer - The signer that will sign and simulate the transaction
 * @param payload - The payment payload to verify
 * @param paymentRequirements - The payment requirements to verify against
 * @param config - Optional configuration for X402 operations (e.g., custom RPC URLs)
 * @returns A VerifyResponse indicating if the payment is valid and any invalidation reason
 */
declare function verify(signer: TransactionSigner, payload: PaymentPayload, paymentRequirements: PaymentRequirements, config?: X402Config): Promise<VerifyResponse>;
/**
 * Verify that the scheme and network are supported.
 *
 * @param payload - The payment payload to verify
 * @param paymentRequirements - The payment requirements to verify against
 */
declare function verifySchemesAndNetworks(payload: PaymentPayload, paymentRequirements: PaymentRequirements): void;
/**
 * Perform transaction introspection to validate the transaction structure and transfer details.
 * This function handles decoding the transaction, validating the transfer instruction,
 * and verifying all transfer details against the payment requirements.
 *
 * @param svmPayload - The SVM payload containing the transaction
 * @param paymentRequirements - The payment requirements to verify against
 * @param signer - The signer that will sign the transaction
 * @param config - Optional configuration for X402 operations (e.g., custom RPC URLs)
 */
declare function transactionIntrospection(svmPayload: ExactSvmPayload, paymentRequirements: PaymentRequirements, signer: TransactionSigner, config?: X402Config): Promise<void>;
/**
 * Verify that the transaction contains the expected instructions.
 *
 * @param transactionMessage - The transaction message to verify
 * @param paymentRequirements - The payment requirements to verify against
 * @param signer - The signer that will sign the transaction
 * @param rpc - The RPC client to use for verifying account existence
 * @throws Error if the transaction does not contain the expected instructions
 */
declare function verifyTransactionInstructions(transactionMessage: BaseTransactionMessage & TransactionMessageWithFeePayer & TransactionMessageWithLifetime, paymentRequirements: PaymentRequirements, signer: TransactionSigner, rpc: RpcDevnet<SolanaRpcApiDevnet> | RpcMainnet<SolanaRpcApiMainnet>): Promise<void>;
/**
 * Verify that the compute limit instruction is valid.
 *
 * @param instruction - The compute limit instruction to verify
 * @throws Error if the compute limit instruction is invalid
 */
declare function verifyComputeLimitInstruction(instruction: Instruction<string, readonly (AccountLookupMeta<string, string> | AccountMeta<string>)[]>): void;
/**
 * Verify that the compute price instruction is valid.
 * This function throws an error if the compute unit price is greater than 5 lamports,
 * to protect the facilitator against gas fee abuse from the client.
 *
 * @param instruction - The compute price instruction to verify
 * @throws Error if the compute price instruction is invalid
 */
declare function verifyComputePriceInstruction(instruction: Instruction<string, readonly (AccountLookupMeta<string, string> | AccountMeta<string>)[]>): void;
/**
 * Verify that the create ATA instruction is valid.
 *
 * @param instruction - The create ATA instruction to verify
 * @param paymentRequirements - The payment requirements to verify against
 * @throws Error if the create ATA instruction is invalid
 */
/**
 * Verify that the transfer instruction is valid.
 *
 * @param instruction - The transfer instruction to verify
 * @param paymentRequirements - The payment requirements to verify against
 * @param signer - The signer that will sign the transaction
 * @param rpc - The RPC client to use for verifying account existence
 * @throws Error if the transfer instruction is invalid
 */
declare function verifyTransferInstruction(instruction: Instruction<string, readonly (AccountLookupMeta<string, string> | AccountMeta<string>)[]>, paymentRequirements: PaymentRequirements, signer: TransactionSigner, rpc: RpcDevnet<SolanaRpcApiDevnet> | RpcMainnet<SolanaRpcApiMainnet>): Promise<void>;
/**
 * Verify that the transfer checked instruction is valid.
 *
 * @param parsedInstruction - The parsed transfer checked instruction to verify
 * @param paymentRequirements - The payment requirements to verify against
 * @param signer - The signer that will sign the transaction
 * @param rpc - The RPC client to use for verifying account existence
 * @throws Error if the transfer checked instruction is invalid
 */
declare function verifyTransferCheckedInstruction(parsedInstruction: ReturnType<typeof parseTransferCheckedInstruction>, paymentRequirements: PaymentRequirements, signer: TransactionSigner, rpc: RpcDevnet<SolanaRpcApiDevnet> | RpcMainnet<SolanaRpcApiMainnet>): Promise<void>;
/**
 * Inspect the decompiled transaction message to make sure that it is a valid
 * transfer instruction.
 *
 * @param instruction - The instruction to get the transfer instruction from
 * @returns The validated transfer instruction
 * @throws Error if the instruction is not a valid transfer checked instruction
 */
declare function getValidatedTransferCheckedInstruction(instruction: Instruction<string, readonly (AccountLookupMeta<string, string> | AccountMeta<string>)[]>): _solana_program_token.ParsedTransferCheckedInstruction<string, readonly (AccountLookupMeta<string, string> | AccountMeta<string>)[]>;

/**
 * Creates and encodes a payment header for the given client and payment requirements.
 *
 * @param client - The signer instance used to create the payment header
 * @param x402Version - The version of the X402 protocol to use
 * @param paymentRequirements - The payment requirements containing scheme and network information
 * @param config - Optional configuration for X402 operations (e.g., custom RPC URLs)
 * @returns A promise that resolves to a base64 encoded payment header string
 */
declare function createPaymentHeader(client: TransactionSigner, x402Version: number, paymentRequirements: PaymentRequirements, config?: X402Config): Promise<string>;
/**
 * Creates and signs a payment for the given client and payment requirements.
 *
 * @param client - The signer instance used to create and sign the payment tx
 * @param x402Version - The version of the X402 protocol to use
 * @param paymentRequirements - The payment requirements
 * @param config - Optional configuration for X402 operations (e.g., custom RPC URLs)
 * @returns A promise that resolves to a payment payload containing a base64 encoded solana token transfer tx
 */
declare function createAndSignPayment(client: TransactionSigner, x402Version: number, paymentRequirements: PaymentRequirements, config?: X402Config): Promise<PaymentPayload>;

declare const index$1_confirmSignedTransaction: typeof confirmSignedTransaction;
declare const index$1_createAndSignPayment: typeof createAndSignPayment;
declare const index$1_createPaymentHeader: typeof createPaymentHeader;
declare const index$1_getValidatedTransferCheckedInstruction: typeof getValidatedTransferCheckedInstruction;
declare const index$1_sendAndConfirmSignedTransaction: typeof sendAndConfirmSignedTransaction;
declare const index$1_sendSignedTransaction: typeof sendSignedTransaction;
declare const index$1_settle: typeof settle;
declare const index$1_transactionIntrospection: typeof transactionIntrospection;
declare const index$1_verify: typeof verify;
declare const index$1_verifyComputeLimitInstruction: typeof verifyComputeLimitInstruction;
declare const index$1_verifyComputePriceInstruction: typeof verifyComputePriceInstruction;
declare const index$1_verifySchemesAndNetworks: typeof verifySchemesAndNetworks;
declare const index$1_verifyTransactionInstructions: typeof verifyTransactionInstructions;
declare const index$1_verifyTransferCheckedInstruction: typeof verifyTransferCheckedInstruction;
declare const index$1_verifyTransferInstruction: typeof verifyTransferInstruction;
declare namespace index$1 {
  export { index$1_confirmSignedTransaction as confirmSignedTransaction, index$1_createAndSignPayment as createAndSignPayment, index$1_createPaymentHeader as createPaymentHeader, index$1_getValidatedTransferCheckedInstruction as getValidatedTransferCheckedInstruction, index$1_sendAndConfirmSignedTransaction as sendAndConfirmSignedTransaction, index$1_sendSignedTransaction as sendSignedTransaction, index$1_settle as settle, index$1_transactionIntrospection as transactionIntrospection, index$1_verify as verify, index$1_verifyComputeLimitInstruction as verifyComputeLimitInstruction, index$1_verifyComputePriceInstruction as verifyComputePriceInstruction, index$1_verifySchemesAndNetworks as verifySchemesAndNetworks, index$1_verifyTransactionInstructions as verifyTransactionInstructions, index$1_verifyTransferCheckedInstruction as verifyTransferCheckedInstruction, index$1_verifyTransferInstruction as verifyTransferInstruction };
}

declare const SCHEME = "exact";

declare const index_SCHEME: typeof SCHEME;
declare namespace index {
  export { index_SCHEME as SCHEME, index$2 as evm, index$1 as svm };
}

export { decodePayment, encodePayment, index as exact };
