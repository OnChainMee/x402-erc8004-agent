"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSQLGrammar = exports.runSQLQuery = void 0;
const cdpApiClient_js_1 = require("../../cdpApiClient.js");
/**
 * Run a read-only SQL query against indexed blockchain data including transactions, events, and decoded logs.

This endpoint provides direct SQL access to comprehensive blockchain data across supported networks.
Queries are executed against optimized data structures for high-performance analytics.

### Allowed Queries

  - Standard SQL syntax (ClickHouse dialect)
  - Read-only queries (SELECT statements)
  - No DDL or DML operations
  - No cartesian products

### Supported Tables

  - `base.events` - Base mainnet decoded event logs with parameters, event signature, topics, and more.
  - `base.transactions` - Base mainnet transaction data including hash, block number, gas usage.
  - `base.blocks` - Base mainnet block information.
  - `base.encoded_logs` - Encoded log data of event logs that aren't able to be decoded by our event decoder (ex: log0 opcode).
  - `base.transfers` - All event logs with event signature `Transfer(address,address,uint256)`. ERC-20, ERC-721, and ERC-1155 transfers are all included.

### Query Limits

  - Maximum result set: 100,000 rows
  - Query timeout: 30 seconds

 * @summary Run SQL Query
 */
const runSQLQuery = (onchainDataQuery, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/data/query/run`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: onchainDataQuery,
    }, options);
};
exports.runSQLQuery = runSQLQuery;
/**
 * Retrieve the SQL grammar for the SQL API.

The SQL queries that are supported by the SQL API are defined via an ANTLR4 grammar which is evaluated by server before executing the query. This ensures the safety and soundness of the SQL API.

This endpoint returns the ANTLR4 grammar that is used to evaluate the SQL queries so that developers can understand the SQL API and build SQL queries with high confidence and correctness. LLMs interact well with ANTLR4 grammar as well.

 * @summary Get SQL grammar
 */
const getSQLGrammar = (options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/data/query/grammar`, method: "GET" }, options);
};
exports.getSQLGrammar = getSQLGrammar;
//# sourceMappingURL=sql-api-alpha.js.map