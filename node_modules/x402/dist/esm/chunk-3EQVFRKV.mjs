import {
  getUsdcChainConfigForChain,
  usdcABI
} from "./chunk-K4TZLEOT.mjs";
import {
  __export,
  config
} from "./chunk-EMSAO3AI.mjs";

// src/types/shared/money.ts
import { z } from "zod";
var moneySchema = z.union([z.string().transform((x) => x.replace(/[^0-9.-]+/g, "")), z.number()]).pipe(z.coerce.number().min(1e-4).max(999999999));

// src/types/shared/network.ts
import { z as z2 } from "zod";
var NetworkSchema = z2.enum([
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
import { createPublicClient, createWalletClient, http, publicActions } from "viem";
import {
  baseSepolia,
  avalancheFuji,
  base,
  sei,
  seiTestnet,
  polygon,
  polygonAmoy,
  peaq,
  avalanche,
  iotexTestnet,
  iotex,
  abstract,
  abstractTestnet,
  story,
  eduChain
} from "viem/chains";

// src/types/shared/custom-chains/eip155-324705682.ts
var skaleBaseSepolia = {
  id: 324705682,
  name: "SKALE Base Sepolia",
  nativeCurrency: {
    name: "Credits",
    symbol: "CREDITS",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://base-sepolia-testnet.skalenodes.com/v1/jubilant-horrible-ancha"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://base-sepolia-testnet-explorer.skalenodes.com",
      apiUrl: "https://base-sepolia-testnet-explorer.skalenodes.com/api"
    }
  }
};

// src/types/shared/evm/wallet.ts
import { privateKeyToAccount } from "viem/accounts";
import { eip712WalletActions } from "viem/zksync";
function createConnectedClient(network) {
  const chain = getChainFromNetwork(network);
  return createPublicClient({
    chain,
    transport: http()
  }).extend(publicActions);
}
function createClientSepolia() {
  return createConnectedClient("base-sepolia");
}
function createClientAvalancheFuji() {
  return createConnectedClient("avalanche-fuji");
}
function createSigner(network, privateKey) {
  const chain = getChainFromNetwork(network);
  const walletClient = createWalletClient({
    chain,
    transport: http(),
    account: privateKeyToAccount(privateKey)
  });
  if (isZkStackChain(chain)) {
    return walletClient.extend(publicActions).extend(eip712WalletActions());
  }
  return walletClient.extend(publicActions);
}
function createSignerSepolia(privateKey) {
  return createSigner("base-sepolia", privateKey);
}
function createSignerAvalancheFuji(privateKey) {
  return createSigner("avalanche-fuji", privateKey);
}
function isSignerWallet(wallet) {
  return typeof wallet === "object" && wallet !== null && "chain" in wallet && "transport" in wallet;
}
function isAccount(wallet) {
  const w = wallet;
  return typeof wallet === "object" && wallet !== null && typeof w.address === "string" && typeof w.type === "string" && // Check for essential signing capabilities
  typeof w.sign === "function" && typeof w.signMessage === "function" && typeof w.signTypedData === "function" && // Check for transaction signing (required by LocalAccount)
  typeof w.signTransaction === "function";
}
function getChainFromNetwork(network) {
  if (!network) {
    throw new Error("NETWORK environment variable is not set");
  }
  switch (network) {
    case "abstract":
      return abstract;
    case "abstract-testnet":
      return abstractTestnet;
    case "base":
      return base;
    case "base-sepolia":
      return baseSepolia;
    case "avalanche":
      return avalanche;
    case "avalanche-fuji":
      return avalancheFuji;
    case "sei":
      return sei;
    case "sei-testnet":
      return seiTestnet;
    case "polygon":
      return polygon;
    case "polygon-amoy":
      return polygonAmoy;
    case "peaq":
      return peaq;
    case "story":
      return story;
    case "educhain":
      return eduChain;
    case "iotex":
      return iotex;
    case "iotex-testnet":
      return iotexTestnet;
    case "skale-base-sepolia":
      return skaleBaseSepolia;
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
}
var ZKSTACK_CHAIN_IDS = /* @__PURE__ */ new Set([
  2741,
  // Abstract Mainnet
  11124
  // Abstract Sepolia Testnet
]);
function isZkStackChain(chain) {
  return ZKSTACK_CHAIN_IDS.has(chain.id);
}

// src/shared/svm/wallet.ts
import {
  createKeyPairSignerFromBytes,
  createKeyPairSignerFromPrivateKeyBytes,
  isTransactionSigner
} from "@solana/kit";
import { base58 } from "@scure/base";

// src/shared/svm/rpc.ts
import {
  createSolanaRpc,
  devnet,
  mainnet,
  createSolanaRpcSubscriptions
} from "@solana/kit";
var DEVNET_RPC_URL = "https://api.devnet.solana.com";
var MAINNET_RPC_URL = "https://api.mainnet-beta.solana.com";
var DEVNET_WS_URL = "wss://api.devnet.solana.com";
var MAINNET_WS_URL = "wss://api.mainnet-beta.solana.com";
function createDevnetRpcClient(url) {
  return createSolanaRpc(
    url ? devnet(url) : devnet(DEVNET_RPC_URL)
  );
}
function createMainnetRpcClient(url) {
  return createSolanaRpc(
    url ? mainnet(url) : mainnet(MAINNET_RPC_URL)
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
    return createSolanaRpcSubscriptions(devnet(url ? httpToWs(url) : DEVNET_WS_URL));
  } else if (network === "solana") {
    return createSolanaRpcSubscriptions(mainnet(url ? httpToWs(url) : MAINNET_WS_URL));
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
  const bytes = base58.decode(privateKey);
  if (bytes.length === 64) {
    return await createKeyPairSignerFromBytes(bytes);
  }
  if (bytes.length === 32) {
    return await createKeyPairSignerFromPrivateKeyBytes(bytes);
  }
  throw new Error(`Unexpected key length: ${bytes.length}. Expected 32 or 64 bytes.`);
}
function isSignerWallet2(wallet) {
  return typeof wallet === "object" && wallet !== null && isTransactionSigner(wallet);
}

// src/types/shared/wallet.ts
function createConnectedClient2(network) {
  if (SupportedEVMNetworks.find((n) => n === network)) {
    return createConnectedClient(network);
  }
  if (SupportedSVMNetworks.find((n) => n === network)) {
    return createSvmConnectedClient(network);
  }
  throw new Error(`Unsupported network: ${network}`);
}
function createSigner2(network, privateKey) {
  if (SupportedEVMNetworks.find((n) => n === network)) {
    return Promise.resolve(createSigner(network, privateKey));
  }
  if (SupportedSVMNetworks.find((n) => n === network)) {
    return createSignerFromBase58(privateKey);
  }
  throw new Error(`Unsupported network: ${network}`);
}
function isEvmSignerWallet(wallet) {
  return isSignerWallet(wallet) || isAccount(wallet);
}
function isSvmSignerWallet(wallet) {
  return isSignerWallet2(wallet);
}
function isMultiNetworkSigner(wallet) {
  return "evm" in wallet && "svm" in wallet;
}

// src/types/shared/evm/index.ts
var evm_exports = {};
__export(evm_exports, {
  authorizationPrimaryType: () => authorizationPrimaryType,
  authorizationTypes: () => authorizationTypes,
  config: () => config,
  createClientAvalancheFuji: () => createClientAvalancheFuji,
  createClientSepolia: () => createClientSepolia,
  createConnectedClient: () => createConnectedClient,
  createSigner: () => createSigner,
  createSignerAvalancheFuji: () => createSignerAvalancheFuji,
  createSignerSepolia: () => createSignerSepolia,
  getChainFromNetwork: () => getChainFromNetwork,
  isAccount: () => isAccount,
  isSignerWallet: () => isSignerWallet,
  isZkStackChain: () => isZkStackChain,
  usdcABI: () => usdcABI
});

// src/types/shared/evm/eip3009.ts
var authorizationTypes = {
  TransferWithAuthorization: [
    { name: "from", type: "address" },
    { name: "to", type: "address" },
    { name: "value", type: "uint256" },
    { name: "validAfter", type: "uint256" },
    { name: "validBefore", type: "uint256" },
    { name: "nonce", type: "bytes32" }
  ]
};
var authorizationPrimaryType = "TransferWithAuthorization";

// src/types/shared/svm/index.ts
var svm_exports = {};
__export(svm_exports, {
  SvmAddressRegex: () => SvmAddressRegex
});

// src/types/shared/svm/regex.ts
var SvmAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

// src/types/verify/x402Specs.ts
import { z as z3 } from "zod";

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

// src/types/verify/x402Specs.ts
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
var EvmOrSvmAddress = z3.string().regex(EvmAddressRegex).or(z3.string().regex(SvmAddressRegex));
var mixedAddressOrSvmAddress = z3.string().regex(MixedAddressRegex).or(z3.string().regex(SvmAddressRegex));
var PaymentRequirementsSchema = z3.object({
  scheme: z3.enum(schemes),
  network: NetworkSchema,
  maxAmountRequired: z3.string().refine(isInteger),
  resource: z3.string().url(),
  description: z3.string(),
  mimeType: z3.string(),
  outputSchema: z3.record(z3.any()).optional(),
  payTo: EvmOrSvmAddress,
  maxTimeoutSeconds: z3.number().int(),
  asset: mixedAddressOrSvmAddress,
  extra: z3.record(z3.any()).optional()
});
var ExactEvmPayloadAuthorizationSchema = z3.object({
  from: z3.string().regex(EvmAddressRegex),
  to: z3.string().regex(EvmAddressRegex),
  value: z3.string().refine(isInteger).refine(hasMaxLength(EvmMaxAtomicUnits)),
  validAfter: z3.string().refine(isInteger),
  validBefore: z3.string().refine(isInteger),
  nonce: z3.string().regex(HexEncoded64ByteRegex)
});
var ExactEvmPayloadSchema = z3.object({
  signature: z3.string().regex(EvmSignatureRegex),
  authorization: ExactEvmPayloadAuthorizationSchema
});
var ExactSvmPayloadSchema = z3.object({
  transaction: z3.string().regex(Base64EncodedRegex)
});
var PaymentPayloadSchema = z3.object({
  x402Version: z3.number().refine((val) => x402Versions.includes(val)),
  scheme: z3.enum(schemes),
  network: NetworkSchema,
  payload: z3.union([ExactEvmPayloadSchema, ExactSvmPayloadSchema])
});
var x402ResponseSchema = z3.object({
  x402Version: z3.number().refine((val) => x402Versions.includes(val)),
  error: z3.enum(ErrorReasons).optional(),
  accepts: z3.array(PaymentRequirementsSchema).optional(),
  payer: z3.string().regex(MixedAddressRegex).optional()
});
var HTTPVerbsSchema = z3.enum(["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"]);
var HTTPRequestStructureSchema = z3.object({
  type: z3.literal("http"),
  method: HTTPVerbsSchema,
  queryParams: z3.record(z3.string(), z3.string()).optional(),
  bodyType: z3.enum(["json", "form-data", "multipart-form-data", "text", "binary"]).optional(),
  bodyFields: z3.record(z3.string(), z3.any()).optional(),
  headerFields: z3.record(z3.string(), z3.any()).optional()
});
var RequestStructureSchema = z3.discriminatedUnion("type", [
  HTTPRequestStructureSchema
  // MCPRequestStructureSchema,
  // OpenAPIRequestStructureSchema,
]);
var DiscoveredResourceSchema = z3.object({
  resource: z3.string(),
  type: z3.enum(["http"]),
  x402Version: z3.number().refine((val) => x402Versions.includes(val)),
  accepts: z3.array(PaymentRequirementsSchema),
  lastUpdated: z3.date(),
  metadata: z3.record(z3.any()).optional()
});
var SettleRequestSchema = z3.object({
  paymentPayload: PaymentPayloadSchema,
  paymentRequirements: PaymentRequirementsSchema
});
var VerifyRequestSchema = z3.object({
  paymentPayload: PaymentPayloadSchema,
  paymentRequirements: PaymentRequirementsSchema
});
var VerifyResponseSchema = z3.object({
  isValid: z3.boolean(),
  invalidReason: z3.enum(ErrorReasons).optional(),
  payer: EvmOrSvmAddress.optional()
});
var SettleResponseSchema = z3.object({
  success: z3.boolean(),
  errorReason: z3.enum(ErrorReasons).optional(),
  payer: EvmOrSvmAddress.optional(),
  transaction: z3.string().regex(MixedAddressRegex),
  network: NetworkSchema
});
var ListDiscoveryResourcesRequestSchema = z3.object({
  type: z3.string().optional(),
  limit: z3.number().optional(),
  offset: z3.number().optional()
});
var ListDiscoveryResourcesResponseSchema = z3.object({
  x402Version: z3.number().refine((val) => x402Versions.includes(val)),
  items: z3.array(DiscoveredResourceSchema),
  pagination: z3.object({
    limit: z3.number(),
    offset: z3.number(),
    total: z3.number()
  })
});
var SupportedPaymentKindSchema = z3.object({
  x402Version: z3.number().refine((val) => x402Versions.includes(val)),
  scheme: z3.enum(schemes),
  network: NetworkSchema,
  extra: z3.record(z3.any()).optional()
});
var SupportedPaymentKindsResponseSchema = z3.object({
  kinds: z3.array(SupportedPaymentKindSchema)
});

// src/types/verify/facilitator.ts
import { z as z4 } from "zod";

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
  isSignerWallet: () => isSignerWallet2,
  signAndSimulateTransaction: () => signAndSimulateTransaction,
  signTransactionWithSigner: () => signTransactionWithSigner
});

// src/shared/svm/transaction.ts
import {
  getBase64EncodedWireTransaction,
  getBase64Encoder,
  getTransactionDecoder,
  getCompiledTransactionMessageDecoder,
  isTransactionModifyingSigner,
  isTransactionPartialSigner
} from "@solana/kit";
import { TOKEN_PROGRAM_ADDRESS } from "@solana-program/token";
import { TOKEN_2022_PROGRAM_ADDRESS } from "@solana-program/token-2022";
function decodeTransactionFromPayload(svmPayload) {
  try {
    const base64Encoder = getBase64Encoder();
    const transactionBytes = base64Encoder.encode(svmPayload.transaction);
    const transactionDecoder = getTransactionDecoder();
    return transactionDecoder.decode(transactionBytes);
  } catch (error) {
    console.error("error", error);
    throw new Error("invalid_exact_svm_payload_transaction");
  }
}
function getTokenPayerFromTransaction(transaction) {
  const compiled = getCompiledTransactionMessageDecoder().decode(
    transaction.messageBytes
  );
  const staticAccounts = compiled.staticAccounts ?? [];
  const instructions = compiled.instructions ?? [];
  for (const ix of instructions) {
    const programIndex = ix.programAddressIndex;
    const programAddress = staticAccounts[programIndex].toString();
    if (programAddress === TOKEN_PROGRAM_ADDRESS.toString() || programAddress === TOKEN_2022_PROGRAM_ADDRESS.toString()) {
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
  const base64EncodedTransaction = getBase64EncodedWireTransaction(signedTransaction);
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
  if (isTransactionModifyingSigner(signer)) {
    const [modifiedTransaction] = await signer.modifyAndSignTransactions([transaction]);
    if (!modifiedTransaction) {
      throw new Error("transaction_signer_failed_to_return_transaction");
    }
    return modifiedTransaction;
  }
  if (isTransactionPartialSigner(signer)) {
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

// src/types/verify/facilitator.ts
var facilitatorRequestSchema = z4.object({
  paymentHeader: z4.string(),
  paymentRequirements: PaymentRequirementsSchema
});
function settleResponseHeader(response) {
  return safeBase64Encode(JSON.stringify(response));
}
function settleResponseFromHeader(header) {
  const decoded = safeBase64Decode(header);
  return JSON.parse(decoded);
}

export {
  authorizationTypes,
  isSignerWallet,
  isAccount,
  evm_exports,
  toJsonSafe,
  Base64EncodedRegex,
  safeBase64Encode,
  safeBase64Decode,
  moneySchema,
  NetworkSchema,
  SupportedEVMNetworks,
  EvmNetworkToChainId,
  SupportedSVMNetworks,
  SvmNetworkToChainId,
  ChainIdToNetwork,
  getRpcClient,
  getRpcSubscriptions,
  createConnectedClient2 as createConnectedClient,
  createSigner2 as createSigner,
  isEvmSignerWallet,
  isSvmSignerWallet,
  isMultiNetworkSigner,
  svm_exports,
  getNetworkId,
  schemes,
  x402Versions,
  ErrorReasons,
  PaymentRequirementsSchema,
  ExactEvmPayloadAuthorizationSchema,
  ExactEvmPayloadSchema,
  ExactSvmPayloadSchema,
  PaymentPayloadSchema,
  x402ResponseSchema,
  HTTPRequestStructureSchema,
  RequestStructureSchema,
  DiscoveredResourceSchema,
  SettleRequestSchema,
  VerifyRequestSchema,
  VerifyResponseSchema,
  SettleResponseSchema,
  ListDiscoveryResourcesRequestSchema,
  ListDiscoveryResourcesResponseSchema,
  SupportedPaymentKindSchema,
  SupportedPaymentKindsResponseSchema,
  facilitatorRequestSchema,
  settleResponseHeader,
  settleResponseFromHeader,
  computeRoutePatterns,
  findMatchingRoute,
  getDefaultAsset,
  processPriceToAtomicAmount,
  findMatchingPaymentRequirements,
  decodeXPaymentResponse,
  decodeTransactionFromPayload,
  getTokenPayerFromTransaction,
  signAndSimulateTransaction,
  signTransactionWithSigner,
  svm_exports2
};
//# sourceMappingURL=chunk-3EQVFRKV.mjs.map