"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transfer = transfer;
exports.getNativeTransferBase64Transaction = getNativeTransferBase64Transaction;
exports.getSplTransferBase64Transaction = getSplTransferBase64Transaction;
const kit_1 = require("@solana/kit");
const system_1 = require("@solana-program/system");
const token_1 = require("@solana-program/token");
const rpc_js_1 = require("./rpc.js");
const sendTransaction_js_1 = require("./sendTransaction.js");
const utils_js_1 = require("./utils.js");
/**
 * Transfers SOL or SPL tokens between accounts
 *
 * @param apiClient - The API client to use
 * @param options - The transfer options
 *
 * @returns The transfer result
 */
async function transfer(apiClient, options) {
    const connection = (0, utils_js_1.getOrCreateConnection)({ networkOrConnection: options.network });
    const connectedNetwork = await (0, utils_js_1.getConnectedNetwork)(connection);
    const rpc = (0, rpc_js_1.createRpcClient)(connectedNetwork);
    const base64Transaction = options.token === "sol"
        ? await getNativeTransferBase64Transaction({
            rpc,
            from: options.from,
            to: options.to,
            amount: options.amount,
        })
        : await getSplTransferBase64Transaction({
            rpc,
            from: options.from,
            to: options.to,
            mintAddress: options.token === "usdc" ? (0, utils_js_1.getUsdcMintAddress)(connectedNetwork) : options.token,
            amount: options.amount,
        });
    const signature = await (0, sendTransaction_js_1.sendTransaction)(apiClient, {
        network: connectedNetwork === "mainnet" ? "solana" : "solana-devnet",
        transaction: base64Transaction,
    });
    return signature;
}
/**
 * Gets the transaction for a SOL transfer
 *
 * @param options - The options for the SOL transfer
 *
 * @param options.rpc - The Solana RPC client
 * @param options.from - The source address
 * @param options.to - The destination address
 * @param options.amount - The amount in lamports to transfer
 *
 * @returns The SOL transfer transaction
 */
async function getNativeTransferBase64Transaction({ rpc, from, to, amount, }) {
    const fromAddr = (0, kit_1.address)(from);
    const toAddr = (0, kit_1.address)(to);
    const instructions = [
        (0, system_1.getTransferSolInstruction)({
            source: (0, kit_1.createNoopSigner)(fromAddr),
            destination: toAddr,
            amount,
        }),
    ];
    const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();
    const txMsg = (0, kit_1.pipe)((0, kit_1.createTransactionMessage)({ version: 0 }), tx => (0, kit_1.setTransactionMessageFeePayer)(fromAddr, tx), tx => (0, kit_1.setTransactionMessageLifetimeUsingBlockhash)(latestBlockhash, tx), tx => (0, kit_1.appendTransactionMessageInstructions)(instructions, tx));
    const compiledTransaction = (0, kit_1.compileTransaction)(txMsg);
    return (0, kit_1.getBase64EncodedWireTransaction)(compiledTransaction);
}
/**
 * Gets the transaction for a SPL token transfer
 *
 * @param options - The options for the SPL token transfer
 *
 * @param options.rpc - The Solana RPC client
 * @param options.from - The source address
 * @param options.to - The destination address
 * @param options.mintAddress - The mint address of the token
 * @param options.amount - The amount in units of the token to transfer
 *
 * @returns The SPL token transfer transaction
 */
async function getSplTransferBase64Transaction({ rpc, from, to, mintAddress, amount, }) {
    const fromAddr = (0, kit_1.address)(from);
    const toAddr = (0, kit_1.address)(to);
    const mintAddr = (0, kit_1.address)(mintAddress);
    const mintInfo = await (0, token_1.fetchMint)(rpc, mintAddr);
    const [sourceAta] = await (0, token_1.findAssociatedTokenPda)({
        mint: mintAddr,
        owner: fromAddr,
        tokenProgram: token_1.TOKEN_PROGRAM_ADDRESS,
    });
    const [destAta] = await (0, token_1.findAssociatedTokenPda)({
        mint: mintAddr,
        owner: toAddr,
        tokenProgram: token_1.TOKEN_PROGRAM_ADDRESS,
    });
    const sourceAcct = await (0, token_1.fetchToken)(rpc, sourceAta);
    if (sourceAcct.data.amount < amount) {
        throw new Error(`Insufficient token balance: have ${sourceAcct.data.amount}, need ${amount}`);
    }
    const instructions = [];
    // If destination ATA does not exist, add create instruction
    try {
        await (0, token_1.fetchToken)(rpc, destAta);
    }
    catch {
        const createDestIx = await (0, token_1.getCreateAssociatedTokenInstructionAsync)({
            payer: (0, kit_1.createNoopSigner)(fromAddr),
            owner: toAddr,
            ata: destAta,
            mint: mintAddr,
        });
        instructions.push(createDestIx);
    }
    instructions.push((0, token_1.getTransferCheckedInstruction)({
        source: sourceAta,
        mint: mintAddr,
        destination: destAta,
        authority: fromAddr,
        amount,
        decimals: mintInfo.data.decimals,
    }));
    const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();
    const txMsg = (0, kit_1.pipe)((0, kit_1.createTransactionMessage)({ version: 0 }), tx => (0, kit_1.setTransactionMessageFeePayer)(fromAddr, tx), tx => (0, kit_1.setTransactionMessageLifetimeUsingBlockhash)(latestBlockhash, tx), tx => (0, kit_1.appendTransactionMessageInstructions)(instructions, tx));
    const compiledTransaction = (0, kit_1.compileTransaction)(txMsg);
    return (0, kit_1.getBase64EncodedWireTransaction)(compiledTransaction);
}
//# sourceMappingURL=transfer.js.map