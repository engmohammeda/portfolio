# محمد البخيتي — الملف المهني | Mohammed Al-Bakhity — Professional Portfolio

موقع شخصي **متعدد المسارات**: يعرض هوية مهنية متعددة (مساحة · طرق · كميات · مكتب فني · CAD · GIS · إشراف) بدل حصرها في مسمى واحد — مبني ومُصمَّم ليخدم هدفاً واحداً: **الحصول على فرصة عمل أو مشروع بأسرع وقت**.

> **الفكرة التصميمية:** الموقع كله مبني على لغة "اللوحة الهندسية" (Engineering Sheet): خطوط شعرية، تسميات فنية، عنوان لوحة كامل في الفوتر، أرقام أقسام، وجداول مواصفات. لا زخرفة زائدة ولا ألوان عشوائية — كل عنصر له وظيفة.

---

## 1) ماذا يعرض الموقع (بنية الأقسام)

| # | القسم | الوظيفة |
|---|-------|---------|
| 00 | **الواجهة + لوحة المخرجات** | العنوان: «تخصص واحد · قدرات متعددة» + لوحة تفاعلية بستة مسارات تُظهر *ما يُسلَّم فعلياً* لكل مسار، مع رسم هندسي متحرك |
| 01 | **الملف المهني** | من أنا، مبادئ العمل، بطاقة بيانات (حقائق + صورة ميدانية) |
| 02 | **خريطة القدرات** | 6 مسارات × (قدرات · أدوات · مخرجات · أدوار وظيفية) — 24 قدرة تنفيذية |
| 03 | **الخدمات** | 8 خدمات بمخرجات واضحة + كيف يبدأ العمل |
| 04 | **نماذج الأعمال** | 7 مشاريع برسم هندسي لكل مشروع + فلترة حسب المسار |
| 05 | **الخبرة** | مسار زمني (عمل · تعليم · تدريب) + مصفوفة مهارات بمستويات صريحة |
| 06 | **الشهادات** | ملفات PDF للاطلاع والتحميل + السيرة الذاتية (تنزيل + طباعة) |
| 07 | **التواصل** | واتساب · بريد · X · GitHub · QR · حفظ جهة الاتصال (vCard) + نموذج طلب |

---

## 2) التقنيات

- **React 19 + Vite 6 + TypeScript**
- **Tailwind CSS v4** (نظام تصميم مركزي عبر `@theme` + متغيرات CSS)
- **Framer Motion** لحركات الظهور الدقيقة
- **lucide-react** للأيقونات
- **خطوط مستضافة محلياً** (بدون Google Fonts): IBM Plex Sans Arabic (نصوص) · Cairo (عناوين) · JetBrains Mono (قيم فنية) — أداء أفضل وخصوصية أعلى
- **بدون أي تتبع خارجي**؛ نموذج التواصل عبر Web3Forms

## 3) هيكل الملفات

```
index.html                 ← SEO كامل + JSON-LD (Person/Occupation/Service) + noscript
metadata.json              ← وصف المشروع
src/
  data.ts                  ← ✱ كل النصوص (عربي/إنجليزي) في مكان واحد
  index.css                ← نظام التصميم (توكنز، لوحات، أزرار، طباعة)
  App.tsx                  ← تركيب الأقسام + ورقة الطباعة
  lib/
    links.ts               ← واتساب/بريد/vCard/الطباعة
    cv.ts                  ← تحميل السيرة الذاتية (مع fallback ذكي)
    utils.ts               ← cn() + assetUrl() (BASE_URL-safe)
  components/
    Navbar · Hero · Console · Blueprint · Profile · Capabilities ·
    Services · Projects · Experience · Credentials · Contact ·
    Footer · FloatingWA · ResumeSheet · ui.tsx
public/
  cv/mohammed-albakhity-cv.pdf   ← سيرة ذاتية مُولَّدة (صفحة عربية + صفحة إنجليزية)
  certificates/*.pdf             ← الدبلوم والشهادات
  qr/site.png · qr/whatsapp.png  ← أكواد QR للتواصل السريع
  og-image.jpg · favicon.* · site.webmanifest · robots.txt · sitemap.xml · 404.html
scripts/build-assets.py    ← توليد الشعار والأيقونات و og-image و QR والسيرة الذاتية
.github/workflows/deploy.yml ← نشر تلقائي إلى GitHub Pages
```

## 4) التشغيل محلياً

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # فحص TypeScript
npm run build      # إخراج إلى docs/ (متوافق مع GitHub Pages)
npm run preview    # معاينة نسخة الإنتاج
```

## 5) تحديث المحتوى (أهم قسم للمالك)

كل النصوص والبيانات في **`src/data.ts`** فقط، وبنسختين `ar` و `en` بنفس الشكل:

- **الخبرة:** عدّل `experience.jobs` — استبدل `[حدّث اسم الجهة]` باسم الشركة الحقيقي، واضبط الفترات.
- **المشاريع:** `projects.items` — لكل مشروع: `track` (المسار)، `scope`، `stats`، `deliverables`، و `preview` (نوع الرسم).
- **الخدمات:** `services.items` — الخدمة ومخرجاتها.
- **الشهادات:** `credentials.items` — ضع الملف في `public/certificates/` ثم اكتب المسار النسبي فقط (`certificates/xxx.pdf`).
- **التواصل:** `contact` + `identity` في نهاية الملف (بريد، هاتف، روابط).
- **السيرة الذاتية الجاهزة:** استبدل `public/cv/mohammed-albakhity-cv.pdf` بملفك (بنفس الاسم) أو أعد توليده: `npm run assets`.

> بعد أي تعديل شغّل `npm run build` ليتحدّث مجلد `docs/` الذي يُنشر.

## 6) توليد الأصول (شعار، أيقونات، og-image، QR، CV)

```bash
pip install pillow qrcode arabic-reshaper python-bidi
npm run assets                 # يبني كل الأصول في public/
npm run assets -- --only og,cv # أو حدّد ما تريد: favicons,qr,og,cv
```
يقرأ السكربت الخطوط من حزم `@expo-google-fonts` عبر npm ولمرة واحدة (تُخزَّن في مجلد مؤقت)، ثم يولّد:
`favicon.svg/ico/16/32` · `apple-touch-icon` · `android-chrome-192/512` · `og-image.jpg` (1200×630) · `qr/*.png` · `cv/*.pdf` (A4 من صفحتين).

## 7) النشر (GitHub Pages)

- الفرع `main` يُشغّل `deploy.yml` → بناء → نشر مجلد `docs/`.
- الرابط: `https://engmohammeda.github.io/portfolio/`
- `vite.config.ts` يستخدم `base: '/portfolio/'` في البناء و `/` في التطوير.
- إن غيّرت اسم المستودع أو النطاق: حدّث `base` + روابط `index.html` (canonical/OG) + `robots.txt` + `sitemap.xml` + `site.webmanifest` + `scripts/build-assets.py` (`SITE`).

## 8) ملاحظات مهنية (SEO / الوصول / الأداء)

- بيانات منظمة: `ProfilePage` + `Person` + `hasOccupation` (مساح · طرق · كميات · CAD · GIS) + `hasCredential` + `makesOffer`.
- `Open Graph` + `Twitter Card` بصورة 1200×630 مولّدة بهوية الموقع.
- تفاعل كامل بالكيبورد (تخطّي إلى المحتوى، إغلاق القوائم، `aria-*` على التبويبات)، ودعم `prefers-reduced-motion`.
- ثنائي اللغة بتبديل فوري (RTL/LTR) مع حفظ الاختيار، وخطوط عربية لا تُقتطع ولا تتطلب اتصالاً خارجياً.
- ورقة طباعة A4 منسّقة (`Print / save PDF`) تُنتج سيرة ذاتية محدّثة دائماً من نفس المحتوى.

## 9) خطة الظهور والزيارات (تنفيذية)

المطلوب لتحويل الموقع إلى مصدر وصول فعلي — كل خطوة دقائق معدودة:

1. **فهرسة جوجل:** افتح [Google Search Console](https://search.google.com/search-console) → أضف الموقع `https://engmohammeda.github.io/portfolio/` → `Sitemaps` → أرسل `sitemap.xml`. أضف نفس الرابط في Bing Webmaster Tools.
2. **GitHub:** الوصف (Description) والـ Topics مضبوطان أصلاً (`surveying · roads · portfolio · autocad · gis · quantity-surveying · saudi-arabia`) — تظهر في نتائج البحث وجوجل.
3. **LinkedIn:** العنوان: `Surveying & Roads Engineer | Quantity Surveyor | AutoCAD & GIS`، وضع رابط الموقع في قسم *Contact info* وفي *Featured*، وإضافة الموقع في أعلى «About».
4. **X / واتساب / البريد:** عدّل البايو ليشمل الرابط: `مهندس مساحة وطرق — الملف المهني: engmohammeda.github.io/portfolio`. أضف الرابط إلى التوقيع في البريد.
5. **QR جاهز:** استخدم `public/qr/site.png` في السيرة الذاتية المطبوعة أو في كرت العمل — أو حمّل صفحة الموقع واطبعها كبطاقة.
6. **أهمية محتوى الـ CV:** أول صف في أي إعلان وظيفة هو فلترة الكلمات المفتاحية؛ لذلك أُضيفت في السيرة الذاتية مسمّيات: *مساح موقع · مسّاح كميات · Quantity Surveyor · CAD Draftsman · GIS Technician · مراقب موقع*.
7. **تحديث دوري:** كل مرة تُضاف شهادة أو مشروع، عدّل `src/data.ts` + `npm run assets && npm run build` — تحديث آخر تعديل في الفوتر وإعادة الإرسال في Search Console يرفع الظهور.

### كلمات مفتاحية مستهدفة (موجودة فعلياً في الوسوم والمحتوى)

عربي: `مهندس مساحة` · `مساح طرق` · `مساح كميات` · `رفع طبوغرافي` · `توتال ستيشن` · `حساب كميات BOQ` · `أوتوكاد` · `خرائط GIS` · `إشراف تنفيذي` · `الرياض` · `السعودية`
English: `Land Surveyor` · `Quantity Surveyor` · `Roads Technician` · `AutoCAD Draftsman` · `GIS Technician` · `Setting out` · `As-built` · `Saudi Arabia`

## 10) الترخيص

MIT — الاستخدام والنشر متاحان مع الإشارة للمصدر.
