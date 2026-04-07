import { useLanguage } from '@/hooks/useLanguage';
import ScrollAnimation from '@/components/ScrollAnimation';

const SkillsSection = () => {
  const { t } = useLanguage();

  const skills = [
    { en: 'SaaS Growth', ar: 'نمو SaaS' },
    { en: 'Pre-Sales Engineering', ar: 'هندسة ما قبل البيع' },
    { en: 'Sales Funnels', ar: 'قمع المبيعات' },
    { en: 'Customer Acquisition', ar: 'اكتساب العملاء' },
    { en: 'CRM Systems', ar: 'أنظمة CRM' },
    { en: 'AI Tools', ar: 'أدوات الذكاء الاصطناعي' },
    { en: 'B2B Sales', ar: 'مبيعات B2B' },
    { en: 'Video Editing', ar: 'مونتاج الفيديو' },
    { en: 'Content Creation', ar: 'صناعة المحتوى' },
    { en: 'Social Media', ar: 'سوشيال ميديا' },
    { en: 'Digital Products', ar: 'المنتجات الرقمية' },
    { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-primary">
            {t('Skills', 'المهارات')}
          </h2>
        </ScrollAnimation>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <ScrollAnimation key={index} animation="scale" delay={index * 50}>
              <span className="inline-block px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default">
                {t(skill.en, skill.ar)}
              </span>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
