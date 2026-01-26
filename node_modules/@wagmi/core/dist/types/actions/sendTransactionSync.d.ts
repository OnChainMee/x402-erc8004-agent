import type { Account, Chain, TransactionRequest, SendTransactionSyncErrorType as viem_SendTransactionSyncErrorType, SendTransactionSyncParameters as viem_SendTransactionSyncParameters, SendTransactionSyncReturnType as viem_SendTransactionSyncReturnType } from 'viem';
import type { Config } from '../createConfig.js';
import type { BaseErrorType, ErrorType } from '../errors/base.js';
import type { SelectChains } from '../types/chain.js';
import type { ChainIdParameter, ConnectorParameter } from '../types/properties.js';
import type { Compute } from '../types/utils.js';
import { type GetConnectorClientErrorType } from './getConnectorClient.js';
export type SendTransactionSyncParameters<config extends Config = Config, chainId extends config['chains'][number]['id'] = config['chains'][number]['id'], chains extends readonly Chain[] = SelectChains<config, chainId>> = {
    [key in keyof chains]: Compute<Omit<viem_SendTransactionSyncParameters<chains[key], Account, chains[key]>, 'chain' | 'gas'> & ChainIdParameter<config, chainId> & ConnectorParameter>;
}[number] & {
    /** Gas provided for transaction execution. */
    gas?: TransactionRequest['gas'] | null;
};
export type SendTransactionSyncReturnType = viem_SendTransactionSyncReturnType;
export type SendTransactionSyncErrorType = GetConnectorClientErrorType | BaseErrorType | ErrorType | viem_SendTransactionSyncErrorType;
/** https://wagmi.sh/core/api/actions/sendTransactionSync */
export declare function sendTransactionSync<config extends Config, chainId extends config['chains'][number]['id']>(config: config, parameters: SendTransactionSyncParameters<config, chainId>): Promise<SendTransactionSyncReturnType>;
//# sourceMappingURL=sendTransactionSync.d.ts.map