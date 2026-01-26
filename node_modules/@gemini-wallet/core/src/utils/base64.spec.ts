import { describe, expect, it } from "bun:test";

import { base64ToHex, bufferToBase64URLString, decodeBase64, encodeBase64, utf8StringToBuffer } from "./base64";

describe("Base64 utilities", () => {
  describe("encodeBase64", () => {
    it("should encode Uint8Array to base64url string", () => {
      const input = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
      const result = encodeBase64(input);
      expect(result).toBe("SGVsbG8"); // base64url encoded "Hello" (no padding)
    });

    it("should handle empty array", () => {
      const input = new Uint8Array([]);
      const result = encodeBase64(input);
      expect(result).toBe("");
    });

    it("should remove padding from base64 output", () => {
      const input = new Uint8Array([72, 101]); // "He"
      const result = encodeBase64(input);
      expect(result).toBe("SGU"); // Should not have "=" padding
    });

    it("should replace + with - and / with _ for base64url", () => {
      // Create bytes that will produce + and / in base64
      const input = new Uint8Array([255, 255, 255]); // Will produce "///" in base64
      const result = encodeBase64(input);
      expect(result).not.toContain("+");
      expect(result).not.toContain("/");
      expect(result).toBe("____"); // base64url version (with padding removed)
    });

    it("should handle binary data correctly", () => {
      const input = new Uint8Array([0, 1, 2, 3, 255, 254, 253]);
      const result = encodeBase64(input);
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(0);
      // Verify it doesn't contain base64 special characters
      expect(result).not.toMatch(/[+/=]/);
    });

    it("should produce consistent results", () => {
      const input = new Uint8Array([1, 2, 3, 4, 5]);
      const result1 = encodeBase64(input);
      const result2 = encodeBase64(input);
      expect(result1).toBe(result2);
    });
  });

  describe("decodeBase64", () => {
    it("should decode base64url string to Uint8Array", () => {
      const input = "SGVsbG8"; // base64url encoded "Hello"
      const result = decodeBase64(input);
      expect(Array.from(result)).toEqual([72, 101, 108, 108, 111]); // "Hello" in bytes
    });

    it("should handle empty string", () => {
      const result = decodeBase64("");
      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(0);
    });

    it("should convert base64url characters back to base64", () => {
      const input = "____"; // base64url version (4 underscores for proper padding)
      const result = decodeBase64(input);
      expect(Array.from(result)).toEqual([255, 255, 255]);
    });

    it("should add padding when necessary", () => {
      const input = "SGU"; // "He" without padding
      const result = decodeBase64(input);
      expect(Array.from(result)).toEqual([72, 101]); // "He" in bytes
    });

    it("should handle strings that need different amounts of padding", () => {
      // Test string needing no padding (length % 4 = 0)
      const noPadding = "SGVsbG8K"; // "Hello\n" base64url
      const result1 = decodeBase64(noPadding);
      expect(Array.from(result1)).toEqual([72, 101, 108, 108, 111, 10]);

      // Test string needing 2 padding characters (length % 4 = 2)
      const twoPadding = "SGU"; // "He"
      const result2 = decodeBase64(twoPadding);
      expect(Array.from(result2)).toEqual([72, 101]);

      // Test string needing 1 padding character (length % 4 = 3)
      const onePadding = "SGVs"; // "Hel"
      const result3 = decodeBase64(onePadding);
      expect(Array.from(result3)).toEqual([72, 101, 108]);
    });

    it("should be inverse of encodeBase64", () => {
      const original = new Uint8Array([1, 2, 3, 4, 5, 255, 254, 0]);
      const encoded = encodeBase64(original);
      const decoded = decodeBase64(encoded);
      expect(Array.from(decoded)).toEqual(Array.from(original));
    });
  });

  describe("bufferToBase64URLString", () => {
    it("should convert ArrayBuffer to base64url string", () => {
      const buffer = new ArrayBuffer(5);
      const view = new Uint8Array(buffer);
      view.set([72, 101, 108, 108, 111]); // "Hello"

      const result = bufferToBase64URLString(buffer);
      expect(result).toBe("SGVsbG8");
    });

    it("should convert Uint8Array to base64url string", () => {
      const uint8Array = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
      const result = bufferToBase64URLString(uint8Array);
      expect(result).toBe("SGVsbG8");
    });

    it("should handle empty ArrayBuffer", () => {
      const buffer = new ArrayBuffer(0);
      const result = bufferToBase64URLString(buffer);
      expect(result).toBe("");
    });

    it("should handle empty Uint8Array", () => {
      const uint8Array = new Uint8Array(0);
      const result = bufferToBase64URLString(uint8Array);
      expect(result).toBe("");
    });

    it("should handle large buffers", () => {
      const size = 10000;
      const buffer = new ArrayBuffer(size);
      const view = new Uint8Array(buffer);
      for (let i = 0; i < size; i++) {
        view[i] = i % 256;
      }

      const result = bufferToBase64URLString(buffer);
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(0);
      expect(result).not.toMatch(/[+/=]/); // Should be base64url format
    });
  });

  describe("utf8StringToBuffer", () => {
    it("should convert ASCII string to Uint8Array", () => {
      const input = "Hello";
      const result = utf8StringToBuffer(input);
      expect(Array.from(result)).toEqual([72, 101, 108, 108, 111]);
    });

    it("should handle empty string", () => {
      const result = utf8StringToBuffer("");
      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(0);
    });

    it("should handle UTF-8 characters correctly", () => {
      const input = "Hello 世界"; // Mixed ASCII and Chinese characters
      const result = utf8StringToBuffer(input);
      expect(result).toBeInstanceOf(Uint8Array);

      // Convert back to string to verify
      const decoder = new TextDecoder();
      const decoded = decoder.decode(result);
      expect(decoded).toBe(input);
    });

    it("should handle emoji correctly", () => {
      const input = "Hello 👋 World 🌍";
      const result = utf8StringToBuffer(input);
      expect(result).toBeInstanceOf(Uint8Array);

      // Convert back to string to verify
      const decoder = new TextDecoder();
      const decoded = decoder.decode(result);
      expect(decoded).toBe(input);
    });

    it("should handle special characters", () => {
      const input = "Test\n\r\t\"'\\<>&";
      const result = utf8StringToBuffer(input);
      expect(result).toBeInstanceOf(Uint8Array);

      // Convert back to string to verify
      const decoder = new TextDecoder();
      const decoded = decoder.decode(result);
      expect(decoded).toBe(input);
    });

    it("should handle long strings", () => {
      const input = "a".repeat(10000);
      const result = utf8StringToBuffer(input);
      expect(result.length).toBe(10000);
      expect(Array.from(result).every(b => b === 97)).toBe(true); // 'a' = 97 in ASCII
    });
  });

  describe("base64ToHex", () => {
    it("should convert base64 string to hex string", () => {
      const base64 = "SGVsbG8"; // "Hello"
      const result = base64ToHex(base64);
      expect(result).toBe("48656c6c6f"); // "Hello" in hex
    });

    it("should handle empty string", () => {
      const result = base64ToHex("");
      expect(result).toBe("");
    });

    it("should handle base64url format", () => {
      const base64url = "____"; // base64url version
      const result = base64ToHex(base64url);
      expect(result).toBe("ffffff");
    });

    it("should pad single digit hex values with zero", () => {
      const base64 = "AAE"; // Contains bytes 0 and 1
      const result = base64ToHex(base64);
      expect(result).toBe("0001"); // Should pad 0 and 1 with leading zeros
    });

    it("should handle binary data correctly", () => {
      // Create a known base64 string
      const bytes = new Uint8Array([255, 0, 127, 1, 254]);
      const base64 = encodeBase64(bytes);
      const hex = base64ToHex(base64);

      expect(hex).toBe("ff007f01fe");
    });

    it("should produce lowercase hex output", () => {
      const base64 = "AQIDBAX-"; // Contains various bytes
      const result = base64ToHex(base64);
      expect(result).toBe(result.toLowerCase());
      expect(result).not.toMatch(/[A-F]/); // Should not contain uppercase
    });

    it("should handle all byte values", () => {
      // Create array with all byte values 0-255
      const allBytes = new Uint8Array(256);
      for (let i = 0; i < 256; i++) {
        allBytes[i] = i;
      }

      const base64 = encodeBase64(allBytes);
      const hex = base64ToHex(base64);

      // Verify hex string has correct length (2 chars per byte)
      expect(hex.length).toBe(512);

      // Verify first few bytes
      expect(hex.substring(0, 6)).toBe("000102");

      // Verify last few bytes
      expect(hex.substring(506, 512)).toBe("fdfeff");
    });

    it("should be consistent with encodeBase64 and decodeBase64", () => {
      const original = "48656c6c6f"; // "Hello" in hex
      const bytes = new Uint8Array(original.match(/.{2}/g)!.map(byte => parseInt(byte, 16)));
      const base64 = encodeBase64(bytes);
      const resultHex = base64ToHex(base64);

      expect(resultHex).toBe(original);
    });
  });

  describe("round-trip conversions", () => {
    it("should maintain data integrity through encode/decode cycle", () => {
      const testCases = [
        new Uint8Array([]),
        new Uint8Array([0]),
        new Uint8Array([255]),
        new Uint8Array([1, 2, 3, 4, 5]),
        new Uint8Array(Array.from({ length: 256 }, (_, i) => i)),
      ];

      for (const original of testCases) {
        const encoded = encodeBase64(original);
        const decoded = decodeBase64(encoded);
        expect(Array.from(decoded)).toEqual(Array.from(original));
      }
    });

    it("should maintain string data through utf8/base64 conversion", () => {
      const testStrings = ["", "Hello", "Hello World!", "Special chars: @#$%^&*()", "UTF-8: 你好世界", "Emoji: 😀🎉🚀"];

      for (const original of testStrings) {
        const buffer = utf8StringToBuffer(original);
        const base64 = encodeBase64(buffer);
        const decoded = decodeBase64(base64);
        const result = new TextDecoder().decode(decoded);
        expect(result).toBe(original);
      }
    });

    it("should maintain data through hex conversion", () => {
      const testData = [
        new Uint8Array([0, 1, 2, 3]),
        new Uint8Array([255, 254, 253, 252]),
        new Uint8Array([16, 32, 64, 128]),
      ];

      for (const original of testData) {
        const base64 = encodeBase64(original);
        const hex = base64ToHex(base64);

        // Convert hex back to bytes
        const bytes = new Uint8Array(hex.match(/.{2}/g)!.map(byte => parseInt(byte, 16)));
        expect(Array.from(bytes)).toEqual(Array.from(original));
      }
    });
  });
});
