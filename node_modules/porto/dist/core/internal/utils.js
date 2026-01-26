/**
 * Normalizes a value into a structured-clone compatible format.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
 */
export function normalizeValue(value) {
    if (Array.isArray(value))
        return value.map(normalizeValue);
    if (typeof value === 'function')
        return undefined;
    if (typeof value !== 'object' || value === null)
        return value;
    if (Object.getPrototypeOf(value) !== Object.prototype)
        try {
            return structuredClone(value);
        }
        catch {
            return undefined;
        }
    const normalized = {};
    for (const [k, v] of Object.entries(value))
        normalized[k] = normalizeValue(v);
    return normalized;
}
/**
 * Returns a new array containing only one copy of each element in the original
 * list transformed by a function.
 *
 * @param data - Array.
 * @param fn - Extracts a value to be used to compare elements.
 */
export function uniqBy(data, fn) {
    const result = [];
    const seen = new Set();
    for (const item of data) {
        const key = fn(item);
        if (!seen.has(key)) {
            seen.add(key);
            result.push(item);
        }
    }
    return result;
}
export function uuidv4() {
    if (typeof globalThis !== 'undefined' && 'crypto' in globalThis)
        return globalThis.crypto.randomUUID();
    return crypto.randomUUID();
}
/** Deduplicates in-flight promises. */
export function withDedupe(fn, { enabled = true, id }) {
    if (!enabled || !id)
        return fn();
    if (withDedupe.cache.get(id))
        return withDedupe.cache.get(id);
    const promise = fn().finally(() => withDedupe.cache.delete(id));
    withDedupe.cache.set(id, promise);
    return promise;
}
(function (withDedupe) {
    withDedupe.cache = new Map();
})(withDedupe || (withDedupe = {}));
//# sourceMappingURL=utils.js.map