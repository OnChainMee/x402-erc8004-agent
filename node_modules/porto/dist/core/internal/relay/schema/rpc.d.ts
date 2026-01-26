/**
 * JSON-RPC Schemas.
 *
 * @see https://github.com/ithacaxyz/relay/tree/main/src/types/rpc
 */
import * as z from 'zod/mini';
export declare namespace account_getOnrampContactInfo {
    /** Parameters for `account_getOnrampContactInfo` request. */
    const Parameters: z.ZodMiniObject<{
        /** Address to get onramp status for. */
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        secret: z.ZodMiniString<string>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `account_getOnrampContactInfo`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"account_getOnrampContactInfo">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            /** Address to get onramp status for. */
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            secret: z.ZodMiniString<string>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `account_getOnrampContactInfo`. */
    const Response: z.ZodMiniObject<{
        email: z.ZodMiniOptional<z.ZodMiniString<string>>;
        phone: z.ZodMiniOptional<z.ZodMiniString<string>>;
        phoneVerifiedAt: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace account_onrampStatus {
    /** Parameters for `account_onrampStatus` request. */
    const Parameters: z.ZodMiniObject<{
        /** Address to get onramp status for. */
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `account_onrampStatus`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"account_onrampStatus">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            /** Address to get onramp status for. */
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `account_onrampStatus`. */
    const Response: z.ZodMiniObject<{
        email: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
        phone: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace account_resendVerifyPhone {
    /** Parameters for `account_resendVerifyPhone` request. */
    const Parameters: z.ZodMiniObject<{
        /** Phone to set for wallet address. */
        phone: z.ZodMiniString<string>;
        /** Address to set phone. */
        walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `account_resendVerifyPhone`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"account_resendVerifyPhone">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            /** Phone to set for wallet address. */
            phone: z.ZodMiniString<string>;
            /** Address to set phone. */
            walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `account_resendVerifyPhone`. */
    const Response: z.ZodMiniNull;
    type Response = z.infer<typeof Response>;
}
export declare namespace account_setEmail {
    /** Parameters for `account_setEmail` request. */
    const Parameters: z.ZodMiniObject<{
        /** Email to set for wallet address. */
        email: z.ZodMiniString<string>;
        /** Address to set email. */
        walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `account_setEmail`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"account_setEmail">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            /** Email to set for wallet address. */
            email: z.ZodMiniString<string>;
            /** Address to set email. */
            walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `account_setEmail`. */
    const Response: z.ZodMiniNull;
    type Response = z.infer<typeof Response>;
}
export declare namespace account_setPhone {
    /** Parameters for `account_setPhone` request. */
    const Parameters: z.ZodMiniObject<{
        /** Phone to set for wallet address. */
        phone: z.ZodMiniString<string>;
        /** Address to set phone. */
        walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `account_setPhone`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"account_setPhone">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            /** Phone to set for wallet address. */
            phone: z.ZodMiniString<string>;
            /** Address to set phone. */
            walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `account_setPhone`. */
    const Response: z.ZodMiniNull;
    type Response = z.infer<typeof Response>;
}
export declare namespace account_verifyEmail {
    /** Parameters for `account_verifyEmail` request. */
    const Parameters: z.ZodMiniObject<{
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        email: z.ZodMiniString<string>;
        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        token: z.ZodMiniString<string>;
        walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `account_verifyEmail`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"account_verifyEmail">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            email: z.ZodMiniString<string>;
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            token: z.ZodMiniString<string>;
            walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `account_verifyEmail`. */
    const Response: z.ZodMiniNull;
    type Response = z.infer<typeof Response>;
}
export declare namespace account_verifyPhone {
    /** Parameters for `account_verifyPhone` request. */
    const Parameters: z.ZodMiniObject<{
        code: z.ZodMiniString<string>;
        phone: z.ZodMiniString<string>;
        walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `account_verifyPhone`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"account_verifyPhone">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            code: z.ZodMiniString<string>;
            phone: z.ZodMiniString<string>;
            walletAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `account_verifyPhone`. */
    const Response: z.ZodMiniNull;
    type Response = z.infer<typeof Response>;
}
export declare namespace health {
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"health">;
        params: z.ZodMiniUndefined;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniObject<{
        quoteSigner: z.ZodMiniTemplateLiteral<`0x${string}`>;
        status: z.ZodMiniString<string>;
        version: z.ZodMiniString<string>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_addFaucetFunds {
    const Parameters: z.ZodMiniObject<{
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        tokenAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
        value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_addFaucetFunds">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            tokenAddress: z.ZodMiniTemplateLiteral<`0x${string}`>;
            value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniObject<{
        message: z.ZodMiniOptional<z.ZodMiniString<string>>;
        transactionHash: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_getAccounts {
    /** Parameters for `wallet_getAccounts` request. */
    const Parameters: z.ZodMiniObject<{
        /** Target chain ID. */
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        /** Key identifier. */
        id: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `wallet_getAccounts`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_getAccounts">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            /** Target chain ID. */
            chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            /** Key identifier. */
            id: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `wallet_getAccounts`. */
    const Response: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
        /** Account address. */
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        /** Keys authorized on the account. */
        keys: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
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
    }, z.core.$strip>>>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_getAuthorization {
    const Parameters: z.ZodMiniObject<{
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_getAuthorization">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniObject<{
        authorization: z.ZodMiniObject<{
            r: z.ZodMiniTemplateLiteral<`0x${string}`>;
            s: z.ZodMiniTemplateLiteral<`0x${string}`>;
            yParity: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        }, z.core.$strip>;
        data: z.ZodMiniTemplateLiteral<`0x${string}`>;
        to: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_getCapabilities {
    /** Request for `wallet_getCapabilities`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_getCapabilities">;
        params: z.ZodMiniOptional<z.ZodMiniTuple<readonly [z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniNumber<number>>>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniObject<{
        contracts: z.ZodMiniObject<{
            /** Account implementation address. */
            accountImplementation: z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                version: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniNull]>>;
            }, z.core.$strip>;
            /** Account proxy address. */
            accountProxy: z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                version: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniNull]>>;
            }, z.core.$strip>;
            /** Legacy account implementation address. */
            legacyAccountImplementations: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                version: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniNull]>>;
            }, z.core.$strip>>>;
            /** Legacy orchestrator address. */
            legacyOrchestrators: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                orchestrator: z.ZodMiniObject<{
                    address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    version: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniNull]>>;
                }, z.core.$strip>;
                simulator: z.ZodMiniObject<{
                    address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    version: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniNull]>>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                version: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniNull]>>;
            }, z.core.$strip>]>>>;
            /** Orchestrator address. */
            orchestrator: z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                version: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniNull]>>;
            }, z.core.$strip>;
            /** Simulator address. */
            simulator: z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                version: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniNull]>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        fees: z.ZodMiniObject<{
            /** Fee recipient address. */
            quoteConfig: z.ZodMiniObject<{
                /** Sets a constant rate for the price oracle. Used for testing. */
                constantRate: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniNumber<number>, z.ZodMiniNull]>>;
                /** Gas estimate configuration. */
                gas: z.ZodMiniOptional<z.ZodMiniObject<{
                    /** Extra buffer added to Intent gas estimates. */
                    intentBuffer: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                    /** Extra buffer added to transaction gas estimates. */
                    txBuffer: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
                }, z.core.$strip>>;
                /** The lifetime of a price rate. */
                rateTtl: z.ZodMiniNumber<number>;
                /** The lifetime of a fee quote. */
                ttl: z.ZodMiniNumber<number>;
            }, z.core.$strip>;
            /** Quote configuration. */
            recipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
            /** Tokens the fees can be paid in. */
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
}
export declare namespace wallet_getAssets {
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
    const Price: z.ZodMiniObject<{
        currency: z.ZodMiniString<string>;
        value: z.ZodMiniCodec<z.ZodMiniString<string>, z.ZodMiniNumber<number>>;
    }, z.core.$strip>;
    type Price = z.infer<typeof Price>;
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
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniObject<{
        id: z.ZodMiniString<string>;
        receipts: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            blockHash: z.ZodMiniTemplateLiteral<`0x${string}`>;
            blockNumber: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            gasUsed: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            logs: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                data: z.ZodMiniTemplateLiteral<`0x${string}`>;
                topics: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
            }, z.core.$strip>>>;
            status: z.ZodMiniTemplateLiteral<`0x${string}`>;
            transactionHash: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>>>>;
        status: z.ZodMiniNumber<number>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_getKeys {
    /** Parameters for `wallet_getKeys` request. */
    const Parameters: z.ZodMiniObject<{
        /** The address to get the keys for. */
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        /** Target chain IDs. */
        chainIds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>>>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `wallet_getKeys`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_getKeys">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            /** The address to get the keys for. */
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            /** Target chain IDs. */
            chainIds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>>>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `wallet_getKeys`. */
    const Response: z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
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
    }, z.core.$strip>>>>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_prepareCalls {
    /** Capabilities for `wallet_prepareCalls` request. */
    const Capabilities: z.ZodMiniObject<{
        /** Keys to authorize on the account. */
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
        /** Metadata for the call bundle. */
        meta: z.ZodMiniObject<{
            feePayer: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            feeToken: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            nonce: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
        }, z.core.$strip>;
        /** Whether the call bundle is to be considered a preCall. */
        preCall: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        /** Optional preCalls to execute before signature verification. */
        preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
            executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
            nonce: z.ZodMiniTemplateLiteral<`0x${string}`>;
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>>>>;
        /** Required funds on the target chain. */
        requiredFunds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        }, z.core.$strip>>>>;
        /** Keys to revoke on the account. */
        revokeKeys: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>>>>;
    }, z.core.$strip>;
    type Capabilities = z.infer<typeof Capabilities>;
    /** Capabilities for `wallet_prepareCalls` response. */
    const ResponseCapabilities: z.ZodMiniObject<{
        /** Asset diff. */
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
        /** Keys authorized on the account. */
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
        /** Digest for the fee payer. */
        feePayerDigest: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        /** Fee signature. */
        feeSignature: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        /** Fee totals. */
        feeTotals: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniObject<{
            currency: z.ZodMiniString<string>;
            value: z.ZodMiniString<string>;
        }, z.core.$strip>>>;
        /** Keys revoked on the account. */
        revokeKeys: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>>>>>;
    }, z.core.$strip>;
    type ResponseCapabilities = z.infer<typeof ResponseCapabilities>;
    /** Parameters for `wallet_prepareCalls` request. */
    const Parameters: z.ZodMiniObject<{
        /** Capabilities for the account. */
        calls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
            data: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            to: z.ZodMiniTemplateLiteral<`0x${string}`>;
            value: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
        }, z.core.$strip>>>;
        /** The calls to prepare. */
        capabilities: z.ZodMiniObject<{
            /** Keys to authorize on the account. */
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
            /** Metadata for the call bundle. */
            meta: z.ZodMiniObject<{
                feePayer: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                feeToken: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                nonce: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
            }, z.core.$strip>;
            /** Whether the call bundle is to be considered a preCall. */
            preCall: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            /** Optional preCalls to execute before signature verification. */
            preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                nonce: z.ZodMiniTemplateLiteral<`0x${string}`>;
                signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>>>>;
            /** Required funds on the target chain. */
            requiredFunds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            }, z.core.$strip>>>>;
            /** Keys to revoke on the account. */
            revokeKeys: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>>>>;
        }, z.core.$strip>;
        /** The chain ID of the call bundle. */
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        /** The address of the account to prepare the calls for. */
        from: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        /** Key that will be used to sign the call bundle. */
        key: z.ZodMiniOptional<z.ZodMiniObject<{
            prehash: z.ZodMiniBoolean<boolean>;
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthnp256">]>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `wallet_prepareCalls`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_prepareCalls">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            /** Capabilities for the account. */
            calls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                data: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                to: z.ZodMiniTemplateLiteral<`0x${string}`>;
                value: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
            }, z.core.$strip>>>;
            /** The calls to prepare. */
            capabilities: z.ZodMiniObject<{
                /** Keys to authorize on the account. */
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
                /** Metadata for the call bundle. */
                meta: z.ZodMiniObject<{
                    feePayer: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    feeToken: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    nonce: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
                }, z.core.$strip>;
                /** Whether the call bundle is to be considered a preCall. */
                preCall: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                /** Optional preCalls to execute before signature verification. */
                preCalls: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    nonce: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>>>>;
                /** Required funds on the target chain. */
                requiredFunds: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    value: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
                }, z.core.$strip>>>>;
                /** Keys to revoke on the account. */
                revokeKeys: z.ZodMiniOptional<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                    hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>>>>;
            }, z.core.$strip>;
            /** The chain ID of the call bundle. */
            chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            /** The address of the account to prepare the calls for. */
            from: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            /** Key that will be used to sign the call bundle. */
            key: z.ZodMiniOptional<z.ZodMiniObject<{
                prehash: z.ZodMiniBoolean<boolean>;
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthnp256">]>;
            }, z.core.$strip>>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `wallet_prepareCalls`. */
    const Response: z.ZodMiniObject<{
        /** Capabilities. */
        capabilities: z.ZodMiniObject<{
            /** Asset diff. */
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
            /** Keys authorized on the account. */
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
            /** Digest for the fee payer. */
            feePayerDigest: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            /** Fee signature. */
            feeSignature: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            /** Fee totals. */
            feeTotals: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniObject<{
                currency: z.ZodMiniString<string>;
                value: z.ZodMiniString<string>;
            }, z.core.$strip>>>;
            /** Keys revoked on the account. */
            revokeKeys: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
                hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>>>>>;
        }, z.core.$strip>;
        /** Quote for the call bundle. */
        context: z.ZodMiniObject<{
            /** Quote for the call bundle. */
            preCall: z.ZodMiniOptional<z.ZodMiniObject<{
                chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                eoa: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                executionData: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                nonce: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                signature: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            }, z.core.$strip>>;
            /** The call bundle. */
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
        /** Digest to sign over. */
        digest: z.ZodMiniTemplateLiteral<`0x${string}`>;
        /** Key that will be used to sign the call bundle. */
        key: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
            prehash: z.ZodMiniBoolean<boolean>;
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthnp256">]>;
        }, z.core.$strip>>>;
        /** Signature of the response for verifying the integrity of Relay response. */
        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        /** EIP-712 typed data digest. */
        typedData: z.ZodMiniObject<{
            domain: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                chainId: z.ZodMiniUnion<readonly [z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>, z.ZodMiniNumber<number>]>;
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
    /** Capabilities for `wallet_prepareUpgradeAccount` request. */
    const Capabilities: z.ZodMiniObject<{
        /** Keys to authorize on the account. */
        authorizeKeys: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
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
    }, z.core.$strip>;
    type Capabilities = z.infer<typeof Capabilities>;
    /** Parameters for `wallet_prepareUpgradeAccount` request. */
    const Parameters: z.ZodMiniObject<{
        /** Address of the EOA to upgrade. */
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        /** Chain ID to initialize the account on. */
        capabilities: z.ZodMiniObject<{
            /** Keys to authorize on the account. */
            authorizeKeys: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
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
        }, z.core.$strip>;
        /** Capabilities. */
        chainId: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
        /** Contract address to delegate to. */
        delegation: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `wallet_prepareUpgradeAccount`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_prepareUpgradeAccount">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            /** Address of the EOA to upgrade. */
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            /** Chain ID to initialize the account on. */
            capabilities: z.ZodMiniObject<{
                /** Keys to authorize on the account. */
                authorizeKeys: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
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
            }, z.core.$strip>;
            /** Capabilities. */
            chainId: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
            /** Contract address to delegate to. */
            delegation: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `wallet_prepareUpgradeAccount`. */
    const Response: z.ZodMiniObject<{
        /** Capabilities. */
        capabilities: z.ZodMiniObject<{
            /** Keys to authorize on the account. */
            authorizeKeys: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
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
        }, z.core.$strip>;
        /** Chain ID to initialize the account on. */
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        /** Context. */
        context: z.ZodMiniObject<{
            /** Address of the EOA to upgrade. */
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            /** Unsigned authorization object to be signed by the EOA root key. */
            authorization: z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            }, z.core.$strip>;
            /** Chain ID to initialize the account on. */
            chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            /** Unsigned pre-call to be signed by the EOA root key. */
            preCall: z.ZodMiniObject<{
                eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                nonce: z.ZodMiniTemplateLiteral<`0x${string}`>;
                signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        /** Digests to sign over. */
        digests: z.ZodMiniObject<{
            /** Digest of the authorization object. */
            auth: z.ZodMiniTemplateLiteral<`0x${string}`>;
            /** Digest of the pre-call. */
            exec: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>;
        /** EIP-712 typed data digest. */
        typedData: z.ZodMiniObject<{
            domain: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                chainId: z.ZodMiniUnion<readonly [z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>, z.ZodMiniNumber<number>]>;
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
export declare namespace wallet_feeTokens {
    /** Request for `wallet_feeTokens`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_feeTokens">;
        params: z.ZodMiniOptional<z.ZodMiniUndefined>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `wallet_feeTokens`. */
    const Response: z.ZodMiniRecord<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        decimals: z.ZodMiniNumber<number>;
        nativeRate: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>>;
        symbol: z.ZodMiniString<string>;
    }, z.core.$strip>>>>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_sendPreparedCalls {
    /** Parameters for `wallet_sendPreparedCalls` request. */
    const Parameters: z.ZodMiniObject<{
        /** Capabilities. */
        capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
            /** Fee signature. */
            feeSignature: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
        }, z.core.$strip>>;
        /** Quote for the call bundle. */
        context: z.ZodMiniObject<{
            /** The call bundle. */
            preCall: z.ZodMiniOptional<z.ZodMiniObject<{
                chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                eoa: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                executionData: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                nonce: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                signature: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            }, z.core.$strip>>;
            /** Quote for the call bundle. */
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
        /** Key that was used to sign the call bundle. */
        key: z.ZodMiniOptional<z.ZodMiniObject<{
            prehash: z.ZodMiniBoolean<boolean>;
            publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthnp256">]>;
        }, z.core.$strip>>;
        /** Signature. */
        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `wallet_sendPreparedCalls`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_sendPreparedCalls">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            /** Capabilities. */
            capabilities: z.ZodMiniOptional<z.ZodMiniObject<{
                /** Fee signature. */
                feeSignature: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
            }, z.core.$strip>>;
            /** Quote for the call bundle. */
            context: z.ZodMiniObject<{
                /** The call bundle. */
                preCall: z.ZodMiniOptional<z.ZodMiniObject<{
                    chainId: z.ZodMiniOptional<z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>>;
                    eoa: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    executionData: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    nonce: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                    signature: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
                }, z.core.$strip>>;
                /** Quote for the call bundle. */
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
            /** Key that was used to sign the call bundle. */
            key: z.ZodMiniOptional<z.ZodMiniObject<{
                prehash: z.ZodMiniBoolean<boolean>;
                publicKey: z.ZodMiniTemplateLiteral<`0x${string}`>;
                type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"p256">, z.ZodMiniLiteral<"secp256k1">, z.ZodMiniLiteral<"webauthnp256">]>;
            }, z.core.$strip>>;
            /** Signature. */
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `wallet_sendPreparedCalls`. */
    const Response: z.ZodMiniObject<{
        /** The ID of the call bundle. */
        id: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_upgradeAccount {
    const Parameters: z.ZodMiniObject<{
        /** Context. */
        context: z.ZodMiniObject<{
            /** Address of the EOA to upgrade. */
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            /** Unsigned authorization object to be signed by the EOA root key. */
            authorization: z.ZodMiniObject<{
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            }, z.core.$strip>;
            /** Chain ID to initialize the account on. */
            chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            /** Unsigned pre-call to be signed by the EOA root key. */
            preCall: z.ZodMiniObject<{
                eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                nonce: z.ZodMiniTemplateLiteral<`0x${string}`>;
                signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        /** Signatures of the `wallet_prepareUpgradeAccount` digests. */
        signatures: z.ZodMiniObject<{
            auth: z.ZodMiniTemplateLiteral<`0x${string}`>;
            exec: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `wallet_sendPreparedCalls`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_upgradeAccount">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            /** Context. */
            context: z.ZodMiniObject<{
                /** Address of the EOA to upgrade. */
                address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                /** Unsigned authorization object to be signed by the EOA root key. */
                authorization: z.ZodMiniObject<{
                    address: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                    nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                }, z.core.$strip>;
                /** Chain ID to initialize the account on. */
                chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
                /** Unsigned pre-call to be signed by the EOA root key. */
                preCall: z.ZodMiniObject<{
                    eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    nonce: z.ZodMiniTemplateLiteral<`0x${string}`>;
                    signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            /** Signatures of the `wallet_prepareUpgradeAccount` digests. */
            signatures: z.ZodMiniObject<{
                auth: z.ZodMiniTemplateLiteral<`0x${string}`>;
                exec: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    const Response: z.ZodMiniUndefined;
    type Response = z.infer<typeof Response>;
}
export declare namespace wallet_verifySignature {
    const Parameters: z.ZodMiniObject<{
        /** Account address. */
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        /** Chain ID of the account with the given key configured. */
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        /** Digest of the message to verify. */
        digest: z.ZodMiniTemplateLiteral<`0x${string}`>;
        /** Signature to verify. */
        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>;
    type Parameters = z.infer<typeof Parameters>;
    /** Request for `wallet_verifySignature`. */
    const Request: z.ZodMiniObject<{
        method: z.ZodMiniLiteral<"wallet_verifySignature">;
        params: z.ZodMiniReadonly<z.ZodMiniTuple<readonly [z.ZodMiniObject<{
            /** Account address. */
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            /** Chain ID of the account with the given key configured. */
            chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            /** Digest of the message to verify. */
            digest: z.ZodMiniTemplateLiteral<`0x${string}`>;
            /** Signature to verify. */
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>], null>>;
    }, z.core.$strip>;
    type Request = z.infer<typeof Request>;
    /** Response for `wallet_verifySignature`. */
    const Response: z.ZodMiniObject<{
        /** Proof that can be used to verify the signature. */
        proof: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
            /** Address of an account (either delegated or stored) that the signature was verified against. */
            account: z.ZodMiniTemplateLiteral<`0x${string}`>;
            /** Initialization precall. Provided, if account is a stored account which has not been delegated. */
            initPreCall: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
                eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
                executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
                nonce: z.ZodMiniTemplateLiteral<`0x${string}`>;
                signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            }, z.core.$strip>>>;
            /** The key hash that signed the digest. */
            keyHash: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>>>;
        /** Whether the signature is valid. */
        valid: z.ZodMiniBoolean<boolean>;
    }, z.core.$strip>;
    type Response = z.infer<typeof Response>;
}
//# sourceMappingURL=rpc.d.ts.map