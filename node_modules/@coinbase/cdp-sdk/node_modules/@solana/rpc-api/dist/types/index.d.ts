/**
 * This package contains types that describe the [methods](https://solana.com/docs/rpc/http) of the
 * Solana JSON RPC API, and utilities for creating a {@link RpcApi} implementation with sensible
 * defaults. It can be used standalone, but it is also exported as part of Kit
 * [`@solana/kit`](https://github.com/anza-xyz/kit/tree/main/packages/kit).
 *
 * @example
 * Each RPC method is described in terms of a TypeScript type of the following form:
 *
 * ```ts
 * type ExampleApi = {
 *     getSomething(address: Address): Something;
 * };
 * ```
 *
 * A {@link RpcApi} that implements `ExampleApi` will ultimately expose its defined methods on any
 * {@link Rpc} that uses it.
 *
 * ```ts
 * const rpc: Rpc<ExampleApi> = createExampleRpc(/* ... *\/);
 * const something: Something = await rpc.getSomething(address('95DpK3y3GF7U8s1k4EvZ7xqyeCkhsHeZaE97iZpHUGMN')).send();
 * ```
 *
 * @packageDocumentation
 */
import { RpcApi } from '@solana/rpc-spec';
import { RequestTransformerConfig } from '@solana/rpc-transformers';
import { GetAccountInfoApi } from './getAccountInfo';
import { GetBalanceApi } from './getBalance';
import { GetBlockApi } from './getBlock';
import { GetBlockCommitmentApi } from './getBlockCommitment';
import { GetBlockHeightApi } from './getBlockHeight';
import { GetBlockProductionApi } from './getBlockProduction';
import { GetBlocksApi } from './getBlocks';
import { GetBlocksWithLimitApi } from './getBlocksWithLimit';
import { GetBlockTimeApi } from './getBlockTime';
import { GetClusterNodesApi } from './getClusterNodes';
import { GetEpochInfoApi } from './getEpochInfo';
import { GetEpochScheduleApi } from './getEpochSchedule';
import { GetFeeForMessageApi } from './getFeeForMessage';
import { GetFirstAvailableBlockApi } from './getFirstAvailableBlock';
import { GetGenesisHashApi } from './getGenesisHash';
import { GetHealthApi } from './getHealth';
import { GetHighestSnapshotSlotApi } from './getHighestSnapshotSlot';
import { GetIdentityApi } from './getIdentity';
import { GetInflationGovernorApi } from './getInflationGovernor';
import { GetInflationRateApi } from './getInflationRate';
import { GetInflationRewardApi } from './getInflationReward';
import { GetLargestAccountsApi } from './getLargestAccounts';
import { GetLatestBlockhashApi } from './getLatestBlockhash';
import { GetLeaderScheduleApi } from './getLeaderSchedule';
import { GetMaxRetransmitSlotApi } from './getMaxRetransmitSlot';
import { GetMaxShredInsertSlotApi } from './getMaxShredInsertSlot';
import { GetMinimumBalanceForRentExemptionApi } from './getMinimumBalanceForRentExemption';
import { GetMultipleAccountsApi } from './getMultipleAccounts';
import { GetProgramAccountsApi } from './getProgramAccounts';
import { GetRecentPerformanceSamplesApi } from './getRecentPerformanceSamples';
import { GetRecentPrioritizationFeesApi } from './getRecentPrioritizationFees';
import { GetSignaturesForAddressApi } from './getSignaturesForAddress';
import { GetSignatureStatusesApi } from './getSignatureStatuses';
import { GetSlotApi } from './getSlot';
import { GetSlotLeaderApi } from './getSlotLeader';
import { GetSlotLeadersApi } from './getSlotLeaders';
import { GetStakeMinimumDelegationApi } from './getStakeMinimumDelegation';
import { GetSupplyApi } from './getSupply';
import { GetTokenAccountBalanceApi } from './getTokenAccountBalance';
import { GetTokenAccountsByDelegateApi } from './getTokenAccountsByDelegate';
import { GetTokenAccountsByOwnerApi } from './getTokenAccountsByOwner';
import { GetTokenLargestAccountsApi } from './getTokenLargestAccounts';
import { GetTokenSupplyApi } from './getTokenSupply';
import { GetTransactionApi } from './getTransaction';
import { GetTransactionCountApi } from './getTransactionCount';
import { GetVersionApi } from './getVersion';
import { GetVoteAccountsApi } from './getVoteAccounts';
import { IsBlockhashValidApi } from './isBlockhashValid';
import { MinimumLedgerSlotApi } from './minimumLedgerSlot';
import { RequestAirdropApi } from './requestAirdrop';
import { SendTransactionApi } from './sendTransaction';
import { SimulateTransactionApi } from './simulateTransaction';
type SolanaRpcApiForAllClusters = GetAccountInfoApi & GetBalanceApi & GetBlockApi & GetBlockCommitmentApi & GetBlockHeightApi & GetBlockProductionApi & GetBlocksApi & GetBlocksWithLimitApi & GetBlockTimeApi & GetClusterNodesApi & GetEpochInfoApi & GetEpochScheduleApi & GetFeeForMessageApi & GetFirstAvailableBlockApi & GetGenesisHashApi & GetHealthApi & GetHighestSnapshotSlotApi & GetIdentityApi & GetInflationGovernorApi & GetInflationRateApi & GetInflationRewardApi & GetLargestAccountsApi & GetLatestBlockhashApi & GetLeaderScheduleApi & GetMaxRetransmitSlotApi & GetMaxShredInsertSlotApi & GetMinimumBalanceForRentExemptionApi & GetMultipleAccountsApi & GetProgramAccountsApi & GetRecentPerformanceSamplesApi & GetRecentPrioritizationFeesApi & GetSignaturesForAddressApi & GetSignatureStatusesApi & GetSlotApi & GetSlotLeaderApi & GetSlotLeadersApi & GetStakeMinimumDelegationApi & GetSupplyApi & GetTokenAccountBalanceApi & GetTokenAccountsByDelegateApi & GetTokenAccountsByOwnerApi & GetTokenLargestAccountsApi & GetTokenSupplyApi & GetTransactionApi & GetTransactionCountApi & GetVersionApi & GetVoteAccountsApi & IsBlockhashValidApi & MinimumLedgerSlotApi & SendTransactionApi & SimulateTransactionApi;
type SolanaRpcApiForTestClusters = RequestAirdropApi & SolanaRpcApiForAllClusters;
/**
 * Represents the RPC methods available on test clusters.
 *
 * For instance, the test clusters support the {@link RequestAirdropApi} while mainnet does not.
 */
export type SolanaRpcApi = SolanaRpcApiForTestClusters;
/**
 * Represents the RPC methods available on the devnet cluster.
 *
 * For instance, the devnet cluster supports the {@link RequestAirdropApi} while mainnet does not.
 */
export type SolanaRpcApiDevnet = SolanaRpcApiForTestClusters;
/**
 * Represents the RPC methods available on the testnet cluster.
 *
 * For instance, the testnet cluster supports the {@link RequestAirdropApi} while mainnet does not.
 */
export type SolanaRpcApiTestnet = SolanaRpcApiForTestClusters;
/**
 * Represents the RPC methods available on the mainnet cluster.
 *
 * For instance, the mainnet cluster does not support the {@link RequestAirdropApi} whereas test
 * clusters do.
 */
export type SolanaRpcApiMainnet = SolanaRpcApiForAllClusters;
export type { GetAccountInfoApi, GetBalanceApi, GetBlockApi, GetBlockCommitmentApi, GetBlockHeightApi, GetBlockProductionApi, GetBlocksApi, GetBlocksWithLimitApi, GetBlockTimeApi, GetClusterNodesApi, GetEpochInfoApi, GetEpochScheduleApi, GetFeeForMessageApi, GetFirstAvailableBlockApi, GetGenesisHashApi, GetHealthApi, GetHighestSnapshotSlotApi, GetIdentityApi, GetInflationGovernorApi, GetInflationRateApi, GetInflationRewardApi, GetLargestAccountsApi, GetLatestBlockhashApi, GetLeaderScheduleApi, GetMaxRetransmitSlotApi, GetMaxShredInsertSlotApi, GetMinimumBalanceForRentExemptionApi, GetMultipleAccountsApi, GetProgramAccountsApi, GetRecentPerformanceSamplesApi, GetRecentPrioritizationFeesApi, GetSignaturesForAddressApi, GetSignatureStatusesApi, GetSlotApi, GetSlotLeaderApi, GetSlotLeadersApi, GetStakeMinimumDelegationApi, GetSupplyApi, GetTokenAccountBalanceApi, GetTokenAccountsByDelegateApi, GetTokenAccountsByOwnerApi, GetTokenLargestAccountsApi, GetTokenSupplyApi, GetTransactionApi, GetTransactionCountApi, GetVersionApi, GetVoteAccountsApi, IsBlockhashValidApi, MinimumLedgerSlotApi, RequestAirdropApi, SendTransactionApi, SimulateTransactionApi, };
type Config = RequestTransformerConfig;
/**
 * Creates a {@link RpcApi} implementation of the Solana JSON RPC API with some default behaviours.
 *
 * The default behaviours include:
 * - A transform that converts `bigint` inputs to `number` for compatibility with version 1.0 of the
 *   Solana JSON RPC.
 * - A transform that calls the config's {@link Config.onIntegerOverflow | onIntegerOverflow}
 *   handler whenever a `bigint` input would overflow a JavaScript IEEE 754 number. See
 *   [this](https://github.com/solana-labs/solana-web3.js/issues/1116) GitHub issue for more
 *   information.
 * - A transform that applies a default commitment wherever not specified
 */
export declare function createSolanaRpcApi<TRpcMethods extends SolanaRpcApi | SolanaRpcApiDevnet | SolanaRpcApiMainnet | SolanaRpcApiTestnet = SolanaRpcApi>(config?: Config): RpcApi<TRpcMethods>;
//# sourceMappingURL=index.d.ts.map