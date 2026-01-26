import * as z from 'zod/mini';
export declare const PreCall: z.ZodMiniObject<{
    /**
     * The user's address.
     *
     * This can be set to `address(0)`, which allows it to be
     * coalesced to the parent Intent's EOA.
     */
    eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /**
     * An encoded array of calls, using ERC7579 batch execution encoding.
     *
     * `abi.encode(calls)`, where `calls` is of type `Call[]`.
     * This allows for more efficient safe forwarding to the EOA.
     */
    executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /**
     * Per delegated EOA. Same logic as the `nonce` in Intent.
     *
     * A nonce of `type(uint256).max` skips the check, incrementing,
     * and the emission of the {IntentExecuted} event.
     */
    nonce: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /**
     * The wrapped signature.
     *
     * `abi.encodePacked(innerSignature, keyHash, prehash)`.
     */
    signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
}, z.core.$strip>;
export type PreCall = z.infer<typeof PreCall>;
export declare const Context: z.ZodMiniObject<{
    chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
    /**
     * The user's address.
     *
     * This can be set to `address(0)`, which allows it to be
     * coalesced to the parent Intent's EOA.
     */
    eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /**
     * An encoded array of calls, using ERC7579 batch execution encoding.
     *
     * `abi.encode(calls)`, where `calls` is of type `Call[]`.
     * This allows for more efficient safe forwarding to the EOA.
     */
    executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /**
     * Per delegated EOA. Same logic as the `nonce` in Intent.
     *
     * A nonce of `type(uint256).max` skips the check, incrementing,
     * and the emission of the {IntentExecuted} event.
     */
    nonce: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /**
     * The wrapped signature.
     *
     * `abi.encodePacked(innerSignature, keyHash, prehash)`.
     */
    signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
}, z.core.$strip>;
export type Context = z.infer<typeof Context>;
//# sourceMappingURL=preCall.d.ts.map