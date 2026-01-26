import type { Address, ResourceUnavailableRpcErrorType, UserRejectedRequestErrorType } from 'viem';
import type { CreateConnectorFn } from '../connectors/createConnector.js';
import type { Config, Connector } from '../createConfig.js';
import type { BaseErrorType, ErrorType } from '../errors/base.js';
import { type ConnectorAlreadyConnectedErrorType } from '../errors/config.js';
import type { ChainIdParameter } from '../types/properties.js';
import type { Compute } from '../types/utils.js';
export type ConnectParameters<config extends Config = Config, connector extends Connector | CreateConnectorFn = Connector | CreateConnectorFn, withCapabilities extends boolean = false, parameters extends unknown | undefined = (connector extends CreateConnectorFn ? Omit<NonNullable<Parameters<ReturnType<connector>['connect']>[0]>, 'isReconnecting'> : never) | (connector extends Connector ? Omit<NonNullable<Parameters<connector['connect']>[0]>, 'isReconnecting'> : never)> = Compute<ChainIdParameter<config> & {
    connector: connector | CreateConnectorFn;
    withCapabilities?: withCapabilities | boolean | undefined;
}> & parameters;
export type ConnectReturnType<config extends Config = Config, connector extends Connector | CreateConnectorFn = Connector | CreateConnectorFn, withCapabilities extends boolean = false, capabilities extends unknown | undefined = (connector extends CreateConnectorFn ? Awaited<ReturnType<ReturnType<connector>['connect']>>['accounts'] extends readonly Address[] | readonly {
    capabilities: infer capabilities;
}[] ? capabilities : Record<string, unknown> : never) | (connector extends Connector ? Awaited<ReturnType<connector['connect']>>['accounts'] extends readonly Address[] | readonly {
    capabilities: infer capabilities;
}[] ? capabilities : Record<string, unknown> : never)> = {
    accounts: withCapabilities extends true ? readonly [
        {
            address: Address;
            capabilities: capabilities;
        },
        ...{
            address: Address;
            capabilities: capabilities;
        }[]
    ] : readonly [Address, ...Address[]];
    chainId: config['chains'][number]['id'] | (number extends config['chains'][number]['id'] ? number : number & {});
};
export type ConnectErrorType = ConnectorAlreadyConnectedErrorType | UserRejectedRequestErrorType | ResourceUnavailableRpcErrorType | BaseErrorType | ErrorType;
/** https://wagmi.sh/core/api/actions/connect */
export declare function connect<config extends Config, connector extends Connector | CreateConnectorFn, withCapabilities extends boolean = false>(config: config, parameters: ConnectParameters<config, connector, withCapabilities>): Promise<ConnectReturnType<config, connector, withCapabilities>>;
//# sourceMappingURL=connect.d.ts.map