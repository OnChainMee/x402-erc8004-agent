/**
 * Porto Account Actions.
 */
import * as z from 'zod/mini';
import * as RpcSchema from '../core/RpcSchema.js';
export async function verifyEmail(client, parameters) {
    const method = 'account_verifyEmail';
    const response = await client.request({
        method,
        params: [z.encode(RpcSchema.account_verifyEmail.Parameters, parameters)],
    });
    return z.decode(RpcSchema.account_verifyEmail.Response, response);
}
//# sourceMappingURL=AccountActions.js.map