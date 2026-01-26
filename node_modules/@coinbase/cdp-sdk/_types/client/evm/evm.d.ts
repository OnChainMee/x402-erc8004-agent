/**
 * @module Client
 */
import { CreateServerAccountOptions, CreateSmartAccountOptions, CreateSwapQuoteOptions, CreateSwapQuoteResult, EvmClientInterface, ExportServerAccountOptions, GetOrCreateServerAccountOptions, GetOrCreateSmartAccountOptions, GetServerAccountOptions, GetSmartAccountOptions, GetSwapPriceOptions, GetSwapPriceResult, GetUserOperationOptions, ImportServerAccountOptions, ListServerAccountResult, ListServerAccountsOptions, ListSmartAccountResult, ListSmartAccountsOptions, PrepareAndSendUserOperationOptions, PrepareUserOperationOptions, ServerAccount, SignatureResult, SignHashOptions, SignMessageOptions, SignTransactionOptions, SignTypedDataOptions, SmartAccount, SwapUnavailableResult, UpdateEvmAccountOptions, UpdateEvmSmartAccountOptions, UserOperation, WaitForUserOperationOptions } from "./evm.types.js";
import { ListSpendPermissionsResult } from "../../actions/evm/listSpendPermissions.js";
import { ListTokenBalancesOptions, ListTokenBalancesResult } from "../../actions/evm/listTokenBalances.js";
import { RequestFaucetOptions, RequestFaucetResult } from "../../actions/evm/requestFaucet.js";
import { PrepareAndSendUserOperationReturnType, SendUserOperationOptions, SendUserOperationReturnType } from "../../actions/evm/sendUserOperation.js";
import { WaitForUserOperationReturnType } from "../../actions/evm/waitForUserOperation.js";
import type { SendTransactionOptions, TransactionResult } from "../../actions/evm/sendTransaction.js";
import type { CreateSpendPermissionOptions, ListSpendPermissionsOptions, RevokeSpendPermissionOptions } from "../../spend-permissions/types.js";
/**
 * The namespace containing all EVM methods.
 */
export declare class EvmClient implements EvmClientInterface {
    /**
     * Creates a new CDP EVM account.
     *
     * @param {CreateServerAccountOptions} [options] - Optional parameters for creating the account.
     * @param {string} [options.name] - A name for the account to create.
     * @param {string} [options.idempotencyKey] - An idempotency key.
     *
     * @returns A promise that resolves to the newly created account.
     *
     * @example **Without arguments**
     *          ```ts
     *          const account = await cdp.evm.createAccount();
     *          ```
     *
     * @example **With a name**
     *          ```ts
     *          const account = await cdp.evm.createAccount({ name: "MyAccount" });
     *          ```
     *
     * @example **With an idempotency key**
     *          ```ts
     *          const idempotencyKey = uuidv4();
     *
     *          // First call
     *          await cdp.evm.createAccount({
     *            idempotencyKey,
     *          });
     *
     *          // Second call with the same idempotency key will return the same account
     *          await cdp.evm.createAccount({
     *            idempotencyKey,
     *          });
     *          ```
     */
    createAccount(options?: CreateServerAccountOptions): Promise<ServerAccount>;
    /**
     * Imports a CDP EVM account from an external source.
     *
     * @param {ImportServerAccountOptions} options - Parameters for importing the account.
     * @param {string} options.privateKey - The private key of the account to import.
     * @param {string} [options.name] - A name for the account to import.
     * @param {string} [options.idempotencyKey] - An idempotency key.
     *
     * @returns A promise that resolves to the imported account.
     *
     * @example **Without arguments**
     *          ```ts
     *          const account = await cdp.evm.importAccount({
     *            privateKey: "0x123456"
     *          });
     *          ```
     *
     * @example **With a name**
     *          ```ts
     *          const account = await cdp.evm.importAccount({
     *            privateKey: "0x123456",
     *            name: "MyAccount"
     *          });
     *          ```
     *
     * @example **With an idempotency key**
     *          ```ts
     *          const idempotencyKey = uuidv4();
     *
     *          // First call
     *          await cdp.evm.importAccount({
     *            privateKey: "0x123456",
     *            idempotencyKey,
     *          });
     *
     *          // Second call with the same idempotency key will return the same account
     *          await cdp.evm.importAccount({
     *            privateKey: "0x123456"
     *            idempotencyKey,
     *          });
     *          ```
     */
    importAccount(options: ImportServerAccountOptions): Promise<ServerAccount>;
    /**
     * Exports a CDP EVM account's private key.
     * It is important to store the private key in a secure place after it's exported.
     *
     * @param {ExportServerAccountOptions} options - Parameters for exporting the account.
     * @param {string} [options.address] - The address of the account to export.
     * @param {string} [options.name] - The name of the account to export.
     * @param {string} [options.idempotencyKey] - An idempotency key.
     *
     * @returns A promise that resolves to the exported account’s 32-byte private key as a hex string, without the "0x" prefix.
     *
     * @example **With an address**
     * ```ts
     * const privateKey = await cdp.evm.exportAccount({
     *   address: "0x1234567890123456789012345678901234567890",
     * });
     * ```
     *
     * @example **With a name**
     * ```ts
     * const privateKey = await cdp.evm.exportAccount({
     *   name: "MyAccount",
     * });
     * ```
     */
    exportAccount(options: ExportServerAccountOptions): Promise<string>;
    /**
     * Creates a new CDP EVM smart account.
     *
     * @param {CreateSmartAccountOptions} options - Parameters for creating the smart account.
     * @param {Account} options.owner - The owner of the smart account.
     * The owner can be any Ethereum account with signing capabilities,
     * such as a CDP EVM account or a Viem LocalAccount.
     * @param {string} [options.idempotencyKey] - An idempotency key.
     *
     * @returns A promise that resolves to the newly created smart account.
     *
     * @example **With a CDP EVM Account as the owner**
     *          ```ts
     *          const account = await cdp.evm.createAccount();
     *          const smartAccount = await cdp.evm.createSmartAccount({
     *            owner: account,
     *          });
     *          ```
     *
     * @example **With a Viem LocalAccount as the owner**
     *          ```ts
     *          // See https://viem.sh/docs/accounts/local/privateKeyToAccount
     *          const privateKey = generatePrivateKey();
     *          const account = privateKeyToAccount(privateKey);
     *          const smartAccount = await client.evm.createSmartAccount({
     *            owner: account,
     *          });
     *          ```
     *
     * @example **With an idempotency key**
     *          ```ts
     *          const idempotencyKey = uuidv4();
     *
     *          // First call
     *          await cdp.evm.createSmartAccount({
     *            owner: account,
     *            idempotencyKey,
     *          });
     *
     *          // Second call with the same idempotency key will return the same smart account
     *          await cdp.evm.createSmartAccount({
     *            owner: account,
     *            idempotencyKey,
     *          ```
     */
    createSmartAccount(options: CreateSmartAccountOptions): Promise<SmartAccount>;
    /**
     * Creates a spend permission for a smart account.
     *
     * @param {CreateSpendPermissionOptions} options - Parameters for creating the spend permission.
     * @param {SpendPermission} options.spendPermission - The spend permission to create.
     * @param {string} [options.idempotencyKey] - The idempotency key to use for the spend permission.
     *
     * @returns A promise that resolves to the spend permission.
     *
     * @example
     * ```ts
     * const userOperation = await cdp.evm.createSpendPermission({
     *   spendPermission,
     *   network: "base-sepolia",
     * });
     * ```
     */
    createSpendPermission(options: CreateSpendPermissionOptions): Promise<UserOperation>;
    /**
     * Revokes a spend permission for a smart account.
     *
     * @param {RevokeSpendPermissionOptions} options - Parameters for revoking the spend permission.
     * @param {string} options.address - The address of the smart account.
     * @param {string} options.permissionHash - The hash of the spend permission to revoke.
     * @param {string} options.network - The network of the spend permission.
     * @param {string} [options.paymasterUrl] - The paymaster URL of the spend permission.
     *
     * @returns A promise that resolves to the user operation.
     *
     * @example
     * ```ts
     * const userOperation = await cdp.evm.revokeSpendPermission({
     *   address: "0x1234567890123456789012345678901234567890",
     *   permissionHash: "0x1234567890123456789012345678901234567890123456789012345678901234",
     *   network: "base-sepolia",
     * });
     * ```
     */
    revokeSpendPermission(options: RevokeSpendPermissionOptions): Promise<UserOperation>;
    /**
     * Gets a CDP EVM account.
     *
     * @param {GetServerAccountOptions} options - Parameters for getting the account.
     * Either `address` or `name` must be provided.
     * If both are provided, lookup will be done by `address` and `name` will be ignored.
     * @param {string} [options.address] - The address of the account to get.
     * @param {string} [options.name] - The name of the account to get.
     *
     * @returns A promise that resolves to the account.
     *
     * @example **Get an account by address**
     *          ```ts
     *          const account = await cdp.evm.getAccount({
     *            address: "0x1234567890123456789012345678901234567890",
     *          });
     *          ```
     *
     * @example **Get an account by name**
     *          ```ts
     *          const account = await cdp.evm.getAccount({
     *            name: "MyAccount",
     *          });
     *          ```
     */
    getAccount(options: GetServerAccountOptions): Promise<ServerAccount>;
    /**
     * Gets a CDP EVM smart account.
     *
     * @param {GetSmartAccountOptions} options - Parameters for getting the smart account.
     * Either `address` or `name` must be provided.
     * If both are provided, lookup will be done by `address` and `name` will be ignored.
     * @param {string} [options.address] - The address of the smart account to get.
     * @param {string} [options.name] - The name of the smart account to get.
     * @param {Account} options.owner - The owner of the smart account.
     * You must pass the signing-capable owner of the smart account so that the returned smart account
     * can be functional.
     *
     * @returns A promise that resolves to the smart account.
     *
     * @example
     * ```ts
     * const smartAccount = await cdp.evm.getSmartAccount({
     *   address: "0x1234567890123456789012345678901234567890",
     *   owner: account,
     * });
     * ```
     */
    getSmartAccount(options: GetSmartAccountOptions): Promise<SmartAccount>;
    /**
     * Gets a CDP EVM account, or creates one if it doesn't exist.
     *
     * @param {GetOrCreateServerAccountOptions} options - Parameters for getting or creating the account.
     * @param {string} [options.name] - The name of the account to get or create.
     *
     * @returns A promise that resolves to the account.
     *
     * @example
     * ```ts
     * const account = await cdp.evm.getOrCreateAccount({
     *   name: "MyAccount",
     * });
     * ```
     */
    getOrCreateAccount(options: GetOrCreateServerAccountOptions): Promise<ServerAccount>;
    /**
     * Gets a CDP EVM smart account, or creates one if it doesn't exist.
     * This method first attempts to retrieve an existing smart account with the given parameters.
     * If no account exists, it creates a new one with the specified owner.
     *
     * @param {GetOrCreateSmartAccountOptions} options - Configuration options for getting or creating the smart account.
     * @param {string} [options.name] - The name of the smart account to get or create.
     * @param {Account} options.owner - The owner of the smart account.
     *
     * @returns {Promise<SmartAccount>} A promise that resolves to the retrieved or newly created smart account.
     *
     * @example
     * ```ts
     * const smartAccount = await cdp.evm.getOrCreateSmartAccount({
     *   name: "MySmartAccount",
     *   owner: account,
     * });
     * ```
     */
    getOrCreateSmartAccount(options: GetOrCreateSmartAccountOptions): Promise<SmartAccount>;
    /**
     * Gets the price for a swap between two tokens on an EVM network.
     *
     * @param {GetSwapPriceOptions} options - The options for getting a swap price.
     *
     * @returns {Promise<GetSwapPriceResult | SwapUnavailableResult>} A promise that resolves to the swap price result or a response indicating that liquidity is unavailable.
     *
     * @example
     * ```typescript
     * const price = await cdp.evm.getSwapPrice({
     *   network: "ethereum-mainnet",
     *   toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
     *   fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
     *   fromAmount: BigInt("1000000000000000000"), // 1 WETH
     *   taker: "0x1234567890123456789012345678901234567890"
     * });
     * ```
     */
    getSwapPrice(options: GetSwapPriceOptions): Promise<GetSwapPriceResult | SwapUnavailableResult>;
    /**
     * Creates a quote for a swap between two tokens on an EVM network.
     *
     * @param {CreateSwapQuoteOptions} options - The options for creating a swap quote.
     *
     * @returns {Promise<CreateSwapQuoteResult | SwapUnavailableResult>} A promise that resolves to the swap quote result or a response indicating that liquidity is unavailable.
     *
     * @example
     * ```typescript
     * const swapQuote = await cdp.evm.createSwapQuote({
     *   network: "ethereum",
     *   toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
     *   fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
     *   fromAmount: BigInt("1000000000000000000"), // 1 WETH
     *   taker: "0x1234567890123456789012345678901234567890"
     * });
     * ```
     */
    createSwapQuote(options: CreateSwapQuoteOptions): Promise<CreateSwapQuoteResult | SwapUnavailableResult>;
    /**
     * Gets a user operation for a smart account by user operation hash.
     *
     * @param {GetUserOperationOptions} options - Parameters for getting the user operation.
     * @param {SmartAccount} options.smartAccount - The smart account signing the user operation.
     * @param {string} options.userOpHash - The user operation hash.
     *
     * @returns A promise that resolves to the user operation.
     *
     * @example
     * ```ts
     * const userOp = await cdp.evm.getUserOperation({
     *   smartAccount,
     *   userOpHash: "0x1234567890123456789012345678901234567890123456789012345678901234",
     * });
     * ```
     */
    getUserOperation(options: GetUserOperationOptions): Promise<UserOperation>;
    /**
     * Lists CDP EVM accounts.
     *
     * @param {ListServerAccountsOptions} [options] - Optional parameters for listing the accounts.
     * @param {number} [options.pageSize] - The number of accounts to return.
     * @param {string} [options.pageToken] - The page token to begin listing from.
     * This is obtained by previous calls to this method.
     *
     * @returns A promise that resolves to an array of accounts, and a token to paginate through the accounts.
     *
     * @example
     * ```ts
     * const accounts = await cdp.evm.listAccounts();
     * ```
     *
     * @example **With pagination**
     *          ```ts
     *          let page = await cdp.evm.listAccounts();
     *
     *          while (page.nextPageToken) {
     *            page = await cdp.evm.listAccounts({ pageToken: page.nextPageToken });
     *          }
     *          ```
     */
    listAccounts(options?: ListServerAccountsOptions): Promise<ListServerAccountResult>;
    /**
     * Lists CDP EVM token balances.
     *
     * @param {ListTokenBalancesOptions} options - Parameters for listing the token balances.
     * @param {number} [options.pageSize] - The number of token balances to return.
     * @param {string} [options.pageToken] - The page token to begin listing from.
     * This is obtained by previous calls to this method.
     *
     * @returns A promise that resolves to an array of token balances, and a token to paginate through the token balances.
     *
     * @example
     * ```ts
     * const tokenBalances = await cdp.evm.listTokenBalances({
     *   address: "0x1234567890123456789012345678901234567890",
     *   network: "base-sepolia",
     * });
     * ```
     *
     * @example
     * **With pagination**
     * ```ts
     * let page = await cdp.evm.listTokenBalances({
     *   address: "0x1234567890123456789012345678901234567890",
     *   network: "base-sepolia",
     * });
     *
     * while (page.nextPageToken) {
     *   page = await cdp.evm.listTokenBalances({
     *     address: "0x1234567890123456789012345678901234567890",
     *     network: "base-sepolia",
     *     pageToken: page.nextPageToken,
     *   });
     * }
     */
    listTokenBalances(options: ListTokenBalancesOptions): Promise<ListTokenBalancesResult>;
    /**
     * Lists CDP EVM smart accounts.
     *
     * @param {ListSmartAccountsOptions} options - Parameters for listing the smart accounts.
     * @param {number} [options.pageSize] - The number of smart accounts to return.
     * @param {string} [options.pageToken] - The page token to begin listing from.
     * This is obtained by previous calls to this method.
     *
     * @returns A promise that resolves to an array of smart accounts, and a token to paginate through the smart accounts.
     *
     * @example
     * ```ts
     * const smartAccounts = await cdp.evm.listSmartAccounts();
     * ```
     *
     * @example **With pagination**
     *          ```ts
     *          let page = await cdp.evm.listSmartAccounts();
     *
     *          while (page.nextPageToken) {
     *            page = await cdp.evm.listSmartAccounts({ pageToken: page.nextPageToken });
     *          }
     *          ```
     */
    listSmartAccounts(options?: ListSmartAccountsOptions): Promise<ListSmartAccountResult>;
    /**
     * Lists the spend permissions for a smart account.
     *
     * @param {ListSpendPermissionsOptions} options - Parameters for listing the spend permissions.
     * @param {string} options.address - The address of the smart account.
     * @param {number} [options.pageSize] - The number of spend permissions to return.
     * @param {string} [options.pageToken] - The page token to return the next page of spend permissions.
     *
     * @returns A promise that resolves to the spend permissions.
     */
    listSpendPermissions(options: ListSpendPermissionsOptions): Promise<ListSpendPermissionsResult>;
    /**
     * Prepares a user operation for a smart account.
     *
     * @param {PrepareUserOperationOptions} options - Parameters for preparing the user operation.
     * @param {SmartAccount} options.smartAccount - The smart account signing the user operation.
     * @param {string} options.network - The network to prepare the user operation for.
     * @param {EvmCall[]} options.calls - The calls to include in the user operation.
     * @param {string} [options.paymasterUrl] - The optional paymaster URL to use for the user operation.
     *
     * @returns A promise that resolves to the user operation hash.
     *
     * @example
     * ```ts
     * const userOp = await cdp.evm.prepareUserOperation({
     *   smartAccount,
     *   network: "base-sepolia",
     *   calls: [
     *     {
     *       to: "0x1234567890123456789012345678901234567890",
     *       value: parseEther("0.000001"),
     *       data: "0x",
     *     },
     *   ],
     * });
     * ```
     */
    prepareUserOperation(options: PrepareUserOperationOptions): Promise<UserOperation>;
    /**
     * Prepares and sends a user operation for a smart account.
     *
     * @param {PrepareAndSendUserOperationOptions} options - Parameters for preparing and sending the user operation.
     * @param {SmartAccount} options.smartAccount - The smart account signing the user operation.
     * @param {string} options.network - The network to prepare and send the user operation on.
     * @param {EvmCall[]} options.calls - The calls to include in the user operation.
     * @param {string} [options.paymasterUrl] - The optional paymaster URL to use for the user operation.
     *
     * @returns A promise that resolves to the smart account address, user operation hash, and status of the user operation.
     *
     * @example
     * ```ts
     * const { userOpHash } = await cdp.evm.prepareAndSendUserOperation({
     *   smartAccount,
     *   network: "base-sepolia",
     *   calls: [
     *     {
     *       to: "0x1234567890123456789012345678901234567890",
     *       value: parseEther("0.000001"),
     *       data: "0x",
     *     },
     *   ],
     * });
     * ```
     */
    prepareAndSendUserOperation(options: PrepareAndSendUserOperationOptions): Promise<PrepareAndSendUserOperationReturnType>;
    /**
     * Requests funds from an EVM faucet.
     *
     * @param {RequestFaucetOptions} options - Parameters for requesting funds from the EVM faucet.
     * @param {string} options.address - The address to request funds for.
     * @param {string} options.network - The network to request funds from.
     * @param {string} options.token - The token to request funds for.
     * @param {string} [options.idempotencyKey] - An idempotency key.
     *
     * @returns A promise that resolves to the transaction hash.
     *
     * @example
     * ```ts
     * const result = await cdp.evm.requestFaucet({
     *   address: "0x1234567890123456789012345678901234567890",
     *   network: "base-sepolia",
     *   token: "eth",
     * });
     * ```
     */
    requestFaucet(options: RequestFaucetOptions): Promise<RequestFaucetResult>;
    /**
     * Signs an EVM transaction and sends it to the specified network using the Coinbase API.
     * This method handles nonce management and gas estimation automatically.
     *
     * @param {SendTransactionOptions} options - Configuration options for sending the transaction.
     * @returns A promise that resolves to the transaction hash.
     *
     * @example
     * **Sending an RLP-encoded transaction**
     * ```ts
     * import { parseEther, serializeTransaction } from "viem";
     * import { baseSepolia } from "viem/chains";
     *
     * const { transactionHash } = await cdp.evm.sendTransaction({
     *   address: account.address,
     *   transaction: serializeTransaction({
     *     to: "0x4252e0c9A3da5A2700e7d91cb50aEf522D0C6Fe8",
     *     value: parseEther("0.000001"),
     *     chainId: baseSepolia.id,
     *     // Fields below are optional, CDP API will populate them if omitted.
     *     // nonce
     *     // maxPriorityFeePerGas
     *     // maxFeePerGas
     *     // gas
     *   }),
     *   network: "base-sepolia",
     * });
     * ```
     * @example
     * **Sending an EIP-1559 transaction request object**
     * ```ts
     * const { transactionHash } = await cdp.evm.sendTransaction({
     *   address: account.address,
     *   transaction: {
     *     to: "0x4252e0c9A3da5A2700e7d91cb50aEf522D0C6Fe8",
     *     value: parseEther("0.000001"),
     *     // Fields below are optional, CDP API will populate them if omitted.
     *     // nonce
     *     // maxPriorityFeePerGas
     *     // maxFeePerGas
     *     // gas
     *   },
     *   network: "base-sepolia",
     * });
     * ```
     */
    sendTransaction(options: SendTransactionOptions): Promise<TransactionResult>;
    /**
     * Sends a user operation.
     *
     * @param {SendUserOperationOptions} options - Parameters for sending the user operation.
     * @param {SmartAccount} options.smartAccount - The smart account sending the user operation.
     * @param {string} options.network - The network to send the user operation on.
     * @param {EvmCall[]} options.calls - The calls to include in the user operation.
     * @param {string} [options.paymasterUrl] - The optional paymaster URL to use for the user operation.
     * @param {string} [options.idempotencyKey] - An idempotency key.
     *
     * @returns A promise that resolves to an object containing the smart account address,
     * the user operation hash, and the status of the user operation.
     *
     * @example
     * ```ts
     * const userOp = await cdp.evm.sendUserOperation({
     *   smartAccount,
     *   network: "base-sepolia",
     *   calls: [
     *     {
     *       to: "0x1234567890123456789012345678901234567890",
     *       value: parseEther("0.000001"),
     *       data: "0x",
     *     },
     *   ],
     * });
     * ```
     */
    sendUserOperation(options: SendUserOperationOptions<unknown[]>): Promise<SendUserOperationReturnType>;
    /**
     * Signs an EVM hash.
     *
     * @param {SignHashOptions} options - Parameters for signing the hash.
     * @param {string} options.address - The address to sign the hash for.
     * @param {string} options.hash - The hash to sign.
     * @param {string} [options.idempotencyKey] - An idempotency key.
     *
     * @returns A promise that resolves to the signature.
     *
     * @example
     * ```ts
     * // Create a new EVM server account to sign with
     * const ethAccount = await cdp.createEvmServerAccount({});
     *
     * const signature = await cdp.evm.signHash({
     *   address: ethAccount.address,
     *   hash: "0x1234567890123456789012345678901234567890123456789012345678901234",
     * });
     * ```
     */
    signHash(options: SignHashOptions): Promise<SignatureResult>;
    /**
     * Signs an EIP-191 message.
     *
     * @param {SignMessageOptions} options - Parameters for signing the message.
     * @param {string} options.address - The address to sign the message for.
     * @param {string} options.message - The message to sign.
     * @param {string} [options.idempotencyKey] - An idempotency key.
     *
     * @returns A promise that resolves to the signature.
     *
     * @example
     * ```ts
     * // Create a new EVM server account to sign with
     * const ethAccount = await cdp.createEvmServerAccount({});
     *
     * const signature = await cdp.evm.signMessage({
     *   address: ethAccount.address,
     *   message: "Hello, world!",
     * });
     * ```
     */
    signMessage(options: SignMessageOptions): Promise<SignatureResult>;
    /**
     * Signs an EIP-712 message.
     *
     * @param {SignTypedDataOptions} options - Parameters for signing the EIP-712 message.
     * @returns A promise that resolves to the signature.
     *
     * @example
     * ```ts
     * const signature = await cdp.evm.signTypedData({
     *   address: account.address,
     *   domain: {
     *     name: "Permit2",
     *     chainId: 1,
     *     verifyingContract: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
     *   },
     *   types: {
     *     EIP712Domain: [
     *       { name: "name", type: "string" },
     *       { name: "chainId", type: "uint256" },
     *       { name: "verifyingContract", type: "address" },
     *     ],
     *     PermitTransferFrom: [
     *       { name: "permitted", type: "TokenPermissions" },
     *       { name: "spender", type: "address" },
     *       { name: "nonce", type: "uint256" },
     *       { name: "deadline", type: "uint256" },
     *     ],
     *     TokenPermissions: [
     *       { name: "token", type: "address" },
     *       { name: "amount", type: "uint256" },
     *     ],
     *   },
     *   primaryType: "PermitTransferFrom",
     *   message: {
     *     permitted: {
     *       token: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
     *       amount: "1000000",
     *     },
     *     spender: "0xFfFfFfFFfFFfFFfFFfFFFFFffFFFffffFfFFFfFf",
     *     nonce: "0",
     *     deadline: "1717123200",
     *   },
     * });
     * ```
     */
    signTypedData(options: SignTypedDataOptions): Promise<SignatureResult>;
    /**
     * Signs an EVM transaction.
     *
     * @param {SignTransactionOptions} options - Configuration options for signing the transaction.
     * @returns A promise that resolves to the signature.
     *
     * @example
     * ```ts
     * import { parseEther, serializeTransaction } from "viem";
     * import { baseSepolia } from "viem/chains";
     *
     * // Create a new EVM server account to sign with
     * const ethAccount = await cdp.createEvmServerAccount({});
     *
     * const serializedTx = serializeTransaction(
     *   {
     *     chainId: baseSepolia.id,
     *     data: "0x",
     *     to: "0x4252e0c9A3da5A2700e7d91cb50aEf522D0C6Fe8",
     *     type: "eip1559",
     *     value: parseEther("0.000001"),
     *   },
     * );
     *
     * const signature = await cdp.evm.signTransaction({
     *   address: ethAccount.address,
     *   transaction: serializedTx,
     * });
     * ```
     */
    signTransaction(options: SignTransactionOptions): Promise<SignatureResult>;
    /**
     * Updates a CDP EVM account.
     *
     * @param {UpdateEvmAccountOptions} [options] - Optional parameters for creating the account.
     * @param {string} options.address - The address of the account to update
     * @param {UpdateEvmAccountBody} options.update - An object containing account fields to update.
     * @param {string} [options.update.name] - The new name for the account.
     * @param {string} [options.update.accountPolicy] - The ID of a Policy to apply to the account.
     * @param {string} [options.idempotencyKey] - An idempotency key.
     *
     * @returns A promise that resolves to the updated account.
     *
     * @example **With a name**
     *          ```ts
     *          const account = await cdp.evm.updateAccount({ address: "0x...", update: { name: "New Name" } });
     *          ```
     *
     * @example **With an account policy**
     *          ```ts
     *          const account = await cdp.evm.updateAccount({ address: "0x...", update: { accountPolicy: "73bcaeeb-d7af-4615-b064-42b5fe83a31e" } });
     *          ```
     *
     * @example **With an idempotency key**
     *          ```ts
     *          const idempotencyKey = uuidv4();
     *
     *          // First call
     *          await cdp.evm.updateAccount({
     *            address: "0x...",
     *            update: { accountPolicy: "73bcaeeb-d7af-4615-b064-42b5fe83a31e" },
     *            idempotencyKey,
     *          });
     *
     *          // Second call with the same idempotency key will not update
     *          await cdp.evm.updateAccount({
     *            address: '0x...',
     *            update: { name: "" },
     *            idempotencyKey,
     *          });
     *          ```
     */
    updateAccount(options: UpdateEvmAccountOptions): Promise<ServerAccount>;
    /**
     * Updates a CDP EVM smart account.
     *
     * @param {UpdateEvmSmartAccountOptions} [options] - Optional parameters for updating the account.
     * @param {string} options.address - The address of the account to update
     * @param {UpdateEvmSmartAccount} options.update - An object containing account fields to update.
     * @param {string} options.owner - The owner of the account.
     * @param {string} [options.update.name] - The new name for the account.
     * @param {string} [options.idempotencyKey] - An idempotency key.
     *
     * @returns A promise that resolves to the updated account.
     */
    updateSmartAccount(options: UpdateEvmSmartAccountOptions): Promise<SmartAccount>;
    /**
     * Waits for a user operation to complete or fail.
     *
     * @param {WaitForUserOperationOptions} options - Parameters for waiting for the user operation.
     * @param {string} options.smartAccountAddress - The address of the smart account.
     * @param {string} options.userOpHash - The user operation hash.
     * @param {WaitOptions} [options.waitOptions] - Optional parameters for the wait operation.
     *
     * @returns A promise that resolves to the transaction receipt.
     *
     * @example
     * ```ts
     * // Send a user operation and get the user operation hash
     * const { userOpHash } = await cdp.evm.sendUserOperation({
     *   smartAccount,
     *   network: "base-sepolia",
     *   calls: [
     *     {
     *       to: "0x0000000000000000000000000000000000000000",
     *       value: parseEther("0.000001"),
     *       data: "0x",
     *     },
     *   ],
     * });
     *
     * // Wait for the user operation to complete or fail
     * const result = await cdp.evm.waitForUserOperation({
     *   smartAccountAddress: smartAccount.address,
     *   userOpHash: userOp.userOpHash,
     * });
     * ```
     */
    waitForUserOperation(options: WaitForUserOperationOptions): Promise<WaitForUserOperationReturnType>;
    /**
     * Internal method to create an account without tracking analytics.
     * Used internally by composite operations to avoid double-counting.
     *
     * @param {CreateServerAccountOptions} options - Parameters for creating the account.
     * @returns {Promise<ServerAccount>} A promise that resolves to the newly created account.
     */
    private _createAccountInternal;
    /**
     * Internal method to get an account without tracking analytics.
     * Used internally by composite operations to avoid double-counting.
     *
     * @param {GetServerAccountOptions} options - Parameters for getting the account.
     * @returns {Promise<ServerAccount>} A promise that resolves to the account.
     */
    private _getAccountInternal;
    /**
     * Internal method to create a smart account without tracking analytics.
     * Used internally by composite operations to avoid double-counting.
     *
     * @param {CreateSmartAccountOptions} options - Parameters for creating the smart account.
     * @returns {Promise<SmartAccount>} A promise that resolves to the newly created smart account.
     */
    private _createSmartAccountInternal;
    /**
     * Internal method to get a smart account without tracking analytics.
     * Used internally by composite operations to avoid double-counting.
     *
     * @param {GetSmartAccountOptions} options - Parameters for getting the smart account.
     * @returns {Promise<SmartAccount>} A promise that resolves to the smart account.
     */
    private _getSmartAccountInternal;
}
//# sourceMappingURL=evm.d.ts.map