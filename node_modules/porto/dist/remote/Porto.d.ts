import type * as RpcRequest from 'ox/RpcRequest';
import { type StoreApi } from 'zustand/vanilla';
import type * as Chains from '../core/Chains.js';
import type { ExactPartial, OneOf } from '../core/internal/types.js';
import * as Messenger from '../core/Messenger.js';
import * as Mode from '../core/Mode.js';
import * as Porto_ from '../core/Porto.js';
import type * as RpcSchema from '../core/RpcSchema.js';
import * as Storage from '../core/Storage.js';
import * as MethodPolicies from './internal/methodPolicies.js';
export declare const defaultConfig: {
    readonly messenger: Messenger.Messenger | Messenger.Bridge;
    readonly methodPolicies: readonly [{
        readonly method: "eth_requestAccounts";
        readonly modes: {
            readonly dialog: true;
            readonly headless: {
                readonly sameOrigin: true;
            };
        };
        readonly requireConnection: false;
    }, {
        readonly method: "wallet_getAccountVersion";
        readonly modes: {
            readonly headless: true;
        };
    }, {
        readonly method: "wallet_getKeys";
        readonly modes: {
            readonly headless: true;
        };
    }, {
        readonly method: "wallet_getPermissions";
        readonly modes: {
            readonly headless: true;
        };
    }, {
        readonly method: "wallet_grantAdmin";
        readonly modes: {
            readonly dialog: {
                readonly sameOrigin: true;
            };
        };
    }, {
        readonly method: "wallet_revokeAdmin";
        readonly modes: {
            readonly dialog: {
                readonly sameOrigin: true;
            };
        };
    }, {
        readonly method: "wallet_upgradeAccount";
        readonly modes: {
            readonly headless: true;
        };
    }, {
        readonly method: "wallet_connect";
        readonly modes: {
            readonly dialog: true;
            readonly headless: {
                sameOrigin: true;
            } | undefined;
        };
        readonly requireConnection: false;
    }, {
        readonly method: "wallet_getAssets";
        readonly modes: {
            readonly headless: true;
        };
    }, {
        readonly method: "wallet_getCallsStatus";
        readonly modes: {
            readonly headless: true;
        };
    }, {
        readonly method: "wallet_getCapabilities";
        readonly modes: {
            readonly headless: true;
        };
    }, {
        readonly method: "wallet_prepareCalls";
        readonly modes: {
            readonly headless: true;
        };
    }, {
        readonly method: "wallet_sendPreparedCalls";
        readonly modes: {
            readonly headless: true;
        };
    }, {
        readonly method: "wallet_switchEthereumChain";
        readonly modes: {
            readonly headless: true;
        };
    }];
    readonly mode: Mode._internal_types.Assign<Mode.Mode, {
        readonly actions: {
            readonly addFunds: () => Promise<never>;
            readonly createAccount: (parameters: {
                admins?: readonly Pick<import("../viem/Key.js").Key, "publicKey" | "type">[] | undefined;
                email?: boolean | undefined;
                internal: import("../core/internal/mode.js").ActionsInternal;
                label?: string | undefined;
                permissions?: import("../core/internal/permissionsRequest.js").PermissionsRequest | undefined;
                signInWithEthereum?: import("../core/internal/schema/capabilities.js").signInWithEthereum.Request | undefined;
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
                    keys: readonly import("../viem/Key.js").Key[];
                };
            }>;
            readonly getAccountVersion: (parameters: {
                address: import("ox/Address").Address;
                internal: import("../core/internal/mode.js").ActionsInternal;
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
                internal: import("../core/internal/mode.js").ActionsInternal;
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
                internal: import("../core/internal/mode.js").ActionsInternal;
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
                internal: import("../core/internal/mode.js").ActionsInternal;
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
                account: import("../viem/Account.js").Account;
                chainIds?: readonly number[] | undefined;
                internal: import("../core/internal/mode.js").ActionsInternal;
            }) => Promise<import("../viem/Key.js").Key[]>;
            readonly grantAdmin: (parameters: {
                account: import("../viem/Account.js").Account;
                internal: import("../core/internal/mode.js").ActionsInternal;
                feeToken?: import("../core/internal/schema/token.js").Symbol | import("ox/Address").Address | undefined;
                key: import("../viem/Key.js").from.Value;
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
                    privateKey?: OneOf<{
                        credential: Pick<import("ox/WebAuthnP256").P256Credential, "id" | "publicKey">;
                        rpId: string | undefined;
                    } | {
                        privateKey: () => import("ox/Hex").Hex;
                    }> | undefined;
                };
            }>;
            readonly grantPermissions: (parameters: {
                account: import("../viem/Account.js").Account;
                internal: import("../core/internal/mode.js").ActionsInternal;
                permissions?: import("../core/internal/permissionsRequest.js").PermissionsRequest | undefined;
            }) => Promise<{
                key: import("../viem/Key.js").Key;
            }>;
            readonly loadAccounts: (parameters: {
                address?: import("ox/Hex").Hex | undefined;
                key?: {
                    credentialId?: string | undefined;
                    publicKey: import("ox/Hex").Hex;
                } | undefined;
                internal: import("../core/internal/mode.js").ActionsInternal;
                permissions?: import("../core/internal/permissionsRequest.js").PermissionsRequest | undefined;
                signInWithEthereum?: import("../core/internal/schema/capabilities.js").signInWithEthereum.Request | undefined;
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
                    keys: import("../viem/Key.js").Key[];
                }[];
            }>;
            readonly prepareCalls: (parameters: {
                account: import("../viem/Account.js").Account;
                calls: readonly import("../core/internal/call.js").Call[];
                key?: Pick<import("../viem/Key.js").Key, "prehash" | "publicKey" | "type"> | undefined;
                feeToken?: import("../core/internal/schema/token.js").Symbol | import("ox/Address").Address | undefined;
                internal: import("../core/internal/mode.js").ActionsInternal;
                merchantUrl?: string | undefined;
                requiredFunds?: RpcSchema.wallet_prepareCalls.Capabilities["requiredFunds"] | undefined;
            }) => Promise<{
                account: import("../viem/Account.js").Account<"porto" | "privateKey">;
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
                    account: import("../viem/Account.js").Account<"porto" | "privateKey">;
                    calls: readonly import("../core/internal/call.js").Call[];
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
                key: Pick<import("../viem/Key.js").Key, "publicKey" | "type" | "prehash">;
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
                internal: import("../core/internal/mode.js").ActionsInternal;
                permissions?: import("../core/internal/permissionsRequest.js").PermissionsRequest | undefined;
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
                    account: import("../viem/Account.js").Account;
                };
                digests: {
                    auth: `0x${string}`;
                    exec: `0x${string}`;
                };
            }>;
            readonly revokeAdmin: (parameters: {
                account: import("../viem/Account.js").Account;
                feeToken?: import("../core/internal/schema/token.js").Symbol | import("ox/Address").Address | undefined;
                id: import("ox/Hex").Hex;
                internal: import("../core/internal/mode.js").ActionsInternal;
            }) => Promise<void>;
            readonly revokePermissions: (parameters: {
                account: import("../viem/Account.js").Account;
                feeToken?: import("../core/internal/schema/token.js").Symbol | import("ox/Address").Address | undefined;
                id: import("ox/Hex").Hex;
                internal: import("../core/internal/mode.js").ActionsInternal;
            }) => Promise<void>;
            readonly sendCalls: (parameters: {
                account: import("../viem/Account.js").Account;
                asTxHash?: boolean | undefined;
                calls: readonly import("../core/internal/call.js").Call[];
                chainId?: number | undefined;
                feeToken?: import("../core/internal/schema/token.js").Symbol | import("ox/Address").Address | undefined;
                internal: import("../core/internal/mode.js").ActionsInternal;
                requiredFunds?: RpcSchema.wallet_prepareCalls.Capabilities["requiredFunds"] | undefined;
                permissionsId?: import("ox/Hex").Hex | null | undefined;
                merchantUrl?: string | undefined;
            }) => Promise<{
                id: `0x${string}`;
            }>;
            readonly sendPreparedCalls: (parameters: {
                account: import("../viem/Account.js").Account;
                context: {
                    [key: string]: unknown;
                    calls?: readonly import("../core/internal/call.js").Call[] | undefined;
                    nonce?: bigint | undefined;
                };
                key: Pick<import("../viem/Key.js").Key, "prehash" | "publicKey" | "type">;
                signature: import("ox/Hex").Hex;
                internal: import("../core/internal/mode.js").ActionsInternal;
            }) => Promise<`0x${string}`>;
            readonly signPersonalMessage: (parameters: {
                account: import("../viem/Account.js").Account;
                data: import("ox/Hex").Hex;
                internal: import("../core/internal/mode.js").ActionsInternal;
            }) => Promise<`0x${string}`>;
            readonly signTypedData: (parameters: {
                account: import("../viem/Account.js").Account;
                data: string;
                internal: import("../core/internal/mode.js").ActionsInternal;
            }) => Promise<`0x${string}`>;
            readonly upgradeAccount: (parameters: {
                account: import("../viem/Account.js").Account;
                context: unknown;
                internal: import("../core/internal/mode.js").ActionsInternal;
                signatures: {
                    auth: import("ox/Hex").Hex;
                    exec: import("ox/Hex").Hex;
                };
            }) => Promise<{
                account: import("../viem/Account.js").Account<"porto" | "privateKey">;
            }>;
            readonly verifyEmail: (parameters: {
                account: import("../viem/Account.js").Account;
                chainId: number;
                email: string;
                token: string;
                walletAddress: import("ox/Address").Address;
                internal: import("../core/internal/mode.js").ActionsInternal;
            }) => Promise<null>;
        };
        readonly config: Mode.relay.Parameters;
        readonly name: "rpc";
    }>;
    readonly storage: Storage.Storage;
    readonly trustedHosts: string[];
    readonly announceProvider: true;
    readonly chains: [{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://basescan.org";
                readonly apiUrl: "https://api.basescan.org/api";
            };
        };
        blockTime: 2000;
        contracts: {
            readonly disputeGameFactory: {
                readonly 1: {
                    readonly address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e";
                };
            };
            readonly l2OutputOracle: {
                readonly 1: {
                    readonly address: "0x56315b90c40730925ec5485cf004d835058518A0";
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 5022;
            };
            readonly portal: {
                readonly 1: {
                    readonly address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e";
                    readonly blockCreated: 17482143;
                };
            };
            readonly l1StandardBridge: {
                readonly 1: {
                    readonly address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35";
                    readonly blockCreated: 17482143;
                };
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 8453;
        name: "Base";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://mainnet.base.org"];
            };
        };
        sourceId: 1;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters: {
            readonly block: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").OpStackRpcBlock, action?: string | undefined) => {
                    baseFeePerGas: bigint | null;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: import("viem").Hex;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}` | null;
                    logsBloom: `0x${string}` | null;
                    miner: import("viem").Address;
                    mixHash: import("viem").Hash;
                    nonce: `0x${string}` | null;
                    number: bigint | null;
                    parentBeaconBlockRoot?: `0x${string}` | undefined;
                    parentHash: import("viem").Hash;
                    receiptsRoot: import("viem").Hex;
                    sealFields: import("viem").Hex[];
                    sha3Uncles: import("viem").Hash;
                    size: bigint;
                    stateRoot: import("viem").Hash;
                    timestamp: bigint;
                    totalDifficulty: bigint | null;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: import("viem").Hash;
                    uncles: import("viem").Hash[];
                    withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                    withdrawalsRoot?: `0x${string}` | undefined;
                } & {};
                type: "block";
            };
            readonly transaction: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").OpStackRpcTransaction, action?: string | undefined) => ({
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint | undefined | undefined;
                    sourceHash: import("viem").Hex;
                    type: "deposit";
                } | {
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    v: bigint;
                    value: bigint;
                    gas: bigint;
                    to: import("viem").Address | null;
                    from: import("viem").Address;
                    nonce: number;
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    transactionIndex: number | null;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    typeHex: import("viem").Hex | null;
                    accessList?: undefined | undefined;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId?: number | undefined;
                    yParity?: undefined | undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes: readonly import("viem").Hex[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem").SignedAuthorizationList;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                }) & {};
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt, action?: string | undefined) => {
                    blobGasPrice?: bigint | undefined;
                    blobGasUsed?: bigint | undefined;
                    blockHash: import("viem").Hash;
                    blockNumber: bigint;
                    contractAddress: import("viem").Address | null | undefined;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: import("viem").Address;
                    gasUsed: bigint;
                    logs: import("viem").Log<bigint, number, false>[];
                    logsBloom: import("viem").Hex;
                    root?: `0x${string}` | undefined;
                    status: "success" | "reverted";
                    to: import("viem").Address | null;
                    transactionHash: import("viem").Hash;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint | null;
                    l1GasUsed: bigint | null;
                    l1Fee: bigint | null;
                    l1FeeScalar: number | null;
                } & {};
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
    }, ...({
        blockExplorers: {
            readonly default: {
                readonly name: "Arbiscan";
                readonly url: "https://arbiscan.io";
                readonly apiUrl: "https://api.arbiscan.io/api";
            };
        };
        blockTime: 250;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 7654707;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 42161;
        name: "Arbitrum One";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://arb1.arbitrum.io/rpc"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "Arbiscan";
                readonly url: "https://sepolia.arbiscan.io";
                readonly apiUrl: "https://api-sepolia.arbiscan.io/api";
            };
        };
        blockTime: 250;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 81930;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 421614;
        name: "Arbitrum Sepolia";
        nativeCurrency: {
            readonly name: "Arbitrum Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia-rollup.arbitrum.io/rpc"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        blockTime: 2000;
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters: {
            readonly block: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").OpStackRpcBlock, action?: string | undefined) => {
                    baseFeePerGas: bigint | null;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: import("viem").Hex;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}` | null;
                    logsBloom: `0x${string}` | null;
                    miner: import("viem").Address;
                    mixHash: import("viem").Hash;
                    nonce: `0x${string}` | null;
                    number: bigint | null;
                    parentBeaconBlockRoot?: `0x${string}` | undefined;
                    parentHash: import("viem").Hash;
                    receiptsRoot: import("viem").Hex;
                    sealFields: import("viem").Hex[];
                    sha3Uncles: import("viem").Hash;
                    size: bigint;
                    stateRoot: import("viem").Hash;
                    timestamp: bigint;
                    totalDifficulty: bigint | null;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: import("viem").Hash;
                    uncles: import("viem").Hash[];
                    withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                    withdrawalsRoot?: `0x${string}` | undefined;
                } & {};
                type: "block";
            };
            readonly transaction: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").OpStackRpcTransaction, action?: string | undefined) => ({
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint | undefined | undefined;
                    sourceHash: import("viem").Hex;
                    type: "deposit";
                } | {
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    v: bigint;
                    value: bigint;
                    gas: bigint;
                    to: import("viem").Address | null;
                    from: import("viem").Address;
                    nonce: number;
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    transactionIndex: number | null;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    typeHex: import("viem").Hex | null;
                    accessList?: undefined | undefined;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId?: number | undefined;
                    yParity?: undefined | undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes: readonly import("viem").Hex[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem").SignedAuthorizationList;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                }) & {};
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt, action?: string | undefined) => {
                    blobGasPrice?: bigint | undefined;
                    blobGasUsed?: bigint | undefined;
                    blockHash: import("viem").Hash;
                    blockNumber: bigint;
                    contractAddress: import("viem").Address | null | undefined;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: import("viem").Address;
                    gasUsed: bigint;
                    logs: import("viem").Log<bigint, number, false>[];
                    logsBloom: import("viem").Hex;
                    root?: `0x${string}` | undefined;
                    status: "success" | "reverted";
                    to: import("viem").Address | null;
                    transactionHash: import("viem").Hash;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint | null;
                    l1GasUsed: bigint | null;
                    l1Fee: bigint | null;
                    l1FeeScalar: number | null;
                } & {};
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "Berascan";
                readonly url: "https://berascan.com";
            };
        };
        blockTime: 2000;
        contracts: {
            readonly multicall3: {
                readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                readonly blockCreated: 0;
            };
            readonly ensRegistry: {
                readonly address: "0x5b22280886a2f5e09a49bea7e320eab0e5320e28";
                readonly blockCreated: 877007;
            };
            readonly ensUniversalResolver: {
                readonly address: "0x4D41762915F83c76EcaF6776d9b08076aA32b492";
                readonly blockCreated: 9310021;
            };
        };
        ensTlds: readonly [".bera"];
        id: 80094;
        name: "Berachain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BERA Token";
            readonly symbol: "BERA";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://rpc.berachain.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: false;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "Berascan";
                readonly url: "https://bepolia.beratrail.io";
            };
        };
        blockTime: 2000;
        contracts: {
            readonly multicall3: {
                readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                readonly blockCreated: 0;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 80069;
        name: "Berachain Bepolia";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BERA Token";
            readonly symbol: "BERA";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://bepolia.rpc.berachain.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "Celo Explorer";
                readonly url: "https://celoscan.io";
                readonly apiUrl: "https://api.celoscan.io/api";
            };
        };
        blockTime: 1000;
        contracts: {
            readonly multicall3: {
                readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                readonly blockCreated: 13112599;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 42220;
        name: "Celo";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "CELO";
            readonly symbol: "CELO";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://forno.celo.org"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: false;
        custom?: Record<string, unknown> | undefined;
        fees: import("viem").ChainFees<{
            readonly block: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").CeloRpcBlock, action?: string | undefined) => {
                    baseFeePerGas: bigint | null;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: import("viem").Hex;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}` | null;
                    logsBloom: `0x${string}` | null;
                    miner: import("viem").Address;
                    mixHash: import("viem").Hash;
                    nonce: `0x${string}` | null;
                    number: bigint | null;
                    parentBeaconBlockRoot?: `0x${string}` | undefined;
                    parentHash: import("viem").Hash;
                    receiptsRoot: import("viem").Hex;
                    sealFields: import("viem").Hex[];
                    sha3Uncles: import("viem").Hash;
                    size: bigint;
                    stateRoot: import("viem").Hash;
                    timestamp: bigint;
                    totalDifficulty: bigint | null;
                    transactions: `0x${string}`[] | import("viem/chains").CeloTransaction<boolean>[];
                    transactionsRoot: import("viem").Hash;
                    uncles: import("viem").Hash[];
                    withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                    withdrawalsRoot?: `0x${string}` | undefined;
                } & {};
                type: "block";
            };
            readonly transaction: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").CeloRpcTransaction, action?: string | undefined) => ({
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    v: bigint;
                    value: bigint;
                    gas: bigint;
                    to: import("viem").Address | null;
                    from: import("viem").Address;
                    nonce: number;
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    transactionIndex: number | null;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    typeHex: import("viem").Hex | null;
                    accessList?: undefined | undefined;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId?: number | undefined;
                    yParity?: undefined | undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    feeCurrency: import("viem").Address | null;
                    mint?: undefined;
                    isSystemTx?: undefined;
                    sourceHash?: undefined;
                    gatewayFee?: undefined;
                    gatewayFeeRecipient?: undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    feeCurrency: import("viem").Address | null;
                    mint?: undefined;
                    isSystemTx?: undefined;
                    sourceHash?: undefined;
                    gatewayFee?: undefined;
                    gatewayFeeRecipient?: undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    feeCurrency: import("viem").Address | null;
                    mint?: undefined;
                    isSystemTx?: undefined;
                    sourceHash?: undefined;
                    gatewayFee?: undefined;
                    gatewayFeeRecipient?: undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes: readonly import("viem").Hex[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    feeCurrency: import("viem").Address | null;
                    mint?: undefined;
                    isSystemTx?: undefined;
                    sourceHash?: undefined;
                    gatewayFee?: undefined;
                    gatewayFeeRecipient?: undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem").SignedAuthorizationList;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    feeCurrency: import("viem").Address | null;
                    mint?: undefined;
                    isSystemTx?: undefined;
                    sourceHash?: undefined;
                    gatewayFee?: undefined;
                    gatewayFeeRecipient?: undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    accessList: import("viem").AccessList;
                    chainId: number;
                    feeCurrency: import("viem").Address | null;
                    gatewayFee: bigint | null;
                    gatewayFeeRecipient: import("viem").Address | null;
                    type: "cip42";
                    blobVersionedHashes?: undefined;
                    authorizationList?: undefined;
                    mint?: undefined;
                    isSystemTx?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    accessList: import("viem").AccessList;
                    chainId: number;
                    feeCurrency: import("viem").Address | null;
                    type: "cip64";
                    blobVersionedHashes?: undefined;
                    authorizationList?: undefined;
                    mint?: undefined;
                    isSystemTx?: undefined;
                    sourceHash?: undefined;
                    gatewayFee?: undefined;
                    gatewayFeeRecipient?: undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint | undefined | undefined;
                    sourceHash: import("viem").Hex;
                    type: "deposit";
                    blobVersionedHashes?: undefined;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    chainId?: undefined;
                    feeCurrency?: undefined;
                    gatewayFee?: undefined;
                    gatewayFeeRecipient?: undefined;
                }) & {};
                type: "transaction";
            };
            readonly transactionRequest: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").CeloTransactionRequest, action?: string | undefined) => ({
                    data?: `0x${string}` | undefined;
                    from?: `0x${string}` | undefined;
                    gas?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    to?: `0x${string}` | null | undefined;
                    type?: "0x0" | undefined;
                    value?: `0x${string}` | undefined;
                    gasPrice?: `0x${string}` | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    blobs?: undefined;
                    blobVersionedHashes?: undefined;
                    kzg?: undefined;
                    accessList?: undefined;
                    sidecars?: undefined;
                    authorizationList?: undefined;
                    feeCurrency?: `0x${string}` | undefined;
                } | {
                    data?: `0x${string}` | undefined;
                    from?: `0x${string}` | undefined;
                    gas?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    to?: `0x${string}` | null | undefined;
                    type?: "0x1" | undefined;
                    value?: `0x${string}` | undefined;
                    gasPrice?: `0x${string}` | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    accessList?: import("viem").AccessList | undefined;
                    blobs?: undefined;
                    blobVersionedHashes?: undefined;
                    kzg?: undefined;
                    sidecars?: undefined;
                    authorizationList?: undefined;
                    feeCurrency?: `0x${string}` | undefined;
                } | {
                    data?: `0x${string}` | undefined;
                    from?: `0x${string}` | undefined;
                    gas?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    to?: `0x${string}` | null | undefined;
                    type?: "0x2" | undefined;
                    value?: `0x${string}` | undefined;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: `0x${string}` | undefined;
                    maxPriorityFeePerGas?: `0x${string}` | undefined;
                    accessList?: import("viem").AccessList | undefined;
                    blobs?: undefined;
                    blobVersionedHashes?: undefined;
                    kzg?: undefined;
                    sidecars?: undefined;
                    authorizationList?: undefined;
                    feeCurrency?: `0x${string}` | undefined;
                } | {
                    type?: "0x3" | undefined;
                    data?: `0x${string}` | undefined;
                    value?: `0x${string}` | undefined;
                    gas?: `0x${string}` | undefined;
                    from?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    to: `0x${string}` | null;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: `0x${string}` | undefined;
                    maxFeePerGas?: `0x${string}` | undefined;
                    maxPriorityFeePerGas?: `0x${string}` | undefined;
                    accessList?: import("viem").AccessList | undefined;
                    sidecars?: readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
                    blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
                    blobVersionedHashes: readonly import("viem").Hex[];
                    kzg?: undefined;
                    authorizationList?: undefined;
                    feeCurrency?: `0x${string}` | undefined;
                } | {
                    type?: "0x3" | undefined;
                    data?: `0x${string}` | undefined;
                    value?: `0x${string}` | undefined;
                    gas?: `0x${string}` | undefined;
                    from?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    to: `0x${string}` | null;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: `0x${string}` | undefined;
                    maxFeePerGas?: `0x${string}` | undefined;
                    maxPriorityFeePerGas?: `0x${string}` | undefined;
                    accessList?: import("viem").AccessList | undefined;
                    sidecars?: readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
                    blobs: readonly import("viem").Hex[] | readonly import("viem").ByteArray[];
                    blobVersionedHashes?: readonly `0x${string}`[] | undefined;
                    kzg?: import("viem").Kzg | undefined;
                    authorizationList?: undefined;
                    feeCurrency?: `0x${string}` | undefined;
                } | {
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: `0x${string}` | undefined;
                    maxPriorityFeePerGas?: `0x${string}` | undefined;
                    type?: "0x4" | undefined;
                    data?: `0x${string}` | undefined;
                    value?: `0x${string}` | undefined;
                    gas?: `0x${string}` | undefined;
                    to?: `0x${string}` | null | undefined;
                    from?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    accessList?: import("viem").AccessList | undefined;
                    authorizationList?: import("viem").RpcAuthorizationList | undefined;
                    blobs?: undefined;
                    blobVersionedHashes?: undefined;
                    kzg?: undefined;
                    sidecars?: undefined;
                    feeCurrency?: `0x${string}` | undefined;
                } | {
                    data?: `0x${string}` | undefined;
                    from?: `0x${string}` | undefined;
                    gas?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    to?: `0x${string}` | null | undefined;
                    type?: "0x7b" | undefined;
                    value?: `0x${string}` | undefined;
                    accessList?: import("viem").AccessList | undefined;
                    feeCurrency?: `0x${string}` | undefined;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: `0x${string}` | undefined;
                    maxPriorityFeePerGas?: `0x${string}` | undefined;
                    blobs?: undefined;
                    blobVersionedHashes?: undefined;
                    kzg?: undefined;
                    sidecars?: undefined;
                    authorizationList?: undefined;
                }) & {};
                type: "transactionRequest";
            };
        }>;
        formatters: {
            readonly block: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").CeloRpcBlock, action?: string | undefined) => {
                    baseFeePerGas: bigint | null;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: import("viem").Hex;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}` | null;
                    logsBloom: `0x${string}` | null;
                    miner: import("viem").Address;
                    mixHash: import("viem").Hash;
                    nonce: `0x${string}` | null;
                    number: bigint | null;
                    parentBeaconBlockRoot?: `0x${string}` | undefined;
                    parentHash: import("viem").Hash;
                    receiptsRoot: import("viem").Hex;
                    sealFields: import("viem").Hex[];
                    sha3Uncles: import("viem").Hash;
                    size: bigint;
                    stateRoot: import("viem").Hash;
                    timestamp: bigint;
                    totalDifficulty: bigint | null;
                    transactions: `0x${string}`[] | import("viem/chains").CeloTransaction<boolean>[];
                    transactionsRoot: import("viem").Hash;
                    uncles: import("viem").Hash[];
                    withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                    withdrawalsRoot?: `0x${string}` | undefined;
                } & {};
                type: "block";
            };
            readonly transaction: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").CeloRpcTransaction, action?: string | undefined) => ({
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    v: bigint;
                    value: bigint;
                    gas: bigint;
                    to: import("viem").Address | null;
                    from: import("viem").Address;
                    nonce: number;
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    transactionIndex: number | null;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    typeHex: import("viem").Hex | null;
                    accessList?: undefined | undefined;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId?: number | undefined;
                    yParity?: undefined | undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    feeCurrency: import("viem").Address | null;
                    mint?: undefined;
                    isSystemTx?: undefined;
                    sourceHash?: undefined;
                    gatewayFee?: undefined;
                    gatewayFeeRecipient?: undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    feeCurrency: import("viem").Address | null;
                    mint?: undefined;
                    isSystemTx?: undefined;
                    sourceHash?: undefined;
                    gatewayFee?: undefined;
                    gatewayFeeRecipient?: undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    feeCurrency: import("viem").Address | null;
                    mint?: undefined;
                    isSystemTx?: undefined;
                    sourceHash?: undefined;
                    gatewayFee?: undefined;
                    gatewayFeeRecipient?: undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes: readonly import("viem").Hex[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    feeCurrency: import("viem").Address | null;
                    mint?: undefined;
                    isSystemTx?: undefined;
                    sourceHash?: undefined;
                    gatewayFee?: undefined;
                    gatewayFeeRecipient?: undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem").SignedAuthorizationList;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    feeCurrency: import("viem").Address | null;
                    mint?: undefined;
                    isSystemTx?: undefined;
                    sourceHash?: undefined;
                    gatewayFee?: undefined;
                    gatewayFeeRecipient?: undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    accessList: import("viem").AccessList;
                    chainId: number;
                    feeCurrency: import("viem").Address | null;
                    gatewayFee: bigint | null;
                    gatewayFeeRecipient: import("viem").Address | null;
                    type: "cip42";
                    blobVersionedHashes?: undefined;
                    authorizationList?: undefined;
                    mint?: undefined;
                    isSystemTx?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    accessList: import("viem").AccessList;
                    chainId: number;
                    feeCurrency: import("viem").Address | null;
                    type: "cip64";
                    blobVersionedHashes?: undefined;
                    authorizationList?: undefined;
                    mint?: undefined;
                    isSystemTx?: undefined;
                    sourceHash?: undefined;
                    gatewayFee?: undefined;
                    gatewayFeeRecipient?: undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint | undefined | undefined;
                    sourceHash: import("viem").Hex;
                    type: "deposit";
                    blobVersionedHashes?: undefined;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    chainId?: undefined;
                    feeCurrency?: undefined;
                    gatewayFee?: undefined;
                    gatewayFeeRecipient?: undefined;
                }) & {};
                type: "transaction";
            };
            readonly transactionRequest: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").CeloTransactionRequest, action?: string | undefined) => ({
                    data?: `0x${string}` | undefined;
                    from?: `0x${string}` | undefined;
                    gas?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    to?: `0x${string}` | null | undefined;
                    type?: "0x0" | undefined;
                    value?: `0x${string}` | undefined;
                    gasPrice?: `0x${string}` | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    blobs?: undefined;
                    blobVersionedHashes?: undefined;
                    kzg?: undefined;
                    accessList?: undefined;
                    sidecars?: undefined;
                    authorizationList?: undefined;
                    feeCurrency?: `0x${string}` | undefined;
                } | {
                    data?: `0x${string}` | undefined;
                    from?: `0x${string}` | undefined;
                    gas?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    to?: `0x${string}` | null | undefined;
                    type?: "0x1" | undefined;
                    value?: `0x${string}` | undefined;
                    gasPrice?: `0x${string}` | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    accessList?: import("viem").AccessList | undefined;
                    blobs?: undefined;
                    blobVersionedHashes?: undefined;
                    kzg?: undefined;
                    sidecars?: undefined;
                    authorizationList?: undefined;
                    feeCurrency?: `0x${string}` | undefined;
                } | {
                    data?: `0x${string}` | undefined;
                    from?: `0x${string}` | undefined;
                    gas?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    to?: `0x${string}` | null | undefined;
                    type?: "0x2" | undefined;
                    value?: `0x${string}` | undefined;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: `0x${string}` | undefined;
                    maxPriorityFeePerGas?: `0x${string}` | undefined;
                    accessList?: import("viem").AccessList | undefined;
                    blobs?: undefined;
                    blobVersionedHashes?: undefined;
                    kzg?: undefined;
                    sidecars?: undefined;
                    authorizationList?: undefined;
                    feeCurrency?: `0x${string}` | undefined;
                } | {
                    type?: "0x3" | undefined;
                    data?: `0x${string}` | undefined;
                    value?: `0x${string}` | undefined;
                    gas?: `0x${string}` | undefined;
                    from?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    to: `0x${string}` | null;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: `0x${string}` | undefined;
                    maxFeePerGas?: `0x${string}` | undefined;
                    maxPriorityFeePerGas?: `0x${string}` | undefined;
                    accessList?: import("viem").AccessList | undefined;
                    sidecars?: readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
                    blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
                    blobVersionedHashes: readonly import("viem").Hex[];
                    kzg?: undefined;
                    authorizationList?: undefined;
                    feeCurrency?: `0x${string}` | undefined;
                } | {
                    type?: "0x3" | undefined;
                    data?: `0x${string}` | undefined;
                    value?: `0x${string}` | undefined;
                    gas?: `0x${string}` | undefined;
                    from?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    to: `0x${string}` | null;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: `0x${string}` | undefined;
                    maxFeePerGas?: `0x${string}` | undefined;
                    maxPriorityFeePerGas?: `0x${string}` | undefined;
                    accessList?: import("viem").AccessList | undefined;
                    sidecars?: readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
                    blobs: readonly import("viem").Hex[] | readonly import("viem").ByteArray[];
                    blobVersionedHashes?: readonly `0x${string}`[] | undefined;
                    kzg?: import("viem").Kzg | undefined;
                    authorizationList?: undefined;
                    feeCurrency?: `0x${string}` | undefined;
                } | {
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: `0x${string}` | undefined;
                    maxPriorityFeePerGas?: `0x${string}` | undefined;
                    type?: "0x4" | undefined;
                    data?: `0x${string}` | undefined;
                    value?: `0x${string}` | undefined;
                    gas?: `0x${string}` | undefined;
                    to?: `0x${string}` | null | undefined;
                    from?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    accessList?: import("viem").AccessList | undefined;
                    authorizationList?: import("viem").RpcAuthorizationList | undefined;
                    blobs?: undefined;
                    blobVersionedHashes?: undefined;
                    kzg?: undefined;
                    sidecars?: undefined;
                    feeCurrency?: `0x${string}` | undefined;
                } | {
                    data?: `0x${string}` | undefined;
                    from?: `0x${string}` | undefined;
                    gas?: `0x${string}` | undefined;
                    nonce?: `0x${string}` | undefined;
                    to?: `0x${string}` | null | undefined;
                    type?: "0x7b" | undefined;
                    value?: `0x${string}` | undefined;
                    accessList?: import("viem").AccessList | undefined;
                    feeCurrency?: `0x${string}` | undefined;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: `0x${string}` | undefined;
                    maxPriorityFeePerGas?: `0x${string}` | undefined;
                    blobs?: undefined;
                    blobVersionedHashes?: undefined;
                    kzg?: undefined;
                    sidecars?: undefined;
                    authorizationList?: undefined;
                }) & {};
                type: "transactionRequest";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionCelo;
        };
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "Gnosisscan";
                readonly url: "https://gnosisscan.io";
                readonly apiUrl: "https://api.gnosisscan.io/api";
            };
        };
        blockTime: 5000;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 21022491;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 100;
        name: "Gnosis";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "xDAI";
            readonly symbol: "XDAI";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://rpc.gnosischain.com"];
                readonly webSocket: readonly ["wss://rpc.gnosischain.com/wss"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://hoodi.etherscan.io";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                readonly blockCreated: 2589;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 560048;
        name: "Hoodi";
        nativeCurrency: {
            readonly name: "Hoodi Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://rpc.hoodi.ethpandaops.io"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "katana explorer";
                readonly url: "https://explorer.katanarpc.com";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts?: {
            [x: string]: import("viem").ChainContract | {
                [sourceId: number]: import("viem").ChainContract | undefined;
            } | undefined;
            ensRegistry?: import("viem").ChainContract | undefined;
            ensUniversalResolver?: import("viem").ChainContract | undefined;
            multicall3?: import("viem").ChainContract | undefined;
            erc6492Verifier?: import("viem").ChainContract | undefined;
        } | undefined;
        ensTlds?: readonly string[] | undefined;
        id: 747474;
        name: "Katana";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://rpc.katana.network"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: false;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        readonly network: "katana";
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        blockTime: 12000;
        contracts: {
            readonly ensUniversalResolver: {
                readonly address: "0xeeeeeeee14d718c2b47d9923deab1335e144eeee";
                readonly blockCreated: 23085558;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://eth.merkle.io"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "Optimism Explorer";
                readonly url: "https://optimistic.etherscan.io";
                readonly apiUrl: "https://api-optimistic.etherscan.io/api";
            };
        };
        blockTime: 2000;
        contracts: {
            readonly disputeGameFactory: {
                readonly 1: {
                    readonly address: "0xe5965Ab5962eDc7477C8520243A95517CD252fA9";
                };
            };
            readonly l2OutputOracle: {
                readonly 1: {
                    readonly address: "0xdfe97868233d1aa22e815a266982f2cf17685a27";
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 4286263;
            };
            readonly portal: {
                readonly 1: {
                    readonly address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed";
                };
            };
            readonly l1StandardBridge: {
                readonly 1: {
                    readonly address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1";
                };
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 10;
        name: "OP Mainnet";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://mainnet.optimism.io"];
            };
        };
        sourceId: 1;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters: {
            readonly block: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").OpStackRpcBlock, action?: string | undefined) => {
                    baseFeePerGas: bigint | null;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: import("viem").Hex;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}` | null;
                    logsBloom: `0x${string}` | null;
                    miner: import("viem").Address;
                    mixHash: import("viem").Hash;
                    nonce: `0x${string}` | null;
                    number: bigint | null;
                    parentBeaconBlockRoot?: `0x${string}` | undefined;
                    parentHash: import("viem").Hash;
                    receiptsRoot: import("viem").Hex;
                    sealFields: import("viem").Hex[];
                    sha3Uncles: import("viem").Hash;
                    size: bigint;
                    stateRoot: import("viem").Hash;
                    timestamp: bigint;
                    totalDifficulty: bigint | null;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: import("viem").Hash;
                    uncles: import("viem").Hash[];
                    withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                    withdrawalsRoot?: `0x${string}` | undefined;
                } & {};
                type: "block";
            };
            readonly transaction: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").OpStackRpcTransaction, action?: string | undefined) => ({
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint | undefined | undefined;
                    sourceHash: import("viem").Hex;
                    type: "deposit";
                } | {
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    v: bigint;
                    value: bigint;
                    gas: bigint;
                    to: import("viem").Address | null;
                    from: import("viem").Address;
                    nonce: number;
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    transactionIndex: number | null;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    typeHex: import("viem").Hex | null;
                    accessList?: undefined | undefined;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId?: number | undefined;
                    yParity?: undefined | undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes: readonly import("viem").Hex[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem").SignedAuthorizationList;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                }) & {};
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt, action?: string | undefined) => {
                    blobGasPrice?: bigint | undefined;
                    blobGasUsed?: bigint | undefined;
                    blockHash: import("viem").Hash;
                    blockNumber: bigint;
                    contractAddress: import("viem").Address | null | undefined;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: import("viem").Address;
                    gasUsed: bigint;
                    logs: import("viem").Log<bigint, number, false>[];
                    logsBloom: import("viem").Hex;
                    root?: `0x${string}` | undefined;
                    status: "success" | "reverted";
                    to: import("viem").Address | null;
                    transactionHash: import("viem").Hash;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint | null;
                    l1GasUsed: bigint | null;
                    l1Fee: bigint | null;
                    l1FeeScalar: number | null;
                } & {};
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "Blockscout";
                readonly url: "https://optimism-sepolia.blockscout.com";
                readonly apiUrl: "https://optimism-sepolia.blockscout.com/api";
            };
        };
        blockTime: 2000;
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0x05F9613aDB30026FFd634f38e5C4dFd30a197Fa1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x90E9c4f8a994a250F6aEfd61CAFb4F2e895D458F";
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1620204;
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x16Fc5058F25648194471939df75CF27A2fdC48BC";
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xFBb0621E0B23b5478B630BD55a5f21f67730B0F1";
                };
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 11155420;
        name: "OP Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.optimism.io"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters: {
            readonly block: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").OpStackRpcBlock, action?: string | undefined) => {
                    baseFeePerGas: bigint | null;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: import("viem").Hex;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}` | null;
                    logsBloom: `0x${string}` | null;
                    miner: import("viem").Address;
                    mixHash: import("viem").Hash;
                    nonce: `0x${string}` | null;
                    number: bigint | null;
                    parentBeaconBlockRoot?: `0x${string}` | undefined;
                    parentHash: import("viem").Hash;
                    receiptsRoot: import("viem").Hex;
                    sealFields: import("viem").Hex[];
                    sha3Uncles: import("viem").Hash;
                    size: bigint;
                    stateRoot: import("viem").Hash;
                    timestamp: bigint;
                    totalDifficulty: bigint | null;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: import("viem").Hash;
                    uncles: import("viem").Hash[];
                    withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                    withdrawalsRoot?: `0x${string}` | undefined;
                } & {};
                type: "block";
            };
            readonly transaction: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").OpStackRpcTransaction, action?: string | undefined) => ({
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint | undefined | undefined;
                    sourceHash: import("viem").Hex;
                    type: "deposit";
                } | {
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    v: bigint;
                    value: bigint;
                    gas: bigint;
                    to: import("viem").Address | null;
                    from: import("viem").Address;
                    nonce: number;
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    transactionIndex: number | null;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    typeHex: import("viem").Hex | null;
                    accessList?: undefined | undefined;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId?: number | undefined;
                    yParity?: undefined | undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas?: undefined | undefined;
                    maxPriorityFeePerGas?: undefined | undefined;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined | undefined;
                    blobVersionedHashes: readonly import("viem").Hex[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                } | {
                    blockHash: `0x${string}` | null;
                    blockNumber: bigint | null;
                    from: import("viem").Address;
                    gas: bigint;
                    hash: import("viem").Hash;
                    input: import("viem").Hex;
                    nonce: number;
                    r: import("viem").Hex;
                    s: import("viem").Hex;
                    to: import("viem").Address | null;
                    transactionIndex: number | null;
                    typeHex: import("viem").Hex | null;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem").SignedAuthorizationList;
                    blobVersionedHashes?: undefined | undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined | undefined;
                    maxFeePerBlobGas?: undefined | undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined | undefined;
                    mint?: undefined | undefined;
                    sourceHash?: undefined | undefined;
                }) & {};
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [] | undefined;
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt, action?: string | undefined) => {
                    blobGasPrice?: bigint | undefined;
                    blobGasUsed?: bigint | undefined;
                    blockHash: import("viem").Hash;
                    blockNumber: bigint;
                    contractAddress: import("viem").Address | null | undefined;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: import("viem").Address;
                    gasUsed: bigint;
                    logs: import("viem").Log<bigint, number, false>[];
                    logsBloom: import("viem").Hex;
                    root?: `0x${string}` | undefined;
                    status: "success" | "reverted";
                    to: import("viem").Address | null;
                    transactionHash: import("viem").Hash;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint | null;
                    l1GasUsed: bigint | null;
                    l1Fee: bigint | null;
                    l1FeeScalar: number | null;
                } & {};
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "PolygonScan";
                readonly url: "https://polygonscan.com";
                readonly apiUrl: "https://api.polygonscan.com/api";
            };
        };
        blockTime: 2000;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 25770160;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 137;
        name: "Polygon";
        nativeCurrency: {
            readonly name: "POL";
            readonly symbol: "POL";
            readonly decimals: 18;
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://polygon-rpc.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://sepolia.etherscan.io";
                readonly apiUrl: "https://api-sepolia.etherscan.io/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 751532;
            };
            readonly ensUniversalResolver: {
                readonly address: "0xeeeeeeee14d718c2b47d9923deab1335e144eeee";
                readonly blockCreated: 8928790;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 11155111;
        name: "Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.drpc.org"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    })[]];
    readonly relay: import("viem").HttpTransport<undefined, false>;
    readonly storageKey: "porto.store";
};
/**
 * Instantiates an Porto instance to be used in a remote context (e.g. an iframe or popup).
 *
 * @example
 * ```ts twoslash
 * import { Porto } from 'porto/remote'
 * const porto = Porto.create()
 * ```
 */
export declare function create<const chains extends readonly [
    Chains.Chain,
    ...Chains.Chain[]
] = typeof defaultConfig.chains>(parameters?: ExactPartial<Config<chains>> | undefined): Porto<chains>;
export type Porto<chains extends readonly [Chains.Chain, ...Chains.Chain[]] = readonly [
    Chains.Chain,
    ...Chains.Chain[]
]> = Porto_.Porto<chains> & {
    mode: Mode.Mode;
    messenger: OneOf<Messenger.WithReady | Messenger.Messenger>;
    methodPolicies?: MethodPolicies.MethodPolicies | undefined;
    ready: () => Promise<void>;
    _internal: Porto_.Porto<chains>['_internal'] & {
        remoteStore: StoreApi<RemoteState>;
    };
};
export type Config<chains extends readonly [Chains.Chain, ...Chains.Chain[]] = readonly [
    Chains.Chain,
    ...Chains.Chain[]
]> = Porto_.Config<chains> & {
    messenger?: OneOf<Messenger.Bridge | Messenger.Messenger> | undefined;
    methodPolicies?: MethodPolicies.MethodPolicies | undefined;
    trustedHosts?: string[] | undefined;
};
export type State<chains extends readonly [Chains.Chain, ...Chains.Chain[]] = readonly [
    Chains.Chain,
    ...Chains.Chain[]
]> = Porto_.State<chains>;
export type RemoteState = {
    requests: readonly (Porto_.QueuedRequest & {
        request: RpcRequest.RpcRequest<RpcSchema.Schema>;
    })[];
};
//# sourceMappingURL=Porto.d.ts.map