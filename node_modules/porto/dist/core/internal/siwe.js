import * as Siwe from 'ox/Siwe';
export async function authenticate(parameters) {
    const { address, authUrl, message, signature, publicKey } = parameters;
    const { chainId } = Siwe.parseMessage(message);
    return await fetch(authUrl.verify, {
        body: JSON.stringify({
            address,
            chainId,
            message,
            signature,
            walletAddress: address,
            ...(publicKey && { publicKey }),
        }),
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    }).then((res) => res.json());
}
export async function buildMessage(client, siwe, options) {
    const { chainId = client.chain?.id, domain, uri, resources, version = '1', } = siwe;
    const { address } = options;
    const authUrl = siwe.authUrl ? resolveAuthUrl(siwe.authUrl) : undefined;
    if (!chainId)
        throw new Error('`chainId` is required.');
    if (!domain)
        throw new Error('`domain` is required.');
    if (!siwe.nonce && !authUrl?.nonce)
        throw new Error('`nonce` or `authUrl.nonce` is required.');
    if (!uri)
        throw new Error('`uri` is required.');
    const nonce = await (async () => {
        if (siwe.nonce)
            return siwe.nonce;
        if (!authUrl?.nonce)
            throw new Error('`nonce` or `authUrl.nonce` is required.');
        const response = await fetch(authUrl.nonce, {
            body: JSON.stringify({
                address,
                chainId,
                walletAddress: address,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        const res = await response.json().catch(() => undefined);
        if (!res?.nonce)
            throw new Error('`nonce` or `authUrl.nonce` is required.');
        return res.nonce;
    })();
    const message = Siwe.createMessage({
        ...siwe,
        address: options.address,
        chainId,
        domain,
        nonce,
        resources: resources,
        uri,
        version,
    });
    return message;
}
export function resolveAuthUrl(authUrl, origin = '') {
    if (!authUrl)
        return undefined;
    const urls = (() => {
        if (typeof authUrl === 'string') {
            const url = authUrl.replace(/\/$/, '');
            return {
                logout: url + '/logout',
                nonce: url + '/nonce',
                verify: url + '/verify',
            };
        }
        return authUrl;
    })();
    return {
        logout: resolveUrl(urls.logout, origin),
        nonce: resolveUrl(urls.nonce, origin),
        verify: resolveUrl(urls.verify, origin),
    };
}
function resolveUrl(url, origin) {
    if (!origin)
        return url;
    if (!url.startsWith('/'))
        return url;
    return origin + url;
}
//# sourceMappingURL=siwe.js.map