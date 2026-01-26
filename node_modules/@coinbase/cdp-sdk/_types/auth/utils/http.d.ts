/**
 * @module HTTP
 */
/**
 * Options for generating authentication headers for API requests.
 */
export interface GetAuthHeadersOptions {
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
    /**
     * The HTTP method for the request (e.g. 'GET', 'POST')
     */
    requestMethod: string;
    /**
     * The host for the request (e.g. 'api.cdp.coinbase.com')
     */
    requestHost: string;
    /**
     * The path for the request (e.g. '/platform/v1/wallets')
     */
    requestPath: string;
    /**
     * Optional request body data
     */
    requestBody?: unknown;
    /**
     * The Wallet Secret for wallet authentication
     */
    walletSecret?: string;
    /**
     * The source identifier for the request
     */
    source?: string;
    /**
     * The version of the source making the request
     */
    sourceVersion?: string;
    /**
     * Optional expiration time in seconds (defaults to 120)
     */
    expiresIn?: number;
    /**
     * Optional audience claim for the JWT
     */
    audience?: string[];
}
/**
 * Gets authentication headers for a request.
 *
 * @param options - The configuration options for generating auth headers
 * @returns Object containing the authentication headers
 */
export declare function getAuthHeaders(options: GetAuthHeadersOptions): Promise<Record<string, string>>;
/**
 * Returns encoded correlation data including the SDK version and language.
 *
 * @param source - The source identifier for the request
 * @param sourceVersion - The version of the source making the request
 * @returns Encoded correlation data as a query string
 */
export declare function getCorrelationData(source?: string, sourceVersion?: string): string;
//# sourceMappingURL=http.d.ts.map