# Mohammed Al-Bakhity Ali - Surveying & Roads Engineer Portfolio

Professional, SaaS-inspired portfolio for a Surveying & Roads Technician. Built with React + Vite + Tailwind CSS v4.

## ✨ New Design v2.0 - Engineering Focused

- **Pure Surveying Identity**: Removed all AI/programming references, 100% focused on surveying & roads engineering
- **SaaS Super Hero Section**: Centered hero with badge, huge display typography, dual CTA, stats bar, and interactive blueprint mockup showing Total Station data, coordinates, and quantity calculations
- **Professional Color System**: Zinc + Amber (safety engineering) with blueprint grid background
- **Bilingual**: Arabic (default) / English with RTL support
- **Sections**:
  - Hero - SaaS style with engineering blueprint dashboard
  - About - Professional profile with highlights
  - Services - 6 surveying services (Topographic, Road Layout, Quantity, AutoCAD, Supervision, Cadastral)
  - Experience & Education - Timeline
  - Projects - Engineering drawings as preview
  - Certificates & Documents - Downloadable PDFs with preview
  - Contact - With field availability note
- **CV & Certificates System**: Place files in `/public/cv/` and `/public/certificates/` - automatically copied to build

## 📁 File Structure

```
/public/cv/mohammed-albakhity-cv.pdf  -> Downloadable CV
/public/certificates/
  - diploma.pdf
  - autocad.pdf
  - quantity.pdf
  - id.pdf
/src/components/
  - Navbar.tsx
  - Hero.tsx (SaaS super hero + blueprint mockup)
  - About.tsx
  - Services.tsx
  - Experience.tsx
  - Projects.tsx
  - Certificates.tsx (with CV banner)
  - Contact.tsx
```

## 🛠️ Tech Stack

- React 19 + Vite 6 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons
- Clean dependencies (no bloat)

## 🚀 How to add your certificates

1. Put your real PDF or image files in `public/certificates/`
2. Update the file paths in `src/data.ts` -> `certificates.items[].file`
3. Put your real CV as `public/cv/mohammed-albakhity-cv.pdf`
4. Run `npm run build` -> files will be copied to `docs/`

## 📦 Build & Deploy

```bash
npm install
npm run build   # builds to docs/ for GitHub Pages
```

GitHub Pages configured with base `/portfolio/` and outDir `docs/`.

## 📄 License
MIT
