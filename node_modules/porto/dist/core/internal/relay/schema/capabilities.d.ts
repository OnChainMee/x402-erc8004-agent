/**
 * RPC capabilities.
 *
 * @see https://github.com/ithacaxyz/relay/blob/main/src/types/capabilities.rs
 */
import * as z from 'zod/mini';
export declare namespace assetDiffs {
    const AssetDiffAsset: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
    }, z.core.$strip>]>;
    type AssetDiffAsset = z.infer<typeof AssetDiffAsset>;
    const Response: z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
    }, z.core.$strip>]>>>], null>>>>>;
    type Response = z.infer<typeof Response>;
}
export declare namespace authorizeKeys {
    /** Represents a key authorization request. */
    const Request: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
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
    }, z.core.$strip>>>;
    type Request = z.infer<typeof Request>;
    /** Represents a key authorization response. */
    const Response: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
        /** The hash of the authorized key. */
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
    }, z.core.$strip>>>;
    type Response = z.infer<typeof Response>;
}
export declare namespace feeTotals {
    const Response: z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniObject<{
        currency: z.ZodMiniString<string>;
        value: z.ZodMiniString<string>;
    }, z.core.$strip>>;
    type Response = z.infer<typeof Response>;
}
export declare namespace meta {
    /** Represents metadata for a call bundle. */
    const Request: z.ZodMiniObject<{
        /** The address of the fee payer. */
        feePayer: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        /** The token to pa  for the call bundle. If `None`, defaults to native token (ETH). */
        feeToken: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        /** The nonce for the bundle. */
        nonce: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
}
export declare namespace requiredFunds {
    const Request: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
    }, z.core.$strip>>>;
    type Request = z.infer<typeof Request>;
}
export declare namespace revokeKeys {
    /** Represents a key revocation request. */
    const Request: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
        /** The hash of the key to revoke. */
        hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>>>;
    type Request = z.infer<typeof Request>;
    /** Represents a key revocation response. */
    const Response: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
        /** The hash of the revoked key. */
        hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>>>;
    type Response = z.infer<typeof Response>;
}
//# sourceMappingURL=capabilities.d.ts.map