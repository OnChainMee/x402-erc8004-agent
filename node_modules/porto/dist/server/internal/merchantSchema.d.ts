import * as z from 'zod/mini';
import * as RpcRequest from '../../core/internal/schema/request.js';
export { wallet_prepareCalls } from '../../core/internal/relay/schema/rpc.js';
export { validate } from '../../core/internal/schema/request.js';
export declare const JsonRpcRequest: z.ZodMiniIntersection<z.ZodMiniDiscriminatedUnion<[z.ZodMiniObject<{
    method: z.ZodMiniLiteral<"wallet_prepareCalls">;
    params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
        calls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            data: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
            value: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
        }, z.core.$strip>>>;
        capabilities: z.ZodMiniObject<{
            authorizeKeys: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
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
            }, z.core.$strip>>>>;
            meta: z.ZodMiniObject<{
                feePayer: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                feeToken: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                nonce: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
            }, z.core.$strip>;
            preCall: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                nonce: z.ZodMiniTemplateLiteral<`0x${string}`>;
                signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>>>>;
            requiredFunds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            }, z.core.$strip>>>>;
            revokeKeys: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>>>>;
        }, z.core.$strip>;
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        from: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        key: z.ZodMiniOptional<z.ZodMiniObject<{
            prehash: z.ZodMiniBoolean<boolean>;
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthnp256">]>;
        }, z.core.$strip>>;
    }, z.core.$strip>], null>>;
}, z.core.$strip>], "method">, z.ZodMiniObject<{
    _returnType: z.ZodMiniUnknown;
    id: z.ZodMiniNumber<number>;
    jsonrpc: z.ZodMiniLiteral<"2.0">;
}, z.core.$strip>>;
export type JsonRpcRequest = RpcRequest.WithDecoded<typeof JsonRpcRequest>;
//# sourceMappingURL=merchantSchema.d.ts.map