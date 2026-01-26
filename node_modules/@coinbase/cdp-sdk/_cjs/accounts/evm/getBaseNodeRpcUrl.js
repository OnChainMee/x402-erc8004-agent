"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseNodeRpcUrl = getBaseNodeRpcUrl;
const jwt_js_1 = require("../../auth/utils/jwt.js");
const cdpApiClient_js_1 = require("../../openapi-client/cdpApiClient.js");
/**
 * Get the base node RPC URL for a given network. Can also be used as a Paymaster URL
 *
 * @param network - The network identifier
 * @returns The base node RPC URL or undefined if the network is not supported
 */
async function getBaseNodeRpcUrl(network) {
    if (!cdpApiClient_js_1.config) {
        return;
    }
    try {
        const basePath = cdpApiClient_js_1.config.basePath?.replace("/platform", "");
        const jwt = await (0, jwt_js_1.generateJwt)({
            apiKeyId: cdpApiClient_js_1.config.apiKeyId,
            apiKeySecret: cdpApiClient_js_1.config.apiKeySecret,
            requestMethod: "GET",
            requestHost: basePath.replace("https://", ""),
            requestPath: "/apikeys/v1/tokens/active",
        });
        const response = await fetch(`${basePath}/apikeys/v1/tokens/active`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        return `${basePath}/rpc/v1/${network}/${json.id}`;
    }
    catch {
        return;
    }
}
//# sourceMappingURL=getBaseNodeRpcUrl.js.map