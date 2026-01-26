import { AxiosRequestConfig } from "axios";
import type { Prettify } from "../types/utils.js";
/**
 * The options for the CDP API.
 */
export type CdpOptions = {
    /**
     * The API key ID or the legacy API key name.
     *
     * Examples:
     *  ID format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
     *  Legacy name format: 'organizations/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/apiKeys/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
     */
    apiKeyId: string;
    /**
     * The API key secret, using the Ed25519 or legacy EC key format.
     *
     * Examples:
     *  Ed25519 key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=='
     *  EC key: '-----BEGIN EC PRIVATE KEY-----\n...\n...\n...==\n-----END EC PRIVATE KEY-----\n'
     */
    apiKeySecret: string;
    /** The Wallet Secret. Only needed if calling certain Wallet APIs. */
    walletSecret?: string;
    /** If true, logs API requests and responses to the console. */
    debugging?: boolean;
    /** The base path for the API. */
    basePath?: string;
    /** The source for the API request, used for analytics. Defaults to `typescript-client`. */
    source?: string;
    /** The version of the source for the API request, used for analytics. */
    sourceVersion?: string;
    /** Optional expiration time in seconds (defaults to 120) */
    expiresIn?: number;
};
export declare let config: Prettify<Omit<CdpOptions, "basePath"> & {
    basePath: string;
}> | undefined;
/**
 * Configures the CDP client with the given options.
 *
 * @param {CdpOptions} options - The CDP options.
 */
export declare const configure: (options: CdpOptions) => void;
/**
 * Mutates the given Axios request configuration to add the CDP API key signature
 * to the request headers.
 *
 * @param {AxiosRequestConfig} config - The Axios request configuration.
 * @param idempotencyKey - The idempotency key.
 * @returns {Promise<T>} A promise that resolves to the response data.
 * @throws {APIError} If the request fails.
 */
export declare const cdpApiClient: <T>(config: AxiosRequestConfig, idempotencyKey?: string) => Promise<T>;
//# sourceMappingURL=cdpApiClient.d.ts.map