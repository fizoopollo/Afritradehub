# AfriTradeHub - Admin Panel Access Guide

## 🔑 Admin Login Credentials

To access the admin panel, use these credentials:

**Admin Login URL:** `admin-login.html`

**Default Credentials:**
- Email: `admin@afritradehub.com`
- Password: `Admin@123`

## 📋 How to Access Admin Panel

### Method 1: Direct URL
1. Open your browser
2. Navigate to: `http://localhost/admin-login.html` or open the file directly
3. Enter the admin credentials above
4. Click "Login as Administrator"

### Method 2: From Homepage
1. Go to the homepage (`index.html`)
2. Look at the top navigation bar (top-right)
3. Click on the "🔑 Admin" link
4. Enter admin credentials

## 🎯 Admin Panel Features

Once logged in, you'll have access to:

### 1. **Dashboard Overview**
   - View platform statistics
   - Monitor active users, suppliers, products
   - Quick access to all management areas

### 2. **Buyers Management**
   - View all registered buyers
   - Add, edit, or remove buyer accounts
   - Monitor buyer activities

### 3. **Suppliers Management**
   - Manage supplier profiles
   - Verify supplier credentials
   - View supplier products
   - Access supplier pages directly

### 4. **Products Management**
   - Add new products
   - Edit existing products
   - Remove products
   - View product details

### 5. **Page Editor (Drag & Drop)**
   - **Drag components** from the toolbar
   - **Drop them** into the page builder
   - **Edit content** directly by clicking on text
   - **Delete elements** using the delete button
   - **Save changes** to update the live site

   Available Components:
   - 📝 Heading
   - 📄 Paragraph
   - 🔘 Button
   - 🖼️ Image
   - 📦 Product Card
   - 🏭 Supplier Card

### 6. **Analytics**
   - View platform performance
   - Monitor growth metrics
   - Revenue tracking

### 7. **Settings**
   - Platform configuration
   - General settings
   - Maintenance mode

## 🎨 How to Use the Drag & Drop Editor

1. Click on "Page Editor (Drag & Drop)" in the sidebar
2. **Select a component** from the toolbar (Heading, Paragraph, Button, etc.)
3. **Drag it** to the drop zone area
4. **Drop it** where you want it to appear
5. **Click on the text** to edit it directly
6. Use the **Edit** or **Delete** buttons on each element
7. Click **"Save Changes"** when done

## 🔐 Security Notes

⚠️ **IMPORTANT:** This is a demo/development version with hardcoded credentials.

For production use:
- Change the default admin password
- Implement proper backend authentication
- Use secure password hashing
- Add two-factor authentication
- Implement role-based access control (RBAC)
- Use HTTPS for all admin pages

## 📱 Accessing Different User Types

### Regular User (Buyer/Supplier)
- Go to: `signin.html` or click "Sign In" on homepage
- Create account via `signup.html` or click "Join Free"
- Access: `dashboard.html` after login

### Administrator
- Go to: `admin-login.html` or click "🔑 Admin" in top nav
- Use admin credentials: `admin@afritradehub.com` / `Admin@123`
- Access: `admin-dashboard.html` after login

## 🌐 Live Platform URLs

After deployment to GitHub Pages:
- **Homepage:** `https://fizoopollo.github.io/Afritradehub/`
- **Admin Login:** `https://fizoopollo.github.io/Afritradehub/admin-login.html`
- **User Login:** `https://fizoopollo.github.io/Afritradehub/signin.html`

## 🛠️ Troubleshooting

### Can't see admin login link?
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Check top-right corner of homepage for "🔑 Admin" link

### Login not working?
- Make sure you're using exact credentials (case-sensitive)
- Email: `admin@afritradehub.com`
- Password: `Admin@123`
- Check browser console for errors (F12)

### Admin dashboard not loading?
- Clear localStorage: Open browser console (F12) and type:
  ```javascript
  localStorage.clear();
  ```
- Try logging in again

## 📞 Support

For issues or questions:
- Check browser console (F12) for error messages
- Verify all files are in the same directory
- Ensure JavaScript is enabled in your browser

---

**Built with ❤️ for AfriTradeHub**
