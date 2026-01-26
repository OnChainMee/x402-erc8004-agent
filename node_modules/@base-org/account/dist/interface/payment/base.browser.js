import { CHAIN_IDS, TOKENS } from './constants.js';
import { getPaymentStatus } from './getPaymentStatus.js';
import { getSubscriptionStatus } from './getSubscriptionStatus.js';
import { pay } from './pay.js';
import { prepareCharge } from './prepareCharge.js';
import { subscribe } from './subscribe.js';
/**
 * Browser payment interface
 */
export const base = {
    pay,
    subscribe,
    getPaymentStatus,
    subscription: {
        subscribe,
        getStatus: getSubscriptionStatus,
        prepareCharge,
    },
    constants: {
        CHAIN_IDS,
        TOKENS,
    },
    types: {},
};
//# sourceMappingURL=base.browser.js.map