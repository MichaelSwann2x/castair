# Castair

**Aircraft Quality Control Inspector · Return-to-Service (RTS) Inspector · Aviation Safety Inspector Platform**

Offline-first, encrypted, multi-tenant agentic service for aviation inspection and quality control. Use the built-in Castair CMMS or connect Trax, AMOS, SAP, Ramco, Veryon.

Human-in-the-loop on every airworthiness / RTS decision.

## Live capabilities (v0.2)

- **Auth + tenant provisioning** — demo login or create your own organisation (browser-local sandbox)
- **Castair Native CMMS** — aircraft, work packages, findings, AD/SB register — works offline, fast
- **External connectors** — Trax, AMOS, SAP, Ramco, Veryon (credential forms ready; live API wiring next)
- **High-value agents**
  - AD/SB Monitor (applicability + recommendations)
  - Closed-Loop Visual (measure → disposition → task cards)
  - Explainable Airworthiness (regulatory path + precedents)
- **UI** — Kimpton-inspired precision, relational tables, agent side panel, approval queue
- **Cloudflare-ready** — `npm run deploy` via `@cloudflare/next-on-pages` + Wrangler

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000 → **Enter Castair** → demo tenant or provision your own.

## Deploy to Cloudflare Pages

See [docs/DEPLOY.md](docs/DEPLOY.md).

```bash
npm run deploy
```

## Security

Per-tenant isolation, human approval gates for RTS, immutable audit direction. See [SECURITY.md](SECURITY.md).

## Licence

Proprietary — Castair / MichaelSwann2x
