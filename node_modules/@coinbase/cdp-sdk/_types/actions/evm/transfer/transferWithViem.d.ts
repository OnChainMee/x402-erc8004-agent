import type { TransferOptions } from "./types.js";
import type { EvmAccount } from "../../../accounts/evm/types.js";
import type { TransactionResult } from "../sendTransaction.js";
import type { Account, Chain, Transport, WalletClient } from "viem";
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
export declare function transferWithViem<T extends EvmAccount>(walletClient: WalletClient<Transport, Chain, Account>, from: T, transferArgs: Omit<TransferOptions, "address" | "network">): Promise<TransactionResult>;
//# sourceMappingURL=transferWithViem.d.ts.map