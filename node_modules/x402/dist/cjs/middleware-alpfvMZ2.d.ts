import { z } from 'zod';
import { N as Network } from './network-DLlUXjbR.js';
import { E as EvmSigner } from './wallet-h2_C4cJt.js';
import { a as PaymentPayload, P as PaymentRequirements, u as VerifyResponse, S as SettleResponse, F as SupportedPaymentKindsResponse, w as ListDiscoveryResourcesRequest, z as ListDiscoveryResourcesResponse, m as HTTPRequestStructure } from './x402Specs-COgRh4j6.js';

declare const moneySchema: z.ZodPipeline<z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodNumber]>, z.ZodNumber>;
type Money = z.input<typeof moneySchema>;

type Resource = `${string}://${string}`;

type CreateHeaders = () => Promise<{
    verify: Record<string, string>;
    settle: Record<string, string>;
    supported: Record<string, string>;
    list?: Record<string, string>;
}>;
/**
 * Creates a facilitator client for interacting with the X402 payment facilitator service
 *
 * @param facilitator - The facilitator config to use. If not provided, the default facilitator will be used.
 * @returns An object containing verify and settle functions for interacting with the facilitator
 */
declare function useFacilitator(facilitator?: FacilitatorConfig): {
    verify: (payload: PaymentPayload, paymentRequirements: PaymentRequirements) => Promise<VerifyResponse>;
    settle: (payload: PaymentPayload, paymentRequirements: PaymentRequirements) => Promise<SettleResponse>;
    supported: () => Promise<SupportedPaymentKindsResponse>;
    list: (config?: ListDiscoveryResourcesRequest) => Promise<ListDiscoveryResourcesResponse>;
};
declare const verify: (payload: PaymentPayload, paymentRequirements: PaymentRequirements) => Promise<VerifyResponse>;
declare const settle: (payload: PaymentPayload, paymentRequirements: PaymentRequirements) => Promise<SettleResponse>;
declare const supported: () => Promise<SupportedPaymentKindsResponse>;
declare const list: (config?: ListDiscoveryResourcesRequest) => Promise<ListDiscoveryResourcesResponse>;

type FacilitatorConfig = {
    url: Resource;
    createAuthHeaders?: CreateHeaders;
};
type PaywallConfig = {
    cdpClientKey?: string;
    appName?: string;
    appLogo?: string;
    sessionTokenEndpoint?: string;
};
type PaymentMiddlewareConfig = {
    description?: string;
    mimeType?: string;
    maxTimeoutSeconds?: number;
    inputSchema?: Omit<HTTPRequestStructure, "type" | "method">;
    outputSchema?: object;
    discoverable?: boolean;
    customPaywallHtml?: string;
    resource?: Resource;
    errorMessages?: {
        paymentRequired?: string;
        invalidPayment?: string;
        noMatchingRequirements?: string;
        verificationFailed?: string;
        settlementFailed?: string;
    };
};
interface ERC20TokenAmount {
    amount: string;
    asset: {
        address: `0x${string}`;
        decimals: number;
        eip712: {
            name: string;
            version: string;
        };
    };
}
interface SPLTokenAmount {
    amount: string;
    asset: {
        address: string;
        decimals: number;
    };
}
type Price = Money | ERC20TokenAmount | SPLTokenAmount;
interface RouteConfig {
    price: Price;
    network: Network;
    config?: PaymentMiddlewareConfig;
}
type RoutesConfig = Record<string, Price | RouteConfig>;
interface RoutePattern {
    verb: string;
    pattern: RegExp;
    config: RouteConfig;
}
type Wallet = EvmSigner;

export { type CreateHeaders as C, type ERC20TokenAmount as E, type FacilitatorConfig as F, type Money as M, type Price as P, type RoutesConfig as R, type SPLTokenAmount as S, type Wallet as W, type RoutePattern as a, type Resource as b, type PaywallConfig as c, type PaymentMiddlewareConfig as d, type RouteConfig as e, supported as f, list as l, moneySchema as m, settle as s, useFacilitator as u, verify as v };
