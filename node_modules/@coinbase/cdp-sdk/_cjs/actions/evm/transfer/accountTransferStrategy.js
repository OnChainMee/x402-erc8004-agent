"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountTransferStrategy = void 0;
const viem_1 = require("viem");
const utils_js_1 = require("./utils.js");
const serializeTransaction_js_1 = require("../../../utils/serializeTransaction.js");
exports.accountTransferStrategy = {
    executeTransfer: async ({ apiClient, from, to, value, token, network }) => {
        network = network;
        if (token === "eth") {
            return apiClient.sendEvmTransaction(from.address, {
                transaction: (0, serializeTransaction_js_1.serializeEIP1559Transaction)({
                    value,
                    to,
                }),
                network,
            });
        }
        const erc20Address = (0, utils_js_1.getErc20Address)(token, network);
        return apiClient.sendEvmTransaction(from.address, {
            transaction: (0, serializeTransaction_js_1.serializeEIP1559Transaction)({
                to: erc20Address,
                data: (0, viem_1.encodeFunctionData)({
                    abi: viem_1.erc20Abi,
                    functionName: "transfer",
                    args: [to, value],
                }),
            }),
            network,
        });
    },
};
//# sourceMappingURL=accountTransferStrategy.js.map