import { ConnectorAlreadyConnectedError, ProviderNotFoundError, } from '@wagmi/core';
import { getConnectorClient, disconnect as wagmi_disconnect, } from '@wagmi/core/actions';
import { ChainMismatchError, createClient, custom, } from 'viem';
import * as AccountActions from '../../viem/AccountActions.js';
import * as WalletActions from '../../viem/WalletActions.js';
export async function connect(config, parameters) {
    // "Register" connector if not already created
    let connector;
    if (typeof parameters.connector === 'function') {
        connector = config._internal.connectors.setup(parameters.connector);
    }
    else
        connector = parameters.connector;
    // Check if connector is already connected
    if (connector.uid === config.state.current && !parameters.force)
        throw new ConnectorAlreadyConnectedError();
    try {
        config.setState((x) => ({ ...x, status: 'connecting' }));
        connector.emitter.emit('message', { type: 'connecting' });
        const provider = (await connector.getProvider());
        if (!provider)
            throw new ProviderNotFoundError();
        const client = createClient({
            transport: (opts) => custom(provider)({ ...opts, retryCount: 0 }),
        });
        const chainIds_request = parameters.chainIds ?? [config.state.chainId];
        const { accounts, chainIds } = await WalletActions.connect(client, {
            ...parameters,
            chainIds: chainIds_request,
        });
        const addresses = accounts.map((x) => x.address);
        // we already connected, but call `connector.connect` so connector even listeners are set up
        await connector.connect({
            chainId: chainIds_request[0],
            isReconnecting: true,
        });
        connector.emitter.off('connect', config._internal.events.connect);
        connector.emitter.on('change', config._internal.events.change);
        connector.emitter.on('disconnect', config._internal.events.disconnect);
        await config.storage?.setItem('recentConnectorId', connector.id);
        config.setState((x) => ({
            ...x,
            connections: new Map(x.connections).set(connector.uid, {
                accounts: addresses,
                chainId: chainIds[0],
                connector,
            }),
            current: connector.uid,
            status: 'connected',
        }));
        return { accounts, chainIds };
    }
    catch (error) {
        config.setState((x) => ({
            ...x,
            // Keep existing connector connected in case of error
            status: x.current ? 'connected' : 'disconnected',
        }));
        throw error;
    }
}
export async function disconnect(config, parameters = {}) {
    const connector = (() => {
        if (parameters.connector)
            return parameters.connector;
        const { connections, current } = config.state;
        const connection = connections.get(current);
        return connection?.connector;
    })();
    const provider = (await connector?.getProvider());
    await wagmi_disconnect(config, parameters);
    if (!provider)
        return;
    const client = createClient({
        transport: (opts) => custom(provider)({ ...opts, retryCount: 0 }),
    });
    await WalletActions.disconnect(client);
}
export async function addFunds(config, parameters) {
    const { address, chainId, connector } = parameters;
    const client = await getConnectorClient(config, {
        account: address,
        assertChainId: false,
        chainId,
        connector,
    });
    return WalletActions.addFunds(client, parameters);
}
export async function getAdmins(config, parameters) {
    const { address, chainId, connector } = parameters;
    const client = await getConnectorClient(config, {
        account: address,
        assertChainId: false,
        chainId,
        connector,
    });
    return WalletActions.getAdmins(client, parameters);
}
export async function getAssets(config, parameters = {}) {
    const { account, connector } = parameters;
    const client = await getConnectorClient(config, {
        account,
        assertChainId: false,
        connector,
    });
    return WalletActions.getAssets(client, parameters);
}
export async function getPermissions(config, parameters = {}) {
    const { address, chainId, connector } = parameters;
    const client = await getConnectorClient(config, {
        account: address,
        assertChainId: false,
        chainId,
        connector,
    });
    return WalletActions.getPermissions(client, parameters);
}
export async function grantAdmin(config, parameters) {
    const { address, chainId, connector } = parameters;
    const client = await getConnectorClient(config, {
        account: address,
        assertChainId: false,
        chainId,
        connector,
    });
    return WalletActions.grantAdmin(client, parameters);
}
export async function grantPermissions(config, parameters) {
    const { address, chainId, connector } = parameters;
    const client = await getConnectorClient(config, {
        account: address,
        assertChainId: false,
        chainId,
        connector,
    });
    return WalletActions.grantPermissions(client, parameters);
}
export async function revokeAdmin(config, parameters) {
    const { address, chainId, connector } = parameters;
    const client = await getConnectorClient(config, {
        account: address,
        assertChainId: false,
        chainId,
        connector,
    });
    return WalletActions.revokeAdmin(client, parameters);
}
export async function revokePermissions(config, parameters) {
    const { address, chainId, connector } = parameters;
    const client = await getConnectorClient(config, {
        account: address,
        assertChainId: false,
        chainId,
        connector,
    });
    return WalletActions.revokePermissions(client, parameters);
}
export async function upgradeAccount(config, parameters) {
    // "Register" connector if not already created
    let connector;
    if (typeof parameters.connector === 'function') {
        connector = config._internal.connectors.setup(parameters.connector);
    }
    else
        connector = parameters.connector;
    // Check if connector is already connected
    if (connector.uid === config.state.current)
        throw new ConnectorAlreadyConnectedError();
    if (parameters.chainId && parameters.chainId !== config.state.chainId)
        throw new ChainMismatchError({
            chain: config.chains.find((chain) => chain.id === parameters.chainId) ??
                {
                    id: parameters.chainId,
                    name: `Chain ${parameters.chainId}`,
                },
            currentChainId: config.state.chainId,
        });
    try {
        config.setState((x) => ({ ...x, status: 'connecting' }));
        connector.emitter.emit('message', { type: 'connecting' });
        const provider = (await connector.getProvider());
        if (!provider)
            throw new ProviderNotFoundError();
        const client = createClient({
            transport: (opts) => custom(provider)({ ...opts, retryCount: 0 }),
        });
        await WalletActions.upgradeAccount(client, parameters);
        // we already connected, but call `connector.connect` so connector even listeners are set up
        const data = await connector.connect({
            chainId: parameters.chainId,
            isReconnecting: true,
        });
        const accounts = data.accounts;
        connector.emitter.off('connect', config._internal.events.connect);
        connector.emitter.on('change', config._internal.events.change);
        connector.emitter.on('disconnect', config._internal.events.disconnect);
        await config.storage?.setItem('recentConnectorId', connector.id);
        config.setState((x) => ({
            ...x,
            connections: new Map(x.connections).set(connector.uid, {
                accounts,
                chainId: data.chainId,
                connector,
            }),
            current: connector.uid,
            status: 'connected',
        }));
        return { accounts, chainId: data.chainId };
    }
    catch (error) {
        config.setState((x) => ({
            ...x,
            // Keep existing connector connected in case of error
            status: x.current ? 'connected' : 'disconnected',
        }));
        throw error;
    }
}
export async function verifyEmail(config, parameters) {
    const { chainId, connector, walletAddress } = parameters;
    const client = await getConnectorClient(config, {
        account: walletAddress,
        assertChainId: false,
        chainId,
        connector,
    });
    return AccountActions.verifyEmail(client, parameters);
}
//# sourceMappingURL=core.js.map