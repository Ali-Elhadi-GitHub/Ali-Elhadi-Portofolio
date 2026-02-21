import { Video, Smartphone, Palette, ShoppingCart, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const AboutSection = () => {
  const { t } = useLanguage();

  const specializations = [
    { icon: Video, en: 'Video Editing', ar: 'مونتاج الفيديوهات' },
    { icon: Smartphone, en: 'Social Media Setup & Management', ar: 'تأسيس وإدارة صفحات السوشيال ميديا' },
    { icon: Palette, en: 'Content Design (Canva + AI)', ar: 'تصميم المحتوى باستخدام Canva + AI' },
    { icon: HeadphonesIcon, en: 'Customer Service Optimization', ar: 'تحسين وتنظيم خدمة العملاء' },
    { icon: ShoppingCart, en: 'E-commerce Store Setup (Easy Orders)', ar: 'إنشاء متاجر إلكترونية عبر Easy Orders' },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gradient-primary">
            {t('About Me', 'نبذة عني')}
          </h2>

          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed mb-12 animate-fade-in">
            <p className="text-center">
              {t(
                "I'm Ali Elhadi, specialized in video editing, social media page setup & management, content design using Canva + AI, customer service optimization, and building e-commerce stores via Easy Orders.",
                'أنا علي الهادي، متخصص في مونتاج الفيديوهات، تأسيس وإدارة صفحات السوشيال ميديا، تصميم المحتوى باستخدام Canva + AI، تحسين وتنظيم خدمة العملاء، وإنشاء متاجر إلكترونية عبر Easy Orders.'
              )}
            </p>

            <p className="text-center">
              {t(
                'I work with business owners who want to build an organized and clear digital presence — not random.',
                'أعمل مع أصحاب المشاريع الذين يريدون بناء حضور رقمي منظم وواضح — وليس عشوائي.'
              )}
            </p>

            <p className="text-xl font-semibold text-primary text-center">
              {t(
                'My goal: Turn your idea into a professional digital presence that serves your project and builds customer trust.',
                'هدفي: تحويل فكرتك إلى تواجد رقمي احترافي يخدم مشروعك ويزيد ثقة عملائك.'
              )}
            </p>
          </div>

          {/* Specializations */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
