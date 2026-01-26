"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortKeys = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Recursively sorts object keys to ensure consistent JSON stringification
 *
 * @param obj - The object to sort
 * @returns A new object with sorted keys
 */
const sortKeys = (obj) => {
    if (!obj || typeof obj !== "object") {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(exports.sortKeys);
    }
    return Object.keys(obj)
        .sort()
        .reduce((acc, key) => {
        acc[key] = (0, exports.sortKeys)(obj[key]);
        return acc;
    }, {});
};
exports.sortKeys = sortKeys;
//# sourceMappingURL=sortKeys.js.map