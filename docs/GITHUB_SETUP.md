# Push Afritradehub to GitHub

## 1. Create an empty repository on GitHub

1. Sign in at [https://github.com](https://github.com).
2. Click **+** → **New repository**.
3. Name it (e.g. `afritradehub` or `Afritradehub-2`).
4. Leave **empty** (no README, no .gitignore, no license) so you avoid merge conflicts.
5. Click **Create repository**.

## 2. Add the remote and push (this folder)

In PowerShell, from the project root (`Afritradehub 2`):

```powershell
cd "c:\Users\fezza\Afritradehub 2"

# Use YOUR username and repo name:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# If you already have a wrong origin, remove it first:
# git remote remove origin

# Push the current branch (master or main)
git branch -M main
git push -u origin main
```

If GitHub shows `main` as the default branch but your local branch is `master`, either use `git branch -M main` before push, or push with:

```powershell
git push -u origin master
```

## 3. Authentication

- **HTTPS:** GitHub will prompt for credentials. Use a [Personal Access Token](https://github.com/settings/tokens) instead of your password.
- **SSH:** Add your SSH key in GitHub settings, then use:
  `git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git`

## 4. Submodule `afrify-frontend` (if you use it)

This repo includes `afrify-frontend` as a **Git submodule**. After the first push:

- Either push the submodule to **its own** GitHub repo and set the submodule URL to that repo, or  
- Remove the submodule and keep only the `frontend/` Next.js app if you no longer need `afrify-frontend`.

To push the submodule to a separate repo:

```powershell
cd "c:\Users\fezza\Afritradehub 2\afrify-frontend"
git remote add origin https://github.com/YOUR_USERNAME/afrify-frontend.git
git push -u origin main
cd ..
git add afrify-frontend
git commit -m "Update afrify-frontend submodule pointer"
git push
```

## 5. Secrets

Never commit `.env`, `.env.local`, or API keys. They are listed in `.gitignore`. Rotate any key that was ever committed.
