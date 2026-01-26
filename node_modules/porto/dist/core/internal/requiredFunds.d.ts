import type * as Capabilities_relay from './relay/schema/capabilities.js';
import type * as Capabilities from './schema/capabilities.js';
import type * as Token from './schema/token.js';
/**
 * Transforms into Relay-formatted required funds.
 *
 * @param requiredFunds - The required funds object to convert.
 * @param options - The options for the conversion.
 * @returns The converted required funds object.
 */
export declare function toRelay(requiredFunds: toRelay.Value, options: toRelay.Options): toRelay.ReturnType;
export declare namespace toRelay {
    type Value = Capabilities.requiredFunds.Request;
    type Options = {
        tokens: readonly Token.Token[];
    };
    type ReturnType = Capabilities_relay.requiredFunds.Request;
}
//# sourceMappingURL=requiredFunds.d.ts.map