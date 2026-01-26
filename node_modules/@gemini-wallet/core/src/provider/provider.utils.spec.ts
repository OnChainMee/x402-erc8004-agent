import { beforeEach, describe, expect, it, mock } from "bun:test";

import { convertSendValuesToBigInt, fetchRpcRequest, validateRpcRequestArgs } from "./provider.utils";

// Set up global window mock before tests
(global as any).window = {
  fetch: () => Promise.resolve({ json: () => Promise.resolve({ result: "success" }) }),
};

describe("Provider utils", () => {
  describe("validateRpcRequestArgs()", () => {
    it("should throw an error if args is null", () => {
      expect(() => validateRpcRequestArgs(null)).toThrow("Expected a single, non-array, object argument.");
    });

    it("should throw an error if args is not an object", () => {
      expect(() => validateRpcRequestArgs(42)).toThrow("Expected a single, non-array, object argument.");
    });

    it("should throw an error if args is an array", () => {
      expect(() => validateRpcRequestArgs([])).toThrow("Expected a single, non-array, object argument.");
    });

    it("should throw an error if method is missing", () => {
      expect(() => validateRpcRequestArgs({})).toThrow("'args.method' must be a non-empty string.");
    });

    it("should throw an error if method is not a string", () => {
      expect(() => validateRpcRequestArgs({ method: 123 })).toThrow("'args.method' must be a non-empty string.");
    });

    it("should throw an error if method is an empty string", () => {
      expect(() => validateRpcRequestArgs({ method: "" })).toThrow("'args.method' must be a non-empty string.");
    });

    it("should throw an error if params is not an object or array", () => {
      expect(() => validateRpcRequestArgs({ method: "testMethod", params: 123 })).toThrow(
        "'args.params' must be an object or array if provided.",
      );
    });

    it("should not throw an error for a valid request with an array params", () => {
      expect(() => validateRpcRequestArgs({ method: "testMethod", params: [] })).not.toThrow();
    });

    it("should not throw an error for a valid request with an object params", () => {
      expect(() =>
        validateRpcRequestArgs({
          method: "testMethod",
          params: { key: "value" },
        }),
      ).not.toThrow();
    });

    it("should not throw an error for a valid request without params", () => {
      expect(() => validateRpcRequestArgs({ method: "testMethod" })).not.toThrow();
    });
  });

  describe("fetchRpcRequest()", () => {
    beforeEach(() => {
      // Mock global fetch
      (global as any).fetch = mock(() =>
        Promise.resolve({
          json: mock(() => Promise.resolve({ result: "success" })),
        }),
      );
    });

    it("should send a valid RPC request and return the result", async () => {
      const mockResponse = { result: "success" };
      const mockJsonFn = mock(() => Promise.resolve(mockResponse));
      const mockFetchFn = mock(() =>
        Promise.resolve({
          json: mockJsonFn,
        }),
      );

      // Set up the window fetch mock
      (global as any).window.fetch = mockFetchFn;

      const request = { method: "testMethod", params: [] };
      const rpcUrl = "https://example.com";

      const result = await fetchRpcRequest(request, rpcUrl);

      expect(mockFetchFn).toHaveBeenCalledWith(
        rpcUrl,
        expect.objectContaining({
          body: expect.stringContaining('"method":"testMethod"'),
          headers: { "Content-Type": "application/json" },
          method: "POST",
          mode: "cors",
        }),
      );
      expect(result).toEqual("success");
    });

    it("should throw an error if the response contains an error field", async () => {
      const mockErrorResponse = { error: { message: "Something went wrong" } };
      const mockJsonFn = mock(() => Promise.resolve(mockErrorResponse));
      const mockFetchFn = mock(() =>
        Promise.resolve({
          json: mockJsonFn,
        }),
      );

      // Set up the window fetch mock
      (global as any).window.fetch = mockFetchFn;

      const request = { method: "testMethod", params: [] };
      const rpcUrl = "https://example.com";

      await expect(fetchRpcRequest(request, rpcUrl)).rejects.toEqual({
        message: "Something went wrong",
      });
    });
  });

  describe("convertSendValuesToBigInt()", () => {
    it("should convert hex value to BigInt", () => {
      const tx = { value: "0x1234" } as any;
      const result = convertSendValuesToBigInt(tx);
      expect(result.value).toBe(BigInt("0x1234"));
    });

    it("should convert hex gas to BigInt", () => {
      const tx = { gas: "0x5678" } as any;
      const result = convertSendValuesToBigInt(tx);
      expect(result.gas).toBe(BigInt("0x5678"));
    });

    it("should convert hex gasPrice to BigInt", () => {
      const tx = { gasPrice: "0xabcd" } as any;
      const result = convertSendValuesToBigInt(tx);
      expect(result.gasPrice).toBe(BigInt("0xabcd"));
    });

    it("should convert hex maxPriorityFeePerGas to BigInt", () => {
      const tx = { maxPriorityFeePerGas: "0xef01" } as any;
      const result = convertSendValuesToBigInt(tx);
      expect(result.maxPriorityFeePerGas).toBe(BigInt("0xef01"));
    });

    it("should convert hex maxFeePerGas to BigInt", () => {
      const tx = { maxFeePerGas: "0x2345" } as any;
      const result = convertSendValuesToBigInt(tx);
      expect(result.maxFeePerGas).toBe(BigInt("0x2345"));
    });

    it("should not modify fields that are already BigInt", () => {
      const originalBigInt = BigInt("0x6789");
      const tx = { value: originalBigInt } as any;
      const result = convertSendValuesToBigInt(tx);
      expect(result.value).toBe(originalBigInt);
    });

    it("should not modify fields that are not in the list to normalize", () => {
      const tx = {
        data: "0x123456" as `0x${string}`,
        to: "0xabcdef" as `0x${string}`,
      };
      const result = convertSendValuesToBigInt(tx);
      expect(result).toEqual(tx);
    });

    it("should handle transaction with missing fields", () => {
      const tx = { to: "0xabcdef" as `0x${string}` };
      const result = convertSendValuesToBigInt(tx);
      expect(result).toEqual(tx);
    });

    it("should convert multiple fields in the same transaction", () => {
      const tx = {
        gas: "0x5678",
        gasPrice: "0xabcd",
        to: "0xdef456" as `0x${string}`,
        value: "0x1234",
      } as any;
      const result = convertSendValuesToBigInt(tx);
      expect(result).toEqual({
        gas: BigInt("0x5678"),
        gasPrice: BigInt("0xabcd"),
        to: "0xdef456",
        value: BigInt("0x1234"),
      });
    });

    it("should return a new object without modifying the original", () => {
      const tx = { value: "0x1234" } as any;
      const result = convertSendValuesToBigInt(tx);
      expect(result).not.toBe(tx);
      expect(tx.value).toBe("0x1234");
    });
  });
});
