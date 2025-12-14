import { useLanguage } from '@/hooks/useLanguage';
import { Instagram, Mail } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold hero-text mb-2">
              Iván Gómez Aparicio
            </h3>
            <p className="text-muted-foreground">
              Escultor Contemporáneo
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://instagram.com/ivangomezescultor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
            >
              <Instagram className="h-5 w-5" />
              <span>@ivangomezescultor</span>
            </a>
            <a
              href={`mailto:${t('contact.email')}`}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
            >
              <Mail className="h-5 w-5" />
              <span>{t('contact.email')}</span>
            </a>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Iván Gómez Aparicio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}