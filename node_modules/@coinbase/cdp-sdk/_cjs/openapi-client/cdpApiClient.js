"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cdpApiClient = exports.configure = exports.config = void 0;
// eslint-disable-next-line import/no-named-as-default
const axios_1 = __importDefault(require("axios"));
const axios_retry_1 = __importStar(require("axios-retry"));
const index_js_1 = require("../auth/hooks/axios/index.js");
const constants_js_1 = require("../constants.js");
const errors_js_1 = require("./errors.js");
const errors_js_2 = require("../errors.js");
let axiosInstance;
exports.config = undefined;
/**
 * Configures the CDP client with the given options.
 *
 * @param {CdpOptions} options - The CDP options.
 */
const configure = (options) => {
    const baseURL = options.basePath || "https://api.cdp.coinbase.com/platform";
    exports.config = {
        ...options,
        basePath: baseURL,
    };
    axiosInstance = axios_1.default.create({
        baseURL,
    });
    (0, axios_retry_1.default)(axiosInstance, {
        retryDelay: axios_retry_1.exponentialDelay,
    });
    axiosInstance = (0, index_js_1.withAuth)(axiosInstance, {
        apiKeyId: options.apiKeyId,
        apiKeySecret: options.apiKeySecret,
        source: options.source || "sdk-openapi-client",
        sourceVersion: options.sourceVersion,
        walletSecret: options.walletSecret,
        expiresIn: options.expiresIn,
        debug: options.debugging,
    });
};
exports.configure = configure;
/**
 * Adds an idempotency key to request config if provided
 *
 * @param config - The Axios request configuration.
 * @param idempotencyKey - The idempotency key.
 * @returns The Axios request configuration with the idempotency key.
 */
const addIdempotencyKey = (config, idempotencyKey) => {
    if (!idempotencyKey) {
        return config;
    }
    return {
        ...config,
        headers: {
            ...(config.headers || {}),
            "X-Idempotency-Key": idempotencyKey,
        },
    };
};
/**
 * Mutates the given Axios request configuration to add the CDP API key signature
 * to the request headers.
 *
 * @param {AxiosRequestConfig} config - The Axios request configuration.
 * @param idempotencyKey - The idempotency key.
 * @returns {Promise<T>} A promise that resolves to the response data.
 * @throws {APIError} If the request fails.
 */
const cdpApiClient = async (config, idempotencyKey) => {
    validateCall(config);
    // Add idempotency key to the request headers if provided
    const configWithIdempotencyKey = addIdempotencyKey(config, idempotencyKey);
    try {
        const response = await axiosInstance(configWithIdempotencyKey);
        return response.data;
    }
    catch (error) {
        if (error instanceof errors_js_2.UserInputValidationError) {
            throw error;
        }
        // eslint-disable-next-line import/no-named-as-default-member
        if (axios_1.default.isAxiosError(error) && !error.response) {
            // Network-level errors (no response received)
            const errorMessage = (error.message || "").toLowerCase();
            const errorCode = error.code?.toLowerCase();
            // Categorize network errors based on error messages and codes
            if (errorCode === "econnrefused" || errorMessage.includes("connection refused")) {
                throw new errors_js_1.NetworkError("network_connection_failed", "Unable to connect to CDP service. The service may be unavailable.", { code: error.code, message: error.message, retryable: true }, error.cause);
            }
            else if (errorCode === "etimedout" ||
                errorCode === "econnaborted" ||
                errorMessage.includes("timeout")) {
                throw new errors_js_1.NetworkError("network_timeout", "Request timed out. Please try again.", { code: error.code, message: error.message, retryable: true }, error.cause);
            }
            else if (errorCode === "enotfound" || errorMessage.includes("getaddrinfo")) {
                throw new errors_js_1.NetworkError("network_dns_failure", "DNS resolution failed. Please check your network connection.", { code: error.code, message: error.message, retryable: false }, error.cause);
            }
            else if (errorMessage.includes("network error") || errorMessage.includes("econnreset")) {
                throw new errors_js_1.NetworkError("network_connection_failed", "Network error occurred. Please check your connection and try again.", { code: error.code, message: error.message, retryable: true }, error.cause);
            }
            else {
                // Generic network error
                throw new errors_js_1.NetworkError("unknown", error.cause instanceof Error ? error.cause.message : error.message, { code: error.code, message: error.message, retryable: true }, error.cause);
            }
        }
        // eslint-disable-next-line import/no-named-as-default-member
        if (axios_1.default.isAxiosError(error) && error.response) {
            if ((0, errors_js_1.isOpenAPIError)(error.response.data)) {
                throw new errors_js_1.APIError(error.response.status, error.response.data.errorType, error.response.data.errorMessage, error.response.data.correlationId, error.response.data.errorLink, error.cause);
            }
            else {
                const statusCode = error.response.status;
                const responseData = error.response.data;
                // Check for gateway-level errors that might indicate network issues
                const isGatewayError = responseData &&
                    typeof responseData === "string" &&
                    (responseData.toLowerCase().includes("forbidden") ||
                        responseData.toLowerCase().includes("ip") ||
                        responseData.toLowerCase().includes("blocked") ||
                        responseData.toLowerCase().includes("gateway"));
                switch (statusCode) {
                    case 401:
                        throw new errors_js_1.APIError(statusCode, "unauthorized", "Unauthorized.", undefined, `${constants_js_1.ERROR_DOCS_PAGE_URL}#unauthorized`, error.cause);
                    case 403:
                        // Special handling for IP blocklist and other gateway-level 403s
                        if (isGatewayError) {
                            throw new errors_js_1.NetworkError("network_ip_blocked", "Access denied. Your IP address may be blocked or restricted.", {
                                code: "IP_BLOCKED",
                                message: typeof responseData === "string" ? responseData : JSON.stringify(responseData),
                                retryable: false,
                            }, error.cause);
                        }
                        // Regular 403 forbidden error
                        throw new errors_js_1.APIError(statusCode, "unauthorized", "Forbidden. You don't have permission to access this resource.", undefined, `${constants_js_1.ERROR_DOCS_PAGE_URL}#forbidden`, error.cause);
                    case 404:
                        throw new errors_js_1.APIError(statusCode, "not_found", "API not found.", undefined, `${constants_js_1.ERROR_DOCS_PAGE_URL}#not_found`, error.cause);
                    case 502:
                        throw new errors_js_1.APIError(statusCode, "bad_gateway", "Bad gateway.", undefined, `${constants_js_1.ERROR_DOCS_PAGE_URL}`, error.cause);
                    case 503:
                        throw new errors_js_1.APIError(statusCode, "service_unavailable", "Service unavailable. Please try again later.", undefined, `${constants_js_1.ERROR_DOCS_PAGE_URL}`, error.cause);
                    default: {
                        let errorText = "";
                        if (error.response.data) {
                            try {
                                errorText = JSON.stringify(error.response.data);
                            }
                            catch {
                                errorText = String(error.response.data);
                            }
                        }
                        const errorMessage = errorText
                            ? `An unexpected error occurred: ${errorText}`
                            : "An unexpected error occurred.";
                        throw new errors_js_1.APIError(statusCode, "unexpected_error", errorMessage, undefined, `${constants_js_1.ERROR_DOCS_PAGE_URL}`, error.cause);
                    }
                }
            }
        }
        throw new errors_js_1.UnknownError("Something went wrong. Please reach out at https://discord.com/channels/1220414409550336183/1271495764580896789 for help.", error instanceof Error ? error : undefined);
    }
};
exports.cdpApiClient = cdpApiClient;
/**
 * Validates the call to the cdpApiClient.
 *
 * @param {AxiosRequestConfig} config - The Axios request configuration.
 * @throws {Error} If the call is not valid.
 */
const validateCall = (config) => {
    if (!axiosInstance.getUri() || axiosInstance.getUri() === "") {
        throw new Error("CDP client URI not configured. Call configure() first.");
    }
    if (!config.url || config.url === "") {
        throw new Error("AxiosRequestConfig URL is empty. This should never happen.");
    }
    if (!config.method || config.method === "") {
        throw new Error("AxiosRequestConfig method is empty. This should never happen.");
    }
};
//# sourceMappingURL=cdpApiClient.js.map