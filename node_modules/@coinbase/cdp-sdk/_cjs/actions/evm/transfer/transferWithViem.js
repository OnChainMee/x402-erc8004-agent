"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferWithViem = transferWithViem;
const viem_1 = require("viem");
const utils_js_1 = require("./utils.js");
const chainToNetworkMapper_js_1 = require("../../../accounts/evm/chainToNetworkMapper.js");
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
async function transferWithViem(walletClient, from, transferArgs) {
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
    const network = (0, chainToNetworkMapper_js_1.mapChainToNetwork)(walletClient.chain);
    const erc20Address = (0, utils_js_1.getErc20Address)(token, network);
    // First approve the transfer
    await walletClient.sendTransaction({
        account: from.address,
        to: erc20Address,
        data: (0, viem_1.encodeFunctionData)({
            abi: viem_1.erc20Abi,
            functionName: "approve",
            args: [to, value],
        }),
    });
    // Then execute the transfer
    const hash = await walletClient.sendTransaction({
        account: from.address,
        to: erc20Address,
        data: (0, viem_1.encodeFunctionData)({
            abi: viem_1.erc20Abi,
            functionName: "transfer",
            args: [to, value],
        }),
    });
    return { transactionHash: hash };
}
//# sourceMappingURL=transferWithViem.js.map