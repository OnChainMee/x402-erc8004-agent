import type { Account, Chain } from 'viem';
import { type SendCallsSyncErrorType as viem_SendCallsSyncErrorType, type SendCallsSyncParameters as viem_SendCallsSyncParameters, type SendCallsSyncReturnType as viem_SendCallsSyncReturnType } from 'viem/actions';
import type { Config } from '../createConfig.js';
import type { BaseErrorType, ErrorType } from '../errors/base.js';
import type { SelectChains } from '../types/chain.js';
import type { ChainIdParameter, ConnectorParameter } from '../types/properties.js';
import type { Compute } from '../types/utils.js';
import { type GetConnectorClientErrorType } from './getConnectorClient.js';
export type SendCallsSyncParameters<config extends Config = Config, chainId extends config['chains'][number]['id'] = config['chains'][number]['id'], calls extends readonly unknown[] = readonly unknown[], chains extends readonly Chain[] = SelectChains<config, chainId>> = {
    [key in keyof chains]: Compute<Omit<viem_SendCallsSyncParameters<chains[key], Account, chains[key], calls>, 'chain'> & ChainIdParameter<config, chainId> & ConnectorParameter>;
}[number];
export type SendCallsSyncReturnType = viem_SendCallsSyncReturnType;
export type SendCallsSyncErrorType = GetConnectorClientErrorType | BaseErrorType | ErrorType | viem_SendCallsSyncErrorType;
/** https://wagmi.sh/core/api/actions/sendCallsSync */
export declare function sendCallsSync<const calls extends readonly unknown[], config extends Config, chainId extends config['chains'][number]['id']>(config: config, parameters: SendCallsSyncParameters<config, chainId, calls>): Promise<SendCallsSyncReturnType>;
//# sourceMappingURL=sendCallsSync.d.ts.map