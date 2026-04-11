import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useState, useEffect, useCallback } from 'react';

const ReviewsSection = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      en: { name: 'Dr. Ashraf Kotob', role: 'Video Editing, Voice Over & Social Media Management Client', text: 'Good luck, God willing. Skilled and hardworking.' },
      ar: { name: 'دكتور أشرف قطب', role: 'عميل مونتاج وتعليق صوتي وإدارة سوشيال ميديا', text: 'بالتوفيق إن شاء الله، شاطر ومجتهد.' },
      rating: 5,
    },
    {
      en: { name: 'Ahmed Hassan', role: 'E-commerce Store Owner', text: 'Ali helped me build my online store from scratch. Very professional and detail-oriented. Highly recommended!' },
      ar: { name: 'أحمد حسن', role: 'صاحب متجر إلكتروني', text: 'علي ساعدني أبني متجري الإلكتروني من الصفر. محترف جدًا ودقيق في التفاصيل. أنصح بالتعامل معه!' },
      rating: 5,
    },
    {
      en: { name: 'Sara Mohamed', role: 'Content Creator', text: 'The video editing quality exceeded my expectations. Fast delivery and great communication throughout the project.' },
      ar: { name: 'سارة محمد', role: 'صانعة محتوى', text: 'جودة المونتاج فاقت توقعاتي. تسليم سريع وتواصل ممتاز طوال المشروع.' },
      rating: 5,
    },
    {
      en: { name: 'Mohamed Ali', role: 'Startup Founder', text: 'Ali built our entire social media presence. Content strategy, design, and management — all handled professionally.' },
      ar: { name: 'محمد علي', role: 'مؤسس شركة ناشئة', text: 'علي بنى تواجدنا الرقمي بالكامل. استراتيجية المحتوى والتصميم والإدارة — كلها تمت باحتراف.' },
      rating: 5,
    },
    {
      en: { name: 'Fatima Khalil', role: 'Online Educator', text: 'Working with Ali transformed my online course marketing. He understands both tech and business perfectly.' },
      ar: { name: 'فاطمة خليل', role: 'معلمة أونلاين', text: 'التعاون مع علي غيّر تسويق كورساتي بالكامل. يفهم التقنية والبيزنس بشكل ممتاز.' },
      rating: 5,
    },
  ];

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const handleManualNav = (fn: () => void) => {
    setIsAutoPlaying(false);
    fn();
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
            {t('Client Reviews', 'آراء العملاء')}
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t('Real feedback from clients I worked with', 'تقييمات حقيقية من عملاء تعاملت معهم')}
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="scale">
          <div className="max-w-3xl mx-auto relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => handleManualNav(prev)}
              className="absolute top-1/2 -translate-y-1/2 -start-4 md:-start-14 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border-2 border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronRight className="h-5 w-5 rtl:rotate-0 ltr:rotate-180" />
            </button>
            <button
              onClick={() => handleManualNav(next)}
              className="absolute top-1/2 -translate-y-1/2 -end-4 md:-end-14 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border-2 border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronLeft className="h-5 w-5 rtl:rotate-0 ltr:rotate-180" />
            </button>

            {/* Slider */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(${current * 100}%)` }}
              >
                {reviews.map((review, index) => {
                  const content = t(review.en, review.ar) as { name: string; role: string; text: string };
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <Card className="p-8 md:p-12 border-2 hover:shadow-2xl transition-all duration-500">
                        <Quote className="h-12 w-12 text-accent/20 mb-6" />
                        <div className="flex mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-foreground/90">
                          "{content.text}"
                        </p>
                        <div>
                          <p className="font-bold text-lg">{content.name}</p>
                          <p className="text-sm text-muted-foreground">{content.role}</p>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNav(() => setCurrent(index))}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === current ? 'w-8 bg-primary' : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ReviewsSection;
