import { Address } from 'ox';
import { useStore } from 'zustand';
import type * as Chains from '../core/Chains.js';
import type * as Porto from '../core/Porto.js';
import * as RelayClient from '../viem/RelayClient.js';
import * as WalletClient from '../viem/WalletClient.js';
import type * as Remote from './Porto.js';
/**
 * Hook to access and subscribe to the current account.
 * If an `address` is provided, it will return the account if exists.
 *
 * @param porto - Porto instance.
 * @param parameters - Parameters.
 * @returns Account.
 */
export declare function useAccount<chains extends readonly [Chains.Chain, ...Chains.Chain[]]>(porto: Pick<Remote.Porto<chains>, '_internal'>, parameters?: useAccount.Parameters): import("../viem/Account.js").Account<"porto" | "privateKey"> | undefined;
export declare namespace useAccount {
    type Parameters = {
        address?: Address.Address | undefined;
    };
}
/**
 * Hook to access and subscribe to the current accounts.
 *
 * @param porto - Porto instance.
 * @returns Accounts.
 */
export declare function useAccounts<chains extends readonly [Chains.Chain, ...Chains.Chain[]]>(porto: Pick<Remote.Porto<chains>, '_internal'>): readonly import("../viem/Account.js").Account<"porto" | "privateKey">[];
/**
 * Hook to access and subscribe to the current chain.
 * If a `chainId` is provided, it will return the chain if supported.
 *
 * @param porto - Porto instance.
 * @param parameters - Parameters.
 * @returns Chain.
 */
export declare function useChain<chains extends readonly [Chains.Chain, ...Chains.Chain[]]>(porto: Pick<Remote.Porto<chains>, '_internal'>, parameters?: useChain.Parameters): chains[number] | undefined;
export declare namespace useChain {
    type Parameters = {
        chainId?: number | undefined;
    };
}
/**
 * Hook to access and subscribe to the store of the Porto instance.
 *
 * @param porto - Porto instance.
 * @param selector - Selector function.
 * @returns Store state.
 */
export declare function usePortoStore<slice = Porto.State, chains extends readonly [Chains.Chain, ...Chains.Chain[]] = readonly [
    Chains.Chain,
    ...Chains.Chain[]
]>(porto: Pick<Remote.Porto<chains>, '_internal'>, selector?: Parameters<typeof useStore<typeof porto._internal.store, slice>>[1]): slice;
/**
 * Hook to access and subscribe to the remote store of the Porto instance.
 *
 * @param porto - Porto instance.
 * @param selector - Selector function.
 * @returns Remote store state.
 */
export declare function useRemoteStore<slice = Remote.State, chains extends readonly [Chains.Chain, ...Chains.Chain[]] = readonly [
    Chains.Chain,
    ...Chains.Chain[]
]>(porto: Pick<Remote.Porto<chains>, '_internal'>, selector?: Parameters<typeof useStore<typeof porto._internal.remoteStore, slice>>[1]): slice;
/**
 * Hook to access and subscribe to current pending requests.
 *
 * @param porto - Porto instance.
 * @returns Requests.
 */
export declare function useRequests<chains extends readonly [Chains.Chain, ...Chains.Chain[]]>(porto: Pick<Remote.Porto<chains>, '_internal'>): ({
    method: string;
    params?: unknown;
    id: number;
    jsonrpc: "2.0";
    _returnType: unknown;
} & {
    _internal?: unknown;
} & ({
    method: "eth_accounts";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly `0x${string}`[];
} | {
    method: "eth_blobBaseFee";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_blockNumber";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_call";
    params: [transaction: import("ox/TransactionRequest").Rpc] | [transaction: import("ox/TransactionRequest").Rpc, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier] | [transaction: import("ox/TransactionRequest").Rpc, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier, stateOverrides: import("ox/StateOverrides").Rpc];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_chainId";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_coinbase";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_estimateGas";
    params: [transaction: import("ox/TransactionRequest").Rpc] | [transaction: import("ox/TransactionRequest").Rpc, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier] | [transaction: import("ox/TransactionRequest").Rpc, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier, stateOverrides: import("ox/StateOverrides").Rpc];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_feeHistory";
    params: [blockCount: import("ox/Hex").Hex, newestBlock: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag, rewardPercentiles: number[] | undefined];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        baseFeePerGas: `0x${string}`[];
        gasUsedRatio: number[];
        oldestBlock: `0x${string}`;
        reward?: `0x${string}`[][] | undefined;
    };
} | {
    method: "eth_gasPrice";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getBalance";
    params: [address: Address.Address, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getBlockByHash";
    params: [hash: import("ox/Hex").Hex, includeTransactionObjects: boolean];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        baseFeePerGas?: `0x${string}` | undefined;
        blobGasUsed?: `0x${string}` | undefined;
        difficulty?: `0x${string}` | undefined;
        excessBlobGas?: `0x${string}` | undefined;
        extraData?: `0x${string}` | undefined;
        gasLimit: `0x${string}`;
        gasUsed: `0x${string}`;
        hash: `0x${string}`;
        logsBloom: `0x${string}`;
        miner: Address.Address;
        mixHash: import("ox/Hex").Hex;
        nonce: `0x${string}`;
        number: `0x${string}`;
        parentBeaconBlockRoot?: `0x${string}` | undefined;
        parentHash: import("ox/Hex").Hex;
        receiptsRoot: import("ox/Hex").Hex;
        sealFields?: readonly `0x${string}`[] | undefined;
        sha3Uncles: import("ox/Hex").Hex;
        size: `0x${string}`;
        stateRoot: import("ox/Hex").Hex;
        timestamp: `0x${string}`;
        totalDifficulty?: `0x${string}` | undefined;
        transactions: readonly `0x${string}`[] | readonly import("ox/Transaction").Rpc<false>[];
        transactionsRoot: import("ox/Hex").Hex;
        uncles: readonly import("ox/Hex").Hex[];
        withdrawals?: readonly import("ox/Withdrawal").Withdrawal<`0x${string}`, `0x${string}`>[] | undefined;
        withdrawalsRoot?: `0x${string}` | undefined;
    } | null;
} | {
    method: "eth_getBlockByNumber";
    params: [block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag, includeTransactionObjects: boolean];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        baseFeePerGas?: `0x${string}` | undefined;
        blobGasUsed?: `0x${string}` | undefined;
        difficulty?: `0x${string}` | undefined;
        excessBlobGas?: `0x${string}` | undefined;
        extraData?: `0x${string}` | undefined;
        gasLimit: `0x${string}`;
        gasUsed: `0x${string}`;
        hash: `0x${string}`;
        logsBloom: `0x${string}`;
        miner: Address.Address;
        mixHash: import("ox/Hex").Hex;
        nonce: `0x${string}`;
        number: `0x${string}`;
        parentBeaconBlockRoot?: `0x${string}` | undefined;
        parentHash: import("ox/Hex").Hex;
        receiptsRoot: import("ox/Hex").Hex;
        sealFields?: readonly `0x${string}`[] | undefined;
        sha3Uncles: import("ox/Hex").Hex;
        size: `0x${string}`;
        stateRoot: import("ox/Hex").Hex;
        timestamp: `0x${string}`;
        totalDifficulty?: `0x${string}` | undefined;
        transactions: readonly `0x${string}`[] | readonly import("ox/Transaction").Rpc<false>[];
        transactionsRoot: import("ox/Hex").Hex;
        uncles: readonly import("ox/Hex").Hex[];
        withdrawals?: readonly import("ox/Withdrawal").Withdrawal<`0x${string}`, `0x${string}`>[] | undefined;
        withdrawalsRoot?: `0x${string}` | undefined;
    } | null;
} | {
    method: "eth_getBlockTransactionCountByHash";
    params: [hash: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getBlockTransactionCountByNumber";
    params: [block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getCode";
    params: [address: Address.Address, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getFilterChanges";
    params: [filterId: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly `0x${string}`[] | readonly {
        address: Address.Address;
        blockHash: `0x${string}`;
        blockNumber: `0x${string}`;
        data: import("ox/Hex").Hex;
        logIndex: `0x${string}`;
        topics: [import("ox/Hex").Hex, ...(readonly import("ox/Hex").Hex[])];
        transactionHash: `0x${string}`;
        transactionIndex: `0x${string}`;
        removed: boolean;
    }[];
} | {
    method: "eth_getFilterLogs";
    params: [filterId: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly {
        address: Address.Address;
        blockHash: `0x${string}`;
        blockNumber: `0x${string}`;
        data: import("ox/Hex").Hex;
        logIndex: `0x${string}`;
        topics: [import("ox/Hex").Hex, ...(readonly import("ox/Hex").Hex[])];
        transactionHash: `0x${string}`;
        transactionIndex: `0x${string}`;
        removed: boolean;
    }[];
} | {
    method: "eth_getLogs";
    params: [filter: import("ox/Filter").Rpc];
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly {
        address: Address.Address;
        blockHash: `0x${string}`;
        blockNumber: `0x${string}`;
        data: import("ox/Hex").Hex;
        logIndex: `0x${string}`;
        topics: [import("ox/Hex").Hex, ...(readonly import("ox/Hex").Hex[])];
        transactionHash: `0x${string}`;
        transactionIndex: `0x${string}`;
        removed: boolean;
    }[];
} | {
    method: "eth_getProof";
    params: [address: Address.Address, storageKeys: import("ox/Hex").Hex[], block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
    id: number;
    jsonrpc: "2.0";
    _returnType: import("ox/AccountProof").Rpc;
} | {
    method: "eth_getStorageAt";
    params: [address: Address.Address, index: import("ox/Hex").Hex, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getTransactionByBlockHashAndIndex";
    params: [hash: import("ox/Hex").Hex, index: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: import("ox/Transaction").Rpc<false> | null;
} | {
    method: "eth_getTransactionByBlockNumberAndIndex";
    params: [block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag, index: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: import("ox/Transaction").Rpc<false> | null;
} | {
    method: "eth_getTransactionByHash";
    params: [hash: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: import("ox/Transaction").Rpc<false> | null;
} | {
    method: "eth_getTransactionCount";
    params: [address: Address.Address, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getTransactionReceipt";
    params: [hash: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        blobGasPrice?: `0x${string}` | undefined;
        blobGasUsed?: `0x${string}` | undefined;
        blockHash: import("ox/Hex").Hex;
        blockNumber: `0x${string}`;
        contractAddress?: `0x${string}` | null | undefined;
        cumulativeGasUsed: `0x${string}`;
        effectiveGasPrice: `0x${string}`;
        from: Address.Address;
        gasUsed: `0x${string}`;
        logs: {
            address: Address.Address;
            blockHash: `0x${string}`;
            blockNumber: `0x${string}`;
            data: import("ox/Hex").Hex;
            logIndex: `0x${string}`;
            topics: [import("ox/Hex").Hex, ...(readonly import("ox/Hex").Hex[])];
            transactionHash: `0x${string}`;
            transactionIndex: `0x${string}`;
            removed: boolean;
        }[];
        logsBloom: import("ox/Hex").Hex;
        root?: `0x${string}` | undefined;
        status: import("ox/TransactionReceipt").RpcStatus;
        to: Address.Address | null;
        transactionHash: import("ox/Hex").Hex;
        transactionIndex: `0x${string}`;
        type: import("ox/TransactionReceipt").RpcType;
    } | null;
} | {
    method: "eth_getUncleCountByBlockHash";
    params: [hash: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getUncleCountByBlockNumber";
    params: [block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_maxPriorityFeePerGas";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_newBlockFilter";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_newFilter";
    params: [filter: import("ox/Filter").Rpc];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_newPendingTransactionFilter";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_protocolVersion";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: string;
} | {
    method: "eth_requestAccounts";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly `0x${string}`[];
} | {
    method: "eth_sendRawTransaction";
    params: [serializedTransaction: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_sendTransaction";
    params: [transaction: import("ox/TransactionRequest").Rpc];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_simulateV1";
    params: [{
        blockStateCalls: readonly {
            blockOverrides?: import("viem").RpcBlockOverrides | undefined;
            calls?: readonly import("ox/TransactionRequest").Rpc[] | undefined;
            stateOverrides?: import("ox/StateOverrides").Rpc | undefined;
        }[];
        returnFullTransactions?: boolean | undefined;
        traceTransfers?: boolean | undefined;
        validation?: boolean | undefined;
    }, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly ({
        baseFeePerGas?: `0x${string}` | undefined;
        blobGasUsed?: `0x${string}` | undefined;
        difficulty?: `0x${string}` | undefined;
        excessBlobGas?: `0x${string}` | undefined;
        extraData?: `0x${string}` | undefined;
        gasLimit: `0x${string}`;
        gasUsed: `0x${string}`;
        hash: `0x${string}`;
        logsBloom: `0x${string}`;
        miner: Address.Address;
        mixHash: import("ox/Hex").Hex;
        nonce: `0x${string}`;
        number: `0x${string}`;
        parentBeaconBlockRoot?: `0x${string}` | undefined;
        parentHash: import("ox/Hex").Hex;
        receiptsRoot: import("ox/Hex").Hex;
        sealFields?: readonly `0x${string}`[] | undefined;
        sha3Uncles: import("ox/Hex").Hex;
        size: `0x${string}`;
        stateRoot: import("ox/Hex").Hex;
        timestamp: `0x${string}`;
        totalDifficulty?: `0x${string}` | undefined;
        transactions: readonly `0x${string}`[] | readonly import("ox/Transaction").Rpc<false>[];
        transactionsRoot: import("ox/Hex").Hex;
        uncles: readonly import("ox/Hex").Hex[];
        withdrawals?: readonly import("ox/Withdrawal").Withdrawal<`0x${string}`, `0x${string}`>[] | undefined;
        withdrawalsRoot?: `0x${string}` | undefined;
    } & {
        calls?: readonly {
            error?: {
                data?: import("ox/Hex").Hex | undefined;
                code: number;
                message: string;
            } | undefined;
            logs?: readonly import("ox/Log").Rpc[] | undefined;
            gasUsed: import("ox/Hex").Hex;
            returnData: import("ox/Hex").Hex;
            status: import("ox/Hex").Hex;
        }[] | undefined;
    })[];
} | {
    method: "eth_signTransaction";
    params: [request: import("ox/TransactionRequest").Rpc];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_signTypedData_v4";
    params: [address: Address.Address, message: string];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_uninstallFilter";
    params: [filterId: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: boolean;
} | {
    readonly method: "eth_requestAccounts";
    readonly params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly `0x${string}`[];
} | {
    readonly method: "eth_sendRawTransaction";
    readonly params: readonly [serializedTransaction: `0x${string}`];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    readonly method: "eth_sendTransaction";
    readonly params: readonly [transaction: Readonly<{
        accessList?: readonly Readonly<{
            address: Address.Address;
            storageKeys: readonly import("ox/Hex").Hex[];
        }>[] | undefined;
        authorizationList?: readonly Readonly<{
            address: Address.Address;
            chainId: `0x${string}`;
            nonce: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            yParity: `0x${string}`;
        }>[] | undefined;
        blobVersionedHashes?: readonly import("ox/Hex").Hex[];
        blobs?: readonly `0x${string}`[] | undefined;
        chainId?: `0x${string}` | undefined;
        data?: `0x${string}` | undefined;
        input?: `0x${string}` | undefined;
        from?: `0x${string}` | undefined;
        gas?: `0x${string}` | undefined;
        gasPrice?: `0x${string}` | undefined;
        maxFeePerBlobGas?: `0x${string}` | undefined;
        maxFeePerGas?: `0x${string}` | undefined;
        maxPriorityFeePerGas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        type?: string | undefined;
        value?: `0x${string}` | undefined;
    }>];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    readonly method: "eth_signTransaction";
    readonly params: readonly [request: Readonly<{
        accessList?: readonly Readonly<{
            address: Address.Address;
            storageKeys: readonly import("ox/Hex").Hex[];
        }>[] | undefined;
        authorizationList?: readonly Readonly<{
            address: Address.Address;
            chainId: `0x${string}`;
            nonce: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            yParity: `0x${string}`;
        }>[] | undefined;
        blobVersionedHashes?: readonly import("ox/Hex").Hex[];
        blobs?: readonly `0x${string}`[] | undefined;
        chainId?: `0x${string}` | undefined;
        data?: `0x${string}` | undefined;
        input?: `0x${string}` | undefined;
        from?: `0x${string}` | undefined;
        gas?: `0x${string}` | undefined;
        gasPrice?: `0x${string}` | undefined;
        maxFeePerBlobGas?: `0x${string}` | undefined;
        maxFeePerGas?: `0x${string}` | undefined;
        maxPriorityFeePerGas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        type?: string | undefined;
        value?: `0x${string}` | undefined;
    }>];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    readonly method: "eth_signTypedData_v4";
    readonly params: readonly [address: `0x${string}`, message: string];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    readonly method: "personal_sign";
    readonly params: readonly [data: `0x${string}`, address: `0x${string}`];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    readonly method: "wallet_addEthereumChain";
    readonly params: readonly [chain: Readonly<{
        chainId: string;
        chainName: string;
        nativeCurrency?: Readonly<{
            name: string;
            symbol: string;
            decimals: number;
        }> | undefined;
        rpcUrls: readonly string[];
        blockExplorerUrls?: readonly string[] | undefined;
        iconUrls?: readonly string[] | undefined;
    }>];
    id: number;
    jsonrpc: "2.0";
    _returnType: null;
} | {
    readonly method: "wallet_requestPermissions";
    readonly params: readonly [permissions: Readonly<{
        eth_accounts: Readonly<{
            [x: string]: any;
        }>;
    }>];
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly Readonly<{
        caveats: readonly Readonly<{
            type: string;
            value: any;
        }>[];
        date: number;
        id: string;
        invoker: `http://${string}` | `https://${string}`;
        parentCapability: "eth_accounts" | string;
    }>[];
} | {
    readonly method: "wallet_showCallsStatus";
    readonly params: readonly [string];
    id: number;
    jsonrpc: "2.0";
    _returnType: undefined;
} | {
    readonly method: "wallet_watchAsset";
    readonly params: readonly [Readonly<{
        type: "ERC20";
        options: Readonly<{
            address: string;
            symbol: string;
            decimals: number;
            image?: string | undefined | undefined;
        }>;
    }>];
    id: number;
    jsonrpc: "2.0";
    _returnType: boolean;
} | {
    method: "account_verifyEmail";
    params: readonly [{
        chainId: `0x${string}`;
        email: string;
        token: string;
        walletAddress: `0x${string}`;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: null;
} | {
    method: "wallet_addFunds";
    params: readonly [{
        address?: `0x${string}` | undefined;
        chainId?: `0x${string}` | undefined;
        token?: `0x${string}` | undefined;
        value?: string | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        id: `0x${string}`;
    };
} | {
    method: "porto_ping";
    params?: undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: "pong";
} | {
    method: "wallet_grantAdmin";
    params: readonly [{
        key: {
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
        };
        address?: `0x${string}` | undefined;
        capabilities?: {
            feeToken?: string | undefined;
        } | undefined;
        chainId?: `0x${string}` | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        address: `0x${string}`;
        chainId: `0x${string}`;
        key: {
            id: `0x${string}`;
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
            credentialId?: string | undefined;
            privateKey?: any;
        };
    };
} | {
    method: "wallet_grantPermissions";
    params: readonly [{
        expiry: number;
        feeToken: {
            limit: `${number}` | `${number}.${number}`;
            symbol?: string | undefined;
        } | null;
        permissions: {
            calls: readonly ({
                signature: string;
                to: `0x${string}`;
            } | {
                signature: string;
            } | {
                to: `0x${string}`;
            })[];
            signatureVerification?: {
                addresses: readonly `0x${string}`[];
            } | undefined;
            spend?: readonly {
                limit: `0x${string}`;
                period: "minute" | "hour" | "day" | "week" | "month" | "year";
                token?: `0x${string}` | undefined;
            }[] | undefined;
        };
        address?: `0x${string}` | undefined;
        chainId?: `0x${string}` | undefined;
        key?: {
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
        } | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        address: `0x${string}`;
        expiry: number;
        id: `0x${string}`;
        key: {
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
        };
        permissions: {
            calls: readonly ({
                signature: string;
                to: `0x${string}`;
            } | {
                signature: string;
            } | {
                to: `0x${string}`;
            })[];
            signatureVerification?: {
                addresses: readonly `0x${string}`[];
            } | undefined;
            spend?: readonly {
                limit: `0x${string}`;
                period: "minute" | "hour" | "day" | "week" | "month" | "year";
                token?: `0x${string}` | undefined;
            }[] | undefined;
        };
        capabilities?: any;
        chainId?: `0x${string}` | undefined;
    };
} | {
    method: "wallet_prepareUpgradeAccount";
    params: readonly [{
        address: `0x${string}`;
        capabilities?: {
            label?: string | undefined;
            createAccount?: boolean | {
                chainId?: `0x${string}` | undefined;
                label?: string | undefined;
            } | undefined;
            email?: boolean | undefined;
            grantAdmins?: readonly {
                publicKey: `0x${string}`;
                type: "address" | "p256" | "secp256k1" | "webauthn-p256";
            }[] | undefined;
            grantPermissions?: {
                expiry: number;
                feeToken: {
                    limit: `${number}` | `${number}.${number}`;
                    symbol?: string | undefined;
                } | null;
                permissions: {
                    calls: readonly ({
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                    } | {
                        to: `0x${string}`;
                    })[];
                    signatureVerification?: {
                        addresses: readonly `0x${string}`[];
                    } | undefined;
                    spend?: readonly {
                        limit: `0x${string}`;
                        period: "minute" | "hour" | "day" | "week" | "month" | "year";
                        token?: `0x${string}` | undefined;
                    }[] | undefined;
                };
                address?: `0x${string}` | undefined;
                chainId?: `0x${string}` | undefined;
                key?: {
                    publicKey: `0x${string}`;
                    type: "address" | "p256" | "secp256k1" | "webauthn-p256";
                } | undefined;
            } | undefined;
            preCalls?: readonly {
                context: unknown;
                signature: `0x${string}`;
            }[] | undefined;
            selectAccount?: boolean | {
                address: `0x${string}`;
                key?: {
                    publicKey: `0x${string}`;
                    credentialId?: string | undefined;
                } | undefined;
            } | undefined;
            signInWithEthereum?: {
                nonce: string;
                chainId?: number | undefined;
                domain?: string | undefined;
                expirationTime?: Date | undefined;
                issuedAt?: Date | undefined;
                notBefore?: Date | undefined;
                requestId?: string | undefined;
                resources?: readonly string[] | undefined;
                scheme?: string | undefined;
                statement?: string | undefined;
                uri?: string | undefined;
                version?: "1" | undefined;
            } | {
                authUrl: string | {
                    logout: string;
                    nonce: string;
                    verify: string;
                };
                chainId?: `0x${string}` | undefined;
                domain?: string | undefined;
                expirationTime?: Date | undefined;
                issuedAt?: Date | undefined;
                notBefore?: Date | undefined;
                requestId?: string | undefined;
                resources?: readonly string[] | undefined;
                scheme?: string | undefined;
                statement?: string | undefined;
                uri?: string | undefined;
                version?: "1" | undefined;
            } | undefined;
        } | undefined;
        chainId?: `0x${string}` | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        context: unknown;
        digests: {
            auth: `0x${string}`;
            exec: `0x${string}`;
        };
    };
} | {
    method: "wallet_upgradeAccount";
    params: readonly [{
        context: unknown;
        signatures: {
            auth: `0x${string}`;
            exec: `0x${string}`;
        };
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        address: `0x${string}`;
        capabilities?: {
            admins?: readonly {
                id: `0x${string}`;
                publicKey: `0x${string}`;
                type: "address" | "p256" | "secp256k1" | "webauthn-p256";
                credentialId?: string | undefined;
                privateKey?: any;
            }[] | undefined;
            permissions?: readonly {
                address: `0x${string}`;
                expiry: number;
                id: `0x${string}`;
                key: {
                    publicKey: `0x${string}`;
                    type: "address" | "p256" | "secp256k1" | "webauthn-p256";
                };
                permissions: {
                    calls: readonly ({
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                    } | {
                        to: `0x${string}`;
                    })[];
                    signatureVerification?: {
                        addresses: readonly `0x${string}`[];
                    } | undefined;
                    spend?: readonly {
                        limit: `0x${string}`;
                        period: "minute" | "hour" | "day" | "week" | "month" | "year";
                        token?: `0x${string}` | undefined;
                    }[] | undefined;
                };
                chainId?: `0x${string}` | undefined;
            }[] | undefined;
        } | undefined;
    };
} | {
    method: "wallet_getAdmins";
    params?: readonly [{
        address?: `0x${string}` | undefined;
        chainId?: `0x${string}` | undefined;
    }] | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        address: `0x${string}`;
        chainId: `0x${string}`;
        keys: readonly {
            id: `0x${string}`;
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
            credentialId?: string | undefined;
            privateKey?: any;
        }[];
    };
} | {
    method: "wallet_getAccountVersion";
    params?: readonly [{
        address?: `0x${string}` | undefined;
    }] | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        current: string;
        latest: string;
    };
} | {
    method: "wallet_getPermissions";
    params?: readonly [{
        address?: `0x${string}` | undefined;
        chainIds?: readonly `0x${string}`[] | undefined;
    }] | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly {
        address: `0x${string}`;
        expiry: number;
        id: `0x${string}`;
        key: {
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
        };
        permissions: {
            calls: readonly ({
                signature: string;
                to: `0x${string}`;
            } | {
                signature: string;
            } | {
                to: `0x${string}`;
            })[];
            signatureVerification?: {
                addresses: readonly `0x${string}`[];
            } | undefined;
            spend?: readonly {
                limit: `0x${string}`;
                period: "minute" | "hour" | "day" | "week" | "month" | "year";
                token?: `0x${string}` | undefined;
            }[] | undefined;
        };
        chainId?: `0x${string}` | undefined;
    }[];
} | {
    method: "wallet_revokeAdmin";
    params: readonly [{
        id: `0x${string}`;
        address?: `0x${string}` | undefined;
        capabilities?: {
            feeToken?: string | undefined;
        } | undefined;
        chainId?: `0x${string}` | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: undefined;
} | {
    method: "wallet_revokePermissions";
    params: readonly [{
        id: `0x${string}`;
        address?: `0x${string}` | undefined;
        capabilities?: {
            feeToken?: string | undefined;
        } | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: undefined;
} | {
    method: "wallet_connect";
    params?: readonly [{
        capabilities?: {
            createAccount?: boolean | {
                chainId?: `0x${string}` | undefined;
                label?: string | undefined;
            } | undefined;
            email?: boolean | undefined;
            grantAdmins?: readonly {
                publicKey: `0x${string}`;
                type: "address" | "p256" | "secp256k1" | "webauthn-p256";
            }[] | undefined;
            grantPermissions?: {
                expiry: number;
                feeToken: {
                    limit: `${number}` | `${number}.${number}`;
                    symbol?: string | undefined;
                } | null;
                permissions: {
                    calls: readonly ({
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                    } | {
                        to: `0x${string}`;
                    })[];
                    signatureVerification?: {
                        addresses: readonly `0x${string}`[];
                    } | undefined;
                    spend?: readonly {
                        limit: `0x${string}`;
                        period: "minute" | "hour" | "day" | "week" | "month" | "year";
                        token?: `0x${string}` | undefined;
                    }[] | undefined;
                };
                address?: `0x${string}` | undefined;
                chainId?: `0x${string}` | undefined;
                key?: {
                    publicKey: `0x${string}`;
                    type: "address" | "p256" | "secp256k1" | "webauthn-p256";
                } | undefined;
            } | undefined;
            preCalls?: readonly {
                context: unknown;
                signature: `0x${string}`;
            }[] | undefined;
            selectAccount?: boolean | {
                address: `0x${string}`;
                key?: {
                    publicKey: `0x${string}`;
                    credentialId?: string | undefined;
                } | undefined;
            } | undefined;
            signInWithEthereum?: {
                nonce: string;
                chainId?: number | undefined;
                domain?: string | undefined;
                expirationTime?: Date | undefined;
                issuedAt?: Date | undefined;
                notBefore?: Date | undefined;
                requestId?: string | undefined;
                resources?: readonly string[] | undefined;
                scheme?: string | undefined;
                statement?: string | undefined;
                uri?: string | undefined;
                version?: "1" | undefined;
            } | {
                authUrl: string | {
                    logout: string;
                    nonce: string;
                    verify: string;
                };
                chainId?: `0x${string}` | undefined;
                domain?: string | undefined;
                expirationTime?: Date | undefined;
                issuedAt?: Date | undefined;
                notBefore?: Date | undefined;
                requestId?: string | undefined;
                resources?: readonly string[] | undefined;
                scheme?: string | undefined;
                statement?: string | undefined;
                uri?: string | undefined;
                version?: "1" | undefined;
            } | undefined;
        } | undefined;
        chainIds?: readonly `0x${string}`[] | undefined;
    }] | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        accounts: readonly {
            address: `0x${string}`;
            capabilities?: {
                admins?: readonly {
                    id: `0x${string}`;
                    publicKey: `0x${string}`;
                    type: "address" | "p256" | "secp256k1" | "webauthn-p256";
                    credentialId?: string | undefined;
                }[] | undefined;
                permissions?: readonly {
                    address: `0x${string}`;
                    expiry: number;
                    id: `0x${string}`;
                    key: {
                        publicKey: `0x${string}`;
                        type: "address" | "p256" | "secp256k1" | "webauthn-p256";
                    };
                    permissions: {
                        calls: readonly ({
                            signature: string;
                            to: `0x${string}`;
                        } | {
                            signature: string;
                        } | {
                            to: `0x${string}`;
                        })[];
                        signatureVerification?: {
                            addresses: readonly `0x${string}`[];
                        } | undefined;
                        spend?: readonly {
                            limit: `0x${string}`;
                            period: "minute" | "hour" | "day" | "week" | "month" | "year";
                            token?: `0x${string}` | undefined;
                        }[] | undefined;
                    };
                    chainId?: `0x${string}` | undefined;
                }[] | undefined;
                preCalls?: readonly {
                    context: unknown;
                    signature: `0x${string}`;
                }[] | undefined;
                signInWithEthereum?: {
                    message: string;
                    signature: `0x${string}`;
                    token?: string | undefined;
                } | undefined;
            } | undefined;
        }[];
        chainIds: readonly `0x${string}`[];
    };
} | {
    method: "wallet_disconnect";
    params?: unknown;
    id: number;
    jsonrpc: "2.0";
    _returnType: undefined;
} | {
    method: "wallet_getCapabilities";
    params?: readonly [`0x${string}` | undefined] | readonly [`0x${string}` | undefined, readonly `0x${string}`[]] | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: Record<`0x${string}`, {
        atomic: {
            status: "supported" | "unsupported";
        };
        feeToken: {
            supported: boolean;
            tokens: readonly {
                address: `0x${string}`;
                decimals: number;
                symbol: string;
                uid: string;
                feeToken?: boolean | undefined;
                interop?: boolean | undefined;
                nativeRate?: `0x${string}` | undefined;
            }[];
        };
        merchant: {
            supported: boolean;
        };
        permissions: {
            supported: boolean;
        };
        requiredFunds: {
            supported: boolean;
            tokens: readonly {
                address: `0x${string}`;
                decimals: number;
                symbol: string;
                uid: string;
                feeToken?: boolean | undefined;
                interop?: boolean | undefined;
                nativeRate?: `0x${string}` | undefined;
            }[];
        };
    }>;
} | {
    method: "wallet_getKeys";
    params: readonly [{
        address: `0x${string}`;
        chainIds?: readonly `0x${string}`[] | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly {
        expiry: `0x${string}`;
        hash: `0x${string}`;
        id: `0x${string}`;
        publicKey: `0x${string}`;
        role: "admin" | "session";
        type: "address" | "p256" | "secp256k1" | "webauthn-p256";
        feeToken?: {
            limit: `${number}` | `${number}.${number}`;
            symbol?: string | undefined;
        } | null | undefined;
        permissions?: {
            calls?: readonly ({
                signature: string;
                to: `0x${string}`;
            } | {
                signature: string;
            } | {
                to: `0x${string}`;
            })[] | undefined;
            signatureVerification?: {
                addresses: readonly `0x${string}`[];
            } | undefined;
            spend?: readonly {
                limit: `0x${string}`;
                period: "minute" | "hour" | "day" | "week" | "month" | "year";
                token?: `0x${string}` | undefined;
            }[] | undefined;
        } | undefined;
        chainId?: `0x${string}` | undefined;
        prehash?: boolean | undefined;
    }[];
} | {
    method: "wallet_getAssets";
    params: readonly [{
        account: `0x${string}`;
        assetFilter?: Record<`0x${string}`, readonly {
            address: `0x${string}` | "native";
            type: string;
        }[]> | undefined;
        assetTypeFilter?: readonly string[] | undefined;
        chainFilter?: readonly `0x${string}`[] | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: Record<string, readonly ({
        address: `0x${string}`;
        balance: `0x${string}`;
        metadata: {
            decimals: number;
            name: string;
            symbol: string;
            fiat?: {
                currency: string;
                value: string;
            } | null | undefined;
        } | null;
        type: "erc20";
    } | {
        address: "native" | null;
        balance: `0x${string}`;
        metadata: {
            decimals: number;
            fiat?: {
                currency: string;
                value: string;
            } | null | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
        } | null;
        type: "native";
    })[]>;
} | {
    method: "wallet_getCallsStatus";
    params: [`0x${string}`];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        atomic: boolean;
        chainId: `0x${string}`;
        id: string;
        status: number;
        version: string;
        receipts?: readonly {
            blockHash: `0x${string}`;
            blockNumber: `0x${string}`;
            gasUsed: `0x${string}`;
            logs: readonly {
                address: `0x${string}`;
                data: `0x${string}`;
                topics: readonly `0x${string}`[];
            }[];
            status: `0x${string}`;
            transactionHash: `0x${string}`;
        }[] | undefined;
    };
} | {
    method: "wallet_prepareCalls";
    params: readonly [{
        calls: readonly {
            to: `0x${string}`;
            data?: `0x${string}` | undefined;
            value?: `0x${string}` | undefined;
        }[];
        capabilities?: {
            feeToken?: string | undefined;
            merchantUrl?: string | undefined;
            permissions?: {
                id?: `0x${string}` | null | undefined;
            } | undefined;
            preCalls?: readonly {
                context: unknown;
                signature: `0x${string}`;
            }[] | undefined;
            requiredFunds?: readonly ({
                address: `0x${string}`;
                value: `0x${string}`;
            } | {
                symbol: string;
                value: `${number}` | `${number}.${number}`;
            })[] | undefined;
        } | undefined;
        chainId?: `0x${string}` | undefined;
        from?: `0x${string}` | undefined;
        key?: {
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
            prehash?: boolean | undefined;
        } | undefined;
        version?: string | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        chainId: `0x${string}`;
        context: {
            account: {
                address: `0x${string}`;
            };
            calls: readonly {
                to: `0x${string}`;
                data?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
            }[];
            nonce: `0x${string}`;
            quote?: {
                hash?: `0x${string}` | undefined;
                r?: `0x${string}` | undefined;
                s?: `0x${string}` | undefined;
                v?: `0x${string}` | undefined;
                yParity?: `0x${string}` | undefined;
                multiChainRoot?: `0x${string}` | null | undefined;
                quotes?: readonly {
                    chainId: `0x${string}`;
                    ethPrice: `0x${string}`;
                    extraPayment: `0x${string}`;
                    feeTokenDeficit: `0x${string}`;
                    intent: {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentAmount: `0x${string}`;
                        paymentMaxAmount: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                    } | {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        prePaymentAmount: `0x${string}`;
                        prePaymentMaxAmount: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                        totalPaymentAmount: `0x${string}`;
                        totalPaymentMaxAmount: `0x${string}`;
                    };
                    nativeFeeEstimate: {
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                    };
                    orchestrator: `0x${string}`;
                    paymentTokenDecimals: number;
                    txGas: `0x${string}`;
                    additionalAuthorization?: {
                        address: `0x${string}`;
                        chainId: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        yParity: `0x${string}`;
                    } | null | undefined;
                    assetDeficits?: {
                        address: `0x${string}` | null;
                        deficit: `0x${string}`;
                        required: `0x${string}`;
                        decimals?: number | undefined;
                        fiat?: {
                            currency: string;
                            value: string;
                        } | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                    }[] | undefined;
                    authorizationAddress?: `0x${string}` | null | undefined;
                }[] | undefined;
                ttl?: number | undefined;
            } | undefined;
        };
        digest: `0x${string}`;
        key: {
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
            prehash?: boolean | undefined;
        };
        typedData: {
            domain: Record<string, never> | {
                chainId: `0x${string}`;
                name: string;
                verifyingContract: `0x${string}`;
                version: string;
            };
            message: Record<string, unknown>;
            primaryType: string;
            types: Record<string, unknown>;
        };
        capabilities?: {
            quote?: {
                hash: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                quotes: readonly {
                    chainId: `0x${string}`;
                    ethPrice: `0x${string}`;
                    extraPayment: `0x${string}`;
                    feeTokenDeficit: `0x${string}`;
                    intent: {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentAmount: `0x${string}`;
                        paymentMaxAmount: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                    } | {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        prePaymentAmount: `0x${string}`;
                        prePaymentMaxAmount: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                        totalPaymentAmount: `0x${string}`;
                        totalPaymentMaxAmount: `0x${string}`;
                    };
                    nativeFeeEstimate: {
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                    };
                    orchestrator: `0x${string}`;
                    paymentTokenDecimals: number;
                    txGas: `0x${string}`;
                    additionalAuthorization?: {
                        address: `0x${string}`;
                        chainId: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        yParity: `0x${string}`;
                    } | null | undefined;
                    assetDeficits?: {
                        address: `0x${string}` | null;
                        deficit: `0x${string}`;
                        required: `0x${string}`;
                        decimals?: number | undefined;
                        fiat?: {
                            currency: string;
                            value: string;
                        } | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                    }[] | undefined;
                    authorizationAddress?: `0x${string}` | null | undefined;
                }[];
                ttl: number;
                v?: `0x${string}` | undefined;
                yParity?: `0x${string}` | undefined;
                multiChainRoot?: `0x${string}` | null | undefined;
            } | undefined;
            assetDiffs?: Record<`0x${string}`, readonly (readonly [`0x${string}`, readonly ({
                direction: "incoming" | "outgoing";
                symbol: string;
                type: "erc20";
                value: `0x${string}`;
                address?: `0x${string}` | null | undefined;
                decimals?: number | null | undefined;
                fiat?: {
                    currency: string;
                    value: string;
                } | undefined;
                name?: string | null | undefined;
            } | {
                direction: "incoming" | "outgoing";
                symbol: string;
                type: "erc721";
                uri: string;
                value: `0x${string}`;
                address?: `0x${string}` | null | undefined;
                fiat?: {
                    currency: string;
                    value: string;
                } | undefined;
                name?: string | null | undefined;
            } | {
                address: null;
                direction: "incoming" | "outgoing";
                symbol: string;
                type: null;
                value: `0x${string}`;
                decimals?: number | null | undefined;
                fiat?: {
                    currency: string;
                    value: string;
                } | undefined;
            })[]])[]> | undefined;
            authorizeKeys?: readonly {
                hash: `0x${string}`;
                permissions: readonly ({
                    selector: `0x${string}`;
                    to: `0x${string}`;
                    type: "call";
                } | {
                    limit: `0x${string}`;
                    period: "minute" | "hour" | "day" | "week" | "month" | "year";
                    type: "spend";
                    token?: `0x${string}` | null | undefined;
                })[];
                expiry: `0x${string}`;
                publicKey: `0x${string}`;
                role: "admin" | "normal";
                type: "p256" | "secp256k1" | "webauthnp256";
                prehash?: boolean | undefined;
            }[] | null | undefined;
            feePayerDigest?: `0x${string}` | undefined;
            feeSignature?: `0x${string}` | undefined;
            feeTotals?: Record<`0x${string}`, {
                currency: string;
                value: string;
            }> | undefined;
            revokeKeys?: readonly {
                hash: `0x${string}`;
            }[] | null | undefined;
        } | undefined;
    };
} | {
    method: "wallet_sendPreparedCalls";
    params: readonly [{
        chainId: `0x${string}`;
        context: {
            account: {
                address: `0x${string}`;
            };
            calls: readonly {
                to: `0x${string}`;
                data?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
            }[];
            nonce: `0x${string}`;
            quote?: {
                hash?: `0x${string}` | undefined;
                r?: `0x${string}` | undefined;
                s?: `0x${string}` | undefined;
                v?: `0x${string}` | undefined;
                yParity?: `0x${string}` | undefined;
                multiChainRoot?: `0x${string}` | null | undefined;
                quotes?: readonly {
                    chainId: `0x${string}`;
                    ethPrice: `0x${string}`;
                    extraPayment: `0x${string}`;
                    feeTokenDeficit: `0x${string}`;
                    intent: {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentAmount: `0x${string}`;
                        paymentMaxAmount: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                    } | {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        prePaymentAmount: `0x${string}`;
                        prePaymentMaxAmount: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                        totalPaymentAmount: `0x${string}`;
                        totalPaymentMaxAmount: `0x${string}`;
                    };
                    nativeFeeEstimate: {
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                    };
                    orchestrator: `0x${string}`;
                    paymentTokenDecimals: number;
                    txGas: `0x${string}`;
                    additionalAuthorization?: {
                        address: `0x${string}`;
                        chainId: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        yParity: `0x${string}`;
                    } | null | undefined;
                    assetDeficits?: {
                        address: `0x${string}` | null;
                        deficit: `0x${string}`;
                        required: `0x${string}`;
                        decimals?: number | undefined;
                        fiat?: {
                            currency: string;
                            value: string;
                        } | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                    }[] | undefined;
                    authorizationAddress?: `0x${string}` | null | undefined;
                }[] | undefined;
                ttl?: number | undefined;
            } | undefined;
        };
        key: {
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
            prehash?: boolean | undefined;
        };
        signature: `0x${string}`;
        capabilities?: {
            quote?: {
                hash: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                quotes: readonly {
                    chainId: `0x${string}`;
                    ethPrice: `0x${string}`;
                    extraPayment: `0x${string}`;
                    feeTokenDeficit: `0x${string}`;
                    intent: {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentAmount: `0x${string}`;
                        paymentMaxAmount: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                    } | {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        prePaymentAmount: `0x${string}`;
                        prePaymentMaxAmount: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                        totalPaymentAmount: `0x${string}`;
                        totalPaymentMaxAmount: `0x${string}`;
                    };
                    nativeFeeEstimate: {
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                    };
                    orchestrator: `0x${string}`;
                    paymentTokenDecimals: number;
                    txGas: `0x${string}`;
                    additionalAuthorization?: {
                        address: `0x${string}`;
                        chainId: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        yParity: `0x${string}`;
                    } | null | undefined;
                    assetDeficits?: {
                        address: `0x${string}` | null;
                        deficit: `0x${string}`;
                        required: `0x${string}`;
                        decimals?: number | undefined;
                        fiat?: {
                            currency: string;
                            value: string;
                        } | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                    }[] | undefined;
                    authorizationAddress?: `0x${string}` | null | undefined;
                }[];
                ttl: number;
                v?: `0x${string}` | undefined;
                yParity?: `0x${string}` | undefined;
                multiChainRoot?: `0x${string}` | null | undefined;
            } | undefined;
            assetDiffs?: Record<`0x${string}`, readonly (readonly [`0x${string}`, readonly ({
                direction: "incoming" | "outgoing";
                symbol: string;
                type: "erc20";
                value: `0x${string}`;
                address?: `0x${string}` | null | undefined;
                decimals?: number | null | undefined;
                fiat?: {
                    currency: string;
                    value: string;
                } | undefined;
                name?: string | null | undefined;
            } | {
                direction: "incoming" | "outgoing";
                symbol: string;
                type: "erc721";
                uri: string;
                value: `0x${string}`;
                address?: `0x${string}` | null | undefined;
                fiat?: {
                    currency: string;
                    value: string;
                } | undefined;
                name?: string | null | undefined;
            } | {
                address: null;
                direction: "incoming" | "outgoing";
                symbol: string;
                type: null;
                value: `0x${string}`;
                decimals?: number | null | undefined;
                fiat?: {
                    currency: string;
                    value: string;
                } | undefined;
            })[]])[]> | undefined;
            authorizeKeys?: readonly {
                hash: `0x${string}`;
                permissions: readonly ({
                    selector: `0x${string}`;
                    to: `0x${string}`;
                    type: "call";
                } | {
                    limit: `0x${string}`;
                    period: "minute" | "hour" | "day" | "week" | "month" | "year";
                    type: "spend";
                    token?: `0x${string}` | null | undefined;
                })[];
                expiry: `0x${string}`;
                publicKey: `0x${string}`;
                role: "admin" | "normal";
                type: "p256" | "secp256k1" | "webauthnp256";
                prehash?: boolean | undefined;
            }[] | null | undefined;
            feePayerDigest?: `0x${string}` | undefined;
            feeSignature?: `0x${string}` | undefined;
            feeTotals?: Record<`0x${string}`, {
                currency: string;
                value: string;
            }> | undefined;
            revokeKeys?: readonly {
                hash: `0x${string}`;
            }[] | null | undefined;
        } | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly {
        id: `0x${string}`;
        capabilities?: Record<string, unknown> | undefined;
    }[];
} | {
    method: "wallet_sendCalls";
    params: readonly [{
        calls: readonly {
            to: `0x${string}`;
            data?: `0x${string}` | undefined;
            value?: `0x${string}` | undefined;
        }[];
        version?: string | undefined;
        chainId?: `0x${string}` | undefined;
        from?: `0x${string}` | undefined;
        capabilities?: {
            feeToken?: string | undefined;
            merchantUrl?: string | undefined;
            permissions?: {
                id?: `0x${string}` | null | undefined;
            } | undefined;
            preCalls?: readonly {
                context: unknown;
                signature: `0x${string}`;
            }[] | undefined;
            requiredFunds?: readonly ({
                address: `0x${string}`;
                value: `0x${string}`;
            } | {
                symbol: string;
                value: `${number}` | `${number}.${number}`;
            })[] | undefined;
        } | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        id: `0x${string}`;
    };
} | {
    method: "wallet_switchEthereumChain";
    params: readonly [{
        chainId: `0x${string}`;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: undefined;
} | {
    method: "wallet_verifySignature";
    params: readonly [{
        address: `0x${string}`;
        digest: `0x${string}`;
        signature: `0x${string}`;
        chainId?: `0x${string}` | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        address: `0x${string}`;
        chainId: `0x${string}`;
        valid: boolean;
        proof?: unknown;
    };
}))[];
/**
 * Hook to access and subscribe to the next pending request.
 *
 * @param porto - Porto instance.
 * @returns Request.
 */
export declare function useRequest<chains extends readonly [Chains.Chain, ...Chains.Chain[]]>(porto: Pick<Remote.Porto<chains>, '_internal'>): ({
    method: string;
    params?: unknown;
    id: number;
    jsonrpc: "2.0";
    _returnType: unknown;
} & {
    _internal?: unknown;
} & ({
    method: "eth_accounts";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly `0x${string}`[];
} | {
    method: "eth_blobBaseFee";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_blockNumber";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_call";
    params: [transaction: import("ox/TransactionRequest").Rpc] | [transaction: import("ox/TransactionRequest").Rpc, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier] | [transaction: import("ox/TransactionRequest").Rpc, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier, stateOverrides: import("ox/StateOverrides").Rpc];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_chainId";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_coinbase";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_estimateGas";
    params: [transaction: import("ox/TransactionRequest").Rpc] | [transaction: import("ox/TransactionRequest").Rpc, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier] | [transaction: import("ox/TransactionRequest").Rpc, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier, stateOverrides: import("ox/StateOverrides").Rpc];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_feeHistory";
    params: [blockCount: import("ox/Hex").Hex, newestBlock: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag, rewardPercentiles: number[] | undefined];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        baseFeePerGas: `0x${string}`[];
        gasUsedRatio: number[];
        oldestBlock: `0x${string}`;
        reward?: `0x${string}`[][] | undefined;
    };
} | {
    method: "eth_gasPrice";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getBalance";
    params: [address: Address.Address, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getBlockByHash";
    params: [hash: import("ox/Hex").Hex, includeTransactionObjects: boolean];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        baseFeePerGas?: `0x${string}` | undefined;
        blobGasUsed?: `0x${string}` | undefined;
        difficulty?: `0x${string}` | undefined;
        excessBlobGas?: `0x${string}` | undefined;
        extraData?: `0x${string}` | undefined;
        gasLimit: `0x${string}`;
        gasUsed: `0x${string}`;
        hash: `0x${string}`;
        logsBloom: `0x${string}`;
        miner: Address.Address;
        mixHash: import("ox/Hex").Hex;
        nonce: `0x${string}`;
        number: `0x${string}`;
        parentBeaconBlockRoot?: `0x${string}` | undefined;
        parentHash: import("ox/Hex").Hex;
        receiptsRoot: import("ox/Hex").Hex;
        sealFields?: readonly `0x${string}`[] | undefined;
        sha3Uncles: import("ox/Hex").Hex;
        size: `0x${string}`;
        stateRoot: import("ox/Hex").Hex;
        timestamp: `0x${string}`;
        totalDifficulty?: `0x${string}` | undefined;
        transactions: readonly `0x${string}`[] | readonly import("ox/Transaction").Rpc<false>[];
        transactionsRoot: import("ox/Hex").Hex;
        uncles: readonly import("ox/Hex").Hex[];
        withdrawals?: readonly import("ox/Withdrawal").Withdrawal<`0x${string}`, `0x${string}`>[] | undefined;
        withdrawalsRoot?: `0x${string}` | undefined;
    } | null;
} | {
    method: "eth_getBlockByNumber";
    params: [block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag, includeTransactionObjects: boolean];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        baseFeePerGas?: `0x${string}` | undefined;
        blobGasUsed?: `0x${string}` | undefined;
        difficulty?: `0x${string}` | undefined;
        excessBlobGas?: `0x${string}` | undefined;
        extraData?: `0x${string}` | undefined;
        gasLimit: `0x${string}`;
        gasUsed: `0x${string}`;
        hash: `0x${string}`;
        logsBloom: `0x${string}`;
        miner: Address.Address;
        mixHash: import("ox/Hex").Hex;
        nonce: `0x${string}`;
        number: `0x${string}`;
        parentBeaconBlockRoot?: `0x${string}` | undefined;
        parentHash: import("ox/Hex").Hex;
        receiptsRoot: import("ox/Hex").Hex;
        sealFields?: readonly `0x${string}`[] | undefined;
        sha3Uncles: import("ox/Hex").Hex;
        size: `0x${string}`;
        stateRoot: import("ox/Hex").Hex;
        timestamp: `0x${string}`;
        totalDifficulty?: `0x${string}` | undefined;
        transactions: readonly `0x${string}`[] | readonly import("ox/Transaction").Rpc<false>[];
        transactionsRoot: import("ox/Hex").Hex;
        uncles: readonly import("ox/Hex").Hex[];
        withdrawals?: readonly import("ox/Withdrawal").Withdrawal<`0x${string}`, `0x${string}`>[] | undefined;
        withdrawalsRoot?: `0x${string}` | undefined;
    } | null;
} | {
    method: "eth_getBlockTransactionCountByHash";
    params: [hash: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getBlockTransactionCountByNumber";
    params: [block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getCode";
    params: [address: Address.Address, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getFilterChanges";
    params: [filterId: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly `0x${string}`[] | readonly {
        address: Address.Address;
        blockHash: `0x${string}`;
        blockNumber: `0x${string}`;
        data: import("ox/Hex").Hex;
        logIndex: `0x${string}`;
        topics: [import("ox/Hex").Hex, ...(readonly import("ox/Hex").Hex[])];
        transactionHash: `0x${string}`;
        transactionIndex: `0x${string}`;
        removed: boolean;
    }[];
} | {
    method: "eth_getFilterLogs";
    params: [filterId: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly {
        address: Address.Address;
        blockHash: `0x${string}`;
        blockNumber: `0x${string}`;
        data: import("ox/Hex").Hex;
        logIndex: `0x${string}`;
        topics: [import("ox/Hex").Hex, ...(readonly import("ox/Hex").Hex[])];
        transactionHash: `0x${string}`;
        transactionIndex: `0x${string}`;
        removed: boolean;
    }[];
} | {
    method: "eth_getLogs";
    params: [filter: import("ox/Filter").Rpc];
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly {
        address: Address.Address;
        blockHash: `0x${string}`;
        blockNumber: `0x${string}`;
        data: import("ox/Hex").Hex;
        logIndex: `0x${string}`;
        topics: [import("ox/Hex").Hex, ...(readonly import("ox/Hex").Hex[])];
        transactionHash: `0x${string}`;
        transactionIndex: `0x${string}`;
        removed: boolean;
    }[];
} | {
    method: "eth_getProof";
    params: [address: Address.Address, storageKeys: import("ox/Hex").Hex[], block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
    id: number;
    jsonrpc: "2.0";
    _returnType: import("ox/AccountProof").Rpc;
} | {
    method: "eth_getStorageAt";
    params: [address: Address.Address, index: import("ox/Hex").Hex, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getTransactionByBlockHashAndIndex";
    params: [hash: import("ox/Hex").Hex, index: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: import("ox/Transaction").Rpc<false> | null;
} | {
    method: "eth_getTransactionByBlockNumberAndIndex";
    params: [block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag, index: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: import("ox/Transaction").Rpc<false> | null;
} | {
    method: "eth_getTransactionByHash";
    params: [hash: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: import("ox/Transaction").Rpc<false> | null;
} | {
    method: "eth_getTransactionCount";
    params: [address: Address.Address, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getTransactionReceipt";
    params: [hash: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        blobGasPrice?: `0x${string}` | undefined;
        blobGasUsed?: `0x${string}` | undefined;
        blockHash: import("ox/Hex").Hex;
        blockNumber: `0x${string}`;
        contractAddress?: `0x${string}` | null | undefined;
        cumulativeGasUsed: `0x${string}`;
        effectiveGasPrice: `0x${string}`;
        from: Address.Address;
        gasUsed: `0x${string}`;
        logs: {
            address: Address.Address;
            blockHash: `0x${string}`;
            blockNumber: `0x${string}`;
            data: import("ox/Hex").Hex;
            logIndex: `0x${string}`;
            topics: [import("ox/Hex").Hex, ...(readonly import("ox/Hex").Hex[])];
            transactionHash: `0x${string}`;
            transactionIndex: `0x${string}`;
            removed: boolean;
        }[];
        logsBloom: import("ox/Hex").Hex;
        root?: `0x${string}` | undefined;
        status: import("ox/TransactionReceipt").RpcStatus;
        to: Address.Address | null;
        transactionHash: import("ox/Hex").Hex;
        transactionIndex: `0x${string}`;
        type: import("ox/TransactionReceipt").RpcType;
    } | null;
} | {
    method: "eth_getUncleCountByBlockHash";
    params: [hash: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_getUncleCountByBlockNumber";
    params: [block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_maxPriorityFeePerGas";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_newBlockFilter";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_newFilter";
    params: [filter: import("ox/Filter").Rpc];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_newPendingTransactionFilter";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_protocolVersion";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: string;
} | {
    method: "eth_requestAccounts";
    params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly `0x${string}`[];
} | {
    method: "eth_sendRawTransaction";
    params: [serializedTransaction: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_sendTransaction";
    params: [transaction: import("ox/TransactionRequest").Rpc];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_simulateV1";
    params: [{
        blockStateCalls: readonly {
            blockOverrides?: import("viem").RpcBlockOverrides | undefined;
            calls?: readonly import("ox/TransactionRequest").Rpc[] | undefined;
            stateOverrides?: import("ox/StateOverrides").Rpc | undefined;
        }[];
        returnFullTransactions?: boolean | undefined;
        traceTransfers?: boolean | undefined;
        validation?: boolean | undefined;
    }, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly ({
        baseFeePerGas?: `0x${string}` | undefined;
        blobGasUsed?: `0x${string}` | undefined;
        difficulty?: `0x${string}` | undefined;
        excessBlobGas?: `0x${string}` | undefined;
        extraData?: `0x${string}` | undefined;
        gasLimit: `0x${string}`;
        gasUsed: `0x${string}`;
        hash: `0x${string}`;
        logsBloom: `0x${string}`;
        miner: Address.Address;
        mixHash: import("ox/Hex").Hex;
        nonce: `0x${string}`;
        number: `0x${string}`;
        parentBeaconBlockRoot?: `0x${string}` | undefined;
        parentHash: import("ox/Hex").Hex;
        receiptsRoot: import("ox/Hex").Hex;
        sealFields?: readonly `0x${string}`[] | undefined;
        sha3Uncles: import("ox/Hex").Hex;
        size: `0x${string}`;
        stateRoot: import("ox/Hex").Hex;
        timestamp: `0x${string}`;
        totalDifficulty?: `0x${string}` | undefined;
        transactions: readonly `0x${string}`[] | readonly import("ox/Transaction").Rpc<false>[];
        transactionsRoot: import("ox/Hex").Hex;
        uncles: readonly import("ox/Hex").Hex[];
        withdrawals?: readonly import("ox/Withdrawal").Withdrawal<`0x${string}`, `0x${string}`>[] | undefined;
        withdrawalsRoot?: `0x${string}` | undefined;
    } & {
        calls?: readonly {
            error?: {
                data?: import("ox/Hex").Hex | undefined;
                code: number;
                message: string;
            } | undefined;
            logs?: readonly import("ox/Log").Rpc[] | undefined;
            gasUsed: import("ox/Hex").Hex;
            returnData: import("ox/Hex").Hex;
            status: import("ox/Hex").Hex;
        }[] | undefined;
    })[];
} | {
    method: "eth_signTransaction";
    params: [request: import("ox/TransactionRequest").Rpc];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_signTypedData_v4";
    params: [address: Address.Address, message: string];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    method: "eth_uninstallFilter";
    params: [filterId: import("ox/Hex").Hex];
    id: number;
    jsonrpc: "2.0";
    _returnType: boolean;
} | {
    readonly method: "eth_requestAccounts";
    readonly params?: undefined | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly `0x${string}`[];
} | {
    readonly method: "eth_sendRawTransaction";
    readonly params: readonly [serializedTransaction: `0x${string}`];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    readonly method: "eth_sendTransaction";
    readonly params: readonly [transaction: Readonly<{
        accessList?: readonly Readonly<{
            address: Address.Address;
            storageKeys: readonly import("ox/Hex").Hex[];
        }>[] | undefined;
        authorizationList?: readonly Readonly<{
            address: Address.Address;
            chainId: `0x${string}`;
            nonce: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            yParity: `0x${string}`;
        }>[] | undefined;
        blobVersionedHashes?: readonly import("ox/Hex").Hex[];
        blobs?: readonly `0x${string}`[] | undefined;
        chainId?: `0x${string}` | undefined;
        data?: `0x${string}` | undefined;
        input?: `0x${string}` | undefined;
        from?: `0x${string}` | undefined;
        gas?: `0x${string}` | undefined;
        gasPrice?: `0x${string}` | undefined;
        maxFeePerBlobGas?: `0x${string}` | undefined;
        maxFeePerGas?: `0x${string}` | undefined;
        maxPriorityFeePerGas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        type?: string | undefined;
        value?: `0x${string}` | undefined;
    }>];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    readonly method: "eth_signTransaction";
    readonly params: readonly [request: Readonly<{
        accessList?: readonly Readonly<{
            address: Address.Address;
            storageKeys: readonly import("ox/Hex").Hex[];
        }>[] | undefined;
        authorizationList?: readonly Readonly<{
            address: Address.Address;
            chainId: `0x${string}`;
            nonce: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            yParity: `0x${string}`;
        }>[] | undefined;
        blobVersionedHashes?: readonly import("ox/Hex").Hex[];
        blobs?: readonly `0x${string}`[] | undefined;
        chainId?: `0x${string}` | undefined;
        data?: `0x${string}` | undefined;
        input?: `0x${string}` | undefined;
        from?: `0x${string}` | undefined;
        gas?: `0x${string}` | undefined;
        gasPrice?: `0x${string}` | undefined;
        maxFeePerBlobGas?: `0x${string}` | undefined;
        maxFeePerGas?: `0x${string}` | undefined;
        maxPriorityFeePerGas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        type?: string | undefined;
        value?: `0x${string}` | undefined;
    }>];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    readonly method: "eth_signTypedData_v4";
    readonly params: readonly [address: `0x${string}`, message: string];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    readonly method: "personal_sign";
    readonly params: readonly [data: `0x${string}`, address: `0x${string}`];
    id: number;
    jsonrpc: "2.0";
    _returnType: `0x${string}`;
} | {
    readonly method: "wallet_addEthereumChain";
    readonly params: readonly [chain: Readonly<{
        chainId: string;
        chainName: string;
        nativeCurrency?: Readonly<{
            name: string;
            symbol: string;
            decimals: number;
        }> | undefined;
        rpcUrls: readonly string[];
        blockExplorerUrls?: readonly string[] | undefined;
        iconUrls?: readonly string[] | undefined;
    }>];
    id: number;
    jsonrpc: "2.0";
    _returnType: null;
} | {
    readonly method: "wallet_requestPermissions";
    readonly params: readonly [permissions: Readonly<{
        eth_accounts: Readonly<{
            [x: string]: any;
        }>;
    }>];
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly Readonly<{
        caveats: readonly Readonly<{
            type: string;
            value: any;
        }>[];
        date: number;
        id: string;
        invoker: `http://${string}` | `https://${string}`;
        parentCapability: "eth_accounts" | string;
    }>[];
} | {
    readonly method: "wallet_showCallsStatus";
    readonly params: readonly [string];
    id: number;
    jsonrpc: "2.0";
    _returnType: undefined;
} | {
    readonly method: "wallet_watchAsset";
    readonly params: readonly [Readonly<{
        type: "ERC20";
        options: Readonly<{
            address: string;
            symbol: string;
            decimals: number;
            image?: string | undefined | undefined;
        }>;
    }>];
    id: number;
    jsonrpc: "2.0";
    _returnType: boolean;
} | {
    method: "account_verifyEmail";
    params: readonly [{
        chainId: `0x${string}`;
        email: string;
        token: string;
        walletAddress: `0x${string}`;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: null;
} | {
    method: "wallet_addFunds";
    params: readonly [{
        address?: `0x${string}` | undefined;
        chainId?: `0x${string}` | undefined;
        token?: `0x${string}` | undefined;
        value?: string | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        id: `0x${string}`;
    };
} | {
    method: "porto_ping";
    params?: undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: "pong";
} | {
    method: "wallet_grantAdmin";
    params: readonly [{
        key: {
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
        };
        address?: `0x${string}` | undefined;
        capabilities?: {
            feeToken?: string | undefined;
        } | undefined;
        chainId?: `0x${string}` | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        address: `0x${string}`;
        chainId: `0x${string}`;
        key: {
            id: `0x${string}`;
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
            credentialId?: string | undefined;
            privateKey?: any;
        };
    };
} | {
    method: "wallet_grantPermissions";
    params: readonly [{
        expiry: number;
        feeToken: {
            limit: `${number}` | `${number}.${number}`;
            symbol?: string | undefined;
        } | null;
        permissions: {
            calls: readonly ({
                signature: string;
                to: `0x${string}`;
            } | {
                signature: string;
            } | {
                to: `0x${string}`;
            })[];
            signatureVerification?: {
                addresses: readonly `0x${string}`[];
            } | undefined;
            spend?: readonly {
                limit: `0x${string}`;
                period: "minute" | "hour" | "day" | "week" | "month" | "year";
                token?: `0x${string}` | undefined;
            }[] | undefined;
        };
        address?: `0x${string}` | undefined;
        chainId?: `0x${string}` | undefined;
        key?: {
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
        } | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        address: `0x${string}`;
        expiry: number;
        id: `0x${string}`;
        key: {
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
        };
        permissions: {
            calls: readonly ({
                signature: string;
                to: `0x${string}`;
            } | {
                signature: string;
            } | {
                to: `0x${string}`;
            })[];
            signatureVerification?: {
                addresses: readonly `0x${string}`[];
            } | undefined;
            spend?: readonly {
                limit: `0x${string}`;
                period: "minute" | "hour" | "day" | "week" | "month" | "year";
                token?: `0x${string}` | undefined;
            }[] | undefined;
        };
        capabilities?: any;
        chainId?: `0x${string}` | undefined;
    };
} | {
    method: "wallet_prepareUpgradeAccount";
    params: readonly [{
        address: `0x${string}`;
        capabilities?: {
            label?: string | undefined;
            createAccount?: boolean | {
                chainId?: `0x${string}` | undefined;
                label?: string | undefined;
            } | undefined;
            email?: boolean | undefined;
            grantAdmins?: readonly {
                publicKey: `0x${string}`;
                type: "address" | "p256" | "secp256k1" | "webauthn-p256";
            }[] | undefined;
            grantPermissions?: {
                expiry: number;
                feeToken: {
                    limit: `${number}` | `${number}.${number}`;
                    symbol?: string | undefined;
                } | null;
                permissions: {
                    calls: readonly ({
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                    } | {
                        to: `0x${string}`;
                    })[];
                    signatureVerification?: {
                        addresses: readonly `0x${string}`[];
                    } | undefined;
                    spend?: readonly {
                        limit: `0x${string}`;
                        period: "minute" | "hour" | "day" | "week" | "month" | "year";
                        token?: `0x${string}` | undefined;
                    }[] | undefined;
                };
                address?: `0x${string}` | undefined;
                chainId?: `0x${string}` | undefined;
                key?: {
                    publicKey: `0x${string}`;
                    type: "address" | "p256" | "secp256k1" | "webauthn-p256";
                } | undefined;
            } | undefined;
            preCalls?: readonly {
                context: unknown;
                signature: `0x${string}`;
            }[] | undefined;
            selectAccount?: boolean | {
                address: `0x${string}`;
                key?: {
                    publicKey: `0x${string}`;
                    credentialId?: string | undefined;
                } | undefined;
            } | undefined;
            signInWithEthereum?: {
                nonce: string;
                chainId?: number | undefined;
                domain?: string | undefined;
                expirationTime?: Date | undefined;
                issuedAt?: Date | undefined;
                notBefore?: Date | undefined;
                requestId?: string | undefined;
                resources?: readonly string[] | undefined;
                scheme?: string | undefined;
                statement?: string | undefined;
                uri?: string | undefined;
                version?: "1" | undefined;
            } | {
                authUrl: string | {
                    logout: string;
                    nonce: string;
                    verify: string;
                };
                chainId?: `0x${string}` | undefined;
                domain?: string | undefined;
                expirationTime?: Date | undefined;
                issuedAt?: Date | undefined;
                notBefore?: Date | undefined;
                requestId?: string | undefined;
                resources?: readonly string[] | undefined;
                scheme?: string | undefined;
                statement?: string | undefined;
                uri?: string | undefined;
                version?: "1" | undefined;
            } | undefined;
        } | undefined;
        chainId?: `0x${string}` | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        context: unknown;
        digests: {
            auth: `0x${string}`;
            exec: `0x${string}`;
        };
    };
} | {
    method: "wallet_upgradeAccount";
    params: readonly [{
        context: unknown;
        signatures: {
            auth: `0x${string}`;
            exec: `0x${string}`;
        };
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        address: `0x${string}`;
        capabilities?: {
            admins?: readonly {
                id: `0x${string}`;
                publicKey: `0x${string}`;
                type: "address" | "p256" | "secp256k1" | "webauthn-p256";
                credentialId?: string | undefined;
                privateKey?: any;
            }[] | undefined;
            permissions?: readonly {
                address: `0x${string}`;
                expiry: number;
                id: `0x${string}`;
                key: {
                    publicKey: `0x${string}`;
                    type: "address" | "p256" | "secp256k1" | "webauthn-p256";
                };
                permissions: {
                    calls: readonly ({
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                    } | {
                        to: `0x${string}`;
                    })[];
                    signatureVerification?: {
                        addresses: readonly `0x${string}`[];
                    } | undefined;
                    spend?: readonly {
                        limit: `0x${string}`;
                        period: "minute" | "hour" | "day" | "week" | "month" | "year";
                        token?: `0x${string}` | undefined;
                    }[] | undefined;
                };
                chainId?: `0x${string}` | undefined;
            }[] | undefined;
        } | undefined;
    };
} | {
    method: "wallet_getAdmins";
    params?: readonly [{
        address?: `0x${string}` | undefined;
        chainId?: `0x${string}` | undefined;
    }] | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        address: `0x${string}`;
        chainId: `0x${string}`;
        keys: readonly {
            id: `0x${string}`;
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
            credentialId?: string | undefined;
            privateKey?: any;
        }[];
    };
} | {
    method: "wallet_getAccountVersion";
    params?: readonly [{
        address?: `0x${string}` | undefined;
    }] | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        current: string;
        latest: string;
    };
} | {
    method: "wallet_getPermissions";
    params?: readonly [{
        address?: `0x${string}` | undefined;
        chainIds?: readonly `0x${string}`[] | undefined;
    }] | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly {
        address: `0x${string}`;
        expiry: number;
        id: `0x${string}`;
        key: {
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
        };
        permissions: {
            calls: readonly ({
                signature: string;
                to: `0x${string}`;
            } | {
                signature: string;
            } | {
                to: `0x${string}`;
            })[];
            signatureVerification?: {
                addresses: readonly `0x${string}`[];
            } | undefined;
            spend?: readonly {
                limit: `0x${string}`;
                period: "minute" | "hour" | "day" | "week" | "month" | "year";
                token?: `0x${string}` | undefined;
            }[] | undefined;
        };
        chainId?: `0x${string}` | undefined;
    }[];
} | {
    method: "wallet_revokeAdmin";
    params: readonly [{
        id: `0x${string}`;
        address?: `0x${string}` | undefined;
        capabilities?: {
            feeToken?: string | undefined;
        } | undefined;
        chainId?: `0x${string}` | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: undefined;
} | {
    method: "wallet_revokePermissions";
    params: readonly [{
        id: `0x${string}`;
        address?: `0x${string}` | undefined;
        capabilities?: {
            feeToken?: string | undefined;
        } | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: undefined;
} | {
    method: "wallet_connect";
    params?: readonly [{
        capabilities?: {
            createAccount?: boolean | {
                chainId?: `0x${string}` | undefined;
                label?: string | undefined;
            } | undefined;
            email?: boolean | undefined;
            grantAdmins?: readonly {
                publicKey: `0x${string}`;
                type: "address" | "p256" | "secp256k1" | "webauthn-p256";
            }[] | undefined;
            grantPermissions?: {
                expiry: number;
                feeToken: {
                    limit: `${number}` | `${number}.${number}`;
                    symbol?: string | undefined;
                } | null;
                permissions: {
                    calls: readonly ({
                        signature: string;
                        to: `0x${string}`;
                    } | {
                        signature: string;
                    } | {
                        to: `0x${string}`;
                    })[];
                    signatureVerification?: {
                        addresses: readonly `0x${string}`[];
                    } | undefined;
                    spend?: readonly {
                        limit: `0x${string}`;
                        period: "minute" | "hour" | "day" | "week" | "month" | "year";
                        token?: `0x${string}` | undefined;
                    }[] | undefined;
                };
                address?: `0x${string}` | undefined;
                chainId?: `0x${string}` | undefined;
                key?: {
                    publicKey: `0x${string}`;
                    type: "address" | "p256" | "secp256k1" | "webauthn-p256";
                } | undefined;
            } | undefined;
            preCalls?: readonly {
                context: unknown;
                signature: `0x${string}`;
            }[] | undefined;
            selectAccount?: boolean | {
                address: `0x${string}`;
                key?: {
                    publicKey: `0x${string}`;
                    credentialId?: string | undefined;
                } | undefined;
            } | undefined;
            signInWithEthereum?: {
                nonce: string;
                chainId?: number | undefined;
                domain?: string | undefined;
                expirationTime?: Date | undefined;
                issuedAt?: Date | undefined;
                notBefore?: Date | undefined;
                requestId?: string | undefined;
                resources?: readonly string[] | undefined;
                scheme?: string | undefined;
                statement?: string | undefined;
                uri?: string | undefined;
                version?: "1" | undefined;
            } | {
                authUrl: string | {
                    logout: string;
                    nonce: string;
                    verify: string;
                };
                chainId?: `0x${string}` | undefined;
                domain?: string | undefined;
                expirationTime?: Date | undefined;
                issuedAt?: Date | undefined;
                notBefore?: Date | undefined;
                requestId?: string | undefined;
                resources?: readonly string[] | undefined;
                scheme?: string | undefined;
                statement?: string | undefined;
                uri?: string | undefined;
                version?: "1" | undefined;
            } | undefined;
        } | undefined;
        chainIds?: readonly `0x${string}`[] | undefined;
    }] | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        accounts: readonly {
            address: `0x${string}`;
            capabilities?: {
                admins?: readonly {
                    id: `0x${string}`;
                    publicKey: `0x${string}`;
                    type: "address" | "p256" | "secp256k1" | "webauthn-p256";
                    credentialId?: string | undefined;
                }[] | undefined;
                permissions?: readonly {
                    address: `0x${string}`;
                    expiry: number;
                    id: `0x${string}`;
                    key: {
                        publicKey: `0x${string}`;
                        type: "address" | "p256" | "secp256k1" | "webauthn-p256";
                    };
                    permissions: {
                        calls: readonly ({
                            signature: string;
                            to: `0x${string}`;
                        } | {
                            signature: string;
                        } | {
                            to: `0x${string}`;
                        })[];
                        signatureVerification?: {
                            addresses: readonly `0x${string}`[];
                        } | undefined;
                        spend?: readonly {
                            limit: `0x${string}`;
                            period: "minute" | "hour" | "day" | "week" | "month" | "year";
                            token?: `0x${string}` | undefined;
                        }[] | undefined;
                    };
                    chainId?: `0x${string}` | undefined;
                }[] | undefined;
                preCalls?: readonly {
                    context: unknown;
                    signature: `0x${string}`;
                }[] | undefined;
                signInWithEthereum?: {
                    message: string;
                    signature: `0x${string}`;
                    token?: string | undefined;
                } | undefined;
            } | undefined;
        }[];
        chainIds: readonly `0x${string}`[];
    };
} | {
    method: "wallet_disconnect";
    params?: unknown;
    id: number;
    jsonrpc: "2.0";
    _returnType: undefined;
} | {
    method: "wallet_getCapabilities";
    params?: readonly [`0x${string}` | undefined] | readonly [`0x${string}` | undefined, readonly `0x${string}`[]] | undefined;
    id: number;
    jsonrpc: "2.0";
    _returnType: Record<`0x${string}`, {
        atomic: {
            status: "supported" | "unsupported";
        };
        feeToken: {
            supported: boolean;
            tokens: readonly {
                address: `0x${string}`;
                decimals: number;
                symbol: string;
                uid: string;
                feeToken?: boolean | undefined;
                interop?: boolean | undefined;
                nativeRate?: `0x${string}` | undefined;
            }[];
        };
        merchant: {
            supported: boolean;
        };
        permissions: {
            supported: boolean;
        };
        requiredFunds: {
            supported: boolean;
            tokens: readonly {
                address: `0x${string}`;
                decimals: number;
                symbol: string;
                uid: string;
                feeToken?: boolean | undefined;
                interop?: boolean | undefined;
                nativeRate?: `0x${string}` | undefined;
            }[];
        };
    }>;
} | {
    method: "wallet_getKeys";
    params: readonly [{
        address: `0x${string}`;
        chainIds?: readonly `0x${string}`[] | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly {
        expiry: `0x${string}`;
        hash: `0x${string}`;
        id: `0x${string}`;
        publicKey: `0x${string}`;
        role: "admin" | "session";
        type: "address" | "p256" | "secp256k1" | "webauthn-p256";
        feeToken?: {
            limit: `${number}` | `${number}.${number}`;
            symbol?: string | undefined;
        } | null | undefined;
        permissions?: {
            calls?: readonly ({
                signature: string;
                to: `0x${string}`;
            } | {
                signature: string;
            } | {
                to: `0x${string}`;
            })[] | undefined;
            signatureVerification?: {
                addresses: readonly `0x${string}`[];
            } | undefined;
            spend?: readonly {
                limit: `0x${string}`;
                period: "minute" | "hour" | "day" | "week" | "month" | "year";
                token?: `0x${string}` | undefined;
            }[] | undefined;
        } | undefined;
        chainId?: `0x${string}` | undefined;
        prehash?: boolean | undefined;
    }[];
} | {
    method: "wallet_getAssets";
    params: readonly [{
        account: `0x${string}`;
        assetFilter?: Record<`0x${string}`, readonly {
            address: `0x${string}` | "native";
            type: string;
        }[]> | undefined;
        assetTypeFilter?: readonly string[] | undefined;
        chainFilter?: readonly `0x${string}`[] | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: Record<string, readonly ({
        address: `0x${string}`;
        balance: `0x${string}`;
        metadata: {
            decimals: number;
            name: string;
            symbol: string;
            fiat?: {
                currency: string;
                value: string;
            } | null | undefined;
        } | null;
        type: "erc20";
    } | {
        address: "native" | null;
        balance: `0x${string}`;
        metadata: {
            decimals: number;
            fiat?: {
                currency: string;
                value: string;
            } | null | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
        } | null;
        type: "native";
    })[]>;
} | {
    method: "wallet_getCallsStatus";
    params: [`0x${string}`];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        atomic: boolean;
        chainId: `0x${string}`;
        id: string;
        status: number;
        version: string;
        receipts?: readonly {
            blockHash: `0x${string}`;
            blockNumber: `0x${string}`;
            gasUsed: `0x${string}`;
            logs: readonly {
                address: `0x${string}`;
                data: `0x${string}`;
                topics: readonly `0x${string}`[];
            }[];
            status: `0x${string}`;
            transactionHash: `0x${string}`;
        }[] | undefined;
    };
} | {
    method: "wallet_prepareCalls";
    params: readonly [{
        calls: readonly {
            to: `0x${string}`;
            data?: `0x${string}` | undefined;
            value?: `0x${string}` | undefined;
        }[];
        capabilities?: {
            feeToken?: string | undefined;
            merchantUrl?: string | undefined;
            permissions?: {
                id?: `0x${string}` | null | undefined;
            } | undefined;
            preCalls?: readonly {
                context: unknown;
                signature: `0x${string}`;
            }[] | undefined;
            requiredFunds?: readonly ({
                address: `0x${string}`;
                value: `0x${string}`;
            } | {
                symbol: string;
                value: `${number}` | `${number}.${number}`;
            })[] | undefined;
        } | undefined;
        chainId?: `0x${string}` | undefined;
        from?: `0x${string}` | undefined;
        key?: {
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
            prehash?: boolean | undefined;
        } | undefined;
        version?: string | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        chainId: `0x${string}`;
        context: {
            account: {
                address: `0x${string}`;
            };
            calls: readonly {
                to: `0x${string}`;
                data?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
            }[];
            nonce: `0x${string}`;
            quote?: {
                hash?: `0x${string}` | undefined;
                r?: `0x${string}` | undefined;
                s?: `0x${string}` | undefined;
                v?: `0x${string}` | undefined;
                yParity?: `0x${string}` | undefined;
                multiChainRoot?: `0x${string}` | null | undefined;
                quotes?: readonly {
                    chainId: `0x${string}`;
                    ethPrice: `0x${string}`;
                    extraPayment: `0x${string}`;
                    feeTokenDeficit: `0x${string}`;
                    intent: {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentAmount: `0x${string}`;
                        paymentMaxAmount: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                    } | {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        prePaymentAmount: `0x${string}`;
                        prePaymentMaxAmount: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                        totalPaymentAmount: `0x${string}`;
                        totalPaymentMaxAmount: `0x${string}`;
                    };
                    nativeFeeEstimate: {
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                    };
                    orchestrator: `0x${string}`;
                    paymentTokenDecimals: number;
                    txGas: `0x${string}`;
                    additionalAuthorization?: {
                        address: `0x${string}`;
                        chainId: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        yParity: `0x${string}`;
                    } | null | undefined;
                    assetDeficits?: {
                        address: `0x${string}` | null;
                        deficit: `0x${string}`;
                        required: `0x${string}`;
                        decimals?: number | undefined;
                        fiat?: {
                            currency: string;
                            value: string;
                        } | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                    }[] | undefined;
                    authorizationAddress?: `0x${string}` | null | undefined;
                }[] | undefined;
                ttl?: number | undefined;
            } | undefined;
        };
        digest: `0x${string}`;
        key: {
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
            prehash?: boolean | undefined;
        };
        typedData: {
            domain: Record<string, never> | {
                chainId: `0x${string}`;
                name: string;
                verifyingContract: `0x${string}`;
                version: string;
            };
            message: Record<string, unknown>;
            primaryType: string;
            types: Record<string, unknown>;
        };
        capabilities?: {
            quote?: {
                hash: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                quotes: readonly {
                    chainId: `0x${string}`;
                    ethPrice: `0x${string}`;
                    extraPayment: `0x${string}`;
                    feeTokenDeficit: `0x${string}`;
                    intent: {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentAmount: `0x${string}`;
                        paymentMaxAmount: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                    } | {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        prePaymentAmount: `0x${string}`;
                        prePaymentMaxAmount: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                        totalPaymentAmount: `0x${string}`;
                        totalPaymentMaxAmount: `0x${string}`;
                    };
                    nativeFeeEstimate: {
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                    };
                    orchestrator: `0x${string}`;
                    paymentTokenDecimals: number;
                    txGas: `0x${string}`;
                    additionalAuthorization?: {
                        address: `0x${string}`;
                        chainId: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        yParity: `0x${string}`;
                    } | null | undefined;
                    assetDeficits?: {
                        address: `0x${string}` | null;
                        deficit: `0x${string}`;
                        required: `0x${string}`;
                        decimals?: number | undefined;
                        fiat?: {
                            currency: string;
                            value: string;
                        } | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                    }[] | undefined;
                    authorizationAddress?: `0x${string}` | null | undefined;
                }[];
                ttl: number;
                v?: `0x${string}` | undefined;
                yParity?: `0x${string}` | undefined;
                multiChainRoot?: `0x${string}` | null | undefined;
            } | undefined;
            assetDiffs?: Record<`0x${string}`, readonly (readonly [`0x${string}`, readonly ({
                direction: "incoming" | "outgoing";
                symbol: string;
                type: "erc20";
                value: `0x${string}`;
                address?: `0x${string}` | null | undefined;
                decimals?: number | null | undefined;
                fiat?: {
                    currency: string;
                    value: string;
                } | undefined;
                name?: string | null | undefined;
            } | {
                direction: "incoming" | "outgoing";
                symbol: string;
                type: "erc721";
                uri: string;
                value: `0x${string}`;
                address?: `0x${string}` | null | undefined;
                fiat?: {
                    currency: string;
                    value: string;
                } | undefined;
                name?: string | null | undefined;
            } | {
                address: null;
                direction: "incoming" | "outgoing";
                symbol: string;
                type: null;
                value: `0x${string}`;
                decimals?: number | null | undefined;
                fiat?: {
                    currency: string;
                    value: string;
                } | undefined;
            })[]])[]> | undefined;
            authorizeKeys?: readonly {
                hash: `0x${string}`;
                permissions: readonly ({
                    selector: `0x${string}`;
                    to: `0x${string}`;
                    type: "call";
                } | {
                    limit: `0x${string}`;
                    period: "minute" | "hour" | "day" | "week" | "month" | "year";
                    type: "spend";
                    token?: `0x${string}` | null | undefined;
                })[];
                expiry: `0x${string}`;
                publicKey: `0x${string}`;
                role: "admin" | "normal";
                type: "p256" | "secp256k1" | "webauthnp256";
                prehash?: boolean | undefined;
            }[] | null | undefined;
            feePayerDigest?: `0x${string}` | undefined;
            feeSignature?: `0x${string}` | undefined;
            feeTotals?: Record<`0x${string}`, {
                currency: string;
                value: string;
            }> | undefined;
            revokeKeys?: readonly {
                hash: `0x${string}`;
            }[] | null | undefined;
        } | undefined;
    };
} | {
    method: "wallet_sendPreparedCalls";
    params: readonly [{
        chainId: `0x${string}`;
        context: {
            account: {
                address: `0x${string}`;
            };
            calls: readonly {
                to: `0x${string}`;
                data?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
            }[];
            nonce: `0x${string}`;
            quote?: {
                hash?: `0x${string}` | undefined;
                r?: `0x${string}` | undefined;
                s?: `0x${string}` | undefined;
                v?: `0x${string}` | undefined;
                yParity?: `0x${string}` | undefined;
                multiChainRoot?: `0x${string}` | null | undefined;
                quotes?: readonly {
                    chainId: `0x${string}`;
                    ethPrice: `0x${string}`;
                    extraPayment: `0x${string}`;
                    feeTokenDeficit: `0x${string}`;
                    intent: {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentAmount: `0x${string}`;
                        paymentMaxAmount: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                    } | {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        prePaymentAmount: `0x${string}`;
                        prePaymentMaxAmount: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                        totalPaymentAmount: `0x${string}`;
                        totalPaymentMaxAmount: `0x${string}`;
                    };
                    nativeFeeEstimate: {
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                    };
                    orchestrator: `0x${string}`;
                    paymentTokenDecimals: number;
                    txGas: `0x${string}`;
                    additionalAuthorization?: {
                        address: `0x${string}`;
                        chainId: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        yParity: `0x${string}`;
                    } | null | undefined;
                    assetDeficits?: {
                        address: `0x${string}` | null;
                        deficit: `0x${string}`;
                        required: `0x${string}`;
                        decimals?: number | undefined;
                        fiat?: {
                            currency: string;
                            value: string;
                        } | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                    }[] | undefined;
                    authorizationAddress?: `0x${string}` | null | undefined;
                }[] | undefined;
                ttl?: number | undefined;
            } | undefined;
        };
        key: {
            publicKey: `0x${string}`;
            type: "address" | "p256" | "secp256k1" | "webauthn-p256";
            prehash?: boolean | undefined;
        };
        signature: `0x${string}`;
        capabilities?: {
            quote?: {
                hash: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                quotes: readonly {
                    chainId: `0x${string}`;
                    ethPrice: `0x${string}`;
                    extraPayment: `0x${string}`;
                    feeTokenDeficit: `0x${string}`;
                    intent: {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentAmount: `0x${string}`;
                        paymentMaxAmount: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                    } | {
                        combinedGas: `0x${string}`;
                        encodedFundTransfers: readonly `0x${string}`[];
                        encodedPreCalls: readonly `0x${string}`[];
                        eoa: `0x${string}`;
                        executionData: `0x${string}`;
                        expiry: `0x${string}`;
                        funder: `0x${string}`;
                        funderSignature: `0x${string}`;
                        isMultichain: boolean;
                        nonce: `0x${string}`;
                        payer: `0x${string}`;
                        paymentRecipient: `0x${string}`;
                        paymentSignature: `0x${string}`;
                        paymentToken: `0x${string}`;
                        prePaymentAmount: `0x${string}`;
                        prePaymentMaxAmount: `0x${string}`;
                        settler: `0x${string}`;
                        settlerContext: `0x${string}`;
                        signature: `0x${string}`;
                        supportedAccountImplementation: `0x${string}`;
                        totalPaymentAmount: `0x${string}`;
                        totalPaymentMaxAmount: `0x${string}`;
                    };
                    nativeFeeEstimate: {
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                    };
                    orchestrator: `0x${string}`;
                    paymentTokenDecimals: number;
                    txGas: `0x${string}`;
                    additionalAuthorization?: {
                        address: `0x${string}`;
                        chainId: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        yParity: `0x${string}`;
                    } | null | undefined;
                    assetDeficits?: {
                        address: `0x${string}` | null;
                        deficit: `0x${string}`;
                        required: `0x${string}`;
                        decimals?: number | undefined;
                        fiat?: {
                            currency: string;
                            value: string;
                        } | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                    }[] | undefined;
                    authorizationAddress?: `0x${string}` | null | undefined;
                }[];
                ttl: number;
                v?: `0x${string}` | undefined;
                yParity?: `0x${string}` | undefined;
                multiChainRoot?: `0x${string}` | null | undefined;
            } | undefined;
            assetDiffs?: Record<`0x${string}`, readonly (readonly [`0x${string}`, readonly ({
                direction: "incoming" | "outgoing";
                symbol: string;
                type: "erc20";
                value: `0x${string}`;
                address?: `0x${string}` | null | undefined;
                decimals?: number | null | undefined;
                fiat?: {
                    currency: string;
                    value: string;
                } | undefined;
                name?: string | null | undefined;
            } | {
                direction: "incoming" | "outgoing";
                symbol: string;
                type: "erc721";
                uri: string;
                value: `0x${string}`;
                address?: `0x${string}` | null | undefined;
                fiat?: {
                    currency: string;
                    value: string;
                } | undefined;
                name?: string | null | undefined;
            } | {
                address: null;
                direction: "incoming" | "outgoing";
                symbol: string;
                type: null;
                value: `0x${string}`;
                decimals?: number | null | undefined;
                fiat?: {
                    currency: string;
                    value: string;
                } | undefined;
            })[]])[]> | undefined;
            authorizeKeys?: readonly {
                hash: `0x${string}`;
                permissions: readonly ({
                    selector: `0x${string}`;
                    to: `0x${string}`;
                    type: "call";
                } | {
                    limit: `0x${string}`;
                    period: "minute" | "hour" | "day" | "week" | "month" | "year";
                    type: "spend";
                    token?: `0x${string}` | null | undefined;
                })[];
                expiry: `0x${string}`;
                publicKey: `0x${string}`;
                role: "admin" | "normal";
                type: "p256" | "secp256k1" | "webauthnp256";
                prehash?: boolean | undefined;
            }[] | null | undefined;
            feePayerDigest?: `0x${string}` | undefined;
            feeSignature?: `0x${string}` | undefined;
            feeTotals?: Record<`0x${string}`, {
                currency: string;
                value: string;
            }> | undefined;
            revokeKeys?: readonly {
                hash: `0x${string}`;
            }[] | null | undefined;
        } | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: readonly {
        id: `0x${string}`;
        capabilities?: Record<string, unknown> | undefined;
    }[];
} | {
    method: "wallet_sendCalls";
    params: readonly [{
        calls: readonly {
            to: `0x${string}`;
            data?: `0x${string}` | undefined;
            value?: `0x${string}` | undefined;
        }[];
        version?: string | undefined;
        chainId?: `0x${string}` | undefined;
        from?: `0x${string}` | undefined;
        capabilities?: {
            feeToken?: string | undefined;
            merchantUrl?: string | undefined;
            permissions?: {
                id?: `0x${string}` | null | undefined;
            } | undefined;
            preCalls?: readonly {
                context: unknown;
                signature: `0x${string}`;
            }[] | undefined;
            requiredFunds?: readonly ({
                address: `0x${string}`;
                value: `0x${string}`;
            } | {
                symbol: string;
                value: `${number}` | `${number}.${number}`;
            })[] | undefined;
        } | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        id: `0x${string}`;
    };
} | {
    method: "wallet_switchEthereumChain";
    params: readonly [{
        chainId: `0x${string}`;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: undefined;
} | {
    method: "wallet_verifySignature";
    params: readonly [{
        address: `0x${string}`;
        digest: `0x${string}`;
        signature: `0x${string}`;
        chainId?: `0x${string}` | undefined;
    }];
    id: number;
    jsonrpc: "2.0";
    _returnType: {
        address: `0x${string}`;
        chainId: `0x${string}`;
        valid: boolean;
        proof?: unknown;
    };
})) | undefined;
/**
 * Hook to access and subscribe to the Relay Client of the Porto instance.
 *
 * @param porto - Porto instance.
 * @returns Relay Client.
 */
export declare function useRelayClient<chains extends readonly [Chains.Chain, ...Chains.Chain[]]>(porto: Pick<Remote.Porto<chains>, '_internal'>, parameters?: useRelayClient.Parameters): RelayClient.RelayClient<import("viem").Transport, chains[number], undefined>;
export declare namespace useRelayClient {
    type Parameters = {
        chainId?: number | undefined;
    };
}
/**
 * Hook to access and subscribe to the wallet client of the Porto instance.
 *
 * @param porto - Porto instance.
 * @returns Wallet Client.
 */
export declare function useWalletClient<chains extends readonly [Chains.Chain, ...Chains.Chain[]]>(porto: Pick<Remote.Porto<chains>, '_internal' | 'provider'>): WalletClient.WalletClient<import("viem").Transport, undefined, undefined>;
export declare namespace useWalletClient {
    type Parameters = {
        chainId?: number | undefined;
    };
}
//# sourceMappingURL=Hooks.d.ts.map