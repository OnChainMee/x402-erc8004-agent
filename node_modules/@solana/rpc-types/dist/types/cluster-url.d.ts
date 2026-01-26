export type MainnetUrl = string & {
    '~cluster': 'mainnet';
};
export type DevnetUrl = string & {
    '~cluster': 'devnet';
};
export type TestnetUrl = string & {
    '~cluster': 'testnet';
};
export type ClusterUrl = DevnetUrl | MainnetUrl | TestnetUrl | string;
/** Given a URL casts it to a type that is only accepted where mainnet URLs are expected. */
export declare function mainnet(putativeString: string): MainnetUrl;
/** Given a URL casts it to a type that is only accepted where devnet URLs are expected. */
export declare function devnet(putativeString: string): DevnetUrl;
/** Given a URL casts it to a type that is only accepted where testnet URLs are expected. */
export declare function testnet(putativeString: string): TestnetUrl;
//# sourceMappingURL=cluster-url.d.ts.map