import { standardErrors } from '../../../core/error/errors.js';
import { assertPresence } from '../../../util/assertPresence.js';
import { presentSubAccountFundingDialog } from '../utils.js';
import { routeThroughGlobalAccount } from './routeThroughGlobalAccount.js';
export async function handleInsufficientBalanceError({ globalAccountAddress, subAccountAddress, client, request, globalAccountRequest, }) {
    const chainId = client.chain?.id;
    assertPresence(chainId, standardErrors.rpc.internal(`invalid chainId`));
    try {
        await presentSubAccountFundingDialog();
    }
    catch {
        throw standardErrors.provider.userRejectedRequest({
            message: 'User cancelled funding',
        });
    }
    const result = await routeThroughGlobalAccount({
        request,
        globalAccountAddress,
        subAccountAddress,
        client,
        globalAccountRequest,
        chainId,
    });
    return result;
}
//# sourceMappingURL=handleInsufficientBalance.js.map