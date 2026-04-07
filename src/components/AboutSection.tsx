import { Cpu, TrendingUp, ShoppingCart, Video, Smartphone, Brain } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const AboutSection = () => {
  const { t } = useLanguage();

  const specializations = [
    { icon: TrendingUp, en: 'SaaS Growth & Scaling', ar: 'نمو وتوسيع SaaS' },
    { icon: Video, en: 'Video Editing & Content Creation', ar: 'مونتاج الفيديو وصناعة المحتوى' },
    { icon: Smartphone, en: 'Social Media Management', ar: 'إدارة صفحات السوشيال ميديا' },
    { icon: ShoppingCart, en: 'CRM Setup & Sales Systems', ar: 'إعداد CRM وأنظمة المبيعات' },
    { icon: Brain, en: 'AI Consulting & Training', ar: 'استشارات وتدريب الذكاء الاصطناعي' },
    { icon: Cpu, en: 'Digital Products & E-commerce', ar: 'المنتجات الرقمية والتجارة الإلكترونية' },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gradient-primary">
            {t('About Me', 'نبذة عني')}
          </h2>

          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed mb-12 animate-fade-in">
            <p className="text-center">
              {t(
                "I'm Ali Elhadi, a Computer Science graduate studying business & marketing. I combine tech with business to build and grow SaaS products.",
                'أنا مهندس علي الهادي، خريج حاسبات ومعلومات، وبدرس إدارة وتسويق. قررت أدمج بين المجال التقني والبيزنس، وبدأت رحلتي في SaaS من زاوية الصناعة + التسويق + المبيعات.'
              )}
            </p>
          </div>

          {/* Specializations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {specializations.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-background rounded-xl border hover:shadow-md hover:border-primary/40 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <item.icon className="h-6 w-6 text-primary shrink-0" />
                <span className="text-sm font-medium">{t(item.en, item.ar)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
