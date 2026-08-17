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
  // Serve static assets (JS, CSS, images, robots.txt, sitemap.xml, etc.)
  app.use(express.static(frontendDist, { index: false }));

  // SPA fallback: all non-API GET requests return index.html so the React
  // router handles client-side navigation (direct URL access, browser refresh).
  // Express 5 / path-to-regexp v8 requires a named wildcard parameter.
  app.get("/{*path}", (_req, res) => {
    res.sendFile(path.join(frontendDist, "index.html"));
  });
} else {
  logger.warn(
    { frontendDist },
    "Frontend dist directory not found — only API routes are active. Run `npm run build` to build the frontend.",
  );
}

export default app;
