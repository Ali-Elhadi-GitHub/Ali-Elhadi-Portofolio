import { Heart } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <p className="text-sm">
              © {new Date().getFullYear()} Ali Elhadi. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm opacity-90">
            <span>{t('Built with', 'بني بـ')}</span>
            <Heart className="h-4 w-4 fill-current text-accent" />
            <span>{t('using', 'باستخدام')}</span>
            <a 
              href="https://lovable.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold hover:text-accent transition-colors"
            >
              Lovable
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
