# ⚡ Quick Reference Card

## 🎯 Start Services (Choose One Method)

### Method 1: Power Shell Script (Easy)
```
cd "c:\Users\fezza\Afritradehub 2"
.\startup-services.ps1
```
Launches all 4 services in separate windows.

### Method 2: Manual (for specific service)
```
cd path\to\service
# Backend: .\.venv\Scripts\python.exe manage.py runserver [PORT]
# Frontend: npm run dev
```

---

## 📍 Service Ports & URLs

| Service | Frontend | Backend | Admin |
|---------|----------|---------|-------|
| **Afritrade** | :3000 | :8000 | :8000/admin |
| **Afrify** | :3001 | :8001 | :8001/admin |

---

## 🔐 Default Accounts

```
Afritrade:
  Email: demo@afrify.com
  Pass:  demo123456

Afrify:
  Email: demo@afrify.com
  Pass:  demo123456

Admin Panels (create via setup script):
  Username: admin
  Password: admin123456
```

---

## 📂 Quick Paths

```
Backend Dirs:
  Afritrade: c:\...\Afritradehub 2\backend
  Afrify:    c:\...\Afritradehub 2\afrify-backend

Frontend Dirs:
  Afritrade: c:\...\Afritradehub 2\frontend
  Afrify:    c:\...\Afritradehub 2\afrify-frontend

Databases:
  Afritrade: backend\db.sqlite3
  Afrify:    afrify-backend\db.sqlite3
```

---

## 🔧 Common Commands

### Database Migrations
```
cd [backend-dir]
.\.venv\Scripts\python.exe manage.py makemigrations
.\.venv\Scripts\python.exe manage.py migrate
```

### Create Admin User
```
cd [backend-dir]
.\.venv\Scripts\python.exe manage.py createsuperuser
```

### Install Dependencies
```
# Backend
pip install -r requirements.txt

# Frontend
npm install
npm audit fix
```

### Run Tests
```
cd [backend-dir]
.\.venv\Scripts\python.exe manage.py test
```

---

## 🌐 Network Access (for Partner Preview)

```
Afritrade:  http://172.20.20.20:3000
Afrify:     http://172.20.20.20:3001
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port in use | `netstat -ano \| findstr :PORT` then `taskkill /PID [PID] /F` |
| CORS error | Check `.env` CORS_ALLOWED_ORIGINS |
| Module not found | `pip install -r requirements.txt` |
| DB locked | Stop all services, delete `db.sqlite3`, re-migrate |
| Frontend won't load | Kill npm process, `npm install`, `npm run dev` |

---

## 📚 Documentation

```
SETUP_GUIDE.md      - Detailed setup & feature walkthrough
ARCHITECTURE.md     - System architecture & integration
backend/README.md   - Afritrade backend docs
frontend/README.md  - Afritrade frontend docs
afrify-backend/README.md  - Afrify backend docs
```

---

## ✨ Key Features Ready

✅ B2B Marketplace (Afritrade)
✅ Store Builder (Afrify)
✅ Cross-platform authentication
✅ 50+ store templates
✅ Design customization
✅ Multiple publishing options
✅ Payment integrations configured
✅ Network preview enabled

---

**Update your hosts file to use 172.20.20.20 for local network access:**
```
C:\Windows\System32\drivers\etc\hosts

Add:
172.20.20.20  localhost.local
```

Then access: `http://localhost.local:3000` and `:3001`
