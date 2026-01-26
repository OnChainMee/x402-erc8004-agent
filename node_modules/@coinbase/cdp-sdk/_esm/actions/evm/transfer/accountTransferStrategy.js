import { encodeFunctionData, erc20Abi } from "viem";
import { getErc20Address } from "./utils.js";
import { serializeEIP1559Transaction } from "../../../utils/serializeTransaction.js";
export const accountTransferStrategy = {
    executeTransfer: async ({ apiClient, from, to, value, token, network }) => {
        network = network;
        if (token === "eth") {
            return apiClient.sendEvmTransaction(from.address, {
                transaction: serializeEIP1559Transaction({
                    value,
                    to,
                }),
                network,
            });
        }
        const erc20Address = getErc20Address(token, network);
        return apiClient.sendEvmTransaction(from.address, {
            transaction: serializeEIP1559Transaction({
                to: erc20Address,
                data: encodeFunctionData({
                    abi: erc20Abi,
                    functionName: "transfer",
                    args: [to, value],
                }),
            }),
            network,
        });
    },
};
//# sourceMappingURL=accountTransferStrategy.js.map