/**
 * RPC account key.
 *
 * @see https://github.com/ithacaxyz/relay/blob/main/src/types/key.rs
 */
import * as z from 'zod/mini';
export declare const Key: z.ZodMiniObject<{
    /** The expiry of the key. */
    expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
    /** Whether the digest was prehashed. */
    prehash: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    /** Public key. */
    publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /** Role. */
    role: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"admin">, z.ZodMiniLiteral<"normal">]>;
    /** Key type. */
    type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthnp256">]>;
}, z.core.$strip>;
export type Key = z.infer<typeof Key>;
export declare const WithPermissions: z.ZodMiniObject<{
    /** Represents key permissions. */
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
    /** The expiry of the key. */
    expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
    /** Whether the digest was prehashed. */
    prehash: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    /** Public key. */
    publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /** Role. */
    role: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"admin">, z.ZodMiniLiteral<"normal">]>;
    /** Key type. */
    type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthnp256">]>;
}, z.core.$strip>;
export type WithPermissions = z.infer<typeof WithPermissions>;
//# sourceMappingURL=key.d.ts.map