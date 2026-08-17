#!/usr/bin/env node
/**
 * Production SEO verification script.
 * Run against a locally started production server before every VPS deploy.
 *
 * Usage:
 *   node scripts/seo-check.mjs [base-url]
 *
 * Default base URL: http://127.0.0.1:3000
 *
 * Exit code: 0 = all checks passed, 1 = one or more failures.
 */

import { get } from "http";

const BASE = process.argv[2] ?? "http://127.0.0.1:3000";

// ── Checks ──────────────────────────────────────────────────────────────────

const checks = [
  // Real routes — must return 200 with correct SEO content
  {
    url: "/",
    status: 200,
    title: /Vonios remontas Klaipėdoje.*BuildIQ/i,
    description: /vonios/i,
    canonical: "https://buildiq.lt/",
    h1: /Vonios remontas/i,
  },
  {
    url: "/darbai",
    status: 200,
    title: /Atlikti darbai.*BuildIQ/i,
    h1: /Atlikti darbai/i,
    canonical: "https://buildiq.lt/darbai",
  },
  {
    url: "/faq",
    status: 200,
    canonical: "https://buildiq.lt/faq",
  },
  {
    url: "/vonios-remontas-klaipeda",
    status: 200,
    title: /Vonios remontas.*BuildIQ/i,
    canonical: "https://buildiq.lt/vonios-remontas-klaipeda",
    h1: /Vonios remontas Klaipėdoje/i,
  },
  {
    url: "/plyteliu-klijavimas-klaipeda",
    status: 200,
    title: /Plytelių klijavimas.*BuildIQ/i,
    canonical: "https://buildiq.lt/plyteliu-klijavimas-klaipeda",
    h1: /Plytelių klijavimas Klaipėdoje/i,
  },
  {
    url: "/santechnikos-darbai-klaipeda",
    status: 200,
    canonical: "https://buildiq.lt/santechnikos-darbai-klaipeda",
    h1: /Santechnikos darbai/i,
  },
  {
    url: "/vonios-remonto-kaina",
    status: 200,
    canonical: "https://buildiq.lt/vonios-remonto-kaina",
  },
  {
    url: "/didelio-formato-plyteliu-klijavimas",
    status: 200,
    canonical: "https://buildiq.lt/didelio-formato-plyteliu-klijavimas",
  },
  {
    url: "/vonios-griovimo-darbai",
    status: 200,
    canonical: "https://buildiq.lt/vonios-griovimo-darbai",
  },
  {
    url: "/vonios-hidroizoliacija",
    status: 200,
    canonical: "https://buildiq.lt/vonios-hidroizoliacija",
  },
  {
    url: "/potinkinio-wc-montavimas",
    status: 200,
    canonical: "https://buildiq.lt/potinkinio-wc-montavimas",
  },
  {
    url: "/duso-trapo-montavimas",
    status: 200,
    canonical: "https://buildiq.lt/duso-trapo-montavimas",
  },
  {
    url: "/grindu-betonavimas-klaipeda",
    status: 200,
    canonical: "https://buildiq.lt/grindu-betonavimas-klaipeda",
  },
  // Project detail page
  {
    url: "/darbai/6m2-vonios-remontas-klaipeda",
    status: 200,
    canonical: "https://buildiq.lt/darbai/6m2-vonios-remontas-klaipeda",
  },
  // Legacy /seo/* — must return 410 Gone
  {
    url: "/seo/vonios-remonto-kaina-siauliuose.html",
    status: 410,
  },
  {
    url: "/seo/anything-else.html",
    status: 410,
  },
  // Unknown routes — must return 404 Not Found
  {
    url: "/nonexistent-random-page",
    status: 404,
  },
  {
    url: "/random-xyz-123",
    status: 404,
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const fullUrl = BASE + url;
    const req = get(fullUrl, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () =>
        resolve({ status: res.statusCode, html: data }),
      );
    });
    req.on("error", reject);
    req.setTimeout(8000, () => {
      req.destroy(new Error(`Timeout fetching ${fullUrl}`));
    });
  });
}

function extractTitle(html) {
  return html.match(/<title>(.*?)<\/title>/s)?.[1] ?? "";
}

function extractMeta(html, name) {
  const re = new RegExp(
    `<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`,
    "i",
  );
  return html.match(re)?.[1] ?? "";
}

function extractCanonical(html) {
  return (
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] ?? ""
  );
}

function extractH1(html) {
  return html.match(/<h1[^>]*>(.*?)<\/h1>/is)?.[1]?.replace(/<[^>]+>/g, "") ?? "";
}

// ── Run checks ───────────────────────────────────────────────────────────────

let passed = 0;
let failed = 0;

for (const check of checks) {
  let result;
  try {
    result = await fetchPage(check.url);
  } catch (err) {
    console.error(`  FAIL ${check.url} — fetch error: ${err.message}`);
    failed++;
    continue;
  }

  const errors = [];

  // Status code
  if (result.status !== check.status) {
    errors.push(`status ${result.status} (expected ${check.status})`);
  }

  // Only check HTML content for 200 responses
  if (check.status === 200 && result.status === 200) {
    const title = extractTitle(result.html);
    const description = extractMeta(result.html, "description");
    const canonical = extractCanonical(result.html);
    const h1 = extractH1(result.html);

    if (check.title) {
      const ok =
        typeof check.title === "string"
          ? title.includes(check.title)
          : check.title.test(title);
      if (!ok) errors.push(`title "${title}" doesn't match ${check.title}`);
    }

    if (check.description) {
      const ok =
        typeof check.description === "string"
          ? description.includes(check.description)
          : check.description.test(description);
      if (!ok) errors.push(`description "${description}" doesn't match`);
    }

    if (check.canonical) {
      if (!canonical.includes(check.canonical)) {
        errors.push(`canonical "${canonical}" (expected "${check.canonical}")`);
      }
    }

    if (check.h1) {
      const ok =
        typeof check.h1 === "string"
          ? h1.includes(check.h1)
          : check.h1.test(h1);
      if (!ok) errors.push(`h1 "${h1}" doesn't match ${check.h1}`);
    }

    // Sanity: title must not be empty
    if (!title) errors.push("missing <title>");
    // Sanity: description must not be empty
    if (!description) errors.push("missing meta description");
    // Sanity: canonical must not be empty
    if (!canonical) errors.push("missing canonical");
    // Sanity: canonical must use buildiq.lt not localhost/replit
    if (canonical && !canonical.startsWith("https://buildiq.lt")) {
      errors.push(`canonical uses wrong host: ${canonical}`);
    }
  }

  if (errors.length === 0) {
    console.log(`  PASS ${check.url}`);
    passed++;
  } else {
    console.error(`  FAIL ${check.url}`);
    for (const e of errors) console.error(`       • ${e}`);
    failed++;
  }
}

console.log(`\n${"─".repeat(50)}`);
console.log(`  ${passed} passed, ${failed} failed`);
console.log(`${"─".repeat(50)}`);

process.exit(failed > 0 ? 1 : 0);
