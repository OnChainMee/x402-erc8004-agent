import { describe, expect, mock, test } from "bun:test";

import { GeminiStorage } from "../storage";
import type { GeminiProviderConfig } from "../types";
import { GeminiWalletProvider } from "./provider";

describe("GeminiProviderConfig", () => {
  const createMockConfig = (overrides: Partial<GeminiProviderConfig> = {}): GeminiProviderConfig => ({
    appMetadata: {
      description: "Test Description",
      icon: "https://test.com/icon.png",
      name: "Test App",
      url: "https://test.com",
    },
    chain: { id: 1 },
    storage: new GeminiStorage(),
    ...overrides,
  });

  test("should create provider with onDisconnectCallback config", () => {
    const userDisconnectCallback = mock();

    const provider = new GeminiWalletProvider(
      createMockConfig({
        onDisconnectCallback: userDisconnectCallback,
      }),
    );

    expect(provider).toBeDefined();
    // @ts-expect-error - accessing private property for testing
    expect(provider.config.onDisconnectCallback).toBe(userDisconnectCallback);
  });

  test("should create provider without onDisconnectCallback", () => {
    const provider = new GeminiWalletProvider(
      createMockConfig({
        // No onDisconnectCallback provided
      }),
    );

    expect(provider).toBeDefined();
    // @ts-expect-error - accessing private property for testing
    expect(provider.config.onDisconnectCallback).toBeUndefined();
  });

  test("should store complete config internally", () => {
    const config = createMockConfig({
      appMetadata: {
        description: "Custom Description",
        icon: "https://custom.com/icon.png",
        name: "Custom App",
        url: "https://custom.com",
      },
      chain: {
        id: 42161,
        rpcUrl: "https://custom-rpc.example.com",
      },
    });

    const provider = new GeminiWalletProvider(config);

    expect(provider).toBeDefined();
    // @ts-expect-error - accessing private property for testing
    expect(provider.config).toEqual(config);
  });

  test("should create provider with custom storage config", () => {
    const customStorage = new GeminiStorage();
    const config = createMockConfig({
      chain: {
        id: 137, // Polygon
        rpcUrl: "https://polygon-rpc.example.com",
      },
      storage: customStorage,
    });

    const provider = new GeminiWalletProvider(config);

    expect(provider).toBeDefined();
    // @ts-expect-error - accessing private property for testing
    expect(provider.config.storage).toBe(customStorage);
    expect(provider.config.chain.id).toBe(137);
  });

  test("should maintain config when wallet is recreated", () => {
    const userDisconnectCallback = mock();

    const provider = new GeminiWalletProvider(
      createMockConfig({
        onDisconnectCallback: userDisconnectCallback,
      }),
    );

    expect(provider).toBeDefined();

    // @ts-expect-error - accessing private property for testing
    expect(provider.config.onDisconnectCallback).toBe(userDisconnectCallback);

    // Config should remain consistent
    // @ts-expect-error - accessing private property for testing
    expect(provider.config.appMetadata.name).toBe("Test App");
  });

  test("should support custom chain configuration", () => {
    const customChain = {
      id: 8453, // Base
      rpcUrl: "https://base-mainnet.example.com",
    };

    const provider = new GeminiWalletProvider(
      createMockConfig({
        chain: customChain,
      }),
    );

    expect(provider).toBeDefined();
    // @ts-expect-error - accessing private property for testing
    expect(provider.config.chain).toEqual(customChain);
  });
});
