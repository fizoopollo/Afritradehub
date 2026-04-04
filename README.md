# Afritradehub & Afrify

A modern, scalable B2B directory and trade platform for verified African businesses (Afritradehub) combined with an African marketplace & theme store (Afrify).

## Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Shadcn/UI, Framer Motion, Mapbox GL, React Query, Zustand, i18next, PWA
- **Backend**: Django 4.2, Django REST Framework, PostgreSQL 15 + PostGIS, Elasticsearch 8.x, Redis, Celery, Django Channels, Stripe + Flutterwave
- **Infrastructure**: Docker, AWS Cape Town (EKS, RDS, ElastiCache, S3), Cloudflare

## Quick Start

### Prerequisites

- Node.js 18+
- Python 3.11+
- Docker & Docker Compose
- pnpm (recommended) or npm

### Local development with Docker

```bash
# Start all services (PostgreSQL, Redis, Elasticsearch, backend, frontend)
docker compose up -d

# Backend API: http://localhost:8000
# Frontend: http://localhost:3000
```

### Local development without Docker

**Backend:**

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate   # Windows
pip install -r requirements.txt
cp .env.example .env     # Configure DB, Redis, etc.
python manage.py migrate
python manage.py runserver
```

**Frontend:**

```bash
cd frontend
pnpm install
cp .env.local.example .env.local   # Set NEXT_PUBLIC_API_URL
pnpm dev
```

### Deploy to Netlify

**1. Push to GitHub**

```bash
# Initialize git repository (if not already done)
git init

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/afritradehub.git

# Commit and push
git add .
git commit -m "Initial commit: Afritradehub with EditToolbar and templates"
git branch -M main
git push -u origin main
```

**2. Connect to Netlify**

- Go to [netlify.com](https://app.netlify.com)
- Click "New site from Git"
- Select your GitHub repository
- Netlify will auto-detect settings from `netlify.toml`

**3. Configure Environment Variables**

In Netlify Dashboard → Site Settings → Environment:

```
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

**4. Deploy**

Netlify will automatically build and deploy when you push to GitHub!

### Seed data

```bash
cd backend && python manage.py seed_data
```

## Project structure

```
├── frontend/          # Next.js 14 App Router app
├── backend/           # Django 4.2 + DRF API
├── docker-compose.yml
├── Dockerfile.frontend
├── Dockerfile.backend
└── README.md
```

## Documentation

- [Setup & development](docs/SETUP.md)
- [API reference](docs/API.md)
- [Deployment](docs/DEPLOYMENT.md)

## License

Proprietary.
