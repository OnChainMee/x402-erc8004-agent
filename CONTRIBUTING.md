# Contributing to x402 & ERC-8004 Agent

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/x402-erc8004-agent.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`
5. Install frontend dependencies: `cd frontend && npm install`

## Development

### Backend Development

- Start the backend server: `npm run start:a2a`
- For development without x402 payments: `DISABLE_X402=true npm run start:a2a`
- Verify setup: `npm run verify`

### Frontend Development

- Start the frontend dev server: `cd frontend && npm run dev`
- Build for production: `cd frontend && npm run build`

## Code Style

- Use TypeScript for all new code
- Follow existing code style and patterns
- Add comments for complex logic
- Update documentation for new features

## Commit Messages

Use clear, descriptive commit messages:
- `feat: add new feature`
- `fix: resolve bug`
- `docs: update documentation`
- `refactor: improve code structure`

## Pull Requests

1. Ensure your code builds without errors
2. Update documentation if needed
3. Add tests if applicable
4. Submit a PR with a clear description

## Questions?

Open an issue for discussion or questions.

