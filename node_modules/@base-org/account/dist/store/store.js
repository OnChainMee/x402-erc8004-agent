import { PACKAGE_VERSION } from '../core/constants.js';
import { createJSONStorage, persist } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';
const createChainSlice = () => {
    return {
        chains: [],
    };
};
const createKeysSlice = () => {
    return {
        keys: {},
    };
};
const createAccountSlice = () => {
    return {
        account: {},
    };
};
const createSubAccountSlice = () => {
    return {
        subAccount: undefined,
    };
};
const createSubAccountConfigSlice = () => {
    return {
        subAccountConfig: {},
    };
};
const createSpendPermissionsSlice = () => {
    return {
        spendPermissions: [],
    };
};
const createConfigSlice = () => {
    return {
        config: {
            version: PACKAGE_VERSION,
        },
    };
};
export const sdkstore = createStore(persist((...args) => ({
    ...createChainSlice(...args),
    ...createKeysSlice(...args),
    ...createAccountSlice(...args),
    ...createSubAccountSlice(...args),
    ...createSpendPermissionsSlice(...args),
    ...createConfigSlice(...args),
    ...createSubAccountConfigSlice(...args),
}), {
    name: 'base-acc-sdk.store',
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => {
        // Explicitly select only the data properties we want to persist
        // (not the methods)
        return {
            chains: state.chains,
            keys: state.keys,
            account: state.account,
            subAccount: state.subAccount,
            spendPermissions: state.spendPermissions,
            config: state.config,
        };
    },
}));
// Non-persisted subaccount configuration
export const subAccountsConfig = {
    get: () => sdkstore.getState().subAccountConfig,
    set: (subAccountConfig) => {
        sdkstore.setState((state) => ({
            subAccountConfig: { ...state.subAccountConfig, ...subAccountConfig },
        }));
    },
    clear: () => {
        sdkstore.setState({
            subAccountConfig: {},
        });
    },
};
export const subAccounts = {
    get: () => sdkstore.getState().subAccount,
    set: (subAccount) => {
        sdkstore.setState((state) => ({
            subAccount: state.subAccount
                ? { ...state.subAccount, ...subAccount }
                : { address: subAccount.address, ...subAccount },
        }));
    },
    clear: () => {
        sdkstore.setState({
            subAccount: undefined,
        });
    },
};
export const spendPermissions = {
    get: () => sdkstore.getState().spendPermissions,
    set: (spendPermissions) => {
        sdkstore.setState({ spendPermissions });
    },
    clear: () => {
        sdkstore.setState({
            spendPermissions: [],
        });
    },
};
export const account = {
    get: () => sdkstore.getState().account,
    set: (account) => {
        sdkstore.setState((state) => ({
            account: { ...state.account, ...account },
        }));
    },
    clear: () => {
        sdkstore.setState({
            account: {},
        });
    },
};
export const chains = {
    get: () => sdkstore.getState().chains,
    set: (chains) => {
        sdkstore.setState({ chains });
    },
    clear: () => {
        sdkstore.setState({
            chains: [],
        });
    },
};
export const keys = {
    get: (key) => sdkstore.getState().keys[key],
    set: (key, value) => {
        sdkstore.setState((state) => ({ keys: { ...state.keys, [key]: value } }));
    },
    clear: () => {
        sdkstore.setState({
            keys: {},
        });
    },
};
export const config = {
    get: () => sdkstore.getState().config,
    set: (config) => {
        sdkstore.setState((state) => ({ config: { ...state.config, ...config } }));
    },
};
const actions = {
    subAccounts,
    subAccountsConfig,
    spendPermissions,
    account,
    chains,
    keys,
    config,
};
export const store = {
    ...sdkstore,
    ...actions,
};
//# sourceMappingURL=store.js.map