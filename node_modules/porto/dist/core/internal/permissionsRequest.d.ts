import type * as Address from 'ox/Address';
import type * as Hex from 'ox/Hex';
import type * as z from 'zod/mini';
import * as Key from '../../viem/Key.js';
import type * as Tokens from './tokens.js';
export declare const Schema: z.ZodMiniObject<{
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
export type PermissionsRequest = z.infer<typeof Schema>;
export declare function fromKey(key: Key.Key): PermissionsRequest;
export declare namespace fromKey {
    type Options = {
        address: Address.Address;
        chainId?: Hex.Hex | undefined;
    };
}
export declare function toKey(request: PermissionsRequest | undefined, options?: toKey.Options): Promise<Key.Key | undefined>;
export declare namespace toKey {
    type Options = {
        chainId?: number | undefined;
        feeTokens?: Tokens.Tokens | undefined;
    };
}
//# sourceMappingURL=permissionsRequest.d.ts.map