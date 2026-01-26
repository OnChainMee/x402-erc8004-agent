// src/communicator.ts
import { providerErrors, rpcErrors as rpcErrors2 } from "@metamask/rpc-errors";

// src/constants.ts
import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  polygonAmoy,
  sepolia
} from "viem/chains";

// package.json
var package_default = {
  name: "@gemini-wallet/core",
  version: "0.3.2",
  description: "Core SDK for Gemini Wallet integration with popup communication",
  main: "./dist/index.cjs",
  types: "./dist/index.d.ts",
  type: "module",
  repository: {
    type: "git",
    url: "git+https://github.com/gemini/gemini-wallet-core.git"
  },
  homepage: "https://keys.gemini.com",
  bugs: {
    url: "https://github.com/gemini/gemini-wallet-core/issues"
  },
  license: "MIT",
  author: "Gemini",
  files: [
    "dist",
    "src",
    "README.md",
    "LICENSE"
  ],
  exports: {
    ".": {
      types: "./dist/index.d.ts",
      import: "./dist/index.js",
      require: "./dist/index.cjs"
    },
    "./package.json": "./package.json"
  },
  scripts: {
    build: "dotenv -e .env.production -- tsup",
    dev: "dotenv -e .env.local -- tsup --watch",
    typecheck: "tsc --noEmit",
    lint: "eslint ./src",
    "lint:ci": "eslint --max-warnings 0 ./src",
    "lint:fix": "eslint ./src --fix",
    test: "bun test"
  },
  dependencies: {
    "@metamask/rpc-errors": "7.0.2",
    eventemitter3: "5.0.1"
  },
  devDependencies: {
    "@eslint/eslintrc": "3.3.1",
    "@eslint/js": "9.38.0",
    "@types/node": "22.13.0",
    "dotenv-cli": "10.0.0",
    "esbuild-plugin-replace": "1.4.0",
    eslint: "9.38.0",
    "eslint-config-prettier": "10.1.8",
    "eslint-config-turbo": "2.5.6",
    "eslint-plugin-import": "2.32.0",
    "eslint-plugin-only-warn": "1.1.0",
    "eslint-plugin-prettier": "5.5.4",
    "eslint-plugin-simple-import-sort": "12.1.1",
    "eslint-plugin-sort-keys-fix": "1.1.2",
    globals: "16.4.0",
    prettier: "3.6.2",
    tsup: "8.5.0",
    typescript: "5.5.3",
    "typescript-eslint": "8.40.0",
    vitest: "3.2.4"
  },
  peerDependencies: {
    viem: ">=2.0.0"
  },
  keywords: [
    "gemini",
    "wallet",
    "sdk",
    "ethereum",
    "web3",
    "crypto"
  ],
  module: "./dist/index.js"
};

// src/constants.ts
var DEFAULT_BACKEND_URL = "https://keys.gemini.com";
var SDK_BACKEND_URL = DEFAULT_BACKEND_URL;
var ENS_API_URL = "https://horizon-api.gemini.com/api/ens";
var SDK_VERSION = package_default.version;
var DEFAULT_CHAIN_ID = 42161;
var MAINNET_CHAIN_IDS = {
  ARBITRUM_ONE: 42161,
  BASE: 8453,
  ETHEREUM: 1,
  OP_MAINNET: 10,
  POLYGON: 137
};
var TESTNET_CHAIN_IDS = {
  ARBITRUM_SEPOLIA: 421614,
  BASE_SEPOLIA: 84532,
  OP_SEPOLIA: 11155420,
  POLYGON_AMOY: 80002,
  SEPOLIA: 11155111
};
var SUPPORTED_CHAIN_IDS = [...Object.values(MAINNET_CHAIN_IDS), ...Object.values(TESTNET_CHAIN_IDS)];
function getDefaultRpcUrl(chainId) {
  const chainMap = {
    [mainnet.id]: mainnet.rpcUrls.default.http[0],
    [arbitrum.id]: arbitrum.rpcUrls.default.http[0],
    [optimism.id]: optimism.rpcUrls.default.http[0],
    [base.id]: base.rpcUrls.default.http[0],
    [polygon.id]: polygon.rpcUrls.default.http[0],
    [sepolia.id]: sepolia.rpcUrls.default.http[0],
    [arbitrumSepolia.id]: arbitrumSepolia.rpcUrls.default.http[0],
    [optimismSepolia.id]: optimismSepolia.rpcUrls.default.http[0],
    [baseSepolia.id]: baseSepolia.rpcUrls.default.http[0],
    [polygonAmoy.id]: polygonAmoy.rpcUrls.default.http[0]
  };
  return chainMap[chainId];
}
var POPUP_WIDTH = 420;
var POPUP_HEIGHT = 650;

// src/types.ts
import { EventEmitter } from "eventemitter3";
var GeminiSdkEvent = /* @__PURE__ */ ((GeminiSdkEvent2) => {
  GeminiSdkEvent2["POPUP_LOADED"] = "POPUP_LOADED";
  GeminiSdkEvent2["POPUP_UNLOADED"] = "POPUP_UNLOADED";
  GeminiSdkEvent2["POPUP_APP_CONTEXT"] = "POPUP_APP_CONTEXT";
  GeminiSdkEvent2["SDK_CONNECT"] = "SDK_CONNECT";
  GeminiSdkEvent2["SDK_DISCONNECT"] = "SDK_DISCONNECT";
  GeminiSdkEvent2["SDK_SEND_TRANSACTION"] = "SDK_SEND_TRANSACTION";
  GeminiSdkEvent2["SDK_SIGN_DATA"] = "SDK_SIGN_DATA";
  GeminiSdkEvent2["SDK_SIGN_TYPED_DATA"] = "SDK_SIGN_TYPED_DATA";
  GeminiSdkEvent2["SDK_SWITCH_CHAIN"] = "SDK_SWITCH_CHAIN";
  GeminiSdkEvent2["SDK_OPEN_SETTINGS"] = "SDK_OPEN_SETTINGS";
  GeminiSdkEvent2["SDK_CURRENT_ACCOUNT"] = "SDK_CURRENT_ACCOUNT";
  GeminiSdkEvent2["SDK_SEND_BATCH_CALLS"] = "SDK_SEND_BATCH_CALLS";
  GeminiSdkEvent2["SDK_GET_CAPABILITIES"] = "SDK_GET_CAPABILITIES";
  GeminiSdkEvent2["SDK_GET_CALLS_STATUS"] = "SDK_GET_CALLS_STATUS";
  GeminiSdkEvent2["SDK_SHOW_CALLS_STATUS"] = "SDK_SHOW_CALLS_STATUS";
  return GeminiSdkEvent2;
})(GeminiSdkEvent || {});
var PlatformType = {
  REACT_NATIVE: "REACT_NATIVE",
  WEB: "WEB"
};
var ProviderEventEmitter = class extends EventEmitter {
};

// src/utils/base64.ts
function encodeBase64(array) {
  let base64;
  if (typeof Buffer !== "undefined") {
    base64 = Buffer.from(array).toString("base64");
  } else {
    base64 = btoa(
      Array.from(array).map((b) => String.fromCharCode(b)).join("")
    );
  }
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function decodeBase64(base64url) {
  let base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4 !== 0) {
    base64 += "=";
  }
  if (typeof Buffer !== "undefined") {
    return new Uint8Array(Buffer.from(base64, "base64"));
  } else {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }
}
function bufferToBase64URLString(buffer) {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  return encodeBase64(bytes);
}
function utf8StringToBuffer(value) {
  if (typeof TextEncoder !== "undefined") {
    return new TextEncoder().encode(value);
  } else if (typeof Buffer !== "undefined") {
    return new Uint8Array(Buffer.from(value, "utf8"));
  } else {
    const bytes = new Uint8Array(value.length);
    for (let i = 0; i < value.length; i++) {
      bytes[i] = value.charCodeAt(i);
    }
    return bytes;
  }
}
function base64ToHex(base64) {
  const bytes = decodeBase64(base64);
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}

// src/utils/calculateWalletAddress.ts
import {
  encodeAbiParameters,
  encodeFunctionData,
  encodePacked,
  getCreate2Address,
  keccak256
} from "viem";
var SHARED_CONTRACT_ADDRESSES = {
  ATTESTER: "0x000474392a9cd86a4687354f1Ce2964B52e97484",
  BOOTSTRAPPER: "0x00000000D3254452a909E4eeD47455Af7E27C289",
  REGISTRY: "0x000000000069E2a187AEFFb852bF3cCdC95151B2"
};
var V2_CONTRACT_ADDRESSES = {
  ...SHARED_CONTRACT_ADDRESSES,
  ACCOUNT_IMPLEMENTATION: "0x00000000029d9c8b864DD51d6bb0d99FB72D650b",
  FACTORY: "0x000000000452377e1Bd9e72E939855ECb9363Cab",
  WEBAUTHN_VALIDATOR: "0x7ab16Ff354AcB328452F1D445b3Ddee9a91e9e69"
};
var V1_CONTRACT_ADDRESSES = {
  ...SHARED_CONTRACT_ADDRESSES,
  ACCOUNT_IMPLEMENTATION: "0x0006050168DE255a8672ACaD4821e721CBA44337",
  FACTORY: "0x00E58DF70FaB983a324c4C068c82d20407579FaC",
  WEBAUTHN_VALIDATOR: "0xbA45a2BFb8De3D24cA9D7F1B551E14dFF5d690Fd"
};
function processWalletAddressParams(params, contractAddresses) {
  const { publicKey, credentialId, index = 0n } = params;
  if (!publicKey.startsWith("0x") || publicKey.length !== 130) {
    throw new Error("Invalid public key: must be 64-byte hex string (0x + 128 chars)");
  }
  const pubKeyX = `0x${publicKey.slice(2, 66)}`;
  const pubKeyY = `0x${publicKey.slice(66, 130)}`;
  const webAuthnData = {
    pubKeyX: BigInt(pubKeyX),
    pubKeyY: BigInt(pubKeyY)
  };
  if (!validateWebAuthnKey(webAuthnData)) {
    throw new Error("Invalid WebAuthn key: coordinates are not on secp256r1 curve");
  }
  const authenticatorIdHash = generateAuthenticatorIdHash(credentialId);
  return calculateAddressInternal({
    authenticatorIdHash,
    contractAddresses,
    index,
    webAuthnData
  });
}
function calculateWalletAddress(params) {
  return processWalletAddressParams(params, V2_CONTRACT_ADDRESSES);
}
function calculateV1Address(params) {
  return processWalletAddressParams(params, V1_CONTRACT_ADDRESSES);
}
function generateAuthenticatorIdHash(credentialId) {
  const padding = "=".repeat((4 - credentialId.length % 4) % 4);
  const base64 = credentialId.replace(/-/g, "+").replace(/_/g, "/") + padding;
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return keccak256(bytes);
}
function validateWebAuthnKey(webAuthnData) {
  const SECP256R1_P = 0xffffffff00000001000000000000000000000000ffffffffffffffffffffffffn;
  const SECP256R1_B = 0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604bn;
  const { pubKeyX, pubKeyY } = webAuthnData;
  if (pubKeyX === 0n || pubKeyY === 0n || pubKeyX >= SECP256R1_P || pubKeyY >= SECP256R1_P) {
    return false;
  }
  const ySquared = pubKeyY * pubKeyY % SECP256R1_P;
  const xCubed = pubKeyX * pubKeyX * pubKeyX % SECP256R1_P;
  const threeX = 3n * pubKeyX % SECP256R1_P;
  const rightSide = (xCubed + SECP256R1_P - threeX + SECP256R1_B) % SECP256R1_P;
  return ySquared === rightSide;
}
function calculateAddressInternal(params) {
  const { webAuthnData, authenticatorIdHash, index, contractAddresses } = params;
  const factoryAddress = contractAddresses.FACTORY;
  const accountImplementation = contractAddresses.ACCOUNT_IMPLEMENTATION;
  const webAuthnValidator = contractAddresses.WEBAUTHN_VALIDATOR;
  const attester = contractAddresses.ATTESTER;
  const bootstrapper = contractAddresses.BOOTSTRAPPER;
  const registry = contractAddresses.REGISTRY;
  const salt = keccak256(
    encodePacked(
      ["uint256", "uint256", "bytes32", "uint256"],
      [webAuthnData.pubKeyX, webAuthnData.pubKeyY, authenticatorIdHash, index]
    )
  );
  const validatorInitData = encodeAbiParameters(
    [
      {
        components: [
          { name: "pubKeyX", type: "uint256" },
          { name: "pubKeyY", type: "uint256" }
        ],
        type: "tuple"
      },
      { type: "bytes32" }
    ],
    [webAuthnData, authenticatorIdHash]
  );
  const registryConfig = {
    attesters: [attester],
    registry,
    threshold: 1n
  };
  const bootstrapCall = encodeFunctionData({
    abi: [
      {
        inputs: [
          { name: "validator", type: "address" },
          { name: "validatorInitData", type: "bytes" },
          {
            components: [
              { name: "registry", type: "address" },
              { name: "attesters", type: "address[]" },
              { name: "threshold", type: "uint8" }
            ],
            name: "registryConfig",
            type: "tuple"
          }
        ],
        name: "initNexusWithSingleValidator",
        type: "function"
      }
    ],
    args: [webAuthnValidator, validatorInitData, registryConfig],
    functionName: "initNexusWithSingleValidator"
  });
  const initData = encodeAbiParameters([{ type: "address" }, { type: "bytes" }], [bootstrapper, bootstrapCall]);
  return predictProxyAddress(accountImplementation, salt, initData, factoryAddress);
}
function predictProxyAddress(implementation, salt, initData, deployer) {
  const initializeCall = encodeFunctionData({
    abi: [
      {
        inputs: [{ name: "data", type: "bytes" }],
        name: "initializeAccount",
        type: "function"
      }
    ],
    args: [initData],
    functionName: "initializeAccount"
  });
  const constructorArgs = encodeAbiParameters(
    [{ type: "address" }, { type: "bytes" }],
    [implementation, initializeCall]
  );
  const nexusProxyCreationCode = "0x60806040526102c8803803806100148161018c565b92833981016040828203126101885781516001600160a01b03811692909190838303610188576020810151906001600160401b03821161018857019281601f8501121561018857835161006e610069826101c5565b61018c565b9481865260208601936020838301011161018857815f926020809301865e8601015260017f90b772c2cb8a51aa7a8a65fc23543c6d022d5b3f8e2b92eed79fba7eef8293005d823b15610176577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b031916821790557fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b5f80a282511561015e575f8091610146945190845af43d15610156573d91610137610069846101c5565b9283523d5f602085013e6101e0565b505b6040516089908161023f8239f35b6060916101e0565b50505034156101485763b398979f60e01b5f5260045ffd5b634c9c8ce360e01b5f5260045260245ffd5b5f80fd5b6040519190601f01601f191682016001600160401b038111838210176101b157604052565b634e487b7160e01b5f52604160045260245ffd5b6001600160401b0381116101b157601f01601f191660200190565b9061020457508051156101f557805190602001fd5b63d6bda27560e01b5f5260045ffd5b81511580610235575b610215575090565b639996b31560e01b5f9081526001600160a01b0391909116600452602490fd5b50803b1561020d56fe608060405236156051577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f9081906001600160a01b0316368280378136915af43d5f803e15604d573d5ff35b3d5ffd5b00fea264697066735822122041b5f70a351952142223f22504ca7b4e6d975f3a302d114ff820442fcf815ac264736f6c634300081b0033";
  const initCodeHash = keccak256(encodePacked(["bytes", "bytes"], [nexusProxyCreationCode, constructorArgs]));
  return getCreate2Address({
    bytecodeHash: initCodeHash,
    from: deployer,
    salt
  });
}

// src/utils/ens.ts
async function reverseResolveEns(address) {
  try {
    const response = await fetch(`${ENS_API_URL}/reverse/${address}`);
    if (!response.ok) {
      throw new Error(`ENS API request failed: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return {
      address: data.address,
      name: data.name || null
    };
  } catch (error) {
    console.error("Failed to resolve ENS name:", error);
    return {
      address,
      name: null
    };
  }
}

// src/utils/popup.ts
import { rpcErrors } from "@metamask/rpc-errors";
var POPUP_WIDTH2 = 420;
var POPUP_HEIGHT2 = 650;
var openPopup = (url) => {
  const left = (window.innerWidth - POPUP_WIDTH2) / 2 + window.screenX;
  const top = (window.innerHeight - POPUP_HEIGHT2) / 2 + window.screenY;
  const popupId = `wallet_${window?.crypto?.randomUUID()}`;
  const popup = window.open(url, popupId, `width=${POPUP_WIDTH2}, height=${POPUP_HEIGHT2}, left=${left}, top=${top}`);
  popup?.focus();
  if (!popup) {
    throw rpcErrors.internal("Pop up window failed to open");
  }
  return popup;
};
var closePopup = (popup) => {
  if (popup && !popup.closed) {
    popup.opener?.focus();
    popup.close();
  }
};

// src/utils/strings.ts
var hexStringFromNumber = (num) => {
  return `0x${BigInt(num).toString(16)}`;
};
var safeJsonStringify = (obj) => JSON.stringify(obj, (_, value) => typeof value === "bigint" ? value.toString() + "n" : value, 2);

// src/communicator.ts
var Communicator = class {
  constructor({ appMetadata, onDisconnectCallback }) {
    this.popup = null;
    this.listeners = /* @__PURE__ */ new Map();
    // posts a message to the popup window
    this.postMessage = async (message) => {
      const popup = await this.waitForPopupLoaded();
      popup.postMessage(message, this.url.origin);
    };
    // posts a request to the popup window and waits for a response
    this.postRequestAndWaitForResponse = async (request) => {
      const responsePromise = this.onMessage(({ requestId }) => requestId === request.requestId);
      this.postMessage(request);
      return await responsePromise;
    };
    // listens for messages from the popup window that match a given predicate
    this.onMessage = (predicate) => {
      return new Promise((resolve, reject) => {
        const listener = (event) => {
          if (event.origin !== this.url.origin) return;
          const message = event.data;
          if (predicate(message)) {
            resolve(message);
            window.removeEventListener("message", listener);
            this.listeners.delete(listener);
          }
        };
        window.addEventListener("message", listener);
        this.listeners.set(listener, { reject });
      });
    };
    // closes the popup, rejects all requests and clears event listeners
    this.onRequestCancelled = () => {
      closePopup(this.popup);
      this.popup = null;
      this.listeners.forEach(({ reject }, listener) => {
        reject(providerErrors.userRejectedRequest());
        window.removeEventListener("message", listener);
      });
      this.listeners.clear();
    };
    // waits for the popup window to fully load and then sends a version message
    this.waitForPopupLoaded = () => {
      if (this.popup && !this.popup.closed) {
        this.popup.focus();
        return Promise.resolve(this.popup);
      }
      this.popup = openPopup(this.url);
      this.onMessage(({ event }) => event === "POPUP_UNLOADED" /* POPUP_UNLOADED */).then(this.onRequestCancelled).catch(() => {
      });
      this.onMessage(({ event }) => event === "SDK_DISCONNECT" /* SDK_DISCONNECT */).then(() => {
        this.onDisconnectCallback?.();
        this.onRequestCancelled();
      }).catch(() => {
      });
      return this.onMessage(
        ({ event }) => event === "POPUP_LOADED" /* POPUP_LOADED */
      ).then((message) => {
        this.postMessage({
          chainId: DEFAULT_CHAIN_ID,
          data: {
            appMetadata: this.appMetadata,
            origin: window.location.origin,
            sdkVersion: SDK_VERSION
          },
          event: "POPUP_APP_CONTEXT" /* POPUP_APP_CONTEXT */,
          origin: window.location.origin,
          requestId: message.requestId
        });
      }).then(() => {
        if (!this.popup) throw rpcErrors2.internal();
        return this.popup;
      });
    };
    this.url = new URL(SDK_BACKEND_URL);
    this.appMetadata = appMetadata;
    this.onDisconnectCallback = onDisconnectCallback;
  }
};

// src/provider/provider.ts
import { errorCodes, providerErrors as providerErrors2, rpcErrors as rpcErrors4, serializeError } from "@metamask/rpc-errors";

// src/storage/storage.ts
var memoryStorage = {};
var GeminiStorage = class {
  constructor({ scope = "@gemini", module = "wallet" } = {}) {
    this.scope = scope;
    this.module = module;
  }
  scopedKey(key) {
    return `${this.scope}.${this.module}.${key}`;
  }
  async storeObject(key, item) {
    const json = safeJsonStringify(item);
    await this.setItem(key, json);
  }
  async loadObject(key, fallback) {
    const item = await this.getItem(key);
    if (!item) {
      await this.storeObject(key, fallback);
      return fallback;
    }
    try {
      return JSON.parse(item);
    } catch (error) {
      console.error(`Error parsing JSON for key ${key}:`, error);
      return fallback;
    }
  }
  // eslint-disable-next-line require-await
  async setItem(key, value) {
    const scoped = this.scopedKey(key);
    try {
      localStorage.setItem(scoped, value);
    } catch (e) {
      console.warn("localStorage not available, using memory storage", e);
      memoryStorage[scoped] = value;
    }
  }
  // eslint-disable-next-line require-await
  async getItem(key) {
    const scoped = this.scopedKey(key);
    try {
      return localStorage.getItem(scoped);
    } catch (e) {
      console.warn("localStorage not available, using memory storage", e);
      return memoryStorage[scoped] || null;
    }
  }
  // eslint-disable-next-line require-await
  async removeItem(key) {
    const scoped = this.scopedKey(key);
    try {
      localStorage.removeItem(scoped);
    } catch (e) {
      console.warn("localStorage not available, using memory storage", e);
      delete memoryStorage[scoped];
    }
  }
  async removeItems(keys) {
    await Promise.all(keys.map((key) => this.removeItem(key)));
  }
};

// src/storage/storageInterface.ts
var STORAGE_ETH_ACCOUNTS_KEY = "eth-accounts";
var STORAGE_ETH_ACTIVE_CHAIN_KEY = "eth-active-chain";
var STORAGE_PASSKEY_CREDENTIAL_KEY = "passkey-credential";
var STORAGE_PRESERVED_PASSKEY_CREDENTIALS_KEY = "preserved-passkey-credentials";
var STORAGE_SMART_ACCOUNT_KEY = "smart-account";
var STORAGE_SETTINGS_KEY = "settings";
var STORAGE_WC_REQUESTS_KEY = "wc-requests";
var STORAGE_CALL_BATCHES_KEY = "call-batches";

// src/wallets/wallet.ts
function isChainSupportedByGeminiSw(chainId) {
  return SUPPORTED_CHAIN_IDS.includes(chainId);
}
var GeminiWallet = class {
  constructor({ appMetadata, chain, onDisconnectCallback, storage }) {
    this.accounts = [];
    this.chain = { id: DEFAULT_CHAIN_ID };
    this.communicator = new Communicator({
      appMetadata,
      onDisconnectCallback
    });
    this.storage = storage || new GeminiStorage();
    const fallbackChainId = chain?.id ?? DEFAULT_CHAIN_ID;
    const fallbackRpcUrl = chain?.rpcUrl ?? getDefaultRpcUrl(fallbackChainId);
    const defaultChain = {
      id: fallbackChainId,
      rpcUrl: fallbackRpcUrl
    };
    this.initPromise = this.initializeFromStorage(defaultChain);
  }
  async initializeFromStorage(defaultChain) {
    const fallbackChain = {
      ...defaultChain,
      rpcUrl: defaultChain.rpcUrl || getDefaultRpcUrl(defaultChain.id)
    };
    const [storedChain, storedAccounts] = await Promise.all([
      this.storage.loadObject(STORAGE_ETH_ACTIVE_CHAIN_KEY, fallbackChain),
      this.storage.loadObject(STORAGE_ETH_ACCOUNTS_KEY, this.accounts)
    ]);
    this.chain = {
      ...storedChain,
      rpcUrl: storedChain.rpcUrl || getDefaultRpcUrl(storedChain.id)
    };
    this.accounts = storedAccounts;
  }
  async ensureInitialized() {
    await this.initPromise;
  }
  async connect() {
    await this.ensureInitialized();
    const response = await this.sendMessageToPopup({
      chainId: this.chain.id,
      event: "SDK_CONNECT" /* SDK_CONNECT */,
      origin: window.location.origin
    });
    this.accounts = response.data.address ? [response.data.address] : [];
    await this.storage.storeObject(STORAGE_ETH_ACCOUNTS_KEY, this.accounts);
    return this.accounts;
  }
  async disconnect() {
    await this.ensureInitialized();
    this.accounts = [];
    await this.storage.storeObject(STORAGE_ETH_ACCOUNTS_KEY, this.accounts);
  }
  async switchChain({ id }) {
    await this.ensureInitialized();
    if (isChainSupportedByGeminiSw(id)) {
      this.chain = {
        id,
        rpcUrl: getDefaultRpcUrl(id)
      };
      await this.storage.storeObject(STORAGE_ETH_ACTIVE_CHAIN_KEY, this.chain);
      return null;
    }
    const response = await this.sendMessageToPopup({
      chainId: this.chain.id,
      data: id,
      event: "SDK_SWITCH_CHAIN" /* SDK_SWITCH_CHAIN */,
      origin: window.location.origin
    });
    return response.data.error ?? "Unsupported chain.";
  }
  async sendTransaction(txData) {
    await this.ensureInitialized();
    const response = await this.sendMessageToPopup({
      chainId: this.chain.id,
      data: txData,
      event: "SDK_SEND_TRANSACTION" /* SDK_SEND_TRANSACTION */,
      origin: window.location.origin
    });
    return response.data;
  }
  async signData({ message }) {
    await this.ensureInitialized();
    const response = await this.sendMessageToPopup({
      chainId: this.chain.id,
      data: { message },
      event: "SDK_SIGN_DATA" /* SDK_SIGN_DATA */,
      origin: window.location.origin
    });
    return response.data;
  }
  async signTypedData({
    message,
    types,
    primaryType,
    domain
  }) {
    await this.ensureInitialized();
    const response = await this.sendMessageToPopup({
      chainId: this.chain.id,
      data: {
        domain,
        message,
        primaryType,
        types
      },
      event: "SDK_SIGN_TYPED_DATA" /* SDK_SIGN_TYPED_DATA */,
      origin: window.location.origin
    });
    return response.data;
  }
  async openSettings() {
    await this.ensureInitialized();
    await this.sendMessageToPopup({
      chainId: this.chain.id,
      data: {},
      event: "SDK_OPEN_SETTINGS" /* SDK_OPEN_SETTINGS */,
      origin: window.location.origin
    });
  }
  // EIP-5792 Wallet Call API Methods
  getCapabilities(requestedChainIds) {
    const capabilities = {};
    const chainIds = requestedChainIds?.map((id) => parseInt(id, 16)) || [this.chain.id];
    for (const chainId of chainIds) {
      const chainIdHex = hexStringFromNumber(chainId);
      capabilities[chainIdHex] = {
        atomic: {
          status: "supported"
          // Smart accounts support atomic batch execution
        },
        paymasterService: {
          supported: true
        }
      };
    }
    return capabilities;
  }
  async sendCalls(params) {
    await this.ensureInitialized();
    const batchId = window?.crypto?.randomUUID() || `batch-${Date.now()}-${Math.random()}`;
    const requestedChainId = parseInt(params.chainId, 16);
    if (requestedChainId !== this.chain.id) {
      throw new Error(`Chain mismatch. Expected ${this.chain.id}, got ${requestedChainId}`);
    }
    if (!params.calls || params.calls.length === 0) {
      throw new Error("No calls provided");
    }
    const batchMetadata = {
      calls: params.calls,
      capabilities: params.capabilities,
      chainId: params.chainId,
      from: params.from,
      id: batchId,
      status: "pending",
      timestamp: Date.now()
    };
    const batches = await this.storage.loadObject(STORAGE_CALL_BATCHES_KEY, {});
    batches[batchId] = batchMetadata;
    await this.storage.storeObject(STORAGE_CALL_BATCHES_KEY, batches);
    try {
      const response = await this.sendMessageToPopup({
        chainId: this.chain.id,
        data: {
          calls: params.calls
        },
        event: "SDK_SEND_BATCH_CALLS" /* SDK_SEND_BATCH_CALLS */,
        origin: window.location.origin
      });
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      batchMetadata.transactionHash = response.data.hash;
      batchMetadata.status = "pending";
      batches[batchId] = batchMetadata;
      await this.storage.storeObject(STORAGE_CALL_BATCHES_KEY, batches);
      return {
        capabilities: {
          caip345: {
            caip2: `eip155:${requestedChainId}`,
            transactionHashes: [response.data.hash]
          }
        },
        id: batchId
      };
    } catch (error) {
      batchMetadata.status = "failed";
      batches[batchId] = batchMetadata;
      await this.storage.storeObject(STORAGE_CALL_BATCHES_KEY, batches);
      throw error;
    }
  }
  async getCallsStatus(batchId) {
    await this.ensureInitialized();
    const batches = await this.storage.loadObject(STORAGE_CALL_BATCHES_KEY, {});
    const batch = batches[batchId];
    if (!batch) {
      throw new Error(`Unknown bundle ID: ${batchId}`);
    }
    if (batch.transactionHash && this.chain.rpcUrl) {
      try {
        const response = await fetch(this.chain.rpcUrl, {
          body: JSON.stringify({
            id: 1,
            jsonrpc: "2.0",
            method: "eth_getTransactionReceipt",
            params: [batch.transactionHash]
          }),
          headers: { "Content-Type": "application/json" },
          method: "POST"
        });
        const json = await response.json();
        const receipt = json.result;
        if (receipt) {
          const receiptStatus = receipt.status === "0x1" ? "confirmed" : "reverted";
          batch.status = receiptStatus;
          batches[batchId] = batch;
          await this.storage.storeObject(STORAGE_CALL_BATCHES_KEY, batches);
          return {
            atomic: true,
            chainId: batch.chainId,
            id: batchId,
            receipts: [
              {
                blockHash: receipt.blockHash,
                blockNumber: receipt.blockNumber,
                gasUsed: receipt.gasUsed,
                logs: receipt.logs.map((log) => ({
                  address: log.address,
                  data: log.data,
                  topics: log.topics
                })),
                status: receiptStatus === "confirmed" ? "success" : "reverted",
                transactionHash: receipt.transactionHash
              }
            ],
            status: receiptStatus === "confirmed" ? 200 : 500,
            version: "2.0.0"
          };
        }
      } catch (error) {
        console.error("Failed to fetch transaction receipt:", error);
      }
    }
    let statusCode;
    switch (batch.status) {
      case "pending":
        statusCode = 100;
        break;
      case "confirmed":
        statusCode = 200;
        break;
      case "failed":
        statusCode = 400;
        break;
      case "reverted":
        statusCode = 500;
        break;
      default:
        statusCode = 100;
    }
    return {
      atomic: true,
      chainId: batch.chainId,
      id: batchId,
      status: statusCode,
      version: "2.0.0"
    };
  }
  async showCallsStatus(batchId) {
    await this.ensureInitialized();
    const batches = await this.storage.loadObject(STORAGE_CALL_BATCHES_KEY, {});
    const batch = batches[batchId];
    if (!batch) {
      throw new Error(`Unknown bundle ID: ${batchId}`);
    }
  }
  sendMessageToPopup(request) {
    return this.communicator.postRequestAndWaitForResponse({
      ...request,
      requestId: window?.crypto?.randomUUID()
    });
  }
};

// src/provider/provider.utils.ts
import { rpcErrors as rpcErrors3 } from "@metamask/rpc-errors";
import { isHex } from "viem";
var fetchRpcRequest = async (request, rpcUrl) => {
  const requestBody = {
    ...request,
    id: window?.crypto?.randomUUID(),
    jsonrpc: "2.0"
  };
  const res = await window.fetch(rpcUrl, {
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    mode: "cors"
  });
  const { result, error } = await res.json();
  if (error) throw error;
  return result;
};
function validateRpcRequestArgs(args) {
  if (!args || typeof args !== "object" || Array.isArray(args)) {
    throw rpcErrors3.invalidParams({
      message: "Expected a single, non-array, object argument."
    });
  }
  const { method, params } = args;
  if (typeof method !== "string" || method.length === 0) {
    throw rpcErrors3.invalidParams({
      message: "'args.method' must be a non-empty string."
    });
  }
  if (params !== void 0 && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
    throw rpcErrors3.invalidParams({
      message: "'args.params' must be an object or array if provided."
    });
  }
}
function convertSendValuesToBigInt(tx) {
  const FIELDS_TO_NORMALIZE = ["value", "gas", "gasPrice", "maxPriorityFeePerGas", "maxFeePerGas"];
  const normalized = { ...tx };
  for (const field of FIELDS_TO_NORMALIZE) {
    if (!(field in tx)) continue;
    const value = tx[field];
    if (typeof value === "bigint") continue;
    if (isHex(value)) {
      normalized[field] = BigInt(value);
    }
  }
  return normalized;
}

// src/provider/provider.ts
var GeminiWalletProvider = class extends ProviderEventEmitter {
  constructor(providerConfig) {
    super();
    this.wallet = null;
    this.config = providerConfig;
    const userDisconnectCallback = providerConfig.onDisconnectCallback;
    this.wallet = new GeminiWallet({
      ...providerConfig,
      onDisconnectCallback: () => {
        userDisconnectCallback?.();
        this.disconnect();
      }
    });
  }
  async request(args) {
    try {
      validateRpcRequestArgs(args);
      if (!this.wallet?.accounts?.length) {
        switch (args.method) {
          case "eth_requestAccounts": {
            if (!this.wallet) {
              const userDisconnectCallback = this.config.onDisconnectCallback;
              this.wallet = new GeminiWallet({
                ...this.config,
                onDisconnectCallback: () => {
                  userDisconnectCallback?.();
                  this.disconnect();
                }
              });
            }
            await this.wallet.connect();
            this.emit("accountsChanged", this.wallet.accounts);
            break;
          }
          case "net_version":
            return DEFAULT_CHAIN_ID;
          case "eth_chainId":
            return hexStringFromNumber(DEFAULT_CHAIN_ID);
          default: {
            throw providerErrors2.unauthorized();
          }
        }
      }
      let response;
      let requestParams;
      switch (args.method) {
        case "eth_requestAccounts":
        case "eth_accounts":
          response = this.wallet.accounts;
          break;
        case "net_version":
          response = this.wallet.chain.id;
          break;
        case "eth_chainId":
          response = hexStringFromNumber(this.wallet.chain.id);
          break;
        case "personal_sign":
        case "wallet_sign":
          requestParams = args.params;
          response = await this.wallet.signData({
            account: requestParams[1],
            message: requestParams[0]
          });
          if (response.error) {
            throw rpcErrors4.transactionRejected(response.error);
          } else {
            response = response.hash;
          }
          break;
        case "eth_sendTransaction":
        case "wallet_sendTransaction":
          requestParams = args.params;
          requestParams = convertSendValuesToBigInt(requestParams[0]);
          response = await this.wallet.sendTransaction(requestParams);
          if (response.error) {
            throw rpcErrors4.transactionRejected(response.error);
          } else {
            response = response.hash;
          }
          break;
        case "wallet_switchEthereumChain": {
          const rawParams = args.params;
          let chainId;
          if (Array.isArray(rawParams) && rawParams[0]?.chainId) {
            chainId = parseInt(rawParams[0].chainId, 16);
          } else if (rawParams && typeof rawParams === "object" && "id" in rawParams && Number.isInteger(rawParams.id)) {
            chainId = rawParams.id;
          } else {
            throw rpcErrors4.invalidParams(
              "Invalid chain id argument. Expected [{ chainId: hex_string }] or { id: number }."
            );
          }
          response = await this.wallet.switchChain({ id: chainId });
          if (response) {
            throw providerErrors2.custom({ code: 4902, message: response });
          }
          await this.emit("chainChanged", hexStringFromNumber(chainId));
          break;
        }
        case "eth_signTypedData_v1":
        case "eth_signTypedData_v2":
        case "eth_signTypedData_v3":
        case "eth_signTypedData_v4":
        case "eth_signTypedData": {
          requestParams = args.params;
          const signedTypedDataParams = JSON.parse(requestParams[1]);
          response = await this.wallet.signTypedData({
            account: requestParams[0],
            domain: signedTypedDataParams.domain,
            message: signedTypedDataParams.message,
            primaryType: signedTypedDataParams.primaryType,
            types: signedTypedDataParams.types
          });
          if (response.error) {
            throw rpcErrors4.transactionRejected(response.error);
          } else {
            response = response.hash;
          }
          break;
        }
        // EIP-5792 Wallet Call API
        case "wallet_getCapabilities": {
          const capabilityParams = Array.isArray(args.params) ? args.params : void 0;
          response = this.getCapabilities(capabilityParams);
          break;
        }
        case "wallet_sendCalls": {
          requestParams = args.params;
          response = await this.sendCalls(requestParams[0]);
          break;
        }
        case "wallet_getCallsStatus": {
          requestParams = args.params;
          response = await this.getCallsStatus(requestParams[0]);
          break;
        }
        case "wallet_showCallsStatus": {
          requestParams = args.params;
          await this.showCallsStatus(requestParams[0]);
          response = null;
          break;
        }
        // TODO: not yet implemented or unclear if we support
        case "eth_ecRecover":
        case "eth_subscribe":
        case "eth_unsubscribe":
        case "personal_ecRecover":
        case "eth_signTransaction":
        case "wallet_watchAsset":
        case "wallet_grantPermissions":
          throw rpcErrors4.methodNotSupported("Not yet implemented.");
        // not supported
        case "eth_sign":
        case "eth_coinbase":
        case "wallet_addEthereumChain":
          throw rpcErrors4.methodNotSupported();
        // call rpc directly for everything else
        default:
          if (!this.wallet.chain.rpcUrl)
            throw rpcErrors4.internal(`RPC URL missing for current chain (${this.wallet.chain.id})`);
          return fetchRpcRequest(args, this.wallet.chain.rpcUrl);
      }
      return response;
    } catch (error) {
      const { code } = error;
      if (code === errorCodes.provider.unauthorized) this.disconnect();
      return Promise.reject(serializeError(error));
    }
  }
  // custom wallet function to open settings page
  async openSettings() {
    await this.wallet?.openSettings();
  }
  // EIP-5792 Implementation Methods - delegating to wallet
  getCapabilities(params) {
    if (!this.wallet) {
      throw providerErrors2.unauthorized();
    }
    const requestedChainIds = params?.[0];
    return this.wallet.getCapabilities(requestedChainIds);
  }
  async sendCalls(params) {
    if (!this.wallet) {
      throw providerErrors2.unauthorized();
    }
    try {
      return await this.wallet.sendCalls(params);
    } catch (error) {
      throw rpcErrors4.transactionRejected(error instanceof Error ? error.message : String(error));
    }
  }
  async getCallsStatus(batchId) {
    if (!this.wallet) {
      throw providerErrors2.unauthorized();
    }
    try {
      return await this.wallet.getCallsStatus(batchId);
    } catch (error) {
      throw rpcErrors4.invalidParams(error instanceof Error ? error.message : String(error));
    }
  }
  async showCallsStatus(batchId) {
    if (!this.wallet) {
      throw providerErrors2.unauthorized();
    }
    try {
      await this.wallet.showCallsStatus(batchId);
    } catch (error) {
      throw rpcErrors4.invalidParams(error instanceof Error ? error.message : String(error));
    }
  }
  async disconnect() {
    if (this.wallet) {
      const storage = this.config.storage || new GeminiStorage();
      await storage.removeItem(STORAGE_ETH_ACCOUNTS_KEY);
      await storage.removeItem(STORAGE_ETH_ACTIVE_CHAIN_KEY);
    }
    this.wallet = null;
    this.config.onDisconnectCallback?.();
    await this.emit("disconnect", "User initiated disconnection");
    await this.emit("accountsChanged", []);
  }
};
export {
  Communicator,
  DEFAULT_CHAIN_ID,
  GeminiSdkEvent,
  GeminiStorage,
  GeminiWallet,
  GeminiWalletProvider,
  POPUP_HEIGHT,
  POPUP_WIDTH,
  PlatformType,
  ProviderEventEmitter,
  SDK_BACKEND_URL,
  SDK_VERSION,
  STORAGE_CALL_BATCHES_KEY,
  STORAGE_ETH_ACCOUNTS_KEY,
  STORAGE_ETH_ACTIVE_CHAIN_KEY,
  STORAGE_PASSKEY_CREDENTIAL_KEY,
  STORAGE_PRESERVED_PASSKEY_CREDENTIALS_KEY,
  STORAGE_SETTINGS_KEY,
  STORAGE_SMART_ACCOUNT_KEY,
  STORAGE_WC_REQUESTS_KEY,
  base64ToHex,
  bufferToBase64URLString,
  calculateV1Address,
  calculateWalletAddress,
  closePopup,
  convertSendValuesToBigInt,
  decodeBase64,
  encodeBase64,
  fetchRpcRequest,
  generateAuthenticatorIdHash,
  hexStringFromNumber,
  isChainSupportedByGeminiSw,
  openPopup,
  reverseResolveEns,
  safeJsonStringify,
  utf8StringToBuffer,
  validateRpcRequestArgs,
  validateWebAuthnKey
};
//# sourceMappingURL=index.js.map