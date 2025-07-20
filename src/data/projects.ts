// Project data structure for easy management
export interface Project {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'surveying' | 'programming' | 'ai' | 'education';
  featured: boolean;
  completedAt: string;
}

// This file makes it easy to add new projects without touching translations.ts
export const projects: Project[] = [
  {
    id: 'graduation-project',
    title: {
      ar: 'مشروع التخرج: مسح ورفع طريق محلي',
      en: 'Graduation Project: Local Road Survey & Mapping'
    },
    description: {
      ar: 'مشروع التخرج الرئيسي تضمن مسح ورفع طريق محلي كامل مع إجراء الدراسات اللازمة وحساب الكميات وإعداد التقارير الفنية باستخدام برامج المساحة المتخصصة.',
      en: 'Main graduation project involved complete surveying and mapping of a local road with necessary studies, quantity calculations, and technical report preparation using specialized surveying software.'
    },
    technologies: ['Google Earth', 'AutoCAD Civil', 'المسح الميداني', 'حساب الكميات'],
    image: '/src/assets/road-surveyor.jpg',
    category: 'surveying',
    featured: true,
    completedAt: '2024-06'
  },
  {
    id: 'english-learning-system',
    title: {
      ar: 'نظام تعليم ذكي للغة الإنجليزية',
      en: 'Smart English Learning System'
    },
    description: {
      ar: 'تطوير منصة ويب تفاعلية لتعليم اللغة الإنجليزية باستخدام الذكاء الاصطناعي، تتضمن تقييم مستوى الطالب وتخصيص المحتوى التعليمي.',
      en: 'Development of an interactive web platform for English language learning using artificial intelligence, including student level assessment and personalized educational content.'
    },
    technologies: ['Python', 'ذكاء اصطناعي', 'تطوير ويب', 'معالجة اللغة الطبيعية'],
    image: '/src/assets/smart-city-tech.jpg',
    category: 'ai',
    featured: true,
    completedAt: '2024-03'
  },
  {
    id: 'surveying-automation',
    title: {
      ar: 'أتمتة الإجراءات المساحية',
      en: 'Surveying Process Automation'
    },
    description: {
      ar: 'تطوير أدوات لأتمتة العمليات المساحية وتصنيف البيانات من خلال معالجة النقاط المساحية وتحليلها آلياً لتسريع العمل الميداني.',
      en: 'Development of tools to automate surveying operations and data classification through automatic processing and analysis of surveying points to accelerate fieldwork.'
    },
    technologies: ['Python', 'تحليل البيانات', 'أتمتة العمليات', 'معالجة النقاط'],
    image: '/src/assets/highway-design.jpg',
    category: 'programming',
    featured: true,
    completedAt: '2024-01'
  },
  {
    id: 'personal-tracking-system',
    title: {
      ar: 'نظام تدوين وتتبع شخصي',
      en: 'Personal Note-taking & Tracking System'
    },
    description: {
      ar: 'تطوير تطبيق شخصي لإدارة المهام والملاحظات مع إمكانيات التتبع والتحليل لتحسين الإنتاجية الشخصية.',
      en: 'Development of a personal application for task and note management with tracking and analysis capabilities to improve personal productivity.'
    },
    technologies: ['تطوير تطبيقات', 'إدارة البيانات', 'واجهات مستخدم', 'تحليل الإنتاجية'],
    image: '/src/assets/smart-city-tech.jpg',
    category: 'programming',
    featured: false,
    completedAt: '2023-11'
  }
];

// Helper functions for project management
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(p => p.category === category);
export const getProjectById = (id: string) => projects.find(p => p.id === id);