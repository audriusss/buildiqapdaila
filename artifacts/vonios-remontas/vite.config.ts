import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';

// PORT is only used by the Vite dev server. Falls back to 5173 so `vite build`
// works on VPS without the env var.
const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 5173;
if (rawPort && (Number.isNaN(port) || port <= 0)) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

// BASE_PATH is the Vite `base` option. Defaults to '/' for VPS (served from
// domain root). Replit sets it via the artifact routing system.
const basePath = process.env.BASE_PATH ?? '/';

// VITE_BUILD_TARGET=ssr → build the server-side entry to dist/server/.
// Otherwise build the client bundle to dist/public/ (default).
const isSSRBuild = process.env.VITE_BUILD_TARGET === 'ssr';

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    // Only load dev overlay in non-production environments.
    ...(process.env.NODE_ENV !== 'production' ? [runtimeErrorOverlay()] : []),
    ...(process.env.NODE_ENV !== 'production' &&
    process.env.REPL_ID !== undefined
      ? [
          await import('@replit/vite-plugin-cartographer').then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, '..'),
            }),
          ),
          await import('@replit/vite-plugin-dev-banner').then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(
        import.meta.dirname,
        '..',
        '..',
        'attached_assets',
      ),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: isSSRBuild
      ? path.resolve(import.meta.dirname, 'dist/server')
      : path.resolve(import.meta.dirname, 'dist/public'),
    // For SSR builds, don't wipe the client output.
    emptyOutDir: !isSSRBuild,
  },
  // SSR-specific: bundle workspace packages so the Node.js prerender script
  // doesn't need to resolve them at runtime.
  ...(isSSRBuild && {
    ssr: {
      noExternal: ['@workspace/api-client-react', 'react-helmet-async'],
    },
  }),
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
