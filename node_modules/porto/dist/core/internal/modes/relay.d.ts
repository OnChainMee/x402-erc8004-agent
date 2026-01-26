import * as Hex from 'ox/Hex';
import * as WebAuthnP256 from 'ox/WebAuthnP256';
import * as Account from '../../../viem/Account.js';
import * as Key from '../../../viem/Key.js';
import * as Mode from '../mode.js';
import * as PermissionsRequest from '../permissionsRequest.js';
/**
 * Mode for a WebAuthn-based environment that interacts with the Porto
 * Relay. Account management, signing, and execution is coordinated
 * between the library and the Relay.
 *
 * @param parameters - Parameters.
 * @returns Mode.
 */
export declare function relay(parameters?: relay.Parameters): import("../types.js").Assign<Mode.Mode, {
    readonly actions: {
        readonly addFunds: () => Promise<never>;
        readonly createAccount: (parameters: {
            admins?: readonly Pick<Key.Key, "publicKey" | "type">[] | undefined;
            email?: boolean | undefined;
            internal: Mode.ActionsInternal;
            label?: string | undefined;
            permissions?: PermissionsRequest.PermissionsRequest | undefined;
            signInWithEthereum?: import("../schema/capabilities.js").signInWithEthereum.Request | undefined;
        }) => Promise<{
            account: {
                signInWithEthereum: {
                    message: string;
                    signature: `0x${string}`;
                } | undefined;
                address: import("viem").Address;
                publicKey: import("viem").Hex;
                type: "local";
                nonceManager?: import("viem").NonceManager | undefined;
                sign: (parameters: {
                    hash: import("viem").Hash;
                }) => Promise<import("viem").Hex>;
                signAuthorization?: ((parameters: import("viem").AuthorizationRequest) => Promise<import("viem/accounts").SignAuthorizationReturnType>) | undefined | undefined;
                signMessage: ({ message }: {
                    message: import("viem").SignableMessage;
                }) => Promise<import("viem").Hex>;
                signTransaction: <serializer extends import("viem").SerializeTransactionFn<import("viem").TransactionSerializable> = import("viem").SerializeTransactionFn<import("viem").TransactionSerializable>, transaction extends Parameters<serializer>[0] = Parameters<serializer>[0]>(transaction: transaction, options?: {
                    serializer?: serializer | undefined;
                } | undefined) => Promise<import("viem").Hex>;
                signTypedData: <const typedData extends import("viem").TypedData | Record<string, unknown>, primaryType extends keyof typedData | "EIP712Domain" = keyof typedData>(parameters: import("viem").TypedDataDefinition<typedData, primaryType>) => Promise<import("viem").Hex>;
                source: "porto" | "privateKey";
                keys: readonly Key.Key[];
            };
        }>;
        readonly getAccountVersion: (parameters: {
            address: import("ox/Address").Address;
            internal: Mode.ActionsInternal;
        }) => Promise<{
            current: string;
            latest: string;
        }>;
        readonly getAssets: (parameters: {
            account: `0x${string}`;
            assetFilter?: Record<`0x${string}`, readonly {
                address: `0x${string}` | "native";
                type: string;
            }[]> | undefined;
            assetTypeFilter?: readonly string[] | undefined;
            chainFilter?: readonly number[] | undefined;
        } & {
            internal: Mode.ActionsInternal;
        }) => Promise<Record<string, readonly ({
            address: `0x${string}`;
            balance: bigint;
            metadata: {
                decimals: number;
                name: string;
                symbol: string;
                fiat?: {
                    currency: string;
                    value: number;
                } | null | undefined;
            } | null;
            type: "erc20";
        } | {
            address: "native" | null;
            balance: bigint;
            metadata: {
                decimals: number;
                fiat?: {
                    currency: string;
                    value: number;
                } | null | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
            } | null;
            type: "native";
        })[]>>;
        readonly getCallsStatus: (parameters: {
            id: Hex.Hex;
            internal: Mode.ActionsInternal;
        }) => Promise<{
            atomic: true;
            chainId: `0x${string}`;
            id: `0x${string}`;
            receipts: {
                blockHash: `0x${string}`;
                blockNumber: `0x${string}`;
                gasUsed: `0x${string}`;
                logs: readonly {
                    address: `0x${string}`;
                    data: `0x${string}`;
                    topics: readonly `0x${string}`[];
                }[];
                status: `0x${string}`;
                transactionHash: `0x${string}`;
            }[] | undefined;
            status: number;
            version: string;
        }>;
        readonly getCapabilities: (parameters: {
            chainIds?: readonly Hex.Hex[] | undefined;
            internal: Mode.ActionsInternal;
        }) => Promise<Record<`0x${string}`, {
            readonly atomic: {
                readonly status: "supported";
            };
            readonly atomicBatch: {
                readonly supported: true;
            };
            readonly feeToken: {
                readonly supported: true;
                readonly tokens: readonly [];
            };
            readonly merchant: {
                readonly supported: true;
            };
            readonly permissions: {
                readonly supported: true;
            };
            readonly requiredFunds: {
                readonly supported: boolean;
                readonly tokens: readonly [];
            };
        }>>;
        readonly getKeys: (parameters: {
            account: Account.Account;
            chainIds?: readonly number[] | undefined;
            internal: Mode.ActionsInternal;
        }) => Promise<Key.Key[]>;
        readonly grantAdmin: (parameters: {
            account: Account.Account;
            internal: Mode.ActionsInternal;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            key: Key.from.Value;
        }) => Promise<{
            key: {
                expiry: number;
                hash: `0x${string}`;
                id: `0x${string}`;
                publicKey: `0x${string}`;
                role: "admin" | "session";
                type: "address";
                feeToken?: {
                    limit: `${number}` | `${number}.${number}`;
                    symbol?: string | undefined;
                } | null | undefined;
                permissions?: {
                    calls?: readonly ({
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                        to?: undefined;
                    } | {
                        to: `0x${string}`;
                        signature?: undefined;
                    })[] | undefined;
                    signatureVerification?: {
                        addresses: readonly `0x${string}`[];
                    } | undefined;
                    spend?: readonly {
                        limit: bigint;
                        period: "minute" | "hour" | "day" | "week" | "month" | "year";
                        token?: `0x${string}` | undefined;
                    }[] | undefined;
                } | undefined;
                chainId?: number | undefined;
                prehash?: boolean | undefined | undefined;
                privateKey?: unknown;
            } | {
                expiry: number;
                hash: `0x${string}`;
                id: `0x${string}`;
                publicKey: `0x${string}`;
                role: "admin" | "session";
                type: "p256";
                feeToken?: {
                    limit: `${number}` | `${number}.${number}`;
                    symbol?: string | undefined;
                } | null | undefined;
                permissions?: {
                    calls?: readonly ({
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                        to?: undefined;
                    } | {
                        to: `0x${string}`;
                        signature?: undefined;
                    })[] | undefined;
                    signatureVerification?: {
                        addresses: readonly `0x${string}`[];
                    } | undefined;
                    spend?: readonly {
                        limit: bigint;
                        period: "minute" | "hour" | "day" | "week" | "month" | "year";
                        token?: `0x${string}` | undefined;
                    }[] | undefined;
                } | undefined;
                chainId?: number | undefined;
                prehash?: boolean | undefined | undefined;
                privateKey?: (() => Hex.Hex) | undefined;
            } | {
                expiry: number;
                hash: `0x${string}`;
                id: `0x${string}`;
                publicKey: `0x${string}`;
                role: "admin" | "session";
                type: "secp256k1";
                feeToken?: {
                    limit: `${number}` | `${number}.${number}`;
                    symbol?: string | undefined;
                } | null | undefined;
                permissions?: {
                    calls?: readonly ({
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                        to?: undefined;
                    } | {
                        to: `0x${string}`;
                        signature?: undefined;
                    })[] | undefined;
                    signatureVerification?: {
                        addresses: readonly `0x${string}`[];
                    } | undefined;
                    spend?: readonly {
                        limit: bigint;
                        period: "minute" | "hour" | "day" | "week" | "month" | "year";
                        token?: `0x${string}` | undefined;
                    }[] | undefined;
                } | undefined;
                chainId?: number | undefined;
                prehash?: boolean | undefined | undefined;
                privateKey?: (() => Hex.Hex) | undefined;
            } | {
                expiry: number;
                hash: `0x${string}`;
                id: `0x${string}`;
                publicKey: `0x${string}`;
                role: "admin" | "session";
                type: "p256";
                feeToken?: {
                    limit: `${number}` | `${number}.${number}`;
                    symbol?: string | undefined;
                } | null | undefined;
                permissions?: {
                    calls?: readonly ({
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                        to?: undefined;
                    } | {
                        to: `0x${string}`;
                        signature?: undefined;
                    })[] | undefined;
                    signatureVerification?: {
                        addresses: readonly `0x${string}`[];
                    } | undefined;
                    spend?: readonly {
                        limit: bigint;
                        period: "minute" | "hour" | "day" | "week" | "month" | "year";
                        token?: `0x${string}` | undefined;
                    }[] | undefined;
                } | undefined;
                chainId?: number | undefined;
                prehash?: boolean | undefined | undefined;
                privateKey?: CryptoKey | undefined;
            } | {
                expiry: number;
                hash: `0x${string}`;
                id: `0x${string}`;
                publicKey: `0x${string}`;
                role: "admin" | "session";
                type: "webauthn-p256";
                feeToken?: {
                    limit: `${number}` | `${number}.${number}`;
                    symbol?: string | undefined;
                } | null | undefined;
                permissions?: {
                    calls?: readonly ({
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                        to?: undefined;
                    } | {
                        to: `0x${string}`;
                        signature?: undefined;
                    })[] | undefined;
                    signatureVerification?: {
                        addresses: readonly `0x${string}`[];
                    } | undefined;
                    spend?: readonly {
                        limit: bigint;
                        period: "minute" | "hour" | "day" | "week" | "month" | "year";
                        token?: `0x${string}` | undefined;
                    }[] | undefined;
                } | undefined;
                chainId?: number | undefined;
                prehash?: boolean | undefined | undefined;
                privateKey?: import("../types.js").OneOf<{
                    credential: Pick<WebAuthnP256.P256Credential, "id" | "publicKey">;
                    rpId: string | undefined;
                } | {
                    privateKey: () => Hex.Hex;
                }> | undefined;
            };
        }>;
        readonly grantPermissions: (parameters: {
            account: Account.Account;
            internal: Mode.ActionsInternal;
            permissions?: PermissionsRequest.PermissionsRequest | undefined;
        }) => Promise<{
            key: Key.Key;
        }>;
        readonly loadAccounts: (parameters: {
            address?: Hex.Hex | undefined;
            key?: {
                credentialId?: string | undefined;
                publicKey: Hex.Hex;
            } | undefined;
            internal: Mode.ActionsInternal;
            permissions?: PermissionsRequest.PermissionsRequest | undefined;
            signInWithEthereum?: import("../schema/capabilities.js").signInWithEthereum.Request | undefined;
        }) => Promise<{
            accounts: {
                signInWithEthereum: {
                    message: string;
                    signature: `0x${string}`;
                } | undefined;
                address: import("viem").Address;
                nonceManager?: import("viem").NonceManager | undefined;
                sign: (parameters: {
                    hash: import("viem").Hash;
                }) => Promise<import("viem").Hex>;
                signAuthorization?: ((parameters: import("viem").AuthorizationRequest) => Promise<import("viem/accounts").SignAuthorizationReturnType>) | undefined;
                signMessage: ({ message }: {
                    message: import("viem").SignableMessage;
                }) => Promise<import("viem").Hex>;
                signTransaction: <serializer extends import("viem").SerializeTransactionFn<import("viem").TransactionSerializable> = import("viem").SerializeTransactionFn<import("viem").TransactionSerializable>, transaction extends Parameters<serializer>[0] = Parameters<serializer>[0]>(transaction: transaction, options?: {
                    serializer?: serializer | undefined;
                } | undefined) => Promise<import("viem").Hex>;
                signTypedData: <const typedData extends import("viem").TypedData | Record<string, unknown>, primaryType extends keyof typedData | "EIP712Domain" = keyof typedData>(parameters: import("viem").TypedDataDefinition<typedData, primaryType>) => Promise<import("viem").Hex>;
                publicKey: import("viem").Hex;
                source: "porto";
                type: "local";
                keys: Key.Key[];
            }[];
        }>;
        readonly prepareCalls: (parameters: {
            account: Account.Account;
            calls: readonly import("../call.js").Call[];
            key?: Pick<Key.Key, "prehash" | "publicKey" | "type"> | undefined;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            internal: Mode.ActionsInternal;
            merchantUrl?: string | undefined;
            requiredFunds?: import("../schema/rpc.js").wallet_prepareCalls.Capabilities["requiredFunds"] | undefined;
        }) => Promise<{
            account: Account.Account<"porto" | "privateKey">;
            capabilities: {
                quote: any;
                assetDiffs?: Record<`0x${string}`, readonly (readonly [`0x${string}`, readonly ({
                    direction: "incoming" | "outgoing";
                    symbol: string;
                    type: "erc20";
                    value: bigint;
                    address?: `0x${string}` | null | undefined;
                    decimals?: number | null | undefined;
                    fiat?: {
                        currency: string;
                        value: number;
                    } | undefined;
                    name?: string | null | undefined;
                } | {
                    direction: "incoming" | "outgoing";
                    symbol: string;
                    type: "erc721";
                    uri: string;
                    value: bigint;
                    address?: `0x${string}` | null | undefined;
                    fiat?: {
                        currency: string;
                        value: number;
                    } | undefined;
                    name?: string | null | undefined;
                } | {
                    address: null;
                    direction: "incoming" | "outgoing";
                    symbol: string;
                    type: null;
                    value: bigint;
                    decimals?: number | null | undefined;
                    fiat?: {
                        currency: string;
                        value: number;
                    } | undefined;
                })[]])[]> | undefined;
                authorizeKeys?: readonly {
                    hash: `0x${string}`;
                    permissions: readonly ({
                        selector: `0x${string}`;
                        to: `0x${string}`;
                        type: "call";
                    } | {
                        limit: bigint;
                        period: "minute" | "hour" | "day" | "week" | "month" | "year";
                        type: "spend";
                        token?: `0x${string}` | null | undefined;
                    })[];
                    expiry: number;
                    publicKey: `0x${string}`;
                    role: "admin" | "normal";
                    type: "p256" | "secp256k1" | "webauthnp256";
                    prehash?: boolean | undefined;
                }[] | null | undefined;
                feePayerDigest?: `0x${string}` | undefined;
                feeSignature?: `0x${string}` | undefined;
                feeTotals?: Record<`0x${string}`, {
                    currency: string;
                    value: string;
                }> | undefined;
                revokeKeys?: readonly {
                    hash: `0x${string}`;
                }[] | null | undefined;
            };
            chainId: number;
            context: {
                account: Account.Account<"porto" | "privateKey">;
                calls: readonly import("../call.js").Call[];
                nonce: bigint | undefined;
                preCall?: {
                    chainId?: number | undefined;
                    eoa?: `0x${string}` | undefined;
                    executionData?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    signature?: `0x${string}` | undefined;
                } | undefined;
                quote?: {
                    hash?: `0x${string}` | undefined;
                    r?: `0x${string}` | undefined;
                    s?: `0x${string}` | undefined;
                    v?: `0x${string}` | undefined;
                    yParity?: `0x${string}` | undefined;
                    multiChainRoot?: `0x${string}` | null | undefined;
                    quotes?: readonly {
                        chainId: number;
                        ethPrice: bigint;
                        extraPayment: bigint;
                        feeTokenDeficit: bigint;
                        intent: {
                            combinedGas: bigint;
                            encodedFundTransfers: readonly `0x${string}`[];
                            encodedPreCalls: readonly `0x${string}`[];
                            eoa: `0x${string}`;
                            executionData: `0x${string}`;
                            expiry: bigint;
                            funder: `0x${string}`;
                            funderSignature: `0x${string}`;
                            isMultichain: boolean;
                            nonce: bigint;
                            payer: `0x${string}`;
                            paymentAmount: bigint;
                            paymentMaxAmount: bigint;
                            paymentRecipient: `0x${string}`;
                            paymentSignature: `0x${string}`;
                            paymentToken: `0x${string}`;
                            settler: `0x${string}`;
                            settlerContext: `0x${string}`;
                            signature: `0x${string}`;
                            supportedAccountImplementation: `0x${string}`;
                        } | {
                            combinedGas: bigint;
                            encodedFundTransfers: readonly `0x${string}`[];
                            encodedPreCalls: readonly `0x${string}`[];
                            eoa: `0x${string}`;
                            executionData: `0x${string}`;
                            expiry: bigint;
                            funder: `0x${string}`;
                            funderSignature: `0x${string}`;
                            isMultichain: boolean;
                            nonce: bigint;
                            payer: `0x${string}`;
                            paymentRecipient: `0x${string}`;
                            paymentSignature: `0x${string}`;
                            paymentToken: `0x${string}`;
                            prePaymentAmount: bigint;
                            prePaymentMaxAmount: bigint;
                            settler: `0x${string}`;
                            settlerContext: `0x${string}`;
                            signature: `0x${string}`;
                            supportedAccountImplementation: `0x${string}`;
                            totalPaymentAmount: bigint;
                            totalPaymentMaxAmount: bigint;
                        };
                        nativeFeeEstimate: {
                            maxFeePerGas: bigint;
                            maxPriorityFeePerGas: bigint;
                        };
                        orchestrator: `0x${string}`;
                        paymentTokenDecimals: number;
                        txGas: bigint;
                        additionalAuthorization?: {
                            address: `0x${string}`;
                            chainId: number;
                            nonce: number;
                            r: `0x${string}`;
                            s: `0x${string}`;
                            yParity: number;
                        } | null | undefined;
                        assetDeficits?: {
                            address: `0x${string}` | null;
                            deficit: bigint;
                            required: bigint;
                            decimals?: number | undefined;
                            fiat?: {
                                currency: string;
                                value: string;
                            } | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                        }[] | undefined;
                        authorizationAddress?: `0x${string}` | null | undefined;
                    }[] | undefined;
                    ttl?: number | undefined;
                } | undefined;
            };
            digest: `0x${string}`;
            key: Pick<Key.Key, "publicKey" | "type" | "prehash">;
            typedData: {
                domain: Record<string, never> | {
                    chainId: number;
                    name: string;
                    verifyingContract: `0x${string}`;
                    version: string;
                };
                message: Record<string, unknown>;
                primaryType: string;
                types: Record<string, unknown>;
            };
        }>;
        readonly prepareUpgradeAccount: (parameters: {
            address: import("ox/Address").Address;
            email?: boolean | undefined;
            label?: string | undefined;
            internal: Mode.ActionsInternal;
            permissions?: PermissionsRequest.PermissionsRequest | undefined;
        }) => Promise<{
            context: {
                address: `0x${string}`;
                authorization: {
                    address: `0x${string}`;
                    chainId: number;
                    nonce: number;
                };
                chainId: number;
                preCall: {
                    eoa: `0x${string}`;
                    executionData: `0x${string}`;
                    nonce: `0x${string}`;
                    signature: `0x${string}`;
                };
            } & {
                account: Account.Account;
            };
            digests: {
                auth: `0x${string}`;
                exec: `0x${string}`;
            };
        }>;
        readonly revokeAdmin: (parameters: {
            account: Account.Account;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            id: Hex.Hex;
            internal: Mode.ActionsInternal;
        }) => Promise<void>;
        readonly revokePermissions: (parameters: {
            account: Account.Account;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            id: Hex.Hex;
            internal: Mode.ActionsInternal;
        }) => Promise<void>;
        readonly sendCalls: (parameters: {
            account: Account.Account;
            asTxHash?: boolean | undefined;
            calls: readonly import("../call.js").Call[];
            chainId?: number | undefined;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            internal: Mode.ActionsInternal;
            requiredFunds?: import("../schema/rpc.js").wallet_prepareCalls.Capabilities["requiredFunds"] | undefined;
            permissionsId?: Hex.Hex | null | undefined;
            merchantUrl?: string | undefined;
        }) => Promise<{
            id: `0x${string}`;
        }>;
        readonly sendPreparedCalls: (parameters: {
            account: Account.Account;
            context: {
                [key: string]: unknown;
                calls?: readonly import("../call.js").Call[] | undefined;
                nonce?: bigint | undefined;
            };
            key: Pick<Key.Key, "prehash" | "publicKey" | "type">;
            signature: Hex.Hex;
            internal: Mode.ActionsInternal;
        }) => Promise<`0x${string}`>;
        readonly signPersonalMessage: (parameters: {
            account: Account.Account;
            data: Hex.Hex;
            internal: Mode.ActionsInternal;
        }) => Promise<`0x${string}`>;
        readonly signTypedData: (parameters: {
            account: Account.Account;
            data: string;
            internal: Mode.ActionsInternal;
        }) => Promise<`0x${string}`>;
        readonly upgradeAccount: (parameters: {
            account: Account.Account;
            context: unknown;
            internal: Mode.ActionsInternal;
            signatures: {
                auth: Hex.Hex;
                exec: Hex.Hex;
            };
        }) => Promise<{
            account: Account.Account<"porto" | "privateKey">;
        }>;
        readonly verifyEmail: (parameters: {
            account: Account.Account;
            chainId: number;
            email: string;
            token: string;
            walletAddress: import("ox/Address").Address;
            internal: Mode.ActionsInternal;
        }) => Promise<null>;
    };
    readonly config: relay.Parameters;
    readonly name: "rpc";
}>;
export declare namespace relay {
    type Parameters = {
        /**
         * Keystore host (WebAuthn relying party).
         * @default 'self'
         */
        keystoreHost?: 'self' | (string & {}) | undefined;
        /**
         * Mock mode. Testing purposes only.
         * @default false
         * @internal @deprecated
         */
        mock?: boolean | undefined;
        /**
         * Whether to support multichain.
         * @default true
         */
        multichain?: boolean | undefined;
        /**
         * WebAuthn configuration.
         */
        webAuthn?: {
            createFn?: WebAuthnP256.createCredential.Options['createFn'] | undefined;
            getFn?: WebAuthnP256.sign.Options['getFn'] | undefined;
        } | undefined;
    };
}
//# sourceMappingURL=relay.d.ts.map