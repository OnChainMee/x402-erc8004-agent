import { EvmUserOperationNetwork } from "../../../openapi-client/index.js";
/**
 * Validates that the network is supported for the given account type.
 *
 * @param network - The network to validate
 * @param account - The account to check network support for
 * @returns true if the network is valid for the account type
 */
export function isValidNetworkForAccount(network, account) {
    if (isSmartAccount(account)) {
        return Object.values(EvmUserOperationNetwork).includes(network);
    }
    return true;
}
/**
 * Type guard to check if an account is a smart account.
 *
 * @param account - The account to check.
 * @returns true if the account is a smart account, false otherwise.
 */
export function isSmartAccount(account) {
    return "type" in account && account.type === "evm-smart";
}
//# sourceMappingURL=types.js.map