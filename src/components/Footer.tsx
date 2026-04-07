import { MessageCircle, Facebook, Send, Music, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/201111245487' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@bizeng.alielhadi' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/bizeng.alielhadi' },
    { icon: Send, label: 'Telegram', href: 'https://t.me/bizeng_alielhadi' },
    { icon: Music, label: 'TikTok', href: 'https://tiktok.com/@bizeng_alielhadi' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/bizeng-alielhadi' },
    { icon: Twitter, label: 'X', href: 'https://x.com/bizeng_ali' },
  ];
  
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">
              {t('Ali Elhadi', 'علي الهادي')} 🇵🇸
            </h3>
            <p className="text-sm opacity-80 mb-6">
              {t(
                'SaaS Growth & B2B SaaS Sales — Helping founders grow from 0 to 10 customers, then scale',
                'نمو SaaS ومبيعات B2B — أساعد المؤسسين على النمو من 0 إلى 10 عملاء، ثم التوسع'
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-primary-foreground/10 hover:bg-accent rounded-lg transition-all duration-300 hover:scale-110"
                  title={social.label}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:text-accent-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-primary-foreground/20"></div>

          <div className="text-center">
            <p className="text-sm opacity-90">
              © {new Date().getFullYear()} {t('Ali Elhadi', 'علي الهادي')} 🇵🇸 · {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
