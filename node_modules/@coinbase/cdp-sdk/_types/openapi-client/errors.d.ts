import { Error as OpenAPIError, ErrorType as OpenAPIErrorType } from "./generated/coinbaseDeveloperPlatformAPIs.schemas.js";
export type HttpErrorType = "unexpected_error" | "unauthorized" | "not_found" | "bad_gateway" | "service_unavailable" | "unknown" | "network_timeout" | "network_connection_failed" | "network_ip_blocked" | "network_dns_failure";
/**
 * Extended error codes that include both OpenAPI errors and network errors
 */
export type APIErrorType = OpenAPIErrorType | HttpErrorType;
/**
 * Extended API error that encompasses both OpenAPI errors and other API-related errors
 */
export declare class APIError extends Error {
    statusCode: number;
    errorType: APIErrorType;
    errorMessage: string;
    correlationId?: string;
    errorLink?: string;
    /**
     * Constructor for the APIError class
     *
     * @param statusCode - The HTTP status code
     * @param errorType - The type of error
     * @param errorMessage - The error message
     * @param correlationId - The correlation ID
     * @param errorLink - URL to documentation about this error
     * @param cause - The cause of the error
     */
    constructor(statusCode: number, errorType: APIErrorType, errorMessage: string, correlationId?: string, errorLink?: string, cause?: Error | unknown);
    /**
     * Convert the error to a JSON object, excluding undefined properties
     *
     * @returns The error as a JSON object
     */
    toJSON(): {
        errorLink?: string | undefined;
        correlationId?: string | undefined;
        name: string;
        statusCode: number;
        errorType: APIErrorType;
        errorMessage: string;
    };
}
/**
 * Error thrown when an Axios request is made but no response is received
 */
export declare class UnknownApiError extends APIError {
    /**
     * Constructor for the UnknownApiError class
     *
     * @param errorType - The type of error
     * @param errorMessage - The error message
     * @param cause - The cause of the error
     */
    constructor(errorType: APIErrorType, errorMessage: string, cause?: Error);
}
/**
 * Error thrown when an error is not known
 */
export declare class UnknownError extends Error {
    /**
     * Constructor for the UnknownError class
     *
     * @param message - The error message
     * @param cause - The cause of the error
     */
    constructor(message: string, cause?: Error);
}
/**
 * Error thrown when a network-level failure occurs before reaching the CDP service
 * This includes gateway errors, IP blocklist rejections, DNS failures, etc.
 */
export declare class NetworkError extends APIError {
    networkDetails?: {
        code?: string;
        message?: string;
        retryable?: boolean;
    };
    /**
     * Constructor for the NetworkError class
     *
     * @param errorType - The type of network error
     * @param errorMessage - The error message
     * @param networkDetails - Additional network error details
     * @param networkDetails.code - The error code
     * @param networkDetails.message - The error message
     * @param networkDetails.retryable - Whether the error is retryable
     * @param cause - The cause of the error
     */
    constructor(errorType: HttpErrorType, errorMessage: string, networkDetails?: {
        code?: string;
        message?: string;
        retryable?: boolean;
    }, cause?: Error | unknown);
    /**
     * Convert the error to a JSON object, including network details
     *
     * @returns The error as a JSON object
     */
    toJSON(): {
        networkDetails?: {
            code?: string;
            message?: string;
            retryable?: boolean;
        } | undefined;
        errorLink?: string | undefined;
        correlationId?: string | undefined;
        name: string;
        statusCode: number;
        errorType: APIErrorType;
        errorMessage: string;
    };
}
/**
 * Type guard to check if an object is an OpenAPIError
 *
 * @param obj - The object to check
 * @returns True if the object is an OpenAPIError
 */
export declare function isOpenAPIError(obj: unknown): obj is OpenAPIError;
//# sourceMappingURL=errors.d.ts.map