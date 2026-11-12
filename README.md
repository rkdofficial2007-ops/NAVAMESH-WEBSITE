# Team NAVAMESH Official Web Application

A full-stack, production-grade Next.js (App Router) web application for **Team NAVAMESH** (Smart India Hackathon 2025 Grand Finalist & Multi-Ideathon Winner).

Built with a futuristic cyberpunk aesthetic (`#050505` pitch black + `#39FF14` neon green), secure server-side API architecture, JWT authentication with HTTP-only cookies, and instant Vercel deployment support.

---

## ⚡ Features

1. **Cyberpunk UI & Visual Identity**:
   - High-voltage `#39FF14` neon accents, ambient radial glows, and dark mode aesthetic.
   - Typography powered by Google Fonts: `Rajdhani` (geometric tech headings) and `Inter` (readable UI body).
   - Fully responsive for mobile, tablet, and widescreen monitors.

2. **Official Media & Verified Credentials**:
   - Official team photography and "The Journey" 4-phase field progression images bundled in `/public/assets`.
   - Unified 8-page verified certificate PDF (`/public/assets/SIH-certificates.pdf`) viewable via modal viewer or full-screen direct link.

3. **Backend & Secure Architecture (Zero Key Leaks)**:
   - Server-side API endpoints (`/api/auth/*` and `/api/contact`).
   - Secure authentication via Jose (HS256 JWT) stored in signed `httpOnly`, `sameSite: lax` cookies.
   - All secret keys, admin credentials, and third-party API keys (e.g. Resend) live strictly in environment variables on the server.

4. **Dedicated Pages**:
   - `/` : Dynamic Hero, metric counters (8+ podiums, 5+ wins), featured recognitions, "The Journey" gallery.
   - `/achievements` : Filterable catalog across National Level, Ideathons, Robotics & AI, FinTech, and Startup Pitches with live certificate modal.
   - `/projects` : Deep-dive into technical prototypes (Sub-rubble Radar, OMNIARM 6-DOF, Insect Kinematics Digital Twin, Microplastic Monitor).
   - `/contact` : Contact form with backend API handler, email link, and Instagram social link.
   - `/admin` : Command center dashboard protected by JWT session authentication.

---

## 🚀 How to Run Locally

```bash
# 1. Navigate to the project directory
cd navamesh-web

# 2. Install dependencies (if not already installed)
npm install

# 3. Create .env.local (already provided in repository)
cp .env.example .env.local

# 4. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Admin Credentials (Default)

- **Admin Email**: `navameshofficial@gmail.com`
- **Master Password**: `Navamesh@2026!Master`

*(You can customize these in `.env.local` or directly in your Vercel Project Settings).*

---

## 🌐 One-Click Deployment to Vercel

### Option 1: Via GitHub (Recommended)
1. Push this folder to a GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete team navamesh full-stack website"
   git remote add origin https://github.com/<YOUR_USERNAME>/navamesh-web.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `navamesh-web` repository.
4. Add the following **Environment Variables** in Vercel:
   - `JWT_SECRET`: Any random 32+ character string
   - `ADMIN_EMAIL`: `navameshofficial@gmail.com`
   - `ADMIN_PASSWORD`: Your desired admin master password
5. Click **Deploy**. Vercel will build and deploy it with a global edge CDN in under 1 minute.

### Option 2: Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the interactive prompts and accept default settings.
