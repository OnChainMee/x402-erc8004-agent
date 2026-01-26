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

// src/client/index.ts
var client_exports = {};
__export(client_exports, {
  createPaymentHeader: () => createPaymentHeader3,
  preparePaymentHeader: () => preparePaymentHeader2,
  selectPaymentRequirements: () => selectPaymentRequirements,
  signPaymentHeader: () => signPaymentHeader2
});
module.exports = __toCommonJS(client_exports);

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

// src/types/shared/evm/wallet.ts
var import_viem = require("viem");
var import_chains = require("viem/chains");
var import_accounts = require("viem/accounts");
var import_zksync = require("viem/zksync");
function isSignerWallet(wallet) {
  return typeof wallet === "object" && wallet !== null && "chain" in wallet && "transport" in wallet;
}
function isAccount(wallet) {
  const w = wallet;
  return typeof wallet === "object" && wallet !== null && typeof w.address === "string" && typeof w.type === "string" && // Check for essential signing capabilities
  typeof w.sign === "function" && typeof w.signMessage === "function" && typeof w.signTypedData === "function" && // Check for transaction signing (required by LocalAccount)
  typeof w.signTransaction === "function";
}

// src/schemes/exact/evm/sign.ts
var import_viem2 = require("viem");

// src/shared/base64.ts
var Base64EncodedRegex = /^[A-Za-z0-9+/]*={0,2}$/;
function safeBase64Encode(data) {
  if (typeof globalThis !== "undefined" && typeof globalThis.btoa === "function") {
    return globalThis.btoa(data);
  }
  return Buffer.from(data).toString("base64");
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

// src/shared/svm/wallet.ts
var import_kit2 = require("@solana/kit");
var import_base = require("@scure/base");

// src/shared/svm/rpc.ts
var import_kit = require("@solana/kit");
var DEVNET_RPC_URL = "https://api.devnet.solana.com";
var MAINNET_RPC_URL = "https://api.mainnet-beta.solana.com";
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

// src/shared/svm/wallet.ts
function isSignerWallet2(wallet) {
  return typeof wallet === "object" && wallet !== null && (0, import_kit2.isTransactionSigner)(wallet);
}

// src/types/shared/wallet.ts
function isEvmSignerWallet(wallet) {
  return isSignerWallet(wallet) || isAccount(wallet);
}
function isSvmSignerWallet(wallet) {
  return isSignerWallet2(wallet);
}
function isMultiNetworkSigner(wallet) {
  return "evm" in wallet && "svm" in wallet;
}

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

// src/shared/svm/transaction.ts
var import_kit3 = require("@solana/kit");
var import_token = require("@solana-program/token");
var import_token_2022 = require("@solana-program/token-2022");

// src/schemes/exact/evm/sign.ts
async function signAuthorization(walletClient, { from, to, value, validAfter, validBefore, nonce }, { asset, network, extra }) {
  const chainId = getNetworkId(network);
  const name = extra?.name;
  const version = extra?.version;
  const data = {
    types: authorizationTypes,
    domain: {
      name,
      version,
      chainId,
      verifyingContract: (0, import_viem2.getAddress)(asset)
    },
    primaryType: "TransferWithAuthorization",
    message: {
      from: (0, import_viem2.getAddress)(from),
      to: (0, import_viem2.getAddress)(to),
      value,
      validAfter,
      validBefore,
      nonce
    }
  };
  if (isSignerWallet(walletClient)) {
    const signature = await walletClient.signTypedData(data);
    return {
      signature
    };
  } else if (isAccount(walletClient) && walletClient.signTypedData) {
    const signature = await walletClient.signTypedData(data);
    return {
      signature
    };
  } else {
    throw new Error("Invalid wallet client provided does not support signTypedData");
  }
}
function createNonce() {
  const cryptoObj = typeof globalThis.crypto !== "undefined" && typeof globalThis.crypto.getRandomValues === "function" ? globalThis.crypto : (
    // Dynamic require is needed to support node.js
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("crypto").webcrypto
  );
  return (0, import_viem2.toHex)(cryptoObj.getRandomValues(new Uint8Array(32)));
}

// src/schemes/exact/evm/utils/paymentUtils.ts
function encodePayment(payment) {
  let safe;
  if (SupportedEVMNetworks.includes(payment.network)) {
    const evmPayload = payment.payload;
    safe = {
      ...payment,
      payload: {
        ...evmPayload,
        authorization: Object.fromEntries(
          Object.entries(evmPayload.authorization).map(([key, value]) => [
            key,
            typeof value === "bigint" ? value.toString() : value
          ])
        )
      }
    };
    return safeBase64Encode(JSON.stringify(safe));
  }
  if (SupportedSVMNetworks.includes(payment.network)) {
    safe = { ...payment, payload: payment.payload };
    return safeBase64Encode(JSON.stringify(safe));
  }
  throw new Error("Invalid network");
}

// src/schemes/exact/evm/client.ts
function preparePaymentHeader(from, x402Version, paymentRequirements) {
  const nonce = createNonce();
  const validAfter = BigInt(
    Math.floor(Date.now() / 1e3) - 600
    // 10 minutes before
  ).toString();
  const validBefore = BigInt(
    Math.floor(Date.now() / 1e3 + paymentRequirements.maxTimeoutSeconds)
  ).toString();
  return {
    x402Version,
    scheme: paymentRequirements.scheme,
    network: paymentRequirements.network,
    payload: {
      signature: void 0,
      authorization: {
        from,
        to: paymentRequirements.payTo,
        value: paymentRequirements.maxAmountRequired,
        validAfter: validAfter.toString(),
        validBefore: validBefore.toString(),
        nonce
      }
    }
  };
}
async function signPaymentHeader(client, paymentRequirements, unsignedPaymentHeader) {
  const { signature } = await signAuthorization(
    client,
    unsignedPaymentHeader.payload.authorization,
    paymentRequirements
  );
  return {
    ...unsignedPaymentHeader,
    payload: {
      ...unsignedPaymentHeader.payload,
      signature
    }
  };
}
async function createPayment(client, x402Version, paymentRequirements) {
  const from = isSignerWallet(client) ? client.account.address : client.address;
  const unsignedPaymentHeader = preparePaymentHeader(from, x402Version, paymentRequirements);
  return signPaymentHeader(client, paymentRequirements, unsignedPaymentHeader);
}
async function createPaymentHeader(client, x402Version, paymentRequirements) {
  const payment = await createPayment(client, x402Version, paymentRequirements);
  return encodePayment(payment);
}

// src/schemes/exact/svm/client.ts
var import_kit4 = require("@solana/kit");
var import_token_20222 = require("@solana-program/token-2022");
var import_token2 = require("@solana-program/token");
var import_compute_budget = require("@solana-program/compute-budget");
async function createPaymentHeader2(client, x402Version, paymentRequirements, config2) {
  const paymentPayload = await createAndSignPayment(
    client,
    x402Version,
    paymentRequirements,
    config2
  );
  return encodePayment(paymentPayload);
}
async function createAndSignPayment(client, x402Version, paymentRequirements, config2) {
  const transactionMessage = await createTransferTransactionMessage(
    client,
    paymentRequirements,
    config2
  );
  const signedTransaction = await (0, import_kit4.partiallySignTransactionMessageWithSigners)(transactionMessage);
  const base64EncodedWireTransaction = (0, import_kit4.getBase64EncodedWireTransaction)(signedTransaction);
  return {
    scheme: paymentRequirements.scheme,
    network: paymentRequirements.network,
    x402Version,
    payload: {
      transaction: base64EncodedWireTransaction
    }
  };
}
async function createTransferTransactionMessage(client, paymentRequirements, config2) {
  const rpc = getRpcClient(paymentRequirements.network, config2?.svmConfig?.rpcUrl);
  const transferInstructions = await createTransferInstructions(
    client,
    paymentRequirements,
    config2
  );
  const feePayer = paymentRequirements.extra?.feePayer;
  const txToSimulate = (0, import_kit4.pipe)(
    (0, import_kit4.createTransactionMessage)({ version: 0 }),
    (tx2) => (0, import_compute_budget.setTransactionMessageComputeUnitPrice)(1, tx2),
    // 1 microlamport priority fee
    (tx2) => (0, import_kit4.setTransactionMessageFeePayer)(feePayer, tx2),
    (tx2) => (0, import_kit4.appendTransactionMessageInstructions)(transferInstructions, tx2)
  );
  const estimateComputeUnitLimit = (0, import_compute_budget.estimateComputeUnitLimitFactory)({ rpc });
  const estimatedUnits = await estimateComputeUnitLimit(txToSimulate);
  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();
  const tx = (0, import_kit4.pipe)(
    txToSimulate,
    (tx2) => (0, import_kit4.prependTransactionMessageInstruction)(
      (0, import_compute_budget.getSetComputeUnitLimitInstruction)({ units: estimatedUnits }),
      tx2
    ),
    (tx2) => (0, import_kit4.setTransactionMessageLifetimeUsingBlockhash)(latestBlockhash, tx2)
  );
  return tx;
}
async function createTransferInstructions(client, paymentRequirements, config2) {
  const { asset, maxAmountRequired: amount, payTo } = paymentRequirements;
  const rpc = getRpcClient(paymentRequirements.network, config2?.svmConfig?.rpcUrl);
  const tokenMint = await (0, import_token_20222.fetchMint)(rpc, asset);
  const tokenProgramAddress = tokenMint.programAddress;
  if (tokenProgramAddress.toString() !== import_token2.TOKEN_PROGRAM_ADDRESS.toString() && tokenProgramAddress.toString() !== import_token_20222.TOKEN_2022_PROGRAM_ADDRESS.toString()) {
    throw new Error("Asset was not created by a known token program");
  }
  const [sourceATA] = await (0, import_token_20222.findAssociatedTokenPda)({
    mint: asset,
    owner: client.address,
    tokenProgram: tokenProgramAddress
  });
  const [destinationATA] = await (0, import_token_20222.findAssociatedTokenPda)({
    mint: asset,
    owner: payTo,
    tokenProgram: tokenProgramAddress
  });
  const transferIx = (0, import_token_20222.getTransferCheckedInstruction)(
    {
      source: sourceATA,
      mint: asset,
      destination: destinationATA,
      authority: client,
      amount: BigInt(amount),
      decimals: tokenMint.data.decimals
    },
    { programAddress: tokenProgramAddress }
  );
  return [transferIx];
}

// src/client/createPaymentHeader.ts
async function createPaymentHeader3(client, x402Version, paymentRequirements, config2) {
  if (paymentRequirements.scheme === "exact") {
    if (SupportedEVMNetworks.includes(paymentRequirements.network)) {
      const evmClient = isMultiNetworkSigner(client) ? client.evm : client;
      if (!isEvmSignerWallet(evmClient)) {
        throw new Error("Invalid evm wallet client provided");
      }
      return await createPaymentHeader(
        evmClient,
        x402Version,
        paymentRequirements
      );
    }
    if (SupportedSVMNetworks.includes(paymentRequirements.network)) {
      const svmClient = isMultiNetworkSigner(client) ? client.svm : client;
      if (!isSvmSignerWallet(svmClient)) {
        throw new Error("Invalid svm wallet client provided");
      }
      return await createPaymentHeader2(
        svmClient,
        x402Version,
        paymentRequirements,
        config2
      );
    }
    throw new Error("Unsupported network");
  }
  throw new Error("Unsupported scheme");
}

// src/client/preparePaymentHeader.ts
function preparePaymentHeader2(from, x402Version, paymentRequirements) {
  if (paymentRequirements.scheme === "exact" && SupportedEVMNetworks.includes(paymentRequirements.network)) {
    return preparePaymentHeader(from, x402Version, paymentRequirements);
  }
  throw new Error("Unsupported scheme");
}

// src/client/selectPaymentRequirements.ts
function selectPaymentRequirements(paymentRequirements, network, scheme) {
  const broadlyAcceptedPaymentRequirements = paymentRequirements.filter((requirement) => {
    const isExpectedScheme = !scheme || requirement.scheme === scheme;
    const isExpectedChain = !network || (Array.isArray(network) ? network.includes(requirement.network) : network == requirement.network);
    return isExpectedScheme && isExpectedChain;
  });
  const usdcRequirements = broadlyAcceptedPaymentRequirements.filter((requirement) => {
    return requirement.asset === getUsdcChainConfigForChain(getNetworkId(requirement.network))?.usdcAddress;
  });
  if (usdcRequirements.length > 0) {
    return usdcRequirements[0];
  }
  if (broadlyAcceptedPaymentRequirements.length > 0) {
    return broadlyAcceptedPaymentRequirements[0];
  }
  return paymentRequirements[0];
}

// src/client/signPaymentHeader.ts
async function signPaymentHeader2(client, paymentRequirements, unsignedPaymentHeader) {
  if (paymentRequirements.scheme === "exact" && SupportedEVMNetworks.includes(paymentRequirements.network)) {
    const evmClient = isMultiNetworkSigner(client) ? client.evm : client;
    if (!isEvmSignerWallet(evmClient)) {
      throw new Error("Invalid evm wallet client provided");
    }
    const signedPaymentHeader = await signPaymentHeader(evmClient, paymentRequirements, unsignedPaymentHeader);
    return encodePayment(signedPaymentHeader);
  }
  throw new Error("Unsupported scheme");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPaymentHeader,
  preparePaymentHeader,
  selectPaymentRequirements,
  signPaymentHeader
});
//# sourceMappingURL=index.js.map