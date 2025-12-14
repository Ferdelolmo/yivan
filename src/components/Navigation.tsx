import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useNavigate, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.biography', href: '/biography' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.contact', href: '#contact' }
  ];

  const handleNavigation = (href: string) => {
    setIsOpen(false);

    if (href.startsWith('/')) {
      navigate(href);
      // Scroll to top when navigating to a new page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first, then scroll
        navigate('/', { state: { scrollTo: href } });
      } else {
        // If already on home page, just scroll
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle scroll after navigation from another page
  useEffect(() => {
    if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
      const scrollToId = (location.state as any).scrollTo;
      // Slight delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(scrollToId);
        element?.scrollIntoView({ behavior: 'smooth' });
        // Clear state to avoid scrolling on subsequent renders (though state is per-navigation)
        navigate('/', { replace: true, state: {} });
      }, 100);
    }
  }, [location, navigate]);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border subtle-shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="font-display text-xl font-semibold hero-text cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            Iván Gómez Aparicio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.href)}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {t(item.key)}
              </button>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'es' | 'en' | 'fr' | 'ru')}
                className="bg-transparent border border-border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="ru">RU</option>
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-accent transition-smooth"
                >
                  {t(item.key)}
                </button>
              ))}
              <div className="flex items-center px-3 py-2 space-x-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'es' | 'en' | 'fr' | 'ru')}
                  className="bg-transparent border border-border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="ru">Русский</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}