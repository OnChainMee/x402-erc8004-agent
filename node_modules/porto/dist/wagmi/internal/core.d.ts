import { type BaseError, type Config, type Connector, type CreateConnectorFn } from '@wagmi/core';
import { type ConnectReturnType } from '@wagmi/core/actions';
import type { PartialBy } from '../../core/internal/types.js';
import type * as RpcSchema from '../../core/RpcSchema.js';
import * as AccountActions from '../../viem/AccountActions.js';
import * as WalletActions from '../../viem/WalletActions.js';
import type { ChainIdParameter, ConnectorParameter } from './types.js';
export declare function connect<config extends Config>(config: config, parameters: connect.Parameters): Promise<connect.ReturnType>;
export declare namespace connect {
    type Parameters = RpcSchema.wallet_connect.Capabilities & {
        connector: Connector | CreateConnectorFn;
        chainIds?: readonly [number, ...number[]] | undefined;
        force?: boolean | undefined;
    };
    type ReturnType = RpcSchema.wallet_connect.Response;
    type ErrorType = BaseError;
}
export declare function disconnect(config: Config, parameters?: disconnect.Parameters): Promise<disconnect.ReturnType>;
export declare namespace disconnect {
    type Parameters = ConnectorParameter;
    type ReturnType = void;
    type ErrorType = BaseError;
}
export declare function addFunds<config extends Config>(config: config, parameters: addFunds.Parameters<config>): Promise<addFunds.ReturnType>;
export declare namespace addFunds {
    type Parameters<config extends Config = Config> = ChainIdParameter<config> & ConnectorParameter & WalletActions.addFunds.Parameters;
    type ReturnType = WalletActions.addFunds.ReturnType;
    type ErrorType = BaseError;
}
export declare function getAdmins<config extends Config>(config: config, parameters: getAdmins.Parameters<config>): Promise<getAdmins.ReturnType>;
export declare namespace getAdmins {
    type Parameters<config extends Config = Config> = ChainIdParameter<config> & ConnectorParameter & WalletActions.getAdmins.Parameters;
    type ReturnType = WalletActions.getAdmins.ReturnType;
    type ErrorType = BaseError;
}
export declare function getAssets<config extends Config>(config: config, parameters?: getAssets.Parameters): Promise<getAssets.ReturnType>;
export declare namespace getAssets {
    type Parameters = ConnectorParameter & PartialBy<WalletActions.getAssets.Parameters, 'account'>;
    type ReturnType = WalletActions.getAssets.ReturnType;
    type ErrorType = BaseError;
}
export declare function getPermissions<config extends Config>(config: config, parameters?: getPermissions.Parameters<config>): Promise<getPermissions.ReturnType>;
export declare namespace getPermissions {
    type Parameters<config extends Config = Config> = ChainIdParameter<config> & ConnectorParameter & WalletActions.getPermissions.Parameters;
    type ReturnType = WalletActions.getPermissions.ReturnType;
    type ErrorType = BaseError;
}
export declare function grantAdmin<config extends Config>(config: config, parameters: grantAdmin.Parameters<config>): Promise<grantAdmin.ReturnType>;
export declare namespace grantAdmin {
    type Parameters<config extends Config = Config> = ChainIdParameter<config> & ConnectorParameter & WalletActions.grantAdmin.Parameters;
    type ReturnType = WalletActions.grantAdmin.ReturnType;
    type ErrorType = BaseError;
}
export declare function grantPermissions<config extends Config>(config: config, parameters: grantPermissions.Parameters<config>): Promise<grantPermissions.ReturnType>;
export declare namespace grantPermissions {
    type Parameters<config extends Config = Config> = ChainIdParameter<config> & ConnectorParameter & WalletActions.grantPermissions.Parameters;
    type ReturnType = WalletActions.grantPermissions.ReturnType;
    type ErrorType = BaseError;
}
export declare function revokeAdmin<config extends Config>(config: config, parameters: revokeAdmin.Parameters<config>): Promise<undefined>;
export declare namespace revokeAdmin {
    type Parameters<config extends Config = Config> = ChainIdParameter<config> & ConnectorParameter & WalletActions.revokeAdmin.Parameters;
    type ErrorType = BaseError;
}
export declare function revokePermissions<config extends Config>(config: config, parameters: revokePermissions.Parameters<config>): Promise<undefined>;
export declare namespace revokePermissions {
    type Parameters<config extends Config = Config> = ChainIdParameter<config> & ConnectorParameter & WalletActions.revokePermissions.Parameters;
    type ErrorType = BaseError;
}
export declare function upgradeAccount<config extends Config>(config: config, parameters: upgradeAccount.Parameters<config>): Promise<upgradeAccount.ReturnType>;
export declare namespace upgradeAccount {
    type Parameters<config extends Config = Config> = ChainIdParameter<config> & WalletActions.upgradeAccount.Parameters & {
        connector: Connector | CreateConnectorFn;
    };
    type ReturnType<config extends Config = Config> = ConnectReturnType<config>;
    type ErrorType = BaseError;
}
export declare function verifyEmail<config extends Config>(config: config, parameters: verifyEmail.Parameters<config>): Promise<verifyEmail.ReturnType>;
export declare namespace verifyEmail {
    type Parameters<config extends Config = Config> = ChainIdParameter<config> & ConnectorParameter & AccountActions.verifyEmail.Parameters;
    type ReturnType = AccountActions.verifyEmail.ReturnType;
    type ErrorType = BaseError;
}
//# sourceMappingURL=core.d.ts.map