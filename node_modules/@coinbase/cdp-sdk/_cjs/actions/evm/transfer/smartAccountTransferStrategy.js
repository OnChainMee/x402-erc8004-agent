"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smartAccountTransferStrategy = void 0;
const viem_1 = require("viem");
const utils_js_1 = require("./utils.js");
const sendUserOperation_js_1 = require("../sendUserOperation.js");
exports.smartAccountTransferStrategy = {
    executeTransfer: async ({ apiClient, from, to, value, token, network, paymasterUrl }) => {
        const smartAccountNetwork = network;
        if (token === "eth") {
            const result = await (0, sendUserOperation_js_1.sendUserOperation)(apiClient, {
                smartAccount: from,
                paymasterUrl,
                network: smartAccountNetwork,
                calls: [
                    {
                        to,
                        value,
                        data: "0x",
                    },
                ],
            });
            return result;
        }
        else {
            const erc20Address = (0, utils_js_1.getErc20Address)(token, network);
            const result = await (0, sendUserOperation_js_1.sendUserOperation)(apiClient, {
                smartAccount: from,
                paymasterUrl,
                network: smartAccountNetwork,
                calls: [
                    {
                        to: erc20Address,
                        data: (0, viem_1.encodeFunctionData)({
                            abi: viem_1.erc20Abi,
                            functionName: "transfer",
                            args: [to, value],
                        }),
                    },
                ],
            });
            return result;
        }
    },
};
//# sourceMappingURL=smartAccountTransferStrategy.js.map