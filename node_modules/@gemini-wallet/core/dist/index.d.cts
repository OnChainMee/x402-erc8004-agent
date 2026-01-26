import { EventEmitter } from 'eventemitter3';
import { Hex, Address, TransactionRequest, SignMessageParameters, SignTypedDataParameters, SwitchChainParameters } from 'viem';

/**
 * Interface for storage backends used by the Gemini wallet SDK
 */
interface IStorage {
    /**
     * Store a serializable object in storage
     * @param key Storage key
     * @param item Object to store
     */
    storeObject<T>(key: string, item: T): Promise<void>;
    /**
     * Load a serializable object from storage
     * @param key Storage key
     * @param fallback Default value if key doesn't exist
     * @returns The stored object or fallback
     */
    loadObject<T>(key: string, fallback: T): Promise<T>;
    /**
     * Store a string value in storage
     * @param key Storage key
     * @param value String value to store
     */
    setItem(key: string, value: string): Promise<void>;
    /**
     * Retrieve a string value from storage
     * @param key Storage key
     * @returns The stored string or null if not found
     */
    getItem(key: string): Promise<string | null>;
    /**
     * Remove an item from storage
     * @param key Storage key
     */
    removeItem(key: string): Promise<void>;
    /**
     * Remove multiple items from storage
     * @param keys Array of storage keys to remove
     */
    removeItems(keys: string[]): Promise<void>;
}
declare const STORAGE_ETH_ACCOUNTS_KEY = "eth-accounts";
declare const STORAGE_ETH_ACTIVE_CHAIN_KEY = "eth-active-chain";
declare const STORAGE_PASSKEY_CREDENTIAL_KEY = "passkey-credential";
declare const STORAGE_PRESERVED_PASSKEY_CREDENTIALS_KEY = "preserved-passkey-credentials";
declare const STORAGE_SMART_ACCOUNT_KEY = "smart-account";
declare const STORAGE_SETTINGS_KEY = "settings";
declare const STORAGE_WC_REQUESTS_KEY = "wc-requests";
declare const STORAGE_CALL_BATCHES_KEY = "call-batches";

declare enum GeminiSdkEvent {
    POPUP_LOADED = "POPUP_LOADED",
    POPUP_UNLOADED = "POPUP_UNLOADED",
    POPUP_APP_CONTEXT = "POPUP_APP_CONTEXT",
    SDK_CONNECT = "SDK_CONNECT",
    SDK_DISCONNECT = "SDK_DISCONNECT",
    SDK_SEND_TRANSACTION = "SDK_SEND_TRANSACTION",
    SDK_SIGN_DATA = "SDK_SIGN_DATA",
    SDK_SIGN_TYPED_DATA = "SDK_SIGN_TYPED_DATA",
    SDK_SWITCH_CHAIN = "SDK_SWITCH_CHAIN",
    SDK_OPEN_SETTINGS = "SDK_OPEN_SETTINGS",
    SDK_CURRENT_ACCOUNT = "SDK_CURRENT_ACCOUNT",
    SDK_SEND_BATCH_CALLS = "SDK_SEND_BATCH_CALLS",
    SDK_GET_CAPABILITIES = "SDK_GET_CAPABILITIES",
    SDK_GET_CALLS_STATUS = "SDK_GET_CALLS_STATUS",
    SDK_SHOW_CALLS_STATUS = "SDK_SHOW_CALLS_STATUS"
}
interface AppMetadata {
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
interface AppContext {
    appMetadata: AppMetadata;
    origin: string;
    sdkVersion: string;
}
interface Chain {
    id: number;
    rpcUrl?: string;
}
declare const PlatformType: {
    readonly REACT_NATIVE: "REACT_NATIVE";
    readonly WEB: "WEB";
};
type PlatformType = (typeof PlatformType)[keyof typeof PlatformType];
type GeminiProviderConfig = {
    appMetadata: AppMetadata;
    chain: Chain;
    platform?: PlatformType;
    onDisconnectCallback?: () => void;
    storage?: IStorage;
};
interface RpcRequestArgs {
    readonly method: string;
    readonly params?: readonly unknown[] | object | Hex[];
}
interface ProviderRpcError extends Error {
    code: number;
    data?: unknown;
    message: string;
}
type ProviderEventMap = {
    accountsChanged: string[];
    chainChanged: string;
    connect: {
        readonly chainId: string;
    };
    disconnect: ProviderRpcError;
};
type ProviderEventCallback = ProviderInterface["emit"];
declare class ProviderEventEmitter extends EventEmitter<keyof ProviderEventMap> {
}
interface ProviderInterface extends ProviderEventEmitter {
    disconnect(): Promise<void>;
    emit<K extends keyof ProviderEventMap>(event: K, ...args: [ProviderEventMap[K]]): boolean;
    on<K extends keyof ProviderEventMap>(event: K, listener: (_: ProviderEventMap[K]) => void): this;
    request(args: RpcRequestArgs): Promise<any>;
}
interface GeminiSdkMessage {
    chainId: number;
    data?: unknown;
    event: GeminiSdkEvent;
    origin: string;
    requestId?: string;
    wcData?: any;
}
interface GeminiSdkMessageResponse {
    data?: unknown;
    event: GeminiSdkEvent;
    requestId?: string;
}
interface ConnectResponse extends Omit<GeminiSdkMessageResponse, "data"> {
    data: {
        address: Address;
    };
}
interface SendTransactionResponse extends Omit<GeminiSdkMessageResponse, "data"> {
    data: {
        hash?: Hex;
        error?: string;
    };
}
interface SignMessageResponse extends Omit<GeminiSdkMessageResponse, "data"> {
    data: {
        hash?: Hex;
        error?: string;
    };
}
interface SignTypedDataResponse extends Omit<GeminiSdkMessageResponse, "data"> {
    data: {
        hash?: Hex;
        error?: string;
    };
}
interface SwitchChainResponse extends Omit<GeminiSdkMessageResponse, "data"> {
    data: {
        chainId?: number;
        error?: string;
    };
}
interface GeminiSdkSendTransaction extends Omit<GeminiSdkMessage, "data"> {
    data: TransactionRequest;
}
interface GeminiSdkSignMessage extends Omit<GeminiSdkMessage, "data"> {
    data: SignMessageParameters;
}
interface GeminiSdkSignTypedData extends Omit<GeminiSdkMessage, "data"> {
    data: SignTypedDataParameters;
}
interface GeminiSdkSendBatchCalls extends Omit<GeminiSdkMessage, "data"> {
    data: SendCallsParams;
}
interface GeminiSdkSwitchChain extends Omit<GeminiSdkMessage, "data"> {
    data: number;
}
interface GeminiSdkAppContextMessage extends Omit<GeminiSdkMessage, "data"> {
    data: AppContext;
}
interface ReverseEnsResponse {
    address: Address;
    name: string | null;
}
interface Call {
    to: Address;
    value?: Hex;
    data?: Hex;
    chainId?: Hex;
}
interface SendCallsParams {
    version: string;
    chainId: Hex;
    from: Address;
    calls: Call[];
    capabilities?: Record<string, any>;
}
interface WalletCapabilities {
    [chainId: string]: {
        atomic?: {
            status: "supported" | "unsupported";
        };
        paymasterService?: {
            supported: boolean;
        };
    };
}
interface CallBatchMetadata {
    id: string;
    chainId: string;
    from: Address;
    calls: Call[];
    transactionHash?: Hex;
    status: "pending" | "confirmed" | "failed" | "reverted";
    timestamp: number;
    capabilities?: Record<string, any>;
}
interface GetCallsStatusResponse {
    version: string;
    id: string;
    chainId: Hex;
    status: 100 | 200 | 400 | 500;
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
interface SendCallsResponse {
    id: string;
    capabilities?: {
        caip345?: {
            caip2: string;
            transactionHashes: Hex[];
        };
    };
}

type CommunicatorConfigParams = {
    appMetadata: AppMetadata;
    onDisconnectCallback?: () => void;
};
declare class Communicator {
    private readonly appMetadata;
    private readonly url;
    private popup;
    private listeners;
    private onDisconnectCallback?;
    constructor({ appMetadata, onDisconnectCallback }: CommunicatorConfigParams);
    postMessage: (message: GeminiSdkMessage) => Promise<void>;
    postRequestAndWaitForResponse: <M extends GeminiSdkMessage, R extends GeminiSdkMessageResponse>(request: GeminiSdkMessage) => Promise<R>;
    onMessage: <M extends GeminiSdkMessage, R extends GeminiSdkMessageResponse>(predicate: (_: Partial<M>) => boolean) => Promise<R>;
    private onRequestCancelled;
    waitForPopupLoaded: () => Promise<Window>;
}

declare class GeminiWalletProvider extends ProviderEventEmitter implements ProviderInterface {
    private readonly config;
    private wallet;
    constructor(providerConfig: Readonly<GeminiProviderConfig>);
    request<T>(args: RpcRequestArgs): Promise<T>;
    openSettings(): Promise<void>;
    private getCapabilities;
    private sendCalls;
    private getCallsStatus;
    private showCallsStatus;
    disconnect(): Promise<void>;
}

/**
 * Calls the RPC with a given request
 * @param request The request to make to the RPC.
 * @param rpcUrl The url of the RPC.
 * @returns Response from the RPC call.
 */
declare const fetchRpcRequest: (request: RpcRequestArgs, rpcUrl: string) => Promise<any>;
/**
 * Validates the RPC request arguments
 * Valid request args are defined here: https://eips.ethereum.org/EIPS/eip-1193#request
 * @param args The request arguments to validate.
 * @returns An error object if the arguments are invalid, otherwise undefined.
 */
declare function validateRpcRequestArgs(args: unknown): asserts args is RpcRequestArgs;
/**
 * Converts specific tx request values from hex to BigInt to align with Viem types.
 * @param tx The raw transaction request object.
 * @returns The raw transaction object with certain fields converted to BigInts
 */
declare function convertSendValuesToBigInt(tx: TransactionRequest): TransactionRequest;

declare function isChainSupportedByGeminiSw(chainId: number): boolean;
declare class GeminiWallet {
    private readonly communicator;
    private readonly storage;
    private initPromise;
    accounts: Address[];
    chain: Chain;
    constructor({ appMetadata, chain, onDisconnectCallback, storage }: Readonly<GeminiProviderConfig>);
    private initializeFromStorage;
    private ensureInitialized;
    connect(): Promise<Address[]>;
    disconnect(): Promise<void>;
    switchChain({ id }: SwitchChainParameters): Promise<string | null>;
    sendTransaction(txData: TransactionRequest): Promise<SendTransactionResponse["data"]>;
    signData({ message }: SignMessageParameters): Promise<SignMessageResponse["data"]>;
    signTypedData({ message, types, primaryType, domain, }: SignTypedDataParameters): Promise<SignTypedDataResponse["data"]>;
    openSettings(): Promise<void>;
    getCapabilities(requestedChainIds?: string[]): WalletCapabilities;
    sendCalls(params: SendCallsParams): Promise<SendCallsResponse>;
    getCallsStatus(batchId: string): Promise<GetCallsStatusResponse>;
    showCallsStatus(batchId: string): Promise<void>;
    private sendMessageToPopup;
}

type GeminiStorageConfig = {
    scope?: string;
    module?: string;
};
/**
 * Default web storage implementation using localStorage
 * For mobile platforms, implement a custom storage class that implements IStorage
 */
declare class GeminiStorage implements IStorage {
    private scope;
    private module;
    constructor({ scope, module }?: GeminiStorageConfig);
    private scopedKey;
    storeObject<T>(key: string, item: T): Promise<void>;
    loadObject<T>(key: string, fallback: T): Promise<T>;
    setItem(key: string, value: string): Promise<void>;
    getItem(key: string): Promise<string | null>;
    removeItem(key: string): Promise<void>;
    removeItems(keys: string[]): Promise<void>;
}

declare const SDK_BACKEND_URL: string;
declare const SDK_VERSION: string;
declare const DEFAULT_CHAIN_ID = 42161;
declare const POPUP_WIDTH = 420;
declare const POPUP_HEIGHT = 650;

/**
 * Utility functions for base64 encoding and decoding
 * Compatible with both browser and Node.js environments
 */
/**
 * Encodes a Uint8Array to a base64url string
 * @param array - The Uint8Array to encode
 * @returns The base64url encoded string
 */
declare function encodeBase64(array: Uint8Array): string;
/**
 * Decodes a base64url string to a Uint8Array
 * @param base64url - The base64url encoded string
 * @returns The decoded Uint8Array
 */
declare function decodeBase64(base64url: string): Uint8Array;
/**
 * Convert an ArrayBuffer or Uint8Array to a base64url string
 * @param buffer - The buffer to convert
 * @returns The base64url encoded string
 */
declare function bufferToBase64URLString(buffer: ArrayBuffer | Uint8Array): string;
/**
 * Convert a string to UTF-8 encoded Uint8Array
 * @param value - The string to convert
 * @returns The UTF-8 encoded Uint8Array
 */
declare function utf8StringToBuffer(value: string): Uint8Array;
/**
 * Convert a base64 string to hex string
 * @param base64 - The base64 string to convert
 * @returns The hex string
 */
declare function base64ToHex(base64: string): string;

interface WebAuthnValidatorData {
    pubKeyX: bigint;
    pubKeyY: bigint;
}
interface CalculateWalletAddressParams {
    publicKey: Hex;
    credentialId: string;
    index?: bigint;
}
/**
 * Calculate smart wallet address from public key and credential ID (V2)
 * This handles all validation and setup internally
 */
declare function calculateWalletAddress(params: CalculateWalletAddressParams): Address;
/**
 * Calculate smart wallet address from public key and credential ID (V1)
 * This handles all validation and setup internally
 */
declare function calculateV1Address(params: CalculateWalletAddressParams): Address;
/**
 * Generate authenticator ID hash from credential ID
 */
declare function generateAuthenticatorIdHash(credentialId: string): Hex;
/**
 * Validate WebAuthn public key offchain
 * Mirrors the contract's _validateWebAuthnKey function
 */
declare function validateWebAuthnKey(webAuthnData: WebAuthnValidatorData): boolean;

declare function reverseResolveEns(address: Address): Promise<ReverseEnsResponse>;

declare const openPopup: (url: URL) => Window;
declare const closePopup: (popup: Window | null) => void;

declare const hexStringFromNumber: (num: number) => string;
declare const safeJsonStringify: (obj: any) => string;

export { type AppContext, type AppMetadata, type CalculateWalletAddressParams, type Call, type CallBatchMetadata, type Chain, Communicator, type ConnectResponse, DEFAULT_CHAIN_ID, type GeminiProviderConfig, type GeminiSdkAppContextMessage, GeminiSdkEvent, type GeminiSdkMessage, type GeminiSdkMessageResponse, type GeminiSdkSendBatchCalls, type GeminiSdkSendTransaction, type GeminiSdkSignMessage, type GeminiSdkSignTypedData, type GeminiSdkSwitchChain, GeminiStorage, type GeminiStorageConfig, GeminiWallet, GeminiWalletProvider, type GetCallsStatusResponse, type IStorage, POPUP_HEIGHT, POPUP_WIDTH, PlatformType, type ProviderEventCallback, ProviderEventEmitter, type ProviderEventMap, type ProviderInterface, type ProviderRpcError, type ReverseEnsResponse, type RpcRequestArgs, SDK_BACKEND_URL, SDK_VERSION, STORAGE_CALL_BATCHES_KEY, STORAGE_ETH_ACCOUNTS_KEY, STORAGE_ETH_ACTIVE_CHAIN_KEY, STORAGE_PASSKEY_CREDENTIAL_KEY, STORAGE_PRESERVED_PASSKEY_CREDENTIALS_KEY, STORAGE_SETTINGS_KEY, STORAGE_SMART_ACCOUNT_KEY, STORAGE_WC_REQUESTS_KEY, type SendCallsParams, type SendCallsResponse, type SendTransactionResponse, type SignMessageResponse, type SignTypedDataResponse, type SwitchChainResponse, type WalletCapabilities, type WebAuthnValidatorData, base64ToHex, bufferToBase64URLString, calculateV1Address, calculateWalletAddress, closePopup, convertSendValuesToBigInt, decodeBase64, encodeBase64, fetchRpcRequest, generateAuthenticatorIdHash, hexStringFromNumber, isChainSupportedByGeminiSw, openPopup, reverseResolveEns, safeJsonStringify, utf8StringToBuffer, validateRpcRequestArgs, validateWebAuthnKey };
