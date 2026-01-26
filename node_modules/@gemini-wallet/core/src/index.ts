// Main exports
export { Communicator } from "./communicator";

// Provider exports
export { GeminiWalletProvider } from "./provider";
export * from "./provider/provider.utils";

// Wallet exports
export { GeminiWallet, isChainSupportedByGeminiSw } from "./wallets";

// Storage exports
export type { GeminiStorageConfig, IStorage } from "./storage";
export {
  GeminiStorage,
  STORAGE_CALL_BATCHES_KEY,
  STORAGE_ETH_ACCOUNTS_KEY,
  STORAGE_ETH_ACTIVE_CHAIN_KEY,
  STORAGE_PASSKEY_CREDENTIAL_KEY,
  STORAGE_PRESERVED_PASSKEY_CREDENTIALS_KEY,
  STORAGE_SETTINGS_KEY,
  STORAGE_SMART_ACCOUNT_KEY,
  STORAGE_WC_REQUESTS_KEY,
} from "./storage";

// Type exports
export type {
  AppContext,
  AppMetadata,
  Call,
  CallBatchMetadata,
  Chain,
  ConnectResponse,
  GeminiProviderConfig,
  GeminiSdkAppContextMessage,
  GeminiSdkMessage,
  GeminiSdkMessageResponse,
  GeminiSdkSendBatchCalls,
  GeminiSdkSendTransaction,
  GeminiSdkSignMessage,
  GeminiSdkSignTypedData,
  GeminiSdkSwitchChain,
  GetCallsStatusResponse,
  ProviderEventCallback,
  ProviderEventMap,
  ProviderInterface,
  ProviderRpcError,
  ReverseEnsResponse,
  RpcRequestArgs,
  SendCallsParams,
  SendCallsResponse,
  SendTransactionResponse,
  SignMessageResponse,
  SignTypedDataResponse,
  SwitchChainResponse,
  WalletCapabilities,
} from "./types";
export { GeminiSdkEvent, PlatformType, ProviderEventEmitter } from "./types";

// Utility exports
export type { CalculateWalletAddressParams, WebAuthnValidatorData } from "./utils";
export {
  base64ToHex,
  bufferToBase64URLString,
  calculateV1Address,
  calculateWalletAddress,
  closePopup,
  decodeBase64,
  encodeBase64,
  generateAuthenticatorIdHash,
  hexStringFromNumber,
  openPopup,
  reverseResolveEns,
  safeJsonStringify,
  utf8StringToBuffer,
  validateWebAuthnKey,
} from "./utils";

// Constants
export { DEFAULT_CHAIN_ID, POPUP_HEIGHT, POPUP_WIDTH, SDK_BACKEND_URL, SDK_VERSION } from "./constants";
