// TODO: Export from wagmi internals
export function filterQueryOptions(options) {
    // destructuring is super fast
    // biome-ignore format: no formatting
    const { 
    // import('@tanstack/query-core').QueryOptions
    _defaulted, behavior, gcTime, initialData, initialDataUpdatedAt, maxPages, meta, networkMode, queryFn, queryHash, queryKey, queryKeyHashFn, retry, retryDelay, structuralSharing, 
    // import('@tanstack/query-core').InfiniteQueryObserverOptions
    getPreviousPageParam, getNextPageParam, initialPageParam, 
    // import('@tanstack/react-query').UseQueryOptions
    _optimisticResults, enabled, notifyOnChangeProps, placeholderData, refetchInterval, refetchIntervalInBackground, refetchOnMount, refetchOnReconnect, refetchOnWindowFocus, retryOnMount, select, staleTime, suspense, throwOnError, 
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // wagmi
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    config, connector, query, ...rest } = options;
    return rest;
}
//# sourceMappingURL=utils.js.map