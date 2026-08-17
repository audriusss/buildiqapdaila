# nginx configuration — BuildIQ VPS production

## Purpose

Handles:
- HTTP → HTTPS redirect (301)
- www → non-www redirect (301)
- Reverse proxy to the Node.js/PM2 server on port 3000
- Preserves full path and query string on all redirects

## nginx config file

Save as `/etc/nginx/sites-available/buildiq.lt` and symlink:

```bash
sudo ln -s /etc/nginx/sites-available/buildiq.lt /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

```nginx
# ── Redirect: HTTP (any host) → HTTPS non-www ────────────────────────────────
server {
    listen 80;
    listen [::]:80;
    server_name buildiq.lt www.buildiq.lt;

    # Let's Encrypt ACME challenge (certbot uses this)
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }

    location / {
        return 301 https://buildiq.lt$request_uri;
    }
}

# ── Redirect: HTTPS www → HTTPS non-www (301 permanent) ─────────────────────
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name www.buildiq.lt;

    ssl_certificate     /etc/letsencrypt/live/buildiq.lt/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/buildiq.lt/privkey.pem;
    include             /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;

    return 301 https://buildiq.lt$request_uri;
}

# ── Main site: HTTPS non-www → Node.js app ───────────────────────────────────
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name buildiq.lt;

    ssl_certificate     /etc/letsencrypt/live/buildiq.lt/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/buildiq.lt/privkey.pem;
    include             /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;

    # Security headers
    add_header X-Frame-Options       "SAMEORIGIN"   always;
    add_header X-Content-Type-Options "nosniff"      always;
    add_header Referrer-Policy       "strict-origin-when-cross-origin" always;

    # Proxy everything to the Node.js / PM2 process
    location / {
        proxy_pass         http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade            $http_upgrade;
        proxy_set_header   Connection         "upgrade";
        proxy_set_header   Host               $host;
        proxy_set_header   X-Real-IP          $remote_addr;
        proxy_set_header   X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto  $scheme;
        proxy_read_timeout 30s;
    }
}
```

## SSL certificate (Let's Encrypt / certbot)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d buildiq.lt -d www.buildiq.lt
```

Certbot will automatically fill in the certificate paths.

## Redirect examples

| Request                                              | Result                                               |
|------------------------------------------------------|------------------------------------------------------|
| `http://buildiq.lt/plyteliu-klijavimas-klaipeda`    | `301 → https://buildiq.lt/plyteliu-klijavimas-klaipeda` |
| `http://www.buildiq.lt/darbai?ref=1`                | `301 → https://buildiq.lt/darbai?ref=1`              |
| `https://www.buildiq.lt/faq`                        | `301 → https://buildiq.lt/faq`                       |

## Deploy workflow

```bash
# On VPS, after pushing new code:
git pull
npm install -g pnpm
pnpm install --frozen-lockfile
npm run build        # client + SSR build + prerender
pm2 restart buildiq  # or: pm2 start ecosystem.config.cjs
```
