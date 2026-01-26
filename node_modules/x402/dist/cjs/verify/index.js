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

// src/verify/index.ts
var verify_exports = {};
__export(verify_exports, {
  list: () => list,
  settle: () => settle,
  supported: () => supported,
  useFacilitator: () => useFacilitator,
  verify: () => verify
});
module.exports = __toCommonJS(verify_exports);

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

// src/types/shared/svm/regex.ts
var SvmAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

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

// src/shared/svm/transaction.ts
var import_kit3 = require("@solana/kit");
var import_token = require("@solana-program/token");
var import_token_2022 = require("@solana-program/token-2022");

// src/verify/useFacilitator.ts
var DEFAULT_FACILITATOR_URL = "https://x402.org/facilitator";
function useFacilitator(facilitator) {
  async function verify2(payload, paymentRequirements) {
    const url = facilitator?.url || DEFAULT_FACILITATOR_URL;
    let headers = { "Content-Type": "application/json" };
    if (facilitator?.createAuthHeaders) {
      const authHeaders = await facilitator.createAuthHeaders();
      headers = { ...headers, ...authHeaders.verify };
    }
    const res = await fetch(`${url}/verify`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        x402Version: payload.x402Version,
        paymentPayload: toJsonSafe(payload),
        paymentRequirements: toJsonSafe(paymentRequirements)
      })
    });
    if (res.status !== 200) {
      let errorMessage = `Failed to verify payment: ${res.statusText}`;
      try {
        const errorData = await res.json();
        if (errorData.error) {
          errorMessage = errorData.error;
        }
      } catch {
      }
      throw new Error(errorMessage);
    }
    const data = await res.json();
    return data;
  }
  async function settle2(payload, paymentRequirements) {
    const url = facilitator?.url || DEFAULT_FACILITATOR_URL;
    let headers = { "Content-Type": "application/json" };
    if (facilitator?.createAuthHeaders) {
      const authHeaders = await facilitator.createAuthHeaders();
      headers = { ...headers, ...authHeaders.settle };
    }
    const res = await fetch(`${url}/settle`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        x402Version: payload.x402Version,
        paymentPayload: toJsonSafe(payload),
        paymentRequirements: toJsonSafe(paymentRequirements)
      })
    });
    if (res.status !== 200) {
      let errorMessage = `Failed to settle payment: ${res.status} ${res.statusText}`;
      try {
        const errorData = await res.json();
        if (errorData.error) {
          errorMessage = errorData.error;
        }
      } catch {
      }
      throw new Error(errorMessage);
    }
    const data = await res.json();
    return data;
  }
  async function supported2() {
    const url = facilitator?.url || DEFAULT_FACILITATOR_URL;
    let headers = { "Content-Type": "application/json" };
    if (facilitator?.createAuthHeaders) {
      const authHeaders = await facilitator.createAuthHeaders();
      headers = { ...headers, ...authHeaders.supported };
    }
    const res = await fetch(`${url}/supported`, {
      method: "GET",
      headers
    });
    if (res.status !== 200) {
      throw new Error(`Failed to get supported payment kinds: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  }
  async function list2(config2 = {}) {
    const url = facilitator?.url || DEFAULT_FACILITATOR_URL;
    let headers = { "Content-Type": "application/json" };
    if (facilitator?.createAuthHeaders) {
      const authHeaders = await facilitator.createAuthHeaders();
      if (authHeaders.list) {
        headers = { ...headers, ...authHeaders.list };
      }
    }
    const urlParams = new URLSearchParams(
      Object.entries(config2).filter(([_, value]) => value !== void 0).map(([key, value]) => [key, value.toString()])
    );
    const res = await fetch(`${url}/discovery/resources?${urlParams.toString()}`, {
      method: "GET",
      headers
    });
    if (res.status !== 200) {
      const text = res.statusText;
      throw new Error(`Failed to list discovery: ${res.status} ${text}`);
    }
    const data = await res.json();
    return data;
  }
  return { verify: verify2, settle: settle2, supported: supported2, list: list2 };
}
var { verify, settle, supported, list } = useFacilitator();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  list,
  settle,
  supported,
  useFacilitator,
  verify
});
//# sourceMappingURL=index.js.map