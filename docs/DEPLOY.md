# Deploy Castair to Cloudflare Pages

## Prerequisites
- Cloudflare account
- This repo connected to Cloudflare Pages (or deploy via Wrangler)

## Quick deploy

```bash
npm install
npm run deploy
```

Or in the Cloudflare dashboard:
1. Create a Pages project
2. Connect GitHub → `MichaelSwann2x/castair`
3. Build command: `npx @cloudflare/next-on-pages`
4. Output directory: `.vercel/output/static`
5. Root directory: `/`

## Local preview

```bash
npm run preview
```

## Notes
- Demo auth and Castair native CMMS run fully in the browser (offline-capable).
- External connectors (Trax, AMOS, …) store credentials per-tenant in local storage for the demo; production should use encrypted secrets + Workers.
- Human approval gates remain mandatory for RTS / airworthiness actions.
