export type Language = 'en' | 'ar';

export const cvData = {
  en: {
    header: {
      name: "MOHAMMED ALBKHYTY",
      title: "Civil 3D Specialist & Automation Engineer",
      location: "Riyadh, KSA",
      phone: "+966 XX XXX XXXX",
      email: "m.albkhyty@email.com",
      linkedin: "https://linkedin.com/in/malbkhyty",
      github: "https://github.com/engmohammeda",
      twitter: "https://twitter.com/malbkhyty",
      valueProp: "Transforming raw topographic data into error-free executable models while eliminating bottlenecks through Python automation."
    },
    summary: {
      title: "MISSION & VALUE PROPOSITION",
      content: "I do not just survey land; I engineer data. Bridging the gap between raw field topography and precise, automated computational models. My focus is on reducing massive manual calculation hours to seconds through Python and SaaS methodologies, ensuring zero-error delivery in megaprojects. I build systems that solve engineering bottlenecks before they hit the execution phase."
    },
    caseStudies: {
      title: "ENGINEERING & AUTOMATION PORTFOLIO",
      projects: [
        {
          id: "01",
          name: "Topographic Data Cleaner Pipeline",
          category: "Automation",
          type: "code",
          date: "2024-03",
          role: "Workflow Automation Developer",
          context: "Field devices often yield inconsistent or corrupt coordinate sets, leading to days of manual cleaning before Civil 3D modeling can begin.",
          solution: "Developed a Python-based parser that ingests raw coordinate files (CSV/TXT), automatically identifies anomalies, corrects formatting, and outputs a clean, Civil 3D-ready import file.",
          impact: "Reduced data preparation time by 85%. Eliminated human error in data formatting, allowing instant CAD modeling."
        },
        {
          id: "02",
          name: "Mountainous Roadway Cut/Fill Optimization",
          category: "Civil 3D",
          type: "dwg",
          date: "2023-11",
          role: "Civil 3D Modeler",
          context: "A 3km complex terrain project required highly accurate earthwork estimations to prevent budget overruns.",
          solution: "Built a dynamic Civil 3D corridor model with highly constrained cross-sections. Automated the generation of precise volume reports (BOQ) tailored for immediate contractor use.",
          impact: "Achieved 98% accuracy in earthwork volume estimation, saving estimated project costs. Cut report generation time by half."
        },
        {
          id: "03",
          name: "Digital Site Tracking Dashboard",
          category: "SaaS & Web",
          type: "web",
          date: "2024-06",
          role: "Full-Stack Developer",
          context: "Daily surveying progress was tracked via slow, error-prone paper reports.",
          solution: "Designed the architecture for a digital tracking dashboard where field surveyors directly input daily points and boundaries, visually mapped on a central system.",
          impact: "Transitioned workflow to a paperless, real-time tracking model, giving project managers instant oversight of surveying milestones."
        }
      ]
    },
    competencies: {
      title: "THE ARSENAL",
      chartData: [
        { subject: 'Civil 3D', A: 95, fullMark: 100 },
        { subject: 'Python', A: 85, fullMark: 100 },
        { subject: 'GIS Mapping', A: 80, fullMark: 100 },
        { subject: 'Data Parsing', A: 90, fullMark: 100 },
        { subject: 'Surveying', A: 95, fullMark: 100 },
        { subject: 'Web Dev', A: 75, fullMark: 100 },
      ],
      categories: [
        {
          name: "Engineering Software",
          skills: [
            { name: "AutoCAD Civil 3D", value: 95 },
            { name: "ArcGIS / QGIS", value: 85 },
            { name: "Global Mapper", value: 88 }
          ]
        },
        {
          name: "Automation & Code",
          skills: [
            { name: "Python (Pandas, Numpy)", value: 90 },
            { name: "React, TypeScript", value: 80 },
            { name: "Node.js (APIs)", value: 75 }
          ]
        },
        {
          name: "Field Operations",
          skills: [
            { name: "Leica/Topcon Total Station", value: 95 },
            { name: "RTK/GNSS Systems", value: 92 },
            { name: "Drone Surveying Data", value: 85 }
          ]
        }
      ]
    },
    experience: {
      title: "OPERATIONAL LOG & TIMELINE",
      jobs: [
        {
          title: "Workflow Automation Lead",
          company: "Independent Architect",
          date: "2024 - Present",
          points: [
            "Consulted on data workflow optimizations for surveying teams.",
            "Built and deployed custom scripts directly reducing operational hours."
          ]
        },
        {
          title: "Topographic Surveyor & Civil 3D Modeler",
          company: "Confidential Megaproject",
          date: "2023 - 2024",
          points: [
            "Executed full-scale topographic surveys for critical infrastructure, processing 5,000+ points.",
            "Designed cross-sections and slopes optimizing traffic flow and stormwater compliance.",
            "Handled direct coordination with execution teams to align 3D models with ground reality."
          ]
        }
      ]
    },
    testimonials: {
      title: "RECOMMENDATIONS",
      quotes: [
        {
          text: "Mohammed changed the way our office handles site data. A process that used to take three surveyors a whole week now runs through his script in less than an hour.",
          author: "Sr. Project Manager",
          role: "Topographic Dept"
        },
        {
          text: "His Civil 3D corridors for the mountainous roads were spotless. It saved the execution team significant time and eliminated expensive re-work.",
          author: "Lead Highway Engineer",
          role: "Infrastructure Team"
        }
      ]
    },
    contact: {
      title: "INITIATE A PROTOCOL",
      subtitle: "Looking for robust data automation or Civil 3D mastery? Send a direct transmission.",
      nameLabel: "Identifier (Name)",
      emailLabel: "Return Address (Email)",
      messageLabel: "Transmission Payload (Message)",
      submitText: "Deploy Transmission",
      successText: "Transmission received. Awaiting response sequence."
    },
    education: {
      title: "ACCREDITATION",
      details: "Diploma in Surveying and Roads Engineering | 2024. Continuous upskilling in computer science and spatial data automation."
    },
    workSamples: {
      title: "ASSET REPOSITORY",
      samples: [
        { title: "Civil 3D Corridor Model", desc: "Complex cross-section & assembly design.", type: "dwg" },
        { title: "Volume Extraction Tool", desc: "Python script bypassing manual CAD steps.", type: "code" },
        { title: "Automated BOQ Template", desc: "Dynamic Excel sheets linked to site data.", type: "xls" }
      ]
    }
  },
  ar: {
    header: {
      name: "محمد البخيتي",
      title: "خبير Civil 3D ومهندس أتمتة مساحية",
      location: "الرياض، المملكة",
      phone: "+966 XX XXX XXXX",
      email: "m.albkhyty@email.com",
      linkedin: "https://linkedin.com/in/malbkhyty",
      github: "https://github.com/engmohammeda",
      twitter: "https://twitter.com/malbkhyty",
      valueProp: "تحويل البيانات الطبوغرافية الخام إلى نماذج تنفيذية خالية من الأخطاء، مع القضاء على عوائق العمليات عبر أتمتة بايثون."
    },
    summary: {
      title: "المهمة والقيمة المضافة",
      content: "أنا لا أقوم بمجرد مسح الأراضي؛ بل أقوم بهندسة البيانات. أعمل كجسر بين الطبوغرافيا الميدانية الخام والنماذج الحسابية الدقيقة والمؤتمتة. تركيزي ينصب على تقليص مئات الساعات من الحسابات اليدوية إلى ثوانٍ عبر لغة بايثون ومنهجيات SaaS، لضمان تسليم خالٍ من الأخطاء في المشاريع العملاقة. أبني أنظمة تحل العوائق الهندسية قبل أن تصل لسرعة التنفيذ."
    },
    caseStudies: {
      title: "محفظة الهندسة والأتمتة",
      projects: [
        {
          id: "01",
          name: "خط أنابيب تنظيف البيانات الطبوغرافية",
          category: "Automation",
          type: "code",
          date: "2024-03",
          role: "مطور أتمتة سير العمل",
          context: "غالباً ما تُنتج الأجهزة الميدانية بيانات وتنسيقات غير متسقة، مما يؤدي لأيام من التنظيف اليدوي قبل بدء النمذجة على Civil 3D.",
          solution: "طورت محلل بيانات (Parser) بلغة بايثون يستوعب ملفات الإحداثيات الخام (CSV/TXT)، يحدد الشذوذ بشكل آلي، يصحح التنسيق، ويُخرج ملفاً جاهزاً وفورياً للاستيراد على Civil 3D.",
          impact: "تخفيض وقت تجهيز البيانات بنسبة 85٪. القضاء التام على الأخطاء البشرية في إدخال البيانات، مما سمح بالبدء الفوري في النمذجة."
        },
        {
          id: "02",
          name: "تحسين أعمال الحفر والردم لطريق جبلي",
          category: "Civil 3D",
          type: "dwg",
          date: "2023-11",
          role: "مصمم Civil 3D",
          context: "مشروع بتضاريس معقدة بطول 3 كم تطلب تقديرات عالية الدقة للأعمال الترابية لمنع تجاوز الميزانية.",
          solution: "بناء نموذج طريق (Corridor) ديناميكي مع مقاطع عرضية محكمة. أتمتة استخراج تقارير الكميات (BOQ) لتكون جاهزة للمقاول فوراً.",
          impact: "تحقيق دقة بنسبة 98٪ في تقدير كميات الحفر والردم، مما أنقذ ميزانية المشروع. تقليص وقت استخراج التقارير للنصف."
        },
        {
          id: "03",
          name: "لوحة تحكم التتبع الميداني الرقمي",
          category: "SaaS & Web",
          type: "web",
          date: "2024-06",
          role: "مطور واجهات متكامل (Full-Stack)",
          context: "كان يتم تتبع إنجاز المساحة اليومي عبر تقارير ورقية بطيئة ومعرضة للخطأ.",
          solution: "تصميم هيكلية للوحة تحكم رقمية يُدخل فيها المساحون تقاريرهم والنقاط المرفوعة يومياً، لتُعكس بصرياً على نظام مركزي.",
          impact: "الانتقال إلى سير عمل لا ورقي ولحظي، مما منح مدراء المشاريع رؤية علوية فورية لمراحل الإنجاز المساحي."
        }
      ]
    },
    competencies: {
      title: "الترسانة التقنية والهندسية",
      chartData: [
        { subject: 'Civil 3D', A: 95, fullMark: 100 },
        { subject: 'Python', A: 85, fullMark: 100 },
        { subject: 'GIS Mapping', A: 80, fullMark: 100 },
        { subject: 'Data Parsing', A: 90, fullMark: 100 },
        { subject: 'Surveying', A: 95, fullMark: 100 },
        { subject: 'Web Dev', A: 75, fullMark: 100 },
      ],
      categories: [
        {
          name: "البرمجيات الهندسية",
          skills: [
            { name: "AutoCAD Civil 3D", value: 95 },
            { name: "ArcGIS / QGIS", value: 85 },
            { name: "Global Mapper", value: 88 }
          ]
        },
        {
          name: "الأتمتة والبرمجة",
          skills: [
            { name: "Python (معالجة البيانات)", value: 90 },
            { name: "React, TypeScript", value: 80 },
            { name: "Node.js (APIs)", value: 75 }
          ]
        },
        {
          name: "العمليات الميدانية",
          skills: [
            { name: "Leica/Topcon Total Station", value: 95 },
            { name: "RTK/GNSS Systems", value: 92 },
            { name: "الرفع المساحي بالدرونز", value: 85 }
          ]
        }
      ]
    },
    experience: {
      title: "السجل التشغيلي والزمني",
      jobs: [
        {
          title: "قائد أتمتة سير العمل",
          company: "بناء مستقل",
          date: "2024 - الحاضر",
          points: [
            "تقديم استشارات برمجية لتحسين سير عمل البيانات للفرق المساحية.",
            "بناء ونشر نصوص برمجية (Scripts) أدت لتقليص ساعات العمل التشغيلي الميداني مباشرة."
          ]
        },
        {
          title: "مساح طبوغرافي ومصمم Civil 3D",
          company: "مشروع بنية تحتية عملاق",
          date: "2023 - 2024",
          points: [
            "تنفيذ مسح طبوغرافي شامل للبنى التحتية الحرجة، ومعالجة أكثر من 5000 نقطة.",
            "تصميم المقاطع العرضية والميول بما يحسن تدفق المرور والامتثال لصرف السيول.",
            "التنسيق المباشر مع فرق التنفيذ لمطابقة نماذج 3D المكتسبة مع الواقع الميداني."
          ]
        }
      ]
    },
    testimonials: {
      title: "آراء وتوصيات",
      quotes: [
        {
          text: "المهندس محمد غيّر طريقة تعاملنا مع البيانات في المكتب. العملية التي كانت تستغرق 3 مساحين لأسبوع كامل تُنجز الآن بنصوصه البرمجية في أقل من ساعة.",
          author: "مدير مشاريع أول",
          role: "قسم الطبوغرافيا"
        },
        {
          text: "نماذج الـ Civil 3D التي صممها للطرق الجبلية كانت خالية من العيوب. وفرت على فريق التنفيذ وقتاً هائلاً ومنعت إعادة العمل المكلفة.",
          author: "كبير مهندسي الطرق",
          role: "فريق البنية التحتية"
        }
      ]
    },
    contact: {
      title: "تهيئة اتصال جديد",
      subtitle: "تبحث عن أتمتة بيانات قوية أو احترافية في Civil 3D؟ أرسل طلب اتصال عبر النموذج.",
      nameLabel: "المُعرّف (الاسم)",
      emailLabel: "عنوان الرد (البريد الإلكتروني)",
      messageLabel: "حزمة البيانات (الرسالة)",
      submitText: "نشر الإرسال",
      successText: "تم استلام البيانات. في انتظار تسلسل الرد."
    },
    education: {
      title: "الاعتماد الأكاديمي",
      details: "دبلوم في هندسة المساحة والطرق | 2024. تطوير مستمر لمهارات علوم الحاسب وأتمتة البيانات المكانية."
    },
    workSamples: {
      title: "مستودع الأصول",
      samples: [
        { title: "نموذج Civil 3D Corridor", desc: "تصميم مقاطع عرضية وتجميعات معقدة.", type: "dwg" },
        { title: "أداة استخراج الكميات", desc: "سكربت Python يتجاوز الخطوات اليدوية في CAD.", type: "code" },
        { title: "قوالب BOQ مؤتمتة", desc: "جداول Excel ديناميكية مرتبطة ببيانات الموقع.", type: "xls" }
      ]
    }
  }
};
