# Mohammed Al-Bakhity Ali - Surveying & Roads Engineer Portfolio

Professional, SaaS-inspired portfolio for a Surveying & Roads Technician. Built with React + Vite + Tailwind CSS v4.

## ✨ Design v2.1 - Engineering Focused + SEO/UX Hardening

- **Pure Surveying Identity**: 100% focused on surveying & roads engineering
- **SaaS Super Hero Section**: Centered hero with badge, huge display typography, dual CTA, stats bar, and interactive blueprint mockup showing Total Station data, coordinates, and quantity calculations
- **Professional Color System**: Navy + Amber (safety engineering) with blueprint grid background
- **Bilingual**: Arabic (default) / English with RTL support, auto browser-language detection
- **Scrollspy Navigation**: Active section highlighting in the navbar as you scroll
- **Floating WhatsApp CTA**: Persistent quick-contact button with a prefilled message
- **Full SEO Package**: Open Graph + Twitter Card images, JSON-LD (`Person`) structured data, canonical URL, `robots.txt`, `sitemap.xml`
- **Branded Favicons & PWA Manifest**: Custom compass/road icon set (16/32/180/192/512) + `site.webmanifest`
- **GitHub Pages SPA-safe 404**: Redirects deep links / hash routes back into the app
- **Deployment-safe Asset Links**: All CV/certificate links resolve via Vite's `BASE_URL` (`assetUrl()` helper) instead of hardcoded paths
- **Sections**:
  - Hero - SaaS style with engineering blueprint dashboard
  - About - Professional profile with highlights + illustrated engineer visual
  - Services - 6 surveying services (Topographic, Road Layout, Quantity, AutoCAD, Supervision, Cadastral)
  - Experience & Education - Timeline
  - Projects - Engineering drawings as preview
  - Certificates & Documents - Downloadable PDFs with preview
  - Contact - Web3Forms-powered form + field availability note
- **CV & Certificates System**: Place files in `/public/cv/` and `/public/certificates/` - automatically copied to build

## 📁 File Structure

```
/public/cv/mohammed-albakhity-cv.pdf  -> Downloadable CV
/public/certificates/
  - diploma.pdf
  - autocad.pdf
  - quantity.pdf
  - id.pdf
/public/
  - favicon.ico, favicon-16x16.png, favicon-32x32.png
  - apple-touch-icon.png, android-chrome-192x192.png, android-chrome-512x512.png
  - og-image.jpg (social preview)
  - site.webmanifest, robots.txt, sitemap.xml, 404.html
/src/components/
  - Navbar.tsx (with scrollspy)
  - Hero.tsx (SaaS super hero + blueprint mockup)
  - About.tsx (profile + illustration)
  - Services.tsx
  - Experience.tsx
  - Projects.tsx
  - Certificates.tsx (with CV banner)
  - Contact.tsx
  - WhatsAppButton.tsx (floating CTA)
/src/lib/utils.ts -> assetUrl() helper for BASE_URL-safe links
```

## 🛠️ Tech Stack

- React 19 + Vite 6 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons
- Clean dependencies (no bloat)

## 🔑 Environment Variables

Copy `.env.example` to `.env` and set:

- `VITE_WEB3FORMS_ACCESS_KEY` — your [Web3Forms](https://web3forms.com) access key for the contact form (falls back to a demo key if unset)
- `VITE_ANALYTICS_ID` — optional analytics measurement ID

## 🚀 How to add your certificates

1. Put your real PDF or image files in `public/certificates/`
2. Update the file paths in `src/data.ts` -> `certificates.items[].file` (relative paths, no leading `/portfolio/`)
3. Put your real CV as `public/cv/mohammed-albakhity-cv.pdf`
4. Run `npm run build` -> files will be copied to `docs/`

## 📦 Build & Deploy

```bash
npm install
npm run build   # builds to docs/ for GitHub Pages
```

GitHub Pages configured with base `/portfolio/` and outDir `docs/`.

> Replace `og-image.jpg`, `favicon*` and the URLs in `index.html` / `public/robots.txt` / `public/sitemap.xml` if you deploy under a different domain or repo name.

## 📄 License
MIT
