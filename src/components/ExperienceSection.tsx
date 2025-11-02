import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const ExperienceSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
          {t('Experience & Education', 'الخبرة والتعليم')}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {t('Real-world business building and academic foundation in information systems', 'بناء الأعمال في العالم الحقيقي والأساس الأكاديمي في نظم المعلومات')}
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Experience */}
          <Card className="p-8 border-l-4 border-l-primary hover:shadow-xl transition-all duration-300 animate-slide-in-left">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold">{t('Founder & Director', 'المؤسس والمدير')}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{t('Jan 2024 – Present', 'يناير 2024 – حتى الآن')}</span>
                  </div>
                </div>
                <p className="text-lg font-semibold text-primary mb-3">{t('Bassera Bookstore • Egypt', 'مكتبة باصيرة • مصر')}</p>
                <p className="text-foreground/80 leading-relaxed">
                  {t(
                    'Built and managed a digital-first bookstore from scratch — overseeing strategy, UX, marketing, and automation systems to drive growth. This real-world laboratory allowed me to test, validate, and refine business systems that actually work in the marketplace.',
                    'بنيت وأدرت مكتبة رقمية من الصفر — أشرف على الاستراتيجية وتجربة المستخدم والتسويق وأنظمة الأتمتة لدفع النمو. سمح لي هذا المختبر الواقعي باختبار والتحقق من وتحسين أنظمة الأعمال التي تعمل فعلاً في السوق.'
                  )}
                </p>
              </div>
            </div>
          </Card>

          {/* Education */}
          <Card className="p-8 border-l-4 border-l-accent hover:shadow-xl transition-all duration-300 animate-slide-in-right">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{t('B.Sc. in Computer & Information Sciences', 'بكالوريوس علوم الحاسب والمعلومات')}</h3>
                <p className="text-lg font-semibold text-accent mb-3">{t('Zagazig University • Information Systems', 'جامعة الزقازيق • نظم المعلومات')}</p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {t('Blended management, analytics, and technology for better business design.', 'دمج الإدارة والتحليلات والتكنولوجيا لتصميم أعمال أفضل.')}
                </p>
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">{t('Key Coursework:', 'المواد الدراسية الرئيسية:')}</p>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-foreground/80">
                    <li>• {t('Strategic Planning', 'التخطيط الاستراتيجي')}</li>
                    <li>• {t('Business Process Management', 'إدارة العمليات التجارية')}</li>
                    <li>• {t('Data Analytics', 'تحليل البيانات')}</li>
                    <li>• {t('Social Media Analytics', 'تحليلات وسائل التواصل')}</li>
                    <li>• {t('Software Project Management', 'إدارة مشاريع البرمجيات')}</li>
                    <li>• {t('Information Systems Design', 'تصميم نظم المعلومات')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
