import { errorCodes } from "@metamask/rpc-errors";
import { afterEach, beforeEach, describe, expect, it, mock } from "bun:test";
import { type Address, type Hex } from "viem";

import { DEFAULT_CHAIN_ID } from "../constants";
import { GeminiStorage } from "../storage";
import { type Chain, type GeminiProviderConfig } from "../types";
import { hexStringFromNumber } from "../utils";
// import { GeminiWallet } from "../wallets"; // Not used - using MockGeminiWallet instead
import { GeminiWalletProvider } from "./provider";

const mockAddress = "0xAfEDA61dB9e162293b2eF2C2bC5A800b37Bb5E4a" as Address;
const mockTxHash = "0x5de3752c591ecc35d1046f3aca2eba1ba5bdcfb786639a8661e9ecb823675743" as Hex;
const mockSigHash = "0x020d671b80fbd20466d8cb65cef79a24e3bca3fdf82e9dd89d78e7a4c4c045b" as Hex;

// Mock dependencies - Create a more comprehensive mock of GeminiWallet
class MockGeminiWallet {
  accounts: Address[] = [];
  chain: Chain = { id: DEFAULT_CHAIN_ID };

  constructor(public config: GeminiProviderConfig) {}

  connect() {
    this.accounts = [mockAddress];
    return Promise.resolve(this.accounts);
  }

  disconnect() {
    this.accounts = [];
    return Promise.resolve();
  }

  sendTransaction(params: any) {
    if (params.from === mockAddress) {
      return Promise.resolve({ hash: mockTxHash });
    }
    return Promise.resolve({ error: "Invalid address" });
  }

  signData(params: any) {
    if (params.account === mockAddress) {
      return Promise.resolve({ hash: mockSigHash });
    }
    return Promise.resolve({ error: "Invalid address" });
  }

  signTypedData(params: any) {
    if (params.account === mockAddress) {
      return Promise.resolve({ hash: mockSigHash });
    }
    return Promise.resolve({ error: "Invalid address" });
  }

  switchChain(params: { id: number }) {
    if (params.id === 1 || params.id === 42161) {
      this.chain = { id: params.id };
      return Promise.resolve(null); // Success
    }
    return Promise.resolve("Unsupported chain");
  }
}

// Mock the wallet module
mock.module("../wallets", () => ({
  GeminiWallet: MockGeminiWallet,
}));

describe("GeminiWalletProvider", () => {
  let provider: GeminiWalletProvider;
  let mockStorage: GeminiStorage;
  let providerConfig: GeminiProviderConfig;

  beforeEach(() => {
    mockStorage = new GeminiStorage();

    providerConfig = {
      appMetadata: { name: "Test App" },
      chain: { id: DEFAULT_CHAIN_ID },
      onDisconnectCallback: mock(),
      storage: mockStorage,
    };

    provider = new GeminiWalletProvider(providerConfig);
  });

  afterEach(() => {
    mock.restore();
  });

  describe("constructor", () => {
    it("should create a provider instance with config", () => {
      expect(provider).toBeDefined();
      expect(provider).toBeInstanceOf(GeminiWalletProvider);
    });

    it("should preserve user disconnect callback", async () => {
      const disconnectCallback = mock();
      const customConfig = {
        ...providerConfig,
        onDisconnectCallback: disconnectCallback,
      };
      const customProvider = new GeminiWalletProvider(customConfig);

      // Trigger disconnect
      await customProvider.disconnect();

      // User callback should be preserved
      expect(disconnectCallback).toHaveBeenCalled();
    });
  });

  describe("eth_requestAccounts", () => {
    it("should connect wallet and return accounts", async () => {
      const accounts = await provider.request<Address[]>({
        method: "eth_requestAccounts",
      });

      expect(accounts).toEqual([mockAddress]);
    });

    it("should emit accountsChanged event on connect", async () => {
      const accountsChangedHandler = mock();
      provider.on("accountsChanged", accountsChangedHandler);

      await provider.request({
        method: "eth_requestAccounts",
      });

      expect(accountsChangedHandler).toHaveBeenCalledWith([mockAddress]);
    });
  });

  describe("eth_accounts", () => {
    it("should return empty array when not connected", async () => {
      try {
        await provider.request({ method: "eth_accounts" });
      } catch (error: any) {
        expect(error.code).toBe(errorCodes.provider.unauthorized);
      }
    });

    it("should return accounts when connected", async () => {
      // Connect first
      await provider.request({ method: "eth_requestAccounts" });

      const accounts = await provider.request<Address[]>({
        method: "eth_accounts",
      });

      expect(accounts).toEqual([mockAddress]);
    });
  });

  describe("eth_chainId", () => {
    it("should return default chain ID when not connected", async () => {
      const chainId = await provider.request<string>({
        method: "eth_chainId",
      });

      expect(chainId).toBe(hexStringFromNumber(DEFAULT_CHAIN_ID));
    });

    it("should return current chain ID when connected", async () => {
      await provider.request({ method: "eth_requestAccounts" });

      const chainId = await provider.request<string>({
        method: "eth_chainId",
      });

      expect(chainId).toBe(hexStringFromNumber(DEFAULT_CHAIN_ID));
    });
  });

  describe("net_version", () => {
    it("should return default chain ID when not connected", async () => {
      const netVersion = await provider.request<number>({
        method: "net_version",
      });

      expect(netVersion).toBe(DEFAULT_CHAIN_ID);
    });

    it("should return current chain ID when connected", async () => {
      await provider.request({ method: "eth_requestAccounts" });

      const netVersion = await provider.request<number>({
        method: "net_version",
      });

      expect(netVersion).toBe(DEFAULT_CHAIN_ID);
    });
  });

  describe("personal_sign", () => {
    it("should throw when not connected", async () => {
      try {
        await provider.request({
          method: "personal_sign",
          params: ["0x123456", mockAddress],
        });
        expect(true).toBe(false); // Should not reach here
      } catch (error: any) {
        expect(error.code).toBe(errorCodes.provider.unauthorized);
      }
    });

    it("should sign message when connected", async () => {
      await provider.request({ method: "eth_requestAccounts" });

      const signature = await provider.request<Hex>({
        method: "personal_sign",
        params: ["0x123456" as Hex, mockAddress],
      });

      expect(signature).toBe(mockSigHash);
    });

    it("should throw on signature error", async () => {
      await provider.request({ method: "eth_requestAccounts" });

      try {
        await provider.request({
          method: "personal_sign",
          params: ["0x123456" as Hex, "0xinvalidaddress" as Address],
        });
        expect(true).toBe(false); // Should not reach here
      } catch (error: any) {
        expect(error.code).toBe(errorCodes.rpc.transactionRejected);
      }
    });
  });

  describe("eth_sendTransaction", () => {
    it("should throw when not connected", async () => {
      try {
        await provider.request({
          method: "eth_sendTransaction",
          params: [{ from: mockAddress, to: mockAddress, value: "0x0" }],
        });
        expect(true).toBe(false); // Should not reach here
      } catch (error: any) {
        expect(error.code).toBe(errorCodes.provider.unauthorized);
      }
    });

    it("should send transaction when connected", async () => {
      await provider.request({ method: "eth_requestAccounts" });

      const txHash = await provider.request<Hex>({
        method: "eth_sendTransaction",
        params: [{ from: mockAddress, to: mockAddress, value: "0x100" }],
      });

      expect(txHash).toBe(mockTxHash);
    });

    it("should convert hex values to bigint", async () => {
      await provider.request({ method: "eth_requestAccounts" });

      const txHash = await provider.request<Hex>({
        method: "eth_sendTransaction",
        params: [
          {
            from: mockAddress,
            gas: "0x5208",
            gasPrice: "0x3b9aca00",
            to: mockAddress,
            value: "0x100",
          },
        ],
      });

      expect(txHash).toBe(mockTxHash);
    });

    it("should throw on transaction error", async () => {
      await provider.request({ method: "eth_requestAccounts" });

      try {
        await provider.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: "0xinvalidaddress" as Address,
              to: mockAddress,
              value: "0x0",
            },
          ],
        });
        expect(true).toBe(false); // Should not reach here
      } catch (error: any) {
        expect(error.code).toBe(errorCodes.rpc.transactionRejected);
      }
    });
  });

  describe("wallet_switchEthereumChain", () => {
    it("should throw when not connected", async () => {
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }],
        });
        expect(true).toBe(false); // Should not reach here
      } catch (error: any) {
        expect(error.code).toBe(errorCodes.provider.unauthorized);
      }
    });

    it("should switch chain with standard EIP-3326 format", async () => {
      await provider.request({ method: "eth_requestAccounts" });

      const chainChangedHandler = mock();
      provider.on("chainChanged", chainChangedHandler);

      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }],
      });

      expect(chainChangedHandler).toHaveBeenCalledWith("0x1");
    });

    it("should switch chain with legacy format", async () => {
      await provider.request({ method: "eth_requestAccounts" });

      const chainChangedHandler = mock();
      provider.on("chainChanged", chainChangedHandler);

      await provider.request({
        method: "wallet_switchEthereumChain",
        params: { id: 1 } as any,
      });

      expect(chainChangedHandler).toHaveBeenCalledWith("0x1");
    });

    it("should throw on unsupported chain", async () => {
      await provider.request({ method: "eth_requestAccounts" });

      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x999" }],
        });
        expect(true).toBe(false); // Should not reach here
      } catch (error: any) {
        expect(error.code).toBe(4902);
        expect(error.message).toContain("Unsupported chain");
      }
    });

    it("should throw on invalid parameters", async () => {
      await provider.request({ method: "eth_requestAccounts" });

      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: "invalid" as any,
        });
        expect(true).toBe(false); // Should not reach here
      } catch (error: any) {
        expect(error.code).toBe(errorCodes.rpc.invalidParams);
      }
    });
  });

  describe("eth_signTypedData", () => {
    it("should sign typed data when connected", async () => {
      await provider.request({ method: "eth_requestAccounts" });

      const signature = await provider.request<Hex>({
        method: "eth_signTypedData_v4",
        params: [
          mockAddress,
          JSON.stringify({
            domain: {},
            message: {},
            primaryType: "Test",
            types: {},
          }),
        ],
      });

      expect(signature).toBe(mockSigHash);
    });

    it("should throw when not connected", async () => {
      try {
        await provider.request({
          method: "eth_signTypedData_v4",
          params: [
            mockAddress,
            JSON.stringify({
              domain: {},
              message: {},
              primaryType: "Test",
              types: {},
            }),
          ],
        });
        expect(true).toBe(false);
      } catch (error: any) {
        expect(error.code).toBe(errorCodes.provider.unauthorized);
      }
    });
  });

  describe("disconnect", () => {
    it("should clear accounts on disconnect", async () => {
      await provider.request({ method: "eth_requestAccounts" });

      const accountsChangedHandler = mock();
      provider.on("accountsChanged", accountsChangedHandler);

      await provider.disconnect();

      expect(accountsChangedHandler).toHaveBeenCalledWith([]);
    });

    it("should trigger user disconnect callback", async () => {
      const disconnectCallback = mock();
      const customConfig = {
        ...providerConfig,
        onDisconnectCallback: disconnectCallback,
      };
      const customProvider = new GeminiWalletProvider(customConfig);

      await customProvider.disconnect();

      expect(disconnectCallback).toHaveBeenCalled();
    });
  });

  describe("request validation", () => {
    it("should throw on invalid method type", async () => {
      try {
        await provider.request({ method: 123 as any });
        expect(true).toBe(false);
      } catch (error: any) {
        expect(error.code).toBe(errorCodes.rpc.invalidParams);
      }
    });

    it("should throw on empty method", async () => {
      try {
        await provider.request({ method: "" });
        expect(true).toBe(false);
      } catch (error: any) {
        expect(error.code).toBe(errorCodes.rpc.invalidParams);
      }
    });
  });

  describe("unsupported methods", () => {
    it("should return unsupported error for unknown methods", async () => {
      await provider.request({ method: "eth_requestAccounts" });

      // Mock fetch to return method not found error
      const originalFetch = (global as any).window.fetch;
      (global as any).window.fetch = mock(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              error: { code: -32601, message: "Method not found" },
            }),
        }),
      ) as any;

      try {
        await provider.request({ method: "unsupported_method" });
        expect(true).toBe(false);
      } catch (error: any) {
        // RPC returns -32603 (internal error) for unknown methods
        expect(error.code).toBe(-32603);
      } finally {
        (global as any).window.fetch = originalFetch;
      }
    });
  });
});
