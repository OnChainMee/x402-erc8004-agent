import * as z from 'zod/mini';
export declare const Token: z.ZodMiniObject<{
    address: z.ZodMiniTemplateLiteral<`0x${string}`>;
    decimals: z.ZodMiniNumber<number>;
    feeToken: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    interop: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    nativeRate: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
    symbol: z.ZodMiniString<string>;
    uid: z.ZodMiniString<string>;
}, z.core.$strip>;
export type Token = z.infer<typeof Token>;
export declare const Symbol: z.ZodMiniString<string>;
export type Symbol = z.infer<typeof Symbol>;
//# sourceMappingURL=token.d.ts.map