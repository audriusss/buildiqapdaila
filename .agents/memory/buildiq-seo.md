---
name: BuildIQ brand and SEO base URL
description: Brand name and production domain used across SEO, canonical, OG, sitemap, and JSON-LD.
---

## Brand

- **Name shown in UI:** BuildIQ (with secondary text "VONIOS REMONTAS / KLAIPĖDOJE")
- **Old placeholder brand:** Voniosr.lt — fully replaced everywhere

## Production domain

`https://buildiq.lt` — used in:
- `src/components/seo.tsx` — `BASE_URL` constant
- `artifacts/vonios-remontas/index.html` — OG tags, JSON-LD LocalBusiness `@id` and `url`
- `public/robots.txt` — Sitemap directive
- `public/sitemap.xml` — all `<loc>` entries

**Why:** User confirmed this is the production domain before deployment. Never use the Replit dev domain as canonical.
