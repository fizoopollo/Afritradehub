# Afritradehub – Deployment

## Overview

- **Frontend:** Next.js static/SSR build; serve via Node or static hosting (e.g. S3 + CloudFront).
- **Backend:** Django + Daphne (ASGI) for HTTP and WebSockets; run behind a reverse proxy (e.g. Nginx).
- **Infrastructure (target):** AWS Cape Town (af-south-1): EKS, RDS (PostgreSQL + PostGIS), ElastiCache (Redis), S3, with Cloudflare for security and CDN.

## Backend (Django)

1. Set production env vars: `DEBUG=0`, strong `SECRET_KEY`, `ALLOWED_HOSTS`, `DATABASE_URL`, `REDIS_URL`, `CORS_ALLOWED_ORIGINS`, Stripe/Flutterwave keys, etc.
2. Run migrations: `python manage.py migrate`
3. Collect static: `python manage.py collectstatic --noinput`
4. Serve with Gunicorn (HTTP only) or Daphne (HTTP + WebSockets):  
   `daphne -b 0.0.0.0 -p 8000 config.asgi:application`
5. Run Celery worker (and beat if using periodic tasks):  
   `celery -A config worker -l info`

## Frontend (Next.js)

1. Set `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_WS_URL` to your API and WebSocket URLs.
2. Build: `pnpm build`
3. Start: `pnpm start` (or deploy the `.next` output to a Node server / Vercel).

## Docker

Use the provided `Dockerfile.backend` and `Dockerfile.frontend` for container builds. In production, use a process manager or orchestrator (e.g. EKS) and configure health checks, secrets, and scaling.

## Netlify (Frontend Only)

For rapid frontend deployment, you can use Netlify's automatic build and deploy system.

### Prerequisites

- GitHub repository (push your code to GitHub)
- Netlify account (free at netlify.com)

### Setup Steps

1. **Push to GitHub**
   ```bash
   git init
   git remote add origin https://github.com/your-username/afritradehub.git
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.app](https://netlify.app)
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Netlify will auto-detect `netlify.toml` settings

3. **Configure Environment Variables**
   - Go to Site settings → Build & deploy → Environment
   - Add: `NEXT_PUBLIC_API_URL` = your backend URL
   - Example: `https://api.yourdomain.com`

4. **Deploy**
   - Netlify will automatically build and deploy on every push to main
   - Monitor in the Netlify dashboard
   - Once deployed, access your site at `https://[sitename].netlify.app`

### Configure Custom Domain

1. In Netlify dashboard → Domain management
2. Add your custom domain
3. Update DNS records pointing to Netlify
4. Netlify provides free SSL certificate via Let's Encrypt

### Environment Variables for Netlify

- `NEXT_PUBLIC_API_URL` - Backend API URL (required)
- `NEXT_PUBLIC_GA_ID` - Google Analytics (optional)
- `NEXT_PUBLIC_MAPBOX_TOKEN` - Mapbox maps (optional)

### Important Notes

- Netlify's free tier includes auto-deploys and free SSL
- Build time is limited; ensure `npm run build` completes in <15 minutes
- Large dependencies may cause build failures; use `npm ci` for consistent installs
- Serverless functions directory: `/functions` (if using edge functions)

## AWS Cape Town

- **EKS:** Run backend and frontend (or frontend from S3/CloudFront) in the cluster.
- **RDS:** PostgreSQL 15 with PostGIS in af-south-1; use security groups to allow only app and admin access.
- **ElastiCache:** Redis for Celery broker and Django Channels.
- **S3:** Media and static files; use `django-storages` and `AWS_S3_REGION_NAME=af-south-1`.
- **Cloudflare:** Put in front of your domain for DDoS protection, WAF, and CDN; optionally use Workers for edge logic.

## Security

- Use HTTPS only; set `SECURE_*` and `SESSION_COOKIE_SECURE` in Django.
- Restrict CORS to your frontend origin(s).
- Store secrets in env or a secret manager (e.g. AWS Secrets Manager); never commit them.
- Configure Stripe and Flutterwave webhooks with correct signing secrets and verify signatures in the backend.
