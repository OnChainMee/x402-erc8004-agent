import * as Http from 'node:http';
export function createServer(handler) {
    const server = Http.createServer(handler);
    return new Promise((resolve, reject) => {
        server.on('error', reject);
        server.listen(() => {
            const { port } = server.address();
            resolve(Object.assign(server, {
                closeAsync() {
                    return new Promise((resolve, reject) => server.close((err) => (err ? reject(err) : resolve(undefined))));
                },
                url: `http://localhost:${port}`,
            }));
        });
    });
}
//# sourceMappingURL=http.js.map