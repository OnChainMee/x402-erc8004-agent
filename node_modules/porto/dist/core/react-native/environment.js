let environment;
export const isEnvironmentConfigured = () => environment !== undefined;
export const reactNative = {
    get environment() {
        if (!environment)
            throw new Error('React Native environment is not configured');
        return environment;
    },
    set environment(env) {
        environment = env;
    },
};
//# sourceMappingURL=environment.js.map