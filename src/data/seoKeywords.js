const BASE_URL = import.meta.env.VITE_SITE_URL || 'https://abrillantadospuldc.com'

/** Texto OG por defecto (comparte keywords locales sin repetición excesiva) */
export const defaultOgImageAlt =
  'Pulidores de suelo en Sevilla: pulido, abrillantado y cristalizado de mármol y terrazo — Pul D.C'

export const seoConfig = {
  home: {
    title: 'Pulidores de suelo en Sevilla | Pulido y abrillantado | Pul D.C',
    description:
      'Pulidores de suelo en Sevilla y Aljarafe: pulido diamantado, cristalizado y abrillantado de mármol, terrazo, barro cocido y hormigón. Sellado de juntas, comunidades y brillo espejo. Triana, Nervión, Dos Hermanas. Presupuesto sin compromiso.',
    keywords:
      'pulidores de suelo Sevilla, pulido de suelos Sevilla, abrillantado suelos Sevilla, pulidor mármol Sevilla, cristalizado terrazo Sevilla, pulido diamantado Aljarafe, sellado juntas comunidades, mantenimiento suelos Triana Nervión',
    canonical: BASE_URL + '/',
  },
  about: {
    title: 'Pulido de suelos en Aljarafe y Sevilla | Empresa Pul D.C',
    description:
      'Empresa de pulido de suelos en Sevilla y el Aljarafe: restauración, cristalizado y pulido diamantado para comunidades, oficinas y suelos históricos. Espartinas, Tomares, Mairena, Bormujos, Dos Hermanas. Método sin polvo.',
    keywords:
      'pulido suelos Aljarafe, empresa pulidora suelos Sevilla, restauración suelos comunidades Sevilla, cristalizado terrazo Aljarafe',
    canonical: BASE_URL + '/sobre-nosotros',
  },
  gallery: {
    title: 'Proyectos: pulido y abrillantado de suelos en Sevilla | Pul D.C',
    description:
      'Galería de trabajos de pulido de suelos en Sevilla y provincia: mármol, terrazo, granito, hormigón impreso y gres. Cristalizado, pulido diamantado y acabados en brillo espejo antes y después.',
    keywords:
      'proyectos pulido suelos Sevilla, antes después mármol terrazo, galería abrillantado Sevilla',
    canonical: BASE_URL + '/proyectos',
  },
  contact: {
    title: 'Contacto pulidores de suelo Sevilla | Presupuesto | Pul D.C',
    description:
      'Contacta con pulidores de suelo en Sevilla y provincia. Presupuesto sin compromiso por teléfono o WhatsApp. Dos Hermanas, Utrera, Alcalá de Guadaíra, Mairena del Alcor y capital.',
    keywords:
      'contacto pulidores suelos Sevilla, presupuesto pulido mármol Sevilla, teléfono abrillantado terrazo',
    canonical: BASE_URL + '/contacto',
  },
  landingMarmol: {
    title: 'Pulido profesional de mármol en Dos Hermanas y Sevilla | Pul D.C',
    description:
      'Pulido y abrillantado profesional de mármol en Dos Hermanas y Sevilla capital. Eliminación de arañazos, brillo espejo y sellado de juntas. Sin polvo, garantía y más de 25 años de experiencia.',
    keywords:
      'pulido mármol Dos Hermanas, abrillantado mármol Sevilla, restauración suelos mármol profesional',
    canonical: BASE_URL + '/pulido-marmol-dos-hermanas',
  },
  landingPremium: {
    title: 'Abrillantado profesional de suelos en Sevilla | Mármol | Pul D.C',
    description:
      'Servicio premium de abrillantado y pulido de suelos de mármol en Sevilla para viviendas y empresas. Recuperamos mármoles deteriorados con técnicas profesionales y acabado duradero.',
    keywords:
      'abrillantado profesional mármol Sevilla, pulido suelos premium Sevilla, restauración mármol alta gama',
    canonical: BASE_URL + '/abrillantado-profesional-sevilla',
  },
}

export const siteData = {
  name: 'Pulidos y Abrillantados Pul D.C',
  description:
    'Pulidores de suelo en Sevilla y provincia: pulido, abrillantado y cristalizado de mármol, terrazo, barro cocido y hormigón. Sellado de juntas y mantenimiento de comunidades en capital y Aljarafe.',
  url: BASE_URL,
  image: BASE_URL + '/images/puvicor2.png',
  locale: 'es_ES',
  /** Región principal para búsqueda local */
  regionName: 'Andalucía',
}
