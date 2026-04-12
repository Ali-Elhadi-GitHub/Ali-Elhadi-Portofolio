import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useState, useEffect, useCallback } from 'react';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      en: { name: 'Dr. Ashraf Kotob', role: 'Video Editing & Social Media Client', text: 'Skilled and hardworking. Always delivers high quality work on time.' },
      ar: { name: 'دكتور أشرف قطب', role: 'عميل مونتاج وسوشيال ميديا', text: 'شاطر ومجتهد. دائمًا يقدم عمل عالي الجودة في الوقت المحدد.' },
      rating: 5,
    },
    {
      en: { name: 'Ahmed Hassan', role: 'E-commerce Store Owner', text: 'Ali helped me build my online store from scratch. Very professional and detail-oriented.' },
      ar: { name: 'أحمد حسن', role: 'صاحب متجر إلكتروني', text: 'علي ساعدني أبني متجري الإلكتروني من الصفر. محترف جدًا ودقيق في التفاصيل.' },
      rating: 5,
    },
    {
      en: { name: 'Sara Mohamed', role: 'Content Creator', text: 'The video editing quality exceeded my expectations. Fast delivery and great communication.' },
      ar: { name: 'سارة محمد', role: 'صانعة محتوى', text: 'جودة المونتاج فاقت توقعاتي. تسليم سريع وتواصل ممتاز.' },
      rating: 5,
    },
    {
      en: { name: 'Mohamed Ali', role: 'Startup Founder', text: 'Ali built our entire social media presence. Strategy, design, and management — all professional.' },
      ar: { name: 'محمد علي', role: 'مؤسس شركة ناشئة', text: 'علي بنى تواجدنا الرقمي بالكامل. استراتيجية وتصميم وإدارة — كلها احترافية.' },
      rating: 5,
    },
    {
      en: { name: 'Fatima Khalil', role: 'Online Educator', text: 'Working with Ali transformed my course marketing. He understands tech and business perfectly.' },
      ar: { name: 'فاطمة خليل', role: 'معلمة أونلاين', text: 'التعاون مع علي غيّر تسويق كورساتي. يفهم التقنية والبيزنس بشكل ممتاز.' },
      rating: 5,
    },
  ];

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % reviews.length), [reviews.length]);
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length), [reviews.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const handleManualNav = (fn: () => void) => {
    setIsAutoPlaying(false);
    fn();
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2">{t('TESTIMONIALS', 'آراء العملاء')}</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              {t('What Clients Say', 'ماذا يقول العملاء')}
            </h2>
          </div>
        </ScrollAnimation>

        <div className="max-w-2xl mx-auto relative">
          <button
            onClick={() => handleManualNav(prev)}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-14 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleManualNav(next)}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-14 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {reviews.map((review, index) => {
                const content = t(review.en, review.ar) as { name: string; role: string; text: string };
                return (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card className="p-8 md:p-10 border-border">
                      <div className="flex mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground/90">
                        "{content.text}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">{content.name[0]}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{content.name}</p>
                          <p className="text-xs text-muted-foreground">{content.role}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNav(() => setCurrent(index))}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current ? 'w-8 bg-primary' : 'w-1.5 bg-muted-foreground/20 hover:bg-muted-foreground/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
