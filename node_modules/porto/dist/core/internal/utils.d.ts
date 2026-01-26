/**
 * Normalizes a value into a structured-clone compatible format.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
 */
export declare function normalizeValue<type>(value: type): type;
/**
 * Returns a new array containing only one copy of each element in the original
 * list transformed by a function.
 *
 * @param data - Array.
 * @param fn - Extracts a value to be used to compare elements.
 */
export declare function uniqBy<data>(data: data[], fn: (item: data) => unknown): data[];
export declare function uuidv4(): `${string}-${string}-${string}-${string}-${string}`;
/** Deduplicates in-flight promises. */
export declare function withDedupe<data>(fn: () => Promise<data>, { enabled, id }: withDedupe.Options): Promise<data>;
export declare namespace withDedupe {
    type Options = {
        enabled?: boolean | undefined;
        id?: string | undefined;
    };
    const cache: Map<string, Promise<any>>;
}
//# sourceMappingURL=utils.d.ts.map