const BASE_URL = import.meta.env.VITE_SITE_URL || 'https://abrillantadospuldc.com'

export const seoConfig = {
  home: {
    title: 'Pulidor de Suelos en Sevilla y Aljarafe | Abrillantados Puld-C',
    description: 'Restauración, cristalizado y abrillantado de suelos en Sevilla: mármol, terrazo, barro cocido, granito y hormigón impreso. Sellado de juntas, mantenimiento y brillo espejo. Triana, Nervión, Aljarafe y provincia. 25 años de experiencia, presupuesto sin compromiso.',
    keywords: 'pulidor de suelos Sevilla, cristalizado diamantado sellado juntas, mantenimiento comunidades, abrillantado económico Sevilla, mármol terrazo gres porcelánico Triana Nervión Aljarafe',
    canonical: BASE_URL + '/',
  },
  about: {
    title: 'Pulido de suelo en Aljarafe y Sevilla | Comunidades, Oficinas, Suelos Históricos | Pul D.C',
    description: 'Restauración y cristalizado de suelos en Aljarafe: Espartinas, Tomares, Mairena del Aljarafe, Sanlúcar la Mayor, Palomares, Almensilla, Bormujos, Sevilla. Comunidades de vecinos, oficinas y suelos históricos. Eliminación de arañazos, brillo espejo y método sin polvo.',
    keywords: 'restauración suelos Aljarafe, cristalizado Espartinas Tomares Mairena, sellado juntas terrazo, brillo espejo mármol, comunidades vecinos Sevilla',
    canonical: BASE_URL + '/sobre-nosotros',
  },
  gallery: {
    title: 'Proyectos de Pulido | Galería Pul D.C - Dos Hermanas',
    description: 'Galería de trabajos de restauración: mármol, terrazo, granito, hormigón impreso y gres porcelánico. Cristalizado, pulido diamantado y acabados en brillo espejo en Dos Hermanas, Sevilla y provincia.',
    keywords: 'proyectos restauración mármol, cristalizado terrazo, pulido diamantado hormigón, galería suelos Sevilla',
    canonical: BASE_URL + '/proyectos',
  },
  contact: {
    title: 'Contacto | Pul D.C - Presupuesto sin compromiso',
    description: 'Contacta con Pul D.C. Restauración y cristalizado en Dos Hermanas, Utrera, Alcalá, Sevilla, Mairena del Alcor. Llámanos o WhatsApp para presupuesto.',
    keywords: 'contacto restauración suelos Dos Hermanas, presupuesto cristalizado Sevilla',
    canonical: BASE_URL + '/contacto',
  },
  landingMarmol: {
    title: 'Pulido profesional de mármol en Dos Hermanas | Pul D.C',
    description: 'Especialistas en pulido y abrillantado de mármol de alto nivel en Dos Hermanas. Resultados duraderos, sin polvo y con garantía profesional. 25 años de experiencia.',
    keywords: 'pulido mármol profesional Dos Hermanas, abrillantado mármol Sevilla, restauración suelos mármol',
    canonical: BASE_URL + '/pulido-marmol-dos-hermanas',
  },
  landingPremium: {
    title: 'Abrillantado profesional de suelos de mármol en Sevilla | Pul D.C',
    description: 'Recuperamos mármoles deteriorados con técnicas profesionales. Servicio premium para viviendas exigentes en Sevilla y provincia.',
    keywords: 'abrillantado profesional mármol Sevilla, pulido suelos premium, restauración mármol alto valor',
    canonical: BASE_URL + '/abrillantado-profesional-sevilla',
  },
}

export const siteData = {
  name: 'Pulidos y Abrillantados Pul D.C',
  description: 'Restauración y cristalizado de suelos en Sevilla. Mármol, terrazo, barro cocido, granito, hormigón impreso y gres porcelánico. Sellado de juntas, brillo espejo y mantenimiento. Triana, Nervión y Aljarafe.',
  url: BASE_URL,
  image: BASE_URL + '/images/puvicor2.png',
  locale: 'es_ES',
}
