import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const reviews = [
    {
      en: {
        name: 'Dr. Ashraf Kotob',
        role: 'Video Editing, Voice Over & Social Media Management Client',
        text: 'Good luck, God willing. Hard-working and talented.',
      },
      ar: {
        name: 'د. أشرف قطب',
        role: 'عميل مونتاج وتعليق صوتي وإدارة سوشيال ميديا',
        text: 'بالتوفيق إن شاء الله، شاطر ومجتهد.',
      },
      rating: 5,
    },
    {
      en: {
        name: 'Bassera Bookstore Customer',
        role: 'Book Lover',
        text: 'Excellent service and amazing book collection. The shopping experience was smooth and professional.',
      },
      ar: {
        name: 'عميل مكتبة بصيرة',
        role: 'محب للكتب',
        text: 'خدمة ممتازة ومجموعة كتب رائعة. تجربة الشراء كانت سلسة واحترافية.',
      },
      rating: 5,
      source: 'https://www.facebook.com/share/p/17VguoCNuH/',
    },
    {
      en: {
        name: 'Verified Customer',
        role: 'E-commerce Client',
        text: 'Professional handling and great attention to customer needs. Highly recommend this service!',
      },
      ar: {
        name: 'عميل موثق',
        role: 'عميل تجارة إلكترونية',
        text: 'تعامل احترافي واهتمام كبير باحتياجات العملاء. أنصح بالخدمة بشدة!',
      },
      rating: 5,
      source: 'https://www.facebook.com/share/p/17g99a3gNX/',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
          {t('What Clients Say', 'ماذا يقول العملاء')}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {t('Real feedback from clients', 'تعليقات حقيقية من العملاء')}
        </p>

        <div className="max-w-4xl mx-auto relative">
          <Card className="p-8 md:p-12 border-2 hover:shadow-2xl transition-all duration-500 animate-fade-in">
            <Quote className="h-12 w-12 text-accent/20 mb-6" />
            
            <div className="flex mb-4">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>

            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-foreground/90">
              "{(t(reviews[currentIndex].en, reviews[currentIndex].ar) as any).text}"
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-lg">{(t(reviews[currentIndex].en, reviews[currentIndex].ar) as any).name}</p>
                <p className="text-sm text-muted-foreground">{(t(reviews[currentIndex].en, reviews[currentIndex].ar) as any).role}</p>
              </div>
              {reviews[currentIndex].source && (
                <a
                  href={reviews[currentIndex].source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  {t('View on Facebook', 'عرض على فيسبوك')}
                </a>
              )}
            </div>
          </Card>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
