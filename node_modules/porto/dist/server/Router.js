import * as Route from './Route.js';
export function Router(options = {}) {
    const handler = new Router.Inner(options);
    handler.hono.get('/', (c) => c.text(`
█▀█ █▀█ █▀█ ▀█▀ █▀█
█▀▀ █▄█ █▀▄  █  █▄█
`));
    return handler;
}
(function (Router) {
    class Inner extends Route.from.Inner {
        /**
         * `.route()` allows grouping other Porto handlers in routes.
         *
         * @example
         * TODO
         *
         * @param path - base Path
         * @param app - other Porto handler
         * @returns routed Porto handler
         */
        route(path, app) {
            this.hono.route(path, app.hono);
            return this;
        }
    }
    Router.Inner = Inner;
})(Router || (Router = {}));
//# sourceMappingURL=Router.js.map