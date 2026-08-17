---
name: Dark premium design system
description: How the dark-first palette is implemented and a Babel pitfall with Lithuanian typography.
---

## Dark-by-default

The site is always dark — no `.dark` class toggle. The `:root` CSS variables in `src/index.css` hold the dark palette directly:
- background: `0 0% 4%` (#0A0A0A)
- foreground: `36 15% 93%` (#F1EEE8 warm off-white)
- primary: `33 40% 51%` (#B78A52 bronze/champagne)
- muted-foreground: `36 5% 63%` (#A9A49C)

The `.dark` class block is kept for compatibility but mirrors `:root`.

**Why:** The user requested a permanently dark premium site; toggling via class would add complexity with no benefit.

## Babel / curly-quote pitfall

Lithuanian typographic „quote" characters (U+201E „ and U+201C ") inside **JavaScript string literals** (double-quoted JS strings) cause Babel to misparse the file — it treats U+201C as a closing JS double-quote and throws `Unexpected token`.

**Fix:** When Lithuanian text with curly quotes appears inside JS string values (object property values, not JSX text nodes), use single-quoted JS strings instead:
```tsx
// WRONG — crashes Babel
a: "tik „matomas" apdailos...",
// CORRECT
a: 'tik matomas apdailos...',
```
JSX text content (between JSX tags) is fine — only JS string literals are affected.
