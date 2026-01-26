"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveTokenAddress = resolveTokenAddress;
const utils_js_1 = require("../actions/evm/transfer/utils.js");
const errors_js_1 = require("../errors.js");
/**
 * Resolve the address of a token for a given network.
 *
 * @param token - The token symbol or contract address.
 * @param network - The network to get the address for.
 *
 * @returns The address of the token.
 */
function resolveTokenAddress(token, network) {
    if (token === "eth") {
        return "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
    }
    if (token === "usdc" && (network === "base" || network === "base-sepolia")) {
        return (0, utils_js_1.getErc20Address)(token, network);
    }
    if (token === "usdc") {
        throw new errors_js_1.UserInputValidationError(`Automatic token address lookup for ${token} is not supported on ${network}. Please provide the token address manually.`);
    }
    return token;
}
//# sourceMappingURL=utils.js.map