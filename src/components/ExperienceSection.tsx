import { Award, Calendar, GraduationCap, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "مهندس طرق أول",
      company: "شركة البناء الحديث",
      period: "2021 - الحاضر",
      description: "تصميم وإشراف على مشاريع الطرق السريعة والبنية التحتية باستخدام أحدث التقنيات والذكاء الاصطناعي",
      achievements: [
        "تصميم أكثر من 50 كم من الطرق السريعة",
        "تطوير نظام ذكي لإدارة المرور",
        "تقليل تكلفة المشاريع بنسبة 15%"
      ]
    },
    {
      title: "مهندس تصميم طرق",
      company: "مكتب الاستشارات الهندسية",
      period: "2019 - 2021",
      description: "تصميم الطرق الحضرية والريفية وحل المشاكل الهندسية المعقدة",
      achievements: [
        "إنجاز 30+ مشروع طرق",
        "تطوير حلول مبتكرة للتصريف",
        "حصول على جائزة التميز الهندسي"
      ]
    }
  ];

  const education = [
    {
      degree: "ماجستير الهندسة المدنية",
      university: "جامعة الملك سعود",
      year: "2019",
      specialization: "هندسة الطرق والمواصلات"
    },
    {
      degree: "بكالوريوس الهندسة المدنية",
      university: "جامعة الملك فهد للبترول والمعادن",
      year: "2017",
      specialization: "الهندسة المدنية والبيئية"
    }
  ];

  const certifications = [
    "مهندس مدني معتمد - الهيئة السعودية للمهندسين",
    "شهادة إدارة المشاريع PMP",
    "شهادة تصميم الطرق المتقدم - AASHTO",
    "شهادة الذكاء الاصطناعي في الهندسة - MIT"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            الخبرة والمؤهلات
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مسيرة مهنية حافلة بالإنجازات في مجال هندسة الطرق والبنية التحتية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* الخبرة المهنية */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">الخبرة المهنية</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-tech transition-all duration-500 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-secondary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-foreground">الإنجازات الرئيسية:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* التعليم والشهادات */}
          <div className="space-y-8">
            {/* التعليم */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">التعليم</h3>
              </div>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-secondary text-sm">{edu.university}</p>
                      <p className="text-muted-foreground text-sm">{edu.specialization}</p>
                      <p className="text-primary text-sm font-medium">{edu.year}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* الشهادات */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">الشهادات المهنية</h3>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
                        <p className="text-sm text-foreground">{cert}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};