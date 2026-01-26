import { charge } from './charge.js';
import { CHAIN_IDS, TOKENS } from './constants.js';
import { getOrCreateSubscriptionOwnerWallet } from './getOrCreateSubscriptionOwnerWallet.js';
import { getPaymentStatus } from './getPaymentStatus.js';
import { getSubscriptionStatus } from './getSubscriptionStatus.js';
import { pay } from './pay.js';
import { prepareCharge } from './prepareCharge.js';
import { subscribe } from './subscribe.js';
/**
 * Node.js payment interface
 */
export const base = {
    pay,
    subscribe,
    getPaymentStatus,
    subscription: {
        subscribe,
        getStatus: getSubscriptionStatus,
        prepareCharge,
        charge,
        getOrCreateSubscriptionOwnerWallet,
    },
    constants: {
        CHAIN_IDS,
        TOKENS,
    },
    types: {},
};
//# sourceMappingURL=base.node.js.map