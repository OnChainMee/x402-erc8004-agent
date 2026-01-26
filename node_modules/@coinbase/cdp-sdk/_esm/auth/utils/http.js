/**
 * @module HTTP
 */
import { generateWalletJwt, generateJwt } from "./jwt.js";
import { UserInputValidationError } from "../../errors.js";
import { version } from "../../version.js";
/**
 * Gets authentication headers for a request.
 *
 * @param options - The configuration options for generating auth headers
 * @returns Object containing the authentication headers
 */
export async function getAuthHeaders(options) {
    const headers = {};
    // Generate and add JWT token
    const jwt = await generateJwt({
        apiKeyId: options.apiKeyId,
        apiKeySecret: options.apiKeySecret,
        requestMethod: options.requestMethod,
        requestHost: options.requestHost,
        requestPath: options.requestPath,
        expiresIn: options.expiresIn,
        audience: options.audience,
    });
    headers["Authorization"] = `Bearer ${jwt}`;
    headers["Content-Type"] = "application/json";
    // Add wallet auth if needed
    if (requiresWalletAuth(options.requestMethod, options.requestPath)) {
        if (!options.walletSecret) {
            throw new UserInputValidationError("Wallet Secret not configured. Please set the CDP_WALLET_SECRET environment variable, or pass it as an option to the CdpClient constructor.");
        }
        const walletAuthToken = await generateWalletJwt({
            walletSecret: options.walletSecret,
            requestMethod: options.requestMethod,
            requestHost: options.requestHost,
            requestPath: options.requestPath,
            requestData: options.requestBody || {},
        });
        headers["X-Wallet-Auth"] = walletAuthToken;
    }
    // Add correlation data
    headers["Correlation-Context"] = getCorrelationData(options.source, options.sourceVersion);
    return headers;
}
/**
 * Returns true if the request indicated by the method and URL requires wallet authentication.
 *
 * @param requestMethod - The HTTP method of the request
 * @param requestPath - The URL path of the request
 * @returns True if the request requires wallet authentication, false otherwise
 */
function requiresWalletAuth(requestMethod, requestPath) {
    return ((requestPath?.includes("/accounts") ||
        requestPath?.includes("/spend-permissions") ||
        requestPath?.includes("/user-operations/prepare-and-send") ||
        requestPath?.endsWith("/end-users")) &&
        (requestMethod === "POST" || requestMethod === "DELETE" || requestMethod === "PUT"));
}
/**
 * Returns encoded correlation data including the SDK version and language.
 *
 * @param source - The source identifier for the request
 * @param sourceVersion - The version of the source making the request
 * @returns Encoded correlation data as a query string
 */
export function getCorrelationData(source, sourceVersion) {
    const data = {
        sdk_version: version,
        sdk_language: "typescript",
        source: source || "sdk-auth",
    };
    if (sourceVersion) {
        data["source_version"] = sourceVersion;
    }
    return Object.keys(data)
        .map(key => `${key}=${encodeURIComponent(data[key])}`)
        .join(",");
}
//# sourceMappingURL=http.js.map