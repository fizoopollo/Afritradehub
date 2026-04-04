# Store Builder & Template Code Comprehensive Inventory

**Workspace:** `c:\Users\fezza\Afritradehub 2`  
**Date:** March 22, 2026  
**Status:** Partial implementation - Marketing pages exist, core builder missing

---

## EXECUTIVE SUMMARY

Afritradehub is a **B2B marketplace + store builder platform**. Afrify is the store builder component meant to help small African businesses create online stores. **The landing pages and infrastructure exist, but the actual visual editor and store customization system are not implemented.**

---

## FRONTEND FILES - Store Builder & Template Code

### 1. Marketing & Launch Pages

**File:** `frontend/app/page.tsx` (410+ lines)
- **Purpose:** Home page combining Afrify (store builder) and Tradehub (B2B directory)
- **Key Content:**
  - Afrify features: "Drag & Drop Builder", "Theme Marketplace", "Product Management", "Mobile Money Ready"
  - Pricing tiers: Starter (Free), Growth ($19/mo, POPULAR), Enterprise ($79/mo)
  - **IMPORTANT:** Contains hardcoded visual editing panel (lines 343-400)
    - LocalStorage-based hero title/subtitle editing
    - Floating "Wand2" icon button (bottom-right)
    - Real-time text editing with Save/Reset buttons
    - Data persisted to `visualEdits.heroTitle` and `visualEdits.heroSubtitle`
  - Stats section with trade volume ($2.8B), business count (50K+), countries (34)

**File:** `frontend/app/afrify/page.tsx` (200+ lines)
- **Purpose:** Afrify Store Builder landing/marketing page
- **Key Content:**
  - Badge: "Afrify Store Builder"
  - Hero: "Your Store, Your Way"
  - 5-Step Launch Process with icons:
    1. Choose a Template (Palette)
    2. Drag & Drop (LayoutGrid)
    3. Add Products (Package)
    4. Set Up Payments (CreditCard)
    5. Publish & Sell (Globe)
  - 6 Pre-defined Templates:
    - Fashion Forward (pink gradient)
    - Fresh Market (green gradient)
    - TechStore Pro (blue gradient)
    - Artisan Crafts (amber gradient)
    - Service Hub (violet gradient)
    - Beauty Glow (rose gradient)
  - Template grid display (lines 154-170)
  - CTA buttons: "Start Building Free", "View Demo Store"

**File:** `frontend/app/visual-edits/page.tsx` (30 lines)
- **Purpose:** Visual edits entry point/hub page
- **Key Content:**
  - Icon: Wand2
  - Description: "A dedicated space for visually tweaking your Afritradehub & Afrify experience – layouts, colors, and components – without touching backend logic"
  - Buttons: "Start from Afrify", "Start from directory"

**File:** `frontend/app/tradehub/page.tsx`
- Related: B2B directory (not store builder focused)

### 2. Component Files

**File:** `frontend/components/landing/Navbar.tsx`
- Navigation links including Afrify and Tradehub

**File:** `frontend/components/landing/Footer.tsx`
- Footer link: "Afrify Store Builder" → `/afrify`

**File:** `frontend/components/landing/PageLayout.tsx`
- Wrapper layout for landing pages

**File:** `frontend/components/layout/Sidebar.tsx`
- Dashboard sidebar
- Uses `useUIStore((s) => s.sidebarOpen)` and `toggleSidebar()`

**File:** `frontend/components/layout/Header.tsx`
- Dashboard header

**File:** `frontend/components/ui/button.tsx`
**File:** `frontend/components/ui/input.tsx`
**File:** `frontend/components/ui/badge.tsx`
**File:** `frontend/components/ui/toast.tsx`
- Reusable UI components

### 3. State Management

**File:** `frontend/stores/uiStore.ts` (20 lines)
```typescript
// Zustand store with persist middleware
interface UIState {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}
// Persisted to localStorage as "afritradehub-ui"
```
- **Currently manages:** Only sidebar open/closed state
- **Used by:** Sidebar component
- **Missing:** Store customization state (colors, layout, theme, etc.)

### 4. Configuration & Styling

**File:** `frontend/tailwind.config.ts` (50+ lines)
- **Theme colors defined:**
  - `primary`, `secondary`, `accent`, `destructive`
  - `muted`, `card`, `background`, `foreground`
  - Uses CSS custom properties (e.g., `hsl(var(--primary))`)
- **Used for:** Store appearance customization (in theory)
- **Extend section:** Border radius, dark mode, container screens

**File:** `frontend/next.config.js`
- Next.js configuration

**File:** `frontend/package.json`
- **Key Dependencies:**
  - `zustand` - State management
  - `framer-motion` - Animations
  - `next@14` - Framework
  - `lucide-react` - Icons
  - `tailwindcss` - Styling

### 5. API & Utilities

**File:** `frontend/lib/api.ts` (45 lines)
```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

// Functions: apiGet, apiPost, apiPut, apiPatch, apiDelete
// Auth: Bearer token from localStorage
// Error handling: Throws with .body property for form errors
```
- **Base URL:** Environment variable or `/api`
- **Auth:** Token from `localStorage.access_token`
- **Error handling:** Returns `.body` with form validation errors

**File:** `frontend/lib/i18n.ts`
- Internationalization utilities

**File:** `frontend/lib/utils.ts`
- General utilities

### 6. Dashboard Pages (Partial Implementation)

**File:** `frontend/app/(dashboard)/dashboard/page.tsx`
- Main dashboard landing

**File:** `frontend/app/(dashboard)/products/page.tsx`
- Products management interface
- Links: `/products/import`, `/products/new`
- Features: Search, filter, add, import

**File:** `frontend/app/(dashboard)/products/new/[...slug]/page.tsx`
**File:** `frontend/app/(dashboard)/products/[id]/page.tsx`
- Placeholder: "Load product via GET /api/products/{id}/"

**File:** `frontend/app/(dashboard)/companies/[slug]/edit/page.tsx`
- Placeholder: "Load company via GET /api/companies/{slug}/"

**Dashboard Directory Structure:**
- `/orders/` - Orders management
- `/draft-orders/` - Draft orders
- `/cart/` - Shopping cart
- `/messages/` - Messaging
- `/subscription/` - Subscription management
- `/shipping-labels/` - Shipping labels
- `/abandoned-checkouts/` - Abandoned checkouts
- `/contact/` - Contact form
- `/help/`, `/docs/`, `/privacy/`, `/terms/` - Info pages
- `/profile/` - User profile

---

## BACKEND FILES - Store & Template Code

### 1. Core Models

**File:** `backend/apps/subscriptions/models.py`
```python
class Plan(models.Model):
    name, slug, price, currency="USD", interval="month", 
    features=[JSON], is_active
    
class Subscription(models.Model):
    user (FK), plan (FK), status="active|cancelled|past_due",
    current_period_end, timestamps
```
- **3 Plans in seed_data:**
  - Starter: $29/mo, "Up to 10 products", "Basic support"
  - Pro: $99/mo, "Unlimited products", "Priority support", "Analytics"
  - Enterprise: $299/mo, "Everything in Pro", "Dedicated manager", "API access"

**File:** `backend/apps/companies/models.py`
```python
class Company(models.Model):
    name, slug, description, logo, website, email, phone,
    country, city, address, verification_status,
    verified_at, created_by (FK User), timestamps
```
- **Base entity** for stores/businesses
- Linked to: users (creator), products (via related_name="products"), orders

**File:** `backend/apps/products/models.py`
```python
class Product(models.Model):
    company (FK), name, slug, description, SKU,
    price, compare_at_price, cost_per_item,
    quantity, available, color, weight, image,
    timestamps
    
    class Meta:
        unique_together = [["company", "slug"]]
```

**File:** `backend/apps/orders/models.py`
```python
class DraftOrder(models.Model):
    company (FK), created_by (FK User), notes, timestamps

class DraftOrderLine(models.Model):
    draft_order (FK), product (FK), quantity, price

class Order(models.Model):
    company (FK), created_by (FK User),
    status="unpaid|preparing|delivering|delivered|cancelled",
    total, notes, timestamps

class OrderLine(models.Model):
    order (FK), product (FK), quantity, price

class ShippingLabel(models.Model):
    company (FK), order (1-1 FK), carrier,
    tracking_number, rate_amount, timestamps

class AbandonedCheckout(models.Model):
    company (FK), ... [truncated]
```

**File:** `backend/apps/payments/models.py`
```python
class Payment(models.Model):
    user (FK), provider="stripe|flutterwave",
    external_id, amount, currency, status="pending",
    metadata (JSON)
```

**File:** `backend/apps/users/models.py`
- User authentication models
- Serializers: `serializers.py`, `serializers_contact.py`
- Views: `views.py`, `views_contact.py`
- URLs: `urls.py`, `urls_contact.py`

### 2. API Routing & Views

**File:** `backend/config/urls.py` (23 lines)
```python
urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/auth/", include("apps.users.urls")),
    path("api/companies/", include("apps.companies.urls")),
    path("api/products/", include("apps.products.urls")),
    path("api/orders/", include("apps.orders.urls")),
    path("api/messages/", include("apps.messaging.urls")),
    path("api/notifications/", include("apps.notifications.urls")),
    path("api/payments/", include("apps.payments.urls")),
    path("api/subscriptions/", include("apps.subscriptions.urls")),
    path("api/contact/", include("apps.users.urls_contact")),
]
```

**Available Endpoints** (by inference from models):
- `GET/POST /api/products/` - List/create products
- `GET/PUT/PATCH/DELETE /api/products/{id}/` - Product detail & mutations
- `GET/POST /api/orders/drafts/` - Draft orders
- `GET/PUT /api/orders/drafts/{id}/` - Draft order detail
- `GET/POST /api/orders/` - Place orders
- `POST /api/payments/stripe/checkout/` - Stripe checkout
- `POST /api/payments/flutterwave/initialize/` - Flutterwave initialization
- `GET /api/subscriptions/plans/` - List subscription plans
- `GET/POST /api/companies/` - Companies (B2B directory)
- `POST /api/contact/` - Contact form submission

### 3. Seed Data & Management

**File:** `backend/apps/companies/management/commands/seed_data.py`
- Creates admin user: `admin@afritradehub.com`
- Creates 3 plans:
  - Starter: $29, ["Up to 10 products", "Basic support"]
  - Pro: $99, ["Unlimited products", "Priority support", "Analytics"]
  - Enterprise: $299, ["Everything in Pro", "Dedicated manager", "API access"]
- Creates seed companies and products for testing

### 4. Configuration

**File:** `backend/config/settings.py` (100+ lines)
- Installed apps: companies, products, orders, payments, subscriptions, users, messaging, notifications
- Database: SQLite (`db.sqlite3`)
- TEMPLATES: Django template engine configuration
- CORS, authentication, caching settings

**File:** `backend/requirements.txt`
- Dependencies: Django, DRF, Channels, Celery, Stripe, Flutterwave, etc.

### 5. Database

**File:** `backend/db.sqlite3`
- SQLite database with tables for all models

---

## COMPLETE FOLDER STRUCTURE

```
c:\Users\fezza\Afritradehub 2\
├── docker-compose.yml
├── Dockerfile.backend
├── Dockerfile.frontend
├── README.md
│
├── frontend/                        # Next.js 14 App Router
│   ├── app/
│   │   ├── page.tsx                 # [HOME WITH VISUAL EDITOR] ✓
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── manifest.ts
│   │   ├── (dashboard)/
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── products/
│   │   │   │   ├── page.tsx         # [PRODUCTS LIST] ✓
│   │   │   │   ├── new/page.tsx
│   │   │   │   ├── import/page.tsx
│   │   │   │   └── [id]/page.tsx
│   │   │   ├── orders/
│   │   │   ├── draft-orders/
│   │   │   ├── cart/
│   │   │   ├── companies/
│   │   │   ├── messages/
│   │   │   ├── subscription/
│   │   │   ├── shipping-labels/
│   │   │   ├── abandoned-checkouts/
│   │   │   ├── contact/
│   │   │   ├── profile/
│   │   │   └── [other pages]
│   │   ├── afrify/                  # [STORE BUILDER LANDING] ✓
│   │   │   └── page.tsx
│   │   ├── tradehub/                # [B2B DIRECTORY LANDING]
│   │   │   └── page.tsx
│   │   └── visual-edits/            # [VISUAL EDITOR ENTRY] ✓
│   │       └── page.tsx
│   ├── components/
│   │   ├── landing/
│   │   │   ├── PageLayout.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── ...
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── badge.tsx
│   │   │   └── toast.tsx
│   │   └── providers/
│   ├── stores/
│   │   └── uiStore.ts               # [STATE MANAGEMENT] ✓
│   ├── lib/
│   │   ├── api.ts                   # [API CLIENT] ✓
│   │   ├── i18n.ts
│   │   └── utils.ts
│   ├── public/
│   ├── .next/                       # Build output
│   ├── tailwind.config.ts           # [CSS THEME CONFIG] ✓
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── package.json
│   └── postcss.config.js
│
├── backend/                         # Django + DRF
│   ├── apps/
│   │   ├── companies/
│   │   │   ├── models.py            # [COMPANY MODEL] ✓
│   │   │   ├── views.py
│   │   │   ├── urls.py
│   │   │   ├── serializers.py
│   │   │   ├── admin.py
│   │   │   └── management/commands/seed_data.py  # [SEED PLANS] ✓
│   │   ├── products/
│   │   │   ├── models.py            # [PRODUCT MODEL] ✓
│   │   │   ├── views.py
│   │   │   ├── urls.py
│   │   │   ├── serializers.py
│   │   │   └── admin.py
│   │   ├── orders/
│   │   │   ├── models.py            # [DRAFT_ORDER, ORDER, SHIPPING, CHECKOUT] ✓
│   │   │   ├── views.py
│   │   │   ├── urls.py
│   │   │   ├── serializers.py
│   │   │   └── admin.py
│   │   ├── payments/
│   │   │   ├── models.py            # [PAYMENT MODEL] ✓
│   │   │   ├── views.py             # (Stripe, Flutterwave integration)
│   │   │   ├── urls.py
│   │   │   └── admin.py
│   │   ├── subscriptions/
│   │   │   ├── models.py            # [PLAN & SUBSCRIPTION MODELS] ✓
│   │   │   ├── views.py
│   │   │   ├── urls.py
│   │   │   ├── serializers.py
│   │   │   └── admin.py
│   │   ├── users/
│   │   │   ├── models.py
│   │   │   ├── views.py
│   │   │   ├── views_contact.py
│   │   │   ├── urls.py
│   │   │   ├── urls_contact.py
│   │   │   ├── serializers.py
│   │   │   ├── serializers_contact.py
│   │   │   └── admin.py
│   │   ├── messaging/
│   │   ├── notifications/
│   │   └── __init__.py
│   ├── config/
│   │   ├── settings.py              # [MAIN CONFIG] ✓
│   │   ├── urls.py                  # [API ROUTES] ✓
│   │   ├── asgi.py
│   │   ├── wsgi.py
│   │   └── __pycache__/
│   ├── manage.py
│   ├── requirements.txt
│   ├── db.sqlite3                   # [DATABASE] ✓
│   └── .venv/                       # Virtual environment
│
├── docs/
│   ├── API.md
│   ├── DEPLOYMENT.md
│   └── SETUP.md
│
└── STORE_BUILDER_TEMPLATE_INVENTORY.md  # ← THIS FILE
```

---

## WHAT'S IMPLEMENTED ✅

1. ✅ **Landing pages** - Afrify & Tradehub marketing pages exist
2. ✅ **Pricing model** - Starter/Growth/Enterprise tiers defined
3. ✅ **Template list** - 6 templates hardcoded on landing
4. ✅ **Product management** - CRUD operations for products
5. ✅ **Order system** - DraftOrder, Order, OrderLine models
6. ✅ **Payment integration** - Stripe & Flutterwave setup
7. ✅ **Subscription model** - Plans and subscriptions tracked
8. ✅ **Dashboard structure** - Routes and layouts created
9. ✅ **API client** - Utility functions for backend calls
10. ✅ **Basic state management** - Zustand store for UI (sidebar only)
11. ✅ **CSS theme configuration** - Tailwind with custom color variables
12. ✅ **LocalStorage visual edits** - Hero text editing on homepage

---

## WHAT'S MISSING ❌

1. ❌ **Visual drag-and-drop editor** - No builder UI component exists
2. ❌ **Template storage** - Templates are hardcoded, not persisted
3. ❌ **Store customization persistence** - Only hero text saved to localStorage
4. ❌ **Store model** - No database entity representing each user's store
5. ❌ **Theme/design storage** - No color scheme, layout persistence
6. ❌ **Store frontend generation** - No system to generate/host individual stores
7. ❌ **Domain management** - No custom domain functionality
8. ❌ **Store analytics** - No metrics/views collection
9. ❌ **Template builder admin** - No interface to create/edit templates
10. ❌ **Design/canvas API** - No integration with visual design tools
11. ❌ **Store publishing** - No deploy/publish functionality
12. ❌ **Store preview** - No way to see before publishing
13. ❌ **Multi-language templates** - All hardcoded in English
14. ❌ **Responsive builder** - No mobile/tablet editing preview
15. ❌ **Feature gating** - Templates/features not tied to subscription tier

---

## IMPLEMENTATION PRIORITIES

### Phase 1: Core Store Model & Persistence
- [ ] Create `Store` model (company → store relationship)
- [ ] Create `StoreTheme` model (colors, fonts, layout)
- [ ] Create `StorePage` model (homepage customization)
- [ ] Add migrations

### Phase 2: Design Storage & Backend
- [ ] Store API endpoints: GET/POST/PATCH store theme
- [ ] Store JSON schema for design (colors, layout, sections)
- [ ] Implement store state management in frontend (Zustand)
- [ ] Replace localStorage with database persistence

### Phase 3: Visual Editor UI
- [ ] Build editor component with React + drag-and-drop library (e.g., react-dnd)
- [ ] Sections for: Hero, Products, About, Footer
- [ ] Color picker, font selector, layout options
- [ ] Real-time preview

### Phase 4: Store Frontend
- [ ] Create store frontend app (separate Next.js or static generation)
- [ ] Render based on Store & StoreTheme data
- [ ] Custom domain routing

### Phase 5: Feature Gating & Subscriptions
- [ ] Check subscription tier before allowing template upgrade
- [ ] Limit features per tier (custom domain, analytics, API)
- [ ] Add usage tracking & quota enforcement

---

## References

- **Landing pages:** `frontend/app/[afrify|tradehub|page].tsx`
- **Visual editor entry:** `frontend/app/visual-edits/page.tsx`
- **Store models:** `backend/apps/companies|subscriptions|products/models.py`
- **API routes:** `backend/config/urls.py`
- **State management:** `frontend/stores/uiStore.ts`
- **Styling:** `frontend/tailwind.config.ts`
- **API client:** `frontend/lib/api.ts`
