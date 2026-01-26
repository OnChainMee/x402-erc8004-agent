import { EventEmitter } from "eventemitter3";
import type { Address, Hex, SignMessageParameters, SignTypedDataParameters, TransactionRequest } from "viem";

import { type IStorage } from "./storage/storageInterface";

export enum GeminiSdkEvent {
  // Popup events
  POPUP_LOADED = "POPUP_LOADED",
  POPUP_UNLOADED = "POPUP_UNLOADED",
  POPUP_APP_CONTEXT = "POPUP_APP_CONTEXT",

  // SDK events
  SDK_CONNECT = "SDK_CONNECT",
  SDK_DISCONNECT = "SDK_DISCONNECT",
  SDK_SEND_TRANSACTION = "SDK_SEND_TRANSACTION",
  SDK_SIGN_DATA = "SDK_SIGN_DATA",
  SDK_SIGN_TYPED_DATA = "SDK_SIGN_TYPED_DATA",
  SDK_SWITCH_CHAIN = "SDK_SWITCH_CHAIN",
  SDK_OPEN_SETTINGS = "SDK_OPEN_SETTINGS",
  SDK_CURRENT_ACCOUNT = "SDK_CURRENT_ACCOUNT",

  // EIP-5792 events
  SDK_SEND_BATCH_CALLS = "SDK_SEND_BATCH_CALLS",
  SDK_GET_CAPABILITIES = "SDK_GET_CAPABILITIES",
  SDK_GET_CALLS_STATUS = "SDK_GET_CALLS_STATUS",
  SDK_SHOW_CALLS_STATUS = "SDK_SHOW_CALLS_STATUS",
}

export interface AppMetadata {
  /**
   * The name of your application
   */
  name?: string;
  /**
   * The description of your application (optional)
   */
  description?: string;
  /**
   * URL of your application
   */
  url?: string;
  /**
   * URL to your application's icon or logo
   */
  icon?: string;
  /**
   * @deprecated Use `name` instead
   */
  appName?: string;
  /**
   * @deprecated Use `icon` instead
   */
  appLogoUrl?: string;
}

export interface AppContext {
  appMetadata: AppMetadata;
  origin: string;
  sdkVersion: string;
}

export interface Chain {
  id: number;
  rpcUrl?: string;
}

// Using const object with 'as const' assertion instead of enum
// This avoids TypeScript's isolatedModules re-export limitations
export const PlatformType = {
  REACT_NATIVE: "REACT_NATIVE",
  WEB: "WEB",
} as const;

// Extract type from const object for type safety
export type PlatformType = (typeof PlatformType)[keyof typeof PlatformType];

export type GeminiProviderConfig = {
  appMetadata: AppMetadata;
  chain: Chain;
  platform?: PlatformType;
  onDisconnectCallback?: () => void;
  storage?: IStorage;
};

export interface RpcRequestArgs {
  readonly method: string;
  readonly params?: readonly unknown[] | object | Hex[];
}

export interface ProviderRpcError extends Error {
  code: number;
  data?: unknown;
  message: string;
}

export type ProviderEventMap = {
  accountsChanged: string[];
  chainChanged: string; // hex string
  connect: {
    readonly chainId: string;
  };
  disconnect: ProviderRpcError;
};

export type ProviderEventCallback = ProviderInterface["emit"];

export class ProviderEventEmitter extends EventEmitter<keyof ProviderEventMap> {}

export interface ProviderInterface extends ProviderEventEmitter {
  disconnect(): Promise<void>;
  emit<K extends keyof ProviderEventMap>(event: K, ...args: [ProviderEventMap[K]]): boolean;
  on<K extends keyof ProviderEventMap>(event: K, listener: (_: ProviderEventMap[K]) => void): this;
  request(args: RpcRequestArgs): Promise<any>;
}

export interface GeminiSdkMessage {
  chainId: number;
  data?: unknown;
  event: GeminiSdkEvent;
  origin: string;
  requestId?: string;
  wcData?: any;
}

export interface GeminiSdkMessageResponse {
  data?: unknown;
  event: GeminiSdkEvent;
  requestId?: string;
}

export interface ConnectResponse extends Omit<GeminiSdkMessageResponse, "data"> {
  data: { address: Address };
}

export interface SendTransactionResponse extends Omit<GeminiSdkMessageResponse, "data"> {
  data: { hash?: Hex; error?: string };
}

export interface SignMessageResponse extends Omit<GeminiSdkMessageResponse, "data"> {
  data: { hash?: Hex; error?: string };
}

export interface SignTypedDataResponse extends Omit<GeminiSdkMessageResponse, "data"> {
  data: { hash?: Hex; error?: string };
}

export interface SwitchChainResponse extends Omit<GeminiSdkMessageResponse, "data"> {
  data: { chainId?: number; error?: string };
}

export interface GeminiSdkSendTransaction extends Omit<GeminiSdkMessage, "data"> {
  data: TransactionRequest;
}

export interface GeminiSdkSignMessage extends Omit<GeminiSdkMessage, "data"> {
  data: SignMessageParameters;
}

export interface GeminiSdkSignTypedData extends Omit<GeminiSdkMessage, "data"> {
  data: SignTypedDataParameters;
}

export interface GeminiSdkSendBatchCalls extends Omit<GeminiSdkMessage, "data"> {
  data: SendCallsParams;
}

export interface GeminiSdkSwitchChain extends Omit<GeminiSdkMessage, "data"> {
  data: number;
}

export interface GeminiSdkAppContextMessage extends Omit<GeminiSdkMessage, "data"> {
  data: AppContext;
}

export interface ReverseEnsResponse {
  address: Address;
  name: string | null;
}

// EIP-5792 Types
export interface Call {
  to: Address;
  value?: Hex;
  data?: Hex;
  chainId?: Hex;
}

export interface SendCallsParams {
  version: string;
  chainId: Hex;
  from: Address;
  calls: Call[];
  capabilities?: Record<string, any>;
}

export interface WalletCapabilities {
  [chainId: string]: {
    atomic?: {
      status: "supported" | "unsupported";
    };
    paymasterService?: {
      supported: boolean;
    };
  };
}

export interface CallBatchMetadata {
  id: string;
  chainId: string;
  from: Address;
  calls: Call[];
  transactionHash?: Hex;
  status: "pending" | "confirmed" | "failed" | "reverted";
  timestamp: number;
  capabilities?: Record<string, any>;
}

export interface GetCallsStatusResponse {
  version: string;
  id: string;
  chainId: Hex;
  status: 100 | 200 | 400 | 500; // pending, confirmed, offchain failure, reverted
  atomic: boolean;
  receipts?: Array<{
    logs: Array<{
      address: Address;
      data: Hex;
      topics: Hex[];
    }>;
    status: "success" | "reverted";
    blockHash: Hex;
    blockNumber: Hex;
    gasUsed: Hex;
    transactionHash: Hex;
  }>;
}

export interface SendCallsResponse {
  id: string;
  capabilities?: {
    caip345?: {
      caip2: string;
      transactionHashes: Hex[];
    };
  };
}
