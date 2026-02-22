import { Play, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const IntroVideoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">
            {t('Get to Know Me in a Minute', 'تعرف عليّ في دقيقة')}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t('A short intro about who I am, what I offer, who I work with, and why I\'m different.', 'فيديو قصير عن من أنا، ماذا أقدم، لمن أعمل، ولماذا أختلف.')}
          </p>

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/20 shadow-xl mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto border-2 border-primary/30">
                  <Play className="h-10 w-10 text-primary ml-1" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {t('Intro video coming soon', 'الفيديو التعريفي قريباً')}
                </p>
              </div>
            </div>
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a
              href="https://wa.me/201111245487?text=مرحباً، أريد التواصل معك"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t('Contact Now', 'تواصل الآن')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntroVideoSection;
