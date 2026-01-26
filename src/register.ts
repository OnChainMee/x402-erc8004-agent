/**
 * ERC-8004 Agent Registration Script
 * 
 * This script registers your agent on the ERC-8004 Identity Registry.
 * It performs the following steps:
 * 
 * 1. Reads your registration.json metadata
 * 2. Uploads metadata to IPFS via Pinata
 * 3. Calls the Identity Registry contract to mint your agent NFT
 * 4. Returns your agentId for future reference
 * 
 * Requirements:
 * - PRIVATE_KEY in .env (wallet with testnet ETH for gas)
 * - PINATA_JWT in .env (for IPFS uploads)
 * 
 * Run with: npm run register
 */

import 'dotenv/config';
import fs from 'fs/promises';
import { createWalletClient, createPublicClient, http, parseAbi } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

// ============================================================================
// Contract Configuration
// ============================================================================

/**
 * ERC-8004 Identity Registry ABI (minimal)
 * The register() function mints an agent NFT with your tokenURI
 */
const IDENTITY_REGISTRY_ABI = parseAbi([
  'function register(string tokenURI) external returns (uint256 agentId)',
  'event Registered(uint256 indexed agentId, string tokenURI, address indexed owner)',
]);

/**
 * Chain configuration for Base Sepolia
 * Change this if you want to deploy to a different network
 */
const CHAIN_CONFIG = {
  id: 84532,
  name: 'Base Sepolia',
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
  rpcUrls: { default: { http: ['https://sepolia.base.org'] } },
  blockExplorers: { default: { name: 'Explorer', url: 'https://sepolia.basescan.org' } },
};

// Identity Registry contract address on Base Sepolia
const IDENTITY_REGISTRY = '0x8004AA63c570c570eBF15376c0dB199918BFe9Fb';

// ============================================================================
// IPFS Upload
// ============================================================================

/**
 * Upload registration data to IPFS via Pinata
 * Returns the IPFS hash (CID) of the uploaded file
 */
async function uploadToIPFS(data: string, jwt: string): Promise<string> {
  const blob = new Blob([data], { type: 'application/json' });
  const formData = new FormData();
  formData.append('file', blob, 'registration.json');

  const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
    method: 'POST',
    headers: { Authorization: `Bearer ${jwt}` },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Pinata upload failed: ${response.statusText}`);
  }

  const result = await response.json() as { IpfsHash: string };
  return result.IpfsHash;
}

// ============================================================================
// Main Registration Flow
// ============================================================================

async function main() {
  // Step 1: Load environment variables
  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey) {
    throw new Error('PRIVATE_KEY not set in .env');
  }

  const pinataJwt = process.env.PINATA_JWT;
  if (!pinataJwt) {
    throw new Error('PINATA_JWT not set in .env');
  }

  // Step 2: Read registration.json (your agent's metadata)
  const registrationData = await fs.readFile('registration.json', 'utf-8');
  const registration = JSON.parse(registrationData);

  // Step 3: Prepare tokenURI (either IPFS or base64)
  let tokenURI: string;

  // Upload to IPFS via Pinata
  // The tokenURI will be: ipfs://Qm...
  console.log('📤 Uploading to IPFS...');
  const ipfsHash = await uploadToIPFS(registrationData, pinataJwt);
  tokenURI = `ipfs://${ipfsHash}`;
  console.log('✅ Uploaded to IPFS:', tokenURI);

  // Step 4: Setup wallet client (for sending transactions)
  const account = privateKeyToAccount(privateKey as `0x${string}`);
  console.log('🔑 Registering from:', account.address);

  const walletClient = createWalletClient({
    account,
    chain: CHAIN_CONFIG,
    transport: http(),
  });

  // Public client for reading blockchain state
  const publicClient = createPublicClient({
    chain: CHAIN_CONFIG,
    transport: http(),
  });

  // Step 5: Call the register() function on the Identity Registry
  console.log('📝 Registering agent on Base Sepolia...');
  const hash = await walletClient.writeContract({
    address: IDENTITY_REGISTRY,
    abi: IDENTITY_REGISTRY_ABI,
    functionName: 'register',
    args: [tokenURI],
  });

  // Step 6: Wait for transaction confirmation
  console.log('⏳ Waiting for confirmation...');
  const receipt = await publicClient.waitForTransactionReceipt({ hash });

  // Step 7: Parse the Registered event to get agentId
  let agentId: string | null = null;
  
  // Decode the event logs to extract agentId
  for (const log of receipt.logs) {
    if (log.address.toLowerCase() === IDENTITY_REGISTRY.toLowerCase()) {
      try {
        const decoded = publicClient.decodeEventLog({
          abi: IDENTITY_REGISTRY_ABI,
          data: log.data,
          topics: log.topics,
        });
        
        if (decoded.eventName === 'Registered') {
          agentId = decoded.args.agentId?.toString() || null;
          break;
        }
      } catch (e) {
        // Continue searching if this log doesn't match
        continue;
      }
    }
  }

  // Step 8: Output results
  console.log('\n✅ Agent registered successfully!');
  console.log('📋 Transaction:', `https://sepolia.basescan.org/tx/${hash}`);
  console.log('🔗 Registry:', IDENTITY_REGISTRY);
  console.log('📄 Token URI:', tokenURI);
  
  if (agentId) {
    console.log('🆔 Agent ID:', agentId);
    
    // Update registration.json with the registry reference
    registration.registrations = [{
      agentId,
      agentRegistry: `eip155:84532:${IDENTITY_REGISTRY}`,
    }];
    await fs.writeFile('registration.json', JSON.stringify(registration, null, 2));
    console.log('\n✅ Updated registration.json with agentId');
  } else {
    console.log('\n⚠️  Could not extract agentId from transaction logs');
    console.log('💡 Please manually update registration.json with your agentId');
    registration.registrations = [{
      agentId: 'UPDATE_WITH_AGENT_ID',
      agentRegistry: `eip155:84532:${IDENTITY_REGISTRY}`,
    }];
    await fs.writeFile('registration.json', JSON.stringify(registration, null, 2));
  }
}

main().catch(console.error);
