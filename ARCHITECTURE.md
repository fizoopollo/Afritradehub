# Afritrade Hub - Dual Service Architecture

A comprehensive B2B marketplace and store builder platform for African trade and commerce.

## Architecture Overview

This project runs **two independent services**:

### 1. **Afritrade** - B2B Marketplace (Ports 3000 & 8000)
- **Frontend**: Next.js 14 (TypeScript, Tailwind CSS)
- **Backend**: Django 4.2 + Django REST Framework
- **URL**: http://localhost:3000
- **API**: http://localhost:8000/api/
- **Purpose**: B2B directory, RFQ system, order management, marketplace

### 2. **Afrify** - Store Builder (Ports 3001 & 8001)
- **Frontend**: Vite + React (TypeScript, Tailwind CSS)
- **Backend**: Django 4.2 + Django REST Framework
- **URL**: http://localhost:3001
- **API**: http://localhost:8001/api/
- **Purpose**: Drag-and-drop store creation, template management, design customization

## Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- npm or yarn

### Running Both Services

#### Term 1: Start Afritrade Backend (Port 8000)
```bash
cd "c:\Users\fezza\Afritradehub 2\backend"
.\.venv\Scripts\python.exe manage.py runserver 8000
```

#### Term 2: Start Afritrade Frontend (Port 3000)
```bash
cd "c:\Users\fezza\Afritradehub 2\frontend"
npm run dev
```

#### Term 3: Start Afrify Backend (Port 8001)
```bash
cd "c:\Users\fezza\Afritradehub 2\afrify-backend"
.\.venv\Scripts\python.exe manage.py runserver 8001
```

#### Term 4: Start Afrify Frontend (Port 3001)
```bash
cd "c:\Users\fezza\Afritradehub 2\afrify-frontend"
npm run dev
```

## Authentication Flow

### Shared Authentication System

Users can:

1. **Sign in with existing Afritrade account**
   - User logs in to Afritrade
   - Obtains JWT token from Afritrade backend
   - Uses token to access Afrify services
   - Afrify validates token with Afritrade backend

2. **Register as new user (in Afrify)**
   - Sign up via Google
   - Sign up via business email
   - Optional: Creates Afritrade account on the same email

3. **Linking Accounts**
   - Afrify stores can connect to Afritrade B2B profile
   - User's store appears in Afritrade directory
   - Products can be listed on both platforms

## Publishing Options

When Afrify users publish their stores:

### Option 1: Afrify Platform
- Domain: `storename.afrify.store`
- Hosted on Afrify servers
- Full URL: http://172.20.20.20:3001/store/storename

### Option 2: Custom Domain
- Domain: User's custom domain (e.g., mystore.com)
- Self-hosted or custom server
- DNS points to Afrify servers or custom hosting

### Option 3: Afritrade B2B Platform
- Domain: Store page on Afritrade marketplace
- Listed in B2B directory
- Full URL: http://172.20.20.20:3000/companies/storename
- Integrated shopping experience

## API Integration

### Cross-Service Communication

**Afrify → Afritrade:**
- Publish to B2B platform
- Sync store information
- Create/update products

**Afritrade → Afrify:**
- Read user profile
- Validate authentication
- Generate store links

### Key Endpoints

**Afritrade API** (Port 8000):
- `POST /api/auth/token/` - Login
- `GET /api/companies/` - List businesses
- `GET /api/products/` - List products
- `POST /api/orders/` - Create order

**Afrify API** (Port 8001):
- `POST /api/token/` - Get JWT token
- `GET /api/stores/` - List user's stores
- `POST /api/stores/` - Create new store
- `POST /api/stores/{slug}/publish/` - Publish store
- `GET /api/stores/templates/` - Get templates

## Database Structure

### Afritrade Database
- Users & Companies
- Products & Inventory
- Orders & Payments
- Messages & Notifications
- Subscriptions

### Afrify Database
- Users (linked to Afritrade)
- Stores
- Store Designs & Customization
- Store Templates
- Publish History

## Folder Structure

```
Afritradehub 2/
├── backend/                    # Afritrade Django backend
│   ├── config/                 # Project settings
│   ├── apps/                   # Django apps (companies, orders, etc)
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/                   # Afritrade Next.js frontend
│   ├── app/                    # Next.js App Router
│   ├── components/
│   ├── package.json
│   └── tsconfig.json
│
├── afrify-backend/             # Afrify Django backend (NEW)
│   ├── config/                 # Project settings
│   ├── stores/                 # Store management app
│   ├── designs/                # Design customization app
│   ├── manage.py
│   └── requirements.txt
│
└── afrify-frontend/            # Afrify Vite+React frontend (NEW)
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   └── App.tsx
    ├── package.json
    ├── vite.config.ts
    └── tsconfig.json
```

## Network Access

For partner preview, both services are accessible at:
- **Afritrade**: http://172.20.20.20:3000
- **Afrify**: http://172.20.20.20:3001

## Environment Configuration

### Afritrade Backend
`backend/.env`:
```
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
ALLOWED_HOSTS=localhost,127.0.0.1,172.20.20.20
```

### Afrify Backend
`afrify-backend/.env`:
```
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
ALLOWED_HOSTS=localhost,127.0.0.1,172.20.20.20
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001,...
```

### Afritrade Frontend
`frontend/.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_AFRIFY_URL=http://localhost:3001
```

### Afrify Frontend
`afrify-frontend/.env`:
```
VITE_API_URL=http://localhost:8001
VITE_AFRITRADE_API_URL=http://localhost:8000
VITE_AFRITRADE_URL=http://localhost:3000
```

## Development Workflow

### Working on Afritrade
```bash
cd backend && python manage.py makemigrations
cd backend && python manage.py migrate
cd frontend && npm run build
```

### Working on Afrify
```bash
cd afrify-backend && python manage.py makemigrations
cd afrify-backend && python manage.py migrate
cd afrify-frontend && npm run build
```

## Production Deployment

### Docker Setup

Both services have Dockerfiles:
- `Dockerfile.backend` - Afritrade API
- `Dockerfile.frontend` - Afritrade UI
- `Dockerfile.afrify-backend` - Afrify API (coming soon)
- `Dockerfile.afrify-frontend` - Afrify UI (coming soon)

Use `docker-compose.yml` to orchestrate all services.

## Logging & Monitoring

Each service maintains independent logs:
- Afritrade logs: `backend/logs/`
- Afrify logs: `afrify-backend/logs/`

Access logs via Django admin or API endpoints.

## Support & Documentation

- [Afritrade Backend Docs](backend/README.md)
- [Afritrade Frontend Docs](frontend/README.md)
- [Afrify Backend Docs](afrify-backend/README.md)
- [Afrify Frontend Docs](afrify-frontend/README.md)

## License & Credits

Built for African commerce and trade. Powered by Afritrade Hub Team.
