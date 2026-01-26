# x402 & ERC-8004 Agent Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A complete AI agent application that integrates both **x402** (Coinbase payment protocol) and **ERC-8004** (Agent Identity Registry) standards.

## Features

- 🤖 **A2A Protocol Server**: JSON-RPC 2.0 endpoint for agent-to-agent communication
- 💰 **x402 Payment Integration**: Automated micropayments via Coinbase's x402 protocol
- 🆔 **ERC-8004 Identity**: On-chain agent identity registration and management
- 🧠 **AI Agent**: Powered by OpenAI GPT-4o-mini for intelligent responses
- 🎨 **Modern Frontend**: Beautiful React UI for interacting with the agent

## Architecture

### x402 Payment Protocol
- Integrated via `x402-express` middleware
- Protects the `/a2a` endpoint with payment verification
- Configured for Base Sepolia testnet (can be changed to mainnet)
- Default price: $0.001 per request

### ERC-8004 Identity Registry
- Agent registration on Base Sepolia Identity Registry
- IPFS metadata storage via Pinata
- On-chain NFT-based agent identity
- Supports reputation and trust mechanisms

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required environment variables:
- `OPENAI_API_KEY`: Your OpenAI API key
- `X402_PAYEE_ADDRESS`: Your wallet address to receive payments (default provided)
- `PRIVATE_KEY`: Wallet private key for ERC-8004 registration (needs testnet ETH)
- `PINATA_JWT`: Pinata JWT token for IPFS uploads

Optional environment variables:
- `DISABLE_X402`: Set to `true` to disable x402 payment middleware for development/testing
- `X402_PRICE`: Price per request (default: `$0.001`)
- `PORT`: Server port (default: `3000`)

### 3. Register Your Agent (ERC-8004)

Register your agent on the ERC-8004 Identity Registry:

```bash
npm run register
```

This will:
1. Upload your `registration.json` metadata to IPFS
2. Call the Identity Registry contract to mint your agent NFT
3. Return your `agentId` for future reference

**Note**: You'll need testnet ETH on Base Sepolia for gas fees.

### 4. Verify Setup (Optional)

Verify that everything is configured correctly:

```bash
npm run verify
```

This will check:
- Environment variables are set
- Required files exist
- Dependencies are installed
- ERC-8004 registration status

### 5. Start the A2A Server

```bash
npm run start:a2a
```

The server will start on `http://localhost:3000` with:
- Agent Card: `http://localhost:3000/.well-known/agent-card.json`
- JSON-RPC endpoint: `http://localhost:3000/a2a`

### 6. Start the Frontend (Optional)

To use the web UI:

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

See [frontend/README.md](frontend/README.md) for detailed frontend setup instructions.

## Usage

### Agent Card Discovery

Other agents can discover your agent via:

```bash
curl http://localhost:3000/.well-known/agent-card.json
```

### Sending Messages (A2A Protocol)

Send a message to your agent using JSON-RPC 2.0:

```bash
curl -X POST http://localhost:3000/a2a \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "method": "message/send",
    "params": {
      "message": {
        "role": "user",
        "parts": [{"type": "text", "text": "Hello, agent!"}]
      }
    },
    "id": 1
  }'
```

**Note**: The `/a2a` endpoint is protected by x402 payment middleware. Requests must include valid x402 payment headers.

### Supported Methods

- `message/send`: Send a message and get a response
- `tasks/get`: Get status of a previous task
- `tasks/cancel`: Cancel a running task

## Project Structure

```
.
├── src/
│   ├── a2a-server.ts      # A2A protocol server with x402 middleware
│   ├── agent.ts            # LLM agent logic (OpenAI integration)
│   ├── register.ts         # ERC-8004 registration script
│   └── verify-setup.ts     # Setup verification script
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API clients and services
│   │   └── App.tsx         # Main app component
│   └── package.json
├── .well-known/
│   └── agent-card.json     # Agent discovery card
├── registration.json       # ERC-8004 registration metadata
├── package.json
├── tsconfig.json
└── README.md
```

## Configuration

### x402 Payment Settings

Edit `src/a2a-server.ts` to change:
- Payment price: `process.env.X402_PRICE || '$0.001'`
- Network: `'base-sepolia'` (change to `'base'` for mainnet)
- Facilitator URL: `'https://x402.org/facilitator'`

**Development Mode**: To disable x402 payment middleware for testing, set `DISABLE_X402=true` in your `.env` file or run:
```bash
DISABLE_X402=true npm run start:a2a
```

This allows you to test the agent without payment requirements.

### ERC-8004 Registry

Edit `src/register.ts` to change:
- Chain: Currently Base Sepolia (chain ID: 84532)
- Registry address: `0x8004AA63c570c570eBF15376c0dB199918BFe9Fb`

### Agent Behavior

Edit `src/agent.ts` to customize:
- LLM model: Currently `'gpt-4o-mini'`
- System prompt: Agent personality and behavior
- Response generation logic

## Development

### Build TypeScript

```bash
npm run build
```

### Environment

- **Testnet**: Base Sepolia (default)
- **Mainnet**: Base (change network configs)

## Resources

- [A2A Protocol](https://a2a-protocol.org/)
- [x402 Documentation](https://docs.cdp.coinbase.com/x402/quickstart-for-sellers)
- [ERC-8004 Standard](https://eips.ethereum.org/EIPS/eip-8004)
- [Base Sepolia Explorer](https://sepolia.basescan.org/)

## License

MIT

