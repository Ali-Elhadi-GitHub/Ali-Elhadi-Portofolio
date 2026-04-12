import { Download, MapPin, Mail, Phone, Briefcase, GraduationCap, Wrench, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollToTop from '@/components/ScrollToTop';

const CV = () => {
  const { t } = useLanguage();

  const skills = [
    { category: t('SaaS & Growth', 'SaaS والنمو'), items: ['B2B SaaS Sales', 'Growth Strategy', 'Customer Acquisition', 'Market Research'] },
    { category: t('CRM & Sales', 'CRM والمبيعات'), items: ['CRM Setup', 'Sales Pipeline', 'Lead Generation', 'Deal Closing'] },
    { category: t('Content & Editing', 'المحتوى والمونتاج'), items: ['Video Editing', 'Content Strategy', 'Social Media', 'Voice Over'] },
    { category: t('AI & Tools', 'الذكاء الاصطناعي والأدوات'), items: ['AI Tools', 'Prompt Engineering', 'ChatGPT', 'Automation'] },
  ];

  const tools = [
    'Notion', 'HubSpot', 'Salesforce', 'CapCut', 'Premiere Pro',
    'Canva', 'ChatGPT', 'Midjourney', 'Google Workspace', 'Trello',
    'Easy Orders', 'Meta Business Suite', 'TikTok Ads',
  ];

  const experience = [
    {
      en: { title: 'Freelance SaaS Growth Consultant', company: 'Self-employed', period: '2023 – Present', points: ['Helped SaaS founders acquire first 10 customers', 'Built sales pipelines and CRM systems', 'Managed social media for multiple brands'] },
      ar: { title: 'مستشار نمو SaaS مستقل', company: 'عمل حر', period: '2023 – الحالي', points: ['ساعدت مؤسسي SaaS في الحصول على أول 10 عملاء', 'بناء خطوط مبيعات وأنظمة CRM', 'إدارة السوشيال ميديا لعدة علامات تجارية'] },
    },
    {
      en: { title: 'Founder & Director', company: 'Bassera Bookstore', period: '2022 – Present', points: ['Built e-commerce presence from scratch', 'Content creation and brand identity', 'Customer acquisition and retention'] },
      ar: { title: 'مؤسس ومدير', company: 'مكتبة بصيرة', period: '2022 – الحالي', points: ['بناء تواجد إلكتروني من الصفر', 'إنشاء محتوى وهوية بصرية', 'اكتساب العملاء والاحتفاظ بهم'] },
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <ScrollAnimation animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-sm font-medium text-primary mb-2">{t('CURRICULUM VITAE', 'السيرة الذاتية')}</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                  {t('Ali Elhadi', 'علي الهادي')} 🇵🇸
                </h1>
                <p className="text-lg text-muted-foreground">
                  {t('SaaS Growth Specialist | Video Editor | Social Media Manager', 'خبير نمو SaaS | مونتير فيديو | مدير سوشيال ميديا')}
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{t('Zagazig, Egypt', 'الزقازيق، مصر')}</span>
                  <a href="mailto:alielhadi.contact@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors"><Mail className="h-3.5 w-3.5" />alielhadi.contact@gmail.com</a>
                  <a href="tel:+201111245487" className="flex items-center gap-1 hover:text-primary transition-colors"><Phone className="h-3.5 w-3.5" />01111245487</a>
                </div>
              </div>
              <Button size="lg" className="h-12 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 shrink-0" asChild>
                <a href="/Ali_Elhadi_CV.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  {t('Download CV', 'تحميل السيرة الذاتية')}
                </a>
              </Button>
            </div>
          </ScrollAnimation>

          {/* About */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <Card className="p-6 mb-8 border-border">
              <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                {t('About Me', 'نبذة عني')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  'SaaS growth specialist with hands-on experience in B2B sales, CRM setup, and digital marketing. I help SaaS founders go from 0 to 10 customers, then build scalable growth systems. Also skilled in video editing, social media management, and AI tools training.',
                  'خبير نمو SaaS مع خبرة عملية في مبيعات B2B وإعداد CRM والتسويق الرقمي. أساعد مؤسسي SaaS على الانتقال من 0 إلى 10 عملاء، ثم بناء أنظمة نمو قابلة للتوسع. أيضًا ماهر في مونتاج الفيديو وإدارة السوشيال ميديا وتدريب أدوات الذكاء الاصطناعي.'
                )}
              </p>
            </Card>
          </ScrollAnimation>

          {/* Skills */}
          <ScrollAnimation animation="fade-up" delay={150}>
            <div className="mb-8">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                {t('Skills', 'المهارات')}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {skills.map((group, i) => (
                  <Card key={i} className="p-5 border-border">
                    <h3 className="font-semibold text-sm text-primary mb-3">{group.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, j) => (
                        <span key={j} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Experience */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="mb-8">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                {t('Experience', 'الخبرات')}
              </h2>
              <div className="space-y-4">
                {experience.map((exp, i) => {
                  const content = t(exp.en, exp.ar) as typeof exp.en;
                  return (
                    <Card key={i} className="p-5 border-border">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                        <div>
                          <h3 className="font-bold">{content.title}</h3>
                          <p className="text-sm text-muted-foreground">{content.company}</p>
                        </div>
                        <span className="text-xs text-primary font-medium mt-1 md:mt-0">{content.period}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {content.points.map((point, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>

          {/* Education */}
          <ScrollAnimation animation="fade-up" delay={250}>
            <div className="mb-8">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                {t('Education', 'التعليم')}
              </h2>
              <Card className="p-5 border-border">
                <h3 className="font-bold">{t('B.Sc. Computer & Information Sciences', 'بكالوريوس علوم الحاسب والمعلومات')}</h3>
                <p className="text-sm text-muted-foreground">{t('Zagazig University', 'جامعة الزقازيق')}</p>
              </Card>
            </div>
          </ScrollAnimation>

          {/* Tools */}
          <ScrollAnimation animation="fade-up" delay={300}>
            <div>
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                {t('Tools I Use', 'الأدوات التي أستخدمها')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <span key={i} className="px-4 py-2 text-sm rounded-xl bg-card border border-border font-medium hover:border-primary/30 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
};

export default CV;
