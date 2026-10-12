# محمد البخيتي — الموقع المهني | Mohammed Al-Bakhity — Portfolio

موقع شخصي **مختصر وعصري** لمهندس مساحة وطرق: يعرض الخدمات والمشاريع المنفّذة وبيانات التواصل مباشرة — بدون سيرة ذاتية وبدون شهادات ووثائق.

> **الفكرة:** شاشة رئيسية قصيرة، ثم أربعة أقسام فقط. لا حشو ولا تفاصيل زائدة: كل جملة لها وظيفة، وكل خدمة لها مخرجات مكتوبة بوضوح.

---

## 1) بنية الموقع

| # | القسم | الوظيفة |
|---|-------|---------|
| — | **الواجهة** | الاسم + التخصص + سطر واحد + زرّان (واتساب · المشاريع) + الأدوات + 3 أرقام |
| 01 | **الخدمات** | ست خدمات بتبويب تفاعلي: لكل خدمة مخرجاتها وأدواتها ورسم توضيحي |
| 02 | **المشاريع** | سبعة أعمال منفّذة، مع فلترة حسب التخصص وأرقام كل مشروع ومخرجاته |
| 03 | **نبذة** | سطران عن طريقة العمل + سلسلة العمل + بيانات سريعة + صورة |
| 04 | **تواصل** | واتساب · بريد · X · GitHub · QR · vCard + نموذج طلب قصير |

**غير موجود في الموقع بشكل مقصود:** السيرة الذاتية، الشهادات، الوثائق، الخبرات الوظيفية، والمؤهلات الدراسية.

## 2) التقنيات

- **React 19 + Vite 6 + TypeScript**
- **Tailwind CSS v4** + متغيرات CSS لنظام تصميم مركزي (وضع نهاري/ليلي)
- **Framer Motion** للحركات الدقيقة
- **lucide-react** للأيقونات
- خطوط مستضافة محلياً: IBM Plex Sans Arabic (نصوص) · Cairo (عناوين) · JetBrains Mono (أرقام وقيم)
- بدون أي تتبع خارجي · نموذج التواصل عبر Web3Forms

## 3) هيكل الملفات

```
index.html                 ← SEO + JSON-LD + noscript
metadata.json              ← وصف المشروع
src/
  data.ts                  ← ✱ كل النصوص (عربي/إنجليزي) في مكان واحد
  index.css                ← نظام التصميم (توكنز، بطاقات، أزرار، حقول)
  App.tsx                  ← تركيب الأقسام
  lib/
    links.ts               ← واتساب / بريد / tel / vCard
    utils.ts               ← cn() + assetUrl()
  components/
    Navbar · Hero · Services · Projects · About · Contact · Footer ·
    FloatingWA · Blueprint (رسومات SVG هندسية) · ui.tsx
public/
  qr/site.png · qr/whatsapp.png   ← أكواد QR سريعة
  og-image.jpg · favicon.* · site.webmanifest · robots.txt · sitemap.xml · 404.html
scripts/build-assets.py    ← توليد الشعار والأيقونات و og-image و QR  (npm run assets)
.github/workflows/deploy.yml ← نشر تلقائي إلى GitHub Pages
```

## 4) التشغيل محلياً

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # يُنتج مجلد docs/ الجاهز للنشر
npm run lint       # تحقّق TypeScript
npm run assets     # إعادة توليد الأيقونات و og-image و QR (يتطلب Python + pillow/qrcode)
```

## 5) التعديل

- **النصوص:** كل شيء في `src/data.ts` (عربي + إنجليزي بنفس البنية). ابقَ على نفس الشكل عند الإضافة.
- **الخدمات:** `services.items` — العنوان، الوصف، المخرجات، الأدوات، والرسم (`blueprint`).
- **المشاريع:** `projects.items` — أضف عملاً جديداً أو غيّر `track` للتصنيف (مساحة · طرق · كميات · مكتب فني · خرائط · إشراف).
- **التواصل:** `contact.channels` + `identity` في نهاية `src/data.ts` (الهاتف: `+966 56 674 3293`).
- **الرسومات الهندسية:** `src/components/Blueprint.tsx` — رسومات SVG بألوان مرتبطة بمتغيرات CSS.
- **نموذج التواصل:** مفتاح Web3Forms في `.env` (`VITE_WEB3FORMS_ACCESS_KEY`).

## 6) النشر

- GitHub Pages من فرع `main` عبر `docs/` (Workflow جاهز).
- الرابط: `https://engmohammeda.github.io/portfolio/`
- `vite.config.ts` يستخدم `base: '/portfolio/'` في البناء و `/` في التطوير.
- إذا تغيّر اسم المستودع أو النطاق: حدّث `base` + روابط `index.html` + `robots.txt` + `sitemap.xml` + `site.webmanifest` + `SITE` في `scripts/build-assets.py`.

## 7) الوصول والأداء

- ثنائي اللغة بتبديل فوري (RTL/LTR) وخطوط عربية محلية بلا اتصال خارجي.
- تفاعل كامل بالكيبورد (تبويبات الخدمات بأسهم الكيبورد، تخطّي إلى المحتوى) ودعم `prefers-reduced-motion`.
- وضع ليلي/نهاري افتراضي حسب تفضيل النظام، قابل للتبديل والحفظ.
- بيانات منظمة: `ProfilePage` + `Person` + `hasOccupation` + `makesOffer`.

## 8) الترخيص

MIT — الاستخدام والنشر متاحان مع الإشارة للمصدر.
