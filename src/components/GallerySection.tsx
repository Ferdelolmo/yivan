import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import stoneImage from '@/assets/stone-detail.jpg';
import woodImage from '@/assets/wood-sculpture.jpg';
import mixedImage from '@/assets/mixed-media.jpg';
import heroImage from '@/assets/hero-sculpture.jpg';

export function GallerySection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', label: t('gallery.all') || 'Todas' },
    { key: 'metal', label: t('gallery.metal') },
    { key: 'stone', label: t('gallery.stone') },
    { key: 'wood', label: t('gallery.wood') },
    { key: 'mixed', label: t('gallery.mixed') }
  ];

  const artworks = [
    {
      id: 1,
      title: 'Resonancia Metálica',
      category: 'metal',
      image: heroImage,
      year: '2024'
    },
    {
      id: 2,
      title: 'Piedra Ancestral',
      category: 'stone',
      image: stoneImage,
      year: '2023'
    },
    {
      id: 3,
      title: 'Madera Viviente',
      category: 'wood',
      image: woodImage,
      year: '2024'
    },
    {
      id: 4,
      title: 'Fusión Contemporánea',
      category: 'mixed',
      image: mixedImage,
      year: '2024'
    }
  ];

  const filteredArtworks = activeCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 hero-text">
            {t('gallery.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={activeCategory === category.key ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.key)}
              className="transition-smooth"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Slideshow */}
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {filteredArtworks.map((artwork) => (
                <CarouselItem key={artwork.id}>
                  <div className="relative group animate-fade-in">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg subtle-shadow">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="font-display text-3xl font-bold mb-2">
                          {artwork.title}
                        </h3>
                        <p className="text-lg opacity-90">{artwork.year}</p>
                        <div className="mt-2 text-sm opacity-75 capitalize">
                          {categories.find(cat => cat.key === artwork.category)?.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}