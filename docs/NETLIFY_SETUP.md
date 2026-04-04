# Netlify Deployment Guide for Afritradehub

This guide walks you through deploying the Afritradehub frontend to Netlify in 5 minutes.

## ⚡ Quick Deploy (Front-End Only)

### Step 1: Prepare Your Code for GitHub

```bash
# Navigate to your project directory
cd c:\Users\fezza\Afritradehub 2

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Afritradehub with EditToolbar and templates"

# Rename branch to main (if needed)
git branch -M main
```

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **"New"** (green button)
3. Create a new repository:
   - Name: `afritradehub` (or your choice)
   - Description: "E-commerce platform with customizable templates"
   - Visibility: Public or Private
   - Click **"Create repository"**

### Step 3: Push to GitHub

Copy the commands from GitHub and run them in your terminal:

```bash
# Add your GitHub repo as remote (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/afritradehub.git

# Push code to GitHub
git push -u origin main
```

### Step 4: Deploy to Netlify

1. Go to [netlify.app](https://netlify.app)
2. Click **"Sign up"** (if new user) or **"Log in"**
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** as your provider
5. Authorize Netlify to access your GitHub account
6. Select your `afritradehub` repository
7. Click **"Deploy site"**

### Step 5: Configure Environment Variables

Once deployed:

1. Go to your Netlify dashboard
2. Click on your site name
3. Go to **Site settings** → **Build & deploy** → **Environment**
4. Click **"Edit variables"**
5. Add a new variable:
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: `https://your-api.com` (or `https://localhost:8000` for testing)

6. Click **"Save"**
7. Go back to **Deploys** and click **"Trigger deploy"** to redeploy with new variables

### Step 6: Access Your Site

Your site will be live at:
- `https://[random-name].netlify.app`

Netlify will assign a random name. To use a custom domain:

1. Go to **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `mystore.com`)
4. Follow the DNS configuration instructions
5. Wait for DNS to propagate (5-48 hours)

## 🔄 Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch → automatic build & deploy
- Every pull request → preview deploy at `https://deploy-preview-[number]--[sitename].netlify.app`
- Rollback to any previous deploy in one click

## 📋 What Gets Deployed

- **Build Command**: `cd frontend && npm run build`
- **Publish Directory**: `frontend/.next`
- **Node Version**: 18.17.1 (configured in `netlify.toml`)

## ⚙️ Environment Variables to Configure

### Required
- `NEXT_PUBLIC_API_URL` - Your backend API URL

### Optional
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_MAPBOX_TOKEN` - Mapbox API token

## 🚨 Troubleshooting

### Build Fails
**Issue**: "npm ERR! code ERESOLVE"
- **Solution**: Delete `package-lock.json`, commit, and push. Netlify will recreate it.

**Issue**: "Cannot find module"
- **Solution**: Check that all imports are correct. Verify locally with `npm run build` first.

### Site Not Loading
**Issue**: Blank page or 404
- **Solution**: Check `NEXT_PUBLIC_API_URL` is set correctly. Verify backend is accessible.

### Images Not Loading
**Issue**: 404 on image files
- **Solution**: Ensure images are in `/public/assets/` folder and paths use `/assets/image.png`

### CORS Errors
**Issue**: "Access to XMLHttpRequest blocked by CORS"
- **Solution**: Configure your backend to allow requests from your Netlify domain:
  ```python
  # In Django settings.py
  CORS_ALLOWED_ORIGINS = [
      "https://[your-site].netlify.app",
      "http://localhost:3000",
  ]
  ```

## 📝 File Structure for Netlify

```
Afritradehub 2/
├── .git/                    # Git repository
├── .github/
│   └── workflows/
│       └── build.yml       # GitHub Actions CI/CD (optional)
├── .gitignore              # Git ignore rules
├── netlify.toml            # Netlify configuration
├── frontend/
│   ├── .next/              # Built Next.js output (deployed)
│   ├── package.json
│   ├── next.config.js
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   └── ... (other frontend files)
├── backend/                # Not deployed to Netlify
├── docs/
└── README.md
```

## 🔒 Security Tips

1. **Never commit secrets** to GitHub
2. **Use environment variables** for API keys
3. **Enable branch protection** on GitHub to require reviews before merging
4. **Use HTTPS only** - Netlify provides free SSL certificates
5. **Monitor build logs** for security issues

## 📈 Performance Optimization

- Images are optimized automatically
- Static assets cached for 1 year (configurable in `netlify.toml`)
- HTML pages not cached (allow real-time updates)

## 🎯 Next Steps After Deployment

1. **Test Your Site**
   - Visit `https://[sitename].netlify.app`
   - Test the EditToolbar functionality
   - Test all templates render correctly
   - Verify images load from `/assets/` folders

2. **Configure Backend Connection**
   - Update `NEXT_PUBLIC_API_URL` to your backend
   - Test API calls from the frontend

3. **Add Custom Domain** (Optional)
   - Point your domain to Netlify
   - Enable auto-renewing HTTPS certificate

4. **Monitor Analytics**
   - Check Netlify dashboard for build times
   - Monitor deploy history
   - Set up error notifications

## 📞 Support

- **Netlify Docs**: https://docs.netlify.com/
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Pages**: https://github.com/features
- **Community**: Check GitHub Issues for common problems

## 🎉 Congratulations!

Your Afritradehub frontend is now live on Netlify! Every git push will automatically rebuild and deploy your changes.

---

**Last Updated**: 2024  
**Netlify Version**: 4.x  
**Next.js Version**: 14.x
