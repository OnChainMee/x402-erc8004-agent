/**
 * Porto Account Actions.
 */
import type { Client } from 'viem';
import * as RpcSchema from '../core/RpcSchema.js';
export declare function verifyEmail(client: Client, parameters: verifyEmail.Parameters): Promise<verifyEmail.ReturnType>;
export declare namespace verifyEmail {
    type Parameters = RpcSchema.account_verifyEmail.Parameters;
    type ReturnType = RpcSchema.account_verifyEmail.Response;
}
//# sourceMappingURL=AccountActions.d.ts.map