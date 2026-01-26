/**
 * Browser entry point for Base Account SDK
 * This file exposes the account interface to the global window object
 */
import { PACKAGE_VERSION } from './core/constants.js';
import { createBaseAccountSDK } from './interface/builder/core/createBaseAccountSDK.js';
import { base } from './interface/payment/base.browser.js';
import { CHAIN_IDS, TOKENS } from './interface/payment/constants.js';
import { getPaymentStatus } from './interface/payment/getPaymentStatus.js';
import { pay } from './interface/payment/pay.js';
import { subscribe } from './interface/payment/subscribe.js';
// Expose to global window object
if (typeof window !== 'undefined') {
    window.base = base;
    window.createBaseAccountSDK = createBaseAccountSDK;
    window.BaseAccountSDK = {
        VERSION: PACKAGE_VERSION,
    };
}
export { PACKAGE_VERSION as VERSION } from './core/constants.js';
export { createBaseAccountSDK } from './interface/builder/core/createBaseAccountSDK.js';
export { getCryptoKeyAccount, removeCryptoKey } from './kms/crypto-key/index.js';
export { base, CHAIN_IDS, getPaymentStatus, pay, subscribe, TOKENS };
//# sourceMappingURL=browser-entry.js.map