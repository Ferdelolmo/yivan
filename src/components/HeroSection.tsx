import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToGallery = () => {
    const element = document.querySelector('#gallery');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_65%] bg-no-repeat"
        style={{ backgroundImage: 'url("https://i.imgur.com/ZOpK0kD.jpeg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/0 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 hero-text">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          {t('hero.subtitle')}
        </p>
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>

        <Button
          onClick={scrollToGallery}
          size="lg"
          className="elegant-shadow hover:shadow-lg transition-all duration-300 text-lg px-8 py-6"
        >
          {t('hero.cta')}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
}