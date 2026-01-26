/**
 * Configuration options for Solana (SVM) RPC connections.
 */
interface SvmConfig {
    /**
     * Custom RPC URL for Solana connections.
     * If not provided, defaults to public Solana RPC endpoints based on network.
     */
    rpcUrl?: string;
}
/**
 * Configuration options for X402 client and facilitator operations.
 */
interface X402Config {
    /** Configuration for Solana (SVM) operations */
    svmConfig?: SvmConfig;
}

export type { SvmConfig as S, X402Config as X };
