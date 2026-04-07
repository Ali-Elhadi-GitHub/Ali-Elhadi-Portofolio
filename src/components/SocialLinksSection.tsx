import { Youtube, MessageCircle, Facebook, Send, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const SocialLinksSection = () => {
  const { t } = useLanguage();

  const socials = [
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@bizeng.alielhadi', color: 'hover:bg-red-500 hover:text-white hover:border-red-500' },
    { icon: Send, label: t('Telegram Channel', 'قناة تليجرام'), href: 'https://t.me/bizeng_alielhadi', color: 'hover:bg-blue-500 hover:text-white hover:border-blue-500' },
    { icon: Send, label: t('Telegram Personal', 'تليجرام شخصي'), href: 'https://t.me/alielhadi', color: 'hover:bg-blue-400 hover:text-white hover:border-blue-400' },
    { icon: Music, label: 'TikTok', href: 'https://tiktok.com/@bizeng_alielhadi', color: 'hover:bg-foreground hover:text-background hover:border-foreground' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/bizeng.alielhadi', color: 'hover:bg-blue-600 hover:text-white hover:border-blue-600' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/201111245487', color: 'hover:bg-[hsl(142,70%,45%)] hover:text-white hover:border-[hsl(142,70%,45%)]' },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
          {t('Connect With Me', 'تواصل معي')}
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('Follow me on social media for tips on SaaS, business, and AI', 'تابعني على السوشيال ميديا لنصائح عن SaaS والبيزنس والذكاء الاصطناعي')}
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {socials.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              className={`gap-2 transition-all duration-300 ${social.color} animate-scale-in`}
              style={{ animationDelay: `${index * 0.08}s` }}
              asChild
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-5 w-5" />
                {social.label as string}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinksSection;
