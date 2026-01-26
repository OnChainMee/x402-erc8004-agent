import type { MaybePromise } from './internal/types.js';
export type Storage = {
    getItem: <value>(name: string) => MaybePromise<value | null>;
    removeItem: (name: string) => MaybePromise<void>;
    setItem: (name: string, value: unknown) => MaybePromise<void>;
    sizeLimit: number;
    storages?: readonly Storage[] | undefined;
};
export declare function from(storage: Storage): Storage;
export declare function combine(...storages: readonly Storage[]): Storage;
export declare function idb(): Storage;
export declare function localStorage(): Storage;
export declare function cookie(): Storage;
export declare function memory(): Storage;
//# sourceMappingURL=Storage.d.ts.map