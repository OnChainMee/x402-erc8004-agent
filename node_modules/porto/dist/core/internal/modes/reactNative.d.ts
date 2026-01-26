import * as Dialog from '../../Dialog.js';
import * as Mode from '../mode.js';
import { dialog } from './dialog.js';
export declare function reactNative(parameters?: reactNative.Parameters): Mode.Mode | import("../types.js").Assign<Mode.Mode, {
    readonly actions: {
        readonly addFunds: () => Promise<never>;
        readonly createAccount: (parameters: {
            admins?: readonly Pick<import("../../../viem/Key.js").Key, "publicKey" | "type">[] | undefined;
            email?: boolean | undefined;
            internal: Mode.ActionsInternal;
            label?: string | undefined;
            permissions?: import("../permissionsRequest.js").PermissionsRequest | undefined;
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
                keys: readonly import("../../../viem/Key.js").Key[];
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
            id: import("ox/Hex").Hex;
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
            chainIds?: readonly import("ox/Hex").Hex[] | undefined;
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
            account: import("../../../viem/Account.js").Account;
            chainIds?: readonly number[] | undefined;
            internal: Mode.ActionsInternal;
        }) => Promise<import("../../../viem/Key.js").Key[]>;
        readonly grantAdmin: (parameters: {
            account: import("../../../viem/Account.js").Account;
            internal: Mode.ActionsInternal;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            key: import("../../../viem/Key.js").from.Value;
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
                privateKey?: (() => import("ox/Hex").Hex) | undefined;
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
                privateKey?: (() => import("ox/Hex").Hex) | undefined;
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
                    credential: Pick<import("ox/WebAuthnP256").P256Credential, "id" | "publicKey">;
                    rpId: string | undefined;
                } | {
                    privateKey: () => import("ox/Hex").Hex;
                }> | undefined;
            };
        }>;
        readonly grantPermissions: (parameters: {
            account: import("../../../viem/Account.js").Account;
            internal: Mode.ActionsInternal;
            permissions?: import("../permissionsRequest.js").PermissionsRequest | undefined;
        }) => Promise<{
            key: import("../../../viem/Key.js").Key;
        }>;
        readonly loadAccounts: (parameters: {
            address?: import("ox/Hex").Hex | undefined;
            key?: {
                credentialId?: string | undefined;
                publicKey: import("ox/Hex").Hex;
            } | undefined;
            internal: Mode.ActionsInternal;
            permissions?: import("../permissionsRequest.js").PermissionsRequest | undefined;
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
                keys: import("../../../viem/Key.js").Key[];
            }[];
        }>;
        readonly prepareCalls: (parameters: {
            account: import("../../../viem/Account.js").Account;
            calls: readonly import("../call.js").Call[];
            key?: Pick<import("../../../viem/Key.js").Key, "prehash" | "publicKey" | "type"> | undefined;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            internal: Mode.ActionsInternal;
            merchantUrl?: string | undefined;
            requiredFunds?: import("../schema/rpc.js").wallet_prepareCalls.Capabilities["requiredFunds"] | undefined;
        }) => Promise<{
            account: import("../../../viem/Account.js").Account<"porto" | "privateKey">;
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
                account: import("../../../viem/Account.js").Account<"porto" | "privateKey">;
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
            key: Pick<import("../../../viem/Key.js").Key, "publicKey" | "type" | "prehash">;
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
            permissions?: import("../permissionsRequest.js").PermissionsRequest | undefined;
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
                account: import("../../../viem/Account.js").Account;
            };
            digests: {
                auth: `0x${string}`;
                exec: `0x${string}`;
            };
        }>;
        readonly revokeAdmin: (parameters: {
            account: import("../../../viem/Account.js").Account;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            id: import("ox/Hex").Hex;
            internal: Mode.ActionsInternal;
        }) => Promise<void>;
        readonly revokePermissions: (parameters: {
            account: import("../../../viem/Account.js").Account;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            id: import("ox/Hex").Hex;
            internal: Mode.ActionsInternal;
        }) => Promise<void>;
        readonly sendCalls: (parameters: {
            account: import("../../../viem/Account.js").Account;
            asTxHash?: boolean | undefined;
            calls: readonly import("../call.js").Call[];
            chainId?: number | undefined;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            internal: Mode.ActionsInternal;
            requiredFunds?: import("../schema/rpc.js").wallet_prepareCalls.Capabilities["requiredFunds"] | undefined;
            permissionsId?: import("ox/Hex").Hex | null | undefined;
            merchantUrl?: string | undefined;
        }) => Promise<{
            id: `0x${string}`;
        }>;
        readonly sendPreparedCalls: (parameters: {
            account: import("../../../viem/Account.js").Account;
            context: {
                [key: string]: unknown;
                calls?: readonly import("../call.js").Call[] | undefined;
                nonce?: bigint | undefined;
            };
            key: Pick<import("../../../viem/Key.js").Key, "prehash" | "publicKey" | "type">;
            signature: import("ox/Hex").Hex;
            internal: Mode.ActionsInternal;
        }) => Promise<`0x${string}`>;
        readonly signPersonalMessage: (parameters: {
            account: import("../../../viem/Account.js").Account;
            data: import("ox/Hex").Hex;
            internal: Mode.ActionsInternal;
        }) => Promise<`0x${string}`>;
        readonly signTypedData: (parameters: {
            account: import("../../../viem/Account.js").Account;
            data: string;
            internal: Mode.ActionsInternal;
        }) => Promise<`0x${string}`>;
        readonly upgradeAccount: (parameters: {
            account: import("../../../viem/Account.js").Account;
            context: unknown;
            internal: Mode.ActionsInternal;
            signatures: {
                auth: import("ox/Hex").Hex;
                exec: import("ox/Hex").Hex;
            };
        }) => Promise<{
            account: import("../../../viem/Account.js").Account<"porto" | "privateKey">;
        }>;
        readonly verifyEmail: (parameters: {
            account: import("../../../viem/Account.js").Account;
            chainId: number;
            email: string;
            token: string;
            walletAddress: import("ox/Address").Address;
            internal: Mode.ActionsInternal;
        }) => Promise<null>;
    };
    readonly name: "relay";
}> | import("../types.js").Assign<Mode.Mode, {
    readonly name: "reactNative";
    readonly actions: {
        readonly addFunds: (parameters: {
            address: import("ox/Address").Address;
            internal: Mode.ActionsInternal;
            token?: import("ox/Address").Address | undefined;
            value?: string | undefined;
        }) => Promise<{
            id: `0x${string}`;
        }>;
        readonly createAccount: (parameters: {
            admins?: readonly Pick<import("../../../viem/Key.js").Key, "publicKey" | "type">[] | undefined;
            email?: boolean | undefined;
            internal: Mode.ActionsInternal;
            label?: string | undefined;
            permissions?: import("../permissionsRequest.js").PermissionsRequest | undefined;
            signInWithEthereum?: import("../schema/capabilities.js").signInWithEthereum.Request | undefined;
        }) => Promise<{
            account: {
                signInWithEthereum: {
                    message: string;
                    signature: `0x${string}`;
                    token?: never;
                } | {
                    message: string;
                    signature: `0x${string}`;
                    token: string | undefined;
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
                keys: readonly import("../../../viem/Key.js").Key[];
            };
        }>;
        readonly disconnect: (parameters: {
            internal: Mode.ActionsInternal;
        }) => Promise<void>;
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
            id: import("ox/Hex").Hex;
            internal: Mode.ActionsInternal;
        }) => Promise<{
            atomic: boolean;
            chainId: `0x${string}`;
            id: string;
            status: number;
            version: string;
            receipts?: readonly {
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
        }>;
        readonly getCapabilities: (parameters: {
            chainIds?: readonly import("ox/Hex").Hex[] | undefined;
            internal: Mode.ActionsInternal;
        }) => Promise<Record<`0x${string}`, {
            atomic: {
                status: "supported" | "unsupported";
            };
            feeToken: {
                supported: boolean;
                tokens: readonly {
                    address: `0x${string}`;
                    decimals: number;
                    symbol: string;
                    uid: string;
                    feeToken?: boolean | undefined;
                    interop?: boolean | undefined;
                    nativeRate?: `0x${string}` | undefined;
                }[];
            };
            merchant: {
                supported: boolean;
            };
            permissions: {
                supported: boolean;
            };
            requiredFunds: {
                supported: boolean;
                tokens: readonly {
                    address: `0x${string}`;
                    decimals: number;
                    symbol: string;
                    uid: string;
                    feeToken?: boolean | undefined;
                    interop?: boolean | undefined;
                    nativeRate?: `0x${string}` | undefined;
                }[];
            };
        }> | Record<`0x${string}`, {
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
            account: import("../../../viem/Account.js").Account;
            chainIds?: readonly number[] | undefined;
            internal: Mode.ActionsInternal;
        }) => Promise<{
            expiry: number;
            hash: `0x${string}`;
            id: `0x${string}`;
            publicKey: `0x${string}`;
            role: "admin" | "session";
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
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
            prehash?: boolean | undefined;
        }[]>;
        readonly grantAdmin: (parameters: {
            account: import("../../../viem/Account.js").Account;
            internal: Mode.ActionsInternal;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            key: import("../../../viem/Key.js").from.Value;
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
                privateKey?: (() => import("ox/Hex").Hex) | undefined;
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
                privateKey?: (() => import("ox/Hex").Hex) | undefined;
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
                    credential: Pick<import("ox/WebAuthnP256").P256Credential, "id" | "publicKey">;
                    rpId: string | undefined;
                } | {
                    privateKey: () => import("ox/Hex").Hex;
                }> | undefined;
            };
        }>;
        readonly grantPermissions: (parameters: {
            account: import("../../../viem/Account.js").Account;
            internal: Mode.ActionsInternal;
            permissions?: import("../permissionsRequest.js").PermissionsRequest | undefined;
        }) => Promise<{
            key: import("../../../viem/Key.js").Key;
        }>;
        readonly loadAccounts: (parameters: {
            address?: import("ox/Hex").Hex | undefined;
            key?: {
                credentialId?: string | undefined;
                publicKey: import("ox/Hex").Hex;
            } | undefined;
            internal: Mode.ActionsInternal;
            permissions?: import("../permissionsRequest.js").PermissionsRequest | undefined;
            signInWithEthereum?: import("../schema/capabilities.js").signInWithEthereum.Request | undefined;
        }) => Promise<{
            accounts: {
                readonly signInWithEthereum: {
                    message: string;
                    signature: `0x${string}`;
                    token?: never;
                } | {
                    message: string;
                    signature: `0x${string}`;
                    token: string | undefined;
                } | undefined;
                readonly address: import("viem").Address;
                readonly nonceManager?: import("viem").NonceManager | undefined;
                readonly sign: (parameters: {
                    hash: import("viem").Hash;
                }) => Promise<import("viem").Hex>;
                readonly signAuthorization?: ((parameters: import("viem").AuthorizationRequest) => Promise<import("viem/accounts").SignAuthorizationReturnType>) | undefined | undefined;
                readonly signMessage: ({ message }: {
                    message: import("viem").SignableMessage;
                }) => Promise<import("viem").Hex>;
                readonly signTransaction: <serializer extends import("viem").SerializeTransactionFn<import("viem").TransactionSerializable> = import("viem").SerializeTransactionFn<import("viem").TransactionSerializable>, transaction extends Parameters<serializer>[0] = Parameters<serializer>[0]>(transaction: transaction, options?: {
                    serializer?: serializer | undefined;
                } | undefined) => Promise<import("viem").Hex>;
                readonly signTypedData: <const typedData extends import("viem").TypedData | Record<string, unknown>, primaryType extends keyof typedData | "EIP712Domain" = keyof typedData>(parameters: import("viem").TypedDataDefinition<typedData, primaryType>) => Promise<import("viem").Hex>;
                readonly publicKey: import("viem").Hex;
                readonly source: "porto";
                readonly type: "local";
                readonly keys: readonly import("../../../viem/Key.js").Key[];
            }[];
        }>;
        readonly prepareCalls: (parameters: {
            account: import("../../../viem/Account.js").Account;
            calls: readonly import("../call.js").Call[];
            key?: Pick<import("../../../viem/Key.js").Key, "prehash" | "publicKey" | "type"> | undefined;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            internal: Mode.ActionsInternal;
            merchantUrl?: string | undefined;
            requiredFunds?: import("../schema/rpc.js").wallet_prepareCalls.Capabilities["requiredFunds"] | undefined;
        }) => Promise<{
            account: import("../../../viem/Account.js").Account;
            chainId?: number | undefined;
            capabilities?: import("../schema/rpc.js").wallet_prepareCalls.Response["capabilities"] | undefined;
            context: {
                [key: string]: unknown;
                calls?: readonly import("../call.js").Call[] | undefined;
                nonce?: bigint | undefined;
            };
            digest: import("ox/Hex").Hex;
            key: Pick<import("../../../viem/Key.js").Key, "prehash" | "publicKey" | "type">;
            typedData: import("../schema/rpc.js").wallet_prepareCalls.Response["typedData"];
        } | {
            account: import("../../../viem/Account.js").Account<"porto" | "privateKey">;
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
                account: import("../../../viem/Account.js").Account<"porto" | "privateKey">;
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
            key: Pick<import("../../../viem/Key.js").Key, "publicKey" | "type" | "prehash">;
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
        } | {
            account: import("../../../viem/Account.js").Account<"porto" | "privateKey">;
            chainId: number;
            context: any;
            digest: `0x${string}`;
            key: {
                publicKey: `0x${string}`;
                type: "address" | "p256" | "secp256k1" | "webauthn-p256";
                prehash?: boolean | undefined;
            };
            typedData: {
                domain: {
                    chainId: number;
                    name: string;
                    verifyingContract: `0x${string}`;
                    version: string;
                } | Record<string, never>;
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
            permissions?: import("../permissionsRequest.js").PermissionsRequest | undefined;
        }) => Promise<{
            digests: {
                auth: import("ox/Hex").Hex;
                exec: import("ox/Hex").Hex;
            };
            context: unknown;
        }>;
        readonly revokeAdmin: (parameters: {
            account: import("../../../viem/Account.js").Account;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            id: import("ox/Hex").Hex;
            internal: Mode.ActionsInternal;
        }) => Promise<undefined>;
        readonly revokePermissions: (parameters: {
            account: import("../../../viem/Account.js").Account;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            id: import("ox/Hex").Hex;
            internal: Mode.ActionsInternal;
        }) => Promise<undefined>;
        readonly sendCalls: (parameters: {
            account: import("../../../viem/Account.js").Account;
            asTxHash?: boolean | undefined;
            calls: readonly import("../call.js").Call[];
            chainId?: number | undefined;
            feeToken?: import("../schema/token.js").Symbol | import("ox/Address").Address | undefined;
            internal: Mode.ActionsInternal;
            requiredFunds?: import("../schema/rpc.js").wallet_prepareCalls.Capabilities["requiredFunds"] | undefined;
            permissionsId?: import("ox/Hex").Hex | null | undefined;
            merchantUrl?: string | undefined;
        }) => Promise<{
            id: `0x${string}`;
        }>;
        readonly sendPreparedCalls: (parameters: {
            account: import("../../../viem/Account.js").Account;
            context: {
                [key: string]: unknown;
                calls?: readonly import("../call.js").Call[] | undefined;
                nonce?: bigint | undefined;
            };
            key: Pick<import("../../../viem/Key.js").Key, "prehash" | "publicKey" | "type">;
            signature: import("ox/Hex").Hex;
            internal: Mode.ActionsInternal;
        }) => Promise<`0x${string}`>;
        readonly signPersonalMessage: (parameters: {
            account: import("../../../viem/Account.js").Account;
            data: import("ox/Hex").Hex;
            internal: Mode.ActionsInternal;
        }) => Promise<`0x${string}`>;
        readonly signTypedData: (parameters: {
            account: import("../../../viem/Account.js").Account;
            data: string;
            internal: Mode.ActionsInternal;
        }) => Promise<`0x${string}`>;
        readonly switchChain: (parameters: {
            chainId: number;
            internal: Mode.ActionsInternal;
        }) => Promise<undefined>;
        readonly upgradeAccount: (parameters: {
            account: import("../../../viem/Account.js").Account;
            context: unknown;
            internal: Mode.ActionsInternal;
            signatures: {
                auth: import("ox/Hex").Hex;
                exec: import("ox/Hex").Hex;
            };
        }) => Promise<{
            account: import("../../../viem/Account.js").Account<"porto" | "privateKey">;
        }>;
        readonly verifyEmail: (parameters: {
            account: import("../../../viem/Account.js").Account;
            chainId: number;
            email: string;
            token: string;
            walletAddress: import("ox/Address").Address;
            internal: Mode.ActionsInternal;
        }) => Promise<null>;
    };
    readonly config: dialog.Parameters;
    readonly setup: (parameters: {
        internal: import("../porto.js").Internal;
    }) => () => void;
}>;
export declare namespace reactNative {
    type Parameters = (Omit<dialog.Parameters, 'renderer'> & Dialog.authSession.Options) | undefined;
}
//# sourceMappingURL=reactNative.d.ts.map