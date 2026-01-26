export const hexStringFromNumber = (num: number): string => {
  return `0x${BigInt(num).toString(16)}`;
};

export const safeJsonStringify = (obj: any) =>
  JSON.stringify(obj, (_, value) => (typeof value === "bigint" ? value.toString() + "n" : value), 2);
