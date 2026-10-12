/* ============================================================
   IDENTITY & CONTENT SOURCE OF TRUTH  —  v3.0
   ------------------------------------------------------------
   Every visible string on the site lives here, in both AR + EN.
   STRUCTURE:
     hero → profile → capabilities (6 tracks) → services → projects → contact
   HOW TO EDIT (see README §5 for the full guide):
     • Keep `ar` and `en` objects identical in shape.
     • Files live in /public and should be linked with relative paths.
     • Keep project figures and dates aligned with the exact project records.
   ============================================================ */

export type Language = 'ar' | 'en';

export interface NavCopy {
  profile: string; capabilities: string; services: string; projects: string; contact: string;
  menu: string; theme: string; language: string; top: string;
}

export interface StatCopy { value: string; label: string; note: string }

export interface ConsoleTab {
  id: string; code: string; title: string;
  desc: string;
  deliverables: string[];
  metric: { label: string; value: string };
  stack: string[];
}

export interface HeroCopy {
  status: string; sheetNo: string; fileTag: string;
  headlineA: string; headlineB: string;
  role: string; subhead: string;
  chain: string[];
  ctaSecondary: string; ctaTertiary: string;
  stats: StatCopy[];
  console: { title: string; hint: string; tabsLabel: string; tabs: ConsoleTab[]; footnote: string };
}

export interface ProfileFact { label: string; value: string }

export interface ProfileCopy {
  badge: string; title: string; p1: string; p2: string;
  facts: ProfileFact[];
  principlesTitle: string;
  principles: { title: string; desc: string }[];
  searchTitle: string; searchNote: string; searchRoles: string[];
  locationLine: string; workTypes: string[];
  quote: string; photoAlt: string; idTitle: string;
}

export interface TrackItem {
  code: string; title: string; subtitle: string; desc: string;
  capabilities: string[];
  tools: string[];
  deliverables: string[];
  roles: string[];
  accent: 'navy' | 'gold' | 'teal' | 'plain';
}

export interface CapabilitiesCopy {
  badge: string; title: string; desc: string;
  rolesLabel: string; toolsLabel: string; outLabel: string; capLabel: string; hireLabel: string;
  tracks: TrackItem[];
}

export interface ServiceItem {
  code: string; title: string; desc: string; deliverables: string[]; note: string;
}

export interface ServicesCopy {
  badge: string; title: string; desc: string;
  outLabel: string; items: ServiceItem[];
  stepsTitle: string;
  steps: { title: string; desc: string }[];
  cta: string; note: string;
}

export interface ProjectItem {
  code: string; title: string; track: string; year: string; location: string;
  desc: string; scope: string;
  stats: { label: string; value: string }[];
  deliverables: string[];
  preview: 'road' | 'subdivision' | 'building' | 'quantities' | 'asbuilt' | 'gis' | 'supervision';
}

export interface ProjectsCopy {
  badge: string; title: string; desc: string;
  filters: { id: string; label: string }[];
  deliverLabel: string; footnote: string; empty: string;
  items: ProjectItem[];
}

export interface ContactCopy {
  badge: string; title: string; desc: string;
  email: string; phone: string; phoneDisplay: string; location: string;
  availability: string; responseNote: string;
  channels: { id: string; label: string; value: string; note: string; href: string }[];
  form: {
    title: string; name: string; email: string; subject: string; message: string;
    subjects: string[];
    submit: string; sending: string; success: string; error: string;
    privacy: string;
  };
  qrTitle: string; qrNote: string; vcard: string; waText: string; mailSubject: string;
  stepsTitle: string;
  steps: { title: string; desc: string }[];
}

export interface FooterCopy {
  rights: string; role: string;
  titleBlock: { label: string; value: string }[];
  linksTitle: string; contactTitle: string; updated: string;
  builtNote: string;
}

export interface Copy {
  nav: NavCopy; hero: HeroCopy; profile: ProfileCopy; capabilities: CapabilitiesCopy;
  services: ServicesCopy; projects: ProjectsCopy; contact: ContactCopy; footer: FooterCopy;
}

/* ============================================================ */

const ar: Copy = {
  nav: {
    profile: 'الملف المهني',
    capabilities: 'القدرات',
    services: 'الخدمات',
    projects: 'المشاريع',
    contact: 'تواصل',
    menu: 'القائمة',
    theme: 'المظهر',
    language: 'English',
    top: 'أعلى الصفحة',
  },

  hero: {
    status: 'متاح للعمل — المملكة العربية السعودية',
    sheetNo: 'MAB · ملف مهني · 2026',
    fileTag: 'PROFILE_SHEET.dwg',
    headlineA: 'تخصص واحد.',
    headlineB: 'قدرات متعددة.',
    role: 'مهندس مساحة وطرق — مسّاح كميات · مكتب فني · CAD · GIS',
    subhead:
      'أعمل عبر مسار متكامل يبدأ من الميدان وينتهي بمخرجات جاهزة للاعتماد: الرفع والتوقيع بأجهزة دقيقة، ثم المعالجة والرسم، ثم حساب الكميات، ثم خرائط GIS، ثم تقارير التنفيذ — في سلسلة واحدة لا انقطاع فيها.',
    chain: ['رفع ميداني', 'معالجة ورسم', 'حساب كميات', 'خرائط GIS', 'تقارير وتنفيذ'],
    ctaSecondary: 'تواصل واتساب',
    ctaTertiary: 'استعرض القدرات',
    stats: [
      { value: '6', label: 'مسارات مهنية', note: 'مساحة · طرق · كميات · CAD · إشراف · GIS' },
      { value: '24', label: 'قدرة تنفيذية', note: 'مصنّفة تحت كل مسار' },
      { value: '14', label: 'أداة عمل', note: 'أجهزة وبرامج ميدانية ومكتبية' },
      { value: '7', label: 'نماذج مشاريع', note: 'معروضة بالتفصيل في قسم المشاريع' },
    ],
    console: {
      title: 'لوحة المخرجات',
      hint: 'اختر مساراً لعرض ما يُسلَّم فعلياً',
      tabsLabel: 'مسارات العمل',
      tabs: [
        {
          id: 'survey',
          code: 'TRK-01',
          title: 'الرفع المساحي',
          desc: 'رفع طبوغرافي وعقاري ونقاط ضبط، بتوثيق كامل للإحداثيات والمناسيب والانحرافات المسموحة.',
          deliverables: ['مخطط مساحي DWG + PDF بمقياس معتمد', 'جدول إحداثيات ومناسيب (XLSX)', 'دفتر ميداني موقّع', 'تقرير رفع بحالة الموقع والصعوبات'],
          metric: { label: 'المرجع', value: 'BM سلسلة + إغلاق' },
          stack: ['Total Station', 'Digital Level', 'GNSS/RTK'],
        },
        {
          id: 'roads',
          code: 'TRK-02',
          title: 'الطرق والمناسيب',
          desc: 'تخطيط المسار وتوقيعه في الموقع: محاور، منحنيات، مناسيب تصميمية، ومقاطع طولية وعرضية قابلة للتنفيذ.',
          deliverables: ['مخطط مسار ومقاطع طولية/عرضية', 'جدول توقيع محاور (Stations + Offsets)', 'جدول مساحات وميول', 'تقرير توقيع موقعي'],
          metric: { label: 'وحدة العمل', value: 'كم / محطة' },
          stack: ['AutoCAD', 'Civil 3D', 'Level'],
        },
        {
          id: 'quantities',
          code: 'TRK-03',
          title: 'الكميات والحصر',
          desc: 'حصر الكميات بأسلوب قابل للتحقق: من المقاطع أو من المساحة، بمعادلات موثقة ومعاملات انتفاخ واضحة.',
          deliverables: ['جدول كميات BOQ (XLSX + PDF)', 'مذكرة طريقة الحساب والمعادلات', 'مستخلص كميات حسب الموقع', 'مقارنة تصميمي/منفَّذ'],
          metric: { label: 'المخرَج', value: 'BOQ معتمد' },
          stack: ['Excel متقدم', 'AutoCAD', 'Civil 3D'],
        },
        {
          id: 'cad',
          code: 'TRK-04',
          title: 'المكتب الفني والرسم',
          desc: 'إخراج المخططات بمعايير مهنية: طبقات منظمة، مقاسات، عنوان لوحة، ومخططات as-built مطابقة للموقع.',
          deliverables: ['مخططات تنفيذية DWG', 'مخططات as-built بعد التنفيذ', 'لوحات PDF بمقياس للطباعة', 'أرشيف ملفات منظم بالإصدارات'],
          metric: { label: 'الصيغة', value: 'DWG · PDF · XLSX' },
          stack: ['AutoCAD', 'Civil 3D', 'Plotting'],
        },
        {
          id: 'gis',
          code: 'TRK-05',
          title: 'الخرائط والبيانات',
          desc: 'تحويل بيانات المساحة إلى خرائط وطبقات قابلة للتحليل والمشاركة، مع تنظيم بيانات المشروع رقمياً.',
          deliverables: ['خرائط GIS للطبقات والاستخدامات', 'ملفات KML / SHP / GeoJSON', 'تقرير/لوحة إكسل للمؤشرات', 'بنية مجلدات وأرشفة موحدة'],
          metric: { label: 'الطبقات', value: 'متجهات + وصف' },
          stack: ['QGIS', 'Google Earth Pro', 'Excel'],
        },
        {
          id: 'site',
          code: 'TRK-06',
          title: 'الإشراف والتنفيذ',
          desc: 'متابعة التنفيذ مقابل المخططات والمواصفات: مناسيب، أبعاد، اختبارات أولية، وتقارير يومية دقيقة.',
          deliverables: ['تقارير يومية/أسبوعية للموقع', 'قوائم فحص (Checklists) للمناسيب والأبعاد', 'تقارير ملاحظات ومخالفات', 'حصيلة تنفيذ شهرية'],
          metric: { label: 'المتابعة', value: 'عيّنات + نقاط تحقق' },
          stack: ['Level', 'Checklists', 'Photos'],
        },
      ],
      footnote: 'كل مسار يُسلَّم بملفاته المصدرية — لا صور فقط.',
    },
  },

  profile: {
    badge: 'الملف المهني',
    title: 'أعمل في المساحة والطرق، وأغطي سلسلة العمل كاملة: من قياس الميدان حتى الملف الذي يُعتمد.',
    p1: 'أعمل في مجال المساحة والطرق عبر مسارات مترابطة: الرفع والتوقيع بالموقع، ثم المعالجة والرسم في المكتب الفني، ثم حساب الكميات وإعداد الجداول، ثم إخراج خرائط وبيانات GIS، وأخيراً متابعة التنفيذ وتقاريره.',
    p2: 'ما يميزني ليس مساراً واحداً، بل قدرتي على إكمال المهمة من بدايتها إلى نهايتها دون الحاجة لتسليمها بين عدة جهات: أوقّع في الموقع، وأرسم في AutoCAD، وأحصر الكميات، وأُخرج التقرير. هذا يوفّر وقت إدارة المشروع ويقلّل الأخطاء الناتجة عن نقل البيانات بين أكثر من جهة.',
    facts: [
      { label: 'التخصص الأساسي', value: 'المساحة والطرق' },
      { label: 'مكان العمل الحالي', value: 'المملكة العربية السعودية' },
      { label: 'اللغات', value: 'العربية (اللغة الأم) · الإنجليزية (قراءة فنية)' },
      { label: 'طبيعة العمل المتاح', value: 'ميداني ومكتبي · دوام كامل أو مشروع' },
      { label: 'الجاهزية', value: 'تنقّل داخل المملكة · بدء فوري' },
    ],
    principlesTitle: 'كيف أعمل',
    principles: [
      { title: 'قياس يُوثَّق، لا يُقدَّر', desc: 'كل رقم يخرج من عندي مرتبط بمصدره: نقطة ضبط، أو مقاس، أو معادلة. لا أُسلّم جدولاً بلا طريقة حساب.' },
      { title: 'ملف مصدري كامل', desc: 'أسلّم DWG و XLSX لا صوراً. الملف المصدري يعني أن الفريق التالي يستطيع البناء على العمل لا إعادته.' },
      { title: 'تقرير بلغة الموقع', desc: 'التقرير يكون واضحاً لملاحظ الموقع كما لمهندس المكتب: ملاحظة، موقعها، إحداثياتها، والتأثير المتوقع.' },
    ],
    searchTitle: 'الوظيفة التي أبحث عنها الآن',
    searchNote: 'أُقدّم على هذه الأدوار في السعودية، ومتاح للتواصل مباشرة بخصوص فرص العمل والمشاريع.',
    searchRoles: [
      'مسّاح موقع (Land / Site Surveyor)',
      'مسّاح كميات (Quantity Surveyor)',
      'فني طرق / مسّاح طرق',
      'رسام CAD / المكتب الفني',
      'فني GIS / إدخال ومعالجة بيانات',
      'مراقب / مشرف موقع تنفيذي',
    ],
    locationLine: 'المملكة العربية السعودية — متاح للتنقّل بين مواقع العمل',
    workTypes: ['دوام كامل', 'عقد مشروع', 'عمل حر / باليوم', 'مكتبي أو ميداني'],
    quote: 'الدقة ليست بنداً إضافياً في العقد — هي الشرط الذي يمنع إعادة العمل.',
    photoAlt: 'محمد البخيتي — مهندس مساحة وطرق',
    idTitle: 'بطاقة الملف',
  },

  capabilities: {
    badge: 'خريطة القدرات',
    title: 'ستّ مسارات — كل مسار بمخرجاته وأدواته',
    desc: 'لكل مسار قدرات محددة، أدوات يعمل بها، مخرجات يُسلّمها، وأدوار وظيفية يقابلها. هذه ليست قائمة مهارات — بل تعريف لما أستطيع أن أُسلّمه بالفعل.',
    rolesLabel: 'الأدوار الوظيفية',
    toolsLabel: 'الأدوات',
    outLabel: 'المخرجات',
    capLabel: 'القدرات',
    hireLabel: 'اطلب هذا المسار',
    tracks: [
      {
        code: 'TRK-01',
        title: 'المساحة الميدانية',
        subtitle: 'Surveying & Geomatics',
        desc: 'رفع وتوقيع ونقل مناسيب بأجهزة دقيقة، مع ضبط شبكة نقاط مرجعية يمكن البناء عليها في كل مراحل المشروع.',
        capabilities: [
          'رفع طبوغرافي تفصيلي للأراضي والمباني',
          'رفع عقاري وتحديد الحدود وتقسيم الأراضي',
          'توقيع محاور المباني والبنية التحتية',
          'نقل المناسيب ونقاط الضبط (Benchmarks)',
          'ميزانية طولية وعرضية وحساب الميول',
          'معالجة بيانات ميدانية وتصفية الإحداثيات',
        ],
        tools: ['Total Station', 'Digital Level', 'GNSS/RTK', 'GPS', 'دفتـر ميداني'],
        deliverables: ['مخطط مساحي', 'جدول إحداثيات', 'دفتر ميداني', 'تقرير رفع'],
        roles: ['مسّاح موقع', 'مسّاح تنفيذي', 'مسّاح طبوغرافي', 'مسّاح مناسيب'],
        accent: 'navy',
      },
      {
        code: 'TRK-02',
        title: 'الطرق والبنية التحتية',
        subtitle: 'Roads & Infrastructure',
        desc: 'تخطيط مسار الطريق وتوقيعه: محاور، منحنيات، مناسيب تصميمية، ومقاطع تُنفَّذ كما هي على الأرض.',
        capabilities: [
          'تخطيط وتوقيع مسار الطريق (Centerline)',
          'منحنيات أفقية ورأسية وحساب العناصر',
          'مقاطع طولية وعرضية والقدرة على التنفيذ',
          'حساب المناسيب التصميمية والميول',
          'جداول مساحات الطبقات وأعمال الرصف',
          'مطابقة التنفيذ للمواصفات والأبعاد',
        ],
        tools: ['AutoCAD', 'Civil 3D', 'Level', 'Excel'],
        deliverables: ['مخطط مسار', 'مقاطع وميول', 'جدول توقيع', 'جدول مساحات'],
        roles: ['مسّاح طرق', 'فني طرق', 'منفّذ أعمال طرق', 'مسّاح توقيع'],
        accent: 'gold',
      },
      {
        code: 'TRK-03',
        title: 'الكميات والحصر',
        subtitle: 'Quantities & BOQ',
        desc: 'حصر الكميات بطريقة قابلة للمراجعة: مصدر القياس، المعادلة، المعامل المُستخدم، والفرق بين التصميمي والمنفَّذ.',
        capabilities: [
          'كميات الحفر والردم والتسوية',
          'كميات الخرسانة والخرسانة العادية',
          'كميات الأسفلت وطبقات الأساس والبردورة',
          'إعداد جدول كميات (BOQ) منظّم',
          'مستخلصات حسب الموقع ونسبة الإنجاز',
          'مذكرات حصر وتحليل أسعار مبدئي',
        ],
        tools: ['Excel متقدم', 'AutoCAD', 'Civil 3D', 'أدوات حصر'],
        deliverables: ['جدول BOQ', 'مذكرة حساب', 'مستخلص', 'مقارنة كميات'],
        roles: ['مسّاح كميات', 'Quantity Surveyor', 'مهندس مكتب فني'],
        accent: 'teal',
      },
      {
        code: 'TRK-04',
        title: 'المكتب الفني والرسم',
        subtitle: 'Technical Office & CAD',
        desc: 'إخراج رسمي منظّم: طبقات، مقاسات، عنوان لوحة، مقاييس طباعة، وحفظ بإصدارات — ملف يمكن لأي جهة أن تكمل عليه.',
        capabilities: [
          'رسم مخططات تنفيذية ومساحية',
          'مخططات as-built بعد التنفيذ',
          'تنظيم الطبقات (Layers) والمقاسات',
          'تحويل وتعديل ملفات DWG و PDF',
          'إخراج لوحات بمقياس جاهز للطباعة',
          'أرشفة الملفات بنظام إصدارات واضح',
        ],
        tools: ['AutoCAD', 'Civil 3D', 'Plotting', 'PDF tools'],
        deliverables: ['DWG منظّم', 'لوحات PDF', 'as-built', 'أرشيف إصدارات'],
        roles: ['رسام CAD', 'مهندس مكتب فني', 'منسّق مخططات'],
        accent: 'plain',
      },
      {
        code: 'TRK-05',
        title: 'البيانات والخرائط',
        subtitle: 'GIS & Data',
        desc: 'تحويل الميدان إلى بيانات قابلة للقراءة والقرار: خرائط بطبقات، ملفات مكانية، ولوحات مؤشرات للمشروع.',
        capabilities: [
          'بناء خرائط GIS وطبقات موضوعية',
          'تحويل بيانات المساحة إلى ملفات مكانية',
          'إعداد ملفات KML و Google Earth',
          'تنظيم بيانات المشاريع وأرشفتها رقمياً',
          'لوحات وتقارير إكسل للمؤشرات',
          'إدخال ومعالجة بيانات الموقع',
        ],
        tools: ['QGIS', 'Google Earth Pro', 'Excel', 'AutoCAD'],
        deliverables: ['خرائط GIS', 'KML / SHP / GeoJSON', 'لوحة مؤشرات', 'بنية بيانات'],
        roles: ['فني GIS', 'مسؤول بيانات مشاريع', 'محلّل بيانات موقعية'],
        accent: 'teal',
      },
      {
        code: 'TRK-06',
        title: 'الإشراف والتنفيذ',
        subtitle: 'Site Supervision & Safety',
        desc: 'متابعة التنفيذ بالقياس لا بالانطباع: نقاط تحقق، قوائم فحص، وتقارير تربط الملاحظة بالموقع بأرقامه.',
        capabilities: [
          'الإشراف على أعمال التسوية والمناسيب',
          'الإشراف على أعمال الطرق والرصف',
          'قوائم فحص للأبعاد والمناسيب',
          'مطابقة التنفيذ للمخططات والمواصفات',
          'تقارير يومية وأسبوعية للموقع',
          'التنسيق الميداني مع الفرق ومتابعة المخالفات',
        ],
        tools: ['Level', 'Checklists', 'Photos', 'Excel'],
        deliverables: ['تقارير موقع', 'قوائم فحص', 'ملاحظات ومخالفات', 'حصيلة تنفيذ'],
        roles: ['مراقب موقع', 'مشرف تنفيذي', 'منسّق ميداني', 'مراقب جودة'],
        accent: 'gold',
      },
    ],
  },

  services: {
    badge: 'الخدمات',
    title: 'ما أستطيع تسليمه لك مباشرة',
    desc: 'ثمانِ خدمات محددة بمخرجات واضحة. لا تُسلَّم الخدمة إلا مع ملفها المصدري وتقريرها.',
    outLabel: 'المخرجات',
    items: [
      {
        code: 'SRV-01',
        title: 'رفع مساحي طبوغرافي',
        desc: 'رفع تفصيلي للموقع بحدوده ومعالمه ومناسيبه، بضبط نقاط مرجعية وإغلاق مدقق.',
        deliverables: ['مخطط DWG + PDF', 'جدول إحداثيات XLSX', 'تقرير رفع'],
        note: 'يناسب: أراضٍ، مباني قائمة، مواقع تنفيذ جديدة',
      },
      {
        code: 'SRV-02',
        title: 'رفع عقاري وتحديد حدود',
        desc: 'تعيين الحدود ونقاط الزوايا وتقسيم القطع مع إعداد مخطط التقسيم.',
        deliverables: ['مخطط تقسيم', 'جدول قطع ومساحات', 'نقاط حدود مثبتة'],
        note: 'يناسب: إفراغ، تقسيم أراضٍ، نزاعات حدود',
      },
      {
        code: 'SRV-03',
        title: 'توقيع محاور ومناسيب (طرق ومبانٍ)',
        desc: 'توقيع المحاور والأبعاد في الموقع، ونقل مناسيب التنفيذ من نقطة مرجعية معتمدة.',
        deliverables: ['جدول توقيع المحطات', 'نقاط مناسيب موقّعة', 'تقرير توقيع'],
        note: 'يناسب: بدء التنفيذ، ومتابعة الأعمال القائمة',
      },
      {
        code: 'SRV-04',
        title: 'ميزانية ومقاطع طولية وعرضية',
        desc: 'ميزانية دقيقة للمسار ورسم المقاطع والميول لتحديد الكميات ومناسيب التنفيذ.',
        deliverables: ['مقاطع طولية/عرضية', 'جدول مناسيب والميول', 'حساب كميات أولي'],
        note: 'يناسب: أعمال الطرق وشبكات المرافق',
      },
      {
        code: 'SRV-05',
        title: 'حساب كميات وجدول BOQ',
        desc: 'حصر الكميات من المخططات أو المقاطع، مع مذكرة حساب ومعاملات واضحة وقابلة للمراجعة.',
        deliverables: ['جدول BOQ (XLSX/PDF)', 'مذكرة طريقة الحساب', 'مستخلص حسب الموقع'],
        note: 'يناسب: مطالبات، مقايسات، متابعة إنجاز',
      },
      {
        code: 'SRV-06',
        title: 'رسم مخططات AutoCAD و as-built',
        desc: 'رسم أو تعديل المخططات بإخراج مهني منظّم، وتسجيل الوضع المنفَّذ فعلياً على الأرض.',
        deliverables: ['DWG منظّم بالطبقات', 'لوحات PDF بمقياس', 'ملف as-built'],
        note: 'يناسب: تسليمات رسمية، تحديث مخططات قديمة',
      },
      {
        code: 'SRV-07',
        title: 'خرائط GIS وملفات KML',
        desc: 'تحويل بيانات الموقع إلى خرائط وطبقات تُقرأ بسهولة وتُشارك مع الجهات المختلفة.',
        deliverables: ['خريطة/طبقات GIS', 'ملفات KML / GeoJSON', 'لوحة مؤشرات إكسل'],
        note: 'يناسب: عروض، تقارير إدارية، أرشفة مكانية',
      },
      {
        code: 'SRV-08',
        title: 'إشراف ومتابعة تنفيذ + تقارير',
        desc: 'متابعة يومية للأعمال مقابل المخططات، بقوائم فحص وتقارير تربط كل ملاحظة بموقعها.',
        deliverables: ['تقارير يومية/شهرية', 'قوائم فحص', 'سجل ملاحظات ومخالفات'],
        note: 'يناسب: مشاريع التسوية والطرق والمباني',
      },
    ],
    stepsTitle: 'كيف نبدأ العمل',
    steps: [
      { title: 'وصف المطلوب', desc: 'موقع المشروع، النطاق، والمخرجات المتوقعة — بواتساب أو إيميل، مع مخطط إن وُجد.' },
      { title: 'عرض ومدة', desc: 'أُرسل نطاق العمل والمخرجات والمدة والمنهجية، وسعراً واضحاً قبل البدء.' },
      { title: 'تنفيذ وتسليم', desc: 'ميداني ومكتبي، ثم تسليم الملفات المصدرية مع تقرير وملاحظات.' },
    ],
    cta: 'اطلب عرضاً لهذه الخدمة',
    note: 'متاح للعمل الحر والمشاريع الصغيرة والمتوسطة — ميدانياً داخل المملكة أو مكتبياً عن بعد.',
  },

  projects: {
    badge: 'نماذج أعمال',
    title: 'مشاريع تنتهي بملف، لا بعرض تقديمي',
    desc: 'نماذج من نطاق أعمالي: لكل مشروع مساره ونطاقه ومخرجاته. التوثيق الكامل (DWG/XLSX/تقارير) متاح عند الطلب.',
    filters: [
      { id: 'all', label: 'الكل' },
      { id: 'survey', label: 'مساحة' },
      { id: 'roads', label: 'طرق' },
      { id: 'quantities', label: 'كميات' },
      { id: 'cad', label: 'مكتب فني' },
      { id: 'gis', label: 'GIS' },
      { id: 'site', label: 'إشراف' },
    ],
    deliverLabel: 'المخرجات',
    footnote: 'الأرقام أعلاه من سجلات المشاريع · مزيد من التوثيق (DWG · XLSX · PDF · تقارير) متاح عند الطلب.',
    empty: 'لا توجد مشاريع في هذا المسار حالياً.',
    items: [
      {
        code: 'PRJ-01',
        title: 'مسح وتوقيع طريق ريفي',
        track: 'roads', year: '2024', location: 'اليمن',
        scope: 'طريق بطول 14 كم — رفع وتوقيع ومناسيب',
        desc: 'رفع طبوغرافي كامل للمسار، ثم توقيع المحاور والمنحنيات ونقل المناسيب، وإخراج المقاطع الطولية والعرضية للتنفيذ.',
        stats: [
          { label: 'الطول', value: '14 كم' },
          { label: 'النقاط المرفوعة', value: '+600' },
          { label: 'المقاطع', value: '28 مقطعاً' },
        ],
        deliverables: ['مخطط مسار DWG', 'مقاطع طولية وعرضية', 'جدول توقيع محاور'],
        preview: 'road',
      },
      {
        code: 'PRJ-02',
        title: 'رفع وتقسيم أرض سكنية',
        track: 'survey', year: '2023', location: 'اليمن',
        scope: '48 قطعة سكنية — رفع عقاري وتقسيم',
        desc: 'تعيين حدود المنطقة، رفع المعالم، ثم تقسيمها إلى 48 قطعة مع جدول مساحات ونقاط زوايا مثبتة قابلة للتسليم الرسمي.',
        stats: [
          { label: 'القِطع', value: '48' },
          { label: 'المساحة', value: '12,000 م²' },
          { label: 'الزوايا', value: '+190 نقطة' },
        ],
        deliverables: ['مخطط تقسيم', 'جدول قطع ومساحات', 'جدول إحداثيات'],
        preview: 'subdivision',
      },
      {
        code: 'PRJ-03',
        title: 'توقيع مبنى ونقل مناسيب',
        track: 'survey', year: '2023', location: 'اليمن',
        scope: 'مبنى 6 طوابق — توقيع ومتابعة مناسيب',
        desc: 'توقيع مسقط المبنى والمرافق، نقل منسوب الصفر من نقطة مرجعية، ومتابعة مناسيب الحفر والأساسات لحين الوصول للدور الأرضي.',
        stats: [
          { label: 'الطوابق', value: '6' },
          { label: 'نقاط التوقيع', value: '+85' },
          { label: 'الأدوار', value: 'أساسات + هيكل' },
        ],
        deliverables: ['جدول توقيع', 'تقرير مناسيب', 'نقاط مرجعية مثبتة'],
        preview: 'building',
      },
      {
        code: 'PRJ-04',
        title: 'جدول كميات مشروع طرق',
        track: 'quantities', year: '2024', location: 'السعودية',
        scope: 'حفر وردم وأساس وأسفلت — BOQ كامل',
        desc: 'حصر الكميات من المقاطع والمخططات، وإعداد جدول BOQ منظّم بمذكرة حساب واضحة لمعاملات الانتفاخ والتراكم لكل طبقة.',
        stats: [
          { label: 'الحفر', value: '3,150 م³' },
          { label: 'الأساس', value: '9,400 م²' },
          { label: 'بنود الجدول', value: '26 بنداً' },
        ],
        deliverables: ['جدول BOQ XLSX', 'مذكرة طريقة الحساب', 'مستخلص مبدئي'],
        preview: 'quantities',
      },
      {
        code: 'PRJ-05',
        title: 'مخططات as-built لمبنى تنفيذي',
        track: 'cad', year: '2024', location: 'اليمن',
        scope: 'تحديث المخططات مطابقةً للوضع المنفَّذ',
        desc: 'مقارنة المخططات التصميمية بالواقع بعد التنفيذ، وتسجيل التعديلات (أبعاد، فتحات، مداخل)، وإخراج ملفات كما نُفِّذ فعلياً.',
        stats: [
          { label: 'اللوحات', value: '9 لوحات' },
          { label: 'التعديلات المسجلة', value: '+40' },
          { label: 'الصيغة', value: 'DWG + PDF' },
        ],
        deliverables: ['ملف as-built DWG', 'لوحات PDF بمقياس', 'تقرير فروقات'],
        preview: 'asbuilt',
      },
      {
        code: 'PRJ-06',
        title: 'خريطة GIS لموقع مشروع',
        track: 'gis', year: '2025', location: 'السعودية',
        scope: 'طبقات وحدود ومعالم وملفات مشاركة',
        desc: 'تحويل بيانات الرفع إلى طبقات GIS منظمة (حدود، مسارات، معالم، خدمات)، وإخراج خرائط للعرض مع ملفات مشاركة جاهزة.',
        stats: [
          { label: 'الطبقات', value: '7' },
          { label: 'المعالم', value: '+120 معلم' },
          { label: 'الصيغ', value: 'KML · GeoJSON' },
        ],
        deliverables: ['خرائط GIS', 'ملفات KML/GeoJSON', 'لوحة مؤشرات'],
        preview: 'gis',
      },
      {
        code: 'PRJ-07',
        title: 'إشراف وتسوية موقع',
        track: 'site', year: '2025', location: 'السعودية',
        scope: 'متابعة أعمال تسوية ومناسيب — تقارير يومية',
        desc: 'متابعة أعمال الحفر والتسوية بالمناسيب، مع قوائم فحص للأبعاد والتقارير اليومية وسجل للملاحظات والتصحيح.',
        stats: [
          { label: 'المساحة', value: '18,000 م²' },
          { label: 'التقارير', value: 'يومي/أسبوعي' },
          { label: 'قوائم الفحص', value: '12 قائمة' },
        ],
        deliverables: ['تقارير يومية', 'قوائم فحص مناسيب', 'سجل ملاحظات'],
        preview: 'supervision',
      },
    ],
  },

  contact: {
    badge: 'التواصل',
    title: 'جاهز لبدء العمل — اختر أسرع طريقة لك',
    desc: 'للوظائف أو العمل الحر: أرسل تفاصيل الفرصة أو نطاق العمل، وسأرد عليك في أسرع وقت.',
    email: 'Mohammedalbkhyty@gmail.com',
    phone: '+966566743293',
    phoneDisplay: '+966566743293',
    location: 'المملكة العربية السعودية',
    availability: 'متاح للعمل: ميداني ومكتبي — تنقّل داخل المملكة، وبدء فوري.',
    responseNote: 'الرد عادة خلال 24 ساعة · واتساب أسرع طريقة',
    channels: [
      { id: 'wa', label: 'واتساب', value: '+966566743293', note: 'الرد الأسرع — أرسل تفاصيل الموقع أو الوظيفة', href: '' },
      { id: 'mail', label: 'البريد الإلكتروني', value: 'Mohammedalbkhyty@gmail.com', note: 'لإرسال طلبات التوظيف والعقود', href: '' },
      { id: 'x', label: 'منصة X', value: '@engalbukhaiti', note: 'حسابي العام وللتواصل السريع', href: 'https://x.com/engalbukhaiti' },
      { id: 'li', label: 'LinkedIn', value: 'mohammed-albukhaiti', note: 'الملف المهني والتواصل', href: 'https://www.linkedin.com/in/mohammed-albukhaiti-215a41302/' },
      { id: 'gh', label: 'GitHub', value: 'engmohammeda', note: 'الملفات التقنية والموقع', href: 'https://github.com/engmohammeda' },
    ],
    form: {
      title: 'أرسل تفاصيل مباشرة',
      name: 'الاسم',
      email: 'البريد أو الجوال',
      subject: 'نوع الطلب',
      message: 'التفاصيل',
      subjects: ['فرصة وظيفية', 'طلب عرض سعر', 'رفع مساحي / توقيع', 'حساب كميات / BOQ', 'رسم مخططات CAD', 'خرائط GIS / بيانات', 'إشراف وتقارير', 'استفسار آخر'],
      submit: 'إرسال الطلب',
      sending: 'جارٍ الإرسال…',
      success: 'تم الإرسال بنجاح — سأرد عليك قريباً.',
      error: 'تعذّر الإرسال. جرّب واتساب أو البريد مباشرة.',
      privacy: 'تُستخدم بياناتك للتواصل بشأن طلبك فقط.',
    },
    qrTitle: 'بطاقة تواصل سريعة',
    qrNote: 'امسح الرمز لفتح واتساب أو حفظ جهة الاتصال مباشرة.',
    vcard: 'حفظ جهة الاتصال (vCard)',
    waText: 'مرحباً محمد، أرغب بالتواصل بخصوص',
    mailSubject: 'تواصل من الملف المهني',
    stepsTitle: 'ما يحدث بعد التواصل',
    steps: [
      { title: 'الرد والتوضيح', desc: 'أرد خلال 24 ساعة (غالباً أسرع) بأسئلة محددة إن احتجت.' },
      { title: 'الاتفاق على التفاصيل', desc: 'للوظائف: نوضّح تفاصيل الدور. للمشاريع: أُرسل النطاق والمدة والسعر.' },
      { title: 'البدء', desc: 'بعد الاتفاق: أبدأ ميدانياً أو مكتبياً حسب طبيعة العمل.' },
    ],
  },

  footer: {
    rights: 'جميع الحقوق محفوظة',
    role: 'مهندس مساحة وطرق — المملكة العربية السعودية',
    titleBlock: [
      { label: 'الملف', value: 'الملف المهني — الإصدار 3.0' },
      { label: 'المُعِد', value: 'محمد البخيتي علي' },
      { label: 'التخصص', value: 'مساحة · طرق · كميات · CAD · GIS' },
      { label: 'الموقع', value: 'المملكة العربية السعودية' },
      { label: 'اللوحة', value: '01 / 01' },
      { label: 'الحالة', value: 'متاح للعمل' },
    ],
    linksTitle: 'أقسام الموقع',
    contactTitle: 'تواصل',
    updated: 'آخر تحديث',
    builtNote: 'موقع شخصي — يبنى ويُنشر تلقائياً من مستودع GitHub.',
  },
};

/* ============================================================ */

const en: Copy = {
  nav: {
    profile: 'Profile',
    capabilities: 'Capabilities',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
    menu: 'Menu',
    theme: 'Theme',
    language: 'العربية',
    top: 'Back to top',
  },

  hero: {
    status: 'Available for work — Saudi Arabia',
    sheetNo: 'MAB · PROFESSIONAL SHEET · 2026',
    fileTag: 'PROFILE_SHEET.dwg',
    headlineA: 'One specialization.',
    headlineB: 'Multiple capabilities.',
    role: 'Surveying & Roads Engineer — Quantity Surveyor · Technical Office · CAD · GIS',
    subhead:
      'I work along one unbroken chain: precise field survey and setting-out, then processing and drafting, then quantity take-off, then GIS mapping, then execution reports — so a task never has to be handed between three different people.',
    chain: ['Field survey', 'Processing & drafting', 'Quantities', 'GIS mapping', 'Reports & execution'],
    ctaSecondary: 'WhatsApp',
    ctaTertiary: 'See capabilities',
    stats: [
      { value: '6', label: 'Professional tracks', note: 'Survey · Roads · Quantities · CAD · Site · GIS' },
      { value: '24', label: 'Executable capabilities', note: 'Classified under each track' },
      { value: '14', label: 'Working tools', note: 'Field instruments & software' },
      { value: '7', label: 'Project samples', note: 'Presented in detail in the projects section' },
    ],
    console: {
      title: 'Deliverables console',
      hint: 'Pick a track to see what actually gets delivered',
      tabsLabel: 'Work tracks',
      tabs: [
        {
          id: 'survey',
          code: 'TRK-01',
          title: 'Surveying',
          desc: 'Topographic and cadastral survey, control points, with complete records of coordinates, levels and tolerances.',
          deliverables: ['Survey drawing DWG + scaled PDF', 'Coordinate & level schedule (XLSX)', 'Signed field book', 'Survey report with site conditions'],
          metric: { label: 'Reference', value: 'Benchmark + closure' },
          stack: ['Total Station', 'Digital Level', 'GNSS/RTK'],
        },
        {
          id: 'roads',
          code: 'TRK-02',
          title: 'Roads & levels',
          desc: 'Route design and setting-out on site: centreline, curves, design levels, and buildable longitudinal/cross sections.',
          deliverables: ['Route plan + L/C sections', 'Setting-out schedule (stations + offsets)', 'Areas & slopes schedule', 'Setting-out report'],
          metric: { label: 'Work unit', value: 'km / station' },
          stack: ['AutoCAD', 'Civil 3D', 'Level'],
        },
        {
          id: 'quantities',
          code: 'TRK-03',
          title: 'Quantities & BOQ',
          desc: 'Verifiable take-off: from sections or areas, with stated formulas and explicit compaction/bulking factors.',
          deliverables: ['BOQ (XLSX + PDF)', 'Calculation method memo', 'Progress-based payment quantities', 'Design vs as-built comparison'],
          metric: { label: 'Output', value: 'Approved BOQ' },
          stack: ['Advanced Excel', 'AutoCAD', 'Civil 3D'],
        },
        {
          id: 'cad',
          code: 'TRK-04',
          title: 'Technical office & CAD',
          desc: 'Drawings issued to professional standards: organised layers, dimensions, title block, plot scales, and as-built records.',
          deliverables: ['Construction drawings DWG', 'As-built drawings', 'Scaled PDF sheets', 'Versioned file archive'],
          metric: { label: 'Format', value: 'DWG · PDF · XLSX' },
          stack: ['AutoCAD', 'Civil 3D', 'Plotting'],
        },
        {
          id: 'gis',
          code: 'TRK-05',
          title: 'GIS & data',
          desc: 'Turning survey data into readable, shareable map layers — plus properly organised project data and dashboards.',
          deliverables: ['GIS map layers', 'KML / SHP / GeoJSON files', 'Excel report or dashboard', 'Standard folder structure'],
          metric: { label: 'Layers', value: 'Vectors + attributes' },
          stack: ['QGIS', 'Google Earth Pro', 'Excel'],
        },
        {
          id: 'site',
          code: 'TRK-06',
          title: 'Supervision',
          desc: 'Monitoring execution against drawings and specs: levels, dimensions, checklists and accurate daily reporting.',
          deliverables: ['Daily/weekly site reports', 'Level & dimension checklists', 'NCR / observation log', 'Monthly progress summary'],
          metric: { label: 'Control', value: 'Samples + checkpoints' },
          stack: ['Level', 'Checklists', 'Site photos'],
        },
      ],
      footnote: 'Every track is handed over with source files — not screenshots.',
    },
  },

  profile: {
    badge: 'Professional profile',
    title: 'I work in surveying and roads, and I cover the whole chain: from the field measurement to the approved file.',
    p1: 'I work in surveying and roads through connected tracks: field survey and setting-out, then processing and drafting in the technical office, then quantity take-off and schedules, then GIS maps and data, and finally execution follow-up and reporting.',
    p2: 'My advantage is not one track — it is completing a task end to end without handing it between three parties: I set out on site, draft in AutoCAD, take off quantities and issue the report. That saves the project time and removes the errors created when data is retyped between teams.',
    facts: [
      { label: 'Core specialization', value: 'Surveying & Roads' },
      { label: 'Current work location', value: 'Saudi Arabia' },
      { label: 'Languages', value: 'Arabic (native) · English (technical reading)' },
      { label: 'Work type available', value: 'Field & office · full-time or project' },
      { label: 'Readiness', value: 'Travel within KSA · immediate start' },
    ],
    principlesTitle: 'How I work',
    principles: [
      { title: 'Measured, not estimated', desc: 'Every number carries a source: a benchmark, a dimension, or a formula. I never send a schedule without its calculation method.' },
      { title: 'Full source file', desc: 'I deliver DWG and XLSX, not pictures. Source files mean the next team builds on the work instead of repeating it.' },
      { title: 'Reports in site language', desc: 'A report must read clearly to the site inspector and the office engineer: observation, location, coordinates, impact.' },
    ],
    searchTitle: 'The role I am looking for now',
    searchNote: 'I apply for these roles in Saudi Arabia and am available to discuss work opportunities and projects directly.',
    searchRoles: [
      'Land / Site Surveyor',
      'Quantity Surveyor',
      'Roads Surveyor / Roads Technician',
      'CAD Draftsman / Technical Office',
      'GIS Technician / Data specialist',
      'Site Supervisor / QA inspector',
    ],
    locationLine: 'Saudi Arabia — available to travel between project sites',
    workTypes: ['Full-time', 'Project contract', 'Freelance / daily', 'Office or field'],
    quote: 'Accuracy is not an extra line in the contract — it is what prevents rework.',
    photoAlt: 'Mohammed Al-Bakhity — Surveying & Roads Engineer',
    idTitle: 'Profile card',
  },

  capabilities: {
    badge: 'Capability map',
    title: 'Six tracks — each with its own tools, outputs and roles',
    desc: 'Each track lists what I can do, the tools I use, what I hand over, and the job titles it maps to. This is not a skills list — it is a definition of what I can actually deliver.',
    rolesLabel: 'Job roles',
    toolsLabel: 'Tools',
    outLabel: 'Outputs',
    capLabel: 'Capabilities',
    hireLabel: 'Request this track',
    tracks: [
      {
        code: 'TRK-01',
        title: 'Field Surveying',
        subtitle: 'Surveying & Geomatics',
        desc: 'Survey, setting-out and level transfer with precise instruments, on a control network solid enough for every project stage.',
        capabilities: [
          'Detailed topographic survey of land and buildings',
          'Cadastral survey, boundaries and land division',
          'Setting out building and infrastructure axes',
          'Level transfer and benchmark establishment',
          'Longitudinal/cross levelling and slope calculation',
          'Field data processing and coordinate adjustment',
        ],
        tools: ['Total Station', 'Digital Level', 'GNSS/RTK', 'GPS', 'Field book'],
        deliverables: ['Survey drawing', 'Coordinate schedule', 'Field book', 'Survey report'],
        roles: ['Site Surveyor', 'Construction Surveyor', 'Topographic Surveyor', 'Level Surveyor'],
        accent: 'navy',
      },
      {
        code: 'TRK-02',
        title: 'Roads & Infrastructure',
        subtitle: 'Roads & Infrastructure',
        desc: 'Route design and setting-out: centreline, curves, design levels, and sections that can be built exactly as drawn.',
        capabilities: [
          'Route design and centreline setting-out',
          'Horizontal & vertical curves and element design',
          'Longitudinal and cross sections ready to execute',
          'Design levels and slope calculation',
          'Layer and paving area schedules',
          'Execution compliance with specs and dimensions',
        ],
        tools: ['AutoCAD', 'Civil 3D', 'Level', 'Excel'],
        deliverables: ['Route plan', 'Sections & slopes', 'Setting-out schedule', 'Areas schedule'],
        roles: ['Roads Surveyor', 'Roads Technician', 'Roads Works Supervisor', 'Setting-out Surveyor'],
        accent: 'gold',
      },
      {
        code: 'TRK-03',
        title: 'Quantities & BOQ',
        subtitle: 'Quantities & Cost',
        desc: 'Take-off that survives review: measurement source, formula, factor used, and the difference between design and executed work.',
        capabilities: [
          'Excavation, backfill and grading quantities',
          'Concrete and plain concrete quantities',
          'Asphalt, base course and kerb quantities',
          'Structured bill of quantities (BOQ)',
          'Progress payment statements',
          'Take-off memos and preliminary rate analysis',
        ],
        tools: ['Advanced Excel', 'AutoCAD', 'Civil 3D', 'Take-off tools'],
        deliverables: ['BOQ schedule', 'Calculation memo', 'Progress payment statement', 'Quantity comparison'],
        roles: ['Quantity Surveyor', 'Technical Office Engineer', 'Cost/Measurement Specialist'],
        accent: 'teal',
      },
      {
        code: 'TRK-04',
        title: 'Technical Office & CAD',
        subtitle: 'Technical Office & CAD',
        desc: 'Formal, organised outputs: layers, dimensions, title block, plot scales and versioned files any party can continue from.',
        capabilities: [
          'Construction and survey drawings',
          'As-built drawings after execution',
          'Layer, dimension and annotation standards',
          'DWG and PDF conversion / clean-up',
          'Scaled sheet output ready to print',
          'Versioned file archiving',
        ],
        tools: ['AutoCAD', 'Civil 3D', 'Plotting', 'PDF tools'],
        deliverables: ['Organised DWG', 'PDF sheets', 'As-built set', 'Version archive'],
        roles: ['CAD Draftsman', 'Technical Office Engineer', 'Drawing Coordinator'],
        accent: 'plain',
      },
      {
        code: 'TRK-05',
        title: 'GIS & Data',
        subtitle: 'GIS & Data',
        desc: 'Turning the field into readable, decision-ready data: layered maps, spatial files, and project indicator dashboards.',
        capabilities: [
          'GIS maps and thematic layers',
          'Converting survey data into spatial files',
          'KML and Google Earth deliverables',
          'Digital organisation and archiving of project data',
          'Excel dashboards and indicator reports',
          'Site data entry and processing',
        ],
        tools: ['QGIS', 'Google Earth Pro', 'Excel', 'AutoCAD'],
        deliverables: ['GIS maps', 'KML / SHP / GeoJSON', 'Indicator dashboard', 'Data structure'],
        roles: ['GIS Technician', 'Project Data Officer', 'Spatial Data Analyst'],
        accent: 'teal',
      },
      {
        code: 'TRK-06',
        title: 'Site Supervision',
        subtitle: 'Supervision & Safety',
        desc: 'Following execution by measurement, not impression: checkpoints, checklists, and reports that tie every observation to a location.',
        capabilities: [
          'Supervision of grading and level works',
          'Supervision of roads and paving works',
          'Dimension and level checklists',
          'Compliance checks against drawings and specs',
          'Daily and weekly site reporting',
          'Field coordination and non-conformance follow-up',
        ],
        tools: ['Level', 'Checklists', 'Photos', 'Excel'],
        deliverables: ['Site reports', 'Inspection checklists', 'Observations/NCR log', 'Progress summary'],
        roles: ['Site Inspector', 'Execution Supervisor', 'Field Coordinator', 'QA Inspector'],
        accent: 'gold',
      },
    ],
  },

  services: {
    badge: 'Services',
    title: 'What I can deliver to you directly',
    desc: 'Eight defined services with clear outputs. A service is never handed over without its source file and report.',
    outLabel: 'Outputs',
    items: [
      {
        code: 'SRV-01',
        title: 'Topographic survey',
        desc: 'Detailed survey of the site, its boundaries, features and levels, with control points and a checked closure.',
        deliverables: ['DWG + PDF drawing', 'Coordinate schedule XLSX', 'Survey report'],
        note: 'Suits: land, existing buildings, new execution sites',
      },
      {
        code: 'SRV-02',
        title: 'Cadastral survey & boundaries',
        desc: 'Establishing boundaries and corner points, subdividing plots and preparing the division plan.',
        deliverables: ['Subdivision plan', 'Plot & area schedule', 'Fixed boundary points'],
        note: 'Suits: subdivision, land transfer, boundary disputes',
      },
      {
        code: 'SRV-03',
        title: 'Setting out axes & levels',
        desc: 'Setting out axes and dimensions on site, and transferring execution levels from an approved reference.',
        deliverables: ['Station setting-out schedule', 'Levelled points', 'Setting-out report'],
        note: 'Suits: starting execution, monitoring ongoing works',
      },
      {
        code: 'SRV-04',
        title: 'Levelling & cross sections',
        desc: 'Accurate route levelling with sections and slopes for quantities and execution levels.',
        deliverables: ['Longitudinal/cross sections', 'Level & slope schedule', 'Preliminary quantities'],
        note: 'Suits: road works and utility corridors',
      },
      {
        code: 'SRV-05',
        title: 'Quantity take-off & BOQ',
        desc: 'Take-off from drawings or sections, with a calculation memo and explicit, reviewable factors.',
        deliverables: ['BOQ (XLSX/PDF)', 'Calculation method memo', 'Progress-based quantities'],
        note: 'Suits: claims, tenders, progress tracking',
      },
      {
        code: 'SRV-06',
        title: 'AutoCAD drafting & as-built',
        desc: 'Drawing or updating plans to a professional standard, and recording what was actually built on site.',
        deliverables: ['Layer-organised DWG', 'Scaled PDF sheets', 'As-built file'],
        note: 'Suits: formal submissions, updating old drawings',
      },
      {
        code: 'SRV-07',
        title: 'GIS maps & KML files',
        desc: 'Converting site data into maps and layers that different parties can read and share easily.',
        deliverables: ['GIS map/layers', 'KML / GeoJSON files', 'Excel dashboard'],
        note: 'Suits: presentations, management reports, spatial archiving',
      },
      {
        code: 'SRV-08',
        title: 'Supervision & reporting',
        desc: 'Daily follow-up of works against drawings, with checklists and reports tying each observation to a location.',
        deliverables: ['Daily/monthly reports', 'Inspection checklists', 'Observation log'],
        note: 'Suits: grading, roads and building projects',
      },
    ],
    stepsTitle: 'How we start',
    steps: [
      { title: 'Describe the need', desc: 'Project location, scope and expected output — by WhatsApp or email, with a drawing if available.' },
      { title: 'Offer & duration', desc: 'I send scope, deliverables, duration and method — with a clear price before starting.' },
      { title: 'Execute & hand over', desc: 'Field and office work, then source files handed over with a report and notes.' },
    ],
    cta: 'Request this service',
    note: 'Available for freelance and small/mid projects — on site inside KSA or remotely from the office.',
  },

  projects: {
    badge: 'Selected work',
    title: 'Projects that end with a file, not a presentation',
    desc: 'Samples of my work: each project shows its track, scope and outputs. Source files (DWG/XLSX/reports) available on request.',
    filters: [
      { id: 'all', label: 'All' },
      { id: 'survey', label: 'Survey' },
      { id: 'roads', label: 'Roads' },
      { id: 'quantities', label: 'Quantities' },
      { id: 'cad', label: 'Technical office' },
      { id: 'gis', label: 'GIS' },
      { id: 'site', label: 'Supervision' },
    ],
    deliverLabel: 'Outputs',
    footnote: 'Figures above come from project records · more project files (DWG · XLSX · PDF · reports) available on request.',
    empty: 'No projects in this track yet.',
    items: [
      {
        code: 'PRJ-01',
        title: 'Rural road survey & setting-out',
        track: 'roads', year: '2024', location: 'Yemen',
        scope: '14 km road — survey, setting-out and levels',
        desc: 'Full topographic survey of the route, then setting out the centreline, curves and levels, and issuing longitudinal and cross sections for execution.',
        stats: [
          { label: 'Length', value: '14 km' },
          { label: 'Points surveyed', value: '600+' },
          { label: 'Sections', value: '28' },
        ],
        deliverables: ['Route plan DWG', 'L/C sections', 'Setting-out schedule'],
        preview: 'road',
      },
      {
        code: 'PRJ-02',
        title: 'Residential land survey & subdivision',
        track: 'survey', year: '2023', location: 'Yemen',
        scope: '48 residential plots — cadastral survey & division',
        desc: 'Establishing the area boundary, surveying features, then dividing it into 48 plots with an area schedule and fixed corner points ready for official submission.',
        stats: [
          { label: 'Plots', value: '48' },
          { label: 'Area', value: '12,000 m²' },
          { label: 'Corners', value: '190+ points' },
        ],
        deliverables: ['Subdivision plan', 'Plot & area schedule', 'Coordinate schedule'],
        preview: 'subdivision',
      },
      {
        code: 'PRJ-03',
        title: 'Building setting-out & level transfer',
        track: 'survey', year: '2023', location: 'Yemen',
        scope: '6-storey building — setting-out and level control',
        desc: 'Setting out the building footprint and utilities, transferring the datum level from a reference point, and monitoring excavation and foundation levels up to ground floor.',
        stats: [
          { label: 'Floors', value: '6' },
          { label: 'Setting-out points', value: '85+' },
          { label: 'Stages', value: 'Foundations + frame' },
        ],
        deliverables: ['Setting-out schedule', 'Level report', 'Fixed reference points'],
        preview: 'building',
      },
      {
        code: 'PRJ-04',
        title: 'Road project quantity take-off',
        track: 'quantities', year: '2024', location: 'Saudi Arabia',
        scope: 'Excavation, backfill, base and asphalt — full BOQ',
        desc: 'Take-off from sections and drawings, producing a structured BOQ with a clear calculation memo covering bulking and compaction factors for every layer.',
        stats: [
          { label: 'Excavation', value: '3,150 m³' },
          { label: 'Base course', value: '9,400 m²' },
          { label: 'BOQ items', value: '26' },
        ],
        deliverables: ['BOQ XLSX', 'Calculation memo', 'Preliminary payment statement'],
        preview: 'quantities',
      },
      {
        code: 'PRJ-05',
        title: 'As-built drawings — commercial building',
        track: 'cad', year: '2024', location: 'Yemen',
        scope: 'Updating drawings to match what was built',
        desc: 'Comparing design drawings against the completed works, recording changes (dimensions, openings, entrances) and issuing the as-built file set.',
        stats: [
          { label: 'Sheets', value: '9' },
          { label: 'Changes recorded', value: '40+' },
          { label: 'Format', value: 'DWG + PDF' },
        ],
        deliverables: ['As-built DWG', 'Scaled PDF sheets', 'Deviation report'],
        preview: 'asbuilt',
      },
      {
        code: 'PRJ-06',
        title: 'GIS map for a project site',
        track: 'gis', year: '2025', location: 'Saudi Arabia',
        scope: 'Layers, boundaries, features and share files',
        desc: 'Converting survey data into organised GIS layers (boundaries, routes, features, services) and issuing presentation maps with ready-to-share spatial files.',
        stats: [
          { label: 'Layers', value: '7' },
          { label: 'Features', value: '120+' },
          { label: 'Formats', value: 'KML · GeoJSON' },
        ],
        deliverables: ['GIS maps', 'KML/GeoJSON files', 'Indicator dashboard'],
        preview: 'gis',
      },
      {
        code: 'PRJ-07',
        title: 'Grading site supervision',
        track: 'site', year: '2025', location: 'Saudi Arabia',
        scope: 'Grading and level control — daily reporting',
        desc: 'Monitoring excavation and grading works by level, with dimension checklists, daily reports and a tracked observation log until correction.',
        stats: [
          { label: 'Area', value: '18,000 m²' },
          { label: 'Reporting', value: 'Daily/weekly' },
          { label: 'Checklists', value: '12' },
        ],
        deliverables: ['Daily reports', 'Level checklists', 'Observation log'],
        preview: 'supervision',
      },
    ],
  },

  contact: {
    badge: 'Contact',
    title: 'Ready to start — pick your fastest channel',
    desc: 'For hiring or freelance work, send the opportunity details or project scope and I will reply as soon as possible.',
    email: 'Mohammedalbkhyty@gmail.com',
    phone: '+966566743293',
    phoneDisplay: '+966566743293',
    location: 'Saudi Arabia',
    availability: 'Available: field and office — travel within KSA, immediate start.',
    responseNote: 'Usually replies within 24 hours · WhatsApp is fastest',
    channels: [
      { id: 'wa', label: 'WhatsApp', value: '+966566743293', note: 'Fastest reply — send site or role details', href: '' },
      { id: 'mail', label: 'Email', value: 'Mohammedalbkhyty@gmail.com', note: 'For job offers and contracts', href: '' },
      { id: 'x', label: 'X', value: '@engalbukhaiti', note: 'Public profile and quick messages', href: 'https://x.com/engalbukhaiti' },
      { id: 'li', label: 'LinkedIn', value: 'mohammed-albukhaiti', note: 'Professional profile and direct contact', href: 'https://www.linkedin.com/in/mohammed-albukhaiti-215a41302/' },
      { id: 'gh', label: 'GitHub', value: 'engmohammeda', note: 'Technical files and this site', href: 'https://github.com/engmohammeda' },
    ],
    form: {
      title: 'Send details directly',
      name: 'Name',
      email: 'Email or mobile',
      subject: 'Request type',
      message: 'Details',
      subjects: ['Job opportunity', 'Request a quote', 'Survey / setting-out', 'Quantities / BOQ', 'CAD drafting', 'GIS / data', 'Supervision & reporting', 'Other enquiry'],
      submit: 'Send request',
      sending: 'Sending…',
      success: 'Sent successfully — I will reply shortly.',
      error: 'Could not send. Please use WhatsApp or email directly.',
      privacy: 'Your details are used only to reply about your request.',
    },
    qrTitle: 'Quick contact card',
    qrNote: 'Scan to open WhatsApp or save the contact directly.',
    vcard: 'Save contact (vCard)',
    waText: 'Hello Mohammed, I would like to discuss',
    mailSubject: 'Message from the professional portfolio',
    stepsTitle: 'What happens after you reach out',
    steps: [
      { title: 'Reply & clarification', desc: 'I reply within 24 hours (usually faster), asking specific questions if needed.' },
      { title: 'Agree on details', desc: 'For hiring: we clarify the role. For projects: I send the scope, duration and price.' },
      { title: 'Start', desc: 'Once agreed, I start on site or in the office depending on the work type.' },
    ],
  },

  footer: {
    rights: 'All rights reserved',
    role: 'Surveying & Roads Engineer — Saudi Arabia',
    titleBlock: [
      { label: 'File', value: 'Professional sheet — v3.0' },
      { label: 'Drawn by', value: 'Mohammed Al-Bakhity Ali' },
      { label: 'Discipline', value: 'Survey · Roads · Quantities · CAD · GIS' },
      { label: 'Location', value: 'Saudi Arabia' },
      { label: 'Sheet', value: '01 / 01' },
      { label: 'Status', value: 'Available for work' },
    ],
    linksTitle: 'Site sections',
    contactTitle: 'Contact',
    updated: 'Last updated',
    builtNote: 'Personal site — built and deployed automatically from GitHub.',
  },
};

export const portfolioData: Record<Language, Copy> = { ar, en };

/** Shared identity details used by contact links and the vCard. */
export const identity = {
  nameAr: 'محمد البخيتي علي',
  nameEn: 'Mohammed Al-Bakhity Ali',
  email: 'Mohammedalbkhyty@gmail.com',
  phone: '+966566743293',
  x: 'https://x.com/engalbukhaiti',
  linkedin: 'https://www.linkedin.com/in/mohammed-albukhaiti-215a41302/',
  github: 'https://github.com/engmohammeda',
  site: 'https://engmohammeda.github.io/portfolio/',
  locationAr: 'المملكة العربية السعودية',
  locationEn: 'Saudi Arabia',
  updated: '2026-10',
};
