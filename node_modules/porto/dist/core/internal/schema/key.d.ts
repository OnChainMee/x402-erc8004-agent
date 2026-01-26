import * as z from 'zod/mini';
export declare const Base: z.ZodMiniObject<{
    /** Chain ID the key belongs to. If not provided, the key is valid on all chains. */
    chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
    /** The expiry of the key. */
    expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
    /** The hash of the key. */
    hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /** The id of the key. */
    id: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /** Whether digests should be prehashed. */
    prehash: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    /** Public key. */
    publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /** Role. */
    role: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"admin">, z.ZodMiniLiteral<"session">]>;
    /** Key type. */
    type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
}, z.core.$strip>;
export type Base = z.infer<typeof Base>;
export declare const CallPermissions: z.ZodMiniReadonly<z.ZodMiniArray<Omit<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
export type CallPermissions = z.infer<typeof CallPermissions>;
export declare const FeeToken: z.ZodMiniObject<{
    limit: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`${number}.${number}`>, z.ZodMiniTemplateLiteral<`${number}`>]>;
    symbol: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"native">, z.ZodMiniString<string>]>>;
}, z.core.$strip>;
export type FeeToken = z.infer<typeof FeeToken>;
export declare const SignatureVerificationPermission: z.ZodMiniObject<{
    addresses: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
}, z.core.$strip>;
export type SignatureVerificationPermission = z.infer<typeof SignatureVerificationPermission>;
export declare const SpendPermissions: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
    limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
    period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
    token: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
}, z.core.$strip>>>;
export type SpendPermissions = z.infer<typeof SpendPermissions>;
export declare const Permissions: z.ZodMiniObject<{
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
}, z.core.$strip>;
export type Permissions = z.infer<typeof Permissions>;
export declare const WithPermissions: z.ZodMiniObject<{
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
    /** Chain ID the key belongs to. If not provided, the key is valid on all chains. */
    chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
    /** The expiry of the key. */
    expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
    /** The hash of the key. */
    hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /** The id of the key. */
    id: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /** Whether digests should be prehashed. */
    prehash: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    /** Public key. */
    publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /** Role. */
    role: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"admin">, z.ZodMiniLiteral<"session">]>;
    /** Key type. */
    type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"address">, z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthn-p256">]>;
}, z.core.$strip>;
export type WithPermissions = z.infer<typeof WithPermissions>;
//# sourceMappingURL=key.d.ts.map