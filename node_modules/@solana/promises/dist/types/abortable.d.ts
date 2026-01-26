/**
 * Returns a new promise that will reject if the abort signal fires before the original promise
 * settles. Resolves or rejects with the value of the original promise otherwise.
 *
 * @example
 * ```ts
 * const result = await getAbortablePromise(
 *     // Resolves or rejects when `fetch` settles.
 *     fetch('https://example.com/json').then(r => r.json()),
 *     // ...unless it takes longer than 5 seconds, after which the `AbortSignal` is triggered.
 *     AbortSignal.timeout(5000),
 * );
 * ```
 */
export declare function getAbortablePromise<T>(promise: Promise<T>, abortSignal?: AbortSignal): Promise<T>;
//# sourceMappingURL=abortable.d.ts.map