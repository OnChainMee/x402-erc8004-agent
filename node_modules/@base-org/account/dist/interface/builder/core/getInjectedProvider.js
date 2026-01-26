const TBA_PROVIDER_IDENTIFIER = 'isCoinbaseBrowser';
export function getInjectedProvider() {
    const injectedProvider = window.top?.ethereum ?? window.ethereum;
    if (injectedProvider?.[TBA_PROVIDER_IDENTIFIER]) {
        return injectedProvider;
    }
    return null;
}
//# sourceMappingURL=getInjectedProvider.js.map