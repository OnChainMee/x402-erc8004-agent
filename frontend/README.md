# Agent Frontend

A modern React frontend for the x402 & ERC-8004 Agent application.

## Features

- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 💬 **Chat Interface**: Real-time chat with the AI agent
- 💰 **x402 Payment Integration**: Payment status and information display
- 🆔 **ERC-8004 Identity**: Agent identity and registration info
- 📱 **Responsive**: Works on desktop and mobile devices

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Viem** - Ethereum library (for future wallet integration)

## Setup

### Prerequisites

**IMPORTANT**: The backend A2A server must be running before starting the frontend!

1. Start the backend server (from the project root):
   ```bash
   npm run start:a2a
   ```
   The backend should be running on `http://localhost:3000`

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Configure Environment Variables (Optional)

Copy `env.example` to `.env`:

```bash
cp env.example .env
```

Update the values as needed:
- `VITE_API_URL`: Backend API URL (leave empty to use Vite proxy, or set to `http://localhost:3000`)
- `VITE_X402_PAYEE_ADDRESS`: x402 payee address
- `VITE_X402_PRICE`: Price per request
- `VITE_X402_NETWORK`: Network (base-sepolia or base)

**Note**: By default, the frontend uses relative URLs that go through Vite's proxy to `http://localhost:3000`. You typically don't need to set `VITE_API_URL` unless you're connecting to a different server.

### 3. Start Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

**Troubleshooting**: If you see "Failed to fetch" or connection errors:
- Make sure the backend server is running on port 3000
- Check that no firewall is blocking localhost connections
- Verify the backend is accessible at `http://localhost:3000/.well-known/agent-card.json`

### 4. Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
frontend/
├── src/
│   ├── components/          # React components
│   │   ├── AgentCard.tsx    # Agent information card
│   │   ├── ChatInterface.tsx # Chat UI component
│   │   └── PaymentStatus.tsx # Payment status display
│   ├── services/            # API and service modules
│   │   ├── a2aClient.ts     # A2A protocol client
│   │   └── x402Payment.ts   # x402 payment integration
│   ├── types.ts             # TypeScript type definitions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json
```

## Usage

### Chat with Agent

1. Start the backend server (see main README)
2. Start the frontend: `npm run dev`
3. Open `http://localhost:5173` in your browser
4. Type a message and click "Send"

### x402 Payment Integration

The frontend is set up to handle x402 payments, but full integration requires:

1. **x402 SDK Integration**: Connect with Coinbase's x402 SDK
2. **Wallet Connection**: Integrate wallet (Coinbase Wallet, MetaMask, etc.)
3. **Payment Headers**: Generate payment headers for API requests

Currently, the frontend will attempt to make requests, but the backend's x402 middleware will require valid payment headers.

### Development Notes

- The frontend proxies `/a2a` and `/.well-known` requests to the backend
- In development, you can temporarily disable x402 middleware on the backend for testing
- For production, implement full x402 payment flow

## Components

### AgentCard

Displays agent information including:
- Name and version
- Capabilities
- x402 payment configuration
- ERC-8004 identity information

### ChatInterface

Main chat component with:
- Message history
- Input field
- Send button
- Loading states
- Error handling

### PaymentStatus

Shows payment information:
- x402 protocol status
- Price per request
- Network information
- Payment instructions

## API Integration

The frontend communicates with the backend via:

- **Agent Card**: `GET /.well-known/agent-card.json`
- **A2A Protocol**: `POST /a2a` (JSON-RPC 2.0)

See `src/services/a2aClient.ts` for the API client implementation.

## Future Enhancements

- [ ] Full x402 payment SDK integration
- [ ] Wallet connection (Coinbase Wallet, MetaMask)
- [ ] Real-time payment status updates
- [ ] Transaction history
- [ ] ERC-8004 identity verification
- [ ] Dark mode
- [ ] Message persistence
- [ ] File upload support

## License

MIT

