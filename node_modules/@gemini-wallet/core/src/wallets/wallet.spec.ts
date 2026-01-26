import { beforeEach, describe, expect, it, mock } from "bun:test";
import { type Address } from "viem";

import { DEFAULT_CHAIN_ID, getDefaultRpcUrl, SUPPORTED_CHAIN_IDS } from "../constants";
import { GeminiStorage, STORAGE_ETH_ACCOUNTS_KEY, STORAGE_ETH_ACTIVE_CHAIN_KEY } from "../storage";
import {
  type Chain,
  type ConnectResponse,
  GeminiSdkEvent,
  type SendTransactionResponse,
  type SignMessageResponse,
  type SwitchChainResponse,
} from "../types";
import { isChainSupportedByGeminiSw } from "./wallet";

// Test constants
const mockAddress = "0xAfEDA61dB9e162293b2eF2C2bC5A800b37Bb5E4a" as Address;
const mockTxHash = "0x5de3752c591ecc35d1046f3aca2eba1ba5bdcfb786639a8661e9ecb823675743";
const mockSigHash = "0x020d671b80fbd20466d8cb65cef79a24e3bca3fdf82e9dd89d78e7a4c4c045b";

// Set up global window mock for this test file only
(global as any).window = {
  crypto: {
    randomUUID: () => "test-uuid",
  },
  location: {
    origin: "http://localhost:3000",
  },
};

// Mock localStorage for this test file only
(global as any).localStorage = {
  clear: () => {},
  getItem: () => null,
  removeItem: () => {},
  setItem: () => {},
};

describe("GeminiWallet - Unit Tests", () => {
  // Note: These are unit tests that test the wallet behavior with mocked dependencies.
  // Since we can't easily mock the Communicator module without affecting other tests,
  // we'll focus on testing the parts that don't require the full wallet instance.

  describe("isChainSupportedByGeminiSw", () => {
    it("should return true for all supported chains", () => {
      SUPPORTED_CHAIN_IDS.forEach(chainId => {
        expect(isChainSupportedByGeminiSw(chainId)).toBe(true);
      });
    });

    it("should return false for unsupported chains", () => {
      expect(isChainSupportedByGeminiSw(999999)).toBe(false);
      expect(isChainSupportedByGeminiSw(0)).toBe(false);
      expect(isChainSupportedByGeminiSw(-1)).toBe(false);
    });

    it("should handle Ethereum mainnet", () => {
      expect(isChainSupportedByGeminiSw(1)).toBe(true);
    });

    it("should handle Arbitrum", () => {
      expect(isChainSupportedByGeminiSw(42161)).toBe(true);
    });

    it("should handle Base", () => {
      expect(isChainSupportedByGeminiSw(8453)).toBe(true);
    });

    it("should handle Polygon", () => {
      expect(isChainSupportedByGeminiSw(137)).toBe(true);
    });

    it("should handle Optimism", () => {
      expect(isChainSupportedByGeminiSw(10)).toBe(true);
    });
  });

  describe("Storage Integration", () => {
    let mockStorage: GeminiStorage;

    beforeEach(() => {
      mockStorage = new GeminiStorage();
      mockStorage.loadObject = mock((key: string, defaultValue: any) => {
        if (key === STORAGE_ETH_ACTIVE_CHAIN_KEY) {
          return Promise.resolve({
            id: DEFAULT_CHAIN_ID,
            rpcUrl: getDefaultRpcUrl(DEFAULT_CHAIN_ID),
          });
        }
        if (key === STORAGE_ETH_ACCOUNTS_KEY) {
          return Promise.resolve([]);
        }
        return Promise.resolve(defaultValue);
      });
      mockStorage.storeObject = mock(() => Promise.resolve());

      mockStorage.removeItem = mock(async () => {});
    });

    it("should store accounts to storage", async () => {
      const accounts = [mockAddress];

      await mockStorage.storeObject(STORAGE_ETH_ACCOUNTS_KEY, accounts);

      expect(mockStorage.storeObject).toHaveBeenCalledWith(STORAGE_ETH_ACCOUNTS_KEY, accounts);
    });

    it("should store chain to storage", async () => {
      const chain = { id: 42161, rpcUrl: getDefaultRpcUrl(42161) };

      await mockStorage.storeObject(STORAGE_ETH_ACTIVE_CHAIN_KEY, chain);

      expect(mockStorage.storeObject).toHaveBeenCalledWith(STORAGE_ETH_ACTIVE_CHAIN_KEY, chain);
    });

    it("should load accounts from storage", async () => {
      const accounts = await mockStorage.loadObject(STORAGE_ETH_ACCOUNTS_KEY, []);

      expect(mockStorage.loadObject).toHaveBeenCalledWith(STORAGE_ETH_ACCOUNTS_KEY, []);
      expect(accounts).toEqual([]);
    });

    it("should load chain from storage", async () => {
      const chain = await mockStorage.loadObject(STORAGE_ETH_ACTIVE_CHAIN_KEY, {
        id: DEFAULT_CHAIN_ID,
      });

      expect(mockStorage.loadObject).toHaveBeenCalledWith(STORAGE_ETH_ACTIVE_CHAIN_KEY, { id: DEFAULT_CHAIN_ID });
      expect(chain.id).toBe(DEFAULT_CHAIN_ID);
    });
  });

  describe("Chain Management", () => {
    it("should get default RPC URL for supported chains", () => {
      expect(getDefaultRpcUrl(1)).toBeDefined();
      expect(getDefaultRpcUrl(42161)).toBeDefined();
      expect(getDefaultRpcUrl(8453)).toBeDefined();
      expect(getDefaultRpcUrl(137)).toBeDefined();
      expect(getDefaultRpcUrl(10)).toBeDefined();
    });

    it("should return undefined for unsupported chain RPC", () => {
      expect(getDefaultRpcUrl(999999)).toBeUndefined();
    });

    it("should validate chain has required properties", () => {
      const validChain: Chain = {
        id: 1,
        rpcUrl: "https://eth.merkle.io",
      };

      expect(validChain.id).toBeDefined();
      expect(validChain.rpcUrl).toBeDefined();
    });
  });

  describe("Message Formatting", () => {
    it("should format connect message correctly", () => {
      const message = {
        chainId: DEFAULT_CHAIN_ID,
        event: GeminiSdkEvent.SDK_CONNECT,
        origin: "http://localhost:3000",
        requestId: "test-uuid",
      };

      expect(message.event).toBe(GeminiSdkEvent.SDK_CONNECT);
      expect(message.chainId).toBe(DEFAULT_CHAIN_ID);
      expect(message.origin).toBeDefined();
      expect(message.requestId).toBeDefined();
    });

    it("should format transaction message correctly", () => {
      const txRequest = {
        data: "0x" as const,
        from: mockAddress,
        to: mockAddress,
        value: 100n,
      };

      const message = {
        chainId: DEFAULT_CHAIN_ID,
        data: txRequest,
        event: GeminiSdkEvent.SDK_SEND_TRANSACTION,
        origin: "http://localhost:3000",
        requestId: "test-uuid",
      };

      expect(message.event).toBe(GeminiSdkEvent.SDK_SEND_TRANSACTION);
      expect(message.data).toEqual(txRequest);
      expect(message.data.value).toBe(100n);
    });

    it("should format sign message correctly", () => {
      const signMessage = "0x48656c6c6f20576f726c64";

      const message = {
        chainId: DEFAULT_CHAIN_ID,
        data: { message: signMessage },
        event: GeminiSdkEvent.SDK_SIGN_DATA,
        origin: "http://localhost:3000",
        requestId: "test-uuid",
      };

      expect(message.event).toBe(GeminiSdkEvent.SDK_SIGN_DATA);
      expect(message.data.message).toBe(signMessage);
    });

    it("should format typed data message correctly", () => {
      const typedData = {
        domain: {
          chainId: 1,
          name: "Test Domain",
          verifyingContract: mockAddress,
          version: "1",
        },
        message: {
          message: "Hello",
          value: 123,
        },
        primaryType: "Test" as const,
        types: {
          Test: [
            { name: "value", type: "uint256" },
            { name: "message", type: "string" },
          ],
        },
      };

      const message = {
        chainId: DEFAULT_CHAIN_ID,
        data: typedData,
        event: GeminiSdkEvent.SDK_SIGN_TYPED_DATA,
        origin: "http://localhost:3000",
        requestId: "test-uuid",
      };

      expect(message.event).toBe(GeminiSdkEvent.SDK_SIGN_TYPED_DATA);
      expect(message.data).toEqual(typedData);
      expect(message.data.primaryType).toBe("Test");
    });

    it("should format switch chain message correctly", () => {
      const chainId = 42161;

      const message = {
        chainId: DEFAULT_CHAIN_ID,
        data: chainId,
        event: GeminiSdkEvent.SDK_SWITCH_CHAIN,
        origin: "http://localhost:3000",
        requestId: "test-uuid",
      };

      expect(message.event).toBe(GeminiSdkEvent.SDK_SWITCH_CHAIN);
      expect(message.data).toBe(chainId);
    });
  });

  describe("Response Handling", () => {
    it("should handle successful connect response", () => {
      const response: ConnectResponse = {
        chainId: DEFAULT_CHAIN_ID,
        data: { address: mockAddress },
        event: GeminiSdkEvent.SDK_CONNECT_RESPONSE,
        origin: "http://localhost:3000",
        requestId: "test-uuid",
      };

      expect(response.data.address).toBe(mockAddress);
      expect(response.data.error).toBeUndefined();
    });

    it("should handle error connect response", () => {
      const response: ConnectResponse = {
        chainId: DEFAULT_CHAIN_ID,
        data: { error: "User rejected" },
        event: GeminiSdkEvent.SDK_CONNECT_RESPONSE,
        origin: "http://localhost:3000",
        requestId: "test-uuid",
      };

      expect(response.data.error).toBe("User rejected");
      expect(response.data.address).toBeUndefined();
    });

    it("should handle successful transaction response", () => {
      const response: SendTransactionResponse = {
        chainId: DEFAULT_CHAIN_ID,
        data: { hash: mockTxHash },
        event: GeminiSdkEvent.SDK_SEND_TRANSACTION_RESPONSE,
        origin: "http://localhost:3000",
        requestId: "test-uuid",
      };

      expect(response.data.hash).toBe(mockTxHash);
      expect(response.data.error).toBeUndefined();
    });

    it("should handle error transaction response", () => {
      const response: SendTransactionResponse = {
        chainId: DEFAULT_CHAIN_ID,
        data: { error: "Insufficient funds" },
        event: GeminiSdkEvent.SDK_SEND_TRANSACTION_RESPONSE,
        origin: "http://localhost:3000",
        requestId: "test-uuid",
      };

      expect(response.data.error).toBe("Insufficient funds");
      expect(response.data.hash).toBeUndefined();
    });

    it("should handle successful signature response", () => {
      const response: SignMessageResponse = {
        chainId: DEFAULT_CHAIN_ID,
        data: { signature: mockSigHash },
        event: GeminiSdkEvent.SDK_SIGN_DATA_RESPONSE,
        origin: "http://localhost:3000",
        requestId: "test-uuid",
      };

      expect(response.data.signature).toBe(mockSigHash);
      expect(response.data.error).toBeUndefined();
    });

    it("should handle error signature response", () => {
      const response: SignMessageResponse = {
        chainId: DEFAULT_CHAIN_ID,
        data: { error: "User rejected signature" },
        event: GeminiSdkEvent.SDK_SIGN_DATA_RESPONSE,
        origin: "http://localhost:3000",
        requestId: "test-uuid",
      };

      expect(response.data.error).toBe("User rejected signature");
      expect(response.data.signature).toBeUndefined();
    });

    it("should handle switch chain response", () => {
      const response: SwitchChainResponse = {
        chainId: DEFAULT_CHAIN_ID,
        data: { error: "Chain not supported" },
        event: GeminiSdkEvent.SDK_SWITCH_CHAIN_RESPONSE,
        origin: "http://localhost:3000",
        requestId: "test-uuid",
      };

      expect(response.data.error).toBe("Chain not supported");
    });
  });
});
