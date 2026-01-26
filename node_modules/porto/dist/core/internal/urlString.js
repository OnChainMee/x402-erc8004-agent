export function toAbsolute(url) {
    if (!url)
        return undefined;
    if (url.startsWith('/'))
        return `${window.location.origin}${url}`;
    return url;
}
//# sourceMappingURL=urlString.js.map