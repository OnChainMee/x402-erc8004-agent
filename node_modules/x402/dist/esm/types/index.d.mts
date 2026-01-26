export { S as SvmConfig, X as X402Config } from '../config-Dfuvno71.mjs';
export { E as ERC20TokenAmount, F as FacilitatorConfig, M as Money, d as PaymentMiddlewareConfig, c as PaywallConfig, P as Price, b as Resource, e as RouteConfig, a as RoutePattern, R as RoutesConfig, S as SPLTokenAmount, W as Wallet, m as moneySchema } from '../middleware-Kit1Z0iN.mjs';
export { C as ChainIdToNetwork, E as EvmNetworkToChainId, N as Network, a as NetworkSchema, S as SupportedEVMNetworks, b as SupportedSVMNetworks, c as SvmNetworkToChainId } from '../network-DLlUXjbR.mjs';
export { C as ConnectedClient, M as MultiNetworkSigner, S as Signer, c as createConnectedClient, a as createSigner, i as isEvmSignerWallet, d as isMultiNetworkSigner, b as isSvmSignerWallet } from '../wallet-B_zZSSY0.mjs';
import { C as ChainConfig, c as config } from '../config-CFBSAuxW.mjs';
import { C as ConnectedClient, E as EvmSigner, S as SignerWallet, c as createClientAvalancheFuji, a as createClientSepolia, b as createConnectedClient, d as createSigner, e as createSignerAvalancheFuji, f as createSignerSepolia, g as getChainFromNetwork, i as isAccount, h as isSignerWallet, j as isZkStackChain } from '../wallet-h2_C4cJt.mjs';
import { S as SettleResponse } from '../x402Specs-COgRh4j6.mjs';
export { o as DiscoveredResource, D as DiscoveredResourceSchema, b as ErrorReasons, g as ExactEvmPayload, e as ExactEvmPayloadAuthorization, d as ExactEvmPayloadAuthorizationSchema, f as ExactEvmPayloadSchema, E as ExactSvmPayload, h as ExactSvmPayloadSchema, m as HTTPRequestStructure, l as HTTPRequestStructureSchema, H as HTTPVerbs, w as ListDiscoveryResourcesRequest, L as ListDiscoveryResourcesRequestSchema, z as ListDiscoveryResourcesResponse, y as ListDiscoveryResourcesResponseSchema, a as PaymentPayload, i as PaymentPayloadSchema, P as PaymentRequirements, c as PaymentRequirementsSchema, n as RequestStructure, R as RequestStructureSchema, q as SettleRequest, p as SettleRequestSchema, v as SettleResponseSchema, B as SupportedPaymentKind, A as SupportedPaymentKindSchema, F as SupportedPaymentKindsResponse, C as SupportedPaymentKindsResponseSchema, U as UnsignedPaymentPayload, r as VerifyRequest, V as VerifyRequestSchema, u as VerifyResponse, t as VerifyResponseSchema, s as schemes, k as x402Response, j as x402ResponseSchema, x as x402Versions } from '../x402Specs-COgRh4j6.mjs';
import { z } from 'zod';
import '../wallet-BHq0zJhq.mjs';
import '@solana/kit';
import 'viem';
import 'viem/chains';

declare const facilitatorRequestSchema: z.ZodObject<{
    paymentHeader: z.ZodString;
    paymentRequirements: z.ZodObject<{
        scheme: z.ZodEnum<["exact"]>;
        network: z.ZodEnum<["abstract", "abstract-testnet", "base-sepolia", "base", "avalanche-fuji", "avalanche", "iotex", "solana-devnet", "solana", "sei", "sei-testnet", "polygon", "polygon-amoy", "peaq", "story", "educhain", "skale-base-sepolia"]>;
        maxAmountRequired: z.ZodEffects<z.ZodString, string, string>;
        resource: z.ZodString;
        description: z.ZodString;
        mimeType: z.ZodString;
        outputSchema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        payTo: z.ZodUnion<[z.ZodString, z.ZodString]>;
        maxTimeoutSeconds: z.ZodNumber;
        asset: z.ZodUnion<[z.ZodString, z.ZodString]>;
        extra: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
}, "strip", z.ZodTypeAny, {
    paymentRequirements: {
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
    };
    paymentHeader: string;
}, {
    paymentRequirements: {
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
    };
    paymentHeader: string;
}>;
type FacilitatorRequest = z.infer<typeof facilitatorRequestSchema>;
/**
 * Encodes a settlement response into a base64 header string
 *
 * @param response - The settlement response to encode
 * @returns A base64 encoded string containing the settlement response
 */
declare function settleResponseHeader(response: SettleResponse): string;
/**
 * Decodes a base64 header string back into a settlement response
 *
 * @param header - The base64 encoded settlement response header
 * @returns The decoded settlement response object
 */
declare function settleResponseFromHeader(header: string): SettleResponse;

declare const authorizationTypes: {
    TransferWithAuthorization: {
        name: string;
        type: string;
    }[];
};
declare const authorizationPrimaryType = "TransferWithAuthorization";

declare const usdcABI: readonly [{
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "authorizer";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "nonce";
        readonly type: "bytes32";
    }];
    readonly name: "AuthorizationCanceled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "authorizer";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "nonce";
        readonly type: "bytes32";
    }];
    readonly name: "AuthorizationUsed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "_account";
        readonly type: "address";
    }];
    readonly name: "Blacklisted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newBlacklister";
        readonly type: "address";
    }];
    readonly name: "BlacklisterChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "burner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "Burn";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newMasterMinter";
        readonly type: "address";
    }];
    readonly name: "MasterMinterChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "minter";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "Mint";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "minter";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "minterAllowedAmount";
        readonly type: "uint256";
    }];
    readonly name: "MinterConfigured";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "oldMinter";
        readonly type: "address";
    }];
    readonly name: "MinterRemoved";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "previousOwner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferred";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "Pause";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newAddress";
        readonly type: "address";
    }];
    readonly name: "PauserChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newRescuer";
        readonly type: "address";
    }];
    readonly name: "RescuerChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "_account";
        readonly type: "address";
    }];
    readonly name: "UnBlacklisted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "Unpause";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "CANCEL_AUTHORIZATION_TYPEHASH";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "DOMAIN_SEPARATOR";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "PERMIT_TYPEHASH";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "RECEIVE_WITH_AUTHORIZATION_TYPEHASH";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "TRANSFER_WITH_AUTHORIZATION_TYPEHASH";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "authorizer";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "nonce";
        readonly type: "bytes32";
    }];
    readonly name: "authorizationState";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_account";
        readonly type: "address";
    }];
    readonly name: "blacklist";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "blacklister";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_amount";
        readonly type: "uint256";
    }];
    readonly name: "burn";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "authorizer";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "nonce";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "cancelAuthorization";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "authorizer";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "nonce";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "cancelAuthorization";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "minter";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "minterAllowedAmount";
        readonly type: "uint256";
    }];
    readonly name: "configureMinter";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "currency";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "decrement";
        readonly type: "uint256";
    }];
    readonly name: "decreaseAllowance";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "increment";
        readonly type: "uint256";
    }];
    readonly name: "increaseAllowance";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "tokenName";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "tokenSymbol";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "tokenCurrency";
        readonly type: "string";
    }, {
        readonly internalType: "uint8";
        readonly name: "tokenDecimals";
        readonly type: "uint8";
    }, {
        readonly internalType: "address";
        readonly name: "newMasterMinter";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "newPauser";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "newBlacklister";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "newName";
        readonly type: "string";
    }];
    readonly name: "initializeV2";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "lostAndFound";
        readonly type: "address";
    }];
    readonly name: "initializeV2_1";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "accountsToBlacklist";
        readonly type: "address[]";
    }, {
        readonly internalType: "string";
        readonly name: "newSymbol";
        readonly type: "string";
    }];
    readonly name: "initializeV2_2";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_account";
        readonly type: "address";
    }];
    readonly name: "isBlacklisted";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "isMinter";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "masterMinter";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_amount";
        readonly type: "uint256";
    }];
    readonly name: "mint";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "minter";
        readonly type: "address";
    }];
    readonly name: "minterAllowance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "nonces";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "paused";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pauser";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "permit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "permit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "validAfter";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "validBefore";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes32";
        readonly name: "nonce";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "receiveWithAuthorization";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "validAfter";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "validBefore";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes32";
        readonly name: "nonce";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "receiveWithAuthorization";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "minter";
        readonly type: "address";
    }];
    readonly name: "removeMinter";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenContract";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "rescueERC20";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "rescuer";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "validAfter";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "validBefore";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes32";
        readonly name: "nonce";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "transferWithAuthorization";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "validAfter";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "validBefore";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes32";
        readonly name: "nonce";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "transferWithAuthorization";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_account";
        readonly type: "address";
    }];
    readonly name: "unBlacklist";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "unpause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_newBlacklister";
        readonly type: "address";
    }];
    readonly name: "updateBlacklister";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_newMasterMinter";
        readonly type: "address";
    }];
    readonly name: "updateMasterMinter";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_newPauser";
        readonly type: "address";
    }];
    readonly name: "updatePauser";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newRescuer";
        readonly type: "address";
    }];
    readonly name: "updateRescuer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}];

declare const index$1_ChainConfig: typeof ChainConfig;
declare const index$1_ConnectedClient: typeof ConnectedClient;
declare const index$1_EvmSigner: typeof EvmSigner;
declare const index$1_SignerWallet: typeof SignerWallet;
declare const index$1_authorizationPrimaryType: typeof authorizationPrimaryType;
declare const index$1_authorizationTypes: typeof authorizationTypes;
declare const index$1_config: typeof config;
declare const index$1_createClientAvalancheFuji: typeof createClientAvalancheFuji;
declare const index$1_createClientSepolia: typeof createClientSepolia;
declare const index$1_createConnectedClient: typeof createConnectedClient;
declare const index$1_createSigner: typeof createSigner;
declare const index$1_createSignerAvalancheFuji: typeof createSignerAvalancheFuji;
declare const index$1_createSignerSepolia: typeof createSignerSepolia;
declare const index$1_getChainFromNetwork: typeof getChainFromNetwork;
declare const index$1_isAccount: typeof isAccount;
declare const index$1_isSignerWallet: typeof isSignerWallet;
declare const index$1_isZkStackChain: typeof isZkStackChain;
declare const index$1_usdcABI: typeof usdcABI;
declare namespace index$1 {
  export { index$1_ChainConfig as ChainConfig, index$1_ConnectedClient as ConnectedClient, index$1_EvmSigner as EvmSigner, index$1_SignerWallet as SignerWallet, index$1_authorizationPrimaryType as authorizationPrimaryType, index$1_authorizationTypes as authorizationTypes, index$1_config as config, index$1_createClientAvalancheFuji as createClientAvalancheFuji, index$1_createClientSepolia as createClientSepolia, index$1_createConnectedClient as createConnectedClient, index$1_createSigner as createSigner, index$1_createSignerAvalancheFuji as createSignerAvalancheFuji, index$1_createSignerSepolia as createSignerSepolia, index$1_getChainFromNetwork as getChainFromNetwork, index$1_isAccount as isAccount, index$1_isSignerWallet as isSignerWallet, index$1_isZkStackChain as isZkStackChain, index$1_usdcABI as usdcABI };
}

declare const SvmAddressRegex: RegExp;

declare const index_SvmAddressRegex: typeof SvmAddressRegex;
declare namespace index {
  export { index_SvmAddressRegex as SvmAddressRegex };
}

export { type FacilitatorRequest, SettleResponse, index$1 as evm, facilitatorRequestSchema, settleResponseFromHeader, settleResponseHeader, index as svm };
