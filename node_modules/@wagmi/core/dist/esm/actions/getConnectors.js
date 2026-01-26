let previousConnectors = [];
/** https://wagmi.sh/core/api/actions/getConnectors */
export function getConnectors(config) {
    const connectors = config.connectors;
    if (previousConnectors.length === connectors.length &&
        previousConnectors.every((connector, index) => connector === connectors[index]))
        return previousConnectors;
    previousConnectors = connectors;
    return connectors;
}
//# sourceMappingURL=getConnectors.js.map