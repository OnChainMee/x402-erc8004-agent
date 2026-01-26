import type { Config } from '@wagmi/core';
import type { getAdmins, getAssets, getPermissions } from './core.js';
export declare function getAdminsQueryKey<config extends Config>(options?: getAdmins.Parameters<config>): readonly ["admins", {
    readonly connectorUid: string | undefined;
    readonly chainId?: config["chains"][number]["id"] | ((config["chains"][number]["id"] extends infer T ? T extends config["chains"][number]["id"] ? T extends config["chains"][number]["id"] ? T : undefined : never : never) & number) | undefined;
    readonly address?: `0x${string}` | undefined;
}];
export declare namespace getAdminsQueryKey {
    type Value<config extends Config> = ReturnType<typeof getAdminsQueryKey<config>>;
}
export declare function getPermissionsQueryKey<config extends Config>(options?: getPermissions.Parameters<config>): readonly ["permissions", {
    readonly connectorUid: string | undefined;
    readonly chainId?: config["chains"][number]["id"] | (config["chains"][number]["id"] extends infer T ? T extends config["chains"][number]["id"] ? T extends config["chains"][number]["id"] ? T : undefined : never : never) | undefined;
    readonly address?: `0x${string}` | undefined;
    readonly chainIds?: readonly number[] | undefined;
}];
export declare namespace getPermissionsQueryKey {
    type Value<config extends Config> = ReturnType<typeof getPermissionsQueryKey<config>>;
}
export declare function getAssetsQueryKey<config extends Config>(options: getAssets.Parameters): readonly ["assets", {
    readonly connectorUid: string | undefined;
    readonly assetFilter?: Record<`0x${string}`, readonly {
        address: `0x${string}` | "native";
        type: string;
    }[]> | undefined;
    readonly assetTypeFilter?: readonly string[] | undefined;
    readonly chainFilter?: readonly number[] | undefined;
    readonly account?: `0x${string}` | import("../../viem/Account.js").Account | undefined;
}];
export declare namespace getAssetsQueryKey {
    type Value<config extends Config> = ReturnType<typeof getAssetsQueryKey<config>>;
}
//# sourceMappingURL=query.d.ts.map