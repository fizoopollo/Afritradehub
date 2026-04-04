# Afritradehub – Setup & Development

## Prerequisites

- **Node.js** 18+ and **pnpm** (or npm)
- **Python** 3.11+
- **Docker** and **Docker Compose** (optional, for full stack)
- **PostgreSQL 15** with PostGIS (or use SQLite for quick local dev)
- **Redis** (for Celery and Channels)
- **Elasticsearch 8** (optional for search)

## Backend (Django)

### 1. Virtual environment and install

```bash
cd backend
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

pip install -r requirements.txt
```

### 2. Environment

```bash
cp .env.example .env
# Edit .env: set SECRET_KEY, and for local dev you can use:
# DATABASE_URL=sqlite:///db.sqlite3
# REDIS_URL=redis://localhost:6379/0
# CELERY_BROKER_URL=redis://localhost:6379/1
```

### 3. Database

```bash
python manage.py migrate
python manage.py createsuperuser   # optional
python manage.py seed_data        # example companies & products
```

### 4. Run server

```bash
python manage.py runserver
# API at http://localhost:8000
# Admin at http://localhost:8000/admin
```

For WebSockets (messages), use Daphne:

```bash
daphne -b 0.0.0.0 -p 8000 config.asgi:application
```

## Frontend (Next.js)

### 1. Install

```bash
cd frontend
pnpm install
```

### 2. Environment

```bash
cp .env.local.example .env.local
# Set NEXT_PUBLIC_API_URL=http://localhost:8000/api
# Set NEXT_PUBLIC_WS_URL=ws://localhost:8000/ws
```

### 3. Run

```bash
pnpm dev
# App at http://localhost:3000
```

## Docker (full stack)

From the project root:

```bash
docker compose up -d
```

- Frontend: http://localhost:3000  
- Backend: http://localhost:8000  
- PostgreSQL: localhost:5432  
- Redis: localhost:6379  
- Elasticsearch: http://localhost:9200  

Run migrations and seed inside the backend container:

```bash
docker compose exec backend python manage.py migrate
docker compose exec backend python manage.py seed_data
```

## API authentication

For protected endpoints, use JWT:

1. **Obtain token:**  
   `POST /api/auth/token/` with `{"email": "...", "password": "..."}`  
   Response: `{"access": "...", "refresh": "..."}`

2. **Use in requests:**  
   `Authorization: Bearer <access>`

3. **Store on frontend:**  
   Save `access` (and optionally `refresh`) in `localStorage` or memory; the frontend `lib/api.ts` reads `access_token` from `localStorage` for authenticated requests.

## Common tasks

- **Create superuser:** `python manage.py createsuperuser`
- **Seed data:** `python manage.py seed_data`
- **Collect static:** `python manage.py collectstatic`
- **Run Celery worker:** `celery -A config worker -l info`
