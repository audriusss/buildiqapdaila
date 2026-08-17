/**
 * PM2 ecosystem config for BuildIQ on Ubuntu 24.04 VPS.
 *
 * Usage:
 *   pm2 start ecosystem.config.cjs
 *   pm2 save            # persist across reboots
 *   pm2 startup         # enable PM2 on boot
 *
 * Nginx should reverse-proxy https://buildiq.lt → http://127.0.0.1:3000
 */
module.exports = {
  apps: [
    {
      name: "buildiq",
      script: "artifacts/api-server/dist/index.mjs",
      node_args: "--enable-source-maps",

      // PM2 starts from the repo root (where this file lives).
      cwd: __dirname,

      // Environment variables for the production process.
      // TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID must be added here or
      // exported from the shell before running `pm2 start`.
      env: {
        NODE_ENV: "production",
        PORT: "3000",
        // Optional: override frontend dist path if you move it.
        // FRONTEND_DIST: "artifacts/vonios-remontas/dist/public",
        // Required for contact form — set these before starting PM2:
        // TELEGRAM_BOT_TOKEN: "...",
        // TELEGRAM_CHAT_ID: "...",
      },

      // Restart policy.
      max_restarts: 10,
      restart_delay: 3000,
      exp_backoff_restart_delay: 100,

      // Log files (relative to repo root).
      error_file: "logs/err.log",
      out_file: "logs/out.log",
      merge_logs: true,
      time: true,

      // Keep process alive; restart on crash.
      autorestart: true,
      watch: false,
    },
  ],
};
