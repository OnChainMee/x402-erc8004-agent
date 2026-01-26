import * as z from 'zod/mini';
export declare const CallPermission: z.ZodMiniObject<{
    /** The selector of the function this permission applies to. */
    selector: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /** The address of the contract this permission applies to. */
    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /** Permission type. */
    type: z.ZodMiniLiteral<"call">;
}, z.core.$strip>;
export type CallPermission = z.infer<typeof CallPermission>;
export declare const SpendPermission: z.ZodMiniObject<{
    /** The maximum amount that can be spent in the given period. */
    limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
    /** The period of the limit. */
    period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
    /** The token this permission applies to. If `None`, defaults to native token (ETH). */
    token: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
    /** Permission type. */
    type: z.ZodMiniLiteral<"spend">;
}, z.core.$strip>;
export type SpendPermission = z.infer<typeof SpendPermission>;
export declare const Permission: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
    /** The selector of the function this permission applies to. */
    selector: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /** The address of the contract this permission applies to. */
    to: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /** Permission type. */
    type: z.ZodMiniLiteral<"call">;
}, z.core.$strip>, z.ZodMiniObject<{
    /** The maximum amount that can be spent in the given period. */
    limit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
    /** The period of the limit. */
    period: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"minute">, z.ZodMiniLiteral<"hour">, z.ZodMiniLiteral<"day">, z.ZodMiniLiteral<"week">, z.ZodMiniLiteral<"month">, z.ZodMiniLiteral<"year">]>;
    /** The token this permission applies to. If `None`, defaults to native token (ETH). */
    token: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
    /** Permission type. */
    type: z.ZodMiniLiteral<"spend">;
}, z.core.$strip>]>;
export type Permission = z.infer<typeof Permission>;
//# sourceMappingURL=permission.d.ts.map