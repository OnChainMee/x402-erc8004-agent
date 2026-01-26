import { createClient, http } from 'viem';
import { getChainId } from 'viem/actions';
import * as Chains from '../../core/Chains.js';
import * as Mode from '../../core/Mode.js';
import * as Porto from '../../core/Porto.js';
import * as WalletClient from '../../viem/WalletClient.js';
import * as Dialog from '../Dialog.js';
import * as Utils from './utils.js';
/** Gets a Viem client for Porto Dialog. */
export async function getWalletClient(options = {}) {
    const { dialog: host } = options;
    const porto = Porto.create({
        announceProvider: false,
        chains: [Chains.base, Chains.baseSepolia],
        mode: Mode.dialog({
            host: host ? new URL('/dialog', 'https://' + host).toString() : undefined,
            renderer: await Dialog.cli(),
        }),
    });
    return WalletClient.fromPorto(porto, {
        chain: Chains.base,
    });
}
/** Gets a Viem client for Relay. */
export async function getRelayClient(options = {}) {
    const chain = Utils.kebabToCamel(options.chain);
    const client = createClient({
        // biome-ignore lint/performance/noDynamicNamespaceImportAccess: _
        chain: Chains[chain],
        transport: http(options.rpc),
    });
    client.chain = {
        ...client.chain,
        id: (await getChainId(client)),
    };
    return client;
}
//# sourceMappingURL=context.js.map