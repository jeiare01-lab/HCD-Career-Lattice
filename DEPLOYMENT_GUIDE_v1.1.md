# 🚀 Deployment Guide — HCD Career Lattice v1.1

**How to deploy the app to a live URL.**

---

## ✅ **IS IT ALREADY DEPLOYED?**

**Yes!** The app is already live at:
```
https://hcd-career-lattice.vercel.app
```

**You can start using it immediately.** No installation needed!

---

## 📋 **IF YOU WANT TO DEPLOY YOUR OWN COPY**

Follow this guide to deploy to your own Vercel or GitHub Pages account.

---

## 🎯 **OPTION 1: VERCEL (RECOMMENDED)**

### **Why Vercel?**
- ✅ Easiest to set up (2 minutes)
- ✅ Auto-deploys when you push code
- ✅ Free tier very generous
- ✅ Great performance
- ✅ Professional dashboard

### **Prerequisites**
- GitHub account (free)
- Vercel account (free)
- 10 minutes

### **Step 1: Push Code to GitHub**

First, get your code on GitHub (follow QUICK_START.md or GITHUB_PUSH_STEPS.txt for details).

Your GitHub repo should be at:
```
https://github.com/jeiare01-lab/HCD-Career-Lattice
```

### **Step 2: Go to Vercel**

1. Visit: https://vercel.com
2. Click **"Sign Up"** (or "Sign In" if you have account)
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access GitHub

### **Step 3: Create New Project**

1. Click **"New Project"** button
2. Search for: `HCD-Career-Lattice`
3. Select your repo
4. Click **"Import"**

### **Step 4: Configure Project**

Vercel auto-detects settings:
- **Framework:** React
- **Build command:** `npm run build`
- **Output dir:** `dist`

You can accept all defaults.

### **Step 5: Deploy**

1. Click **"Deploy"** button
2. Wait 1-2 minutes for build
3. See success message

### **Result**

Vercel shows your live URL:
```
✓ Production: https://hcd-career-lattice.vercel.app
```

### **Custom Domain (Optional)**

1. In Vercel dashboard
2. Project → Settings → Domains
3. Add custom domain
4. Follow DNS setup instructions

### **Auto-Deployment (Automatic)**

From now on:
- You commit code to GitHub
- Vercel automatically rebuilds
- New version live in 1-2 minutes
- No manual steps needed

---

## 📄 **OPTION 2: GITHUB PAGES (FREE)**

### **Why GitHub Pages?**
- ✅ Free forever
- ✅ Hosted directly on GitHub
- ✅ Good performance
- ✅ Integrated with GitHub

### **Prerequisites**
- GitHub account with your code pushed
- 10 minutes

### **Step 1: Configure Vite for GitHub Pages**

Open your `vite.config.js` and update:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/HCD-Career-Lattice/',
})
```

The `base: '/HCD-Career-Lattice/'` is important!

### **Step 2: Add Deploy Script**

Update `package.json` scripts section:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "deploy": "npm run build && gh-pages -d dist",
  "preview": "vite preview"
}
```

### **Step 3: Install gh-pages**

```bash
npm install gh-pages --save-dev
```

### **Step 4: Deploy**

```bash
npm run deploy
```

Wait 1-2 minutes for build and upload.

### **Step 5: Enable GitHub Pages**

1. Go to GitHub repo
2. Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: **gh-pages**
5. Save

### **Result**

Your app is live at:
```
https://jeiare01-lab.github.io/HCD-Career-Lattice/
```

### **Auto-Deployment (Manual)**

To update:
1. Push code to GitHub
2. Run: `npm run deploy`
3. Wait 2-3 minutes
4. New version live

---

## 🌐 **OPTION 3: NETLIFY (ALTERNATIVE)**

### **Why Netlify?**
- ✅ Free tier
- ✅ Generous limits
- ✅ Drag & drop deployment
- ✅ Good performance

### **Step 1: Build Locally**

```bash
npm run build
```

Creates `dist/` folder with compiled app.

### **Step 2: Deploy to Netlify**

1. Visit: https://netlify.com
2. Sign up with GitHub
3. Click **"New site from Git"**
4. Select repo
5. Deploy

### **Result**

Netlify provides live URL automatically.

### **Drag & Drop Alternative**

1. Go to netlify.com (no login needed)
2. Drag `dist/` folder onto page
3. Instant deployment
4. URL provided

---

## 🔧 **ENVIRONMENT SETUP (FOR YOUR OWN MACHINE)**

If deploying from scratch:

### **Step 1: Install Node.js**

Download from: nodejs.org
Includes npm (package manager)

### **Step 2: Clone Repository**

```bash
git clone https://github.com/jeiare01-lab/HCD-Career-Lattice.git
cd HCD-Career-Lattice
```

### **Step 3: Install Dependencies**

```bash
npm install
```

### **Step 4: Test Locally**

```bash
npm run dev
```

Opens at: http://localhost:5173/

### **Step 5: Build for Production**

```bash
npm run build
```

Creates `dist/` folder with compiled app.

---

## 🔐 **ENVIRONMENT VARIABLES (If Needed Later)**

Create `.env` file for API keys:

```env
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_key_here
```

In component, access with:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## ✅ **DEPLOYMENT CHECKLIST**

Before deploying:

- [ ] Code pushed to GitHub
- [ ] `npm install` works locally
- [ ] `npm run build` completes without errors
- [ ] `npm run dev` runs locally without errors
- [ ] All components render properly
- [ ] Export/print features work
- [ ] Path builder functions correctly
- [ ] Training roadmap displays
- [ ] No console errors (F12)

After deployment:

- [ ] Live URL opens in browser
- [ ] App loads completely
- [ ] Grade Lattice shows all roles
- [ ] Clicking roles opens detail panel
- [ ] Training info visible
- [ ] Path builder works
- [ ] Print/export buttons work
- [ ] Supervisor form opens
- [ ] Mobile responsive
- [ ] No console errors

---

## 🔄 **UPDATING YOUR DEPLOYED APP**

### **For Vercel (Automatic)**

```bash
# Make changes
nano src/components/HCDCareerLattice.jsx

# Push to GitHub
git add .
git commit -m "Update: [description]"
git push

# Vercel auto-deploys in 1-2 minutes!
```

### **For GitHub Pages (Manual)**

```bash
# Make changes
nano src/components/HCDCareerLattice.jsx

# Rebuild and deploy
git add .
git commit -m "Update: [description]"
git push
npm run deploy

# Updates live in 2-3 minutes
```

### **For Netlify (Manual)**

```bash
npm run build
# Drag dist/ folder to Netlify
# Or use GitHub auto-deploy
```

---

## 🚨 **TROUBLESHOOTING DEPLOYMENT**

### **Build Fails**

1. **Check error message**
   - Look at build logs
   - Usually shows exact problem

2. **Common issues:**
   - Missing dependency: `npm install [package]`
   - Syntax error: Check component code
   - Wrong import path: Verify file locations

3. **Test locally first**
   - Run `npm run build` on your machine
   - Fix errors before pushing

### **App Won't Load After Deployment**

1. **Check live URL in browser**
2. **Press F12 for console**
3. **Look for error messages**
4. **Try hard refresh:** Ctrl+Shift+R
5. **Check build was successful**

### **Features Missing or Broken**

1. **Verify you deployed latest code**
2. **Clear browser cache**
3. **Hard refresh:** Ctrl+Shift+R
4. **Check console for errors:** F12
5. **Test in different browser**

### **Slow Performance**

1. **Check build size:** `npm run build` output
2. **Verify no console errors**
3. **Check network tab in F12**
4. **Try in different browser**
5. **May need optimization:**
   - Lazy loading
   - Code splitting
   - Image optimization

---

## 📊 **PERFORMANCE GUIDELINES**

Target metrics:

| Metric | Target | Status |
|--------|--------|--------|
| First Load | < 2 seconds | ✅ Good |
| Component Size | < 100KB | ✅ ~80KB |
| Time to Interactive | < 3 seconds | ✅ Good |
| Mobile Load | < 3 seconds | ✅ Good |

If slow, check:
- Internet connection (run speedtest.net)
- Browser cache (clear and retry)
- Server performance (try different region)
- Device capabilities (older devices slower)

---

## 🎯 **RECOMMENDED: VERCEL**

**Why:**
1. Easiest setup
2. Auto-deploys on push
3. Free tier sufficient
4. Excellent performance
5. Professional dashboard
6. Support excellent

**Steps:**
1. Push to GitHub
2. Go to vercel.com
3. Import GitHub repo
4. Click deploy
5. Done!

**Cost:** Free tier includes unlimited projects

---

## 📚 **ADDITIONAL RESOURCES**

**Official Documentation:**
- Vercel: https://vercel.com/docs
- GitHub Pages: https://pages.github.com
- Netlify: https://docs.netlify.com
- Vite: https://vitejs.dev/guide/build.html

**Video Tutorials:**
- YouTube: "Deploy React to Vercel"
- YouTube: "GitHub Pages React app"

**Community Help:**
- Stack Overflow
- GitHub Discussions
- Reddit: r/reactjs

---

## ✨ **QUICK SUMMARY**

```
1. GitHub → Code pushed
2. Vercel → Connect GitHub repo
3. Click → Deploy button
4. Wait → 1-2 minutes
5. Done → App is live!

OR

1. GitHub → Code pushed
2. Configure → vite.config.js
3. Run → npm run deploy
4. Wait → 2-3 minutes
5. Done → App is live!
```

---

**Questions?** Check:
- README.md — Feature overview
- QUICK_START.md — Getting started
- USER_GUIDE.md — How to use features

**Ready to deploy?** Pick Vercel (easier) or GitHub Pages (free tier).

Your live app will be at:
```
https://hcd-career-lattice.vercel.app (Vercel)
or
https://jeiare01-lab.github.io/HCD-Career-Lattice/ (GitHub Pages)
```

🎉 **Go live in minutes!**
