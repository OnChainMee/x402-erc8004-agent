import * as Address from 'ox/Address';
import * as Secp256k1 from 'ox/Secp256k1';
import * as Signature from 'ox/Signature';
import * as TypedData from 'ox/TypedData';
import { hashMessage, hashTypedData, } from 'viem';
import { toAccount } from 'viem/accounts';
import * as Key from './Key.js';
/**
 * Instantiates a delegated account.
 *
 * @param account - Account to instantiate.
 * @returns An instantiated delegated account.
 */
export function from(parameters) {
    const account = (typeof parameters === 'string' ? { address: parameters } : parameters);
    const source = account.sign ? 'privateKey' : 'porto';
    const { address, sign: sign_, signMessage, signTransaction, signTypedData, type, } = toAccount({
        address: account.address,
        sign({ hash }) {
            if (source === 'porto')
                throw new Error('`sign` not supported on porto accounts.');
            if (!account.sign)
                throw new Error('`sign` not supported.');
            return account.sign({ hash });
        },
        signMessage({ message }) {
            return this.sign({
                hash: hashMessage(message),
            });
        },
        signTransaction() {
            throw new Error('`signTransaction` not supported on porto accounts.');
        },
        signTypedData(typedData) {
            return this.sign({
                hash: hashTypedData(typedData),
            });
        },
    });
    return {
        address,
        keys: account.keys ?? undefined,
        sign: sign_,
        signMessage,
        signTransaction,
        signTypedData,
        source,
        type,
    };
}
/**
 * Instantiates a delegated account from a private key.
 *
 * @param privateKey - Private key.
 * @param options - Options.
 * @returns An instantiated delegated account.
 */
export function fromPrivateKey(privateKey, options = {}) {
    const { keys } = options;
    const address = Address.fromPublicKey(Secp256k1.getPublicKey({ privateKey }));
    return from({
        address,
        keys,
        async sign({ hash }) {
            return Signature.toHex(Secp256k1.sign({
                payload: hash,
                privateKey,
            }));
        },
        source: 'privateKey',
    });
}
export function getKey(account, parameters = {}) {
    const { key, role } = parameters;
    if (key === null)
        return undefined;
    // Extract from `key` parameter.
    if (typeof key === 'object')
        return key;
    // Extract from `account.keys` (with optional `key` index).
    if (account.keys && account.keys.length > 0) {
        if (typeof key === 'number')
            return account.keys[key];
        return account.keys.find((key) => key.privateKey && (!role || key.role === role));
    }
    return undefined;
}
/**
 * Extracts a signing key from a delegated account and signs a payload.
 *
 * @example
 * TODO
 *
 * @param parameters - Parameters.
 * @returns Signature.
 */
export async function sign(account, parameters) {
    const { storage, replaySafe = true, wrap = true, webAuthn } = parameters;
    const key = getKey(account, parameters);
    const payload = (() => {
        if (!replaySafe)
            return parameters.payload;
        return TypedData.getSignPayload({
            domain: { verifyingContract: account.address },
            message: {
                digest: parameters.payload,
            },
            primaryType: 'ERC1271Sign',
            types: {
                ERC1271Sign: [{ name: 'digest', type: 'bytes32' }],
            },
        });
    })();
    const sign = (() => {
        if (!key) {
            if (account.source === 'privateKey')
                return account.sign;
            return undefined;
        }
        return ({ hash }) => Key.sign(key, {
            address: null,
            payload: hash,
            storage,
            webAuthn,
            wrap,
        });
    })();
    // If the account has no valid signing key, then we cannot sign the payload.
    if (!sign)
        throw new Error('cannot find key to sign with.');
    // Sign the payload.
    return await sign({ hash: payload });
}
//# sourceMappingURL=Account.js.map