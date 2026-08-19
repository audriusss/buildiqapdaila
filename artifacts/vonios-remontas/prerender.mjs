/**
 * Build-time prerender script.
 * Runs AFTER both client and SSR Vite builds.
 *
 * react-helmet-async v3 renders <title>, <meta>, <link> etc. at the VERY
 * START of the renderToString output (before the page HTML). This script:
 *   1. Splits that helmet prefix from the body HTML.
 *   2. Injects the head tags into the <!--helmet-tags--> placeholder.
 *   3. Injects the body HTML into <div id="root"><!--app-html--></div>.
 *   4. Writes dist/public/<route>/index.html for every known route.
 *
 * Express then serves the matching file directly (200), returns 410 for
 * /seo/* legacy paths, and 404 for anything else.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distServer = join(__dirname, 'dist/server');
const distPublic = join(__dirname, 'dist/public');

// ── Load the SSR bundle ──────────────────────────────────────────────────────
const ssrEntry = join(distServer, 'entry-server.js');
if (!existsSync(ssrEntry)) {
  console.error('[prerender] ERROR: SSR bundle not found at', ssrEntry);
  process.exit(1);
}
const { render } = await import(ssrEntry);

// ── HTML template ────────────────────────────────────────────────────────────
const templatePath = join(distPublic, 'index.html');
if (!existsSync(templatePath)) {
  console.error('[prerender] ERROR: Client build not found at', templatePath);
  process.exit(1);
}
const template = readFileSync(templatePath, 'utf-8');

// ── Routes to prerender ──────────────────────────────────────────────────────
const staticRoutes = [
  '/',
  '/darbai',
  '/faq',
  '/vonios-remontas-klaipeda',
  '/vonios-remontas-silute',
  '/vonios-remontas-plunge',
  '/vonios-remontas-siauliai',
  '/vonios-remontas-kaunas',
  '/vonios-remontas-vilnius',
  '/vonios-remontas-palanga',
  '/vonios-remontas-gargzdai',
  '/vonios-remontas-kretinga',
  '/kapitalinis-vonios-remontas',
  '/gyvatuko-keitimas',
  '/wc-montavimas',
  '/duso-kabinos-montavimas',
  '/vonios-montavimas',
  '/praustuvo-montavimas',
  '/maisytuvo-montavimas',
  '/vandentiekio-vamzdziu-keitimas',
  '/kanalizacijos-vamzdziu-keitimas',
  '/santechnikos-tasku-perkelimas',
  '/elektros-darbai-vonioje',
  '/elektrinis-grindu-sildymas-vonioje',
  '/sienu-lyginimas-tinkavimas-vonioje',
  '/gipso-darbai-vonioje',
  '/lubu-glaistymas-dazymas-vonioje',
  '/plyteliu-fugavimas-silikonavimas',
  '/plyteliu-klijavimas-klaipeda',
  '/santechnikos-darbai-klaipeda',
  '/vonios-remonto-kaina',
  '/didelio-formato-plyteliu-klijavimas',
  '/vonios-griovimo-darbai',
  '/vonios-hidroizoliacija',
  '/potinkinio-wc-montavimas',
  '/duso-trapo-montavimas',
  '/grindu-betonavimas-klaipeda',
];

const projectSlugs = [
  '6m2-vonios-remontas-klaipeda',
  '8m2-vonios-remontas-klaipeda',
  '5m2-vonios-irengas-gargzdai',
  '7m2-vonios-remontas-klaipeda-2',
  'vonios-remontas-palanga',
  '9m2-erdvi-vonia-klaipeda',
];

const allRoutes = [...staticRoutes, ...projectSlugs.map((s) => `/darbai/${s}`)];

// ── Split helmet head tags from body HTML ────────────────────────────────────
// react-helmet-async v3 emits <title>, <meta>, <link>, etc. at the very
// start of renderToString output, before the page HTML.
// We scan tag-by-tag until we hit a non-head element.
const HEAD_TAG_NAMES = new Set([
  'title', 'meta', 'link', 'base', 'script', 'style', 'noscript',
]);

function splitHelmetAndBody(html) {
  let pos = 0;

  while (pos < html.length) {
    // Must start with '<'
    if (html[pos] !== '<') break;

    // Extract tag name (characters until whitespace, '/', or '>')
    let nameEnd = pos + 1;
    while (nameEnd < html.length && !/[\s/>]/.test(html[nameEnd])) nameEnd++;
    const tagName = html.slice(pos + 1, nameEnd).toLowerCase();

    if (!HEAD_TAG_NAMES.has(tagName)) break; // body content starts here

    // Find closing '>' — handles self-closing and attribute values with '>'
    // by tracking quote context.
    let i = pos + 1;
    let inQ = false;
    let qChar = '';
    while (i < html.length) {
      const ch = html[i];
      if (inQ) {
        if (ch === qChar) inQ = false;
      } else if (ch === '"' || ch === "'") {
        inQ = true; qChar = ch;
      } else if (ch === '>') {
        i++; break;
      }
      i++;
    }

    // Self-closing: <meta .../> or <link .../>  → done with this tag
    if (html.slice(pos, i).trimEnd().endsWith('/>')) {
      pos = i;
      continue;
    }

    // Paired tag: find </tagname>
    const closeTag = `</${tagName}>`;
    const closePos = html.indexOf(closeTag, i);
    if (closePos < 0) {
      pos = i; // malformed — skip
    } else {
      pos = closePos + closeTag.length;
    }
  }

  return {
    headTags: html.slice(0, pos),
    bodyHtml: html.slice(pos),
  };
}

// ── Build full HTML for a route ──────────────────────────────────────────────
function buildHtml(renderedHtml) {
  const { headTags, bodyHtml } = splitHelmetAndBody(renderedHtml);
  return template
    .replace('<!--helmet-tags-->', headTags)
    .replace('<!--app-html-->', bodyHtml);
}

// ── Write HTML for a route ───────────────────────────────────────────────────
function writeRoute(url, html) {
  if (url === '/') {
    writeFileSync(join(distPublic, 'index.html'), html, 'utf-8');
  } else {
    const dir = join(distPublic, url.replace(/^\//, ''));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html, 'utf-8');
  }
}

// ── Main loop ────────────────────────────────────────────────────────────────
let ok = 0;
let fail = 0;

for (const url of allRoutes) {
  try {
    const { html: renderedHtml } = render(url);
    const fullHtml = buildHtml(renderedHtml);
    writeRoute(url, fullHtml);
    console.log(`[prerender] ✓ ${url}`);
    ok++;
  } catch (err) {
    console.error(`[prerender] ✗ ${url}`, err.message);
    fail++;
  }
}

console.log(`\n[prerender] Done: ${ok} OK, ${fail} failed.`);
if (fail > 0) process.exit(1);
