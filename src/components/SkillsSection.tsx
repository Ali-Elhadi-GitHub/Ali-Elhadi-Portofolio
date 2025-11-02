import { 
  Briefcase, 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  Target, 
  Globe, 
  PieChart, 
  Zap, 
  UsersRound, 
  CheckCircle 
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const SkillsSection = () => {
  const { t } = useLanguage();
  
  const skills = [
    { icon: Briefcase, en: 'Business Management', ar: 'إدارة الأعمال' },
    { icon: TrendingUp, en: 'Digital Marketing', ar: 'التسويق الرقمي' },
    { icon: ShoppingCart, en: 'E-commerce Strategy', ar: 'استراتيجية التجارة الإلكترونية' },
    { icon: Users, en: 'Customer Journey Mapping', ar: 'تخطيط رحلة العميل' },
    { icon: BarChart3, en: 'Performance Analysis', ar: 'تحليل الأداء' },
    { icon: Settings, en: 'Operations Management', ar: 'إدارة العمليات' },
    { icon: Target, en: 'Strategic Planning', ar: 'التخطيط الاستراتيجي' },
    { icon: Globe, en: 'Web & Social Media Analytics', ar: 'تحليلات الويب ووسائل التواصل' },
    { icon: PieChart, en: 'Data Visualization', ar: 'تصور البيانات' },
    { icon: Zap, en: 'Process Optimization', ar: 'تحسين العمليات' },
    { icon: UsersRound, en: 'Team Leadership', ar: 'قيادة الفريق' },
    { icon: CheckCircle, en: 'Decision Making', ar: 'اتخاذ القرار' },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
          {t('Skills & Expertise', 'المهارات والخبرات')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('A blend of business strategy, marketing insight, and data-driven decision making', 'مزيج من استراتيجية الأعمال، الرؤية التسويقية، واتخاذ القرارات المستندة إلى البيانات')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <skill.icon className="h-10 w-10 mx-auto mb-3 text-primary group-hover:text-accent transition-colors duration-300" />
              <p className="font-semibold text-sm">{t(skill.en, skill.ar)}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
