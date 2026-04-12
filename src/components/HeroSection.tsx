import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroProfile from '@/assets/ali-profile.png';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/3" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-[100px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <ScrollAnimation animation="fade-right" delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {t('Available for Projects', 'متاح للمشاريع')}
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-right" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                {t('I help SaaS founders grow from', 'أساعد مؤسسي SaaS على النمو من')}{' '}
                <span className="text-gradient-primary">{t('0 to 10 customers', '0 إلى 10 عملاء')}</span>
                {t(', then scale.', '، ثم التوسع.')}
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-right" delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                {t(
                  'From Product → CRM → Pipeline → Sales. End-to-end growth strategy for SaaS startups.',
                  'من المنتج → CRM → Pipeline → المبيعات. استراتيجية نمو شاملة لشركات SaaS الناشئة.'
                )}
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25" asChild>
                  <Link to="/portfolio">
                    {t('View Portfolio', 'عرض الأعمال')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 border-border hover:bg-muted" asChild>
                  <a href="https://wa.me/201111245487?text=Hi%20Ali%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t('Contact Me', 'تواصل معي')}
                  </a>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="flex items-center gap-8 pt-4">
                {[
                  { value: '50+', label: t('Projects', 'مشروع') },
                  { value: '30+', label: t('Clients', 'عميل') },
                  { value: '3+', label: t('Years', 'سنوات') },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="scale" delay={200}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl scale-90" />
              <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                <img
                  src={heroProfile}
                  alt={t('Ali Elhadi - SaaS Growth Specialist', 'علي الهادي - خبير نمو SaaS') as string}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-lg font-bold text-foreground">{t('Ali Elhadi', 'علي الهادي')} 🇵🇸</p>
                  <p className="text-sm text-muted-foreground">{t('SaaS Growth Specialist', 'خبير نمو SaaS')}</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
