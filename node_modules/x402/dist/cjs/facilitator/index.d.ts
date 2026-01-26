import { X as X402Config } from '../config-Dfuvno71.js';
import { C as ConnectedClient, S as Signer } from '../wallet-QoI_c_RA.js';
import { a as PaymentPayload, P as PaymentRequirements, u as VerifyResponse, S as SettleResponse } from '../x402Specs-COgRh4j6.js';
import { Transport, Chain, Account } from 'viem';
import '../wallet-h2_C4cJt.js';
import 'viem/chains';
import '../wallet-BHq0zJhq.js';
import '@solana/kit';
import 'zod';

/**
 * Verifies a payment payload against the required payment details regardless of the scheme
 * this function wraps all verify functions for each specific scheme
 *
 * @param client - The public client used for blockchain interactions
 * @param payload - The signed payment payload containing transfer parameters and signature
 * @param paymentRequirements - The payment requirements that the payload must satisfy
 * @param config - Optional configuration for X402 operations (e.g., custom RPC URLs)
 * @returns A ValidPaymentRequest indicating if the payment is valid and any invalidation reason
 */
declare function verify<transport extends Transport, chain extends Chain, account extends Account | undefined>(client: ConnectedClient | Signer, payload: PaymentPayload, paymentRequirements: PaymentRequirements, config?: X402Config): Promise<VerifyResponse>;
/**
 * Settles a payment payload against the required payment details regardless of the scheme
 * this function wraps all settle functions for each specific scheme
 *
 * @param client - The signer wallet used for blockchain interactions
 * @param payload - The signed payment payload containing transfer parameters and signature
 * @param paymentRequirements - The payment requirements that the payload must satisfy
 * @param config - Optional configuration for X402 operations (e.g., custom RPC URLs)
 * @returns A SettleResponse indicating if the payment is settled and any settlement reason
 */
declare function settle<transport extends Transport, chain extends Chain>(client: Signer, payload: PaymentPayload, paymentRequirements: PaymentRequirements, config?: X402Config): Promise<SettleResponse>;
type Supported = {
    x402Version: number;
    kind: {
        scheme: string;
        networkId: string;
        extra: object;
    }[];
};

export { type Supported, settle, verify };
