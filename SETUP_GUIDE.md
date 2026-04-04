# 🚀 Afritrade Hub - Complete Setup Guide

## Overview

Your Afritrade Hub platform is now set up with **two independent services**:

### **Service 1: Afritrade B2B Marketplace**
- Marketplace for buying/selling between businesses
- Business directory and verification
- Order management and RFQ system
- Payment integrations (Stripe, Flutterwave)

### **Service 2: Afrify Store Builder**
- Drag-and-drop online store builder
- 50+ pre-built templates
- Design customization with color picker
- Multiple publishing options (Afrify hosting, custom domain, Afritrade integration)

---

## 📋 Directory Structure

```
Afritradehub 2/
│
├── backend/                          # Afritrade Backend (Django)
│   ├── manage.py
│   ├── config/                       # Settings, URLs, WSGI
│   ├── apps/
│   │   ├── users/                    # User authentication
│   │   ├── companies/                # Business profiles
│   │   ├── products/                 # Inventory management
│   │   ├── orders/                   # Order processing
│   │   ├── payments/                 # Payment handling
│   │   └── ...
│   ├── requirements.txt
│   ├── db.sqlite3                    # Database
│   └── .env                          # Environment variables
│
├── frontend/                         # Afritrade Frontend (Next.js)
│   ├── app/                          # Next.js App Router
│   ├── components/                   # React components
│   ├── package.json
│   └── .env.local
│
├── afrify-backend/                   # Afrify Backend (Django) ⭐ NEW
│   ├── manage.py
│   ├── config/                       # Settings, URLs
│   ├── stores/                       # Store management
│   ├── designs/                      # Design customization
│   ├── requirements.txt
│   ├── db.sqlite3                    # Separate database
│   └── .env
│
├── afrify-frontend/                  # Afrify Frontend (Vite+React) ⭐ NEW
│   ├── src/
│   │   ├── pages/                    # Page components
│   │   ├── components/               # React components
│   │   └── App.tsx
│   ├── package.json
│   └── .env
│
├── ARCHITECTURE.md                   # System architecture documentation
├── startup-services.ps1              # PowerShell startup script
└── setup-demo-data.sh                # Demo data setup script
```

---

## 🚦 Quick Start

### Prerequisites
```
✅ Python 3.11+ (already installed)
✅ Node.js 18+ (check: node -v)
✅ npm (check: npm -v)
```

### Option A: Using Startup Script (Recommended)

```powershell
cd "c:\Users\fezza\Afritradehub 2"
.\startup-services.ps1
```

This automatically opens 4 terminal windows:
1. Afritrade Backend (Port 8000)
2. Afritrade Frontend (Port 3000)
3. Afrify Backend (Port 8001)
4. Afrify Frontend (Port 3001)

### Option B: Manual Startup

**Terminal 1 - Afritrade Backend:**
```powershell
cd "c:\Users\fezza\Afritradehub 2\backend"
.\.venv\Scripts\python.exe manage.py runserver 8000
```

**Terminal 2 - Afritrade Frontend:**
```powershell
cd "c:\Users\fezza\Afritradehub 2\frontend"
npm run dev
```

**Terminal 3 - Afrify Backend:**
```powershell
cd "c:\Users\fezza\Afritradehub 2\afrify-backend"
.\.venv\Scripts\python.exe manage.py runserver 8001
```

**Terminal 4 - Afrify Frontend:**
```powershell
cd "c:\Users\fezza\Afritradehub 2\afrify-frontend"
npm run dev
```

---

## 🌐 Access URLs

| Service | URL | Purpose |
|---------|-----|---------|
| **Afritrade** | http://localhost:3000 | B2B Marketplace |
| **Afritrade API** | http://localhost:8000/api | Backend API |
| **Afritrade Admin** | http://localhost:8000/admin | Django Admin |
| **Afrify** | http://localhost:3001 | Store Builder |
| **Afrify API** | http://localhost:8001/api | Backend API |
| **Afrify Admin** | http://localhost:8001/admin | Django Admin |

**Network Preview (for partner):**
- Afritrade: http://172.20.20.20:3000
- Afrify: http://172.20.20.20:3001

---

## 🔐 Authentication

### Afritrade Login
**User Flow:**
1. Click "Sign In" on Afritrade
2. Use demo account:
   - Email: `demo@afrify.com`
   - Password: `demo123456`
3. Redirects to dashboard

**Admin Panel:**
- URL: http://localhost:8000/admin
- Username: `admin`
- Password: `admin123456` (if you create it with setup script)

### Afrify Login
**User Flow - Option 1 (Existing Afritrade Account):**
1. Go to Afrify
2. Click "Sign In"
3. Sign in with Afritrade credentials
4. Validates with Afritrade backend
5. Grants access to Afrify

**User Flow - Option 2 (New Account):**
1. Go to Afrify
2. Click "Sign Up"
3. Register via:
   - Google OAuth
   - Business email

**Admin Panel:**
- URL: http://localhost:8001/admin
- Username: `admin`
- Password: `admin123456` (if you create it with setup script)

---

## 📱 Feature Walkthrough

### Afritrade (B2B Marketplace)

**Home Page** (http://localhost:3000)
- Hero section showcasing both Afritradehub and Afrify
- B2B directory features
- Store builder (Afrify) promotion
- Business statistics

**Navigation:**
```
Afritradehub
├── Signup / Signin
├── Tradehub (B2B Directory)
│   ├── Browse Businesses
│   ├── RFQ System
│   └── Analytics
├── Afrify (Store Builder)
│   ├── Browse Templates
│   ├── Create Store
│   └── Manage Store
└── Dashboard
    ├── My Profile
    ├── My Orders
    ├── Products
    └── Analytics
```

### Afrify (Store Builder)

**Home Page** (http://localhost:3001)
- Hero: "Your Store, Your Way"
- 5-step launch process
- Template showcase (6 categories)
- Pricing plans (Free, Growth, Enterprise)

**Store Builder Flow:**
```
1. Choose Template
   - 50+ templates across categories
   - Category filters
   - Preview before selection

2. Drag & Drop Editor
   - Real-time design preview
   - Color customization (6 presets)
   - Desktop/Mobile view toggle
   - Save to localStorage

3. Add Products
   - Product gallery
   - Inventory management
   - Pricing & variants
   - Product descriptions

4. Set Up Payments
   - Stripe integration
   - Mobile money (Flutterwave)
   - Payment gateway setup

5. Publish & Sell
   - Publishing options:
     ✓ Afrify Platform (subdomain.afrify.store)
     ✓ Custom Domain (yourdomain.com)
     ✓ Afritrade B2B (marketplace listing)
```

---

## 🔄 Cross-Service Integration

### How Services Communicate

**Afrify → Afritrade:**
```
When user publishes store to Afritrade:
1. Afrify backend sends store data to Afritrade
2. Creates company profile in Afritrade
3. Syncs products to Afritrade marketplace
4. Links Afrify store to Afritrade account

API Call Example:
POST http://localhost:8000/api/companies/
{
  "name": "My Afrify Store",
  "description": "...",
  "email": "user@example.com",
  "source": "afrify_platform"
}
```

**Afritrade → Afrify:**
```
When user logs in with Afritrade account:
1. Afritrade provides JWT token
2. Afrify validates token with Afritrade backend
3. Grants access to Afrify services
4. Matches user across platforms

API Call Example:
POST http://localhost:8001/api/token/
{
  "username": "user@example.com",
  "password": "password",
  "source": "afritrade"
}
```

---

## 📊 Database Structure

### Afritrade DB (`backend/db.sqlite3`)
```
Users
├── User profiles
├── Authentication
└── Account settings

Companies
├── Business profiles
├── Verification status
└── Contact info

Products
├── Inventory
├── Pricing
└── Product details

Orders
├── Order processing
├── Order history
└── Status tracking

Payments
├── Transaction records
├── Payment gateway logs
└── Invoice data

Subscriptions
├── Plan selection
├── Billing cycle
└── Usage limits
```

### Afrify DB (`afrify-backend/db.sqlite3`)
```
Users (linked to Afritrade)
├── User accounts
├── Preferences
└── Notification settings

Stores
├── Store information
├── Publishing options
└── Store settings

StoreTemplates
├── Pre-built templates
├── Customization options
└── Pricing info

StoreDesign
├── Color customization
├── Layout configuration
├── Content sections

PublishHistory
├── Publish records
├── Status tracking
└── Error logging
```

---

## 🛠️ Development Tasks

### Adding Features to Afritrade

**Example: Add new product type**
```bash
cd backend
.\.venv\Scripts\python.exe manage.py startapp product_features
# Edit models.py
.\.venv\Scripts\python.exe manage.py makemigrations
.\.venv\Scripts\python.exe manage.py migrate
# Add serializers, views, URLs
```

### Adding Features to Afrify

**Example: Add new store template**
```bash
cd afrify-backend
# Login to admin at http://localhost:8001/admin
# Create StoreTemplate entry through admin panel
# Or use API:
curl -X POST http://localhost:8001/api/stores/templates/ \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name": "...", "category": "...", ...}'
```

---

## 🐛 Troubleshooting

### Port Already in Use
```powershell
# Check what's using port 3000
netstat -ano | findstr :3000

# Kill process by PID
taskkill /PID 12345 /F // Replace 12345 with PID
```

### Database Issues
```bash
# Reset database (delete all data)
cd backend
rm db.sqlite3
.\.venv\Scripts\python.exe manage.py migrate

# Or for Afrify:
cd afrify-backend
rm db.sqlite3
.\.venv\Scripts\python.exe manage.py migrate
```

### CORS Errors
If you see CORS errors in browser console:
- Check that backend is configured to allow frontend origin
- Afrify backend `.env` should have:
  ```
  CORS_ALLOWED_ORIGINS=http://localhost:3001,...
  ```

### Module Not Found
```bash
# Reinstall dependencies
pip install -r requirements.txt
# Or for frontend:
npm install
```

---

## 📚 API Examples

### Afritrade - Create Order
```bash
curl -X POST http://localhost:8000/api/orders/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "items": [{"product_id": "123", "quantity": 2}],
    "shipping_address": "..."
  }'
```

### Afrify - Create Store
```bash
curl -X POST http://localhost:8001/api/stores/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "My Store",
    "business_email": "store@example.com",
    "publish_type": "afrify"
  }'
```

### Afrify - Publish Store
```bash
curl -X POST http://localhost:8001/api/stores/my-store/publish/ \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## 🎯 Next Steps

1. **Test the platforms**
   - Browse Afritrade marketplace
   - Create a store in Afrify
   - Test store publication

2. **Customize templates**
   - Edit Afritrade styling (Next.js)
   - Add more Afrify templates
   - Adjust color schemes

3. **Integrate payments**
   - Set up Stripe API keys
   - Configure payment gateway
   - Test payment flow

4. **Deploy (later)**
   - Set up production environment
   - Configure cloud database
   - Deploy to server/cloud

---

## 📞 Support

For issues or questions:
1. Check `ARCHITECTURE.md` for system overview
2. Review individual service READMEs
3. Check admin panels for data
4. Review browser console for errors
5. Check terminal output for backend errors

---

## ✅ Checklist - What's Been Set Up

- ✅ Afritrade backend running with all migrations
- ✅ Afritrade frontend with all pages (signup, signin, builder, editor)
- ✅ Afrify backend created with complete models (Store, StoreTemplate, StoreDesign)
- ✅ Afrify frontend cloned from GitHub (Vite + React, 50+ templates)
- ✅ Cross-service authentication configured
- ✅ CORS configured for both services
- ✅ SQLite databases initialized
- ✅ Environment files created
- ✅ Startup script created
- ✅ Documentation complete

---

**Status: ✅ READY TO RUN**

Both services are fully configured and ready for local development, testing, and partner preview! 🎉
