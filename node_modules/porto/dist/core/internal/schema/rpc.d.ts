import * as z from 'zod/mini';
export declare namespace account_getOnrampContactInfo {
    const Parameters: z.ZodMiniObject<{
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        secret: z.ZodMiniString<string>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"account_getOnrampContactInfo">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            secret: z.ZodMiniString<string>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniObject<{
        email: z.ZodMiniOptional<z.ZodMiniString<string>>;
        phone: z.ZodMiniOptional<z.ZodMiniString<string>>;
        phoneVerifiedAt: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace account_onrampStatus {
    const Parameters: z.ZodMiniObject<{
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"account_onrampStatus">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniObject<{
        email: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
        phone: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace account_resendVerifyPhone {
    const Parameters: z.ZodMiniObject<{
        email: z.ZodMiniString<string>;
        walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"account_resendVerifyPhone">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            email: z.ZodMiniString<string>;
            walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniNull;
    type Response = z.infer<typeof Response>;
}
export declare namespace account_setEmail {
    const Parameters: z.ZodMiniObject<{
        email: z.ZodMiniString<string>;
        walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"account_setEmail">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            email: z.ZodMiniString<string>;
            walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniNull;
    type Response = z.infer<typeof Response>;
}
export declare namespace account_setPhone {
    const Parameters: z.ZodMiniObject<{
        email: z.ZodMiniString<string>;
        walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"account_setPhone">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            email: z.ZodMiniString<string>;
            walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniNull;
    type Response = z.infer<typeof Response>;
}
export declare namespace account_verifyEmail {
    const Parameters: z.ZodMiniObject<{
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        email: z.ZodMiniString<string>;
        token: z.ZodMiniString<string>;
        walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"account_verifyEmail">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            email: z.ZodMiniString<string>;
            token: z.ZodMiniString<string>;
            walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniNull;
    type Response = z.infer<typeof Response>;
}
export declare namespace account_verifyPhone {
    const Parameters: z.ZodMiniObject<{
        code: z.ZodMiniString<string>;
        phone: z.ZodMiniString<string>;
        walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"account_verifyPhone">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            code: z.ZodMiniString<string>;
            phone: z.ZodMiniString<string>;
            walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniNull;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_addFunds {
    const Parameters: z.ZodMiniObject<{
        address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
        token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        value: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_addFunds">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            value: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniObject<{
        id: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace eth_accounts {
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"eth_accounts">;
        params: z.ZodMiniOptional<z.ZodMiniUnknown>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
    type Response = z.infer<typeof Response>;
}
export declare namespace eth_chainId {
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"eth_chainId">;
        params: z.ZodMiniOptional<z.ZodMiniUnknown>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniTemplateLiteral<`0x${string}`>;
    type Response = z.infer<typeof Response>;
}
export declare namespace eth_requestAccounts {
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"eth_requestAccounts">;
        params: z.ZodMiniOptional<z.ZodMiniUnknown>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
    type Response = z.infer<typeof Response>;
}
export declare namespace eth_sendTransaction {
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"eth_sendTransaction">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
                feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
                merchantUrl: z.ZodMiniOptional<z.ZodMiniString<string>>;
                preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    context: z.ZodMiniUnknown;
                    signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>>>>;
            }, z.core.$strip>>;
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            data: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            from: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
            value: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniTemplateLiteral<`0x${string}`>;
    type Response = z.infer<typeof Response>;
}
export declare namespace eth_signTypedData_v4 {
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"eth_signTypedData_v4">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniString<string>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniTemplateLiteral<`0x${string}`>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_getAdmins {
    const Parameters: z.ZodMiniObject<{
        address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_getAdmins">;
        params: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
        }, z.core.$strip>], null>>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Key: z.ZodMiniObject<{
        credentialId: z.ZodMiniOptional<z.ZodMiniString<string>>;
        privateKey: z.ZodMiniOptional<z.ZodMiniAny>;
        id: z.ZodMiniTemplateLiteral<`0x${string}`>;
        publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
        type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
    }, z.core.$strip>;
    const Response: z.ZodMiniObject<{
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        keys: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            credentialId: z.ZodMiniOptional<z.ZodMiniString<string>>;
            privateKey: z.ZodMiniOptional<z.ZodMiniAny>;
            id: z.ZodMiniTemplateLiteral<`0x${string}`>;
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_grantAdmin {
    const Capabilities: z.ZodMiniObject<{
        feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
    }, z.core.$strip>;
    type Capabilities = z.infer<typeof Capabilities>;
    const Parameters: z.ZodMiniObject<{
        /** Address of the account to authorize the admin for. */
        address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        /** Capabilities. */
        capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
            feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
        }, z.core.$strip>>;
        /** Chain ID. */
        chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
        /** Admin Key to authorize. */
        key: z.ZodMiniObject<{
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_grantAdmin">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            /** Address of the account to authorize the admin for. */
            address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            /** Capabilities. */
            capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
                feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
            }, z.core.$strip>>;
            /** Chain ID. */
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            /** Admin Key to authorize. */
            key: z.ZodMiniObject<{
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
            }, z.core.$strip>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniObject<{
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        key: z.ZodMiniObject<{
            credentialId: z.ZodMiniOptional<z.ZodMiniString<string>>;
            privateKey: z.ZodMiniOptional<z.ZodMiniAny>;
            id: z.ZodMiniTemplateLiteral<`0x${string}`>;
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_grantPermissions {
    const Parameters: z.ZodMiniObject<{
        address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
        expiry: z.ZodMiniNumber<number>;
        feeToken: z.ZodMiniNullable<z.ZodMiniObject<{
            limit: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
            symbol: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"native">, z.ZodMiniString<string>]>>;
        }, z.core.$strip>>;
        key: z.ZodMiniOptional<z.ZodMiniObject<{
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
        }, z.core.$strip>>;
        permissions: z.ZodMiniObject<{
            calls: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                signature: z.ZodMiniString<string>;
                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>, z.ZodMiniObject<{
                signature: z.ZodMiniString<string>;
            }, z.core.$strip>, z.ZodMiniObject<{
                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>]>, "_zod"> & {
                _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>]>, "output"> & {
                    output: {
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                        to?: undefined;
                    } | {
                        to: `0x${string}`;
                        signature?: undefined;
                    };
                };
            }>>;
            signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
            }, z.core.$strip>>;
            spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            }, z.core.$strip>>>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_grantPermissions">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            expiry: z.ZodMiniNumber<number>;
            feeToken: z.ZodMiniNullable<z.ZodMiniObject<{
                limit: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
                symbol: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"native">, z.ZodMiniString<string>]>>;
            }, z.core.$strip>>;
            key: z.ZodMiniOptional<z.ZodMiniObject<{
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
            }, z.core.$strip>>;
            permissions: z.ZodMiniObject<{
                calls: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>]>, "_zod"> & {
                    _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>]>, "output"> & {
                        output: {
                            signature: string;
                            to: `0x${string}`;
                        } | {
                            signature: string;
                            to?: undefined;
                        } | {
                            to: `0x${string}`;
                            signature?: undefined;
                        };
                    };
                }>>;
                signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                    addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                }, z.core.$strip>>;
                spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                    token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                }, z.core.$strip>>>>;
            }, z.core.$strip>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const ResponseCapabilities: z.ZodMiniObject<{
        preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            context: z.ZodMiniUnknown;
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>>>>;
    }, z.core.$strip>;
    type ResponseCapabilities = z.infer<typeof ResponseCapabilities>;
    const Response: z.ZodMiniObject<{
        capabilities: z.ZodMiniOptional<z.ZodMiniAny>;
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
        expiry: z.ZodMiniNumber<number>;
        id: z.ZodMiniTemplateLiteral<`0x${string}`>;
        key: z.ZodMiniObject<{
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
        }, z.core.$strip>;
        permissions: z.ZodMiniObject<{
            calls: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                signature: z.ZodMiniString<string>;
                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>, z.ZodMiniObject<{
                signature: z.ZodMiniString<string>;
            }, z.core.$strip>, z.ZodMiniObject<{
                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>]>, "_zod"> & {
                _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>]>, "output"> & {
                    output: {
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                        to?: undefined;
                    } | {
                        to: `0x${string}`;
                        signature?: undefined;
                    };
                };
            }>>;
            signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
            }, z.core.$strip>>;
            spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            }, z.core.$strip>>>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_getAccountVersion {
    const Parameters: z.ZodMiniObject<{
        address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_getAccountVersion">;
        params: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        }, z.core.$strip>], null>>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniObject<{
        current: z.ZodMiniString<string>;
        latest: z.ZodMiniString<string>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_getPermissions {
    const Parameters: z.ZodMiniObject<{
        address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        chainIds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>>>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_getPermissions">;
        params: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            chainIds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>>>;
        }, z.core.$strip>], null>>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
        expiry: z.ZodMiniNumber<number>;
        id: z.ZodMiniTemplateLiteral<`0x${string}`>;
        key: z.ZodMiniObject<{
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
        }, z.core.$strip>;
        permissions: z.ZodMiniObject<{
            calls: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                signature: z.ZodMiniString<string>;
                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>, z.ZodMiniObject<{
                signature: z.ZodMiniString<string>;
            }, z.core.$strip>, z.ZodMiniObject<{
                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>]>, "_zod"> & {
                _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>]>, "output"> & {
                    output: {
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                        to?: undefined;
                    } | {
                        to: `0x${string}`;
                        signature?: undefined;
                    };
                };
            }>>;
            signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
            }, z.core.$strip>>;
            spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            }, z.core.$strip>>>>;
        }, z.core.$strip>;
    }, z.core.$strip>>>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_revokeAdmin {
    const Capabilities: z.ZodMiniObject<{
        feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
    }, z.core.$strip>;
    type Capabilities = z.infer<typeof Capabilities>;
    const Parameters: z.ZodMiniObject<{
        address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
            feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
        }, z.core.$strip>>;
        chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
        id: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_revokeAdmin">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
                feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
            }, z.core.$strip>>;
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            id: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: undefined;
}
export declare namespace wallet_revokePermissions {
    const Capabilities: z.ZodMiniObject<{
        feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
    }, z.core.$strip>;
    type Capabilities = z.infer<typeof Capabilities>;
    const Parameters: z.ZodMiniObject<{
        address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
            feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
        }, z.core.$strip>>;
        id: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_revokePermissions">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
                feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
            }, z.core.$strip>>;
            id: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: undefined;
}
export declare namespace wallet_switchEthereumChain {
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_switchEthereumChain">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            chainId: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
}
export declare namespace wallet_upgradeAccount {
    const Parameters: z.ZodMiniObject<{
        context: z.ZodMiniUnknown;
        signatures: z.ZodMiniObject<{
            auth: z.ZodMiniTemplateLiteral<`0x${string}`>;
            exec: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_upgradeAccount">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            context: z.ZodMiniUnknown;
            signatures: z.ZodMiniObject<{
                auth: z.ZodMiniTemplateLiteral<`0x${string}`>;
                exec: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const ResponseCapabilities: z.ZodMiniObject<{
        admins: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            credentialId: z.ZodMiniOptional<z.ZodMiniString<string>>;
            privateKey: z.ZodMiniOptional<z.ZodMiniAny>;
            id: z.ZodMiniTemplateLiteral<`0x${string}`>;
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
        }, z.core.$strip>>>>;
        permissions: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            expiry: z.ZodMiniNumber<number>;
            id: z.ZodMiniTemplateLiteral<`0x${string}`>;
            key: z.ZodMiniObject<{
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
            }, z.core.$strip>;
            permissions: z.ZodMiniObject<{
                calls: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>]>, "_zod"> & {
                    _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>]>, "output"> & {
                        output: {
                            signature: string;
                            to: `0x${string}`;
                        } | {
                            signature: string;
                            to?: undefined;
                        } | {
                            to: `0x${string}`;
                            signature?: undefined;
                        };
                    };
                }>>;
                signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                    addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                }, z.core.$strip>>;
                spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                    token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                }, z.core.$strip>>>>;
            }, z.core.$strip>;
        }, z.core.$strip>>>>;
    }, z.core.$strip>;
    type ResponseCapabilities = z.infer<typeof ResponseCapabilities>;
    const Response: z.ZodMiniObject<{
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
            admins: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                credentialId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                privateKey: z.ZodMiniOptional<z.ZodMiniAny>;
                id: z.ZodMiniTemplateLiteral<`0x${string}`>;
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
            }, z.core.$strip>>>>;
            permissions: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                expiry: z.ZodMiniNumber<number>;
                id: z.ZodMiniTemplateLiteral<`0x${string}`>;
                key: z.ZodMiniObject<{
                    publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
                }, z.core.$strip>;
                permissions: z.ZodMiniObject<{
                    calls: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>]>, "_zod"> & {
                        _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                            signature: z.ZodMiniString<string>;
                            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        }, z.core.$strip>, z.ZodMiniObject<{
                            signature: z.ZodMiniString<string>;
                        }, z.core.$strip>, z.ZodMiniObject<{
                            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        }, z.core.$strip>]>, "output"> & {
                            output: {
                                signature: string;
                                to: `0x${string}`;
                            } | {
                                signature: string;
                                to?: undefined;
                            } | {
                                to: `0x${string}`;
                                signature?: undefined;
                            };
                        };
                    }>>;
                    signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                        addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                    }, z.core.$strip>>;
                    spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                        limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                        token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    }, z.core.$strip>>>>;
                }, z.core.$strip>;
            }, z.core.$strip>>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace personal_sign {
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"personal_sign">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniTemplateLiteral<`0x${string}`>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniTemplateLiteral<`0x${string}`>;
    type Response = z.infer<typeof Response>;
}
export declare namespace porto_ping {
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"porto_ping">;
        params: z.ZodMiniOptional<z.ZodMiniUndefined>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniLiteral<"pong">;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_connect {
    const Capabilities: z.ZodMiniObject<{
        createAccount: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniBoolean<boolean>, z.ZodMiniObject<{
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            label: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.core.$strip>]>>;
        email: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        grantAdmins: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
        }, z.core.$strip>>>>;
        grantPermissions: z.ZodMiniOptional<z.ZodMiniObject<{
            address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            expiry: z.ZodMiniNumber<number>;
            feeToken: z.ZodMiniNullable<z.ZodMiniObject<{
                limit: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
                symbol: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"native">, z.ZodMiniString<string>]>>;
            }, z.core.$strip>>;
            key: z.ZodMiniOptional<z.ZodMiniObject<{
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
            }, z.core.$strip>>;
            permissions: z.ZodMiniObject<{
                calls: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>]>, "_zod"> & {
                    _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>]>, "output"> & {
                        output: {
                            signature: string;
                            to: `0x${string}`;
                        } | {
                            signature: string;
                            to?: undefined;
                        } | {
                            to: `0x${string}`;
                            signature?: undefined;
                        };
                    };
                }>>;
                signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                    addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                }, z.core.$strip>>;
                spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                    token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                }, z.core.$strip>>>>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            context: z.ZodMiniUnknown;
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>>>>;
        selectAccount: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniBoolean<boolean>, z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            key: z.ZodMiniOptional<z.ZodMiniObject<{
                credentialId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>>;
        signInWithEthereum: z.ZodMiniOptional<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            chainId: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
            domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
            expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
            issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
            nonce: z.ZodMiniString<string>;
            notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
            requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
            resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
            scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
            statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
            uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
            version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
        }, z.core.$strip>, z.ZodMiniObject<{
            authUrl: z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniObject<{
                logout: z.ZodMiniString<string>;
                nonce: z.ZodMiniString<string>;
                verify: z.ZodMiniString<string>;
            }, z.core.$strip>]>;
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
            expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
            issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
            notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
            requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
            resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
            scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
            statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
            uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
            version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
        }, z.core.$strip>]>, "_zod"> & {
            _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                chainId: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                nonce: z.ZodMiniString<string>;
                notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
            }, z.core.$strip>, z.ZodMiniObject<{
                authUrl: z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniObject<{
                    logout: z.ZodMiniString<string>;
                    nonce: z.ZodMiniString<string>;
                    verify: z.ZodMiniString<string>;
                }, z.core.$strip>]>;
                chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
            }, z.core.$strip>]>, "output"> & {
                output: {
                    nonce: string;
                    chainId?: number | undefined;
                    domain?: string | undefined;
                    expirationTime?: Date | undefined;
                    issuedAt?: Date | undefined;
                    notBefore?: Date | undefined;
                    requestId?: string | undefined;
                    resources?: readonly string[] | undefined;
                    scheme?: string | undefined;
                    statement?: string | undefined;
                    uri?: string | undefined;
                    version?: "1" | undefined;
                    authUrl?: undefined;
                } | {
                    authUrl: string | {
                        logout: string;
                        nonce: string;
                        verify: string;
                    };
                    chainId?: number | undefined;
                    domain?: string | undefined;
                    expirationTime?: Date | undefined;
                    issuedAt?: Date | undefined;
                    notBefore?: Date | undefined;
                    requestId?: string | undefined;
                    resources?: readonly string[] | undefined;
                    scheme?: string | undefined;
                    statement?: string | undefined;
                    uri?: string | undefined;
                    version?: "1" | undefined;
                    nonce?: undefined;
                };
            };
        }>;
    }, z.core.$strip>;
    type Capabilities = z.infer<typeof Capabilities>;
    const Parameters: z.ZodMiniObject<{
        capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
            createAccount: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniBoolean<boolean>, z.ZodMiniObject<{
                chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                label: z.ZodMiniOptional<z.ZodMiniString<string>>;
            }, z.core.$strip>]>>;
            email: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            grantAdmins: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
            }, z.core.$strip>>>>;
            grantPermissions: z.ZodMiniOptional<z.ZodMiniObject<{
                address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                expiry: z.ZodMiniNumber<number>;
                feeToken: z.ZodMiniNullable<z.ZodMiniObject<{
                    limit: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
                    symbol: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"native">, z.ZodMiniString<string>]>>;
                }, z.core.$strip>>;
                key: z.ZodMiniOptional<z.ZodMiniObject<{
                    publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
                }, z.core.$strip>>;
                permissions: z.ZodMiniObject<{
                    calls: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>]>, "_zod"> & {
                        _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                            signature: z.ZodMiniString<string>;
                            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        }, z.core.$strip>, z.ZodMiniObject<{
                            signature: z.ZodMiniString<string>;
                        }, z.core.$strip>, z.ZodMiniObject<{
                            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        }, z.core.$strip>]>, "output"> & {
                            output: {
                                signature: string;
                                to: `0x${string}`;
                            } | {
                                signature: string;
                                to?: undefined;
                            } | {
                                to: `0x${string}`;
                                signature?: undefined;
                            };
                        };
                    }>>;
                    signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                        addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                    }, z.core.$strip>>;
                    spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                        limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                        token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    }, z.core.$strip>>>>;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                context: z.ZodMiniUnknown;
                signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>>>>;
            selectAccount: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniBoolean<boolean>, z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                key: z.ZodMiniOptional<z.ZodMiniObject<{
                    credentialId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>>;
            }, z.core.$strip>]>>;
            signInWithEthereum: z.ZodMiniOptional<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                chainId: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                nonce: z.ZodMiniString<string>;
                notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
            }, z.core.$strip>, z.ZodMiniObject<{
                authUrl: z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniObject<{
                    logout: z.ZodMiniString<string>;
                    nonce: z.ZodMiniString<string>;
                    verify: z.ZodMiniString<string>;
                }, z.core.$strip>]>;
                chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
            }, z.core.$strip>]>, "_zod"> & {
                _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                    chainId: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                    domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    nonce: z.ZodMiniString<string>;
                    notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                    scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    authUrl: z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniObject<{
                        logout: z.ZodMiniString<string>;
                        nonce: z.ZodMiniString<string>;
                        verify: z.ZodMiniString<string>;
                    }, z.core.$strip>]>;
                    chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                    domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                    scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
                }, z.core.$strip>]>, "output"> & {
                    output: {
                        nonce: string;
                        chainId?: number | undefined;
                        domain?: string | undefined;
                        expirationTime?: Date | undefined;
                        issuedAt?: Date | undefined;
                        notBefore?: Date | undefined;
                        requestId?: string | undefined;
                        resources?: readonly string[] | undefined;
                        scheme?: string | undefined;
                        statement?: string | undefined;
                        uri?: string | undefined;
                        version?: "1" | undefined;
                        authUrl?: undefined;
                    } | {
                        authUrl: string | {
                            logout: string;
                            nonce: string;
                            verify: string;
                        };
                        chainId?: number | undefined;
                        domain?: string | undefined;
                        expirationTime?: Date | undefined;
                        issuedAt?: Date | undefined;
                        notBefore?: Date | undefined;
                        requestId?: string | undefined;
                        resources?: readonly string[] | undefined;
                        scheme?: string | undefined;
                        statement?: string | undefined;
                        uri?: string | undefined;
                        version?: "1" | undefined;
                        nonce?: undefined;
                    };
                };
            }>;
        }, z.core.$strip>>;
        chainIds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>>>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_connect">;
        params: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
                createAccount: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniBoolean<boolean>, z.ZodMiniObject<{
                    chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                    label: z.ZodMiniOptional<z.ZodMiniString<string>>;
                }, z.core.$strip>]>>;
                email: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                grantAdmins: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
                }, z.core.$strip>>>>;
                grantPermissions: z.ZodMiniOptional<z.ZodMiniObject<{
                    address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                    expiry: z.ZodMiniNumber<number>;
                    feeToken: z.ZodMiniNullable<z.ZodMiniObject<{
                        limit: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
                        symbol: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"native">, z.ZodMiniString<string>]>>;
                    }, z.core.$strip>>;
                    key: z.ZodMiniOptional<z.ZodMiniObject<{
                        publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
                    }, z.core.$strip>>;
                    permissions: z.ZodMiniObject<{
                        calls: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                            signature: z.ZodMiniString<string>;
                            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        }, z.core.$strip>, z.ZodMiniObject<{
                            signature: z.ZodMiniString<string>;
                        }, z.core.$strip>, z.ZodMiniObject<{
                            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        }, z.core.$strip>]>, "_zod"> & {
                            _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                                signature: z.ZodMiniString<string>;
                                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            }, z.core.$strip>, z.ZodMiniObject<{
                                signature: z.ZodMiniString<string>;
                            }, z.core.$strip>, z.ZodMiniObject<{
                                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            }, z.core.$strip>]>, "output"> & {
                                output: {
                                    signature: string;
                                    to: `0x${string}`;
                                } | {
                                    signature: string;
                                    to?: undefined;
                                } | {
                                    to: `0x${string}`;
                                    signature?: undefined;
                                };
                            };
                        }>>;
                        signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                            addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        }, z.core.$strip>>;
                        spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                            limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                            token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                        }, z.core.$strip>>>>;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    context: z.ZodMiniUnknown;
                    signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>>>>;
                selectAccount: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniBoolean<boolean>, z.ZodMiniObject<{
                    address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    key: z.ZodMiniOptional<z.ZodMiniObject<{
                        credentialId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>>;
                }, z.core.$strip>]>>;
                signInWithEthereum: z.ZodMiniOptional<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                    chainId: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                    domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    nonce: z.ZodMiniString<string>;
                    notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                    scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    authUrl: z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniObject<{
                        logout: z.ZodMiniString<string>;
                        nonce: z.ZodMiniString<string>;
                        verify: z.ZodMiniString<string>;
                    }, z.core.$strip>]>;
                    chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                    domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                    scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
                }, z.core.$strip>]>, "_zod"> & {
                    _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                        chainId: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                        domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                        issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                        nonce: z.ZodMiniString<string>;
                        notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                        requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                        scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        authUrl: z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniObject<{
                            logout: z.ZodMiniString<string>;
                            nonce: z.ZodMiniString<string>;
                            verify: z.ZodMiniString<string>;
                        }, z.core.$strip>]>;
                        chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                        domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                        issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                        notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                        requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                        scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
                    }, z.core.$strip>]>, "output"> & {
                        output: {
                            nonce: string;
                            chainId?: number | undefined;
                            domain?: string | undefined;
                            expirationTime?: Date | undefined;
                            issuedAt?: Date | undefined;
                            notBefore?: Date | undefined;
                            requestId?: string | undefined;
                            resources?: readonly string[] | undefined;
                            scheme?: string | undefined;
                            statement?: string | undefined;
                            uri?: string | undefined;
                            version?: "1" | undefined;
                            authUrl?: undefined;
                        } | {
                            authUrl: string | {
                                logout: string;
                                nonce: string;
                                verify: string;
                            };
                            chainId?: number | undefined;
                            domain?: string | undefined;
                            expirationTime?: Date | undefined;
                            issuedAt?: Date | undefined;
                            notBefore?: Date | undefined;
                            requestId?: string | undefined;
                            resources?: readonly string[] | undefined;
                            scheme?: string | undefined;
                            statement?: string | undefined;
                            uri?: string | undefined;
                            version?: "1" | undefined;
                            nonce?: undefined;
                        };
                    };
                }>;
            }, z.core.$strip>>;
            chainIds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>>>;
        }, z.core.$strip>], null>>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const ResponseCapabilities: z.ZodMiniObject<{
        admins: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            credentialId: z.ZodMiniOptional<z.ZodMiniString<string>>;
            id: z.ZodMiniTemplateLiteral<`0x${string}`>;
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
        }, z.core.$strip>>>>;
        permissions: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            expiry: z.ZodMiniNumber<number>;
            id: z.ZodMiniTemplateLiteral<`0x${string}`>;
            key: z.ZodMiniObject<{
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
            }, z.core.$strip>;
            permissions: z.ZodMiniObject<{
                calls: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>]>, "_zod"> & {
                    _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>]>, "output"> & {
                        output: {
                            signature: string;
                            to: `0x${string}`;
                        } | {
                            signature: string;
                            to?: undefined;
                        } | {
                            to: `0x${string}`;
                            signature?: undefined;
                        };
                    };
                }>>;
                signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                    addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                }, z.core.$strip>>;
                spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                    token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                }, z.core.$strip>>>>;
            }, z.core.$strip>;
        }, z.core.$strip>>>>;
        preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            context: z.ZodMiniUnknown;
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>>>>;
        signInWithEthereum: z.ZodMiniOptional<z.ZodMiniObject<{
            message: z.ZodMiniString<string>;
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            token: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    type ResponseCapabilities = z.infer<typeof ResponseCapabilities>;
    const Response: z.ZodMiniObject<{
        accounts: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
                admins: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    credentialId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    id: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
                }, z.core.$strip>>>>;
                permissions: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                    expiry: z.ZodMiniNumber<number>;
                    id: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    key: z.ZodMiniObject<{
                        publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
                    }, z.core.$strip>;
                    permissions: z.ZodMiniObject<{
                        calls: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                            signature: z.ZodMiniString<string>;
                            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        }, z.core.$strip>, z.ZodMiniObject<{
                            signature: z.ZodMiniString<string>;
                        }, z.core.$strip>, z.ZodMiniObject<{
                            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        }, z.core.$strip>]>, "_zod"> & {
                            _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                                signature: z.ZodMiniString<string>;
                                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            }, z.core.$strip>, z.ZodMiniObject<{
                                signature: z.ZodMiniString<string>;
                            }, z.core.$strip>, z.ZodMiniObject<{
                                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            }, z.core.$strip>]>, "output"> & {
                                output: {
                                    signature: string;
                                    to: `0x${string}`;
                                } | {
                                    signature: string;
                                    to?: undefined;
                                } | {
                                    to: `0x${string}`;
                                    signature?: undefined;
                                };
                            };
                        }>>;
                        signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                            addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        }, z.core.$strip>>;
                        spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                            limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                            token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                        }, z.core.$strip>>>>;
                    }, z.core.$strip>;
                }, z.core.$strip>>>>;
                preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    context: z.ZodMiniUnknown;
                    signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>>>>;
                signInWithEthereum: z.ZodMiniOptional<z.ZodMiniObject<{
                    message: z.ZodMiniString<string>;
                    signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    token: z.ZodMiniOptional<z.ZodMiniString<string>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        chainIds: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_disconnect {
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_disconnect">;
        params: z.ZodMiniOptional<z.ZodMiniUnknown>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: undefined;
}
export declare namespace wallet_getAssets {
    /** Parameters  */
    const Parameters: z.ZodMiniObject<{
        account: z.ZodMiniTemplateLiteral<`0x${string}`>;
        assetFilter: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            address: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniLiteral<"native">]>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"native">, z.ZodMiniLiteral<"erc20">, z.ZodMiniLiteral<"erc721">, z.ZodMiniString<string>]>;
        }, z.core.$strip>>>>>;
        assetTypeFilter: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"native">, z.ZodMiniLiteral<"erc20">, z.ZodMiniLiteral<"erc721">, z.ZodMiniString<string>]>>>>;
        chainFilter: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>>>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `wallet_getAssets`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_getAssets">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            account: z.ZodMiniTemplateLiteral<`0x${string}`>;
            assetFilter: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                address: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniLiteral<"native">]>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"native">, z.ZodMiniLiteral<"erc20">, z.ZodMiniLiteral<"erc721">, z.ZodMiniString<string>]>;
            }, z.core.$strip>>>>>;
            assetTypeFilter: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"native">, z.ZodMiniLiteral<"erc20">, z.ZodMiniLiteral<"erc721">, z.ZodMiniString<string>]>>>>;
            chainFilter: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>>>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `wallet_getAssets`. */
    const Response: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        balance: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        metadata: z.ZodMiniNullable<z.ZodMiniObject<{
            decimals: z.ZodMiniNumber<number>;
            fiat: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
                currency: z.ZodMiniString<string>;
                value: z.ZodMiniCodec<z.ZodMiniString<string>, z.ZodMiniNumber<number>>;
            }, z.core.$strip>>>;
            name: z.ZodMiniString<string>;
            symbol: z.ZodMiniString<string>;
        }, z.core.$strip>>;
        type: z.ZodMiniLiteral<"erc20">;
    }, z.core.$strip>, z.ZodMiniObject<{
        address: z.ZodMiniNullable<z.ZodMiniLiteral<"native">>;
        balance: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        metadata: z.ZodMiniNullable<z.ZodMiniObject<{
            decimals: z.ZodMiniNumber<number>;
            fiat: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
                currency: z.ZodMiniString<string>;
                value: z.ZodMiniCodec<z.ZodMiniString<string>, z.ZodMiniNumber<number>>;
            }, z.core.$strip>>>;
            name: z.ZodMiniOptional<z.ZodMiniString<string>>;
            symbol: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.core.$strip>>;
        type: z.ZodMiniLiteral<"native">;
    }, z.core.$strip>]>, "_zod"> & {
        _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            balance: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            metadata: z.ZodMiniNullable<z.ZodMiniObject<{
                decimals: z.ZodMiniNumber<number>;
                fiat: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
                    currency: z.ZodMiniString<string>;
                    value: z.ZodMiniCodec<z.ZodMiniString<string>, z.ZodMiniNumber<number>>;
                }, z.core.$strip>>>;
                name: z.ZodMiniString<string>;
                symbol: z.ZodMiniString<string>;
            }, z.core.$strip>>;
            type: z.ZodMiniLiteral<"erc20">;
        }, z.core.$strip>, z.ZodMiniObject<{
            address: z.ZodMiniNullable<z.ZodMiniLiteral<"native">>;
            balance: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            metadata: z.ZodMiniNullable<z.ZodMiniObject<{
                decimals: z.ZodMiniNumber<number>;
                fiat: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
                    currency: z.ZodMiniString<string>;
                    value: z.ZodMiniCodec<z.ZodMiniString<string>, z.ZodMiniNumber<number>>;
                }, z.core.$strip>>>;
                name: z.ZodMiniOptional<z.ZodMiniString<string>>;
                symbol: z.ZodMiniOptional<z.ZodMiniString<string>>;
            }, z.core.$strip>>;
            type: z.ZodMiniLiteral<"native">;
        }, z.core.$strip>]>, "output"> & {
            output: {
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
            };
        };
    }>>>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_getCallsStatus {
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_getCallsStatus">;
        params: z.ZodMiniTuple<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>], null>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniObject<{
        atomic: z.ZodMiniBoolean<boolean>;
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        id: z.ZodMiniString<string>;
        receipts: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            blockHash: z.ZodMiniTemplateLiteral<`0x${string}`>;
            blockNumber: z.ZodMiniTemplateLiteral<`0x${string}`>;
            gasUsed: z.ZodMiniTemplateLiteral<`0x${string}`>;
            logs: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                data: z.ZodMiniTemplateLiteral<`0x${string}`>;
                topics: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
            }, z.core.$strip>>>;
            status: z.ZodMiniTemplateLiteral<`0x${string}`>;
            transactionHash: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>>>>;
        status: z.ZodMiniNumber<number>;
        version: z.ZodMiniString<string>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_getCapabilities {
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_getCapabilities">;
        params: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniUndefined]>], null>>, z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniUndefined]>, z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>>], null>>]>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniObject<{
        atomic: z.ZodMiniObject<{
            status: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"supported">, z.ZodMiniLiteral<"unsupported">]>;
        }, z.core.$strip>;
        feeToken: z.ZodMiniObject<{
            supported: z.ZodMiniBoolean<boolean>;
            tokens: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                decimals: z.ZodMiniNumber<number>;
                feeToken: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                interop: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                nativeRate: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
                symbol: z.ZodMiniString<string>;
                uid: z.ZodMiniString<string>;
            }, z.core.$strip>>>;
        }, z.core.$strip>;
        merchant: z.ZodMiniObject<{
            supported: z.ZodMiniBoolean<boolean>;
        }, z.core.$strip>;
        permissions: z.ZodMiniObject<{
            supported: z.ZodMiniBoolean<boolean>;
        }, z.core.$strip>;
        requiredFunds: z.ZodMiniObject<{
            supported: z.ZodMiniBoolean<boolean>;
            tokens: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                decimals: z.ZodMiniNumber<number>;
                feeToken: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                interop: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                nativeRate: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
                symbol: z.ZodMiniString<string>;
                uid: z.ZodMiniString<string>;
            }, z.core.$strip>>>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    type Response = z.infer<typeof Response>;
    type Response_encoded = z.input<typeof Response>;
}
export declare namespace wallet_getKeys {
    const Parameters: z.ZodMiniObject<{
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        chainIds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>>>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_getKeys">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            chainIds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>>>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
        feeToken: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
            limit: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
            symbol: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"native">, z.ZodMiniString<string>]>>;
        }, z.core.$strip>>>;
        permissions: z.ZodMiniOptional<z.ZodMiniObject<{
            calls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                signature: z.ZodMiniString<string>;
                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>, z.ZodMiniObject<{
                signature: z.ZodMiniString<string>;
            }, z.core.$strip>, z.ZodMiniObject<{
                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>]>, "_zod"> & {
                _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>]>, "output"> & {
                    output: {
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                        to?: undefined;
                    } | {
                        to: `0x${string}`;
                        signature?: undefined;
                    };
                };
            }>>>;
            signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
            }, z.core.$strip>>;
            spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            }, z.core.$strip>>>>;
        }, z.core.$strip>>;
        chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
        expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
        id: z.ZodMiniTemplateLiteral<`0x${string}`>;
        prehash: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
        role: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"admin">, z.ZodMiniLiteral<"session">]>;
        type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
    }, z.core.$strip>>>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_prepareCalls {
    const Capabilities: z.ZodMiniObject<{
        feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
        merchantUrl: z.ZodMiniOptional<z.ZodMiniString<string>>;
        permissions: z.ZodMiniOptional<z.ZodMiniObject<{
            id: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
        }, z.core.$strip>>;
        preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            context: z.ZodMiniUnknown;
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>>>>;
        requiredFunds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        }, z.core.$strip>, z.ZodMiniObject<{
            symbol: z.ZodMiniString<string>;
            value: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
        }, z.core.$strip>]>, "_zod"> & {
            _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            }, z.core.$strip>, z.ZodMiniObject<{
                symbol: z.ZodMiniString<string>;
                value: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
            }, z.core.$strip>]>, "output"> & {
                output: {
                    address: `0x${string}`;
                    value: bigint;
                    symbol?: undefined;
                } | {
                    symbol: string;
                    value: `${number}` | `${number}.${number}`;
                    address?: undefined;
                };
            };
        }>>>;
    }, z.core.$strip>;
    type Capabilities = z.infer<typeof Capabilities>;
    const Parameters: z.ZodMiniObject<{
        calls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            data: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
            value: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
        }, z.core.$strip>>>;
        capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
            feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
            merchantUrl: z.ZodMiniOptional<z.ZodMiniString<string>>;
            permissions: z.ZodMiniOptional<z.ZodMiniObject<{
                id: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
            }, z.core.$strip>>;
            preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                context: z.ZodMiniUnknown;
                signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>>>>;
            requiredFunds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            }, z.core.$strip>, z.ZodMiniObject<{
                symbol: z.ZodMiniString<string>;
                value: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
            }, z.core.$strip>]>, "_zod"> & {
                _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                    address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    symbol: z.ZodMiniString<string>;
                    value: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
                }, z.core.$strip>]>, "output"> & {
                    output: {
                        address: `0x${string}`;
                        value: bigint;
                        symbol?: undefined;
                    } | {
                        symbol: string;
                        value: `${number}` | `${number}.${number}`;
                        address?: undefined;
                    };
                };
            }>>>;
        }, z.core.$strip>>;
        chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
        from: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        key: z.ZodMiniOptional<z.ZodMiniObject<{
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
            prehash: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.core.$strip>>;
        version: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_prepareCalls">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            calls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                data: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                value: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
            }, z.core.$strip>>>;
            capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
                feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
                merchantUrl: z.ZodMiniOptional<z.ZodMiniString<string>>;
                permissions: z.ZodMiniOptional<z.ZodMiniObject<{
                    id: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                }, z.core.$strip>>;
                preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    context: z.ZodMiniUnknown;
                    signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>>>>;
                requiredFunds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                    address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    symbol: z.ZodMiniString<string>;
                    value: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
                }, z.core.$strip>]>, "_zod"> & {
                    _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        symbol: z.ZodMiniString<string>;
                        value: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
                    }, z.core.$strip>]>, "output"> & {
                        output: {
                            address: `0x${string}`;
                            value: bigint;
                            symbol?: undefined;
                        } | {
                            symbol: string;
                            value: `${number}` | `${number}.${number}`;
                            address?: undefined;
                        };
                    };
                }>>>;
            }, z.core.$strip>>;
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            from: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            key: z.ZodMiniOptional<z.ZodMiniObject<{
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
                prehash: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.core.$strip>>;
            version: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniObject<{
        capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
            quote: z.ZodMiniOptional<z.ZodMiniObject<{
                hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
                r: z.ZodMiniTemplateLiteral<`0x${string}`>;
                s: z.ZodMiniTemplateLiteral<`0x${string}`>;
                v: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                yParity: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                multiChainRoot: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                quotes: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    additionalAuthorization: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
                        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                        r: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        s: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        yParity: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                    }, z.core.$strip>>>;
                    assetDeficits: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
                        address: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>;
                        decimals: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                        deficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                            currency: z.ZodMiniString<string>;
                            value: z.ZodMiniString<string>;
                        }, z.core.$strip>>;
                        name: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        required: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        symbol: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    }, z.core.$strip>>>;
                    authorizationAddress: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                    chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                    ethPrice: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    extraPayment: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    feeTokenDeficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    intent: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                        combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        isMultichain: z.ZodMiniBoolean<boolean>;
                        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        paymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        isMultichain: z.ZodMiniBoolean<boolean>;
                        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        prePaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        prePaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        totalPaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        totalPaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    }, z.core.$strip>]>;
                    nativeFeeEstimate: z.ZodMiniObject<{
                        maxFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        maxPriorityFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    }, z.core.$strip>;
                    orchestrator: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    paymentTokenDecimals: z.ZodMiniNumber<number>;
                    txGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                }, z.core.$strip>>>;
                ttl: z.ZodMiniNumber<number>;
            }, z.core.$strip>>;
            assetDiffs: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                address: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                decimals: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniNumber<number>, z.ZodMiniNull]>>;
                direction: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"incoming">, z.ZodMiniLiteral<"outgoing">]>;
                fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                    currency: z.ZodMiniString<string>;
                    value: z.ZodMiniCodec<z.ZodMiniString<string>, z.ZodMiniNumber<number>>;
                }, z.core.$strip>>;
                name: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniNull]>>;
                symbol: z.ZodMiniString<string>;
                type: z.ZodMiniLiteral<"erc20">;
                value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            }, z.core.$strip>, z.ZodMiniObject<{
                address: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                direction: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"incoming">, z.ZodMiniLiteral<"outgoing">]>;
                fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                    currency: z.ZodMiniString<string>;
                    value: z.ZodMiniCodec<z.ZodMiniString<string>, z.ZodMiniNumber<number>>;
                }, z.core.$strip>>;
                name: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniNull]>>;
                symbol: z.ZodMiniString<string>;
                type: z.ZodMiniLiteral<"erc721">;
                uri: z.ZodMiniString<string>;
                value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            }, z.core.$strip>, z.ZodMiniObject<{
                address: z.ZodMiniNull;
                decimals: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniNumber<number>, z.ZodMiniNull]>>;
                direction: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"incoming">, z.ZodMiniLiteral<"outgoing">]>;
                fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                    currency: z.ZodMiniString<string>;
                    value: z.ZodMiniCodec<z.ZodMiniString<string>, z.ZodMiniNumber<number>>;
                }, z.core.$strip>>;
                symbol: z.ZodMiniString<string>;
                type: z.ZodMiniNull;
                value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            }, z.core.$strip>]>>>], null>>>>>>;
            authorizeKeys: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
                permissions: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                    selector: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    type: z.ZodMiniLiteral<"call">;
                }, z.core.$strip>, z.ZodMiniObject<{
                    limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                    token: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                    type: z.ZodMiniLiteral<"spend">;
                }, z.core.$strip>]>>>;
                expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                prehash: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                role: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"admin">, z.ZodMiniLiteral<"normal">]>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthnp256">]>;
            }, z.core.$strip>>>>>;
            feePayerDigest: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            feeSignature: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            feeTotals: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniObject<{
                currency: z.ZodMiniString<string>;
                value: z.ZodMiniString<string>;
            }, z.core.$strip>>>;
            revokeKeys: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>>>>>;
        }, z.core.$strip>>;
        chainId: z.ZodMiniTemplateLiteral<`0x${string}`>;
        context: z.ZodMiniObject<{
            account: z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>;
            calls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                data: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                value: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
            }, z.core.$strip>>>;
            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            quote: z.ZodMiniOptional<z.ZodMiniObject<{
                hash: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                r: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                s: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                v: z.ZodMiniOptional<z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                yParity: z.ZodMiniOptional<z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                multiChainRoot: z.ZodMiniOptional<z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>>;
                quotes: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    additionalAuthorization: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
                        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                        r: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        s: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        yParity: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                    }, z.core.$strip>>>;
                    assetDeficits: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
                        address: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>;
                        decimals: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                        deficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                            currency: z.ZodMiniString<string>;
                            value: z.ZodMiniString<string>;
                        }, z.core.$strip>>;
                        name: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        required: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        symbol: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    }, z.core.$strip>>>;
                    authorizationAddress: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                    chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                    ethPrice: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    extraPayment: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    feeTokenDeficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    intent: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                        combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        isMultichain: z.ZodMiniBoolean<boolean>;
                        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        paymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        isMultichain: z.ZodMiniBoolean<boolean>;
                        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        prePaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        prePaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        totalPaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        totalPaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    }, z.core.$strip>]>;
                    nativeFeeEstimate: z.ZodMiniObject<{
                        maxFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        maxPriorityFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    }, z.core.$strip>;
                    orchestrator: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    paymentTokenDecimals: z.ZodMiniNumber<number>;
                    txGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                }, z.core.$strip>>>>;
                ttl: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        digest: z.ZodMiniTemplateLiteral<`0x${string}`>;
        key: z.ZodMiniObject<{
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
            prehash: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.core.$strip>;
        typedData: z.ZodMiniObject<{
            domain: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                name: z.ZodMiniString<string>;
                verifyingContract: z.ZodMiniTemplateLiteral<`0x${string}`>;
                version: z.ZodMiniString<string>;
            }, z.core.$strip>, z.ZodMiniObject<{}, z.core.$strip>]>;
            message: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>;
            primaryType: z.ZodMiniString<string>;
            types: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_prepareUpgradeAccount {
    const Capabilities: z.ZodMiniObject<{
        label: z.ZodMiniOptional<z.ZodMiniString<string>>;
        createAccount: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniBoolean<boolean>, z.ZodMiniObject<{
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            label: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.core.$strip>]>>;
        email: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        grantAdmins: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
        }, z.core.$strip>>>>;
        grantPermissions: z.ZodMiniOptional<z.ZodMiniObject<{
            address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            expiry: z.ZodMiniNumber<number>;
            feeToken: z.ZodMiniNullable<z.ZodMiniObject<{
                limit: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
                symbol: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"native">, z.ZodMiniString<string>]>>;
            }, z.core.$strip>>;
            key: z.ZodMiniOptional<z.ZodMiniObject<{
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
            }, z.core.$strip>>;
            permissions: z.ZodMiniObject<{
                calls: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    signature: z.ZodMiniString<string>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>]>, "_zod"> & {
                    _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>]>, "output"> & {
                        output: {
                            signature: string;
                            to: `0x${string}`;
                        } | {
                            signature: string;
                            to?: undefined;
                        } | {
                            to: `0x${string}`;
                            signature?: undefined;
                        };
                    };
                }>>;
                signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                    addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                }, z.core.$strip>>;
                spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                    token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                }, z.core.$strip>>>>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            context: z.ZodMiniUnknown;
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>>>>;
        selectAccount: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniBoolean<boolean>, z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            key: z.ZodMiniOptional<z.ZodMiniObject<{
                credentialId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>>;
        signInWithEthereum: z.ZodMiniOptional<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            chainId: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
            domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
            expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
            issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
            nonce: z.ZodMiniString<string>;
            notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
            requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
            resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
            scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
            statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
            uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
            version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
        }, z.core.$strip>, z.ZodMiniObject<{
            authUrl: z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniObject<{
                logout: z.ZodMiniString<string>;
                nonce: z.ZodMiniString<string>;
                verify: z.ZodMiniString<string>;
            }, z.core.$strip>]>;
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
            expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
            issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
            notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
            requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
            resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
            scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
            statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
            uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
            version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
        }, z.core.$strip>]>, "_zod"> & {
            _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                chainId: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                nonce: z.ZodMiniString<string>;
                notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
            }, z.core.$strip>, z.ZodMiniObject<{
                authUrl: z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniObject<{
                    logout: z.ZodMiniString<string>;
                    nonce: z.ZodMiniString<string>;
                    verify: z.ZodMiniString<string>;
                }, z.core.$strip>]>;
                chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
            }, z.core.$strip>]>, "output"> & {
                output: {
                    nonce: string;
                    chainId?: number | undefined;
                    domain?: string | undefined;
                    expirationTime?: Date | undefined;
                    issuedAt?: Date | undefined;
                    notBefore?: Date | undefined;
                    requestId?: string | undefined;
                    resources?: readonly string[] | undefined;
                    scheme?: string | undefined;
                    statement?: string | undefined;
                    uri?: string | undefined;
                    version?: "1" | undefined;
                    authUrl?: undefined;
                } | {
                    authUrl: string | {
                        logout: string;
                        nonce: string;
                        verify: string;
                    };
                    chainId?: number | undefined;
                    domain?: string | undefined;
                    expirationTime?: Date | undefined;
                    issuedAt?: Date | undefined;
                    notBefore?: Date | undefined;
                    requestId?: string | undefined;
                    resources?: readonly string[] | undefined;
                    scheme?: string | undefined;
                    statement?: string | undefined;
                    uri?: string | undefined;
                    version?: "1" | undefined;
                    nonce?: undefined;
                };
            };
        }>;
    }, z.core.$strip>;
    type Capabilities = z.infer<typeof Capabilities>;
    const Parameters: z.ZodMiniObject<{
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
            label: z.ZodMiniOptional<z.ZodMiniString<string>>;
            createAccount: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniBoolean<boolean>, z.ZodMiniObject<{
                chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                label: z.ZodMiniOptional<z.ZodMiniString<string>>;
            }, z.core.$strip>]>>;
            email: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            grantAdmins: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
            }, z.core.$strip>>>>;
            grantPermissions: z.ZodMiniOptional<z.ZodMiniObject<{
                address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                expiry: z.ZodMiniNumber<number>;
                feeToken: z.ZodMiniNullable<z.ZodMiniObject<{
                    limit: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
                    symbol: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"native">, z.ZodMiniString<string>]>>;
                }, z.core.$strip>>;
                key: z.ZodMiniOptional<z.ZodMiniObject<{
                    publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
                }, z.core.$strip>>;
                permissions: z.ZodMiniObject<{
                    calls: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        signature: z.ZodMiniString<string>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>]>, "_zod"> & {
                        _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                            signature: z.ZodMiniString<string>;
                            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        }, z.core.$strip>, z.ZodMiniObject<{
                            signature: z.ZodMiniString<string>;
                        }, z.core.$strip>, z.ZodMiniObject<{
                            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        }, z.core.$strip>]>, "output"> & {
                            output: {
                                signature: string;
                                to: `0x${string}`;
                            } | {
                                signature: string;
                                to?: undefined;
                            } | {
                                to: `0x${string}`;
                                signature?: undefined;
                            };
                        };
                    }>>;
                    signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                        addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                    }, z.core.$strip>>;
                    spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                        limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                        token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    }, z.core.$strip>>>>;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                context: z.ZodMiniUnknown;
                signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>>>>;
            selectAccount: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniBoolean<boolean>, z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                key: z.ZodMiniOptional<z.ZodMiniObject<{
                    credentialId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>>;
            }, z.core.$strip>]>>;
            signInWithEthereum: z.ZodMiniOptional<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                chainId: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                nonce: z.ZodMiniString<string>;
                notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
            }, z.core.$strip>, z.ZodMiniObject<{
                authUrl: z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniObject<{
                    logout: z.ZodMiniString<string>;
                    nonce: z.ZodMiniString<string>;
                    verify: z.ZodMiniString<string>;
                }, z.core.$strip>]>;
                chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
            }, z.core.$strip>]>, "_zod"> & {
                _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                    chainId: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                    domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    nonce: z.ZodMiniString<string>;
                    notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                    scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    authUrl: z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniObject<{
                        logout: z.ZodMiniString<string>;
                        nonce: z.ZodMiniString<string>;
                        verify: z.ZodMiniString<string>;
                    }, z.core.$strip>]>;
                    chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                    domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                    scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
                }, z.core.$strip>]>, "output"> & {
                    output: {
                        nonce: string;
                        chainId?: number | undefined;
                        domain?: string | undefined;
                        expirationTime?: Date | undefined;
                        issuedAt?: Date | undefined;
                        notBefore?: Date | undefined;
                        requestId?: string | undefined;
                        resources?: readonly string[] | undefined;
                        scheme?: string | undefined;
                        statement?: string | undefined;
                        uri?: string | undefined;
                        version?: "1" | undefined;
                        authUrl?: undefined;
                    } | {
                        authUrl: string | {
                            logout: string;
                            nonce: string;
                            verify: string;
                        };
                        chainId?: number | undefined;
                        domain?: string | undefined;
                        expirationTime?: Date | undefined;
                        issuedAt?: Date | undefined;
                        notBefore?: Date | undefined;
                        requestId?: string | undefined;
                        resources?: readonly string[] | undefined;
                        scheme?: string | undefined;
                        statement?: string | undefined;
                        uri?: string | undefined;
                        version?: "1" | undefined;
                        nonce?: undefined;
                    };
                };
            }>;
        }, z.core.$strip>>;
        chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_prepareUpgradeAccount">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
                label: z.ZodMiniOptional<z.ZodMiniString<string>>;
                createAccount: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniBoolean<boolean>, z.ZodMiniObject<{
                    chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                    label: z.ZodMiniOptional<z.ZodMiniString<string>>;
                }, z.core.$strip>]>>;
                email: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                grantAdmins: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
                }, z.core.$strip>>>>;
                grantPermissions: z.ZodMiniOptional<z.ZodMiniObject<{
                    address: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                    expiry: z.ZodMiniNumber<number>;
                    feeToken: z.ZodMiniNullable<z.ZodMiniObject<{
                        limit: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
                        symbol: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"native">, z.ZodMiniString<string>]>>;
                    }, z.core.$strip>>;
                    key: z.ZodMiniOptional<z.ZodMiniObject<{
                        publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
                    }, z.core.$strip>>;
                    permissions: z.ZodMiniObject<{
                        calls: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                            signature: z.ZodMiniString<string>;
                            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        }, z.core.$strip>, z.ZodMiniObject<{
                            signature: z.ZodMiniString<string>;
                        }, z.core.$strip>, z.ZodMiniObject<{
                            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        }, z.core.$strip>]>, "_zod"> & {
                            _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                                signature: z.ZodMiniString<string>;
                                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            }, z.core.$strip>, z.ZodMiniObject<{
                                signature: z.ZodMiniString<string>;
                            }, z.core.$strip>, z.ZodMiniObject<{
                                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            }, z.core.$strip>]>, "output"> & {
                                output: {
                                    signature: string;
                                    to: `0x${string}`;
                                } | {
                                    signature: string;
                                    to?: undefined;
                                } | {
                                    to: `0x${string}`;
                                    signature?: undefined;
                                };
                            };
                        }>>;
                        signatureVerification: z.ZodMiniOptional<z.ZodMiniObject<{
                            addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        }, z.core.$strip>>;
                        spend: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                            limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                            token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                        }, z.core.$strip>>>>;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    context: z.ZodMiniUnknown;
                    signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>>>>;
                selectAccount: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniBoolean<boolean>, z.ZodMiniObject<{
                    address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    key: z.ZodMiniOptional<z.ZodMiniObject<{
                        credentialId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>>;
                }, z.core.$strip>]>>;
                signInWithEthereum: z.ZodMiniOptional<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                    chainId: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                    domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    nonce: z.ZodMiniString<string>;
                    notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                    scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    authUrl: z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniObject<{
                        logout: z.ZodMiniString<string>;
                        nonce: z.ZodMiniString<string>;
                        verify: z.ZodMiniString<string>;
                    }, z.core.$strip>]>;
                    chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                    domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                    requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                    scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
                }, z.core.$strip>]>, "_zod"> & {
                    _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                        chainId: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                        domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                        issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                        nonce: z.ZodMiniString<string>;
                        notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                        requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                        scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        authUrl: z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniObject<{
                            logout: z.ZodMiniString<string>;
                            nonce: z.ZodMiniString<string>;
                            verify: z.ZodMiniString<string>;
                        }, z.core.$strip>]>;
                        chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                        domain: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        expirationTime: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                        issuedAt: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                        notBefore: z.ZodMiniOptional<z.ZodMiniDate<Date>>;
                        requestId: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        resources: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniString<string>>>>;
                        scheme: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        statement: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        uri: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        version: z.ZodMiniOptional<z.ZodMiniLiteral<"1">>;
                    }, z.core.$strip>]>, "output"> & {
                        output: {
                            nonce: string;
                            chainId?: number | undefined;
                            domain?: string | undefined;
                            expirationTime?: Date | undefined;
                            issuedAt?: Date | undefined;
                            notBefore?: Date | undefined;
                            requestId?: string | undefined;
                            resources?: readonly string[] | undefined;
                            scheme?: string | undefined;
                            statement?: string | undefined;
                            uri?: string | undefined;
                            version?: "1" | undefined;
                            authUrl?: undefined;
                        } | {
                            authUrl: string | {
                                logout: string;
                                nonce: string;
                                verify: string;
                            };
                            chainId?: number | undefined;
                            domain?: string | undefined;
                            expirationTime?: Date | undefined;
                            issuedAt?: Date | undefined;
                            notBefore?: Date | undefined;
                            requestId?: string | undefined;
                            resources?: readonly string[] | undefined;
                            scheme?: string | undefined;
                            statement?: string | undefined;
                            uri?: string | undefined;
                            version?: "1" | undefined;
                            nonce?: undefined;
                        };
                    };
                }>;
            }, z.core.$strip>>;
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniObject<{
        context: z.ZodMiniUnknown;
        digests: z.ZodMiniObject<{
            auth: z.ZodMiniTemplateLiteral<`0x${string}`>;
            exec: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_sendCalls {
    const Capabilities: z.ZodMiniObject<{
        feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
        merchantUrl: z.ZodMiniOptional<z.ZodMiniString<string>>;
        permissions: z.ZodMiniOptional<z.ZodMiniObject<{
            id: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
        }, z.core.$strip>>;
        preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            context: z.ZodMiniUnknown;
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>>>>;
        requiredFunds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        }, z.core.$strip>, z.ZodMiniObject<{
            symbol: z.ZodMiniString<string>;
            value: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
        }, z.core.$strip>]>, "_zod"> & {
            _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            }, z.core.$strip>, z.ZodMiniObject<{
                symbol: z.ZodMiniString<string>;
                value: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
            }, z.core.$strip>]>, "output"> & {
                output: {
                    address: `0x${string}`;
                    value: bigint;
                    symbol?: undefined;
                } | {
                    symbol: string;
                    value: `${number}` | `${number}.${number}`;
                    address?: undefined;
                };
            };
        }>>>;
    }, z.core.$strip>;
    type Capabilities = z.infer<typeof Capabilities>;
    type Capabilities_encoded = z.input<typeof Capabilities>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_sendCalls">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            calls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                data: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                value: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
            }, z.core.$strip>>>;
            version: z.ZodMiniOptional<z.ZodMiniString<string>>;
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            from: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
                feeToken: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>>;
                merchantUrl: z.ZodMiniOptional<z.ZodMiniString<string>>;
                permissions: z.ZodMiniOptional<z.ZodMiniObject<{
                    id: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                }, z.core.$strip>>;
                preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    context: z.ZodMiniUnknown;
                    signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>>>>;
                requiredFunds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                    address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    symbol: z.ZodMiniString<string>;
                    value: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
                }, z.core.$strip>]>, "_zod"> & {
                    _zod: Omit<z.core.$ZodUnionInternals<readonly [z.ZodMiniObject<{
                        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        symbol: z.ZodMiniString<string>;
                        value: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
                    }, z.core.$strip>]>, "output"> & {
                        output: {
                            address: `0x${string}`;
                            value: bigint;
                            symbol?: undefined;
                        } | {
                            symbol: string;
                            value: `${number}` | `${number}.${number}`;
                            address?: undefined;
                        };
                    };
                }>>>;
            }, z.core.$strip>>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniObject<{
        id: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_sendPreparedCalls {
    const Parameters: z.ZodMiniObject<{
        capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
            quote: z.ZodMiniOptional<z.ZodMiniObject<{
                hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
                r: z.ZodMiniTemplateLiteral<`0x${string}`>;
                s: z.ZodMiniTemplateLiteral<`0x${string}`>;
                v: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                yParity: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                multiChainRoot: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                quotes: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    additionalAuthorization: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
                        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                        r: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        s: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        yParity: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                    }, z.core.$strip>>>;
                    assetDeficits: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
                        address: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>;
                        decimals: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                        deficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                            currency: z.ZodMiniString<string>;
                            value: z.ZodMiniString<string>;
                        }, z.core.$strip>>;
                        name: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        required: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        symbol: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    }, z.core.$strip>>>;
                    authorizationAddress: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                    chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                    ethPrice: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    extraPayment: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    feeTokenDeficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    intent: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                        combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        isMultichain: z.ZodMiniBoolean<boolean>;
                        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        paymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        isMultichain: z.ZodMiniBoolean<boolean>;
                        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        prePaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        prePaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        totalPaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        totalPaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    }, z.core.$strip>]>;
                    nativeFeeEstimate: z.ZodMiniObject<{
                        maxFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        maxPriorityFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    }, z.core.$strip>;
                    orchestrator: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    paymentTokenDecimals: z.ZodMiniNumber<number>;
                    txGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                }, z.core.$strip>>>;
                ttl: z.ZodMiniNumber<number>;
            }, z.core.$strip>>;
            assetDiffs: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                address: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                decimals: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniNumber<number>, z.ZodMiniNull]>>;
                direction: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"incoming">, z.ZodMiniLiteral<"outgoing">]>;
                fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                    currency: z.ZodMiniString<string>;
                    value: z.ZodMiniCodec<z.ZodMiniString<string>, z.ZodMiniNumber<number>>;
                }, z.core.$strip>>;
                name: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniNull]>>;
                symbol: z.ZodMiniString<string>;
                type: z.ZodMiniLiteral<"erc20">;
                value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            }, z.core.$strip>, z.ZodMiniObject<{
                address: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                direction: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"incoming">, z.ZodMiniLiteral<"outgoing">]>;
                fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                    currency: z.ZodMiniString<string>;
                    value: z.ZodMiniCodec<z.ZodMiniString<string>, z.ZodMiniNumber<number>>;
                }, z.core.$strip>>;
                name: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniNull]>>;
                symbol: z.ZodMiniString<string>;
                type: z.ZodMiniLiteral<"erc721">;
                uri: z.ZodMiniString<string>;
                value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            }, z.core.$strip>, z.ZodMiniObject<{
                address: z.ZodMiniNull;
                decimals: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniNumber<number>, z.ZodMiniNull]>>;
                direction: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"incoming">, z.ZodMiniLiteral<"outgoing">]>;
                fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                    currency: z.ZodMiniString<string>;
                    value: z.ZodMiniCodec<z.ZodMiniString<string>, z.ZodMiniNumber<number>>;
                }, z.core.$strip>>;
                symbol: z.ZodMiniString<string>;
                type: z.ZodMiniNull;
                value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            }, z.core.$strip>]>>>], null>>>>>>;
            authorizeKeys: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
                permissions: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                    selector: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    type: z.ZodMiniLiteral<"call">;
                }, z.core.$strip>, z.ZodMiniObject<{
                    limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                    token: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                    type: z.ZodMiniLiteral<"spend">;
                }, z.core.$strip>]>>>;
                expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                prehash: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                role: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"admin">, z.ZodMiniLiteral<"normal">]>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthnp256">]>;
            }, z.core.$strip>>>>>;
            feePayerDigest: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            feeSignature: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            feeTotals: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniObject<{
                currency: z.ZodMiniString<string>;
                value: z.ZodMiniString<string>;
            }, z.core.$strip>>>;
            revokeKeys: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>>>>>;
        }, z.core.$strip>>;
        chainId: z.ZodMiniTemplateLiteral<`0x${string}`>;
        context: z.ZodMiniObject<{
            account: z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>;
            calls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                data: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                value: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
            }, z.core.$strip>>>;
            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            quote: z.ZodMiniOptional<z.ZodMiniObject<{
                hash: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                r: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                s: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                v: z.ZodMiniOptional<z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                yParity: z.ZodMiniOptional<z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                multiChainRoot: z.ZodMiniOptional<z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>>;
                quotes: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    additionalAuthorization: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
                        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                        r: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        s: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        yParity: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                    }, z.core.$strip>>>;
                    assetDeficits: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
                        address: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>;
                        decimals: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                        deficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                            currency: z.ZodMiniString<string>;
                            value: z.ZodMiniString<string>;
                        }, z.core.$strip>>;
                        name: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        required: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        symbol: z.ZodMiniOptional<z.ZodMiniString<string>>;
                    }, z.core.$strip>>>;
                    authorizationAddress: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                    chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                    ethPrice: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    extraPayment: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    feeTokenDeficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    intent: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                        combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        isMultichain: z.ZodMiniBoolean<boolean>;
                        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        paymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                        eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        isMultichain: z.ZodMiniBoolean<boolean>;
                        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        prePaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        prePaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        totalPaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        totalPaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    }, z.core.$strip>]>;
                    nativeFeeEstimate: z.ZodMiniObject<{
                        maxFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        maxPriorityFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    }, z.core.$strip>;
                    orchestrator: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    paymentTokenDecimals: z.ZodMiniNumber<number>;
                    txGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                }, z.core.$strip>>>>;
                ttl: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        key: z.ZodMiniObject<{
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
            prehash: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.core.$strip>;
        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_sendPreparedCalls">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
                quote: z.ZodMiniOptional<z.ZodMiniObject<{
                    hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    r: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    s: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    v: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    yParity: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    multiChainRoot: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                    quotes: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                        additionalAuthorization: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
                            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                            r: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            s: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            yParity: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                        }, z.core.$strip>>>;
                        assetDeficits: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
                            address: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>;
                            decimals: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                            deficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                                currency: z.ZodMiniString<string>;
                                value: z.ZodMiniString<string>;
                            }, z.core.$strip>>;
                            name: z.ZodMiniOptional<z.ZodMiniString<string>>;
                            required: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            symbol: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        }, z.core.$strip>>>;
                        authorizationAddress: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                        ethPrice: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        extraPayment: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        feeTokenDeficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        intent: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                            combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                            encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                            eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            isMultichain: z.ZodMiniBoolean<boolean>;
                            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            paymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            paymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        }, z.core.$strip>, z.ZodMiniObject<{
                            combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                            encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                            eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            isMultichain: z.ZodMiniBoolean<boolean>;
                            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            prePaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            prePaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            totalPaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            totalPaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        }, z.core.$strip>]>;
                        nativeFeeEstimate: z.ZodMiniObject<{
                            maxFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            maxPriorityFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        }, z.core.$strip>;
                        orchestrator: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentTokenDecimals: z.ZodMiniNumber<number>;
                        txGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    }, z.core.$strip>>>;
                    ttl: z.ZodMiniNumber<number>;
                }, z.core.$strip>>;
                assetDiffs: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                    address: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                    decimals: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniNumber<number>, z.ZodMiniNull]>>;
                    direction: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"incoming">, z.ZodMiniLiteral<"outgoing">]>;
                    fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                        currency: z.ZodMiniString<string>;
                        value: z.ZodMiniCodec<z.ZodMiniString<string>, z.ZodMiniNumber<number>>;
                    }, z.core.$strip>>;
                    name: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniNull]>>;
                    symbol: z.ZodMiniString<string>;
                    type: z.ZodMiniLiteral<"erc20">;
                    value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    address: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                    direction: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"incoming">, z.ZodMiniLiteral<"outgoing">]>;
                    fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                        currency: z.ZodMiniString<string>;
                        value: z.ZodMiniCodec<z.ZodMiniString<string>, z.ZodMiniNumber<number>>;
                    }, z.core.$strip>>;
                    name: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniNull]>>;
                    symbol: z.ZodMiniString<string>;
                    type: z.ZodMiniLiteral<"erc721">;
                    uri: z.ZodMiniString<string>;
                    value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                }, z.core.$strip>, z.ZodMiniObject<{
                    address: z.ZodMiniNull;
                    decimals: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniNumber<number>, z.ZodMiniNull]>>;
                    direction: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"incoming">, z.ZodMiniLiteral<"outgoing">]>;
                    fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                        currency: z.ZodMiniString<string>;
                        value: z.ZodMiniCodec<z.ZodMiniString<string>, z.ZodMiniNumber<number>>;
                    }, z.core.$strip>>;
                    symbol: z.ZodMiniString<string>;
                    type: z.ZodMiniNull;
                    value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                }, z.core.$strip>]>>>], null>>>>>>;
                authorizeKeys: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    permissions: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                        selector: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        type: z.ZodMiniLiteral<"call">;
                    }, z.core.$strip>, z.ZodMiniObject<{
                        limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
                        token: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                        type: z.ZodMiniLiteral<"spend">;
                    }, z.core.$strip>]>>>;
                    expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                    prehash: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                    publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    role: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"admin">, z.ZodMiniLiteral<"normal">]>;
                    type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthnp256">]>;
                }, z.core.$strip>>>>>;
                feePayerDigest: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                feeSignature: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                feeTotals: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniObject<{
                    currency: z.ZodMiniString<string>;
                    value: z.ZodMiniString<string>;
                }, z.core.$strip>>>;
                revokeKeys: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>>>>>;
            }, z.core.$strip>>;
            chainId: z.ZodMiniTemplateLiteral<`0x${string}`>;
            context: z.ZodMiniObject<{
                account: z.ZodMiniObject<{
                    address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>;
                calls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    data: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    value: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
                }, z.core.$strip>>>;
                nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                quote: z.ZodMiniOptional<z.ZodMiniObject<{
                    hash: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    r: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    s: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    v: z.ZodMiniOptional<z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                    yParity: z.ZodMiniOptional<z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                    multiChainRoot: z.ZodMiniOptional<z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>>;
                    quotes: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                        additionalAuthorization: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
                            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                            r: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            s: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            yParity: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                        }, z.core.$strip>>>;
                        assetDeficits: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
                            address: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>;
                            decimals: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                            deficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                                currency: z.ZodMiniString<string>;
                                value: z.ZodMiniString<string>;
                            }, z.core.$strip>>;
                            name: z.ZodMiniOptional<z.ZodMiniString<string>>;
                            required: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            symbol: z.ZodMiniOptional<z.ZodMiniString<string>>;
                        }, z.core.$strip>>>;
                        authorizationAddress: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
                        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                        ethPrice: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        extraPayment: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        feeTokenDeficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        intent: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                            combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                            encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                            eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            isMultichain: z.ZodMiniBoolean<boolean>;
                            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            paymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            paymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        }, z.core.$strip>, z.ZodMiniObject<{
                            combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                            encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
                            eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            isMultichain: z.ZodMiniBoolean<boolean>;
                            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            prePaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            prePaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
                            totalPaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            totalPaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        }, z.core.$strip>]>;
                        nativeFeeEstimate: z.ZodMiniObject<{
                            maxFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                            maxPriorityFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                        }, z.core.$strip>;
                        orchestrator: z.ZodMiniTemplateLiteral<`0x${string}`>;
                        paymentTokenDecimals: z.ZodMiniNumber<number>;
                        txGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                    }, z.core.$strip>>>>;
                    ttl: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            key: z.ZodMiniObject<{
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
                prehash: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.core.$strip>;
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
        capabilities: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>>;
        id: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>>>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_verifySignature {
    const Parameters: z.ZodMiniObject<{
        /** Address of the account. */
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        /** Chain ID. */
        chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
        /** Digest to verify. */
        digest: z.ZodMiniTemplateLiteral<`0x${string}`>;
        /** Signature to verify. */
        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `wallet_verifySignature`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_verifySignature">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            /** Address of the account. */
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            /** Chain ID. */
            chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
            /** Digest to verify. */
            digest: z.ZodMiniTemplateLiteral<`0x${string}`>;
            /** Signature to verify. */
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `wallet_verifySignature`. */
    const Response: z.ZodMiniObject<{
        /** Address of the account. */
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        /** Chain ID. */
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        /** Proof that can be used to verify the signature. */
        proof: z.ZodMiniOptional<z.ZodMiniUnknown>;
        /** Whether the signature is valid. */
        valid: z.ZodMiniBoolean<boolean>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
//# sourceMappingURL=rpc.d.ts.map