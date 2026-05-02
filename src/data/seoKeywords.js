const BASE_URL = import.meta.env.VITE_SITE_URL || 'https://abrillantadospuldc.com'

/** Texto OG por defecto (comparte keywords locales sin repetición excesiva) */
export const defaultOgImageAlt =
  'Pulidores de suelo en Sevilla: pulido, abrillantado y cristalizado de mármol y terrazo — Pul D.C'

export const seoConfig = {
  home: {
    title: 'Pulidor de suelos en Sevilla | Casa, garaje, oficina y comunidades | Pul D.C',
    description:
      'Pulidor de suelos en Sevilla: pulido y abrillantado de mármol, terrazo, barro cocido y hormigón en casas, garajes, oficinas y comunidades de vecinos. Sevilla capital, Aljarafe, Dos Hermanas. Presupuesto sin compromiso.',
    keywords:
      'pulidor de suelo Sevilla, pulir suelo Sevilla, pulidores suelos Sevilla, pulir suelo casa Sevilla, pulir suelo garaje Sevilla, pulir suelo oficina Sevilla, pulir suelo comunidad vecinos Sevilla, abrillantado mármol Sevilla, cristalizado terrazo Sevilla, pulido diamantado hormigón',
    canonical: BASE_URL + '/',
  },
  about: {
    title: 'Empresa de pulido de suelos en Sevilla y Aljarafe | Pul D.C',
    description:
      'Empresa de pulidores de suelo en Sevilla y el Aljarafe: pulido y abrillantado para casas, garajes, oficinas, comunidades de vecinos y suelos históricos. Espartinas, Tomares, Mairena, Bormujos, Dos Hermanas. Método sin polvo.',
    keywords:
      'empresa pulidora suelos Sevilla, pulidor de suelo Aljarafe, restauración suelos comunidades Sevilla, cristalizado terrazo Aljarafe, pulir suelo casa habitada',
    canonical: BASE_URL + '/sobre-nosotros',
  },
  gallery: {
    title: 'Proyectos de pulido de suelos en Sevilla | Antes y después | Pul D.C',
    description:
      'Galería de proyectos de pulido y abrillantado de suelos en Sevilla y provincia: mármol, terrazo, granito, hormigón y gres. Casas, garajes, oficinas y comunidades de vecinos. Antes y después de cada trabajo.',
    keywords:
      'proyectos pulido suelos Sevilla, antes después mármol terrazo, galería abrillantado Sevilla, restauración garajes comunidades',
    canonical: BASE_URL + '/proyectos',
  },
  contact: {
    title: 'Contacto pulidor de suelos en Sevilla | Presupuesto sin compromiso | Pul D.C',
    description:
      'Contacta con pulidores de suelo en Sevilla y provincia. Presupuesto sin compromiso por teléfono o WhatsApp para pulir suelos en casa, garaje, oficina o comunidad de vecinos. Dos Hermanas, Utrera, Alcalá, Mairena del Alcor y capital.',
    keywords:
      'contacto pulidores suelos Sevilla, presupuesto pulido mármol Sevilla, teléfono abrillantado terrazo, pulir suelo Aljarafe presupuesto',
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
    title: 'Abrillantado profesional de suelos de mármol en Sevilla | Pul D.C',
    description:
      'Servicio premium de abrillantado y pulido de suelos de mármol en Sevilla para viviendas, oficinas y comunidades. Recuperamos mármoles deteriorados con técnicas profesionales y acabado duradero.',
    keywords:
      'abrillantado profesional mármol Sevilla, pulido suelos premium Sevilla, restauración mármol alta gama',
    canonical: BASE_URL + '/abrillantado-profesional-sevilla',
  },
  avisoLegal: {
    title: 'Aviso legal y política de privacidad | Pul D.C',
    description:
      'Aviso legal, política de privacidad y cookies de Pulidos y Abrillantados Pul D.C, pulidor de suelos en Sevilla.',
    canonical: BASE_URL + '/aviso-legal',
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
