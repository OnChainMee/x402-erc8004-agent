import { type UseMutationResult } from '@tanstack/react-query';
import { type Config, type ResolvedRegister } from 'wagmi';
import type { UseMutationParameters, UseQueryParameters, UseQueryReturnType } from 'wagmi/query';
import { addFunds, connect, disconnect, getAdmins, getAssets, getPermissions, grantAdmin, grantPermissions, revokeAdmin, revokePermissions, upgradeAccount, verifyEmail } from './core.js';
import { getAdminsQueryKey, getAssetsQueryKey, getPermissionsQueryKey } from './query.js';
import type { ConfigParameter } from './types.js';
export declare function useAddFunds<config extends Config = ResolvedRegister['config'], context = unknown>(parameters?: useAddFunds.Parameters<config, context>): useAddFunds.ReturnType<config, context>;
export declare namespace useAddFunds {
    type Parameters<config extends Config = Config, context = unknown> = ConfigParameter<config> & addFunds.Parameters<config> & ConfigParameter<config> & {
        mutation?: UseMutationParameters<addFunds.ReturnType, addFunds.ErrorType, addFunds.Parameters<config>, context> | undefined;
    };
    type ReturnType<config extends Config = Config, context = unknown> = UseMutationResult<addFunds.ReturnType, addFunds.ErrorType, addFunds.Parameters<config>, context>;
}
export declare function useAdmins<config extends Config = ResolvedRegister['config'], selectData = getAdmins.ReturnType>(parameters?: useAdmins.Parameters<config, selectData>): useAdmins.ReturnType<selectData>;
export declare namespace useAdmins {
    type Parameters<config extends Config = Config, selectData = getAdmins.ReturnType> = getAdmins.Parameters<config> & ConfigParameter<config> & {
        query?: Omit<UseQueryParameters<getAdmins.ReturnType, getAdmins.ErrorType, selectData, getAdminsQueryKey.Value<config>>, 'gcTime' | 'staleTime'> | undefined;
    };
    type ReturnType<selectData = getAdmins.ReturnType> = UseQueryReturnType<selectData, getAdmins.ErrorType>;
}
export declare function useAssets<config extends Config = ResolvedRegister['config'], selectData = getAssets.ReturnType>(parameters?: useAssets.Parameters<config, selectData>): useAssets.ReturnType<selectData>;
export declare namespace useAssets {
    type Parameters<config extends Config = Config, selectData = getAssets.ReturnType> = getAssets.Parameters & ConfigParameter<config> & {
        query?: Omit<UseQueryParameters<getAssets.ReturnType, getAssets.ErrorType, selectData, getAssetsQueryKey.Value<config>>, 'gcTime' | 'staleTime'> | undefined;
    };
    type ReturnType<selectData = getAssets.ReturnType> = UseQueryReturnType<selectData, getAssets.ErrorType>;
}
export declare function useConnect<config extends Config = ResolvedRegister['config'], context = unknown>(parameters?: useConnect.Parameters<config, context>): useConnect.ReturnType<context>;
export declare namespace useConnect {
    type Parameters<config extends Config = Config, context = unknown> = ConfigParameter<config> & {
        mutation?: UseMutationParameters<connect.ReturnType, connect.ErrorType, connect.Parameters, context> | undefined;
    };
    type ReturnType<context = unknown> = UseMutationResult<connect.ReturnType, connect.ErrorType, connect.Parameters, context>;
}
export declare function useDisconnect<config extends Config = ResolvedRegister['config'], context = unknown>(parameters?: useDisconnect.Parameters<context>): useDisconnect.ReturnType<context>;
export declare namespace useDisconnect {
    type Parameters<context = unknown> = ConfigParameter & {
        mutation?: UseMutationParameters<disconnect.ReturnType, disconnect.ErrorType, disconnect.Parameters, context> | undefined;
    };
    type ReturnType<context = unknown> = UseMutationResult<disconnect.ReturnType, disconnect.ErrorType, disconnect.Parameters, context>;
}
export declare function useGrantAdmin<config extends Config = ResolvedRegister['config'], context = unknown>(parameters?: useGrantAdmin.Parameters<config, context>): useGrantAdmin.ReturnType<config, context>;
export declare namespace useGrantAdmin {
    type Parameters<config extends Config = Config, context = unknown> = ConfigParameter<config> & {
        mutation?: UseMutationParameters<grantAdmin.ReturnType, grantAdmin.ErrorType, grantAdmin.Parameters<config>, context> | undefined;
    };
    type ReturnType<config extends Config = Config, context = unknown> = UseMutationResult<grantAdmin.ReturnType, grantAdmin.ErrorType, grantAdmin.Parameters<config>, context>;
}
export declare function useGrantPermissions<config extends Config = ResolvedRegister['config'], context = unknown>(parameters?: useGrantPermissions.Parameters<config, context>): useGrantPermissions.ReturnType<config, context>;
export declare namespace useGrantPermissions {
    type Parameters<config extends Config = Config, context = unknown> = ConfigParameter<config> & {
        mutation?: UseMutationParameters<grantPermissions.ReturnType, grantPermissions.ErrorType, grantPermissions.Parameters<config>, context> | undefined;
    };
    type ReturnType<config extends Config = Config, context = unknown> = UseMutationResult<grantPermissions.ReturnType, grantPermissions.ErrorType, grantPermissions.Parameters<config>, context>;
}
export declare function usePermissions<config extends Config = ResolvedRegister['config'], selectData = getPermissions.ReturnType>(parameters?: usePermissions.Parameters<config, selectData>): usePermissions.ReturnType<selectData>;
export declare namespace usePermissions {
    type Parameters<config extends Config = Config, selectData = getPermissions.ReturnType> = getPermissions.Parameters<config> & ConfigParameter<config> & {
        query?: Omit<UseQueryParameters<getPermissions.ReturnType, getPermissions.ErrorType, selectData, getPermissionsQueryKey.Value<config>>, 'gcTime' | 'staleTime'> | undefined;
    };
    type ReturnType<selectData = getPermissions.ReturnType> = UseQueryReturnType<selectData, getPermissions.ErrorType>;
}
export declare function useRevokeAdmin<config extends Config = ResolvedRegister['config'], context = unknown>(parameters?: useRevokeAdmin.Parameters<config, context>): useRevokeAdmin.ReturnType<config, context>;
export declare namespace useRevokeAdmin {
    type Parameters<config extends Config = Config, context = unknown> = ConfigParameter<config> & {
        mutation?: UseMutationParameters<undefined, revokeAdmin.ErrorType, revokeAdmin.Parameters<config>, context> | undefined;
    };
    type ReturnType<config extends Config = Config, context = unknown> = UseMutationResult<undefined, revokeAdmin.ErrorType, revokeAdmin.Parameters<config>, context>;
}
export declare function useRevokePermissions<config extends Config = ResolvedRegister['config'], context = unknown>(parameters?: useRevokePermissions.Parameters<config, context>): useRevokePermissions.ReturnType<config, context>;
export declare namespace useRevokePermissions {
    type Parameters<config extends Config = Config, context = unknown> = ConfigParameter<config> & {
        mutation?: UseMutationParameters<undefined, revokePermissions.ErrorType, revokePermissions.Parameters<config>, context> | undefined;
    };
    type ReturnType<config extends Config = Config, context = unknown> = UseMutationResult<undefined, revokePermissions.ErrorType, revokePermissions.Parameters<config>, context>;
}
export declare function useUpgradeAccount<config extends Config = ResolvedRegister['config'], context = unknown>(parameters?: useUpgradeAccount.Parameters<config, context>): useUpgradeAccount.ReturnType<config, context>;
export declare namespace useUpgradeAccount {
    type Parameters<config extends Config = Config, context = unknown> = ConfigParameter<config> & {
        mutation?: UseMutationParameters<upgradeAccount.ReturnType, upgradeAccount.ErrorType, upgradeAccount.Parameters<config>, context> | undefined;
    };
    type ReturnType<config extends Config = Config, context = unknown> = UseMutationResult<upgradeAccount.ReturnType, upgradeAccount.ErrorType, upgradeAccount.Parameters<config>, context>;
}
export declare function useVerifyEmail<config extends Config = ResolvedRegister['config'], context = unknown>(parameters?: useVerifyEmail.Parameters<config, context>): useVerifyEmail.ReturnType<config, context>;
export declare namespace useVerifyEmail {
    type Parameters<config extends Config = Config, context = unknown> = ConfigParameter<config> & {
        mutation?: UseMutationParameters<verifyEmail.ReturnType, verifyEmail.ErrorType, verifyEmail.Parameters<config>, context> | undefined;
    };
    type ReturnType<config extends Config = Config, context = unknown> = UseMutationResult<verifyEmail.ReturnType, verifyEmail.ErrorType, verifyEmail.Parameters<config>, context>;
}
//# sourceMappingURL=react.d.ts.map