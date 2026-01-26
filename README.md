# x402 & ERC-8004 Agent Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Production-ready agent application that combines:
- **A2A (JSON-RPC 2.0)** for agent-to-agent messaging
- **x402** for automated micropayments
- **ERC-8004** for on-chain agent identity

## Highlights

- A2A server with `/a2a` JSON-RPC endpoint and discovery card
- x402 payment middleware with configurable pricing and network
- ERC-8004 registration flow with IPFS metadata via Pinata
- OpenAI-powered agent responses
- React UI for agent info, payment status, and chat

## Architecture

### x402 Payment
- Integrated via `x402-express` middleware
- Secures `/a2a` with payment verification
- Default: Base Sepolia testnet, `$0.001` per request

### ERC-8004 Identity
- Registration on Base Sepolia Identity Registry
- IPFS metadata using Pinata
- NFT-based agent identity with trust primitives

## Quickstart

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
```bash
cp .env.example .env
```

Required:
- `OPENAI_API_KEY`
- `X402_PAYEE_ADDRESS`
- `PRIVATE_KEY` (for ERC-8004 registration)
- `PINATA_JWT`

Optional:
- `DISABLE_X402=true` (development)
- `X402_PRICE` (default `$0.001`)
- `PORT` (default `3000`)

### 3. (Optional) Register your agent
```bash
npm run register
```
This uploads `registration.json` to IPFS, registers on ERC-8004, and updates the file with `agentId`. You'll need Base Sepolia ETH for gas.

### 4. (Optional) Verify setup
```bash
npm run verify
```
Checks environment variables, required files, dependencies, and ERC-8004 registration status.

### 5. Start the server
```bash
npm run start:a2a
```
Endpoints:
- Agent card: `http://localhost:3000/.well-known/agent-card.json`
- JSON-RPC: `http://localhost:3000/a2a`

### 6. Start the frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend: `http://localhost:5173`

See `frontend/README.md` for detailed frontend setup.

## Usage

### Discover the agent card
```bash
curl http://localhost:3000/.well-known/agent-card.json
```

### Send a message (A2A JSON-RPC)
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
Note: when x402 is enabled, `/a2a` requires valid payment headers.

### Supported methods
- `message/send`
- `tasks/get`
- `tasks/cancel`

## Project Structure
```
.
├── src/
│   ├── a2a-server.ts       # A2A server with x402 middleware
│   ├── agent.ts            # LLM agent logic
│   ├── register.ts         # ERC-8004 registration script
│   └── verify-setup.ts     # Setup verification
├── frontend/               # React UI
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── services/       # API clients
│   │   └── App.tsx         # Main app
│   └── package.json
├── .well-known/
│   └── agent-card.json     # Agent discovery card
├── registration.json       # ERC-8004 metadata
├── package.json
├── tsconfig.json
└── README.md
```

## Configuration

### x402 settings
Update `src/a2a-server.ts` to change:
- Price: `process.env.X402_PRICE || '$0.001'`
- Network: `'base-sepolia'` or `'base'`
- Facilitator URL: `'https://x402.org/facilitator'`

Disable payments for dev:
```bash
DISABLE_X402=true npm run start:a2a
```

### ERC-8004 registry
Update `src/register.ts`:
- Chain: Base Sepolia (chain ID `84532`)
- Registry: `0x8004AA63c570c570eBF15376c0dB199918BFe9Fb`

### Agent behavior
Update `src/agent.ts`:
- Model: `gpt-4o-mini`
- System prompt
- Response logic

## Development
```bash
npm run build
```

## Resources
- [A2A Protocol](https://a2a-protocol.org/)
- [x402 Documentation](https://docs.cdp.coinbase.com/x402/quickstart-for-sellers)
- [ERC-8004 Standard](https://eips.ethereum.org/EIPS/eip-8004)
- [Base Sepolia Explorer](https://sepolia.basescan.org/)

## License
MIT

