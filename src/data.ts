export const portfolioData = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      experience: "Experience",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact",
      downloadCV: "Download CV"
    },
    hero: {
      badge: "Available for surveying & roads projects",
      name: "Mohammed Al-Bakhity Ali",
      role: "Surveying & Roads Technician",
      headline1: "Precision Surveying.",
      headline2: "Safe Roads.",
      headline3: "Professional Execution.",
      description: "Diploma in Surveying and Roads Engineering with hands-on experience in topographic surveys, road layout, quantity calculations and site supervision. Committed to accuracy, safety, and quality on every project.",
      ctaPrimary: "Download CV",
      ctaSecondary: "View Projects",
      stats: [
        { value: "2+", label: "Years Experience" },
        { value: "15+", label: "Projects Completed" },
        { value: "100%", label: "Accuracy Commitment" }
      ]
    },
    about: {
      badge: "Who I Am",
      title: "A surveying technician who believes accuracy in the field is the foundation of every successful project.",
      p1: "I am Mohammed Al-Bakhity Ali, a surveying and roads technician with a 2-year diploma in Surveying and Roads Engineering. My work combines precise field measurements with accurate office work using AutoCAD and civil engineering software.",
      p2: "I specialize in topographic and cadastral surveying, road route layout, leveling, quantity surveying, and construction supervision. I work with total station, level, and GPS devices, and I am keen on delivering drawings and reports that are clear, accurate, and ready for execution.",
      highlights: [
        { label: "Specialization", value: "Surveying & Roads" },
        { label: "Location", value: "Yemen - Available for field work" },
        { label: "Education", value: "Diploma in Surveying & Roads - 2 Years" },
        { label: "Tools", value: "Total Station, Level, GPS, AutoCAD" }
      ]
    },
    services: {
      badge: "What I Do",
      title: "Field & Office Surveying Services",
      description: "Comprehensive surveying services covering all stages from initial site survey to execution and quantity handover.",
      items: [
        { title: "Topographic Survey", desc: "Detailed topographic surveys for lands, buildings and infrastructure projects with high accuracy." },
        { title: "Road Layout & Leveling", desc: "Staking road routes, curves, levels, and longitudinal & cross sections." },
        { title: "Quantity Calculation", desc: "Accurate calculation of excavation, backfill, asphalt and concrete quantities." },
        { title: "AutoCAD Drafting", desc: "Preparing survey drawings, road plans, sections and final as-built drawings." },
        { title: "Construction Supervision", desc: "Field supervision to ensure execution matches drawings and technical specifications." },
        { title: "Cadastral & Land Division", desc: "Land surveying, division and property boundary definition with legal documentation." }
      ]
    },
    experience: {
      badge: "Career Path",
      title: "Experience & Education",
      jobs: [
        {
          role: "Surveying & Roads Technician",
          company: "Engineering Projects - Field & Office",
          period: "2022 - Present",
          location: "Yemen",
          desc: "Executing topographic surveys, road layouts, quantity takeoffs and supervising site implementation. Preparing AutoCAD drawings and daily reports."
        },
        {
          role: "Diploma in Surveying and Roads",
          company: "Technical Institute - Surveying Department",
          period: "2020 - 2022",
          location: "Yemen",
          desc: "Two-year diploma covering surveying principles, roads engineering, quantity calculations, AutoCAD and civil engineering software."
        }
      ]
    },
    projects: {
      badge: "Selected Work",
      title: "Surveying & Roads Projects",
      description: "A selection of field projects that reflect accuracy in measurement and commitment to execution.",
      items: [
        {
          title: "Rural Road Surveying & Layout",
          type: "Roads Engineering",
          location: "Yemen",
          year: "2024",
          desc: "Full topographic survey and road route staking with levels and cross sections for a rural road project."
        },
        {
          title: "Residential Land Subdivision",
          type: "Cadastral Survey",
          location: "Yemen",
          year: "2023",
          desc: "Surveying and dividing residential land into plots with boundary definition and preparation of subdivision drawings."
        },
        {
          title: "Building Site Layout & Levels",
          type: "Construction Survey",
          location: "Yemen",
          year: "2023",
          desc: "Building footprint layout, level transfer, and supervision of excavation and foundation levels."
        }
      ]
    },
    certificates: {
      badge: "Documents",
      title: "Certificates & Official Documents",
      description: "All certificates and official documents are available for viewing and direct download.",
      download: "Download",
      view: "View",
      note: "You can add your certificates as images or PDFs in /public/certificates/",
      items: [
        { title: "Diploma in Surveying & Roads", issuer: "Technical Institute", date: "2022", file: "/portfolio/certificates/diploma.pdf", type: "Diploma" },
        { title: "AutoCAD Certificate", issuer: "Training Center", date: "2022", file: "/portfolio/certificates/autocad.pdf", type: "Course" },
        { title: "Quantity Surveying Certificate", issuer: "Engineering Center", date: "2023", file: "/portfolio/certificates/quantity.pdf", type: "Course" },
        { title: "National ID / Engineering Card", issuer: "Official Authority", date: "2024", file: "/portfolio/certificates/id.pdf", type: "Document" }
      ]
    },
    contact: {
      badge: "Contact",
      title: "Let's Execute Your Project With Precision.",
      description: "Available for surveying and roads projects. Contact me for a survey, consultation, or execution supervision.",
      email: "Mohammedalbkhyty@gmail.com",
      phone: "+967 772791169",
      location: "Yemen - Sana'a",
      x: "@engalbukhaiti",
      form: {
        title: "Send a Message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Project details...",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send. Try again."
      }
    }
  },
  ar: {
    nav: {
      about: "نبذة عني",
      services: "خدماتي",
      experience: "الخبرة",
      projects: "المشاريع",
      certificates: "الشهادات",
      contact: "تواصل",
      downloadCV: "تحميل السيرة"
    },
    hero: {
      badge: "متاح لمشاريع المساحة والطرق",
      name: "محمد البخيتي علي",
      role: "فني مساحة وطرق",
      headline1: "مساحة دقيقة.",
      headline2: "طرق آمنة.",
      headline3: "تنفيذ احترافي.",
      description: "دبلوم مساحة وطرق مع خبرة ميدانية ومكتبية في الرفع الطبوغرافي، تخطيط الطرق، حساب الكميات والإشراف الميداني. ألتزم بالدقة والسلامة والجودة في كل مشروع.",
      ctaPrimary: "تحميل السيرة الذاتية",
      ctaSecondary: "عرض المشاريع",
      stats: [
        { value: "+2", label: "سنوات خبرة" },
        { value: "+15", label: "مشروع منجز" },
        { value: "%100", label: "التزام بالدقة" }
      ]
    },
    about: {
      badge: "من أنا",
      title: "فني مساحة أؤمن أن دقة القياس في الميدان هي أساس نجاح أي مشروع.",
      p1: "أنا محمد البخيتي علي، فني مساحة وطرق حاصل على دبلوم سنتين في المساحة والطرق. يجمع عملي بين القياسات الميدانية الدقيقة والعمل المكتبي المتقن باستخدام أوتوكاد وبرامج الهندسة المدنية.",
      p2: "أتخصص في الرفع المساحي الطبوغرافي والعقاري، تخطيط مسارات الطرق، الميزانية، حساب الكميات، والإشراف على التنفيذ. أعمل على أجهزة التوتال ستيشن والليفل والـ GPS، وأحرص على تقديم مخططات وتقارير واضحة ودقيقة وجاهزة للتنفيذ.",
      highlights: [
        { label: "التخصص", value: "مساحة وطرق" },
        { label: "الموقع", value: "اليمن - متاح للعمل الميداني" },
        { label: "المؤهل", value: "دبلوم مساحة وطرق - سنتين" },
        { label: "الأجهزة", value: "توتال ستيشن، ليفل، GPS، أوتوكاد" }
      ]
    },
    services: {
      badge: "ماذا أقدم",
      title: "خدمات مساحية ميدانية ومكتبية متكاملة",
      description: "خدمات مساحية شاملة تغطي جميع المراحل من الرفع المبدئي للموقع حتى التنفيذ وتسليم الكميات.",
      items: [
        { title: "الرفع الطبوغرافي", desc: "رفع طبوغرافي تفصيلي للأراضي والمباني ومشاريع البنية التحتية بدقة عالية." },
        { title: "تخطيط الطرق والميزانية", desc: "توقيع مسارات الطرق والمنحنيات والمناسيب والقطاعات الطولية والعرضية." },
        { title: "حساب الكميات", desc: "حساب دقيق لكميات الحفر والردم والإسفلت والخرسانة." },
        { title: "الرسم بـ أوتوكاد", desc: "إعداد المخططات المساحية ومخططات الطرق والقطاعات ومخططات التسليم النهائي." },
        { title: "الإشراف على التنفيذ", desc: "إشراف ميداني لضمان مطابقة التنفيذ للمخططات والمواصفات الفنية." },
        { title: "الرفع العقاري وتقسيم الأراضي", desc: "رفع الأراضي وتقسيمها وتحديد حدود الملكيات مع التوثيق القانوني." }
      ]
    },
    experience: {
      badge: "المسار المهني",
      title: "الخبرة والتعليم",
      jobs: [
        {
          role: "فني مساحة وطرق",
          company: "مشاريع هندسية - ميداني ومكتبي",
          period: "2022 - الآن",
          location: "اليمن",
          desc: "تنفيذ أعمال الرفع الطبوغرافي وتخطيط الطرق وحساب الكميات والإشراف على التنفيذ الميداني. إعداد مخططات أوتوكاد والتقارير اليومية."
        },
        {
          role: "دبلوم مساحة وطرق",
          company: "المعهد التقني - قسم المساحة",
          period: "2020 - 2022",
          location: "اليمن",
          desc: "دبلوم سنتين يغطي مبادئ المساحة، هندسة الطرق، حساب الكميات، أوتوكاد وبرامج الهندسة المدنية."
        }
      ]
    },
    projects: {
      badge: "أعمال مختارة",
      title: "مشاريع المساحة والطرق",
      description: "مجموعة من المشاريع الميدانية التي تعكس الدقة في القياس والالتزام بالتنفيذ.",
      items: [
        {
          title: "مسح وتخطيط طريق ريفي",
          type: "هندسة طرق",
          location: "اليمن",
          year: "2024",
          desc: "رفع طبوغرافي كامل وتوقيع مسار طريق مع المناسيب والقطاعات العرضية لمشروع طريق ريفي."
        },
        {
          title: "تقسيم أرض سكنية",
          type: "رفع عقاري",
          location: "اليمن",
          year: "2023",
          desc: "رفع وتقسيم أرض سكنية إلى قطع مع تحديد الحدود وإعداد مخططات التقسيم."
        },
        {
          title: "توقيع مبنى ومناسيب",
          type: "مساحة إنشائية",
          location: "اليمن",
          year: "2023",
          desc: "توقيع مسقط المبنى ونقل المناسيب والإشراف على مناسيب الحفر والأساسات."
        }
      ]
    },
    certificates: {
      badge: "الوثائق",
      title: "الشهادات والوثائق الرسمية",
      description: "جميع الشهادات والوثائق متاحة للاطلاع والتحميل المباشر.",
      download: "تحميل",
      view: "معاينة",
      note: "يمكنك إضافة شهاداتك كصور أو PDF في مجلد /public/certificates/",
      items: [
        { title: "دبلوم مساحة وطرق", issuer: "المعهد التقني", date: "2022", file: "/portfolio/certificates/diploma.pdf", type: "شهادة" },
        { title: "شهادة أوتوكاد", issuer: "مركز تدريب", date: "2022", file: "/portfolio/certificates/autocad.pdf", type: "دورة" },
        { title: "شهادة حساب كميات", issuer: "مركز هندسي", date: "2023", file: "/portfolio/certificates/quantity.pdf", type: "دورة" },
        { title: "بطاقة هوية / بطاقة هندسية", issuer: "جهة رسمية", date: "2024", file: "/portfolio/certificates/id.pdf", type: "وثيقة" }
      ]
    },
    contact: {
      badge: "التواصل",
      title: "دعنا ننفذ مشروعك بدقة واحترافية.",
      description: "متاح لمشاريع المساحة والطرق. تواصل معي لطلب رفع مساحي، استشارة، أو إشراف تنفيذ.",
      email: "Mohammedalbkhyty@gmail.com",
      phone: "+967 772791169",
      location: "اليمن - صنعاء",
      x: "@engalbukhaiti",
      form: {
        title: "أرسل رسالة",
        namePlaceholder: "الاسم",
        emailPlaceholder: "البريد الإلكتروني",
        messagePlaceholder: "تفاصيل المشروع...",
        submit: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        success: "تم الإرسال بنجاح!",
        error: "فشل الإرسال، حاول مرة أخرى."
      }
    }
  }
};

export type Language = 'en' | 'ar';
