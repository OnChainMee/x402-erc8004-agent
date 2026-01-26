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

// src/types/index.ts
var types_exports = {};
__export(types_exports, {
  ChainIdToNetwork: () => ChainIdToNetwork,
  DiscoveredResourceSchema: () => DiscoveredResourceSchema,
  ErrorReasons: () => ErrorReasons,
  EvmNetworkToChainId: () => EvmNetworkToChainId,
  ExactEvmPayloadAuthorizationSchema: () => ExactEvmPayloadAuthorizationSchema,
  ExactEvmPayloadSchema: () => ExactEvmPayloadSchema,
  ExactSvmPayloadSchema: () => ExactSvmPayloadSchema,
  HTTPRequestStructureSchema: () => HTTPRequestStructureSchema,
  ListDiscoveryResourcesRequestSchema: () => ListDiscoveryResourcesRequestSchema,
  ListDiscoveryResourcesResponseSchema: () => ListDiscoveryResourcesResponseSchema,
  NetworkSchema: () => NetworkSchema,
  PaymentPayloadSchema: () => PaymentPayloadSchema,
  PaymentRequirementsSchema: () => PaymentRequirementsSchema,
  RequestStructureSchema: () => RequestStructureSchema,
  SettleRequestSchema: () => SettleRequestSchema,
  SettleResponseSchema: () => SettleResponseSchema,
  SupportedEVMNetworks: () => SupportedEVMNetworks,
  SupportedPaymentKindSchema: () => SupportedPaymentKindSchema,
  SupportedPaymentKindsResponseSchema: () => SupportedPaymentKindsResponseSchema,
  SupportedSVMNetworks: () => SupportedSVMNetworks,
  SvmNetworkToChainId: () => SvmNetworkToChainId,
  VerifyRequestSchema: () => VerifyRequestSchema,
  VerifyResponseSchema: () => VerifyResponseSchema,
  createConnectedClient: () => createConnectedClient2,
  createSigner: () => createSigner2,
  evm: () => evm_exports,
  facilitatorRequestSchema: () => facilitatorRequestSchema,
  isEvmSignerWallet: () => isEvmSignerWallet,
  isMultiNetworkSigner: () => isMultiNetworkSigner,
  isSvmSignerWallet: () => isSvmSignerWallet,
  moneySchema: () => moneySchema,
  schemes: () => schemes,
  settleResponseFromHeader: () => settleResponseFromHeader,
  settleResponseHeader: () => settleResponseHeader,
  svm: () => svm_exports,
  x402ResponseSchema: () => x402ResponseSchema,
  x402Versions: () => x402Versions
});
module.exports = __toCommonJS(types_exports);

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
var import_accounts = require("viem/accounts");
var import_zksync = require("viem/zksync");
function createConnectedClient(network) {
  const chain = getChainFromNetwork(network);
  return (0, import_viem.createPublicClient)({
    chain,
    transport: (0, import_viem.http)()
  }).extend(import_viem.publicActions);
}
function createClientSepolia() {
  return createConnectedClient("base-sepolia");
}
function createClientAvalancheFuji() {
  return createConnectedClient("avalanche-fuji");
}
function createSigner(network, privateKey) {
  const chain = getChainFromNetwork(network);
  const walletClient = (0, import_viem.createWalletClient)({
    chain,
    transport: (0, import_viem.http)(),
    account: (0, import_accounts.privateKeyToAccount)(privateKey)
  });
  if (isZkStackChain(chain)) {
    return walletClient.extend(import_viem.publicActions).extend((0, import_zksync.eip712WalletActions)());
  }
  return walletClient.extend(import_viem.publicActions);
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
      return import_chains.abstract;
    case "abstract-testnet":
      return import_chains.abstractTestnet;
    case "base":
      return import_chains.base;
    case "base-sepolia":
      return import_chains.baseSepolia;
    case "avalanche":
      return import_chains.avalanche;
    case "avalanche-fuji":
      return import_chains.avalancheFuji;
    case "sei":
      return import_chains.sei;
    case "sei-testnet":
      return import_chains.seiTestnet;
    case "polygon":
      return import_chains.polygon;
    case "polygon-amoy":
      return import_chains.polygonAmoy;
    case "peaq":
      return import_chains.peaq;
    case "story":
      return import_chains.story;
    case "educhain":
      return import_chains.eduChain;
    case "iotex":
      return import_chains.iotex;
    case "iotex-testnet":
      return import_chains.iotexTestnet;
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
function isSignerWallet2(wallet) {
  return typeof wallet === "object" && wallet !== null && (0, import_kit2.isTransactionSigner)(wallet);
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
var authorizationPrimaryType = "TransferWithAuthorization";

// src/types/shared/evm/erc20PermitABI.ts
var usdcABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authorizer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "nonce",
        type: "bytes32"
      }
    ],
    name: "AuthorizationCanceled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authorizer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "nonce",
        type: "bytes32"
      }
    ],
    name: "AuthorizationUsed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_account",
        type: "address"
      }
    ],
    name: "Blacklisted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newBlacklister",
        type: "address"
      }
    ],
    name: "BlacklisterChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "burner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Burn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newMasterMinter",
        type: "address"
      }
    ],
    name: "MasterMinterChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address"
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Mint",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minterAllowedAmount",
        type: "uint256"
      }
    ],
    name: "MinterConfigured",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldMinter",
        type: "address"
      }
    ],
    name: "MinterRemoved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  { anonymous: false, inputs: [], name: "Pause", type: "event" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "PauserChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newRescuer",
        type: "address"
      }
    ],
    name: "RescuerChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_account",
        type: "address"
      }
    ],
    name: "UnBlacklisted",
    type: "event"
  },
  { anonymous: false, inputs: [], name: "Unpause", type: "event" },
  {
    inputs: [],
    name: "CANCEL_AUTHORIZATION_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "RECEIVE_WITH_AUTHORIZATION_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "TRANSFER_WITH_AUTHORIZATION_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" }
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "authorizer", type: "address" },
      { internalType: "bytes32", name: "nonce", type: "bytes32" }
    ],
    name: "authorizationState",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_account", type: "address" }],
    name: "blacklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "blacklister",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "authorizer", type: "address" },
      { internalType: "bytes32", name: "nonce", type: "bytes32" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "cancelAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "authorizer", type: "address" },
      { internalType: "bytes32", name: "nonce", type: "bytes32" },
      { internalType: "bytes", name: "signature", type: "bytes" }
    ],
    name: "cancelAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "minter", type: "address" },
      { internalType: "uint256", name: "minterAllowedAmount", type: "uint256" }
    ],
    name: "configureMinter",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "currency",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "decrement", type: "uint256" }
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "increment", type: "uint256" }
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "string", name: "tokenName", type: "string" },
      { internalType: "string", name: "tokenSymbol", type: "string" },
      { internalType: "string", name: "tokenCurrency", type: "string" },
      { internalType: "uint8", name: "tokenDecimals", type: "uint8" },
      { internalType: "address", name: "newMasterMinter", type: "address" },
      { internalType: "address", name: "newPauser", type: "address" },
      { internalType: "address", name: "newBlacklister", type: "address" },
      { internalType: "address", name: "newOwner", type: "address" }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "string", name: "newName", type: "string" }],
    name: "initializeV2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "lostAndFound", type: "address" }],
    name: "initializeV2_1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accountsToBlacklist",
        type: "address[]"
      },
      { internalType: "string", name: "newSymbol", type: "string" }
    ],
    name: "initializeV2_2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_account", type: "address" }],
    name: "isBlacklisted",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "isMinter",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "masterMinter",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_to", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" }
    ],
    name: "mint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "minter", type: "address" }],
    name: "minterAllowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pauser",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bytes", name: "signature", type: "bytes" }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "validAfter", type: "uint256" },
      { internalType: "uint256", name: "validBefore", type: "uint256" },
      { internalType: "bytes32", name: "nonce", type: "bytes32" },
      { internalType: "bytes", name: "signature", type: "bytes" }
    ],
    name: "receiveWithAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "validAfter", type: "uint256" },
      { internalType: "uint256", name: "validBefore", type: "uint256" },
      { internalType: "bytes32", name: "nonce", type: "bytes32" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "receiveWithAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "minter", type: "address" }],
    name: "removeMinter",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenContract",
        type: "address"
      },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "rescueERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "rescuer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "validAfter", type: "uint256" },
      { internalType: "uint256", name: "validBefore", type: "uint256" },
      { internalType: "bytes32", name: "nonce", type: "bytes32" },
      { internalType: "bytes", name: "signature", type: "bytes" }
    ],
    name: "transferWithAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "validAfter", type: "uint256" },
      { internalType: "uint256", name: "validBefore", type: "uint256" },
      { internalType: "bytes32", name: "nonce", type: "bytes32" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "transferWithAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_account", type: "address" }],
    name: "unBlacklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_newBlacklister", type: "address" }],
    name: "updateBlacklister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_newMasterMinter", type: "address" }],
    name: "updateMasterMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_newPauser", type: "address" }],
    name: "updatePauser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "newRescuer", type: "address" }],
    name: "updateRescuer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "pure",
    type: "function"
  }
];

// src/types/shared/svm/index.ts
var svm_exports = {};
__export(svm_exports, {
  SvmAddressRegex: () => SvmAddressRegex
});

// src/types/shared/svm/regex.ts
var SvmAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

// src/types/verify/x402Specs.ts
var import_zod3 = require("zod");

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

// src/shared/svm/transaction.ts
var import_kit3 = require("@solana/kit");
var import_token = require("@solana-program/token");
var import_token_2022 = require("@solana-program/token-2022");

// src/types/verify/facilitator.ts
var facilitatorRequestSchema = import_zod4.z.object({
  paymentHeader: import_zod4.z.string(),
  paymentRequirements: PaymentRequirementsSchema
});
function settleResponseHeader(response) {
  return safeBase64Encode(JSON.stringify(response));
}
function settleResponseFromHeader(header) {
  const decoded = safeBase64Decode(header);
  return JSON.parse(decoded);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChainIdToNetwork,
  DiscoveredResourceSchema,
  ErrorReasons,
  EvmNetworkToChainId,
  ExactEvmPayloadAuthorizationSchema,
  ExactEvmPayloadSchema,
  ExactSvmPayloadSchema,
  HTTPRequestStructureSchema,
  ListDiscoveryResourcesRequestSchema,
  ListDiscoveryResourcesResponseSchema,
  NetworkSchema,
  PaymentPayloadSchema,
  PaymentRequirementsSchema,
  RequestStructureSchema,
  SettleRequestSchema,
  SettleResponseSchema,
  SupportedEVMNetworks,
  SupportedPaymentKindSchema,
  SupportedPaymentKindsResponseSchema,
  SupportedSVMNetworks,
  SvmNetworkToChainId,
  VerifyRequestSchema,
  VerifyResponseSchema,
  createConnectedClient,
  createSigner,
  evm,
  facilitatorRequestSchema,
  isEvmSignerWallet,
  isMultiNetworkSigner,
  isSvmSignerWallet,
  moneySchema,
  schemes,
  settleResponseFromHeader,
  settleResponseHeader,
  svm,
  x402ResponseSchema,
  x402Versions
});
//# sourceMappingURL=index.js.map