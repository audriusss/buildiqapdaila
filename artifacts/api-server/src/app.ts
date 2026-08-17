import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import { existsSync } from "fs";
import path from "path";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

// Trust the first proxy (nginx reverse proxy on VPS).
// Required for correct req.ip, req.protocol, and secure cookies behind nginx.
app.set("trust proxy", 1);

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// ── Production static file serving ─────────────────────────────────────────
// Serve the built Vite frontend. FRONTEND_DIST can be set explicitly; defaults
// to the standard monorepo build output path, resolved from CWD (repo root
// when started via PM2 with the provided ecosystem.config.cjs).
const frontendDist =
  process.env.FRONTEND_DIST ??
  path.resolve(process.cwd(), "artifacts/vonios-remontas/dist/public");

if (existsSync(frontendDist)) {
  // 1. Serve static assets (JS, CSS, images, favicon, robots.txt, sitemap.xml…)
  //    index:false prevents express.static from auto-serving directory index files
  //    (we handle routing ourselves below for correct status codes).
  app.use(express.static(frontendDist, { index: false, redirect: false }));

  // 2. Legacy /seo/* URLs from a previous site — return 410 Gone.
  //    These pages no longer exist and should NOT be indexed.
  //    Express 5 / path-to-regexp v8 requires named wildcard.
  app.get("/seo/{*legacyPath}", (_req, res) => {
    res.status(410).end("Gone");
  });

  // 3. Route-aware HTML serving.
  //    Build-time prerendering writes one index.html per known route:
  //      /                             → dist/public/index.html
  //      /vonios-remontas-klaipeda     → dist/public/vonios-remontas-klaipeda/index.html
  //      /darbai/6m2-vonios-remontas   → dist/public/darbai/6m2-vonios-remontas/index.html
  //
  //    If the file exists  → 200 with prerendered HTML (crawler-readable).
  //    If it does not      → 404 Not Found (no SPA catch-all for unknown paths).
  app.get("/{*path}", (req, res) => {
    // Normalise: strip trailing slash (except root), keep query string separate.
    const reqPath = req.path.replace(/\/+$/, "") || "/";

    // Resolve the expected prerendered HTML file for this path.
    const htmlFile =
      reqPath === "/"
        ? path.join(frontendDist, "index.html")
        : path.join(frontendDist, reqPath.replace(/^\//, ""), "index.html");

    if (existsSync(htmlFile)) {
      return res.sendFile(htmlFile);
    }

    // No prerendered file — unknown route.
    res.status(404).end("Not Found");
  });
} else {
  logger.warn(
    { frontendDist },
    "Frontend dist directory not found — only API routes are active. Run `npm run build` to build the frontend.",
  );
}

export default app;
