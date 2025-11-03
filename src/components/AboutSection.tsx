import { GraduationCap, Store, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const AboutSection = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: GraduationCap,
      en: { title: 'B.Sc. in Information Systems', subtitle: 'Zagazig University' },
      ar: { title: 'بكالوريوس نظم المعلومات', subtitle: 'جامعة الزقازيق' },
    },
    {
      icon: Store,
      en: { title: 'Founder of Bassera Bookstore', subtitle: 'Digital Business from Zero' },
      ar: { title: 'مؤسس مكتبة باصيرة', subtitle: 'عمل رقمي من الصفر' },
    },
    {
      icon: TrendingUp,
      en: { title: 'Real-World Experience', subtitle: 'Not Theory, Practice' },
      ar: { title: 'خبرة عملية حقيقية', subtitle: 'ممارسة وليس نظرية' },
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gradient-primary">
            {t('About Me', 'عني')}
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-12 animate-fade-in">
            <p className="text-center">
              {t(
                "I started my journey in programming but realized success in business isn't just about code — it's about systems. So I merged management, marketing, and sales engineering to help entrepreneurs build online businesses that sell with purpose, not luck.",
                'بدأت رحلتي في البرمجة لكن أدركت أن النجاح في الأعمال ليس مجرد كود — إنه أنظمة. لذا دمجت الإدارة والتسويق وهندسة المبيعات لمساعدة رواد الأعمال في بناء أعمال إلكترونية تبيع بهدف، وليس بالحظ.'
              )}
            </p>
            
            <p className="text-center">
              {t(
                'I founded Bassera Bookstore as a live experiment to build a digital business from zero — analyzing the market, designing the customer journey, and engineering repeat sales.',
                'أسست مكتبة باصيرة كتجربة حية لبناء عمل رقمي من الصفر — تحليل السوق، تصميم رحلة العميل، وهندسة المبيعات المتكررة.'
              )}
            </p>
            
            <p className="text-center">
              {t(
                'This portfolio is built on real-world experience, not theory.',
                'هذا المعرض مبني على خبرة عملية حقيقية، وليس نظرية.'
              )}
            </p>
            
            <p className="text-xl font-semibold text-primary text-center">
              {t(
                "If you're ready to start or grow your project, let's build it step by step. 🚀",
                'إذا كنت مستعدًا لبدء أو تطوير مشروعك، دعنا نبنيه خطوة بخطوة. 🚀'
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">{t(item.en.title, item.ar.title)}</h3>
                <p className="text-sm text-muted-foreground">{t(item.en.subtitle, item.ar.subtitle)}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
