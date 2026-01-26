import { RequestArguments } from '../../../core/provider/interface.js';
import { OwnerAccount } from '../../../core/type/index.js';
export declare function handleAddSubAccountOwner({ ownerAccount, globalAccountRequest, chainId, }: {
    ownerAccount: OwnerAccount;
    globalAccountRequest: (request: RequestArguments) => Promise<unknown>;
    chainId: number;
}): Promise<number>;
//# sourceMappingURL=handleAddSubAccountOwner.d.ts.map