import type { MutateOptions } from '@tanstack/query-core';
import { type ConnectErrorType, type ConnectParameters, type ConnectReturnType } from '../actions/connect.js';
import type { CreateConnectorFn } from '../connectors/createConnector.js';
import type { Config, Connector } from '../createConfig.js';
import type { Compute } from '../types/utils.js';
export declare function connectMutationOptions<config extends Config>(config: config): {
    readonly mutationFn: (variables: ConnectVariables<config, CreateConnectorFn | Connector, boolean>) => Promise<ConnectReturnType<config, Connector, boolean, Record<string, unknown>>>;
    readonly mutationKey: readonly ["connect"];
};
export type ConnectData<config extends Config, connector extends Connector | CreateConnectorFn, withCapabilities extends boolean> = ConnectReturnType<config, connector, withCapabilities>;
export type ConnectVariables<config extends Config, connector extends Connector | CreateConnectorFn, withCapabilities extends boolean> = ConnectParameters<config, connector, withCapabilities>;
export type ConnectMutate<config extends Config, context = unknown> = <connector extends config['connectors'][number] | Connector | CreateConnectorFn, withCapabilities extends boolean = false>(variables: ConnectVariables<config, connector, withCapabilities>, options?: Compute<MutateOptions<ConnectData<config, connector, withCapabilities>, ConnectErrorType, Compute<ConnectVariables<config, connector, withCapabilities>>, context>> | undefined) => void;
export type ConnectMutateAsync<config extends Config, context = unknown> = <connector extends config['connectors'][number] | Connector | CreateConnectorFn, withCapabilities extends boolean = false>(variables: ConnectVariables<config, connector, withCapabilities>, options?: Compute<MutateOptions<ConnectData<config, connector, withCapabilities>, ConnectErrorType, Compute<ConnectVariables<config, connector, withCapabilities>>, context>> | undefined) => Promise<ConnectData<config, connector, withCapabilities>>;
//# sourceMappingURL=connect.d.ts.map