// src/data/translations.ts

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      name: "Mohammed Al-Bukhaiti",
      title: "Fresh Graduate Surveying & Roads Engineer",
      description: "Seeking opportunities to apply my surveying and programming skills to create innovative engineering solutions. Combining traditional surveying expertise with modern AI technologies.",
      cta: {
        primary: "Explore My Work",
        secondary: "Download CV"
      }
    },
    about: {
      title: "About Me",
      subtitle: "Fresh Graduate Engineer",
      description: "Fresh graduate with a 2-year diploma in Surveying and Roads Engineering, actively seeking employment opportunities to apply my acquired skills and gain practical experience. I have a strong passion for technology and artificial intelligence, with programming skills that enable me to integrate modern technologies with engineering work.",
      highlights: [
        "Fresh Graduate + Programming Skills",
        "Surveying & Roads Engineering",
        "AI & Automation Enthusiast",
        "Smart Engineering Solutions"
      ]
    },
    projects: {
      title: "My Projects",
      subtitle: "Real Projects & Academic Work",
      items: [
        {
          title: "Graduation Project: Local Road Survey & Mapping",
          description: "Main graduation project involving complete surveying and mapping of a local road with necessary studies, quantity calculations, and technical report preparation using specialized surveying software.",
          technologies: ["Google Earth", "AutoCAD Civil", "Field Surveying", "Quantity Calculation"],
          image: "/src/assets/road-surveyor.jpg"
        },
        {
          title: "Smart English Learning System",
          description: "Interactive web platform for English language learning using artificial intelligence, including student level assessment and personalized educational content.",
          technologies: ["Python", "AI", "Web Development", "Natural Language Processing"],
          image: "/src/assets/smart-city-tech.jpg"
        },
        {
          title: "Surveying Process Automation",
          description: "Tools for automating surveying operations and data classification through automatic processing and analysis of surveying points to accelerate fieldwork.",
          technologies: ["Python", "Data Analysis", "Process Automation", "Point Processing"],
          image: "/src/assets/highway-design.jpg"
        }
      ]
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Surveying & Programming Expertise",
      categories: [
        {
          title: "Surveying & Roads",
          skills: ["Land Surveying", "Road Mapping", "Quantity Calculation", "Technical Reports", "Field Surveying"]
        },
        {
          title: "Engineering Software",
          skills: ["Google Earth Pro", "AutoCAD Civil", "ArcGIS", "Global Mapper", "Advanced MS Office"]
        },
        {
          title: "Programming & AI",
          skills: ["Python Development", "Web Development", "AI & Machine Learning", "Data Analysis", "Process Automation"]
        },
        {
          title: "Smart Tools",
          skills: ["Smart Calculators", "Data Processing", "Automation Tools", "AI Integration", "Cost Analysis"]
        }
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
        email: "mohammedalbkhyty@gmail.com", // Updated email
        phone: "+967 772791169", // Updated phone number (Yemen)
        location: "Yemen", // Changed from Saudi Arabia to Yemen
        github: "engmohammeda", // Added GitHub username
        twitter: "engalbukhaiti" // Added Twitter username
      }
    },
    experienceSection: {
      sectionTitle: "Projects & Qualifications",
      sectionSubtitle: "Eager to start my career in surveying and roads with a passion for AI",
      projectsTitle: "Projects",
      educationTitle: "Education",
      certificationsTitle: "Acquired Certifications",
      keyAchievements: "Key Achievements:",

      graduationProject: {
        title: "Graduation Project: Local Road Survey & Mapping",
        company: "University Project",
        description: "Main graduation project involving complete surveying and mapping of a local road with necessary studies, quantity calculations, and technical report preparation using specialized surveying software. This project, discussed in the 'Journal of Surveying and Mapping', showcases practical application of surveying principles and software proficiency.",
        achievements: [
          "Successfully completed comprehensive surveying and mapping of a local road.",
          "Prepared detailed technical reports and accurate quantity calculations.",
          "Demonstrated proficiency in specialized surveying software for data analysis and reporting."
        ]
      },

      educationDetails: {
        diploma: "Diploma in Surveying & Roads",
        institute: "Technical Institute, College of Engineering",
        specialization: "Surveying & Road Design"
      },
      certificationDetails: {
        aiExpert: "AI Expert Certificate",
        gisFundamentals: "Fundamentals of GIS Course",
        pythonBeginner: "Python Programming for Beginners Course",
      }
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة",
      projects: "المشاريع",
      skills: "المهارات",
      contact: "التواصل"
    },
    hero: {
      name: "محمد البخيتي",
      title: "مهندس مساحة وطرق حديث التخرج",
      description: "أسعى لتطبيق مهاراتي في المساحة والبرمجة لخلق حلول هندسية مبتكرة. أدمج خبرة المساحة التقليدية مع تقنيات الذكاء الاصطناعي الحديثة.",
      cta: {
        primary: "استكشف أعمالي",
        secondary: "تحميل السيرة الذاتية"
      }
    },
    about: {
      title: "نبذة عني",
      subtitle: "مهندس حديث التخرج",
      description: "حديث التخرج بدبلوم عامين في هندسة المساحة والطرق، أبحث بنشاط عن فرص عمل لتطبيق مهاراتي المكتسبة واكتساب خبرة عملية. لدي شغف قوي بالتكنولوجيا والذكاء الاصطناعي، مع مهارات برمجية تمكنني من دمج التقنيات الحديثة مع العمل الهندسي.",
      highlights: [
        "حديث التخرج + مهارات برمجية",
        "هندسة المساحة والطرق",
        "متحمس للذكاء الاصطناعي والأتمتة",
        "حلول هندسية ذكية"
      ]
    },
    projects: {
      title: "مشاريعي",
      subtitle: "مشاريع حقيقية وأعمال أكاديمية",
      items: [
        {
          title: "مشروع التخرج: مسح ورفع طريق محلي",
          description: "مشروع التخرج الرئيسي شمل مسح ورفع طريق محلي كامل مع إجراء الدراسات اللازمة وحساب الكميات وإعداد التقارير الفنية باستخدام برامج المساحة المتخصصة.",
          technologies: ["جوجل إيرث", "أوتوكاد سيفيل", "المسح الميداني", "حساب الكميات"],
          image: "/src/assets/road-surveyor.jpg"
        },
        {
          title: "نظام تعليم ذكي للغة الإنجليزية",
          description: "منصة ويب تفاعلية لتعليم اللغة الإنجليزية باستخدام الذكاء الاصطناعي، تشمل تقييم مستوى الطالب وتخصيص المحتوى التعليمي.",
          technologies: ["بايثون", "ذكاء اصطناعي", "تطوير ويب", "معالجة اللغة الطبيعية"],
          image: "/src/assets/smart-city-tech.jpg"
        },
        {
          title: "أتمتة الإجراءات المساحية",
          description: "أدوات لأتمتة العمليات المساحية وتصنيف البيانات من خلال معالجة وتحليل النقاط المساحية آلياً لتسريع العمل الميداني.",
          technologies: ["بايثون", "تحليل البيانات", "أتمتة العمليات", "معالجة النقاط"],
          image: "/src/assets/highway-design.jpg"
        }
      ]
    },
    skills: {
      title: "المهارات التقنية",
      subtitle: "خبرة في المساحة والبرمجة",
      categories: [
        {
          title: "المساحة والطرق",
          skills: ["مسح الأراضي", "خرائط الطرق", "حساب الكميات", "التقارير الفنية", "المسح الميداني"]
        },
        {
          title: "برامج الهندسة",
          skills: ["جوجل إيرث برو", "أوتوكاد سيفيل", "آرك جي آي إس", "جلوبال مابر", "مايكروسوفت أوفيس المتقدم"]
        },
        {
          title: "البرمجة والذكاء الاصطناعي",
          skills: ["تطوير بايثون", "تطوير ويب", "ذكاء اصطناعي وتعلم آلة", "تحليل البيانات", "أتمتة العمليات"]
        },
        {
          title: "الأدوات الذكية",
          skills: ["حاسبات ذكية", "معالجة البيانات", "أدوات الأتمتة", "تكامل الذكاء الاصطناعي", "تحليل التكاليف"]
        }
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
        email: "mohammedalbkhyty@gmail.com", // Updated email
        phone: "+967 772791169", // Updated phone number (Yemen)
        location: "اليمن", // Changed from Saudi Arabia to Yemen
        github: "engmohammeda", // Added GitHub username
        twitter: "engalbukhaiti" // Added Twitter username
      }
    },
    experienceSection: {
      sectionTitle: "المشاريع والمؤهلات",
      sectionSubtitle: "متحمس لبدء مسيرتي المهنية في مجال المساحة والطرقات مع شغف بالذكاء الاصطناعي",
      projectsTitle: "المشاريع",
      educationTitle: "التعليم",
      certificationsTitle: "الشهادات المكتسبة",
      keyAchievements: "الإنجازات الرئيسية:",

      graduationProject: {
        title: "مشروع التخرج: مسح ورفع طريق محلي",
        company: "مشروع جامعي",
        description: "مشروع التخرج الرئيسي شمل مسح ورفع طريق محلي كامل مع إجراء الدراسات اللازمة وحساب الكميات وإعداد التقارير الفنية باستخدام برامج المساحة المتخصصة. هذا المشروع، الذي نوقش في 'مجلة المساحة والخرائط'، يعرض التطبيق العملي لمبادئ المساحة وإتقان البرامج.",
        achievements: [
          "إتمام أعمال المسح والرفع الشاملة لطريق محلي.",
          "إعداد التقارير الفنية المفصلة وحسابات الكميات الدقيقة.",
          "إظهار الكفاءة في استخدام برامج المساحة المتخصصة لتحليل البيانات وإعداد التقارير."
        ]
      },

      educationDetails: {
        diploma: "دبلوم المساحة والطرقات",
        institute: "المعهد التقني، كلية الهندسة",
        specialization: "المساحة وتصميم الطرق"
      },
      certificationDetails: {
        aiExpert: "شهادة خبير الذكاء الاصطناعي",
        gisFundamentals: "دورة في أساسيات نظم المعلومات الجغرافية (GIS)",
        pythonBeginner: "دورة في البرمجة بلغة بايثون للمبتدئين",
      }
    }
  }
};

export type Translations = typeof translations;
export type Language = keyof Translations;
