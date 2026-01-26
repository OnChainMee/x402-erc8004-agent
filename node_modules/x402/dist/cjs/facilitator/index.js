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

// src/facilitator/index.ts
var facilitator_exports = {};
__export(facilitator_exports, {
  settle: () => settle3,
  verify: () => verify3
});
module.exports = __toCommonJS(facilitator_exports);

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

// src/types/shared/evm/wallet.ts
var import_viem = require("viem");
var import_chains = require("viem/chains");
var import_accounts = require("viem/accounts");
var import_zksync = require("viem/zksync");

// src/schemes/exact/evm/sign.ts
var import_viem2 = require("viem");

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
function getUsdcAddress(client) {
  return config[client.chain.id.toString()].usdcAddress;
}
var versionCache = null;
async function getVersion(client) {
  if (versionCache !== null) {
    return versionCache;
  }
  const version = await client.readContract({
    address: getUsdcAddress(client),
    abi: usdcABI,
    functionName: "version"
  });
  versionCache = version;
  return versionCache;
}

// src/shared/evm/erc20.ts
async function getERC20Balance(client, erc20Address, address) {
  const balance = await client.readContract({
    address: erc20Address,
    abi: usdcABI,
    functionName: "balanceOf",
    args: [address]
  });
  return balance;
}

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

// src/schemes/exact/evm/facilitator.ts
var import_viem3 = require("viem");

// src/schemes/exact/svm/facilitator/settle.ts
var import_kit5 = require("@solana/kit");
var import_transaction_confirmation = require("@solana/transaction-confirmation");

// src/schemes/exact/svm/facilitator/verify.ts
var import_kit4 = require("@solana/kit");
var import_compute_budget = require("@solana-program/compute-budget");
var import_token_20222 = require("@solana-program/token-2022");
var import_token2 = require("@solana-program/token");
async function verify(signer, payload, paymentRequirements, config2) {
  try {
    verifySchemesAndNetworks(payload, paymentRequirements);
    const svmPayload = payload.payload;
    const decodedTransaction = decodeTransactionFromPayload(svmPayload);
    const rpc = getRpcClient(paymentRequirements.network, config2?.svmConfig?.rpcUrl);
    await transactionIntrospection(svmPayload, paymentRequirements, signer, config2);
    const simulateResult = await signAndSimulateTransaction(signer, decodedTransaction, rpc);
    if (simulateResult.value?.err) {
      throw new Error(`invalid_exact_svm_payload_transaction_simulation_failed`);
    }
    return {
      isValid: true,
      invalidReason: void 0,
      payer: getTokenPayerFromTransaction(decodedTransaction)
    };
  } catch (error) {
    if (error instanceof Error) {
      if (ErrorReasons.includes(error.message)) {
        return {
          isValid: false,
          invalidReason: error.message,
          payer: (() => {
            try {
              const tx = decodeTransactionFromPayload(payload.payload);
              return getTokenPayerFromTransaction(tx);
            } catch {
              return void 0;
            }
          })()
        };
      }
    }
    console.error(error);
    return {
      isValid: false,
      invalidReason: "unexpected_verify_error",
      payer: (() => {
        try {
          const tx = decodeTransactionFromPayload(payload.payload);
          return getTokenPayerFromTransaction(tx);
        } catch {
          return void 0;
        }
      })()
    };
  }
}
function verifySchemesAndNetworks(payload, paymentRequirements) {
  if (payload.scheme !== SCHEME || paymentRequirements.scheme !== SCHEME) {
    throw new Error("unsupported_scheme");
  }
  if (payload.network !== paymentRequirements.network || !SupportedSVMNetworks.includes(paymentRequirements.network)) {
    throw new Error("invalid_network");
  }
}
async function transactionIntrospection(svmPayload, paymentRequirements, signer, config2) {
  const rpc = getRpcClient(paymentRequirements.network, config2?.svmConfig?.rpcUrl);
  const decodedTransaction = decodeTransactionFromPayload(svmPayload);
  const compiledTransactionMessage = (0, import_kit4.getCompiledTransactionMessageDecoder)().decode(
    decodedTransaction.messageBytes
  );
  const transactionMessage = (0, import_kit4.decompileTransactionMessage)(compiledTransactionMessage);
  await verifyTransactionInstructions(transactionMessage, paymentRequirements, signer, rpc);
}
async function verifyTransactionInstructions(transactionMessage, paymentRequirements, signer, rpc) {
  if (transactionMessage.instructions.length !== 3) {
    throw new Error(`invalid_exact_svm_payload_transaction_instructions_length`);
  }
  verifyComputeLimitInstruction(transactionMessage.instructions[0]);
  verifyComputePriceInstruction(transactionMessage.instructions[1]);
  transactionMessage.instructions.forEach((instruction) => {
    if (instruction.accounts?.some((account) => account.address === signer.address)) {
      throw new Error(
        `invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts`
      );
    }
  });
  await verifyTransferInstruction(
    transactionMessage.instructions[2],
    paymentRequirements,
    signer,
    rpc
  );
}
function verifyComputeLimitInstruction(instruction) {
  try {
    if (instruction.programAddress.toString() !== import_compute_budget.COMPUTE_BUDGET_PROGRAM_ADDRESS.toString() || instruction.data?.[0] !== 2) {
      throw new Error(
        `invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction`
      );
    }
    (0, import_compute_budget.parseSetComputeUnitLimitInstruction)(
      instruction
    );
  } catch (error) {
    console.error(error);
    throw new Error(`invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction`);
  }
}
function verifyComputePriceInstruction(instruction) {
  if (instruction.programAddress.toString() !== import_compute_budget.COMPUTE_BUDGET_PROGRAM_ADDRESS.toString() || instruction.data?.[0] !== 3) {
    throw new Error(`invalid_exact_svm_payload_transaction_instructions_compute_price_instruction`);
  }
  const parsedInstruction = (0, import_compute_budget.parseSetComputeUnitPriceInstruction)(
    instruction
  );
  if (parsedInstruction.data.microLamports > 5 * 1e6) {
    throw new Error(
      `invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high`
    );
  }
}
async function verifyTransferInstruction(instruction, paymentRequirements, signer, rpc) {
  const tokenInstruction = getValidatedTransferCheckedInstruction(instruction);
  await verifyTransferCheckedInstruction(tokenInstruction, paymentRequirements, signer, rpc);
}
async function verifyTransferCheckedInstruction(parsedInstruction, paymentRequirements, signer, rpc) {
  const tokenProgramAddress = parsedInstruction.programAddress.toString() === import_token2.TOKEN_PROGRAM_ADDRESS.toString() ? import_token2.TOKEN_PROGRAM_ADDRESS : import_token_20222.TOKEN_2022_PROGRAM_ADDRESS;
  if (parsedInstruction.accounts.authority.address === signer.address) {
    throw new Error(`invalid_exact_svm_payload_transaction_fee_payer_transferring_funds`);
  }
  const payToATA = await (0, import_token_20222.findAssociatedTokenPda)({
    mint: paymentRequirements.asset,
    owner: paymentRequirements.payTo,
    tokenProgram: tokenProgramAddress
  });
  if (parsedInstruction.accounts.destination.address !== payToATA[0]) {
    throw new Error(`invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata`);
  }
  const addresses = [parsedInstruction.accounts.source.address, payToATA[0]];
  const maybeAccounts = await (0, import_kit4.fetchEncodedAccounts)(rpc, addresses);
  const missingAccounts = maybeAccounts.filter((a) => !a.exists);
  for (const missingAccount of missingAccounts) {
    if (missingAccount.address === parsedInstruction.accounts.source.address) {
      throw new Error(`invalid_exact_svm_payload_transaction_sender_ata_not_found`);
    }
    if (missingAccount.address === payToATA[0]) {
      throw new Error(`invalid_exact_svm_payload_transaction_receiver_ata_not_found`);
    }
  }
  const instructionAmount = parsedInstruction.data.amount;
  const paymentRequirementsAmount = BigInt(paymentRequirements.maxAmountRequired);
  if (instructionAmount !== paymentRequirementsAmount) {
    throw new Error(`invalid_exact_svm_payload_transaction_amount_mismatch`);
  }
}
function getValidatedTransferCheckedInstruction(instruction) {
  try {
    (0, import_kit4.assertIsInstructionWithData)(instruction);
    (0, import_kit4.assertIsInstructionWithAccounts)(instruction);
  } catch (error) {
    console.error(error);
    throw new Error(`invalid_exact_svm_payload_transaction_instructions`);
  }
  let tokenInstruction;
  if (instruction.programAddress.toString() === import_token2.TOKEN_PROGRAM_ADDRESS.toString()) {
    const identifiedInstruction = (0, import_token2.identifyTokenInstruction)(instruction);
    if (identifiedInstruction !== import_token2.TokenInstruction.TransferChecked) {
      throw new Error(
        `invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked`
      );
    }
    tokenInstruction = (0, import_token2.parseTransferCheckedInstruction)({
      ...instruction,
      data: new Uint8Array(instruction.data)
    });
  } else if (instruction.programAddress.toString() === import_token_20222.TOKEN_2022_PROGRAM_ADDRESS.toString()) {
    const identifiedInstruction = (0, import_token_20222.identifyToken2022Instruction)(instruction);
    if (identifiedInstruction !== import_token_20222.Token2022Instruction.TransferChecked) {
      throw new Error(
        `invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked`
      );
    }
    tokenInstruction = (0, import_token_20222.parseTransferCheckedInstruction)({
      ...instruction,
      data: new Uint8Array(instruction.data)
    });
  } else {
    throw new Error(`invalid_exact_svm_payload_transaction_not_a_transfer_instruction`);
  }
  return tokenInstruction;
}

// src/schemes/exact/svm/facilitator/settle.ts
async function settle(signer, payload, paymentRequirements, config2) {
  const verifyResponse = await verify(signer, payload, paymentRequirements, config2);
  if (!verifyResponse.isValid) {
    return {
      success: false,
      errorReason: verifyResponse.invalidReason,
      network: payload.network,
      transaction: ""
    };
  }
  const svmPayload = payload.payload;
  const decodedTransaction = decodeTransactionFromPayload(svmPayload);
  const signedTransaction = await signTransactionWithSigner(signer, decodedTransaction);
  assertTransactionFullySigned(signedTransaction);
  const payer = getTokenPayerFromTransaction(signedTransaction);
  const rpc = getRpcClient(paymentRequirements.network, config2?.svmConfig?.rpcUrl);
  const rpcSubscriptions = getRpcSubscriptions(
    paymentRequirements.network,
    config2?.svmConfig?.rpcUrl
  );
  try {
    const { success, errorReason, signature } = await sendAndConfirmSignedTransaction(
      signedTransaction,
      rpc,
      rpcSubscriptions
    );
    return {
      success,
      errorReason,
      payer,
      transaction: signature,
      network: payload.network
    };
  } catch (error) {
    console.error("Unexpected error during transaction settlement:", error);
    return {
      success: false,
      errorReason: "unexpected_settle_error",
      network: payload.network,
      transaction: (0, import_kit5.getSignatureFromTransaction)(signedTransaction),
      payer
    };
  }
}
async function sendSignedTransaction(signedTransaction, rpc, sendTxConfig = {
  skipPreflight: true,
  encoding: "base64"
}) {
  const base64EncodedTransaction = (0, import_kit5.getBase64EncodedWireTransaction)(signedTransaction);
  return await rpc.sendTransaction(base64EncodedTransaction, sendTxConfig).send();
}
async function confirmSignedTransaction(signedTransaction, rpc, rpcSubscriptions) {
  const signature = (0, import_kit5.getSignatureFromTransaction)(signedTransaction);
  const abortController = new AbortController();
  const timeout = setTimeout(() => {
    abortController.abort("Transaction confirmation timed out after 60 seconds");
  }, 6e4);
  try {
    const compiledTransactionMessage = (0, import_kit5.getCompiledTransactionMessageDecoder)().decode(
      signedTransaction.messageBytes
    );
    const decompiledTransactionMessage = await (0, import_kit5.decompileTransactionMessageFetchingLookupTables)(
      compiledTransactionMessage,
      rpc
    );
    (0, import_kit5.assertIsTransactionMessageWithBlockhashLifetime)(decompiledTransactionMessage);
    const signedTransactionWithBlockhashLifetime = {
      ...signedTransaction,
      lifetimeConstraint: decompiledTransactionMessage.lifetimeConstraint
    };
    const commitment = "confirmed";
    const getRecentSignatureConfirmationPromise = (0, import_transaction_confirmation.createRecentSignatureConfirmationPromiseFactory)({
      rpc,
      rpcSubscriptions
    });
    const getBlockHeightExceedencePromise = (0, import_transaction_confirmation.createBlockHeightExceedencePromiseFactory)({
      rpc,
      rpcSubscriptions
    });
    const config2 = {
      abortSignal: abortController.signal,
      commitment,
      getBlockHeightExceedencePromise,
      getRecentSignatureConfirmationPromise
    };
    await (0, import_transaction_confirmation.waitForRecentTransactionConfirmation)({
      ...config2,
      transaction: signedTransactionWithBlockhashLifetime
    });
    return {
      success: true,
      signature
    };
  } catch (error) {
    console.error(error);
    if ((0, import_kit5.isSolanaError)(error, import_kit5.SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED)) {
      return {
        success: false,
        errorReason: "settle_exact_svm_block_height_exceeded",
        signature
      };
    } else if (error instanceof DOMException && error.name === "AbortError") {
      return {
        success: false,
        errorReason: "settle_exact_svm_transaction_confirmation_timed_out",
        signature
      };
    } else {
      throw error;
    }
  } finally {
    clearTimeout(timeout);
  }
}
async function sendAndConfirmSignedTransaction(signedTransaction, rpc, rpcSubscriptions) {
  await sendSignedTransaction(signedTransaction, rpc);
  return await confirmSignedTransaction(signedTransaction, rpc, rpcSubscriptions);
}
function assertTransactionFullySigned(transaction) {
  const missingAddresses = Object.entries(transaction.signatures).filter(([, signature]) => signature == null).map(([address]) => address);
  if (missingAddresses.length > 0) {
    throw new Error(`transaction_signer_missing_signatures:${missingAddresses.join(",")}`);
  }
}

// src/schemes/exact/svm/client.ts
var import_kit6 = require("@solana/kit");
var import_token_20223 = require("@solana-program/token-2022");
var import_token3 = require("@solana-program/token");
var import_compute_budget2 = require("@solana-program/compute-budget");

// src/schemes/exact/index.ts
var SCHEME = "exact";

// src/schemes/exact/evm/facilitator.ts
async function verify2(client, payload, paymentRequirements) {
  const exactEvmPayload = payload.payload;
  if (payload.scheme !== SCHEME || paymentRequirements.scheme !== SCHEME) {
    return {
      isValid: false,
      invalidReason: `unsupported_scheme`,
      payer: exactEvmPayload.authorization.from
    };
  }
  let name;
  let chainId;
  let erc20Address;
  let version;
  try {
    chainId = getNetworkId(payload.network);
    name = paymentRequirements.extra?.name ?? config[chainId.toString()].usdcName;
    erc20Address = paymentRequirements.asset;
    version = paymentRequirements.extra?.version ?? await getVersion(client);
  } catch {
    return {
      isValid: false,
      invalidReason: `invalid_network`,
      payer: payload.payload.authorization.from
    };
  }
  const permitTypedData = {
    types: authorizationTypes,
    primaryType: "TransferWithAuthorization",
    domain: {
      name,
      version,
      chainId,
      verifyingContract: erc20Address
    },
    message: {
      from: exactEvmPayload.authorization.from,
      to: exactEvmPayload.authorization.to,
      value: exactEvmPayload.authorization.value,
      validAfter: exactEvmPayload.authorization.validAfter,
      validBefore: exactEvmPayload.authorization.validBefore,
      nonce: exactEvmPayload.authorization.nonce
    }
  };
  const recoveredAddress = await client.verifyTypedData({
    address: exactEvmPayload.authorization.from,
    ...permitTypedData,
    signature: exactEvmPayload.signature
  });
  if (!recoveredAddress) {
    return {
      isValid: false,
      invalidReason: "invalid_exact_evm_payload_signature",
      //"Invalid permit signature",
      payer: exactEvmPayload.authorization.from
    };
  }
  if ((0, import_viem3.getAddress)(exactEvmPayload.authorization.to) !== (0, import_viem3.getAddress)(paymentRequirements.payTo)) {
    return {
      isValid: false,
      invalidReason: "invalid_exact_evm_payload_recipient_mismatch",
      payer: exactEvmPayload.authorization.from
    };
  }
  if (BigInt(exactEvmPayload.authorization.validBefore) < BigInt(Math.floor(Date.now() / 1e3) + 6)) {
    return {
      isValid: false,
      invalidReason: "invalid_exact_evm_payload_authorization_valid_before",
      //"Deadline on permit isn't far enough in the future",
      payer: exactEvmPayload.authorization.from
    };
  }
  if (BigInt(exactEvmPayload.authorization.validAfter) > BigInt(Math.floor(Date.now() / 1e3))) {
    return {
      isValid: false,
      invalidReason: "invalid_exact_evm_payload_authorization_valid_after",
      //"Deadline on permit is in the future",
      payer: exactEvmPayload.authorization.from
    };
  }
  const balance = await getERC20Balance(
    client,
    erc20Address,
    exactEvmPayload.authorization.from
  );
  if (balance < BigInt(paymentRequirements.maxAmountRequired)) {
    return {
      isValid: false,
      invalidReason: "insufficient_funds",
      //"Client does not have enough funds",
      payer: exactEvmPayload.authorization.from
    };
  }
  if (BigInt(exactEvmPayload.authorization.value) < BigInt(paymentRequirements.maxAmountRequired)) {
    return {
      isValid: false,
      invalidReason: "invalid_exact_evm_payload_authorization_value",
      //"Value in payload is not enough to cover paymentRequirements.maxAmountRequired",
      payer: exactEvmPayload.authorization.from
    };
  }
  const signature = exactEvmPayload.signature;
  const signatureLength = signature.startsWith("0x") ? signature.length - 2 : signature.length;
  const isSmartWallet = signatureLength > 130;
  if (isSmartWallet) {
    const payerAddress = exactEvmPayload.authorization.from;
    const bytecode = await client.getCode({ address: payerAddress });
    if (!bytecode || bytecode === "0x") {
      const erc6492Data = (0, import_viem3.parseErc6492Signature)(exactEvmPayload.signature);
      const hasDeploymentInfo = erc6492Data.address && erc6492Data.data;
      if (!hasDeploymentInfo) {
        return {
          isValid: false,
          invalidReason: "invalid_exact_evm_payload_undeployed_smart_wallet",
          payer: payerAddress
        };
      }
    }
  }
  return {
    isValid: true,
    invalidReason: void 0,
    payer: exactEvmPayload.authorization.from
  };
}
async function settle2(wallet, paymentPayload, paymentRequirements) {
  const payload = paymentPayload.payload;
  const valid = await verify2(wallet, paymentPayload, paymentRequirements);
  if (!valid.isValid) {
    return {
      success: false,
      network: paymentPayload.network,
      transaction: "",
      errorReason: valid.invalidReason ?? "invalid_scheme",
      //`Payment is no longer valid: ${valid.invalidReason}`,
      payer: payload.authorization.from
    };
  }
  const signature = payload.signature;
  const signatureLength = signature.startsWith("0x") ? signature.length - 2 : signature.length;
  const isSmartWallet = signatureLength > 130;
  if (isSmartWallet) {
    const bytecode = await wallet.getCode({ address: payload.authorization.from });
    if (!bytecode || bytecode === "0x") {
      return {
        success: false,
        network: paymentPayload.network,
        transaction: "",
        errorReason: "invalid_exact_evm_payload_undeployed_smart_wallet",
        payer: payload.authorization.from
      };
    }
  }
  let tx;
  if (isSmartWallet) {
    const { signature: unwrappedSignature } = (0, import_viem3.parseErc6492Signature)(payload.signature);
    tx = await wallet.writeContract({
      address: paymentRequirements.asset,
      abi: usdcABI,
      functionName: "transferWithAuthorization",
      args: [
        payload.authorization.from,
        payload.authorization.to,
        BigInt(payload.authorization.value),
        BigInt(payload.authorization.validAfter),
        BigInt(payload.authorization.validBefore),
        payload.authorization.nonce,
        unwrappedSignature
      ],
      chain: wallet.chain
    });
  } else {
    const parsedSig = (0, import_viem3.parseSignature)(payload.signature);
    const v = parsedSig.v !== void 0 ? Number(parsedSig.v) : 27 + parsedSig.yParity;
    tx = await wallet.writeContract({
      address: paymentRequirements.asset,
      abi: usdcABI,
      functionName: "transferWithAuthorization",
      args: [
        payload.authorization.from,
        payload.authorization.to,
        BigInt(payload.authorization.value),
        BigInt(payload.authorization.validAfter),
        BigInt(payload.authorization.validBefore),
        payload.authorization.nonce,
        v,
        parsedSig.r,
        parsedSig.s
      ],
      chain: wallet.chain
    });
  }
  const receipt = await wallet.waitForTransactionReceipt({ hash: tx });
  if (receipt.status !== "success") {
    return {
      success: false,
      errorReason: "invalid_transaction_state",
      //`Transaction failed`,
      transaction: tx,
      network: paymentPayload.network,
      payer: payload.authorization.from
    };
  }
  return {
    success: true,
    transaction: tx,
    network: paymentPayload.network,
    payer: payload.authorization.from
  };
}

// src/facilitator/facilitator.ts
async function verify3(client, payload, paymentRequirements, config2) {
  if (paymentRequirements.scheme === "exact") {
    if (SupportedEVMNetworks.includes(paymentRequirements.network)) {
      return verify2(
        client,
        payload,
        paymentRequirements
      );
    }
    if (SupportedSVMNetworks.includes(paymentRequirements.network)) {
      return await verify(
        client,
        payload,
        paymentRequirements,
        config2
      );
    }
  }
  return {
    isValid: false,
    invalidReason: "invalid_scheme",
    payer: SupportedEVMNetworks.includes(paymentRequirements.network) ? payload.payload.authorization.from : ""
  };
}
async function settle3(client, payload, paymentRequirements, config2) {
  if (paymentRequirements.scheme === "exact") {
    if (SupportedEVMNetworks.includes(paymentRequirements.network)) {
      return await settle2(
        client,
        payload,
        paymentRequirements
      );
    }
    if (SupportedSVMNetworks.includes(paymentRequirements.network)) {
      return await settle(
        client,
        payload,
        paymentRequirements,
        config2
      );
    }
  }
  return {
    success: false,
    errorReason: "invalid_scheme",
    transaction: "",
    network: paymentRequirements.network,
    payer: SupportedEVMNetworks.includes(paymentRequirements.network) ? payload.payload.authorization.from : ""
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  settle,
  verify
});
//# sourceMappingURL=index.js.map