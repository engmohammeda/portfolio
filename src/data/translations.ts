// src/data/translations.ts

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      title: "Mohammed Al-Bukhaiti",
      subtitle: "Surveyor and Roadway Technician",
      description: "Specialized in transforming field data into precise engineering solutions with practical experience acquired from leading a graduation project for designing a 3 km mountain road",
      downloadCV: "Download CV",
      contactMe: "Contact Me"
    },
    about: {
      title: "About Me",
      subtitle: "Surveying & Roads Technician",
      description: "Detail-oriented and motivated Surveying & Roads Technician, holding a technical diploma and certified expertise in operating Total Station, GPS, and Level instruments. Proficient in transforming field data into comprehensive survey drawings using AutoCAD, Civil 3D, and Global Mapper. Proven success in project execution through the surveying and design of a 3 km mountain road. Seeking to apply comprehensive field-to-finish skills to deliver precision and efficiency on challenging infrastructure projects.",
      highlights: [
        "Certified Surveying Equipment Operation",
        "AutoCAD & Civil 3D Proficiency", 
        "Field Data Processing Expert",
        "3km Mountain Road Project Leader"
      ]
    },
    projects: {
      title: "My Projects",
      subtitle: "Real Projects & Academic Work",
      items: [
        {
          title: "3km Mountain Road Design (Graduation Project)",
          description: "Led the complete preliminary study phase, analyzing terrain and influential factors to define the optimal road alignment. Executed topographic surveys using Total Station, collecting and processing extensive field data for design accuracy. Engineered the comprehensive road model in Civil 3D, developing horizontal/vertical alignments, corridors, and cross-sections. Calculated precise earthwork quantities (cut & fill), delivering a complete, cost-estimated, and ready-for-implementation design package.",
          technologies: ["Total Station", "Civil 3D", "AutoCAD", "Field Surveying", "GPS/GNSS"],
          image: "/src/assets/road-surveyor.jpg"
        },
        {
          title: "Practical Surveying Field Projects",
          description: "Conducted as-built surveys for buildings, successfully mapping property boundaries and adjacent structures. Performed construction layout (setting-out) of structural columns from engineering blueprints, ensuring precise placement for construction. Executed detailed topographic surveys and boundary mapping using advanced surveying equipment.",
          technologies: ["Total Station", "GPS/GNSS", "Automatic Level", "Global Mapper", "Boundary Mapping"],
          image: "/src/assets/smart-city-tech.jpg"
        },
        {
          title: "Survey Data Processing & Analysis",
          description: "Specialized in transforming raw field survey data into comprehensive technical drawings and reports. Proficient in processing point clouds, coordinate transformations, and creating detailed survey maps. Advanced skills in quantity calculations and cost estimation for infrastructure projects.",
          technologies: ["Civil 3D", "AutoCAD", "Global Mapper", "Python", "Google Earth Pro"],
          image: "/src/assets/highway-design.jpg"
        }
      ]
    },
    skills: {
      title: "Skills & Expertise",
      categories: [
        {
          title: "Surveying & Design Software",
          skills: ["Civil 3D", "AutoCAD", "ArcGIS Pro", "Global Mapper", "SAS.Plane"]
        },
        {
          title: "Surveying Instruments",
          skills: ["Total Station", "GPS/RTK", "Level", "Modern Surveying Equipment"]
        },
        {
          title: "Road Design",
          skills: ["Route Design", "Cross Sections", "Earthwork Calculations", "Horizontal & Vertical Alignment"]
        }
      ],
      expertise: [
        { skill: "Civil 3D", level: 90, color: "bg-survey-orange" },
        { skill: "AutoCAD", level: 85, color: "bg-survey-blue" },
        { skill: "Total Station", level: 88, color: "bg-mapping-green" },
        { skill: "Road Design", level: 87, color: "bg-field-orange" }
      ],
      achievements: [
        { icon: "🛣️", title: "Road Projects", value: "2+" },
        { icon: "📏", title: "Survey Accuracy", value: "99%" },
        { icon: "⚡", title: "Fresh Graduate", value: "2025" },
        { icon: "🎯", title: "Practical Training", value: "Complete" }
      ]
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's Build Something Amazing",
      description: "Ready to discuss your next engineering project or explore collaboration opportunities? I'm always excited to work on innovative solutions.",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        submit: "Send Message"
      },
      info: {
        email: "mohalbukhaiti@gmail.com",
        phone: "+967772791169",
        whatsapp: "+967714403583",
        location: "Sana'a, Yemen"
      }
    },
    footer: {
      copyright: "© 2024 All rights reserved to Mohammed Al-Bukhaiti"
    },
    experienceSection: {
      sectionTitle: "Projects & Qualifications",
      sectionSubtitle: "Eager to start my career in surveying and roads with a passion for AI",
      projectsTitle: "Projects",
      educationTitle: "Education",
      certificationsTitle: "Certifications and Training",
      keyAchievements: "Key Achievements:",
      graduationProject: {
        title: "Surveyor and Lead Designer | Design of a 3 km Mountain Road (Capstone Project)",
        company: "Graduation Project",
        description: "I directed the extensive preliminary research phase, evaluating the terrain and contributing factors to identify the most advantageous route for the road.",
        achievements: [
          "I performed topographic surveys utilizing a total station and gathered and analyzed extensive field data to guarantee design precision",
          "The detailed road model was developed in Civil 3D, incorporating horizontal and vertical alignments, lanes, and cross sections",  
          "The quantities of earthworks (cutting and filling) were meticulously calculated, and a comprehensive design package, complete with a cost estimate, was prepared and is ready for implementation",
          "I developed a comprehensive suite of executive plans and technical reports for the project"
        ]
      },
      practicalTraining: {
        title: "Trainee Surveyor (Practical Qualification Course)",
        company: "Practical Training",
        description: "I underwent comprehensive practical training in the utilization of contemporary surveying instruments.",
        achievements: [
          "I underwent comprehensive practical training in the utilization of contemporary surveying instruments, including Total Station, GPS, and Level",
          "I conducted the setting-out and surveying operations for the columns and axes of a training facility",
          "Applications of Civil 3D and AutoCAD software to integrate field data with office designs"
        ]
      },
      educationDetails: {
        diploma: "Diploma in Surveying and Road Engineering | 2023-2025",
        institute: "Certified Surveyors Qualification Course | 2025",
        specialization: "Surveying and Roads"
      },
      certificationDetails: {
        aiExpert: "Advanced AutoCAD Course : 2024",
        gisFundamentals: "Advanced Civil 3D Course : 2025",
        pythonBeginner: "Survey Equipment Training : 2025"
      }
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة",
      experience: "الخبرة",
      projects: "المشاريع", 
      skills: "المهارات",
      contact: "التواصل"
    },
    hero: {
      title: "محمد البخيتي",
      subtitle: "فني مساحة وطرق",
      description: "متخصص في تحويل البيانات الميدانية إلى حلول هندسية دقيقة خبرة عملية مكتسبة من قيادة مشروع تخرج لتصميم طريق جبلي بطول 3 كم",
      downloadCV: "تحميل السيرة الذاتية",
      contactMe: "تواصل معي"
    },
    about: {
      title: "نبذة عني",
      subtitle: "فني مساحة وطرق",
      description: "فني مساحة وطرق موجه بالتفاصيل ومتحفز، حاصل على دبلوم فني وخبرة معتمدة في تشغيل محطة التوتال، نظام تحديد المواقع GPS، وأجهزة التسوية. ماهر في تحويل البيانات الميدانية إلى رسومات مساحية شاملة باستخدام الأوتوكاد، سيفيل ثري دي، وجلوبال مابر. أثبت النجاح في تنفيذ المشاريع من خلال مسح وتصميم طريق جبلي بطول 3 كم. أسعى لتطبيق مهارات شاملة في العمليات الميدانية لتحقيق الدقة والكفاءة في مشاريع البنية التحتية الصعبة.",
      highlights: [
        "خبرة معتمدة في تشغيل معدات المساحة",
        "إتقان الأوتوكاد وسيفيل ثري دي",
        "خبير في معالجة البيانات الميدانية",
        "قائد مشروع طريق جبلي 3 كم"
      ]
    },
    projects: {
      title: "مشاريعي",
      subtitle: "مشاريع حقيقية وأعمال أكاديمية",
      items: [
        {
          title: "تصميم طريق جبلي 3 كم (مشروع التخرج)",
          description: "قدت مرحلة الدراسة التمهيدية الكاملة، مع تحليل التضاريس والعوامل المؤثرة لتحديد المسار الأمثل للطريق. نفذت المسوحات الطبوغرافية باستخدام محطة التوتال، وجمعت ومعالجت بيانات ميدانية واسعة لدقة التصميم. هندست النموذج الشامل للطريق في سيفيل ثري دي، مع تطوير المحاور الأفقية/العمودية والممرات والمقاطع العرضية. حسبت كميات الحفر والردم بدقة، وقدمت حزمة تصميم كاملة ومقدرة التكلفة وجاهزة للتنفيذ.",
          technologies: ["محطة التوتال", "سيفيل ثري دي", "أوتوكاد", "المسح الميداني", "GPS/GNSS"],
          image: "/src/assets/road-surveyor.jpg"
        },
        {
          title: "مشاريع المساحة الميدانية العملية",
          description: "أجريت مسوحات كما هو مبني للمباني، ونجحت في رسم حدود الممتلكات والهياكل المجاورة. نفذت تخطيط البناء (التوقيع) للأعمدة الإنشائية من المخططات الهندسية، مع ضمان الوضع الدقيق للبناء. نفذت مسوحات طبوغرافية مفصلة ورسم الحدود باستخدام معدات مساحية متطورة.",
          technologies: ["محطة التوتال", "GPS/GNSS", "جهاز التسوية الآلي", "جلوبال مابر", "رسم الحدود"],
          image: "/src/assets/smart-city-tech.jpg"
        },
        {
          title: "معالجة وتحليل بيانات المسح",
          description: "تخصصت في تحويل بيانات المسح الميداني الخام إلى رسومات فنية وتقارير شاملة. ماهر في معالجة سحب النقاط، وتحويلات الإحداثيات، وإنشاء خرائط مساحية مفصلة. مهارات متقدمة في حسابات الكميات وتقدير التكاليف لمشاريع البنية التحتية.",
          technologies: ["سيفيل ثري دي", "أوتوكاد", "جلوبال مابر", "بايثون", "جوجل إيرث برو"],
          image: "/src/assets/highway-design.jpg"
        }
      ]
    },
    skills: {
      title: "المهارات والخبرات",
      categories: [
        {
          title: "برامج المساحة والتصميم",
          skills: ["Civil 3D", "AutoCAD", "ArcGIS Pro", "Global Mapper", "SAS.Plane"]
        },
        {
          title: "أجهزة المساحة",
          skills: ["Total Station", "GPS/RTK", "Level", "أجهزة المساحة الحديثة"]
        },
        {
          title: "تصميم الطرق",
          skills: ["تصميم المسارات", "المقاطع العرضية", "حساب كميات الحفر والردم", "التسوية الطولية والعرضية"]
        }
      ],
      expertise: [
        { skill: "Civil 3D", level: 90, color: "bg-survey-orange" },
        { skill: "AutoCAD", level: 85, color: "bg-survey-blue" },
        { skill: "Total Station", level: 88, color: "bg-mapping-green" },
        { skill: "تصميم الطرق", level: 87, color: "bg-field-orange" }
      ],
      achievements: [
        { icon: "🛣️", title: "مشاريع طرق", value: "2+" },
        { icon: "📏", title: "دقة المساحة", value: "99%" },
        { icon: "⚡", title: "خريج جديد", value: "2025" },
        { icon: "🎯", title: "تدريب عملي", value: "مكتمل" }
      ]
    },
    contact: {
      title: "تواصل معي",
      subtitle: "لنبني شيئاً مذهلاً",
      description: "مستعد لمناقشة مشروعك الهندسي التالي أو استكشاف فرص التعاون؟ أنا دائماً متحمس للعمل على حلول مبتكرة.",
      form: {
        name: "اسمك",
        email: "بريدك الإلكتروني",
        message: "رسالتك",
        submit: "إرسال الرسالة"
      },
      info: {
        email: "mohalbukhaiti@gmail.com",
        phone: "+967772791169",
        whatsapp: "+967714403583",
        location: "صنعاء، اليمن"
      }
    },
    footer: {
      copyright: "© 2024 جميع الحقوق محفوظة لمحمد البخيتي"
    },
    experienceSection: {
      sectionTitle: "المشاريع والمؤهلات",
      sectionSubtitle: "متحمس لبدء مسيرتي المهنية في مجال المساحة والطرقات مع شغف بالذكاء الاصطناعي",
      projectsTitle: "المشاريع",
      educationTitle: "التعليم",
      certificationsTitle: "الشهادات والتدريب",
      keyAchievements: "الإنجازات الرئيسية:",
      graduationProject: {
        title: "مساح ومصمم رئيسي | تصميم طريق جبلي بطول 3 كيلومترات (مشروع تخرج)",
        company: "مشروع التخرج",
        description: "قدت مرحلة الدراسة الأولية الشاملة، وتحليل التضاريس والعوامل المؤثرة لتحديد المسار الأمثل للطريق.",
        achievements: [
          "قمت بالمسوحات الطوبوغرافية باستخدام جهاز المحطة الشاملة وجمع وتحليل بيانات ميدانية واسعة لضمان دقة التصميم",
          "تم تطوير نموذج الطريق التفصيلي في Civil 3D، ودمج المحاذاة الأفقية والعمودية والممرات والمقاطع العرضية",
          "تم حساب كميات الأعمال الترابية (القطع والردم) بدقة، وإعداد حزمة تصميم شاملة مكتملة مع تقدير التكلفة، وهي جاهزة للتنفيذ",
          "طورت مجموعة شاملة من الخطط التنفيذية والتقارير الفنية للمشروع"
        ]
      },
      practicalTraining: {
        title: "مساح متدرب (دورة تأهيلية عملية)",
        company: "التدريب العملي",
        description: "تدربت بشكل عملي وركزت على استخدام الأجهزة المساحية الحديثة.",
        achievements: [
          "تدربت عمليًا بشكل شامل على استخدام الأجهزة المساحية المعاصرة، بما في ذلك Total Station وGPS وLevel",
          "نفذت عمليات التوقيع (Setting-out) والإسقاط المساحي للأعمدة ومحاور مرفق تدريبي",
          "تطبيقات على برامج Civil 3D وAutoCAD لربط البيانات الميدانية بالتصاميم المكتبية"
        ]
      },
      educationDetails: {
        diploma: "دبلوم في المساحة والطرق | 2023-2025",
        institute: "دورة تأهيل المساحين المعتمدين | 2025",
        specialization: "المساحة والطرق"
      },
      certificationDetails: {
        aiExpert: "كورس AutoCAD المتقدم : 2024",
        gisFundamentals: "كورس Civil 3D المتقدم : 2025",
        pythonBeginner: "تدريب على أجهزة المساحة : 2025"
      }
    }
  }
};

export type Translations = typeof translations;
export type Language = keyof Translations;
