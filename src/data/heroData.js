// Hero: 4 verticales (layout split) + 4 apaisadas (layout full)
// Para SEO visual: renombrar archivos en public/images/hero/ según IMAGES_SEO.md

export const heroVerticalImages = [
  { src: '/images/hero/vertical1.jpg', alt: 'Resultado de abrillantado de mármol en una vivienda de Tomares, Aljarafe' },
  { src: '/images/hero/vertical2.jpg', alt: 'Cristalizado de terrazo en portal de comunidad en Mairena del Aljarafe' },
  { src: '/images/hero/vertical3.jpg', alt: 'Suelo restaurado en brillo espejo en chalet de Bormujos, Sevilla' },
  { src: '/images/hero/vertical4.jpg', alt: 'Pulido y abrillantado profesional en vivienda de Espartinas, Aljarafe' },
]

export const heroLandscapeImages = [
  { src: '/images/hero/1.webp', alt: 'Trabajo de restauración de suelos en Gines, zona metropolitana de Sevilla' },
  { src: '/images/hero/2.webp', alt: 'Resultado de cristalizado en una vivienda de Castilleja de la Cuesta' },
  { src: '/images/hero/4.jpg', alt: 'Abrillantado de terrazo en comunidad de vecinos en Nervión, Sevilla' },
  { src: '/images/hero/5.jpg', alt: 'Suelo de mármol restaurado en Triana, Sevilla capital' },
]

// Rutas solo (compatibilidad si algo usa .src directo como string)
export const heroVerticalPaths = heroVerticalImages.map((i) => i.src)
export const heroLandscapePaths = heroLandscapeImages.map((i) => i.src)
