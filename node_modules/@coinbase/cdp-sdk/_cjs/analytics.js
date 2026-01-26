"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsDeprecated = exports.Analytics = void 0;
const md5_1 = __importDefault(require("md5"));
const errors_js_1 = require("./errors.js");
const errors_js_2 = require("./openapi-client/errors.js");
const version_js_1 = require("./version.js");
// Symbol to store the original method on wrapped functions
const ORIGINAL_METHOD = Symbol("originalMethod");
// This is a public client id for the analytics service
const publicClientId = "54f2ee2fb3d2b901a829940d70fbfc13";
exports.Analytics = {
    identifier: "", // set in cdp.ts
    wrapClassWithErrorTracking,
    wrapObjectMethodsWithErrorTracking,
    sendEvent,
    trackAction,
};
/*
 * Deprecated implementation - kept for test compatibility
 * Shares the same identifier reference as Analytics
 */
exports.AnalyticsDeprecated = {
    get identifier() {
        return exports.Analytics.identifier;
    },
    set identifier(value) {
        exports.Analytics.identifier = value;
    },
    wrapClassWithErrorTracking: wrapClassWithErrorTrackingDeprecated,
    wrapObjectMethodsWithErrorTracking: wrapObjectMethodsWithErrorTrackingDeprecated,
    sendEvent,
    trackAction,
};
/**
 * Sends an analytics event to the default endpoint
 *
 * @param event - The event data containing event-specific fields
 * @returns Promise that resolves when the event is sent
 */
async function sendEvent(event) {
    if (event.name === "error" && process.env.DISABLE_CDP_ERROR_REPORTING === "true") {
        return;
    }
    if (event.name !== "error" && process.env.DISABLE_CDP_USAGE_TRACKING === "true") {
        return;
    }
    const timestamp = Date.now();
    const enhancedEvent = {
        user_id: exports.Analytics.identifier,
        event_type: event.name,
        platform: "server",
        timestamp,
        event_properties: {
            project_name: "cdp-sdk",
            cdp_sdk_language: "typescript",
            version: version_js_1.version,
            ...event,
        },
    };
    const events = [enhancedEvent];
    const stringifiedEventData = JSON.stringify(events);
    const uploadTime = timestamp.toString();
    const checksum = (0, md5_1.default)(stringifiedEventData + uploadTime);
    const analyticsServiceData = {
        client: publicClientId,
        e: stringifiedEventData,
        checksum,
    };
    const apiEndpoint = "https://cca-lite.coinbase.com";
    const eventPath = "/amp";
    const eventEndPoint = `${apiEndpoint}${eventPath}`;
    await fetch(eventEndPoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(analyticsServiceData),
    });
}
/**
 * Track an action being performed
 *
 * @param params - The parameters for tracking an action
 * @param params.action - The action being performed
 * @param params.accountType - The type of account
 * @param params.properties - Additional properties
 */
function trackAction(params) {
    if (params.properties?.network &&
        typeof params.properties.network === "string" &&
        params.properties.network.startsWith("http")) {
        const url = new URL(params.properties.network);
        params.properties.customRpcHost = url.hostname;
        params.properties.network = "custom";
    }
    sendEvent({
        action: params.action,
        accountType: params.accountType,
        properties: params.properties,
        name: "action",
    }).catch(() => {
        // ignore error
    });
}
/**
 * Gets the original method from a wrapped method, or returns the method itself if it's not wrapped.
 *
 * @param method - The method to get the original version of.
 * @returns The original unwrapped method, or the method itself if it's not wrapped.
 */
function getOriginalMethod(method) {
    return (method[ORIGINAL_METHOD] || method);
}
/**
 * Creates an interceptor function that prevents recursive calls by checking if the instance is already executing.
 *
 * @param executingInstances - A WeakSet tracking instances that are currently executing.
 * @param fallbackMethod - The method to call if recursion is not detected.
 * @returns A function that intercepts calls and prevents recursion.
 */
function createRecursiveInterceptor(executingInstances, fallbackMethod) {
    return function (...callArgs) {
        if (executingInstances.has(this)) {
            return Promise.resolve(callArgs[0]);
        }
        return fallbackMethod.apply(this, callArgs);
    };
}
/**
 * Executes a method with recursion protection by tracking executing instances.
 *
 * @param executingInstances - A WeakSet tracking instances that are currently executing.
 * @param originalMethod - The original method to execute.
 * @param context - The context (this) to bind the method to.
 * @param args - The arguments to pass to the method.
 * @returns The result of executing the original method.
 */
async function executeWithRecursionProtection(executingInstances, originalMethod, context, args) {
    if (executingInstances.has(context)) {
        return args[0];
    }
    executingInstances.add(context);
    try {
        return await originalMethod.apply(context, args);
    }
    finally {
        executingInstances.delete(context);
    }
}
/**
 * Handles an error that occurred in a method by sending an analytics event and rethrowing the error.
 *
 * @param error - The error that occurred.
 * @param methodName - The name of the method where the error occurred.
 */
async function handleMethodError(error, methodName) {
    if (!shouldTrackError(error)) {
        throw error;
    }
    const { message, stack } = error;
    sendEvent({
        method: methodName,
        message,
        stack,
        name: "error",
    }).catch(() => {
        // ignore error
    });
    throw error;
}
/**
 * Creates a wrapper function that adds error tracking and recursion protection to a method.
 *
 * @param originalMethod - The original method to wrap.
 * @param methodName - The name of the method being wrapped.
 * @param executingInstances - A WeakSet tracking instances that are currently executing.
 * @param setMethod - A function to set the method implementation.
 * @param getMethod - A function to get the current method implementation.
 * @returns A wrapped version of the method with error tracking and recursion protection.
 */
function createErrorTrackingWrapper(originalMethod, methodName, executingInstances, setMethod, getMethod) {
    return async function (...args) {
        const previousMethod = getMethod();
        const recursiveInterceptor = createRecursiveInterceptor(executingInstances, previousMethod);
        setMethod(recursiveInterceptor);
        try {
            const result = await executeWithRecursionProtection(executingInstances, originalMethod, this, args);
            setMethod(previousMethod);
            return result;
        }
        catch (error) {
            setMethod(previousMethod);
            return handleMethodError(error, methodName);
        }
    };
}
/**
 * Wraps all methods of a class with error tracking.
 *
 * @param ClassToWrap - The class whose prototype methods should be wrapped.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function wrapClassWithErrorTracking(ClassToWrap) {
    if (process.env.DISABLE_CDP_ERROR_REPORTING === "true") {
        return;
    }
    const methods = Object.getOwnPropertyNames(ClassToWrap.prototype).filter(name => name !== "constructor" && typeof ClassToWrap.prototype[name] === "function");
    for (const method of methods) {
        const currentMethod = ClassToWrap.prototype[method];
        const originalMethod = getOriginalMethod(currentMethod);
        const executingInstances = new WeakSet();
        const wrappedMethod = createErrorTrackingWrapper(originalMethod, method, executingInstances, newMethod => {
            ClassToWrap.prototype[method] = newMethod;
        }, () => ClassToWrap.prototype[method]);
        wrappedMethod[ORIGINAL_METHOD] = originalMethod;
        ClassToWrap.prototype[method] = wrappedMethod;
    }
}
/**
 * Wraps all methods of an object with error tracking.
 *
 * @param object - The object whose methods should be wrapped.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function wrapObjectMethodsWithErrorTracking(object) {
    if (process.env.DISABLE_CDP_ERROR_REPORTING === "true") {
        return;
    }
    const methods = Object.getOwnPropertyNames(object).filter(name => name !== "constructor" && typeof object[name] === "function");
    for (const method of methods) {
        const currentMethod = object[method];
        const originalMethod = getOriginalMethod(currentMethod);
        const executingInstances = new WeakSet();
        const wrappedMethod = createErrorTrackingWrapper(originalMethod, method, executingInstances, newMethod => {
            object[method] = newMethod;
        }, () => object[method]);
        wrappedMethod[ORIGINAL_METHOD] = originalMethod;
        object[method] = wrappedMethod;
    }
}
/**
 * Wraps all methods of a class with error tracking.
 *
 * @deprecated This is the old implementation that has a bug with methods calling themselves via prototype.
 * Use Analytics.wrapClassWithErrorTracking instead.
 * Kept for test compatibility.
 *
 * @param ClassToWrap - The class whose prototype methods should be wrapped.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function wrapClassWithErrorTrackingDeprecated(ClassToWrap) {
    if (process.env.DISABLE_CDP_ERROR_REPORTING === "true") {
        return;
    }
    const methods = Object.getOwnPropertyNames(ClassToWrap.prototype).filter(name => name !== "constructor" && typeof ClassToWrap.prototype[name] === "function");
    for (const method of methods) {
        const originalMethod = ClassToWrap.prototype[method];
        ClassToWrap.prototype[method] = async function (...args) {
            try {
                return await originalMethod.apply(this, args);
            }
            catch (error) {
                if (!shouldTrackError(error)) {
                    throw error;
                }
                const { message, stack } = error;
                sendEvent({
                    method,
                    message,
                    stack,
                    name: "error",
                }).catch(() => {
                    // ignore error
                });
                throw error;
            }
        };
    }
}
/**
 * Wraps all methods of an object with error tracking.
 *
 * @deprecated This is the old implementation that has a bug with methods calling themselves via object property.
 * Use Analytics.wrapObjectMethodsWithErrorTracking instead.
 * Kept for test compatibility.
 *
 * @param object - The object whose methods should be wrapped.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function wrapObjectMethodsWithErrorTrackingDeprecated(object) {
    if (process.env.DISABLE_CDP_ERROR_REPORTING === "true") {
        return;
    }
    const methods = Object.getOwnPropertyNames(object).filter(name => name !== "constructor" && typeof object[name] === "function");
    for (const method of methods) {
        const originalMethod = object[method];
        object[method] = async function (...args) {
            try {
                return await originalMethod.apply(this, args);
            }
            catch (error) {
                if (!shouldTrackError(error)) {
                    throw error;
                }
                const { message, stack } = error;
                sendEvent({
                    method,
                    message,
                    stack,
                    name: "error",
                }).catch(() => {
                    // ignore error
                });
                throw error;
            }
        };
    }
}
/**
 * Filters out non-errors and API errors
 *
 * @param error - The error to check.
 * @returns True if the error should be tracked, false otherwise.
 */
function shouldTrackError(error) {
    if (!(error instanceof Error)) {
        return false;
    }
    if (error instanceof errors_js_1.UserInputValidationError) {
        return false;
    }
    if (error instanceof errors_js_2.NetworkError) {
        return true;
    }
    if (error instanceof errors_js_2.APIError && error.errorType !== "unexpected_error") {
        return false;
    }
    return true;
}
//# sourceMappingURL=analytics.js.map