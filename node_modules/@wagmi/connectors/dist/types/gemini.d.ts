import type { AppMetadata, ProviderInterface } from '@gemini-wallet/core';
export type GeminiParameters = {
    appMetadata?: AppMetadata;
};
export declare function gemini(parameters?: GeminiParameters): import("@wagmi/core").CreateConnectorFn<ProviderInterface, Record<string, unknown>, Record<string, unknown>>;
export declare namespace gemini {
    var type: "gemini";
}
//# sourceMappingURL=gemini.d.ts.map