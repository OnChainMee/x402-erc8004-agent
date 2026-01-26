import { z } from 'zod';

declare const NetworkSchema: z.ZodEnum<["abstract", "abstract-testnet", "base-sepolia", "base", "avalanche-fuji", "avalanche", "iotex", "solana-devnet", "solana", "sei", "sei-testnet", "polygon", "polygon-amoy", "peaq", "story", "educhain", "skale-base-sepolia"]>;
type Network = z.infer<typeof NetworkSchema>;
declare const SupportedEVMNetworks: Network[];
declare const EvmNetworkToChainId: Map<"base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana", number>;
declare const SupportedSVMNetworks: Network[];
declare const SvmNetworkToChainId: Map<"base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana", number>;
declare const ChainIdToNetwork: Record<number, Network>;

export { ChainIdToNetwork as C, EvmNetworkToChainId as E, type Network as N, SupportedEVMNetworks as S, NetworkSchema as a, SupportedSVMNetworks as b, SvmNetworkToChainId as c };
