/**
 * @module WebSocket
 */
import { getCorrelationData } from "./http.js";
import { generateJwt } from "./jwt.js";
/**
 * Gets authentication headers for a WebSocket connection.
 *
 * @param options - The configuration options for generating WebSocket auth headers
 * @returns Object containing the authentication headers
 */
export async function getWebSocketAuthHeaders(options) {
    const headers = {};
    // Generate and add JWT token without request parameters for WebSocket
    const jwt = await generateJwt({
        apiKeyId: options.apiKeyId,
        apiKeySecret: options.apiKeySecret,
        // All request parameters are null for WebSocket
        requestMethod: null,
        requestHost: null,
        requestPath: null,
        expiresIn: options.expiresIn,
        audience: options.audience,
    });
    headers["Authorization"] = `Bearer ${jwt}`;
    headers["Content-Type"] = "application/json";
    // Add correlation data
    headers["Correlation-Context"] = getCorrelationData(options.source, options.sourceVersion);
    return headers;
}
//# sourceMappingURL=ws.js.map