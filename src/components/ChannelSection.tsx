import { Youtube, ExternalLink, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const ChannelSection = () => {
  const { t } = useLanguage();

  const topics = [
    { en: 'Business', ar: 'البيزنس' },
    { en: 'Marketing', ar: 'التسويق' },
    { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
    { en: 'Small Business Growth', ar: 'تطوير المشاريع الصغيرة' },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 text-center border-2 hover:border-primary/40 transition-all duration-300 animate-fade-in">
            <div className="p-4 bg-red-500/10 rounded-full w-fit mx-auto mb-6">
              <Youtube className="h-12 w-12 text-red-500" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gradient-primary">
              {t('Mohandes Business Channel', 'قناة مهندس بيزنس')}
            </h2>
            
            <p className="text-muted-foreground mb-6">
              {t('Specialized content in:', 'محتوى متخصص في:')}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {topics.map((topic, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {t(topic.en, topic.ar)}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white" asChild>
                <a href="https://youtube.com/@bizeng.alielhadi" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  {t('Visit Channel', 'زيارة القناة')}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="https://t.me/bizeng_alielhadi" target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2 h-5 w-5" />
                  {t('Join Telegram', 'الانضمام لقناة التليجرام')}
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChannelSection;
