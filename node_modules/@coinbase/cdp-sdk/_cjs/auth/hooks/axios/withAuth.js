"use strict";
/**
 * @module Axios
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAuth = withAuth;
const axios_1 = require("axios");
const bigint_js_1 = require("../../../utils/bigint.js");
const http_js_1 = require("../../utils/http.js");
/**
 * Axios interceptor for adding the JWT to the Authorization header.
 *
 * @param axiosClient - The Axios client instance to add the interceptor to
 * @param options - Options for the request including API keys and debug flag
 * @returns The modified request configuration with the Authorization header added
 */
function withAuth(axiosClient, options) {
    axiosClient.interceptors.request.use(async (axiosConfig) => {
        const method = axiosConfig.method?.toString().toUpperCase() || "GET";
        if (!axiosConfig.url) {
            throw new Error("URL is required for authentication");
        }
        const fullyQualifiedURL = axiosClient.getUri() + axiosConfig.url;
        // Parse URL to get host and path
        const url = new URL(fullyQualifiedURL);
        // Convert bigints in request body to strings for safe serialization
        if (axiosConfig.data) {
            axiosConfig.data = (0, bigint_js_1.convertBigIntsToStrings)(axiosConfig.data);
        }
        // Get authentication headers
        const headers = await (0, http_js_1.getAuthHeaders)({
            apiKeyId: options.apiKeyId,
            apiKeySecret: options.apiKeySecret,
            requestMethod: method,
            requestHost: url.host,
            requestPath: url.pathname,
            requestBody: axiosConfig.data,
            walletSecret: options.walletSecret,
            source: options.source,
            sourceVersion: options.sourceVersion,
            expiresIn: options.expiresIn,
        });
        // Add headers to request config
        axiosConfig.headers = new axios_1.AxiosHeaders({
            ...axiosConfig.headers,
            ...headers,
        });
        if (options.debug) {
            // eslint-disable-next-line no-console
            console.log("Request:", {
                method,
                url: fullyQualifiedURL,
                headers: axiosConfig.headers,
                data: axiosConfig.data,
            });
        }
        return axiosConfig;
    });
    if (options.debug) {
        axiosClient.interceptors.response.use(response => {
            // eslint-disable-next-line no-console
            console.log("Response:", {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
                data: response.data,
            });
            return response;
        }, error => {
            // Ensure we have access to the error response details
            const errorDetails = {
                status: error.response?.status,
                statusText: error.response?.statusText,
                headers: error.response?.headers,
                data: error.response?.data,
                message: error.message,
                cause: error.cause,
            };
            // eslint-disable-next-line no-console
            console.error("Response Error:", errorDetails);
            return Promise.reject(error);
        });
    }
    return axiosClient;
}
//# sourceMappingURL=withAuth.js.map