/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_X402_PAYEE_ADDRESS?: string;
  readonly VITE_X402_PRICE?: string;
  readonly VITE_X402_NETWORK?: 'base-sepolia' | 'base';
  readonly VITE_X402_FACILITATOR_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

