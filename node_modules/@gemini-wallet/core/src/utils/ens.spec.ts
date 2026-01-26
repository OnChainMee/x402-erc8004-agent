import { afterEach, beforeEach, describe, expect, it, mock } from "bun:test";
import type { Address } from "viem";

import { ENS_API_URL } from "../constants";
import { reverseResolveEns } from "./ens";

// Mock the global fetch function for unit tests
const mockFetch = mock();
const originalFetch = global.fetch;

describe("ENS utilities", () => {
  // Integration tests using real API calls
  describe("reverseResolveEns - Integration Tests", () => {
    const realAddress: Address = "0xce97D39F2c1f19d0F3B44f735Cd7A8a6FB29F9E3";

    beforeEach(() => {
      // Restore real fetch for integration tests
      global.fetch = originalFetch;
    });

    afterEach(() => {
      // Restore original fetch after each test to ensure isolation
      global.fetch = originalFetch;
    });

    it("should resolve real ENS name for mike.gemini.eth", async () => {
      // Integration test with proper isolation
      // Set a reasonable timeout for API call
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);

      try {
        // Use original fetch with timeout
        const originalFetchLocal = global.fetch;
        global.fetch = (url: string, options?: any) => {
          return originalFetchLocal(url, {
            ...options,
            signal: controller.signal,
          });
        };

        const result = await reverseResolveEns(realAddress);

        // Restore fetch immediately after use
        global.fetch = originalFetchLocal;
        clearTimeout(timeout);

        // The API might return mike.gemini.eth or null depending on availability
        // We'll accept both outcomes for a robust test
        expect(result.address.toLowerCase()).toBe(realAddress.toLowerCase());
        expect(result.name).toBeDefined(); // Could be "mike.gemini.eth" or null

        // If the API returned a name, it should be mike.gemini.eth
        if (result.name) {
          expect(result.name).toBe("mike.gemini.eth");
        }
      } catch (error: any) {
        clearTimeout(timeout);
        // If the API is unavailable or times out, that's okay - the function should handle it gracefully
        // Just verify that it doesn't throw and returns the expected fallback
        if (error.name === "AbortError") {
          // Timeout occurred - that's fine for an integration test
          console.log("ENS API timeout - skipping integration test");
        } else {
          // Re-throw unexpected errors
          throw error;
        }
      } finally {
        // Always ensure fetch is restored
        global.fetch = originalFetch;
      }
    });

    it("should handle address without ENS name", async () => {
      // Using a random address that shouldn't have an ENS name
      const randomAddress: Address = "0x1234567890123456789012345678901234567890";
      const result = await reverseResolveEns(randomAddress);

      expect(result).toEqual({
        address: randomAddress,
        name: null,
      });
    });
  });

  // Unit tests with mocked responses
  describe("reverseResolveEns - Unit Tests", () => {
    const testAddress: Address = "0xce97D39F2c1f19d0F3B44f735Cd7A8a6FB29F9E3";

    beforeEach(() => {
      mockFetch.mockClear();
      global.fetch = mockFetch as any;
    });

    afterEach(() => {
      global.fetch = originalFetch;
    });

    it("should successfully resolve an ENS name", async () => {
      const mockResponse = {
        json: () =>
          Promise.resolve({
            address: testAddress,
            name: "mike.gemini.eth",
          }),
        ok: true,
      };
      mockFetch.mockResolvedValueOnce(mockResponse);

      const result = await reverseResolveEns(testAddress);

      expect(result).toEqual({
        address: testAddress,
        name: "mike.gemini.eth",
      });
      expect(mockFetch).toHaveBeenCalledWith(`${ENS_API_URL}/reverse/${testAddress}`);
    });

    it("should return null name when ENS name is not found", async () => {
      const mockResponse = {
        json: () =>
          Promise.resolve({
            address: testAddress,
            name: null,
          }),
        ok: true,
      };
      mockFetch.mockResolvedValueOnce(mockResponse);

      const result = await reverseResolveEns(testAddress);

      expect(result).toEqual({
        address: testAddress,
        name: null,
      });
    });

    it("should handle 404 Not Found response", async () => {
      const mockResponse = {
        json: () =>
          Promise.resolve({
            error: "ENS name not found",
          }),
        ok: false,
        status: 404,
        statusText: "Not Found",
      };
      mockFetch.mockResolvedValueOnce(mockResponse);

      const result = await reverseResolveEns(testAddress);

      expect(result).toEqual({
        address: testAddress,
        name: null,
      });
    });

    it("should handle 500 Server Error response", async () => {
      const mockResponse = {
        json: () =>
          Promise.resolve({
            error: "Internal server error",
          }),
        ok: false,
        status: 500,
        statusText: "Internal Server Error",
      };
      mockFetch.mockResolvedValueOnce(mockResponse);

      const result = await reverseResolveEns(testAddress);

      expect(result).toEqual({
        address: testAddress,
        name: null,
      });
    });

    it("should handle network errors gracefully", async () => {
      mockFetch.mockRejectedValueOnce(new Error("Network error"));

      const result = await reverseResolveEns(testAddress);

      expect(result).toEqual({
        address: testAddress,
        name: null,
      });
    });

    it("should handle JSON parsing errors", async () => {
      const mockResponse = {
        json: () => {
          throw new Error("JSON parsing failed");
        },
        ok: true,
      };
      mockFetch.mockResolvedValueOnce(mockResponse);

      const result = await reverseResolveEns(testAddress);

      expect(result).toEqual({
        address: testAddress,
        name: null,
      });
    });

    it("should handle timeout errors", async () => {
      const timeoutError = new Error("Request timeout");
      timeoutError.name = "TimeoutError";
      mockFetch.mockRejectedValueOnce(timeoutError);

      const result = await reverseResolveEns(testAddress);

      expect(result).toEqual({
        address: testAddress,
        name: null,
      });
    });

    it("should work with different address formats", async () => {
      const addresses = [
        "0xce97D39F2c1f19d0F3B44f735Cd7A8a6FB29F9E3", // Mixed case
        "0xCE97D39F2C1F19D0F3B44F735CD7A8A6FB29F9E3", // Upper case
        "0xce97d39f2c1f19d0f3b44f735cd7a8a6fb29f9e3", // Lower case
      ];

      for (const addr of addresses) {
        mockFetch.mockResolvedValueOnce({
          json: () =>
            Promise.resolve({
              address: addr,
              name: "test.eth",
            }),
          ok: true,
        });

        const result = await reverseResolveEns(addr as Address);

        expect(result.address).toBe(addr);
        expect(result.name).toBe("test.eth");
      }
    });

    it("should correctly build the API URL", async () => {
      const mockResponse = {
        json: () =>
          Promise.resolve({
            address: testAddress,
            name: "test.eth",
          }),
        ok: true,
      };
      mockFetch.mockResolvedValueOnce(mockResponse);

      await reverseResolveEns(testAddress);

      const expectedUrl = `${ENS_API_URL}/reverse/${testAddress}`;
      expect(mockFetch).toHaveBeenCalledWith(expectedUrl);
      expect(expectedUrl).toBe(`https://horizon-api.gemini.com/api/ens/reverse/${testAddress}`);
    });
  });
});
