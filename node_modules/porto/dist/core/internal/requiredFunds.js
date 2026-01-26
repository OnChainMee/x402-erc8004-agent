import * as Value from 'ox/Value';
/**
 * Transforms into Relay-formatted required funds.
 *
 * @param requiredFunds - The required funds object to convert.
 * @param options - The options for the conversion.
 * @returns The converted required funds object.
 */
// TODO: perhaps Relay should support `Capabilities.requiredFunds.Request` format.
export function toRelay(requiredFunds, options) {
    const { tokens } = options;
    const interopTokens = tokens.filter((token) => token.interop);
    return requiredFunds.map((requiredFund) => {
        if (requiredFund.address)
            return requiredFund;
        const interopToken = interopTokens.find((token) => token.symbol === requiredFund.symbol);
        if (!interopToken)
            throw new Error(`interop token not found: ${requiredFund.symbol}`);
        return {
            address: interopToken.address,
            value: Value.from(requiredFund.value, interopToken.decimals),
        };
    });
}
//# sourceMappingURL=requiredFunds.js.map