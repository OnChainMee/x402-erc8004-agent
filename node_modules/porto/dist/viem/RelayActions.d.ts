import type * as Address from 'ox/Address';
import type * as Errors from 'ox/Errors';
import type * as Hex from 'ox/Hex';
import { type Calls, type Client, type Narrow, type Transport } from 'viem';
import type { Chain } from '../core/Chains.js';
import type * as Capabilities from '../core/internal/relay/schema/capabilities.js';
import type * as Quotes from '../core/internal/relay/schema/quotes.js';
import type { OneOf, PartialBy, RequiredBy } from '../core/internal/types.js';
import type { relay } from '../core/Mode.js';
import * as Account from './Account.js';
import * as RelayActions from './internal/relayActions.js';
import type { GetAccountParameter, GetChainParameter } from './internal/utils.js';
import * as Key from './Key.js';
export { addFaucetFunds, getAssets, getAuthorization, getCallsStatus, getCapabilities, health, verifySignature, } from './internal/relayActions.js';
/**
 * Creates a new Porto Account using an ephemeral EOA.
 *
 * @example
 * TODO
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns Result.
 */
export declare function createAccount<chain extends Chain | undefined>(client: Client<Transport, chain>, parameters: createAccount.Parameters<chain>): Promise<createAccount.ReturnType>;
export declare namespace createAccount {
    type Parameters<chain extends Chain | undefined = Chain | undefined> = Omit<upgradeAccount.UnpreparedParameters<chain>, 'account'>;
    type ReturnType = RequiredBy<Account.Account, 'keys'>;
}
/**
 * Gets the keys for an account.
 *
 * @example
 * TODO
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns Account keys.
 */
export declare function getKeys<chain extends Chain | undefined, account extends Account.Account | undefined>(client: Client<Transport, chain, account>, parameters: getKeys.Parameters<account>): Promise<getKeys.ReturnType>;
export declare namespace getKeys {
    type Parameters<account extends Account.Account | undefined = Account.Account | undefined> = GetAccountParameter<account> & Pick<RelayActions.getKeys.Parameters, 'chainIds'>;
    type ReturnType = readonly Key.Key[];
    type ErrorType = RelayActions.getKeys.ErrorType;
}
/**
 * Gets onramp contact info for address.
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export declare function getOnrampContactInfo<chain extends Chain | undefined>(client: Client<Transport, chain>, parameters: getOnrampContactInfo.Parameters): Promise<getOnrampContactInfo.ReturnType>;
export declare namespace getOnrampContactInfo {
    type Parameters = RelayActions.getOnrampContactInfo.Parameters;
    type ReturnType = RelayActions.getOnrampContactInfo.ReturnType;
    type ErrorType = RelayActions.getOnrampContactInfo.ErrorType | Errors.GlobalErrorType;
}
/**
 * Gets onramp status for address.
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export declare function onrampStatus<chain extends Chain | undefined>(client: Client<Transport, chain>, parameters: onrampStatus.Parameters): Promise<onrampStatus.ReturnType>;
export declare namespace onrampStatus {
    type Parameters = RelayActions.onrampStatus.Parameters;
    type ReturnType = RelayActions.onrampStatus.ReturnType;
    type ErrorType = RelayActions.onrampStatus.ErrorType | Errors.GlobalErrorType;
}
/**
 * Prepares the digest to sign over and fills the request to send a call bundle.
 *
 * @example
 * TODO
 *
 * @param client - Client.
 * @param parameters - Prepare call bundle parameters.
 * @returns Prepared properties.
 */
export declare function prepareCalls<const calls extends readonly unknown[], chain extends Chain | undefined, account extends Account.Account | undefined>(client: Client<Transport, chain, account>, parameters: prepareCalls.Parameters<calls, chain, account>): Promise<prepareCalls.ReturnType>;
export declare namespace prepareCalls {
    type Parameters<calls extends readonly unknown[] = readonly unknown[], chain extends Chain | undefined = Chain | undefined, account extends Account.Account | undefined = Account.Account | undefined> = GetChainParameter<chain> & GetAccountParameter<account, false> & {
        /** Additional keys to authorize on the account. */
        authorizeKeys?: readonly Key.Key[] | undefined;
        /** Calls to prepare. */
        calls?: Calls<Narrow<calls>> | undefined;
        /** Key that will be used to sign the calls. */
        key?: Pick<Key.Key, 'permissions' | 'publicKey' | 'prehash' | 'type'> | undefined;
        /**
         * Indicates if the bundle is "pre-calls", and should be executed before
         * the main bundle.
         *
         * Accepts:
         * - `true`: Indicates this is pre-calls.
         * - An array: Set of prepared pre-calls.
         */
        preCalls?: true | readonly {
            context: prepareCalls.ReturnType['context'];
            signature: Hex.Hex;
        }[] | undefined;
        /** Required funds to execute the calls. */
        requiredFunds?: Capabilities.requiredFunds.Request | undefined;
        /** Additional keys to revoke from the account. */
        revokeKeys?: readonly Key.Key[] | undefined;
        /** Merchant RPC URL. */
        merchantUrl?: string | undefined;
    } & Omit<Capabilities.meta.Request, 'keyHash'>;
    type ReturnType = {
        capabilities: RelayActions.prepareCalls.ReturnType['capabilities'] & {
            quote: Quotes.Signed;
        };
        context: RelayActions.prepareCalls.ReturnType['context'];
        digest: RelayActions.prepareCalls.ReturnType['digest'];
        key: Parameters['key'];
        typedData: RelayActions.prepareCalls.ReturnType['typedData'];
    };
    type ErrorType = RelayActions.prepareCalls.ErrorType | Errors.GlobalErrorType;
}
/**
 * Prepares an account upgrade.
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export declare function prepareUpgradeAccount<chain extends Chain | undefined>(client: Client<Transport, chain>, parameters: prepareUpgradeAccount.Parameters<chain>): Promise<prepareUpgradeAccount.ReturnType>;
export declare namespace prepareUpgradeAccount {
    type Parameters<chain extends Chain | undefined = Chain | undefined> = GetChainParameter<chain> & {
        /** Address of the account to upgrade. */
        address: Address.Address;
        /** Keys to authorize. */
        authorizeKeys: readonly Key.Key[];
        /** Contract address to delegate to. */
        delegation?: Address.Address | undefined;
        /** Fee token. */
        feeToken?: Address.Address | undefined;
    };
    type ReturnType = Omit<RelayActions.prepareUpgradeAccount.ReturnType, 'context'> & {
        context: RelayActions.prepareUpgradeAccount.ReturnType['context'] & {
            account: Account.Account;
        };
    };
    type ErrorType = RelayActions.prepareUpgradeAccount.ErrorType | Errors.GlobalErrorType;
}
/**
 * Resends phone verification code for address
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export declare function resendVerifyPhone<chain extends Chain | undefined>(client: Client<Transport, chain>, parameters: resendVerifyPhone.Parameters): Promise<resendVerifyPhone.ReturnType>;
export declare namespace resendVerifyPhone {
    type Parameters = RelayActions.resendVerifyPhone.Parameters;
    type ReturnType = RelayActions.resendVerifyPhone.ReturnType;
    type ErrorType = RelayActions.resendVerifyPhone.ErrorType | Errors.GlobalErrorType;
}
/**
 * Broadcasts a call bundle to the Relay.
 *
 * @example
 * TODO
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns Bundle identifier.
 */
export declare function sendCalls<const calls extends readonly unknown[], chain extends Chain | undefined, account extends Account.Account | undefined>(client: Client<Transport, chain, account>, parameters: sendCalls.Parameters<calls, chain, account>): Promise<sendCalls.ReturnType>;
export declare namespace sendCalls {
    type Parameters<calls extends readonly unknown[] = readonly unknown[], chain extends Chain | undefined = Chain | undefined, account extends Account.Account | undefined = Account.Account | undefined> = Omit<prepareCalls.Parameters, 'account' | 'calls' | 'chain' | 'key' | 'preCalls'> & GetAccountParameter<account> & GetChainParameter<chain> & {
        /** Calls to execute. */
        calls?: Calls<Narrow<calls>> | undefined;
        /** Key to sign the bundle with. */
        key?: Key.Key | undefined;
        /** Calls to execute before the main bundle. */
        preCalls?: readonly OneOf<{
            context: prepareCalls.ReturnType['context'];
            signature: Hex.Hex;
        } | (Pick<prepareCalls.Parameters<calls>, 'authorizeKeys' | 'calls' | 'revokeKeys'> & {
            key: Key.Key;
        })>[] | undefined;
        /** Merchant RPC URL. */
        merchantUrl?: string | undefined;
        webAuthn?: relay.Parameters['webAuthn'];
    };
    type ReturnType = RelayActions.sendPreparedCalls.ReturnType;
    type ErrorType = RelayActions.sendPreparedCalls.ErrorType | Errors.GlobalErrorType;
}
export declare function signCalls(request: prepareCalls.ReturnType, options: signCalls.Options): Promise<`0x${string}`>;
export declare namespace signCalls {
    type Options = OneOf<{
        account: Account.Account;
    } | {
        key: Key.Key;
    }>;
}
export declare function sendPreparedCalls(client: Client, parameters: sendPreparedCalls.Parameters): Promise<sendPreparedCalls.ReturnType>;
export declare namespace sendPreparedCalls {
    type Parameters = {
        /** Capabilities. */
        capabilities?: RelayActions.sendPreparedCalls.Parameters['capabilities'] | undefined;
        /** Context. */
        context: prepareCalls.ReturnType['context'];
        /** Key. */
        key?: Pick<Key.Key, 'publicKey' | 'prehash' | 'type'> | undefined;
        /** Signature. */
        signature: Hex.Hex;
    };
    type ReturnType = RelayActions.sendPreparedCalls.ReturnType;
    type ErrorType = RelayActions.sendPreparedCalls.ErrorType;
}
/**
 * Sets email for address
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export declare function setEmail<chain extends Chain | undefined>(client: Client<Transport, chain>, parameters: setEmail.Parameters): Promise<setEmail.ReturnType>;
export declare namespace setEmail {
    type Parameters = RelayActions.setEmail.Parameters;
    type ReturnType = RelayActions.setEmail.ReturnType;
    type ErrorType = RelayActions.setEmail.ErrorType | Errors.GlobalErrorType;
}
/**
 * Sets phone for address
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export declare function setPhone<chain extends Chain | undefined>(client: Client<Transport, chain>, parameters: setPhone.Parameters): Promise<setPhone.ReturnType>;
export declare namespace setPhone {
    type Parameters = RelayActions.setPhone.Parameters;
    type ReturnType = RelayActions.setPhone.ReturnType;
    type ErrorType = RelayActions.setPhone.ErrorType | Errors.GlobalErrorType;
}
/**
 * Broadcasts an account upgrade.
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export declare function upgradeAccount<chain extends Chain | undefined>(client: Client<Transport, chain>, parameters: upgradeAccount.Parameters<chain>): Promise<upgradeAccount.ReturnType>;
export declare namespace upgradeAccount {
    type Parameters<chain extends Chain | undefined = Chain | undefined> = OneOf<PreparedParameters | UnpreparedParameters<chain>>;
    type PreparedParameters = {
        context: prepareUpgradeAccount.ReturnType['context'];
        signatures: RelayActions.upgradeAccount.Parameters['signatures'];
    };
    type UnpreparedParameters<chain extends Chain | undefined = Chain | undefined> = PartialBy<Omit<prepareUpgradeAccount.Parameters<chain>, 'address'>, 'authorizeKeys'> & {
        account: Account.Account<'privateKey'>;
    };
    type ReturnType = RequiredBy<Account.Account, 'keys'>;
    type ErrorType = RelayActions.upgradeAccount.ErrorType | Errors.GlobalErrorType;
}
/**
 * Verifies email for address
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export declare function verifyEmail<chain extends Chain | undefined>(client: Client<Transport, chain>, parameters: verifyEmail.Parameters): Promise<verifyEmail.ReturnType>;
export declare namespace verifyEmail {
    type Parameters = RelayActions.verifyEmail.Parameters;
    type ReturnType = RelayActions.verifyEmail.ReturnType;
    type ErrorType = RelayActions.verifyEmail.ErrorType | Errors.GlobalErrorType;
}
/**
 * Verifies phone for address
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export declare function verifyPhone<chain extends Chain | undefined>(client: Client<Transport, chain>, parameters: verifyPhone.Parameters): Promise<verifyPhone.ReturnType>;
export declare namespace verifyPhone {
    type Parameters = RelayActions.verifyPhone.Parameters;
    type ReturnType = RelayActions.verifyPhone.ReturnType;
    type ErrorType = RelayActions.verifyPhone.ErrorType | Errors.GlobalErrorType;
}
export type Decorator<chain extends Chain | undefined = Chain | undefined, account extends Account.Account | undefined = Account.Account | undefined> = {
    /**
     * Creates a new Porto Account using an ephemeral EOA.
     *
     * @example
     * TODO
     *
     * @param client - Client.
     * @param parameters - Parameters.
     * @returns Result.
     */
    createAccount: (parameters: createAccount.Parameters<chain>) => Promise<createAccount.ReturnType>;
    /**
     * Gets the status of a call bundle.
     *
     * @example
     * TODO
     *
     * @param client - The client to use.
     * @param parameters - Parameters.
     * @returns Result.
     */
    getCallsStatus: (parameters: RelayActions.getCallsStatus.Parameters) => Promise<RelayActions.getCallsStatus.ReturnType>;
    /**
     * Gets the capabilities for a given chain ID.
     *
     * @example
     * TODO
     *
     * @param client - The client to use.
     * @param options - Options.
     * @returns Result.
     */
    getCapabilities: <const chainIds extends readonly number[] | undefined = undefined, const raw extends boolean = false>() => Promise<RelayActions.getCapabilities.ReturnType<chainIds, raw>>;
    /**
     * Gets the keys for a given account.
     *
     * @example
     * TODO
     *
     * @param client - The client to use.
     * @param parameters - Parameters.
     * @returns Result.
     */
    getKeys: (parameters: getKeys.Parameters<account>) => Promise<getKeys.ReturnType>;
    /**
     * Gets the health of the RPC.
     *
     * @example
     * TODO
     *
     * @param client - The client to use.
     * @returns Result.
     */
    health: () => Promise<RelayActions.health.ReturnType>;
    /**
     * Prepares a call bundle.
     *
     * @example
     * TODO
     *
     * @param client - The client to use.
     * @param parameters - Parameters.
     * @returns Result.
     */
    prepareCalls: <const calls extends readonly unknown[]>(parameters: prepareCalls.Parameters<calls, chain, account>) => Promise<prepareCalls.ReturnType>;
    /**
     * Prepares an account upgrade.
     *
     * @example
     * TODO
     *
     * @param client - Client to use.
     * @param parameters - Parameters.
     * @returns Result.
     */
    prepareUpgradeAccount: (parameters: prepareUpgradeAccount.Parameters<chain>) => Promise<prepareUpgradeAccount.ReturnType>;
    /**
     * Broadcasts a call bundle.
     *
     * @example
     * TODO
     *
     * @param client - Client to use.
     * @param parameters - Parameters.
     * @returns Result.
     */
    sendCalls: <const calls extends readonly unknown[]>(parameters: sendCalls.Parameters<calls, chain, account>) => Promise<sendCalls.ReturnType>;
    /**
     * Broadcasts a signed call bundle.
     *
     * @example
     * TODO
     *
     * @param client - The client to use.
     * @param parameters - Parameters.
     * @returns Result.
     */
    sendPreparedCalls: (parameters: sendPreparedCalls.Parameters) => Promise<sendPreparedCalls.ReturnType>;
    /**
     * Broadcasts an account upgrade.
     *
     * @example
     * TODO
     *
     * @param client - Client to use.
     * @param parameters - Parameters.
     * @returns Result.
     */
    upgradeAccount: (parameters: upgradeAccount.Parameters<chain>) => Promise<upgradeAccount.ReturnType>;
    /**
     * Verifies a signature.
     *
     * @example
     * TODO
     *
     * @param client - The client to use.
     * @param parameters - Parameters.
     * @returns Result.
     */
    verifySignature: (parameters: RelayActions.verifySignature.Parameters<chain>) => Promise<RelayActions.verifySignature.ReturnType>;
};
export declare function decorator<transport extends Transport, chain extends Chain | undefined, account extends Account.Account | undefined>(client: Client<transport, chain, account>): Decorator<chain, account>;
//# sourceMappingURL=RelayActions.d.ts.map