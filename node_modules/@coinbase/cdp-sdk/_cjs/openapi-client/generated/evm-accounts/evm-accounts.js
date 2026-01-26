"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportEvmAccountByName = exports.exportEvmAccount = exports.importEvmAccount = exports.signEvmTypedData = exports.signEvmMessage = exports.signEvmHash = exports.signEvmTransaction = exports.sendEvmTransaction = exports.getEvmAccountByName = exports.updateEvmAccount = exports.getEvmAccount = exports.createEvmAccount = exports.listEvmAccounts = void 0;
const cdpApiClient_js_1 = require("../../cdpApiClient.js");
/**
 * Lists the EVM accounts belonging to the developer's CDP Project.
The response is paginated, and by default, returns 20 accounts per page.
 * @summary List EVM accounts
 */
const listEvmAccounts = (params, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/evm/accounts`, method: "GET", params }, options);
};
exports.listEvmAccounts = listEvmAccounts;
/**
 * Creates a new EVM account.
 * @summary Create an EVM account
 */
const createEvmAccount = (createEvmAccountBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/accounts`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: createEvmAccountBody,
    }, options);
};
exports.createEvmAccount = createEvmAccount;
/**
 * Gets an EVM account by its address.
 * @summary Get an EVM account by address
 */
const getEvmAccount = (address, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/evm/accounts/${address}`, method: "GET" }, options);
};
exports.getEvmAccount = getEvmAccount;
/**
 * Updates an existing EVM account. Use this to update the account's name or account-level policy.
 * @summary Update an EVM account
 */
const updateEvmAccount = (address, updateEvmAccountBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/accounts/${address}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        data: updateEvmAccountBody,
    }, options);
};
exports.updateEvmAccount = updateEvmAccount;
/**
 * Gets an EVM account by its name.
 * @summary Get an EVM account by name
 */
const getEvmAccountByName = (name, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/evm/accounts/by-name/${name}`, method: "GET" }, options);
};
exports.getEvmAccountByName = getEvmAccountByName;
/**
 * Signs a transaction with the given EVM account and sends it to the indicated supported network. This API handles nonce management and gas estimation, leaving the developer to provide only the minimal set of fields necessary to send the transaction. The transaction should be serialized as a hex string using [RLP](https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/).

The transaction must be an [EIP-1559 dynamic fee transaction](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md).


**Transaction fields and API behavior**

- `to` *(Required)*: The address of the contract or account to send the transaction to.
- `chainId` *(Ignored)*: The value of the `chainId` field in the transaction is ignored.
  The transaction will be sent to the network indicated by the `network` field in the request body.

- `nonce` *(Optional)*: The nonce to use for the transaction. If not provided, the API will assign
   a nonce to the transaction based on the current state of the account.

- `maxPriorityFeePerGas` *(Optional)*: The maximum priority fee per gas to use for the transaction.
   If not provided, the API will estimate a value based on current network conditions.

- `maxFeePerGas` *(Optional)*: The maximum fee per gas to use for the transaction.
   If not provided, the API will estimate a value based on current network conditions.

- `gasLimit` *(Optional)*: The gas limit to use for the transaction. If not provided, the API will estimate a value
  based on the `to` and `data` fields of the transaction.

- `value` *(Optional)*: The amount of ETH, in wei, to send with the transaction.
- `data` *(Optional)*: The data to send with the transaction; only used for contract calls.
- `accessList` *(Optional)*: The access list to use for the transaction.
 * @summary Send a transaction
 */
const sendEvmTransaction = (address, sendEvmTransactionBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/accounts/${address}/send/transaction`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: sendEvmTransactionBody,
    }, options);
};
exports.sendEvmTransaction = sendEvmTransaction;
/**
 * Signs a transaction with the given EVM account.
The transaction should be serialized as a hex string using [RLP](https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/).

The transaction must be an [EIP-1559 dynamic fee transaction](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md). The developer is responsible for ensuring that the unsigned transaction is valid, as the API will not validate the transaction.
 * @summary Sign a transaction
 */
const signEvmTransaction = (address, signEvmTransactionBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/accounts/${address}/sign/transaction`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: signEvmTransactionBody,
    }, options);
};
exports.signEvmTransaction = signEvmTransaction;
/**
 * Signs an arbitrary 32 byte hash with the given EVM account.
 * @summary Sign a hash
 */
const signEvmHash = (address, signEvmHashBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/accounts/${address}/sign`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: signEvmHashBody,
    }, options);
};
exports.signEvmHash = signEvmHash;
/**
 * Signs an [EIP-191](https://eips.ethereum.org/EIPS/eip-191) message with the given EVM account.

Per the specification, the message in the request body is prepended with `0x19 <0x45 (E)> <thereum Signed Message:\n" + len(message)>` before being signed.
 * @summary Sign an EIP-191 message
 */
const signEvmMessage = (address, signEvmMessageBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/accounts/${address}/sign/message`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: signEvmMessageBody,
    }, options);
};
exports.signEvmMessage = signEvmMessage;
/**
 * Signs [EIP-712](https://eips.ethereum.org/EIPS/eip-712) typed data with the given EVM account.
 * @summary Sign EIP-712 typed data
 */
const signEvmTypedData = (address, eIP712Message, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/accounts/${address}/sign/typed-data`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: eIP712Message,
    }, options);
};
exports.signEvmTypedData = signEvmTypedData;
/**
 * Import an existing EVM account into the developer's CDP Project. This API should be called from the [CDP SDK](https://github.com/coinbase/cdp-sdk) to ensure that the associated private key is properly encrypted.
 * @summary Import an EVM account
 */
const importEvmAccount = (importEvmAccountBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/accounts/import`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: importEvmAccountBody,
    }, options);
};
exports.importEvmAccount = importEvmAccount;
/**
 * Export an existing EVM account's private key. It is important to store the private key in a secure place after it's exported.
 * @summary Export an EVM account
 */
const exportEvmAccount = (address, exportEvmAccountBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/accounts/${address}/export`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: exportEvmAccountBody,
    }, options);
};
exports.exportEvmAccount = exportEvmAccount;
/**
 * Export an existing EVM account's private key by its name. It is important to store the private key in a secure place after it's exported.
 * @summary Export an EVM account by name
 */
const exportEvmAccountByName = (name, exportEvmAccountByNameBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/accounts/export/by-name/${name}`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: exportEvmAccountByNameBody,
    }, options);
};
exports.exportEvmAccountByName = exportEvmAccountByName;
//# sourceMappingURL=evm-accounts.js.map