# Meezan Roshan Digital Account - GitHub & Vercel Setup Guide

This project is fully configured and ready to be hosted on **GitHub** and deployed to **Vercel**. 

---

## 🇵🇰 Guide in Roman Urdu (Urdu Summary)

Aap is code ko aasani se **GitHub** par upload kar sakte hain aur **Vercel** par deploy kar sakte hain. Neeche diye gaye steps ko follow karein:

### 1. GitHub par code upload karne ka tareeqa:
1. Apne GitHub account par jaein aur ek naya repository (public ya private) banayein.
2. Apne computer par terminal/command prompt kholein aur ye commands run karein:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <Aapki-GitHub-Repository-URL>
   git push -u origin main
   ```

### 2. Vercel par Deploy karne ka tareeqa:
1. **[vercel.com](https://vercel.com/)** par sign in karein.
2. **"Add New"** -> **"Project"** par click karein.
3. Apni GitHub repository ko import karein.
4. **Build & Development Settings** ke section mein ye configure karein (Vercel isay khud bhi detect kar sakta hai):
   - **Framework Preset**: `Other` (or Angular)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **"Deploy"** button par click karein! Aapki website chand seconds mein live ho jayegi.

---

## 🇬🇧 Guide in English

Follow these simple steps to host this project on GitHub and deploy it to Vercel.

### 1. Push to GitHub

1. Go to [GitHub](https://github.com/) and create a new repository (do not initialize with a README or gitignore).
2. Run the following commands in your local project root:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for meezan bank portal"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
   git push -u origin main
   ```

### 2. Deploy to Vercel

1. Log in to your [Vercel Dashboard](https://vercel.com/).
2. Click **Add New** -> **Project**.
3. Import your newly created GitHub repository.
4. Vercel will auto-detect the configuration, but double-check that the build settings are as follows:
   - **Framework Preset**: Choose **Other** or **Angular**
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will automatically build the app and give you a live production URL!

---

## 🛠️ Local Development (Apne PC par run karne ke liye)

To run this project locally on your machine:

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start the development server**:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.
