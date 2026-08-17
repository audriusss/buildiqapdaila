# Vonios Remontas Klaipėdoje

Premium bathroom renovation website for a craftsman in Klaipėda, Lithuania. Generates client inquiries via a Telegram-connected contact form, showcases completed projects, and is optimised for local SEO.

## Run & Operate

- `pnpm --filter @workspace/vonios-remontas run dev` — frontend (Vite, port from PORT env)
- `pnpm --filter @workspace/api-server run dev` — API server (Express, port from PORT env)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, framer-motion, react-helmet-async, wouter
- API: Express 5 + multer (file uploads) + express-rate-limit
- Gallery data: static TypeScript file at `artifacts/api-server/src/data/projects.ts`
- No database — contact form sends to Telegram; gallery is static data

## Where things live

- Frontend: `artifacts/vonios-remontas/src/`
- API server: `artifacts/api-server/src/`
- Gallery data: `artifacts/api-server/src/data/projects.ts`
- Contact route (Telegram): `artifacts/api-server/src/routes/contact.ts`
- Projects route: `artifacts/api-server/src/routes/projects.ts`
- SEO static files: `artifacts/vonios-remontas/public/` (robots.txt, sitemap.xml)
- Project images: `artifacts/vonios-remontas/public/assets/projects/`
- OpenAPI spec: `lib/api-spec/openapi.yaml`

## Architecture decisions

- No database for v1 — gallery data is a static TS array; contact form is POST → Telegram only
- Multer with memory storage — uploaded photos are forwarded directly to Telegram Bot API, never saved to disk
- Rate limiting on `/api/contact` — 5 requests per 15 minutes per IP
- Honeypot field (`website`) in contact form for basic spam protection
- react-helmet-async for per-route SEO metadata (title, description, canonical, OG tags)
- JSON-LD LocalBusiness schema injected in `index.html` head for Google structured data

## Secrets required

- `TELEGRAM_BOT_TOKEN` — Telegram bot token (from @BotFather)
- `TELEGRAM_CHAT_ID` — Chat/user ID where messages are delivered

Without these, the contact form returns 200 (graceful degradation) but nothing is sent to Telegram.

## SEO pages

10 service-specific SEO pages at dedicated URLs:
`/vonios-remontas-klaipeda`, `/plyteliu-klijavimas-klaipeda`, `/santechnikos-darbai-klaipeda`,
`/vonios-remonto-kaina`, `/didelio-formato-plyteliu-klijavimas`, `/vonios-griovimo-darbai`,
`/vonios-hidroizoliacija`, `/potinkinio-wc-montavimas`, `/duso-trapo-montavimas`,
`/grindu-betonavimas-klaipeda`

## User preferences

- All content in Lithuanian
- No fake reviews, ratings, or fabricated statistics
- Phone +37067496909 clickable as `tel:` link everywhere
- No database for v1 — keep it lightweight
