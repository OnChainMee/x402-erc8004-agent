import * as Chains from '../../core/Chains.js';
import * as WalletClient from '../../viem/WalletClient.js';
/** Gets a Viem client for Porto Dialog. */
export declare function getWalletClient(options?: getWalletClient.Options): Promise<WalletClient.WalletClient<import("viem").Transport, {
    blockExplorers: {
        readonly default: {
            readonly name: "Basescan";
            readonly url: "https://basescan.org";
            readonly apiUrl: "https://api.basescan.org/api";
        };
    };
    blockTime: 2000;
    contracts: {
        readonly disputeGameFactory: {
            readonly 1: {
                readonly address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e";
            };
        };
        readonly l2OutputOracle: {
            readonly 1: {
                readonly address: "0x56315b90c40730925ec5485cf004d835058518A0";
            };
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 5022;
        };
        readonly portal: {
            readonly 1: {
                readonly address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e";
                readonly blockCreated: 17482143;
            };
        };
        readonly l1StandardBridge: {
            readonly 1: {
                readonly address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35";
                readonly blockCreated: 17482143;
            };
        };
        readonly gasPriceOracle: {
            readonly address: "0x420000000000000000000000000000000000000F";
        };
        readonly l1Block: {
            readonly address: "0x4200000000000000000000000000000000000015";
        };
        readonly l2CrossDomainMessenger: {
            readonly address: "0x4200000000000000000000000000000000000007";
        };
        readonly l2Erc721Bridge: {
            readonly address: "0x4200000000000000000000000000000000000014";
        };
        readonly l2StandardBridge: {
            readonly address: "0x4200000000000000000000000000000000000010";
        };
        readonly l2ToL1MessagePasser: {
            readonly address: "0x4200000000000000000000000000000000000016";
        };
    };
    ensTlds?: readonly string[] | undefined;
    id: 8453;
    name: "Base";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.base.org"];
        };
    };
    sourceId: 1;
    testnet?: boolean | undefined | undefined;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters: {
        readonly block: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").OpStackRpcBlock, action?: string | undefined) => {
                baseFeePerGas: bigint | null;
                blobGasUsed: bigint;
                difficulty: bigint;
                excessBlobGas: bigint;
                extraData: import("viem").Hex;
                gasLimit: bigint;
                gasUsed: bigint;
                hash: `0x${string}` | null;
                logsBloom: `0x${string}` | null;
                miner: import("viem").Address;
                mixHash: import("viem").Hash;
                nonce: `0x${string}` | null;
                number: bigint | null;
                parentBeaconBlockRoot?: `0x${string}` | undefined;
                parentHash: import("viem").Hash;
                receiptsRoot: import("viem").Hex;
                sealFields: import("viem").Hex[];
                sha3Uncles: import("viem").Hash;
                size: bigint;
                stateRoot: import("viem").Hash;
                timestamp: bigint;
                totalDifficulty: bigint | null;
                transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                transactionsRoot: import("viem").Hash;
                uncles: import("viem").Hash[];
                withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                withdrawalsRoot?: `0x${string}` | undefined;
            } & {};
            type: "block";
        };
        readonly transaction: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").OpStackRpcTransaction, action?: string | undefined) => ({
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: import("viem").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("viem").Address | null;
                transactionIndex: number | null;
                typeHex: import("viem").Hex | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                isSystemTx?: boolean;
                mint?: bigint | undefined | undefined;
                sourceHash: import("viem").Hex;
                type: "deposit";
            } | {
                r: import("viem").Hex;
                s: import("viem").Hex;
                v: bigint;
                value: bigint;
                gas: bigint;
                to: import("viem").Address | null;
                from: import("viem").Address;
                nonce: number;
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                transactionIndex: number | null;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                typeHex: import("viem").Hex | null;
                accessList?: undefined | undefined;
                authorizationList?: undefined | undefined;
                blobVersionedHashes?: undefined | undefined;
                chainId?: number | undefined;
                yParity?: undefined | undefined;
                type: "legacy";
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas?: undefined | undefined;
                maxPriorityFeePerGas?: undefined | undefined;
                isSystemTx?: undefined | undefined;
                mint?: undefined | undefined;
                sourceHash?: undefined | undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: import("viem").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("viem").Address | null;
                transactionIndex: number | null;
                typeHex: import("viem").Hex | null;
                v: bigint;
                value: bigint;
                yParity: number;
                accessList: import("viem").AccessList;
                authorizationList?: undefined | undefined;
                blobVersionedHashes?: undefined | undefined;
                chainId: number;
                type: "eip2930";
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas?: undefined | undefined;
                maxPriorityFeePerGas?: undefined | undefined;
                isSystemTx?: undefined | undefined;
                mint?: undefined | undefined;
                sourceHash?: undefined | undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: import("viem").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("viem").Address | null;
                transactionIndex: number | null;
                typeHex: import("viem").Hex | null;
                v: bigint;
                value: bigint;
                yParity: number;
                accessList: import("viem").AccessList;
                authorizationList?: undefined | undefined;
                blobVersionedHashes?: undefined | undefined;
                chainId: number;
                type: "eip1559";
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                isSystemTx?: undefined | undefined;
                mint?: undefined | undefined;
                sourceHash?: undefined | undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: import("viem").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("viem").Address | null;
                transactionIndex: number | null;
                typeHex: import("viem").Hex | null;
                v: bigint;
                value: bigint;
                yParity: number;
                accessList: import("viem").AccessList;
                authorizationList?: undefined | undefined;
                blobVersionedHashes: readonly import("viem").Hex[];
                chainId: number;
                type: "eip4844";
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas: bigint;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                isSystemTx?: undefined | undefined;
                mint?: undefined | undefined;
                sourceHash?: undefined | undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: import("viem").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("viem").Address | null;
                transactionIndex: number | null;
                typeHex: import("viem").Hex | null;
                v: bigint;
                value: bigint;
                yParity: number;
                accessList: import("viem").AccessList;
                authorizationList: import("viem").SignedAuthorizationList;
                blobVersionedHashes?: undefined | undefined;
                chainId: number;
                type: "eip7702";
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                isSystemTx?: undefined | undefined;
                mint?: undefined | undefined;
                sourceHash?: undefined | undefined;
            }) & {};
            type: "transaction";
        };
        readonly transactionReceipt: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").OpStackRpcTransactionReceipt, action?: string | undefined) => {
                blobGasPrice?: bigint | undefined;
                blobGasUsed?: bigint | undefined;
                blockHash: import("viem").Hash;
                blockNumber: bigint;
                contractAddress: import("viem").Address | null | undefined;
                cumulativeGasUsed: bigint;
                effectiveGasPrice: bigint;
                from: import("viem").Address;
                gasUsed: bigint;
                logs: import("viem").Log<bigint, number, false>[];
                logsBloom: import("viem").Hex;
                root?: `0x${string}` | undefined;
                status: "success" | "reverted";
                to: import("viem").Address | null;
                transactionHash: import("viem").Hash;
                transactionIndex: number;
                type: import("viem").TransactionType;
                l1GasPrice: bigint | null;
                l1GasUsed: bigint | null;
                l1Fee: bigint | null;
                l1FeeScalar: number | null;
            } & {};
            type: "transactionReceipt";
        };
    };
    serializers: {
        readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
    };
}, undefined>>;
export declare namespace getWalletClient {
    type Options = {
        /** Dialog hostname. */
        dialog?: string | undefined;
    };
}
/** Gets a Viem client for Relay. */
export declare function getRelayClient(options?: getRelayClient.Options): Promise<{
    account: undefined;
    batch?: {
        multicall?: boolean | import("viem").Prettify<import("viem").MulticallBatchOptions> | undefined;
    } | undefined;
    cacheTime: number;
    ccipRead?: false | {
        request?: (parameters: import("viem").CcipRequestParameters) => Promise<`0x${string}`>;
    } | undefined;
    chain: Chains.Chain;
    experimental_blockTag?: import("viem").BlockTag | undefined;
    key: string;
    name: string;
    pollingInterval: number;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: import("viem").Hash];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: import("viem").Quantity;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_blobBaseFee";
        Parameters?: undefined;
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_call";
        Parameters: readonly [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>] | readonly [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>, block: import("viem").RpcBlockNumber | import("viem").BlockTag | import("viem").RpcBlockIdentifier] | readonly [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>, block: import("viem").RpcBlockNumber | import("viem").BlockTag | import("viem").RpcBlockIdentifier, stateOverrideSet: import("viem").RpcStateOverride] | readonly [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>, block: import("viem").RpcBlockNumber | import("viem").BlockTag | import("viem").RpcBlockIdentifier, stateOverrideSet: import("viem").RpcStateOverride, blockOverrides: import("viem").RpcBlockOverrides];
        ReturnType: import("viem").Hex;
    }, {
        Method: "eth_createAccessList";
        Parameters: [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>] | [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>, block: import("viem").RpcBlockNumber | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: {
            accessList: import("viem").AccessList;
            gasUsed: import("viem").Quantity;
        };
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: import("viem").Address;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: import("viem").RpcBlockNumber | import("viem").BlockTag] | [transaction: import("viem").RpcTransactionRequest, block: import("viem").RpcBlockNumber | import("viem").BlockTag, stateOverride: import("viem").RpcStateOverride];
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: import("viem").Quantity, newestBlock: import("viem").RpcBlockNumber | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: import("viem").Address, block: import("viem").RpcBlockNumber | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: import("viem").Hash, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: import("viem").RpcBlockNumber | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: import("viem").Hash];
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: import("viem").RpcBlockNumber | import("viem").BlockTag];
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_getCode";
        Parameters: [address: import("viem").Address, block: import("viem").RpcBlockNumber | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: import("viem").Hex;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: import("viem").Quantity];
        ReturnType: import("viem").RpcLog[] | import("viem").Hex[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: import("viem").Quantity];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: import("viem").Address | import("viem").Address[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: import("viem").RpcBlockNumber | import("viem").BlockTag | undefined;
            toBlock?: import("viem").RpcBlockNumber | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: import("viem").Hash | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: import("viem").Address, storageKeys: import("viem").Hash[], block: import("viem").RpcBlockNumber | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: import("viem").Address, index: import("viem").Quantity, block: import("viem").RpcBlockNumber | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: import("viem").Hex;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: import("viem").Hash, index: import("viem").Quantity];
        ReturnType: import("viem").RpcTransaction | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: import("viem").RpcBlockNumber | import("viem").BlockTag, index: import("viem").Quantity];
        ReturnType: import("viem").RpcTransaction | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: import("viem").Hash];
        ReturnType: import("viem").RpcTransaction | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: import("viem").Address, block: import("viem").RpcBlockNumber | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: import("viem").Hash];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: import("viem").Hash, index: import("viem").Quantity];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: import("viem").RpcBlockNumber | import("viem").BlockTag, index: import("viem").Quantity];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: import("viem").Hash];
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: import("viem").RpcBlockNumber | import("viem").BlockTag];
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: import("viem").RpcBlockNumber | import("viem").BlockTag | undefined;
            toBlock?: import("viem").RpcBlockNumber | import("viem").BlockTag | undefined;
            address?: import("viem").Address | import("viem").Address[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: import("viem").Hex];
        ReturnType: import("viem").Hash;
    }, {
        Method: "eth_sendRawTransactionSync";
        Parameters: [signedTransaction: import("viem").Hex] | [signedTransaction: import("viem").Hex, timeout: import("viem").Hex];
        ReturnType: import("viem").RpcTransactionReceipt;
    }, {
        Method: "eth_simulateV1";
        Parameters: [{
            blockStateCalls: readonly {
                blockOverrides?: import("viem").RpcBlockOverrides | undefined;
                calls?: readonly import("viem").ExactPartial<import("viem").RpcTransactionRequest>[] | undefined;
                stateOverrides?: import("viem").RpcStateOverride | undefined;
            }[];
            returnFullTransactions?: boolean | undefined;
            traceTransfers?: boolean | undefined;
            validation?: boolean | undefined;
        }, import("viem").RpcBlockNumber | import("viem").BlockTag];
        ReturnType: readonly (import("viem").RpcBlock & {
            calls: readonly {
                error?: {
                    data?: import("viem").Hex | undefined;
                    code: number;
                    message: string;
                } | undefined;
                logs?: readonly import("viem").RpcLog[] | undefined;
                gasUsed: import("viem").Hex;
                returnData: import("viem").Hex;
                status: import("viem").Hex;
            }[];
        })[];
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: import("viem").Quantity];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: import("viem").Address[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: import("viem").RpcBlockNumber | import("viem").BlockTag] | [transaction: import("viem").RpcTransactionRequest, block: import("viem").RpcBlockNumber | import("viem").BlockTag, stateOverride: import("viem").RpcStateOverride];
        ReturnType: import("viem").Quantity;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: import("viem").Address[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: import("viem").Hash;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: import("viem").Hex];
        ReturnType: import("viem").Hash;
    }, {
        Method: "eth_sendRawTransactionSync";
        Parameters: [signedTransaction: import("viem").Hex] | [signedTransaction: import("viem").Hex, timeout: import("viem").Hex];
        ReturnType: import("viem").RpcTransactionReceipt;
    }, {
        Method: "eth_sign";
        Parameters: [address: import("viem").Address, data: import("viem").Hex];
        ReturnType: import("viem").Hex;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: import("viem").Hex;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: import("viem").Address, message: string];
        ReturnType: import("viem").Hex;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: import("viem").NetworkSync | false;
    }, {
        Method: "personal_sign";
        Parameters: [data: import("viem").Hex, address: import("viem").Address];
        ReturnType: import("viem").Hex;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_addSubAccount";
        Parameters: [{
            account: import("viem").OneOf<{
                keys: readonly {
                    publicKey: import("viem").Hex;
                    type: "address" | "p256" | "webcrypto-p256" | "webauthn-p256";
                }[];
                type: "create";
            } | {
                address: import("viem").Address;
                chainId?: number | undefined;
                type: "deployed";
            } | {
                address: import("viem").Address;
                chainId?: number | undefined;
                factory: import("viem").Address;
                factoryData: import("viem").Hex;
                type: "undeployed";
            }>;
            version: string;
        }];
        ReturnType: {
            address: import("viem").Address;
            factory?: import("viem").Address | undefined;
            factoryData?: import("viem").Hex | undefined;
        };
    }, {
        Method: "wallet_connect";
        Parameters: [{
            capabilities?: import("viem").Capabilities | undefined;
            version: string;
        }];
        ReturnType: {
            accounts: readonly {
                address: import("viem").Address;
                capabilities?: import("viem").Capabilities | undefined;
            }[];
        };
    }, {
        Method: "wallet_disconnect";
        Parameters?: undefined;
        ReturnType: void;
    }, {
        Method: "wallet_getAssets";
        Parameters?: [import("viem").WalletGetAssetsParameters];
        ReturnType: import("viem").WalletGetAssetsReturnType;
    }, {
        Method: "wallet_getCallsStatus";
        Parameters?: [string];
        ReturnType: import("viem").WalletGetCallsStatusReturnType;
    }, {
        Method: "wallet_getCapabilities";
        Parameters?: readonly [] | readonly [import("viem").Address | undefined] | readonly [import("viem").Address | undefined, readonly import("viem").Hex[] | undefined] | undefined;
        ReturnType: import("viem").Prettify<import("viem").WalletCapabilitiesRecord>;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_grantPermissions";
        Parameters?: [import("viem").WalletGrantPermissionsParameters];
        ReturnType: import("viem").Prettify<import("viem").WalletGrantPermissionsReturnType>;
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_revokePermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_sendCalls";
        Parameters?: import("viem").WalletSendCallsParameters;
        ReturnType: import("viem").WalletSendCallsReturnType;
    }, {
        Method: "wallet_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: import("viem").Hash;
    }, {
        Method: "wallet_showCallsStatus";
        Parameters?: [string];
        ReturnType: void;
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: import("viem").Hex;
    }, {
        Method: "eth_estimateUserOperationGas";
        Parameters: [userOperation: import("viem").RpcUserOperation, entrypoint: import("viem").Address] | [userOperation: import("viem").RpcUserOperation, entrypoint: import("viem").Address, stateOverrideSet: import("viem").RpcStateOverride];
        ReturnType: import("viem").RpcEstimateUserOperationGasReturnType;
    }, {
        Method: "eth_getUserOperationByHash";
        Parameters: [hash: import("viem").Hash];
        ReturnType: import("viem").RpcGetUserOperationByHashReturnType | null;
    }, {
        Method: "eth_getUserOperationReceipt";
        Parameters: [hash: import("viem").Hash];
        ReturnType: import("viem").RpcUserOperationReceipt | null;
    }, {
        Method: "eth_sendUserOperation";
        Parameters: [userOperation: import("viem").RpcUserOperation, entrypoint: import("viem").Address];
        ReturnType: import("viem").Hash;
    }, {
        Method: "eth_supportedEntryPoints";
        Parameters?: undefined;
        ReturnType: readonly import("viem").Address[];
    }, {
        Method: "pm_getPaymasterStubData";
        Parameters?: [userOperation: import("viem").OneOf<import("viem").PartialBy<Pick<import("viem").RpcUserOperation<"0.6">, "callData" | "callGasLimit" | "initCode" | "maxFeePerGas" | "maxPriorityFeePerGas" | "nonce" | "sender" | "preVerificationGas" | "verificationGasLimit">, "callGasLimit" | "initCode" | "maxFeePerGas" | "maxPriorityFeePerGas" | "preVerificationGas" | "verificationGasLimit"> | import("viem").PartialBy<Pick<import("viem").RpcUserOperation<"0.7">, "callData" | "callGasLimit" | "factory" | "factoryData" | "maxFeePerGas" | "maxPriorityFeePerGas" | "nonce" | "sender" | "preVerificationGas" | "verificationGasLimit">, "callGasLimit" | "factory" | "factoryData" | "maxFeePerGas" | "maxPriorityFeePerGas" | "preVerificationGas" | "verificationGasLimit">>, entrypoint: import("viem").Address, chainId: import("viem").Hex, context: unknown];
        ReturnType: import("viem").OneOf<{
            paymasterAndData: import("viem").Hex;
        } | {
            paymaster: import("viem").Address;
            paymasterData: import("viem").Hex;
            paymasterVerificationGasLimit: import("viem").Hex;
            paymasterPostOpGasLimit: import("viem").Hex;
        }> & {
            sponsor?: {
                name: string;
                icon?: string | undefined;
            } | undefined;
            isFinal?: boolean | undefined;
        };
    }, {
        Method: "pm_getPaymasterData";
        Parameters?: [userOperation: Pick<import("viem").RpcUserOperation<"0.6">, "callData" | "callGasLimit" | "initCode" | "maxFeePerGas" | "maxPriorityFeePerGas" | "nonce" | "sender" | "preVerificationGas" | "verificationGasLimit"> | Pick<import("viem").RpcUserOperation<"0.7">, "callData" | "callGasLimit" | "factory" | "factoryData" | "maxFeePerGas" | "maxPriorityFeePerGas" | "nonce" | "sender" | "preVerificationGas" | "verificationGasLimit">, entrypoint: import("viem").Address, chainId: import("viem").Hex, context: unknown];
        ReturnType: import("viem").OneOf<{
            paymasterAndData: import("viem").Hex;
        } | {
            paymaster: import("viem").Address;
            paymasterData: import("viem").Hex;
            paymasterVerificationGasLimit: import("viem").Hex;
            paymasterPostOpGasLimit: import("viem").Hex;
        }>;
    }]>;
    transport: import("viem").TransportConfig<"http", import("viem").EIP1193RequestFn> & {
        fetchOptions?: import("viem").HttpTransportConfig["fetchOptions"] | undefined;
        url?: string | undefined;
    };
    type: string;
    uid: string;
    extend: <const client extends {
        [x: string]: unknown;
        account?: undefined;
        batch?: undefined;
        cacheTime?: undefined;
        ccipRead?: undefined;
        chain?: undefined;
        experimental_blockTag?: undefined;
        key?: undefined;
        name?: undefined;
        pollingInterval?: undefined;
        request?: undefined;
        transport?: undefined;
        type?: undefined;
        uid?: undefined;
    } & import("viem").ExactPartial<Pick<import("viem").PublicActions<import("viem").HttpTransport<undefined, false>, Chains.Chain, undefined>, "call" | "createContractEventFilter" | "createEventFilter" | "estimateContractGas" | "estimateGas" | "getBlock" | "getBlockNumber" | "getChainId" | "getContractEvents" | "getEnsText" | "getFilterChanges" | "getGasPrice" | "getLogs" | "getTransaction" | "getTransactionCount" | "getTransactionReceipt" | "prepareTransactionRequest" | "readContract" | "sendRawTransaction" | "simulateContract" | "uninstallFilter" | "watchBlockNumber" | "watchContractEvent"> & Pick<import("viem").WalletActions<Chains.Chain, undefined>, "sendTransaction" | "writeContract">>>(fn: (client: import("viem").Client<import("viem").HttpTransport<undefined, false>, Chains.Chain, undefined, undefined, {
        [x: string]: unknown;
        account?: undefined;
        batch?: undefined;
        cacheTime?: undefined;
        ccipRead?: undefined;
        chain?: undefined;
        experimental_blockTag?: undefined;
        key?: undefined;
        name?: undefined;
        pollingInterval?: undefined;
        request?: undefined;
        transport?: undefined;
        type?: undefined;
        uid?: undefined;
    } | undefined>) => client) => import("viem").Client<import("viem").HttpTransport<undefined, false>, Chains.Chain, undefined, undefined, { [K in keyof client]: client[K]; }>;
}>;
export declare namespace getRelayClient {
    type Options = {
        /** Chain name. */
        chain?: string | undefined;
        /** Relay URL. */
        rpc?: string | undefined;
    };
}
//# sourceMappingURL=context.d.ts.map