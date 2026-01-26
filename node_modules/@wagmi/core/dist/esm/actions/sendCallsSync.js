import { sendCallsSync as viem_sendCallsSync, } from 'viem/actions';
import { getAction } from '../utils/getAction.js';
import { getConnectorClient, } from './getConnectorClient.js';
/** https://wagmi.sh/core/api/actions/sendCallsSync */
export async function sendCallsSync(config, parameters) {
    const { account, chainId, connector, calls, ...rest } = parameters;
    const client = await getConnectorClient(config, {
        account,
        assertChainId: false,
        chainId,
        connector,
    });
    const action = getAction(client, viem_sendCallsSync, 'sendCallsSync');
    return action({
        ...rest,
        ...(typeof account !== 'undefined' ? { account } : {}),
        calls,
        chain: chainId ? { id: chainId } : undefined,
    });
}
//# sourceMappingURL=sendCallsSync.js.map