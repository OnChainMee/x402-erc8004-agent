import { afterEach, beforeEach, describe, expect, it, mock, spyOn } from "bun:test";

// Mock dependencies
mock.module("../utils", () => ({
  safeJsonStringify: mock(obj => JSON.stringify(obj)),
}));

import { safeJsonStringify } from "../utils";
import { GeminiStorage } from "./storage";
import {
  STORAGE_ETH_ACCOUNTS_KEY,
  STORAGE_ETH_ACTIVE_CHAIN_KEY,
  STORAGE_PASSKEY_CREDENTIAL_KEY,
  STORAGE_SETTINGS_KEY,
  STORAGE_SMART_ACCOUNT_KEY,
  STORAGE_WC_REQUESTS_KEY,
} from "./storageInterface";

describe("GeminiStorage", () => {
  // Mock localStorage
  const mockLocalStorage = {
    _storage: {} as Record<string, string>,
    clear: mock(),
    getItem: mock(() => null),
    removeItem: mock(),
    setItem: mock(),
  };

  // Save original localStorage
  const originalLocalStorage = global.localStorage;

  beforeEach(() => {
    // Reset mock call counts
    mockLocalStorage.getItem.mockClear();
    mockLocalStorage.setItem.mockClear();
    mockLocalStorage.removeItem.mockClear();

    // Reset storage state
    mockLocalStorage._storage = {};

    // Replace global localStorage with mock
    Object.defineProperty(global, "localStorage", {
      value: mockLocalStorage,
      writable: true,
    });
  });

  afterEach(() => {
    // Restore original localStorage
    Object.defineProperty(global, "localStorage", {
      value: originalLocalStorage,
      writable: true,
    });
  });

  describe("constructor", () => {
    it("should initialize with default scope and module", async () => {
      const storage = new GeminiStorage();

      // Test the scopedKey method indirectly
      await storage.setItem("test", "value");
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith("@gemini.wallet.test", "value");
    });
  });

  describe("storeObject", () => {
    it("should store an object as JSON string", async () => {
      const storage = new GeminiStorage();
      const testObject = { foo: "bar", num: 123 };

      await storage.storeObject("testKey", testObject);

      expect(safeJsonStringify).toHaveBeenCalledWith(testObject);
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith("@gemini.wallet.testKey", JSON.stringify(testObject));
    });

    it("should handle complex objects with bigint values", async () => {
      const storage = new GeminiStorage();
      const testObject = { id: "test", value: 123n };

      // Mock safeJsonStringify for this specific test
      (safeJsonStringify as any).mockReturnValueOnce('{"id":"test","value":"123n"}');

      await storage.storeObject("testKey", testObject);

      expect(safeJsonStringify).toHaveBeenCalledWith(testObject);
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith("@gemini.wallet.testKey", '{"id":"test","value":"123n"}');
    });
  });

  describe("loadObject", () => {
    it("should load and parse a stored object", async () => {
      const storage = new GeminiStorage();
      const storedJson = '{"foo":"bar","num":123}';

      mockLocalStorage.getItem.mockReturnValueOnce(storedJson);

      const result = await storage.loadObject("testKey", { default: true });

      expect(mockLocalStorage.getItem).toHaveBeenCalledWith("@gemini.wallet.testKey");
      expect(result).toEqual({ foo: "bar", num: 123 });
    });

    it("should return fallback when item doesn't exist", async () => {
      const storage = new GeminiStorage();
      const fallback = { default: true };

      mockLocalStorage.getItem.mockReturnValueOnce(null);

      const result = await storage.loadObject("nonExistentKey", fallback);

      expect(mockLocalStorage.getItem).toHaveBeenCalledWith("@gemini.wallet.nonExistentKey");
      expect(result).toEqual(fallback);
    });

    it("should handle JSON parse errors and return fallback", async () => {
      const storage = new GeminiStorage();
      const fallback = { default: true };

      // Return invalid JSON
      mockLocalStorage.getItem.mockReturnValueOnce("{invalid:json}");

      // Mock console.error to avoid test output pollution
      const consoleErrorSpy = spyOn(console, "error").mockImplementation(() => {});

      const result = await storage.loadObject("invalidJsonKey", fallback);

      expect(mockLocalStorage.getItem).toHaveBeenCalledWith("@gemini.wallet.invalidJsonKey");
      expect(result).toEqual(fallback);

      // Verify error was logged
      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });
  });

  describe("setItem", () => {
    it("should set item with scoped key", async () => {
      const storage = new GeminiStorage();

      await storage.setItem("testKey", "testValue");

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith("@gemini.wallet.testKey", "testValue");
    });

    it("should handle empty string values", async () => {
      const storage = new GeminiStorage();

      await storage.setItem("emptyKey", "");

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith("@gemini.wallet.emptyKey", "");
    });
  });

  describe("getItem", () => {
    it("should get item with scoped key", async () => {
      const storage = new GeminiStorage();

      mockLocalStorage.getItem.mockReturnValueOnce("testValue");

      const result = await storage.getItem("testKey");

      expect(mockLocalStorage.getItem).toHaveBeenCalledWith("@gemini.wallet.testKey");
      expect(result).toBe("testValue");
    });

    it("should return null for non-existent items", async () => {
      const storage = new GeminiStorage();

      mockLocalStorage.getItem.mockReturnValueOnce(null);

      const result = await storage.getItem("nonExistentKey");

      expect(mockLocalStorage.getItem).toHaveBeenCalledWith("@gemini.wallet.nonExistentKey");
      expect(result).toBeNull();
    });
  });

  describe("removeItem", () => {
    it("should remove item with scoped key", async () => {
      const storage = new GeminiStorage();

      await storage.removeItem("testKey");

      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("@gemini.wallet.testKey");
    });
  });

  describe("removeItems", () => {
    it("should remove multiple items", async () => {
      const storage = new GeminiStorage();
      const keys = ["key1", "key2", "key3"];

      await storage.removeItems(keys);

      expect(mockLocalStorage.removeItem).toHaveBeenCalledTimes(3);
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("@gemini.wallet.key1");
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("@gemini.wallet.key2");
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("@gemini.wallet.key3");
    });

    it("should handle empty array", async () => {
      const storage = new GeminiStorage();

      await storage.removeItems([]);

      expect(mockLocalStorage.removeItem).not.toHaveBeenCalled();
    });

    it("should handle single item array", async () => {
      const storage = new GeminiStorage();

      await storage.removeItems(["singleKey"]);

      expect(mockLocalStorage.removeItem).toHaveBeenCalledTimes(1);
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("@gemini.wallet.singleKey");
    });
  });

  describe("storage constants", () => {
    it("should export the correct storage key constants", () => {
      expect(STORAGE_ETH_ACCOUNTS_KEY).toBe("eth-accounts");
      expect(STORAGE_ETH_ACTIVE_CHAIN_KEY).toBe("eth-active-chain");
      expect(STORAGE_PASSKEY_CREDENTIAL_KEY).toBe("passkey-credential");
      expect(STORAGE_SMART_ACCOUNT_KEY).toBe("smart-account");
      expect(STORAGE_SETTINGS_KEY).toBe("settings");
      expect(STORAGE_WC_REQUESTS_KEY).toBe("wc-requests");
    });
  });

  describe("integration with storage keys", () => {
    it("should use correct scoped keys for predefined constants", async () => {
      const storage = new GeminiStorage();

      await storage.setItem(STORAGE_ETH_ACCOUNTS_KEY, "accounts-data");
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith("@gemini.wallet.eth-accounts", "accounts-data");

      await storage.getItem(STORAGE_PASSKEY_CREDENTIAL_KEY);
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith("@gemini.wallet.passkey-credential");

      await storage.removeItem(STORAGE_SETTINGS_KEY);
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("@gemini.wallet.settings");
    });
  });

  describe("memory storage fallback", () => {
    let consoleWarnSpy: any;

    beforeEach(() => {
      // Mock console.warn to avoid test output pollution
      consoleWarnSpy = spyOn(console, "warn").mockImplementation(() => {});
    });

    afterEach(() => {
      consoleWarnSpy.mockRestore();
    });

    it("should fallback to memory storage when localStorage throws error", async () => {
      const storage = new GeminiStorage();

      // Make localStorage methods throw errors
      mockLocalStorage.setItem.mockImplementation(() => {
        throw new Error("localStorage not available");
      });
      mockLocalStorage.getItem.mockImplementation(() => {
        throw new Error("localStorage not available");
      });
      mockLocalStorage.removeItem.mockImplementation(() => {
        throw new Error("localStorage not available");
      });

      // Test setItem fallback
      await storage.setItem("testKey", "testValue");
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        "localStorage not available, using memory storage",
        expect.any(Error),
      );

      // Test getItem fallback - should return value from memory storage
      const value = await storage.getItem("testKey");
      expect(value).toBe("testValue");

      // Test removeItem fallback
      await storage.removeItem("testKey");
      const removedValue = await storage.getItem("testKey");
      expect(removedValue).toBeNull();
    });

    it("should use memory storage for removeItems when localStorage throws", async () => {
      const storage = new GeminiStorage();

      // Make localStorage.removeItem throw error
      mockLocalStorage.removeItem.mockImplementation(() => {
        throw new Error("localStorage not available");
      });

      const keys = ["key1", "key2"];
      await storage.removeItems(keys);

      expect(consoleWarnSpy).toHaveBeenCalledTimes(2); // Once for each key
      expect(mockLocalStorage.removeItem).toHaveBeenCalledTimes(2);
    });
  });
});
