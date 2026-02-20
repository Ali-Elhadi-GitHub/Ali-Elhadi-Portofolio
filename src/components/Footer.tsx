import { Heart, MessageCircle, Facebook, Instagram, Send, Music, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/201111245487' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/bizeng.alielhadi' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/bizeng_alielhadi' },
    { icon: Send, label: 'Telegram', href: 'https://t.me/bizeng_alielhadi' },
    { icon: Music, label: 'TikTok', href: 'https://tiktok.com/@bizeng_alielhadi' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/bizeng-alielhadi' },
    { icon: Twitter, label: 'X', href: 'https://x.com/bizeng_ali' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@bizeng.alielhadi' },
  ];
  
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-6">
              {t('Connect With Me', 'تواصل معي')}
            </h3>
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

          {/* Divider */}
          <div className="border-t border-primary-foreground/20"></div>

          {/* Copyright */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <p className="text-sm opacity-90">
                © {new Date().getFullYear()} {t('Ali Elhadi', 'مهندس بيزنس - علي الهادي')} 🇵🇸 · {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
