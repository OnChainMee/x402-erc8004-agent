/**
 * @module JWT
 */
/**
 * JwtOptions contains configuration for JWT generation.
 *
 * This interface holds all necessary parameters for generating a JWT token
 * for authenticating with Coinbase's REST APIs. It supports both EC (ES256)
 * and Ed25519 (EdDSA) keys.
 */
export interface JwtOptions {
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
     * The HTTP method for the request (e.g. 'GET', 'POST'), or null for JWTs intended for websocket connections
     */
    requestMethod?: string | null;
    /**
     * The host for the request (e.g. 'api.cdp.coinbase.com'), or null for JWTs intended for websocket connections
     */
    requestHost?: string | null;
    /**
     * The path for the request (e.g. '/platform/v1/wallets'), or null for JWTs intended for websocket connections
     */
    requestPath?: string | null;
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
 * WalletJwtOptions contains configuration for Wallet Auth JWT generation.
 *
 * This interface holds all necessary parameters for generating a Wallet Auth JWT
 * for authenticating with endpoints that require wallet authentication.
 */
export interface WalletJwtOptions {
    /**
     * - The Wallet Secret
     */
    walletSecret: string;
    /**
     * - The HTTP method for the request (e.g. 'GET', 'POST')
     */
    requestMethod: string;
    /**
     * - The host for the request (e.g. 'api.cdp.coinbase.com')
     */
    requestHost: string;
    /**
     * - The path for the request (e.g. '/platform/v1/wallets/{wallet_id}/addresses')
     */
    requestPath: string;
    /**
     * - The request data for the request (e.g. `{ "wallet_id": "1234567890" }`)
     */
    requestData: Record<string, any>;
}
/**
 * Generates a JWT (also known as a Bearer token) for authenticating with Coinbase's REST APIs.
 * Supports both EC (ES256) and Ed25519 (EdDSA) keys. Also supports JWTs meant for
 * websocket connections by allowing requestMethod, requestHost, and requestPath to all be
 * null, in which case the 'uris' claim is omitted from the JWT.
 *
 * @param options - The configuration options for generating the JWT
 * @returns The generated JWT (Bearer token) string
 * @throws {Error} If required parameters are missing, invalid, or if JWT signing fails
 */
export declare function generateJwt(options: JwtOptions): Promise<string>;
/**
 * Generates a wallet authentication JWT for the given API endpoint URL.
 * Used for authenticating with specific endpoints that require wallet authentication.
 *
 * @param options - The configuration options for generating the JWT
 * @returns The generated JWT (Bearer token) string
 * @throws {UndefinedWalletSecretError} If the Wallet Secret is not defined.
 * @throws {InvalidWalletSecretFormatError} If the private key is not in the correct format or signing fails.
 */
export declare function generateWalletJwt(options: WalletJwtOptions): Promise<string>;
//# sourceMappingURL=jwt.d.ts.map