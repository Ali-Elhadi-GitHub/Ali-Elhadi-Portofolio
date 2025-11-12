import { GraduationCap, BookOpen, TrendingUp, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const CoursesSection = () => {
  const { t } = useLanguage();
  
  const courses = [
    {
      icon: BookOpen,
      en: {
        title: 'Course 1: Business Management Fundamentals',
        description: 'Master the core principles of business management and operations',
      },
      ar: {
        title: 'الكورس 1: أساسيات الإدارة وإدارة الأعمال',
        description: 'أتقن المبادئ الأساسية لإدارة الأعمال والعمليات',
      },
    },
    {
      icon: Target,
      en: {
        title: 'Course 2: Professional Social Media Management',
        description: 'Build and manage social media pages professionally from scratch',
      },
      ar: {
        title: 'الكورس 2: تأسيس وإدارة صفحات السوشيال ميديا بطريقة منظمة واحترافية من الصفر',
        description: 'ابن وأدر صفحات السوشيال ميديا باحترافية من الصفر',
      },
    },
    {
      icon: TrendingUp,
      en: {
        title: 'Course 3: From Marketing to E-Commerce',
        description: 'Transform marketing strategies into successful e-commerce ventures',
      },
      ar: {
        title: 'الكورس 3: من التسويق إلى التجارة الإلكترونية',
        description: 'حول استراتيجيات التسويق إلى مشاريع تجارة إلكترونية ناجحة',
      },
    },
    {
      icon: GraduationCap,
      en: {
        title: 'Course 4: Comprehensive Practical Application',
        description: 'Hands-on implementation of all learned concepts in real projects',
      },
      ar: {
        title: 'الكورس 4: التطبيق العملي الشامل',
        description: 'تطبيق عملي شامل لجميع المفاهيم المكتسبة في مشاريع حقيقية',
      },
    },
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            {t('Upcoming Courses', 'الكورسات القادمة')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              'Coming soon, God willing: Professional diploma in building digital presence and mastering e-commerce + additional specialized courses',
              'قريباً بإذن الله: دبلومة إدارة وبناء التواجد الرقمي والتجارة الإلكترونية للاحتراف + كورسات أخرى متخصصة'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => {
            const content = t(course.en, course.ar) as any;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <course.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{content.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{content.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full hover:bg-accent hover:text-accent-foreground hover:border-accent"
                      asChild
                    >
                      <a 
                        href={`https://wa.me/201111245487?text=${encodeURIComponent(`مرحباً، أريد الاستفسار عن: ${content.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('Learn More', 'اعرف التفاصيل')}
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-8 bg-accent/10 border-2 border-accent/30 hover:border-accent/50 transition-all">
            <div className="text-5xl mb-4">🎓</div>
            <p className="text-lg font-semibold mb-4">
              {t(
                'Stay tuned for course launch announcements!',
                'ترقب الإعلان عن بدء الكورسات قريباً!'
              )}
            </p>
            <Button
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
              asChild
            >
              <a 
                href="https://wa.me/201111245487?text=مرحباً، أريد الاشتراك للحصول على إشعار بالكورسات الجديدة"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('Subscribe for Updates', 'اشترك ليصلك الإشعار')}
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
