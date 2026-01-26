"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/shared/index.ts
var shared_exports = {};
__export(shared_exports, {
  Base64EncodedRegex: () => Base64EncodedRegex,
  computeRoutePatterns: () => computeRoutePatterns,
  decodeXPaymentResponse: () => decodeXPaymentResponse,
  findMatchingPaymentRequirements: () => findMatchingPaymentRequirements,
  findMatchingRoute: () => findMatchingRoute,
  getDefaultAsset: () => getDefaultAsset,
  getNetworkId: () => getNetworkId,
  processPriceToAtomicAmount: () => processPriceToAtomicAmount,
  safeBase64Decode: () => safeBase64Decode,
  safeBase64Encode: () => safeBase64Encode,
  svm: () => svm_exports2,
  toJsonSafe: () => toJsonSafe
});
module.exports = __toCommonJS(shared_exports);

// src/shared/json.ts
function toJsonSafe(data) {
  if (typeof data !== "object") {
    throw new Error("Data is not an object");
  }
  function convert(value) {
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      return Object.fromEntries(Object.entries(value).map(([key, val]) => [key, convert(val)]));
    }
    if (Array.isArray(value)) {
      return value.map(convert);
    }
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  }
  return convert(data);
}

// src/shared/base64.ts
var Base64EncodedRegex = /^[A-Za-z0-9+/]*={0,2}$/;
function safeBase64Encode(data) {
  if (typeof globalThis !== "undefined" && typeof globalThis.btoa === "function") {
    return globalThis.btoa(data);
  }
  return Buffer.from(data).toString("base64");
}
function safeBase64Decode(data) {
  if (typeof globalThis !== "undefined" && typeof globalThis.atob === "function") {
    return globalThis.atob(data);
  }
  return Buffer.from(data, "base64").toString("utf-8");
}

// src/types/shared/money.ts
var import_zod = require("zod");
var moneySchema = import_zod.z.union([import_zod.z.string().transform((x) => x.replace(/[^0-9.-]+/g, "")), import_zod.z.number()]).pipe(import_zod.z.coerce.number().min(1e-4).max(999999999));

// src/types/shared/network.ts
var import_zod2 = require("zod");
var NetworkSchema = import_zod2.z.enum([
  "abstract",
  "abstract-testnet",
  "base-sepolia",
  "base",
  "avalanche-fuji",
  "avalanche",
  "iotex",
  "solana-devnet",
  "solana",
  "sei",
  "sei-testnet",
  "polygon",
  "polygon-amoy",
  "peaq",
  "story",
  "educhain",
  "skale-base-sepolia"
]);
var SupportedEVMNetworks = [
  "abstract",
  "abstract-testnet",
  "base-sepolia",
  "base",
  "avalanche-fuji",
  "avalanche",
  "iotex",
  "sei",
  "sei-testnet",
  "polygon",
  "polygon-amoy",
  "peaq",
  "story",
  "educhain",
  "skale-base-sepolia"
];
var EvmNetworkToChainId = /* @__PURE__ */ new Map([
  ["abstract", 2741],
  ["abstract-testnet", 11124],
  ["base-sepolia", 84532],
  ["base", 8453],
  ["avalanche-fuji", 43113],
  ["avalanche", 43114],
  ["iotex", 4689],
  ["sei", 1329],
  ["sei-testnet", 1328],
  ["polygon", 137],
  ["polygon-amoy", 80002],
  ["peaq", 3338],
  ["story", 1514],
  ["educhain", 41923],
  ["skale-base-sepolia", 324705682]
]);
var SupportedSVMNetworks = ["solana-devnet", "solana"];
var SvmNetworkToChainId = /* @__PURE__ */ new Map([
  ["solana-devnet", 103],
  ["solana", 101]
]);
var ChainIdToNetwork = Object.fromEntries(
  [...SupportedEVMNetworks, ...SupportedSVMNetworks].map((network) => [
    EvmNetworkToChainId.get(network),
    network
  ])
);

// src/types/shared/evm/wallet.ts
var import_viem = require("viem");
var import_chains = require("viem/chains");
var import_accounts = require("viem/accounts");
var import_zksync = require("viem/zksync");

// src/shared/svm/wallet.ts
var import_kit2 = require("@solana/kit");
var import_base = require("@scure/base");

// src/shared/svm/rpc.ts
var import_kit = require("@solana/kit");
var DEVNET_RPC_URL = "https://api.devnet.solana.com";
var MAINNET_RPC_URL = "https://api.mainnet-beta.solana.com";
var DEVNET_WS_URL = "wss://api.devnet.solana.com";
var MAINNET_WS_URL = "wss://api.mainnet-beta.solana.com";
function createDevnetRpcClient(url) {
  return (0, import_kit.createSolanaRpc)(
    url ? (0, import_kit.devnet)(url) : (0, import_kit.devnet)(DEVNET_RPC_URL)
  );
}
function createMainnetRpcClient(url) {
  return (0, import_kit.createSolanaRpc)(
    url ? (0, import_kit.mainnet)(url) : (0, import_kit.mainnet)(MAINNET_RPC_URL)
  );
}
function getRpcClient(network, url) {
  if (network === "solana-devnet") {
    return createDevnetRpcClient(url);
  } else if (network === "solana") {
    return createMainnetRpcClient(url);
  } else {
    throw new Error("Invalid network");
  }
}
function getRpcSubscriptions(network, url) {
  if (network === "solana-devnet") {
    return (0, import_kit.createSolanaRpcSubscriptions)((0, import_kit.devnet)(url ? httpToWs(url) : DEVNET_WS_URL));
  } else if (network === "solana") {
    return (0, import_kit.createSolanaRpcSubscriptions)((0, import_kit.mainnet)(url ? httpToWs(url) : MAINNET_WS_URL));
  } else {
    throw new Error("Invalid network");
  }
}
function httpToWs(url) {
  if (url.startsWith("http")) {
    return url.replace("http", "ws");
  }
  return url;
}

// src/shared/svm/wallet.ts
function createSvmConnectedClient(network) {
  if (!SupportedSVMNetworks.find((n) => n === network)) {
    throw new Error(`Unsupported SVM network: ${network}`);
  }
  return getRpcClient(network);
}
async function createSignerFromBase58(privateKey) {
  const bytes = import_base.base58.decode(privateKey);
  if (bytes.length === 64) {
    return await (0, import_kit2.createKeyPairSignerFromBytes)(bytes);
  }
  if (bytes.length === 32) {
    return await (0, import_kit2.createKeyPairSignerFromPrivateKeyBytes)(bytes);
  }
  throw new Error(`Unexpected key length: ${bytes.length}. Expected 32 or 64 bytes.`);
}
function isSignerWallet(wallet) {
  return typeof wallet === "object" && wallet !== null && (0, import_kit2.isTransactionSigner)(wallet);
}

// src/types/shared/evm/config.ts
var config = {
  "84532": {
    usdcAddress: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
    usdcName: "USDC"
  },
  "8453": {
    usdcAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    usdcName: "USD Coin"
  },
  "43113": {
    usdcAddress: "0x5425890298aed601595a70AB815c96711a31Bc65",
    usdcName: "USD Coin"
  },
  "43114": {
    usdcAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    usdcName: "USD Coin"
  },
  "4689": {
    usdcAddress: "0xcdf79194c6c285077a58da47641d4dbe51f63542",
    usdcName: "Bridged USDC"
  },
  // solana devnet
  "103": {
    usdcAddress: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
    usdcName: "USDC"
  },
  // solana mainnet
  "101": {
    usdcAddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    usdcName: "USDC"
  },
  "1328": {
    usdcAddress: "0x4fcf1784b31630811181f670aea7a7bef803eaed",
    usdcName: "USDC"
  },
  "1329": {
    usdcAddress: "0xe15fc38f6d8c56af07bbcbe3baf5708a2bf42392",
    usdcName: "USDC"
  },
  "137": {
    usdcAddress: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
    usdcName: "USD Coin"
  },
  "80002": {
    usdcAddress: "0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582",
    usdcName: "USDC"
  },
  "3338": {
    usdcAddress: "0xbbA60da06c2c5424f03f7434542280FCAd453d10",
    usdcName: "USDC"
  },
  "2741": {
    usdcAddress: "0x84a71ccd554cc1b02749b35d22f684cc8ec987e1",
    usdcName: "Bridged USDC"
  },
  "11124": {
    usdcAddress: "0xe4C7fBB0a626ed208021ccabA6Be1566905E2dFc",
    usdcName: "Bridged USDC"
  },
  "1514": {
    usdcAddress: "0xF1815bd50389c46847f0Bda824eC8da914045D14",
    usdcName: "Bridged USDC"
  },
  "41923": {
    usdcAddress: "0x12a272A581feE5577A5dFa371afEB4b2F3a8C2F8",
    usdcName: "Bridged USDC (Stargate)"
  },
  "324705682": {
    usdcAddress: "0x2e08028E3C4c2356572E096d8EF835cD5C6030bD",
    usdcName: "Bridged USDC (SKALE Bridge)"
  }
};

// src/types/shared/svm/regex.ts
var SvmAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

// src/shared/network.ts
function getNetworkId(network) {
  if (EvmNetworkToChainId.has(network)) {
    return EvmNetworkToChainId.get(network);
  }
  if (SvmNetworkToChainId.has(network)) {
    return SvmNetworkToChainId.get(network);
  }
  throw new Error(`Unsupported network: ${network}`);
}

// src/types/verify/x402Specs.ts
var import_zod3 = require("zod");
var EvmMaxAtomicUnits = 18;
var EvmAddressRegex = /^0x[0-9a-fA-F]{40}$/;
var MixedAddressRegex = /^0x[a-fA-F0-9]{40}|[A-Za-z0-9][A-Za-z0-9-]{0,34}[A-Za-z0-9]$/;
var HexEncoded64ByteRegex = /^0x[0-9a-fA-F]{64}$/;
var EvmSignatureRegex = /^0x[0-9a-fA-F]+$/;
var schemes = ["exact"];
var x402Versions = [1];
var ErrorReasons = [
  "insufficient_funds",
  "invalid_exact_evm_payload_authorization_valid_after",
  "invalid_exact_evm_payload_authorization_valid_before",
  "invalid_exact_evm_payload_authorization_value",
  "invalid_exact_evm_payload_signature",
  "invalid_exact_evm_payload_undeployed_smart_wallet",
  "invalid_exact_evm_payload_recipient_mismatch",
  "invalid_exact_svm_payload_transaction",
  "invalid_exact_svm_payload_transaction_amount_mismatch",
  "invalid_exact_svm_payload_transaction_create_ata_instruction",
  "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee",
  "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset",
  "invalid_exact_svm_payload_transaction_instructions",
  "invalid_exact_svm_payload_transaction_instructions_length",
  "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction",
  "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction",
  "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high",
  "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked",
  "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked",
  "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts",
  "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds",
  "invalid_exact_svm_payload_transaction_not_a_transfer_instruction",
  "invalid_exact_svm_payload_transaction_receiver_ata_not_found",
  "invalid_exact_svm_payload_transaction_sender_ata_not_found",
  "invalid_exact_svm_payload_transaction_simulation_failed",
  "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata",
  "invalid_network",
  "invalid_payload",
  "invalid_payment_requirements",
  "invalid_scheme",
  "invalid_payment",
  "payment_expired",
  "unsupported_scheme",
  "invalid_x402_version",
  "invalid_transaction_state",
  "invalid_x402_version",
  "settle_exact_svm_block_height_exceeded",
  "settle_exact_svm_transaction_confirmation_timed_out",
  "unsupported_scheme",
  "unexpected_settle_error",
  "unexpected_verify_error"
];
var isInteger = (value) => Number.isInteger(Number(value)) && Number(value) >= 0;
var hasMaxLength = (maxLength) => (value) => value.length <= maxLength;
var EvmOrSvmAddress = import_zod3.z.string().regex(EvmAddressRegex).or(import_zod3.z.string().regex(SvmAddressRegex));
var mixedAddressOrSvmAddress = import_zod3.z.string().regex(MixedAddressRegex).or(import_zod3.z.string().regex(SvmAddressRegex));
var PaymentRequirementsSchema = import_zod3.z.object({
  scheme: import_zod3.z.enum(schemes),
  network: NetworkSchema,
  maxAmountRequired: import_zod3.z.string().refine(isInteger),
  resource: import_zod3.z.string().url(),
  description: import_zod3.z.string(),
  mimeType: import_zod3.z.string(),
  outputSchema: import_zod3.z.record(import_zod3.z.any()).optional(),
  payTo: EvmOrSvmAddress,
  maxTimeoutSeconds: import_zod3.z.number().int(),
  asset: mixedAddressOrSvmAddress,
  extra: import_zod3.z.record(import_zod3.z.any()).optional()
});
var ExactEvmPayloadAuthorizationSchema = import_zod3.z.object({
  from: import_zod3.z.string().regex(EvmAddressRegex),
  to: import_zod3.z.string().regex(EvmAddressRegex),
  value: import_zod3.z.string().refine(isInteger).refine(hasMaxLength(EvmMaxAtomicUnits)),
  validAfter: import_zod3.z.string().refine(isInteger),
  validBefore: import_zod3.z.string().refine(isInteger),
  nonce: import_zod3.z.string().regex(HexEncoded64ByteRegex)
});
var ExactEvmPayloadSchema = import_zod3.z.object({
  signature: import_zod3.z.string().regex(EvmSignatureRegex),
  authorization: ExactEvmPayloadAuthorizationSchema
});
var ExactSvmPayloadSchema = import_zod3.z.object({
  transaction: import_zod3.z.string().regex(Base64EncodedRegex)
});
var PaymentPayloadSchema = import_zod3.z.object({
  x402Version: import_zod3.z.number().refine((val) => x402Versions.includes(val)),
  scheme: import_zod3.z.enum(schemes),
  network: NetworkSchema,
  payload: import_zod3.z.union([ExactEvmPayloadSchema, ExactSvmPayloadSchema])
});
var x402ResponseSchema = import_zod3.z.object({
  x402Version: import_zod3.z.number().refine((val) => x402Versions.includes(val)),
  error: import_zod3.z.enum(ErrorReasons).optional(),
  accepts: import_zod3.z.array(PaymentRequirementsSchema).optional(),
  payer: import_zod3.z.string().regex(MixedAddressRegex).optional()
});
var HTTPVerbsSchema = import_zod3.z.enum(["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"]);
var HTTPRequestStructureSchema = import_zod3.z.object({
  type: import_zod3.z.literal("http"),
  method: HTTPVerbsSchema,
  queryParams: import_zod3.z.record(import_zod3.z.string(), import_zod3.z.string()).optional(),
  bodyType: import_zod3.z.enum(["json", "form-data", "multipart-form-data", "text", "binary"]).optional(),
  bodyFields: import_zod3.z.record(import_zod3.z.string(), import_zod3.z.any()).optional(),
  headerFields: import_zod3.z.record(import_zod3.z.string(), import_zod3.z.any()).optional()
});
var RequestStructureSchema = import_zod3.z.discriminatedUnion("type", [
  HTTPRequestStructureSchema
  // MCPRequestStructureSchema,
  // OpenAPIRequestStructureSchema,
]);
var DiscoveredResourceSchema = import_zod3.z.object({
  resource: import_zod3.z.string(),
  type: import_zod3.z.enum(["http"]),
  x402Version: import_zod3.z.number().refine((val) => x402Versions.includes(val)),
  accepts: import_zod3.z.array(PaymentRequirementsSchema),
  lastUpdated: import_zod3.z.date(),
  metadata: import_zod3.z.record(import_zod3.z.any()).optional()
});
var SettleRequestSchema = import_zod3.z.object({
  paymentPayload: PaymentPayloadSchema,
  paymentRequirements: PaymentRequirementsSchema
});
var VerifyRequestSchema = import_zod3.z.object({
  paymentPayload: PaymentPayloadSchema,
  paymentRequirements: PaymentRequirementsSchema
});
var VerifyResponseSchema = import_zod3.z.object({
  isValid: import_zod3.z.boolean(),
  invalidReason: import_zod3.z.enum(ErrorReasons).optional(),
  payer: EvmOrSvmAddress.optional()
});
var SettleResponseSchema = import_zod3.z.object({
  success: import_zod3.z.boolean(),
  errorReason: import_zod3.z.enum(ErrorReasons).optional(),
  payer: EvmOrSvmAddress.optional(),
  transaction: import_zod3.z.string().regex(MixedAddressRegex),
  network: NetworkSchema
});
var ListDiscoveryResourcesRequestSchema = import_zod3.z.object({
  type: import_zod3.z.string().optional(),
  limit: import_zod3.z.number().optional(),
  offset: import_zod3.z.number().optional()
});
var ListDiscoveryResourcesResponseSchema = import_zod3.z.object({
  x402Version: import_zod3.z.number().refine((val) => x402Versions.includes(val)),
  items: import_zod3.z.array(DiscoveredResourceSchema),
  pagination: import_zod3.z.object({
    limit: import_zod3.z.number(),
    offset: import_zod3.z.number(),
    total: import_zod3.z.number()
  })
});
var SupportedPaymentKindSchema = import_zod3.z.object({
  x402Version: import_zod3.z.number().refine((val) => x402Versions.includes(val)),
  scheme: import_zod3.z.enum(schemes),
  network: NetworkSchema,
  extra: import_zod3.z.record(import_zod3.z.any()).optional()
});
var SupportedPaymentKindsResponseSchema = import_zod3.z.object({
  kinds: import_zod3.z.array(SupportedPaymentKindSchema)
});

// src/types/verify/facilitator.ts
var import_zod4 = require("zod");
var facilitatorRequestSchema = import_zod4.z.object({
  paymentHeader: import_zod4.z.string(),
  paymentRequirements: PaymentRequirementsSchema
});

// src/shared/evm/usdc.ts
function getUsdcChainConfigForChain(chainId) {
  return config[chainId.toString()];
}

// src/shared/middleware.ts
function computeRoutePatterns(routes) {
  const normalizedRoutes = Object.fromEntries(
    Object.entries(routes).map(([pattern, value]) => [
      pattern,
      typeof value === "string" || typeof value === "number" ? { price: value, network: "base-sepolia" } : value
    ])
  );
  return Object.entries(normalizedRoutes).map(([pattern, routeConfig]) => {
    const [verb, path] = pattern.includes(" ") ? pattern.split(/\s+/) : ["*", pattern];
    if (!path) {
      throw new Error(`Invalid route pattern: ${pattern}`);
    }
    return {
      verb: verb.toUpperCase(),
      pattern: new RegExp(
        `^${path.replace(/[$()+.?^{|}]/g, "\\$&").replace(/\*/g, ".*?").replace(/\[([^\]]+)\]/g, "[^/]+").replace(/\//g, "\\/")}$`,
        "i"
      ),
      config: routeConfig
    };
  });
}
function findMatchingRoute(routePatterns, path, method) {
  let normalizedPath;
  try {
    const pathWithoutQuery = path.split(/[?#]/)[0];
    const decodedPath = decodeURIComponent(pathWithoutQuery);
    normalizedPath = decodedPath.replace(/\\/g, "/").replace(/\/+/g, "/").replace(/(.+?)\/+$/, "$1");
  } catch {
    return void 0;
  }
  const matchingRoutes = routePatterns.filter(({ pattern, verb }) => {
    const matchesPath = pattern.test(normalizedPath);
    const upperMethod = method.toUpperCase();
    const matchesVerb = verb === "*" || upperMethod === verb;
    const result = matchesPath && matchesVerb;
    return result;
  });
  if (matchingRoutes.length === 0) {
    return void 0;
  }
  const matchingRoute = matchingRoutes.reduce(
    (a, b) => b.pattern.source.length > a.pattern.source.length ? b : a
  );
  return matchingRoute;
}
function getDefaultAsset(network) {
  const chainId = getNetworkId(network);
  const usdc = getUsdcChainConfigForChain(chainId);
  if (!usdc) {
    throw new Error(`Unable to get default asset on ${network}`);
  }
  return {
    address: usdc.usdcAddress,
    decimals: 6,
    eip712: {
      name: usdc.usdcName,
      version: "2"
    }
  };
}
function processPriceToAtomicAmount(price, network) {
  let maxAmountRequired;
  let asset;
  if (typeof price === "string" || typeof price === "number") {
    const parsedAmount = moneySchema.safeParse(price);
    if (!parsedAmount.success) {
      return {
        error: `Invalid price (price: ${price}). Must be in the form "$3.10", 0.10, "0.001", ${parsedAmount.error}`
      };
    }
    const parsedUsdAmount = parsedAmount.data;
    asset = getDefaultAsset(network);
    maxAmountRequired = (parsedUsdAmount * 10 ** asset.decimals).toString();
  } else {
    maxAmountRequired = price.amount;
    asset = price.asset;
  }
  return {
    maxAmountRequired,
    asset
  };
}
function findMatchingPaymentRequirements(paymentRequirements, payment) {
  return paymentRequirements.find(
    (value) => value.scheme === payment.scheme && value.network === payment.network
  );
}
function decodeXPaymentResponse(header) {
  const decoded = safeBase64Decode(header);
  return JSON.parse(decoded);
}

// src/shared/svm/index.ts
var svm_exports2 = {};
__export(svm_exports2, {
  createDevnetRpcClient: () => createDevnetRpcClient,
  createMainnetRpcClient: () => createMainnetRpcClient,
  createSignerFromBase58: () => createSignerFromBase58,
  createSvmConnectedClient: () => createSvmConnectedClient,
  decodeTransactionFromPayload: () => decodeTransactionFromPayload,
  getRpcClient: () => getRpcClient,
  getRpcSubscriptions: () => getRpcSubscriptions,
  getTokenPayerFromTransaction: () => getTokenPayerFromTransaction,
  isSignerWallet: () => isSignerWallet,
  signAndSimulateTransaction: () => signAndSimulateTransaction,
  signTransactionWithSigner: () => signTransactionWithSigner
});

// src/shared/svm/transaction.ts
var import_kit3 = require("@solana/kit");
var import_token = require("@solana-program/token");
var import_token_2022 = require("@solana-program/token-2022");
function decodeTransactionFromPayload(svmPayload) {
  try {
    const base64Encoder = (0, import_kit3.getBase64Encoder)();
    const transactionBytes = base64Encoder.encode(svmPayload.transaction);
    const transactionDecoder = (0, import_kit3.getTransactionDecoder)();
    return transactionDecoder.decode(transactionBytes);
  } catch (error) {
    console.error("error", error);
    throw new Error("invalid_exact_svm_payload_transaction");
  }
}
function getTokenPayerFromTransaction(transaction) {
  const compiled = (0, import_kit3.getCompiledTransactionMessageDecoder)().decode(
    transaction.messageBytes
  );
  const staticAccounts = compiled.staticAccounts ?? [];
  const instructions = compiled.instructions ?? [];
  for (const ix of instructions) {
    const programIndex = ix.programAddressIndex;
    const programAddress = staticAccounts[programIndex].toString();
    if (programAddress === import_token.TOKEN_PROGRAM_ADDRESS.toString() || programAddress === import_token_2022.TOKEN_2022_PROGRAM_ADDRESS.toString()) {
      const accountIndices = ix.accountIndices ?? [];
      if (accountIndices.length >= 4) {
        const ownerIndex = accountIndices[3];
        const ownerAddress = staticAccounts[ownerIndex].toString();
        if (ownerAddress) return ownerAddress;
      }
    }
  }
  return "";
}
async function signAndSimulateTransaction(signer, transaction, rpc) {
  const signedTransaction = await signTransactionWithSigner(signer, transaction);
  const base64EncodedTransaction = (0, import_kit3.getBase64EncodedWireTransaction)(signedTransaction);
  const simulateTxConfig = {
    sigVerify: true,
    replaceRecentBlockhash: false,
    commitment: "confirmed",
    encoding: "base64",
    accounts: void 0,
    innerInstructions: void 0,
    minContextSlot: void 0
  };
  const simulateResult = await rpc.simulateTransaction(base64EncodedTransaction, simulateTxConfig).send();
  return simulateResult;
}
async function signTransactionWithSigner(signer, transaction) {
  if ((0, import_kit3.isTransactionModifyingSigner)(signer)) {
    const [modifiedTransaction] = await signer.modifyAndSignTransactions([transaction]);
    if (!modifiedTransaction) {
      throw new Error("transaction_signer_failed_to_return_transaction");
    }
    return modifiedTransaction;
  }
  if ((0, import_kit3.isTransactionPartialSigner)(signer)) {
    const [signatures] = await signer.signTransactions([
      transaction
    ]);
    if (!signatures) {
      throw new Error("transaction_signer_failed_to_return_signatures");
    }
    return mergeTransactionSignatures(transaction, signatures);
  }
  throw new Error("transaction_signer_must_support_offline_signing");
}
function mergeTransactionSignatures(transaction, signatures) {
  return Object.freeze({
    ...transaction,
    signatures: Object.freeze({
      ...transaction.signatures,
      ...signatures
    })
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Base64EncodedRegex,
  computeRoutePatterns,
  decodeXPaymentResponse,
  findMatchingPaymentRequirements,
  findMatchingRoute,
  getDefaultAsset,
  getNetworkId,
  processPriceToAtomicAmount,
  safeBase64Decode,
  safeBase64Encode,
  svm,
  toJsonSafe
});
//# sourceMappingURL=index.js.map