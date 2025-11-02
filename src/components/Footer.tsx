import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <p className="text-sm">
              © {new Date().getFullYear()} Ali Elhadi. All rights reserved.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm opacity-90">
            <span>Built with</span>
            <Heart className="h-4 w-4 fill-current text-accent" />
            <span>using</span>
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
