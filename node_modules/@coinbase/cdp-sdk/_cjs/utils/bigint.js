"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertBigIntsToStrings = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Converts bigint values in an object to strings for safe serialization
 *
 * @param obj - The object to convert
 * @returns A new object with bigint values converted to strings
 */
const convertBigIntsToStrings = (obj) => {
    if (typeof obj === "bigint") {
        return obj.toString();
    }
    if (Array.isArray(obj)) {
        return obj.map(exports.convertBigIntsToStrings);
    }
    if (obj && typeof obj === "object") {
        return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, (0, exports.convertBigIntsToStrings)(v)]));
    }
    return obj;
};
exports.convertBigIntsToStrings = convertBigIntsToStrings;
//# sourceMappingURL=bigint.js.map