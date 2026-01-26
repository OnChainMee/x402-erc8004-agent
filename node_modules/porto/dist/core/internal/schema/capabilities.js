import * as z from 'zod/mini';
import * as Token from '../schema/token.js';
import * as Permissions from './permissions.js';
import * as u from './utils.js';
export var atomic;
(function (atomic) {
    atomic.GetCapabilitiesResponse = z.object({
        status: z.union([z.literal('supported'), z.literal('unsupported')]),
    });
})(atomic || (atomic = {}));
export var createAccount;
(function (createAccount) {
    createAccount.Request = z.union([
        z.boolean(),
        z.object({
            chainId: z.optional(u.number()),
            label: z.optional(z.string()),
        }),
    ]);
})(createAccount || (createAccount = {}));
export var signInWithEthereum;
(function (signInWithEthereum) {
    signInWithEthereum.Request = u.oneOf([
        /** Standard EIP-4361 request object. */
        z.object({
            chainId: z.optional(z.number()),
            domain: z.optional(z.string()),
            expirationTime: z.optional(z.date()),
            issuedAt: z.optional(z.date()),
            nonce: z.string(),
            notBefore: z.optional(z.date()),
            requestId: z.optional(z.string()),
            resources: z.optional(z.readonly(z.array(z.string()))),
            scheme: z.optional(z.string()),
            statement: z.optional(z.string()),
            uri: z.optional(z.string()),
            version: z.optional(z.literal('1')),
        }),
        /**
         * EIP-4361 request object with an additional `authUrl` field, used
         * to fetch and infer the `nonce`.
         */
        z.object({
            authUrl: z.union([
                z.string(),
                z.object({
                    logout: z.string(),
                    nonce: z.string(),
                    verify: z.string(),
                }),
            ]),
            chainId: z.optional(u.number()),
            domain: z.optional(z.string()),
            expirationTime: z.optional(z.date()),
            issuedAt: z.optional(z.date()),
            notBefore: z.optional(z.date()),
            requestId: z.optional(z.string()),
            resources: z.optional(z.readonly(z.array(z.string()))),
            scheme: z.optional(z.string()),
            statement: z.optional(z.string()),
            uri: z.optional(z.string()),
            version: z.optional(z.literal('1')),
        }),
    ]);
    signInWithEthereum.Response = z.object({
        message: z.string(),
        signature: u.hex(),
        token: z.optional(z.string()),
    });
})(signInWithEthereum || (signInWithEthereum = {}));
export var feeToken;
(function (feeToken) {
    feeToken.GetCapabilitiesResponse = z.object({
        supported: z.boolean(),
        tokens: z.readonly(z.array(Token.Token)),
    });
    feeToken.Request = z.union([Token.Symbol, u.address()]);
})(feeToken || (feeToken = {}));
export var grantPermissions;
(function (grantPermissions) {
    grantPermissions.Request = Permissions.Request;
})(grantPermissions || (grantPermissions = {}));
export var merchant;
(function (merchant) {
    merchant.GetCapabilitiesResponse = z.object({
        supported: z.boolean(),
    });
})(merchant || (merchant = {}));
export var permissions;
(function (permissions) {
    permissions.GetCapabilitiesResponse = z.object({
        supported: z.boolean(),
    });
    permissions.Request = z.object({
        id: z.optional(z.union([u.hex(), z.null()])),
    });
    permissions.Response = z.readonly(z.array(Permissions.Permissions));
})(permissions || (permissions = {}));
export var preCalls;
(function (preCalls) {
    preCalls.Request = z.readonly(z.array(z.object({
        context: z.unknown(),
        signature: u.hex(),
    })));
    preCalls.Response = preCalls.Request;
})(preCalls || (preCalls = {}));
export var merchantUrl;
(function (merchantUrl) {
    merchantUrl.Request = z.string();
})(merchantUrl || (merchantUrl = {}));
export var requiredFunds;
(function (requiredFunds) {
    requiredFunds.GetCapabilitiesResponse = z.object({
        supported: z.boolean(),
        tokens: z.readonly(z.array(Token.Token)),
    });
    requiredFunds.Request = z.readonly(z.array(u.oneOf([
        z.object({
            address: u.address(),
            value: u.bigint(),
        }),
        z.object({
            symbol: Token.Symbol,
            value: z
                .union([
                z.templateLiteral([z.number(), '.', z.number()]),
                z.templateLiteral([z.number()]),
            ])
                .check(z.regex(/^\d+(\.\d+)?$/)),
        }),
    ])));
})(requiredFunds || (requiredFunds = {}));
//# sourceMappingURL=capabilities.js.map