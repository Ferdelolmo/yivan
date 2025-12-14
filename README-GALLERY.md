# Guía para Añadir Fotos a la Galería

## Cómo añadir nuevas obras de arte

### 1. Añadir las imágenes
1. Coloca las nuevas imágenes en la carpeta `src/assets/`
2. Usa nombres descriptivos, por ejemplo: `escultura-bronce-2024.jpg`

### 2. Editar la galería
Abre el archivo `src/components/GallerySection.tsx` y:

1. **Importar la nueva imagen** (líneas 5-8):
```typescript
import nuevaImagen from '@/assets/escultura-bronce-2024.jpg';
```

2. **Añadir la obra al array** (líneas 22-51):
```typescript
{
  id: 5, // Incrementar el ID
  title: 'Nombre de la Obra',
  category: 'metal', // metal, stone, wood, mixed
  image: nuevaImagen,
  year: '2024'
}
```

### 3. Categorías disponibles
- `metal` - Esculturas de metal
- `stone` - Esculturas de piedra 
- `wood` - Esculturas de madera
- `mixed` - Materiales mixtos

### 4. Formato recomendado de imágenes
- **Formato**: JPG o PNG
- **Resolución**: Mínimo 1200px de ancho
- **Aspecto**: 4:3 (horizontal) funciona mejor
- **Peso**: Optimizar para web (< 500KB si es posible)

### 5. Ejemplo completo
```typescript
// 1. Importar
import esculturaBronce from '@/assets/escultura-bronce-2024.jpg';

// 2. Añadir al array artworks
{
  id: 5,
  title: 'Resonancia en Bronce',
  category: 'metal',
  image: esculturaBronce,
  year: '2024'
}
```

### 6. Idiomas
Los títulos de las obras están hardcodeados en español. Si quieres que sean multilingües, tendrás que añadir las traducciones al archivo `src/hooks/useLanguage.tsx`.

## Estructura de archivos
```
src/
├── assets/           # Todas las imágenes aquí
├── components/
│   └── GallerySection.tsx  # Archivo principal a editar
└── hooks/
    └── useLanguage.tsx     # Para traducciones
```