import { encodeFunctionData, erc20Abi } from "viem";
import { getErc20Address } from "./utils.js";
import { mapChainToNetwork } from "../../../accounts/evm/chainToNetworkMapper.js";
/**
 * Transfer an amount of a token from a network-scoped account to another account.
 * This function is used for accounts that are scoped to a specific network and use
 * a wallet client for transaction execution instead of the API client.
 *
 * @param walletClient - The wallet client to use for transaction execution.
 * @param from - The account to send the transaction from.
 * @param transferArgs - The transfer options.
 * @returns The result of the transfer.
 */
export async function transferWithViem(walletClient, from, transferArgs) {
    const token = transferArgs.token;
    const to = typeof transferArgs.to === "string" ? transferArgs.to : transferArgs.to.address;
    const value = transferArgs.amount;
    if (token === "eth") {
        const hash = await walletClient.sendTransaction({
            account: from.address,
            to,
            value,
        });
        return { transactionHash: hash };
    }
    const network = mapChainToNetwork(walletClient.chain);
    const erc20Address = getErc20Address(token, network);
    // First approve the transfer
    await walletClient.sendTransaction({
        account: from.address,
        to: erc20Address,
        data: encodeFunctionData({
            abi: erc20Abi,
            functionName: "approve",
            args: [to, value],
        }),
    });
    // Then execute the transfer
    const hash = await walletClient.sendTransaction({
        account: from.address,
        to: erc20Address,
        data: encodeFunctionData({
            abi: erc20Abi,
            functionName: "transfer",
            args: [to, value],
        }),
    });
    return { transactionHash: hash };
}
//# sourceMappingURL=transferWithViem.js.map