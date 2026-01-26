import * as Http from 'node:http';
export type Server = Http.Server & {
    closeAsync: () => Promise<unknown>;
    url: string;
};
export declare function createServer(handler: Http.RequestListener): Promise<Server>;
//# sourceMappingURL=http.d.ts.map