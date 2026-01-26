export type AllowedHttpRequestHeaders = Readonly<{
    [K in DisallowedHeaders | ForbiddenHeaders as Capitalize<Lowercase<K>> | K | Lowercase<K> | Uncapitalize<K> | Uppercase<K>]?: never;
} & {
    [headerName: string]: string;
}>;
type DisallowedHeaders = 'Accept' | 'Content-Length' | 'Content-Type' | 'Solana-Client';
type ForbiddenHeaders = 'Accept-Charset' | 'Access-Control-Request-Headers' | 'Access-Control-Request-Method' | 'Connection' | 'Content-Length' | 'Cookie' | 'Date' | 'DNT' | 'Expect' | 'Host' | 'Keep-Alive' | 'Origin' | 'Permissions-Policy' | 'Referer' | 'TE' | 'Trailer' | 'Transfer-Encoding' | 'Upgrade' | 'Via' | `Proxy-${string}` | `Sec-${string}`;
export declare function assertIsAllowedHttpRequestHeaders(headers: Record<string, string>): asserts headers is AllowedHttpRequestHeaders;
export declare function normalizeHeaders<T extends Record<string, string>>(headers: T): {
    [K in string & keyof T as Lowercase<K>]: T[K];
};
export {};
//# sourceMappingURL=http-transport-headers.d.ts.map