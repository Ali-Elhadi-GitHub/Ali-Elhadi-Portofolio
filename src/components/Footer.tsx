import { MessageCircle, Facebook, Send, Music, Youtube } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/201111245487' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@bizeng.alielhadi' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/bizeng.alielhadi' },
    { icon: Send, label: 'Telegram', href: 'https://t.me/bizeng_alielhadi' },
    { icon: Music, label: 'TikTok', href: 'https://tiktok.com/@bizeng_alielhadi' },
  ];

  const navLinks = [
    { to: '/', en: 'Home', ar: 'الرئيسية' },
    { to: '/cv', en: 'CV', ar: 'السيرة الذاتية' },
    { to: '/portfolio', en: 'Portfolio', ar: 'الأعمال' },
    { to: '/contact', en: 'Contact', ar: 'تواصل' },
  ];
  
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Link to="/" className="text-lg font-bold text-gradient-primary">
                {t('Ali Elhadi', 'علي الهادي')} 🇵🇸
              </Link>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {t('SaaS Growth Specialist helping founders scale.', 'خبير نمو SaaS يساعد المؤسسين على التوسع.')}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold mb-3">{t('Navigation', 'التنقل')}</p>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t(link.en, link.ar)}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-3">{t('Connect', 'تواصل')}</p>
              <div className="flex gap-2">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {t('Ali Elhadi', 'علي الهادي')} 🇵🇸 · {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
