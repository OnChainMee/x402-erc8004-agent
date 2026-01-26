"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSolanaTransaction = exports.signSolanaMessage = exports.signSolanaTransaction = exports.exportSolanaAccountByName = exports.exportSolanaAccount = exports.importSolanaAccount = exports.getSolanaAccountByName = exports.updateSolanaAccount = exports.getSolanaAccount = exports.createSolanaAccount = exports.listSolanaAccounts = void 0;
const cdpApiClient_js_1 = require("../../cdpApiClient.js");
/**
 * Lists the Solana accounts belonging to the developer.
The response is paginated, and by default, returns 20 accounts per page.

If a name is provided, the response will contain only the account with that name.
 * @summary List Solana accounts or get account by name
 */
const listSolanaAccounts = (params, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/solana/accounts`, method: "GET", params }, options);
};
exports.listSolanaAccounts = listSolanaAccounts;
/**
 * Creates a new Solana account.
 * @summary Create a Solana account
 */
const createSolanaAccount = (createSolanaAccountBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/solana/accounts`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: createSolanaAccountBody,
    }, options);
};
exports.createSolanaAccount = createSolanaAccount;
/**
 * Gets a Solana account by its address.
 * @summary Get a Solana account by address
 */
const getSolanaAccount = (address, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/solana/accounts/${address}`, method: "GET" }, options);
};
exports.getSolanaAccount = getSolanaAccount;
/**
 * Updates an existing Solana account. Use this to update the account's name or account-level policy.
 * @summary Update a Solana account
 */
const updateSolanaAccount = (address, updateSolanaAccountBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/solana/accounts/${address}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        data: updateSolanaAccountBody,
    }, options);
};
exports.updateSolanaAccount = updateSolanaAccount;
/**
 * Gets a Solana account by its name.
 * @summary Get a Solana account by name
 */
const getSolanaAccountByName = (name, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/solana/accounts/by-name/${name}`, method: "GET" }, options);
};
exports.getSolanaAccountByName = getSolanaAccountByName;
/**
 * Import an existing Solana account into the developer's CDP Project. This API should be called from the [CDP SDK](https://github.com/coinbase/cdp-sdk) to ensure that the associated private key is properly encrypted.
 * @summary Import a Solana account
 */
const importSolanaAccount = (importSolanaAccountBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/solana/accounts/import`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: importSolanaAccountBody,
    }, options);
};
exports.importSolanaAccount = importSolanaAccount;
/**
 * Export an existing Solana account's private key. It is important to store the private key in a secure place after it's exported.
 * @summary Export an Solana account
 */
const exportSolanaAccount = (address, exportSolanaAccountBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/solana/accounts/${address}/export`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: exportSolanaAccountBody,
    }, options);
};
exports.exportSolanaAccount = exportSolanaAccount;
/**
 * Export an existing Solana account's private key by its name. It is important to store the private key in a secure place after it's exported.
 * @summary Export a Solana account by name
 */
const exportSolanaAccountByName = (name, exportSolanaAccountByNameBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/solana/accounts/export/by-name/${name}`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: exportSolanaAccountByNameBody,
    }, options);
};
exports.exportSolanaAccountByName = exportSolanaAccountByName;
/**
 * Signs a transaction with the given Solana account.
The unsigned transaction should be serialized into a byte array and then encoded as base64.

**Transaction types**

The following transaction types are supported:
* [Legacy transactions](https://solana-labs.github.io/solana-web3.js/classes/Transaction.html)
* [Versioned transactions](https://solana-labs.github.io/solana-web3.js/classes/VersionedTransaction.html)

The developer is responsible for ensuring that the unsigned transaction is valid, as the API will not validate the transaction.
 * @summary Sign a transaction
 */
const signSolanaTransaction = (address, signSolanaTransactionBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/solana/accounts/${address}/sign/transaction`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: signSolanaTransactionBody,
    }, options);
};
exports.signSolanaTransaction = signSolanaTransaction;
/**
 * Signs an arbitrary message with the given Solana account.

**WARNING:** Never sign a message that you didn't generate, as it can be an arbitrary transaction. For example, it might send all of your funds to an attacker.
 * @summary Sign a message
 */
const signSolanaMessage = (address, signSolanaMessageBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/solana/accounts/${address}/sign/message`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: signSolanaMessageBody,
    }, options);
};
exports.signSolanaMessage = signSolanaMessage;
/**
 * Signs and sends a single Solana transaction using multiple Solana accounts. The transaction may contain contain several instructions, each of which may require signatures from different account keys.

The transaction should be serialized into a byte array and base64 encoded. The API handles recent blockhash management and fee estimation, leaving the developer to provide only the minimal set of fields necessary to send the transaction.

**Transaction types**

The following transaction types are supported:
* [Legacy transactions](https://solana.com/developers/guides/advanced/versions#current-transaction-versions)
* [Versioned transactions](https://solana.com/developers/guides/advanced/versions)

**Instruction Batching**

To batch multiple operations, include multiple instructions within a single transaction. All instructions within a transaction are executed atomically - if any instruction fails, the entire transaction fails and is rolled back.

**Network Support**

The following Solana networks are supported:
* `solana` - Solana Mainnet
* `solana-devnet` - Solana Devnet

The developer is responsible for ensuring that the unsigned transaction is valid, as the API will not validate the transaction.
 * @summary Send a Solana transaction
 */
const sendSolanaTransaction = (sendSolanaTransactionBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/solana/accounts/send/transaction`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: sendSolanaTransactionBody,
    }, options);
};
exports.sendSolanaTransaction = sendSolanaTransaction;
//# sourceMappingURL=solana-accounts.js.map