import { hexStringFromNumber } from "./index";

describe("Strings util", () => {
  describe("hexStringFromNumber()", () => {
    test("converts positive numbers to hex", () => {
      expect(hexStringFromNumber(0)).toBe("0x0");
      expect(hexStringFromNumber(1)).toBe("0x1");
      expect(hexStringFromNumber(10)).toBe("0xa");
      expect(hexStringFromNumber(255)).toBe("0xff");
      expect(hexStringFromNumber(256)).toBe("0x100");
    });

    test("handles large numbers", () => {
      expect(hexStringFromNumber(4096)).toBe("0x1000");
      expect(hexStringFromNumber(123456789)).toBe("0x75bcd15");
      expect(hexStringFromNumber(2 ** 32)).toBe("0x100000000");
    });

    test("converts negative numbers correctly", () => {
      expect(hexStringFromNumber(-1)).toBe("0x-1");
      expect(hexStringFromNumber(-255)).toBe("0x-ff");
      expect(hexStringFromNumber(-4096)).toBe("0x-1000");
    });

    test("handles edge cases", () => {
      expect(hexStringFromNumber(0)).toBe("0x0"); // Zero case
      expect(hexStringFromNumber(Number.MAX_SAFE_INTEGER)).toBe(`0x${BigInt(Number.MAX_SAFE_INTEGER).toString(16)}`);
      expect(hexStringFromNumber(Number.MIN_SAFE_INTEGER)).toBe(`0x${BigInt(Number.MIN_SAFE_INTEGER).toString(16)}`);
    });

    test("throws an error for non-number inputs", () => {
      expect(() => hexStringFromNumber(NaN)).toThrow();
      expect(() => hexStringFromNumber(Infinity)).toThrow();
    });
  });
});
