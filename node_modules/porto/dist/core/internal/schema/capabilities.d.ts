import * as z from 'zod/mini';
export declare namespace atomic {
    const GetCapabilitiesResponse: z.ZodMiniObject<{
        status: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"supported">, z.ZodMiniLiteral<"unsupported">]>;
    }, z.core.$strip>;
    type GetCapabilitiesResponse = z.infer<typeof GetCapabilitiesResponse>;
}
export declare namespace createAccount {
    const Request: z.ZodMiniUnion<readonly [z.ZodMiniBoolean<boolean>, z.ZodMiniObject<{
        chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
        label: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.core.$strip>]>;
    type Request = z.infer<typeof Request>;
}
export declare namespace signInWithEthereum {
    const Request: Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
    };
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniObject<{
        message: z.ZodMiniString<string>;
        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        token: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace feeToken {
    const GetCapabilitiesResponse: z.ZodMiniObject<{
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
    type GetCapabilitiesResponse = z.infer<typeof GetCapabilitiesResponse>;
    const Request: z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniTemplateLiteral<`0x${string}`>]>;
    type Request = z.infer<typeof Request>;
}
export declare namespace grantPermissions {
    const Request: z.ZodMiniObject<{
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
    type Request = z.infer<typeof Request>;
}
export declare namespace merchant {
    const GetCapabilitiesResponse: z.ZodMiniObject<{
        supported: z.ZodMiniBoolean<boolean>;
    }, z.core.$strip>;
    type GetCapabilitiesResponse = z.infer<typeof GetCapabilitiesResponse>;
}
export declare namespace permissions {
    const GetCapabilitiesResponse: z.ZodMiniObject<{
        supported: z.ZodMiniBoolean<boolean>;
    }, z.core.$strip>;
    type GetCapabilitiesResponse = z.infer<typeof GetCapabilitiesResponse>;
    const Request: z.ZodMiniObject<{
        id: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
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
export declare namespace preCalls {
    const Request: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
        context: z.ZodMiniUnknown;
        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>>>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
        context: z.ZodMiniUnknown;
        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>>>;
    type Response = z.infer<typeof Response>;
}
export declare namespace merchantUrl {
    const Request: z.ZodMiniString<string>;
    type Request = z.infer<typeof Request>;
}
export declare namespace requiredFunds {
    const GetCapabilitiesResponse: z.ZodMiniObject<{
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
    type GetCapabilitiesResponse = z.infer<typeof GetCapabilitiesResponse>;
    const Request: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
    }>>;
    type Request = z.infer<typeof Request>;
}
//# sourceMappingURL=capabilities.d.ts.map