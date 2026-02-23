import { Play, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import videoThumbnail from '@/assets/video-thumbnail.png';

const IntroVideoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
          {t('Get to Know Me in a Minute', 'تعرف عليّ في دقيقة')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t(
            'Watch this short video to learn about my services and how I can help your project',
            'شاهد هذا الفيديو القصير لتتعرف على خدماتي وكيف يمكنني مساعدة مشروعك'
          )}
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl group animate-fade-in">
            <div className="aspect-video bg-muted flex items-center justify-center relative">
              <img
                src={videoThumbnail}
                alt={t('Intro Video Thumbnail', 'صورة مصغرة للفيديو التعريفي') as string}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
                <div className="p-5 bg-primary rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Play className="h-10 w-10 text-primary-foreground fill-primary-foreground" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              asChild
            >
              <a
                href="https://wa.me/201111245487?text=مرحباً، شاهدت الفيديو التعريفي وأريد التواصل"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('Contact Now', 'تواصل الآن')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroVideoSection;
