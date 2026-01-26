import { encodeFunctionData, erc20Abi } from "viem";
import { getErc20Address } from "./utils.js";
import { sendUserOperation } from "../sendUserOperation.js";
export const smartAccountTransferStrategy = {
    executeTransfer: async ({ apiClient, from, to, value, token, network, paymasterUrl }) => {
        const smartAccountNetwork = network;
        if (token === "eth") {
            const result = await sendUserOperation(apiClient, {
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
            const erc20Address = getErc20Address(token, network);
            const result = await sendUserOperation(apiClient, {
                smartAccount: from,
                paymasterUrl,
                network: smartAccountNetwork,
                calls: [
                    {
                        to: erc20Address,
                        data: encodeFunctionData({
                            abi: erc20Abi,
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