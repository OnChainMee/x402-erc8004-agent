export async function waitForHydration(store) {
    if (store.persist.hasHydrated())
        return;
    await new Promise((resolve) => {
        store.persist.onFinishHydration(() => resolve(true));
        setTimeout(() => resolve(true), 100);
    });
}
//# sourceMappingURL=store.js.map