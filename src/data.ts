/* ============================================================
   CONTENT SOURCE OF TRUTH — v4.0
   ------------------------------------------------------------
   Every visible string on the site lives here, in both AR + EN.
   STRUCTURE (short & scannable by design):
     hero → services → projects → about → contact
   RULES:
     • Keep `ar` and `en` objects identical in shape.
     • Keep copy short: one idea per line, no filler paragraphs.
     • No CV, certificates, qualifications or employment history.
   ============================================================ */

export type Language = 'ar' | 'en';

/** Hand-drawn schematic shown next to a service (see components/Blueprint.tsx). */
export type BlueprintKind =
  | 'survey'
  | 'cadastral'
  | 'roads'
  | 'quantities'
  | 'cad'
  | 'gis'
  | 'site';

export interface NavCopy {
  services: string;
  projects: string;
  about: string;
  contact: string;
  cta: string;
  menu: string;
  close: string;
  theme: string;
  language: string;
  top: string;
  brandSub: string;
}

export interface HeroCopy {
  status: string;
  role: string;
  lead: string;
  primary: string;
  secondary: string;
  chipsLabel: string;
  chips: string[];
  stats: { value: string; label: string }[];
}

export interface ServiceItem {
  code: string;
  title: string;
  desc: string;
  deliverables: string[];
  tools: string[];
  blueprint: BlueprintKind;
}

export interface ServicesCopy {
  eyebrow: string;
  title: string;
  desc: string;
  deliverLabel: string;
  toolsLabel: string;
  cta: string;
  items: ServiceItem[];
}

export interface ProjectItem {
  code: string;
  title: string;
  track: string;
  year: string;
  location: string;
  scope: string;
  desc: string;
  stats: { label: string; value: string }[];
  deliverables: string[];
  preview: BlueprintKind;
}

export interface ProjectsCopy {
  eyebrow: string;
  title: string;
  desc: string;
  filters: { id: string; label: string }[];
  deliverLabel: string;
  footnote: string;
  empty: string;
  items: ProjectItem[];
}

export interface AboutCopy {
  eyebrow: string;
  title: string;
  p1: string;
  p2: string;
  chainLabel: string;
  chain: string[];
  factsLabel: string;
  facts: { label: string; value: string }[];
  availability: string;
  photoAlt: string;
}

export interface ChannelItem {
  id: string;
  label: string;
  value: string;
  note: string;
  href: string;
}

export interface ContactCopy {
  eyebrow: string;
  title: string;
  desc: string;
  channels: ChannelItem[];
  responseNote: string;
  availability: string;
  qrTitle: string;
  qrNote: string;
  vcard: string;
  localTime: string;
  form: {
    title: string;
    name: string;
    contact: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    privacy: string;
  };
  waText: string;
  mailSubject: string;
}

export interface FooterCopy {
  rights: string;
  role: string;
  linksTitle: string;
  contactTitle: string;
  updated: string;
  builtNote: string;
}

export interface Copy {
  nav: NavCopy;
  hero: HeroCopy;
  services: ServicesCopy;
  projects: ProjectsCopy;
  about: AboutCopy;
  contact: ContactCopy;
  footer: FooterCopy;
}

/* ============================================================ */

const ar: Copy = {
  nav: {
    services: 'الخدمات',
    projects: 'المشاريع',
    about: 'نبذة',
    contact: 'تواصل',
    cta: 'واتساب',
    menu: 'القائمة',
    close: 'إغلاق',
    theme: 'المظهر',
    language: 'English',
    top: 'أعلى الصفحة',
    brandSub: 'مساحة · طرق · كميات · GIS',
  },

  hero: {
    status: 'متاح للعمل — السعودية',
    role: 'مهندس مساحة وطرق',
    lead: 'من الرفع الميداني إلى الملف المعتمد: أرفع، أرسم، وأحسب الكميات — بمخرج واحد واضح.',
    primary: 'تواصل واتساب',
    secondary: 'استعرض المشاريع',
    chipsLabel: 'أدوات العمل',
    chips: ['Total Station', 'GNSS / RTK', 'AutoCAD', 'Civil 3D', 'QGIS', 'Excel'],
    stats: [
      { value: '06', label: 'خدمات' },
      { value: '07', label: 'مشاريع' },
      { value: '12', label: 'أداة عمل' },
    ],
  },

  services: {
    eyebrow: 'الخدمات',
    title: 'ست خدمات — ولكل واحدة مخرج واضح',
    desc: 'اختر الخدمة لترى ما يُسلَّم فعلياً.',
    deliverLabel: 'المخرجات',
    toolsLabel: 'الأدوات',
    cta: 'اطلب هذه الخدمة',
    items: [
      {
        code: 'SV-01',
        title: 'الرفع المساحي',
        desc: 'رفع طبوغرافي وعقاري ونقاط ضبط موثّقة الإحداثيات.',
        deliverables: ['مخطط DWG + PDF بمقياس', 'جدول إحداثيات ومناسيب', 'دفتر ميداني موقّع'],
        tools: ['Total Station', 'Digital Level', 'GNSS / RTK'],
        blueprint: 'survey',
      },
      {
        code: 'SV-02',
        title: 'الطرق والمناسيب',
        desc: 'تخطيط المسار وتوقيعه: محاور، منحنيات، ومناسيب للتنفيذ.',
        deliverables: ['مقاطع طولية وعرضية', 'جدول توقيع محاور', 'جدول مساحات وميول'],
        tools: ['AutoCAD', 'Civil 3D', 'Level'],
        blueprint: 'roads',
      },
      {
        code: 'SV-03',
        title: 'الكميات والحصر',
        desc: 'حصر كميات بأسلوب قابل للتحقق ومعادلات موثّقة.',
        deliverables: ['جدول كميات BOQ', 'مذكرة طريقة الحساب', 'مستخلص حسب الموقع'],
        tools: ['Excel', 'AutoCAD', 'Civil 3D'],
        blueprint: 'quantities',
      },
      {
        code: 'SV-04',
        title: 'المكتب الفني والرسم',
        desc: 'إخراج مخططات بمعايير مهنية ومخططات مطابقة للتنفيذ.',
        deliverables: ['مخططات تنفيذية DWG', 'مخططات as-built', 'لوحات PDF للطباعة'],
        tools: ['AutoCAD', 'Civil 3D', 'Plotting'],
        blueprint: 'cad',
      },
      {
        code: 'SV-05',
        title: 'الخرائط والبيانات',
        desc: 'تحويل بيانات المساحة إلى خرائط وطبقات جاهزة للتحليل.',
        deliverables: ['خرائط GIS بطبقات', 'ملفات KML / GeoJSON', 'لوحة مؤشرات'],
        tools: ['QGIS', 'Google Earth Pro', 'Excel'],
        blueprint: 'gis',
      },
      {
        code: 'SV-06',
        title: 'الإشراف والتنفيذ',
        desc: 'متابعة التنفيذ مقابل المخططات بتقارير يومية دقيقة.',
        deliverables: ['تقارير يومية وأسبوعية', 'قوائم فحص للمناسيب', 'سجل ملاحظات ومخالفات'],
        tools: ['Level', 'Checklists', 'Photos'],
        blueprint: 'site',
      },
    ],
  },

  projects: {
    eyebrow: 'المشاريع',
    title: 'أعمال منفّذة',
    desc: 'سبعة نماذج — لكل مشروع نطاقه وأرقامه ومخرجاته.',
    filters: [
      { id: 'all', label: 'الكل' },
      { id: 'survey', label: 'مساحة' },
      { id: 'roads', label: 'طرق' },
      { id: 'quantities', label: 'كميات' },
      { id: 'cad', label: 'مكتب فني' },
      { id: 'gis', label: 'خرائط' },
      { id: 'site', label: 'إشراف' },
    ],
    deliverLabel: 'المخرجات',
    footnote: 'الملفات المصدرية (DWG · XLSX · PDF) متاحة عند الطلب.',
    empty: 'لا يوجد عمل في هذا التصنيف.',
    items: [
      {
        code: 'PRJ-01',
        title: 'مسح وتوقيع طريق ريفي',
        track: 'roads',
        year: '2024',
        location: 'اليمن',
        scope: 'طريق 14 كم — رفع وتوقيع ومناسيب',
        desc: 'رفع المسار كاملاً، توقيع المحاور والمنحنيات، وإخراج المقاطع الطولية والعرضية للتنفيذ.',
        stats: [
          { label: 'الطول', value: '14 كم' },
          { label: 'النقاط', value: '+600' },
          { label: 'المقاطع', value: '28' },
        ],
        deliverables: ['مخطط مسار DWG', 'مقاطع طولية وعرضية', 'جدول توقيع محاور'],
        preview: 'roads',
      },
      {
        code: 'PRJ-02',
        title: 'رفع وتقسيم أرض سكنية',
        track: 'survey',
        year: '2023',
        location: 'اليمن',
        scope: '48 قطعة — رفع عقاري وتقسيم',
        desc: 'تعيين الحدود ورفع المعالم، ثم تقسيم الموقع إلى 48 قطعة بجدول مساحات وزوايا مثبتة.',
        stats: [
          { label: 'القِطع', value: '48' },
          { label: 'المساحة', value: '12,000 م²' },
          { label: 'الزوايا', value: '+190' },
        ],
        deliverables: ['مخطط تقسيم', 'جدول قطع ومساحات', 'جدول إحداثيات'],
        preview: 'cadastral',
      },
      {
        code: 'PRJ-03',
        title: 'توقيع مبنى ونقل مناسيب',
        track: 'survey',
        year: '2023',
        location: 'اليمن',
        scope: 'مبنى 6 طوابق — توقيع ومناسيب',
        desc: 'توقيع مسقط المبنى، نقل منسوب الصفر من نقطة مرجعية، ومتابعة مناسيب الحفر والأساسات.',
        stats: [
          { label: 'الطوابق', value: '6' },
          { label: 'نقاط التوقيع', value: '+85' },
          { label: 'الأدوار', value: 'أساسات وهيكل' },
        ],
        deliverables: ['جدول توقيع', 'تقرير مناسيب', 'نقاط مرجعية مثبتة'],
        preview: 'survey',
      },
      {
        code: 'PRJ-04',
        title: 'جدول كميات مشروع طرق',
        track: 'quantities',
        year: '2024',
        location: 'السعودية',
        scope: 'حفر وردم وأساس وأسفلت — BOQ',
        desc: 'حصر الكميات من المقاطع والمخططات مع مذكرة حساب واضحة لكل طبقة.',
        stats: [
          { label: 'الحفر', value: '3,150 م³' },
          { label: 'الأساس', value: '9,400 م²' },
          { label: 'البنود', value: '26' },
        ],
        deliverables: ['جدول BOQ XLSX', 'مذكرة طريقة الحساب', 'مستخلص مبدئي'],
        preview: 'quantities',
      },
      {
        code: 'PRJ-05',
        title: 'مخططات as-built لمبنى',
        track: 'cad',
        year: '2024',
        location: 'اليمن',
        scope: 'تحديث المخططات مطابقةً للتنفيذ',
        desc: 'مقارنة المخططات بالواقع بعد التنفيذ وتسجيل التعديلات وإخراج ملفات كما نُفِّذ فعلياً.',
        stats: [
          { label: 'اللوحات', value: '9' },
          { label: 'التعديلات', value: '+40' },
          { label: 'الصيغة', value: 'DWG · PDF' },
        ],
        deliverables: ['ملف as-built DWG', 'لوحات PDF بمقياس', 'تقرير فروقات'],
        preview: 'cad',
      },
      {
        code: 'PRJ-06',
        title: 'خريطة GIS لموقع مشروع',
        track: 'gis',
        year: '2025',
        location: 'السعودية',
        scope: 'طبقات وحدود ومعالم وملفات مشاركة',
        desc: 'تحويل بيانات الرفع إلى طبقات منظمة (حدود · مسارات · معالم · خدمات) وإخراج خرائط وملفات مشاركة.',
        stats: [
          { label: 'الطبقات', value: '7' },
          { label: 'المعالم', value: '+120' },
          { label: 'الصيغ', value: 'KML · GeoJSON' },
        ],
        deliverables: ['خرائط GIS', 'ملفات KML / GeoJSON', 'لوحة مؤشرات'],
        preview: 'gis',
      },
      {
        code: 'PRJ-07',
        title: 'إشراف وتسوية موقع',
        track: 'site',
        year: '2025',
        location: 'السعودية',
        scope: 'تسوية ومناسيب — تقارير يومية',
        desc: 'متابعة الحفر والتسوية بالمناسيب مع قوائم فحص للأبعاد وتقارير يومية وسجل ملاحظات.',
        stats: [
          { label: 'المساحة', value: '18,000 م²' },
          { label: 'التقارير', value: 'يومية' },
          { label: 'قوائم الفحص', value: '12' },
        ],
        deliverables: ['تقارير يومية', 'قوائم فحص مناسيب', 'سجل ملاحظات'],
        preview: 'site',
      },
    ],
  },

  about: {
    eyebrow: 'نبذة',
    title: 'شخص واحد، سلسلة عمل كاملة',
    p1: 'أعمل في المساحة والطرق والمكتب الفني: رفع وتوقيع ومناسيب في الميدان، ثم معالجة ورسم وحساب كميات في المكتب.',
    p2: 'أُكمل المهمة من أول نقطة قياس حتى ملف التسليم — بدون تمرير العمل بين جهات متعددة.',
    chainLabel: 'سلسلة العمل',
    chain: ['رفع ميداني', 'معالجة ورسم', 'حساب كميات', 'خرائط GIS', 'تسليم وتقارير'],
    factsLabel: 'بيانات سريعة',
    facts: [
      { label: 'المجال', value: 'مساحة · طرق · كميات · CAD · GIS' },
      { label: 'الأدوار', value: 'مسّاح · رسام CAD · مسّاح كميات' },
      { label: 'الموقع', value: 'المملكة العربية السعودية' },
      { label: 'اللغات', value: 'العربية · الإنجليزية' },
    ],
    availability: 'متاح للعمل الميداني والمكتبي · تنقّل داخل المملكة',
    photoAlt: 'محمد البخيتي — مهندس مساحة وطرق',
  },

  contact: {
    eyebrow: 'تواصل',
    title: 'لنبدأ العمل',
    desc: 'أرسل تفاصيل الموقع أو الفرصة — والرد عادة خلال 24 ساعة.',
    channels: [
      { id: 'wa', label: 'واتساب', value: '+966 56 674 3293', note: 'الأسرع للرد', href: '' },
      { id: 'mail', label: 'البريد', value: 'Mohammedalbkhyty@gmail.com', note: 'للعروض والعقود', href: '' },
      { id: 'x', label: 'X', value: '@engalbukhaiti', note: 'حساب عام', href: 'https://x.com/engalbukhaiti' },
      { id: 'gh', label: 'GitHub', value: 'engmohammeda', note: 'الملفات والتحديثات', href: 'https://github.com/engmohammeda' },
    ],
    responseNote: 'رد خلال 24 ساعة',
    availability: 'متاح: ميداني ومكتبي — تنقّل داخل المملكة · بدء فوري',
    qrTitle: 'تواصل سريع',
    qrNote: 'امسح الرمز لفتح المحادثة أو الموقع.',
    vcard: 'حفظ جهة الاتصال',
    localTime: 'السعودية',
    form: {
      title: 'أرسل طلبك',
      name: 'الاسم',
      contact: 'الجوال أو البريد',
      message: 'التفاصيل',
      messagePlaceholder: 'الموقع، النطاق، المخرجات المطلوبة…',
      submit: 'إرسال',
      sending: 'جارٍ الإرسال…',
      success: 'وصل الطلب — سيتم الرد قريباً.',
      error: 'تعذّر الإرسال. جرّب واتساب أو البريد.',
      privacy: 'بياناتك تُستخدم للرد على طلبك فقط.',
    },
    waText: 'مرحباً محمد، بخصوص',
    mailSubject: 'رسالة من الموقع',
  },

  footer: {
    rights: 'جميع الحقوق محفوظة',
    role: 'مهندس مساحة وطرق — السعودية',
    linksTitle: 'الأقسام',
    contactTitle: 'التواصل',
    updated: 'آخر تحديث',
    builtNote: 'موقع شخصي — يُبنى ويُنشر تلقائياً من GitHub',
  },
};

/* ============================================================ */

const en: Copy = {
  nav: {
    services: 'Services',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    cta: 'WhatsApp',
    menu: 'Menu',
    close: 'Close',
    theme: 'Theme',
    language: 'العربية',
    top: 'Back to top',
    brandSub: 'Survey · Roads · Quantities · GIS',
  },

  hero: {
    status: 'Available for work — Saudi Arabia',
    role: 'Surveying & Roads Engineer',
    lead: 'From field survey to approved files: I survey, draft and compute the quantities — one clear deliverable.',
    primary: 'Chat on WhatsApp',
    secondary: 'View projects',
    chipsLabel: 'Toolkit',
    chips: ['Total Station', 'GNSS / RTK', 'AutoCAD', 'Civil 3D', 'QGIS', 'Excel'],
    stats: [
      { value: '06', label: 'Services' },
      { value: '07', label: 'Projects' },
      { value: '12', label: 'Tools' },
    ],
  },

  services: {
    eyebrow: 'Services',
    title: 'Six services — each with a clear deliverable',
    desc: 'Pick a service to see what is actually handed over.',
    deliverLabel: 'Deliverables',
    toolsLabel: 'Tools',
    cta: 'Request this service',
    items: [
      {
        code: 'SV-01',
        title: 'Topographic survey',
        desc: 'Topographic and cadastral survey with documented coordinates.',
        deliverables: ['DWG + PDF plan to scale', 'Coordinates & levels schedule', 'Signed field book'],
        tools: ['Total Station', 'Digital Level', 'GNSS / RTK'],
        blueprint: 'survey',
      },
      {
        code: 'SV-02',
        title: 'Roads & levels',
        desc: 'Route design and setting out: alignment, curves, levels for execution.',
        deliverables: ['Longitudinal & cross sections', 'Setting-out schedule', 'Areas & slopes schedule'],
        tools: ['AutoCAD', 'Civil 3D', 'Level'],
        blueprint: 'roads',
      },
      {
        code: 'SV-03',
        title: 'Quantities & take-off',
        desc: 'Verifiable quantity take-off with documented formulas.',
        deliverables: ['BOQ schedule', 'Method statement memo', 'Progress payment certificate'],
        tools: ['Excel', 'AutoCAD', 'Civil 3D'],
        blueprint: 'quantities',
      },
      {
        code: 'SV-04',
        title: 'Technical office & drafting',
        desc: 'Drawing sets to professional standards, plus as-built records.',
        deliverables: ['Construction drawings DWG', 'As-built drawings', 'Print-ready PDF sheets'],
        tools: ['AutoCAD', 'Civil 3D', 'Plotting'],
        blueprint: 'cad',
      },
      {
        code: 'SV-05',
        title: 'Maps & data',
        desc: 'Survey data turned into organised, analysable map layers.',
        deliverables: ['Layered GIS maps', 'KML / GeoJSON files', 'Indicator dashboard'],
        tools: ['QGIS', 'Google Earth Pro', 'Excel'],
        blueprint: 'gis',
      },
      {
        code: 'SV-06',
        title: 'Site supervision',
        desc: 'Execution follow-up against drawings with accurate daily reports.',
        deliverables: ['Daily & weekly reports', 'Level & dimension checklists', 'Observation log'],
        tools: ['Level', 'Checklists', 'Photos'],
        blueprint: 'site',
      },
    ],
  },

  projects: {
    eyebrow: 'Projects',
    title: 'Delivered work',
    desc: 'Seven samples — each with its own scope, figures and outputs.',
    filters: [
      { id: 'all', label: 'All' },
      { id: 'survey', label: 'Survey' },
      { id: 'roads', label: 'Roads' },
      { id: 'quantities', label: 'Quantities' },
      { id: 'cad', label: 'Technical office' },
      { id: 'gis', label: 'Maps' },
      { id: 'site', label: 'Supervision' },
    ],
    deliverLabel: 'Deliverables',
    footnote: 'Source files (DWG · XLSX · PDF) available on request.',
    empty: 'No work in this category.',
    items: [
      {
        code: 'PRJ-01',
        title: 'Rural road survey & setting out',
        track: 'roads',
        year: '2024',
        location: 'Yemen',
        scope: '14 km road — survey, setting out, levels',
        desc: 'Full route survey, alignment and curve setting out, then longitudinal and cross sections for execution.',
        stats: [
          { label: 'Length', value: '14 km' },
          { label: 'Points', value: '+600' },
          { label: 'Sections', value: '28' },
        ],
        deliverables: ['Route plan DWG', 'Longitudinal & cross sections', 'Setting-out schedule'],
        preview: 'roads',
      },
      {
        code: 'PRJ-02',
        title: 'Residential land survey & subdivision',
        track: 'survey',
        year: '2023',
        location: 'Yemen',
        scope: '48 plots — cadastral survey & division',
        desc: 'Boundary definition and feature survey, then division into 48 plots with areas and fixed corner points.',
        stats: [
          { label: 'Plots', value: '48' },
          { label: 'Area', value: '12,000 m²' },
          { label: 'Corners', value: '+190' },
        ],
        deliverables: ['Subdivision plan', 'Plot & area schedule', 'Coordinate schedule'],
        preview: 'cadastral',
      },
      {
        code: 'PRJ-03',
        title: 'Building setting out & level transfer',
        track: 'survey',
        year: '2023',
        location: 'Yemen',
        scope: '6-storey building — setting out & levels',
        desc: 'Setting out the footprint, transferring the datum from a reference point, and monitoring excavation levels.',
        stats: [
          { label: 'Floors', value: '6' },
          { label: 'Setting-out points', value: '+85' },
          { label: 'Stages', value: 'Foundations & frame' },
        ],
        deliverables: ['Setting-out schedule', 'Level report', 'Fixed reference points'],
        preview: 'survey',
      },
      {
        code: 'PRJ-04',
        title: 'Road project quantity take-off',
        track: 'quantities',
        year: '2024',
        location: 'Saudi Arabia',
        scope: 'Excavation, base, asphalt — full BOQ',
        desc: 'Take-off from sections and drawings, with a clear calculation memo for every layer.',
        stats: [
          { label: 'Excavation', value: '3,150 m³' },
          { label: 'Base', value: '9,400 m²' },
          { label: 'BOQ items', value: '26' },
        ],
        deliverables: ['BOQ schedule XLSX', 'Calculation method memo', 'Draft payment certificate'],
        preview: 'quantities',
      },
      {
        code: 'PRJ-05',
        title: 'As-built drawing set',
        track: 'cad',
        year: '2024',
        location: 'Yemen',
        scope: 'Drawings updated to as-built condition',
        desc: 'Comparing design drawings with site reality, recording changes and issuing as-built files.',
        stats: [
          { label: 'Sheets', value: '9' },
          { label: 'Changes', value: '+40' },
          { label: 'Format', value: 'DWG · PDF' },
        ],
        deliverables: ['As-built DWG', 'Scaled PDF sheets', 'Deviation report'],
        preview: 'cad',
      },
      {
        code: 'PRJ-06',
        title: 'Project site GIS map',
        track: 'gis',
        year: '2025',
        location: 'Saudi Arabia',
        scope: 'Layers, boundaries, features, share files',
        desc: 'Survey data converted into organised layers (boundaries, routes, features, utilities) with maps and share files.',
        stats: [
          { label: 'Layers', value: '7' },
          { label: 'Features', value: '+120' },
          { label: 'Formats', value: 'KML · GeoJSON' },
        ],
        deliverables: ['GIS maps', 'KML / GeoJSON files', 'Indicator dashboard'],
        preview: 'gis',
      },
      {
        code: 'PRJ-07',
        title: 'Grading site supervision',
        track: 'site',
        year: '2025',
        location: 'Saudi Arabia',
        scope: 'Grading & levels — daily reporting',
        desc: 'Monitoring excavation and grading by level, with dimension checklists, daily reports and an observation log.',
        stats: [
          { label: 'Area', value: '18,000 m²' },
          { label: 'Reporting', value: 'Daily' },
          { label: 'Checklists', value: '12' },
        ],
        deliverables: ['Daily reports', 'Level checklists', 'Observation log'],
        preview: 'site',
      },
    ],
  },

  about: {
    eyebrow: 'About',
    title: 'One person, the whole work chain',
    p1: 'I work across surveying, roads and the technical office: field survey, setting out and levels — then processing, drafting and quantity take-off.',
    p2: 'The task is carried from the first measured point to the final file — no hand-offs between parties.',
    chainLabel: 'Work chain',
    chain: ['Field survey', 'Process & draft', 'Quantity take-off', 'GIS maps', 'Reports & handover'],
    factsLabel: 'Quick facts',
    facts: [
      { label: 'Field', value: 'Survey · Roads · Quantities · CAD · GIS' },
      { label: 'Roles', value: 'Surveyor · CAD drafter · Quantity surveyor' },
      { label: 'Location', value: 'Saudi Arabia' },
      { label: 'Languages', value: 'Arabic · English' },
    ],
    availability: 'Available for field and office work · travel within KSA',
    photoAlt: 'Mohammed Al-Bakhity — Surveying & Roads Engineer',
  },

  contact: {
    eyebrow: 'Contact',
    title: "Let's start",
    desc: 'Send the site or role details — replies usually within 24 hours.',
    channels: [
      { id: 'wa', label: 'WhatsApp', value: '+966 56 674 3293', note: 'Fastest reply', href: '' },
      { id: 'mail', label: 'Email', value: 'Mohammedalbkhyty@gmail.com', note: 'Offers & contracts', href: '' },
      { id: 'x', label: 'X', value: '@engalbukhaiti', note: 'Public profile', href: 'https://x.com/engalbukhaiti' },
      { id: 'gh', label: 'GitHub', value: 'engmohammeda', note: 'Files & updates', href: 'https://github.com/engmohammeda' },
    ],
    responseNote: 'Replies within 24h',
    availability: 'Available: field & office — travel within KSA · immediate start',
    qrTitle: 'Quick contact',
    qrNote: 'Scan to open the chat or the site.',
    vcard: 'Save contact',
    localTime: 'Saudi Arabia',
    form: {
      title: 'Send a request',
      name: 'Name',
      contact: 'Mobile or email',
      message: 'Details',
      messagePlaceholder: 'Location, scope, expected deliverables…',
      submit: 'Send',
      sending: 'Sending…',
      success: 'Request received — you will hear back shortly.',
      error: 'Sending failed. Please use WhatsApp or email.',
      privacy: 'Your details are used only to reply.',
    },
    waText: 'Hello Mohammed, regarding',
    mailSubject: 'Message from the portfolio site',
  },

  footer: {
    rights: 'All rights reserved',
    role: 'Surveying & Roads Engineer — Saudi Arabia',
    linksTitle: 'Sections',
    contactTitle: 'Contact',
    updated: 'Last updated',
    builtNote: 'Personal site — built and deployed automatically from GitHub',
  },
};

export const portfolioData: Record<Language, Copy> = { ar, en };

/** Quick facts used by links, the vCard and the structured data. */
export const identity = {
  nameAr: 'محمد البخيتي علي',
  nameEn: 'Mohammed Al-Bakhity Ali',
  shortAr: 'محمد البخيتي',
  shortEn: 'Mohammed Al-Bakhity',
  email: 'Mohammedalbkhyty@gmail.com',
  phone: '+966566743293',
  phoneDisplay: '+966 56 674 3293',
  x: 'https://x.com/engalbukhaiti',
  github: 'https://github.com/engmohammeda',
  site: 'https://engmohammeda.github.io/portfolio/',
  locationAr: 'المملكة العربية السعودية',
  locationEn: 'Saudi Arabia',
  updated: '2026-10',
};
