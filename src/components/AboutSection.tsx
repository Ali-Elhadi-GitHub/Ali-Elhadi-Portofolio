import { Video, Smartphone, Palette, ShoppingCart, HeadphonesIcon, Mic } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const AboutSection = () => {
  const { t } = useLanguage();

  const specializations = [
    { icon: Video, en: 'Professional Video Editing', ar: 'مونتاج الفيديوهات الاحترافي' },
    { icon: Mic, en: 'Voice Over', ar: 'التعليق الصوتي' },
    { icon: Smartphone, en: 'Social Media Setup & Management', ar: 'تأسيس وإدارة صفحات السوشيال ميديا' },
    { icon: Palette, en: 'Content Design (Canva + AI)', ar: 'تصميم المحتوى باستخدام Canva + AI' },
    { icon: ShoppingCart, en: 'E-commerce Store Setup (Easy Orders)', ar: 'إنشاء متاجر إلكترونية عبر Easy Orders' },
    { icon: HeadphonesIcon, en: 'Customer Service Optimization', ar: 'تنظيم وتحسين خدمة العملاء' },
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
                "I'm Ali Elhadi, specialized in professional video editing, voice over, social media page setup & management, content design using Canva + AI, e-commerce store creation via Easy Orders, and customer service optimization.",
                'أنا علي الهادي، متخصص في مونتاج الفيديوهات الاحترافي، التعليق الصوتي، تأسيس وإدارة صفحات السوشيال ميديا، تصميم المحتوى باستخدام Canva + AI، إنشاء متاجر إلكترونية عبر Easy Orders، وتنظيم وتحسين خدمة العملاء.'
              )}
            </p>

            <p className="text-center">
              {t(
                'I work with business owners who want to build an organized, clear, and scalable digital presence — not just random activity online.',
                'أعمل مع أصحاب المشاريع الذين يريدون بناء حضور رقمي منظم، واضح، وقابل للتطوير — وليس مجرد نشاط عشوائي على الإنترنت.'
              )}
            </p>

            <p className="text-xl font-semibold text-primary text-center">
              {t(
                'My goal: Turn your idea into a professional digital presence that reflects your project\'s value and builds customer trust.',
                'هدفي هو تحويل فكرتك إلى تواجد رقمي احترافي يعكس قيمة مشروعك ويزيد ثقة عملائك.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {specializations.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-xl border hover:shadow-md hover:border-primary/40 transition-all duration-300 animate-scale-in"
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
