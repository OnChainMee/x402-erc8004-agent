import * as AbiError from 'ox/AbiError';
import type * as Address from 'ox/Address';
import * as Errors from 'ox/Errors';
import * as Hex from 'ox/Hex';
import * as TypedData from 'ox/TypedData';
import { type Account as Account_viem, type Authorization as Authorization_viem, BaseError, type Chain, type Client, type Transport } from 'viem';
import { type EncodeExecuteDataParameters } from 'viem/experimental/erc7821';
import type { OneOf } from '../core/internal/types.js';
import type * as Storage from '../core/Storage.js';
import * as Account from './Account.js';
import type { GetAccountParameter } from './internal/utils.js';
import * as Key from './Key.js';
export { abi, code, } from '../core/internal/_generated/contracts/IthacaAccount.js';
/**
 * Executes a set of calls on a delegated account.
 *
 * @example
 * TODO
 *
 * @param client - Client.
 * @param parameters - Execution parameters.
 * @returns Transaction hash.
 */
export declare function execute<const calls extends readonly unknown[], chain extends Chain | undefined, account extends Account.Account | undefined>(client: Client<Transport, chain, account>, parameters: execute.Parameters<calls, account>): Promise<execute.ReturnType>;
export declare namespace execute {
    type Parameters<calls extends readonly unknown[] = readonly unknown[], account extends Account.Account | undefined = Account.Account | undefined> = Pick<EncodeExecuteDataParameters<calls>, 'calls'> & GetAccountParameter<account> & {
        /**
         * Contract address to delegate to.
         */
        delegation?: Address.Address | undefined;
        /**
         * The executor of the execute transaction.
         *
         * - `Account`: execution will be attempted with the specified account.
         * - `undefined`: the transaction will be filled by the JSON-RPC server.
         */
        executor?: Account_viem | undefined;
        /**
         * Storage to use for keytype-specific caching (e.g. WebAuthn user verification).
         */
        storage?: Storage.Storage | undefined;
    } & OneOf<{
        /**
         * EIP-7702 Authorization to use for delegation.
         */
        authorization?: Authorization_viem | undefined;
        /**
         * Nonce to use for execution that will be invalidated by the delegated account.
         */
        nonce: bigint;
        /**
         * Signature for execution. Required if the `executor` is not the EOA.
         */
        signatures: {
            auth?: Hex.Hex | undefined;
            exec: Hex.Hex;
        };
    } | {
        /**
         * Key to use for execution.
         */
        key?: number | Key.Key | undefined;
    } | {}>;
    type ReturnType = Hex.Hex;
}
/**
 * Returns the EIP-712 domain for a delegated account. Used for the execution
 * signing payload.
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns EIP-712 domain.
 */
export declare function getEip712Domain<chain extends Chain | undefined, account extends Account.Account | undefined>(client: Client<Transport, chain, account>, parameters: getEip712Domain.Parameters<account>): Promise<TypedData.Domain>;
export declare namespace getEip712Domain {
    type Parameters<account extends Account.Account | undefined = Account.Account | undefined> = GetAccountParameter<account>;
}
/**
 * Returns the key at the given index.
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns Key.
 */
export declare function keyAt<chain extends Chain | undefined, account extends Account.Account | undefined>(client: Client<Transport, chain, account>, parameters: keyAt.Parameters<account>): Promise<Key.Key>;
export declare namespace keyAt {
    type Parameters<account extends Account.Account | undefined = Account.Account | undefined> = GetAccountParameter<account> & {
        /**
         * Index of the key to extract.
         */
        index: number;
    };
}
/**
 * Prepares the payloads to sign over and fills the request to execute a set of calls.
 *
 * @example
 * TODO
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns Prepared properties.
 */
export declare function prepareExecute<const calls extends readonly unknown[], chain extends Chain | undefined, account extends Account.Account | undefined>(client: Client<Transport, chain, account>, parameters: prepareExecute.Parameters<calls, account>): Promise<prepareExecute.ReturnType<calls>>;
export declare namespace prepareExecute {
    type Parameters<calls extends readonly unknown[] = readonly unknown[], account extends Account.Account | undefined = Account.Account | undefined> = Pick<execute.Parameters<calls, account>, 'calls'> & GetAccountParameter<account> & {
        /**
         * Contract address to delegate to.
         */
        delegation?: Address.Address | undefined;
        /**
         * The executor of the execute transaction.
         *
         * - `Account`: execution will be attempted with the specified account.
         * - `undefined`: the transaction will be filled by the JSON-RPC server.
         */
        executor?: Account_viem | undefined;
    };
    type ReturnType<calls extends readonly unknown[] = readonly unknown[]> = {
        digests: {
            auth?: Hex.Hex | undefined;
            exec: Hex.Hex;
        };
        request: Omit<Parameters<calls>, 'account' | 'delegation'> & {
            account: Account.Account;
            authorization?: Authorization_viem | undefined;
            nonce: bigint;
        };
        typedData: TypedData.Definition;
    };
}
export declare function parseExecutionError<const calls extends readonly unknown[]>(e: unknown, { calls }?: {
    calls?: execute.Parameters<calls>['calls'] | undefined;
}): void;
export declare namespace parseExecutionError {
    type ErrorType = ExecutionError | Errors.GlobalErrorType;
}
/** Thrown when the execution fails. */
export declare class ExecutionError extends Errors.BaseError<BaseError> {
    readonly name = "AccountContract.ExecutionError";
    abiError?: AbiError.AbiError | undefined;
    constructor(cause: BaseError & {
        abiError?: AbiError.AbiError | undefined;
    });
}
export type Decorator<account extends Account.Account | undefined = Account.Account | undefined> = {
    /**
     * Executes a set of calls on a delegated account.
     *
     * @example
     * TODO
     *
     * @param client - Client.
     * @param parameters - Execution parameters.
     * @returns Transaction hash.
     */
    execute: <const calls extends readonly unknown[]>(parameters: execute.Parameters<calls, account>) => Promise<execute.ReturnType>;
    /**
     * Returns the EIP-712 domain for a delegated account. Used for the execution
     * signing payload.
     *
     * @param client - Client.
     * @param parameters - Parameters.
     * @returns EIP-712 domain.
     */
    getEip712Domain: (parameters: getEip712Domain.Parameters<account>) => Promise<TypedData.Domain>;
    /**
     * Returns the key at the given index.
     *
     * @param client - Client.
     * @param parameters - Parameters.
     * @returns Key.
     */
    keyAt: (parameters: keyAt.Parameters<account>) => Promise<Key.Key>;
    /**
     * Prepares the payloads to sign over and fills the request to execute a set of calls.
     *
     * @param client - Client.
     * @param parameters - Parameters.
     * @returns Prepared properties.
     */
    prepareExecute: <calls extends readonly unknown[] = readonly unknown[]>(parameters: prepareExecute.Parameters<calls, account>) => Promise<prepareExecute.ReturnType<calls>>;
};
export declare function decorator<transport extends Transport, chain extends Chain | undefined, account extends Account.Account | undefined>(client: Client<transport, chain, account>): Decorator<account>;
export declare namespace getExecuteDigest {
    type Parameters<calls extends readonly unknown[] = readonly unknown[]> = {
        /**
         * The delegated account to execute the calls on.
         */
        account: Account.Account;
        /**
         * Contract address to delegate to.
         */
        delegation?: Address.Address | undefined;
        /**
         * Calls to execute.
         */
        calls: calls;
        /**
         * Nonce to use for execution that will be invalidated by the delegated account.
         */
        nonce: bigint;
        /**
         * Nonce salt.
         */
        nonceSalt?: bigint | undefined;
    };
}
//# sourceMappingURL=ContractActions.d.ts.map