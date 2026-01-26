/**
 * @module Axios
 */
import { AxiosInstance } from "axios";
export interface AuthInterceptorOptions {
    /**
     * The API key ID
     *
     * Examples:
     *  'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
     *  'organizations/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/apiKeys/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
     */
    apiKeyId: string;
    /**
     * The API key secret
     *
     * Examples:
     *  'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx==' (Edwards key (Ed25519))
     *  '-----BEGIN EC PRIVATE KEY-----\n...\n...\n...==\n-----END EC PRIVATE KEY-----\n' (EC key (ES256))
     */
    apiKeySecret: string;
    /** The Wallet Secret */
    walletSecret?: string;
    /** The source of the request */
    source?: string;
    /** The version of the source of the request */
    sourceVersion?: string;
    /** Optional expiration time in seconds (defaults to 120) */
    expiresIn?: number;
    /** Whether to log request/response details */
    debug?: boolean;
}
/**
 * Axios interceptor for adding the JWT to the Authorization header.
 *
 * @param axiosClient - The Axios client instance to add the interceptor to
 * @param options - Options for the request including API keys and debug flag
 * @returns The modified request configuration with the Authorization header added
 */
export declare function withAuth(axiosClient: AxiosInstance, options: AuthInterceptorOptions): AxiosInstance;
//# sourceMappingURL=withAuth.d.ts.map