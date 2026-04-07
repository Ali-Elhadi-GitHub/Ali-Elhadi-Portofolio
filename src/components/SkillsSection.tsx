import { useLanguage } from '@/hooks/useLanguage';

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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-primary">
          {t('Skills', 'المهارات')}
        </h2>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {t(skill.en, skill.ar)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
