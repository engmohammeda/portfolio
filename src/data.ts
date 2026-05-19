export type Language = 'en' | 'ar';

export const cvData = {
  en: {
    header: {
      name: "MOHAMMED ALBKHYTY",
      title: "Data Operations & Civil 3D",
      location: "Yemen",
      phone: "+967772791169",
      email: "Mohammedalbkhyty@gmail.com",
      whatsapp: "https://wa.me/967772791169",
      linkedin: "",
      github: "https://github.com/engmohammeda",
      twitter: "https://x.com/engalbukhaiti",
      valueProp: "Awaiting AGI. Until then, orchestrating data and eliminating bottlenecks."
    },
    summary: {
      title: "THE DIRECTIVE",
      content: "I design workflows, not just topographies. The goal is simple: reduce friction. Less time calculating, more time executing. Bridging the gap between raw field topography and precise computationally generated models. Currently preparing systems for the AGI era."
    },
    caseStudies: {
      title: "CURRENT OPERATIONS",
      projects: [
        {
          id: "01",
          name: "Topographic Data Cleaner Pipeline",
          type: "code",
          date: "Work in Progress",
          role: "Developer",
          context: "Addressing inconsistencies in field device data formatting.",
          solution: "Building a parser to ingest raw coordinate files, identify anomalies, and output clean datasets.",
          impact: "Expected to significantly reduce data prep time."
        },
        {
          id: "02",
          name: "Complex Terrain Cut/Fill",
          type: "dwg",
          date: "Work in Progress",
          role: "Civil 3D Modeler",
          context: "Requires highly accurate earthwork estimations.",
          solution: "Developing dynamic Civil 3D corridor models.",
          impact: "Aiming to achieve near-perfect accuracy in volume estimation."
        },
        {
          id: "03",
          name: "Digital Site Tracking Dashboard",
          type: "web",
          date: "Work in Progress",
          role: "Developer",
          context: "Transitioning daily surveying progress from paper.",
          solution: "Designing a digital dashboard for daily boundary and point tracking.",
          impact: "Will transition workflow to a real-time tracking model."
        }
      ]
    },
    contact: {
      title: "INITIATE TRANSMISSION",
      subtitle: "Secure line open. Leave a message.",
      nameLabel: "Identifier",
      emailLabel: "Return Address",
      messageLabel: "Payload",
      submitText: "Send Transmission",
      successText: "Message received. Awaiting response sequence."
    }
  },
  ar: {
    header: {
      name: "محمد البخيتي",
      title: "العمليات المكانية وأتمتة البيانات",
      location: "اليمن",
      phone: "+967772791169",
      email: "Mohammedalbkhyty@gmail.com",
      whatsapp: "https://wa.me/967772791169",
      linkedin: "",
      github: "https://github.com/engmohammeda",
      twitter: "https://x.com/engalbukhaiti",
      valueProp: "في انتظار الـ AGI... وحتى ذلك الحين، أعمل على هندسة البيانات وحل العوائق التقنية."
    },
    summary: {
      title: "النهج",
      content: "أسعى لتقليل الاحتكاك بين البيانات والواقع. لا أقوم بمسح الأراضي فحسب، بل أبني أنظمة تجعل من البيانات الطبوغرافية نماذج حية تتسم بالدقة العالية، بعيداً عن ضجيج العمل اليدوي. أُجهز مساحات العمل تقنياً وعملياً للاندماج مع أنظمة الذكاء الاصطناعي العام (AGI) القادمة."
    },
    caseStudies: {
      title: "العمليات الحالية",
      projects: [
        {
          id: "01",
          name: "أداة تنظيف البيانات الطبوغرافية",
          type: "code",
          date: "قيد العمل والتطوير",
          role: "مطور",
          context: "معالجة عدم اتساق تنسيقات بيانات الأجهزة الميدانية.",
          solution: "بناء أداة تحليل بلغة بايثون لتنظيف ملفات الإحداثيات الخام.",
          impact: "تقليل وقت إعداد البيانات والأخطاء البشرية بشكل جذري."
        },
        {
          id: "02",
          name: "تحسين أعمال الحفر والردم المعقدة",
          type: "dwg",
          date: "قيد العمل والتطوير",
          role: "مصمم Civil 3D",
          context: "تقديرات عالية الدقة للأعمال الترابية للطرق المعقدة.",
          solution: "تطوير نماذج طرق (Corridors) ديناميكية.",
          impact: "الهدف تحقيق دقة شبه كاملة لتفادي أي أخطاء تتعلّق بالميزانية والتنفيذ."
        },
        {
          id: "03",
          name: "نظام التتبع الميداني الرقمي",
          type: "web",
          date: "قيد العمل والتطوير",
          role: "مطور",
          context: "نقل عملية التقارير اليومية من الورق إلى مساحة رقمية.",
          solution: "تصميم لوحة تحكم لتتبع النطاقات المرفوعة يومياً وعكسها بصرياً.",
          impact: "سير عمل لا ورقي ولحظي للمتابعة الدقيقة."
        }
      ]
    },
    contact: {
      title: "نافذة الاتصال",
      subtitle: "الخط مشفر ومتاح. اترك رسالتك هنا.",
      nameLabel: "الاسم",
      emailLabel: "عنوان الرد",
      messageLabel: "الرسالة",
      submitText: "إرسال",
      successText: "تم استلام رسالتك."
    }
  }
};
