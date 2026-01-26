import * as ExpoCrypto from 'expo-crypto';
import { Platform } from 'react-native';
if (Platform.OS !== 'web')
    Object.defineProperty(globalThis, 'crypto', {
        enumerable: true,
        value: {
            digest: (algorithm, message) => ExpoCrypto.digest(algorithm, message),
            getRandomValues: (array) => ExpoCrypto.getRandomValues(array),
            randomUUID: () => ExpoCrypto.randomUUID(),
        },
    });
//# sourceMappingURL=crypto.js.map