"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenApiPoliciesMethods = exports.OpenApiSolanaMethods = exports.OpenApiEvmMethods = exports.CdpOpenApiClient = void 0;
__exportStar(require("./generated/coinbaseDeveloperPlatformAPIs.schemas.js"), exports);
__exportStar(require("./generated/evm-accounts/evm-accounts.js"), exports);
__exportStar(require("./generated/evm-smart-accounts/evm-smart-accounts.js"), exports);
__exportStar(require("./generated/evm-swaps/evm-swaps.js"), exports);
__exportStar(require("./generated/evm-token-balances/evm-token-balances.js"), exports);
__exportStar(require("./generated/solana-accounts/solana-accounts.js"), exports);
__exportStar(require("./generated/solana-token-balances/solana-token-balances.js"), exports);
__exportStar(require("./generated/faucets/faucets.js"), exports);
__exportStar(require("./generated/policy-engine/policy-engine.js"), exports);
__exportStar(require("./generated/onramp/onramp.js"), exports);
__exportStar(require("./generated/onchain-data/onchain-data.js"), exports);
__exportStar(require("./generated/end-user-accounts/end-user-accounts.js"), exports);
__exportStar(require("./generated/x402-facilitator/x402-facilitator.js"), exports);
__exportStar(require("./generated/sql-api-alpha/sql-api-alpha.js"), exports);
const cdpApiClient_js_1 = require("./cdpApiClient.js");
const endUserAccounts = __importStar(require("./generated/end-user-accounts/end-user-accounts.js"));
const evm = __importStar(require("./generated/evm-accounts/evm-accounts.js"));
const evmSmartAccounts = __importStar(require("./generated/evm-smart-accounts/evm-smart-accounts.js"));
const evmSwaps = __importStar(require("./generated/evm-swaps/evm-swaps.js"));
const evmTokenBalances = __importStar(require("./generated/evm-token-balances/evm-token-balances.js"));
const faucets = __importStar(require("./generated/faucets/faucets.js"));
const onchainData = __importStar(require("./generated/onchain-data/onchain-data.js"));
const policies = __importStar(require("./generated/policy-engine/policy-engine.js"));
const solana = __importStar(require("./generated/solana-accounts/solana-accounts.js"));
const solanaTokenBalances = __importStar(require("./generated/solana-token-balances/solana-token-balances.js"));
const webhooks = __importStar(require("./generated/webhooks/webhooks.js"));
exports.CdpOpenApiClient = {
    ...evm,
    ...evmSmartAccounts,
    ...evmSwaps,
    ...evmTokenBalances,
    ...webhooks,
    ...solana,
    ...solanaTokenBalances,
    ...faucets,
    ...onchainData,
    ...policies,
    ...endUserAccounts,
    configure: cdpApiClient_js_1.configure,
};
exports.OpenApiEvmMethods = {
    ...evm,
    ...evmSmartAccounts,
    ...evmSwaps,
    ...evmTokenBalances,
    requestEvmFaucet: faucets.requestEvmFaucet,
};
exports.OpenApiSolanaMethods = {
    ...solana,
    requestSolanaFaucet: faucets.requestSolanaFaucet,
};
exports.OpenApiPoliciesMethods = {
    ...policies,
};
//# sourceMappingURL=index.js.map