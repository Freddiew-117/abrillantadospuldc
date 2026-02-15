const BASE_URL = import.meta.env.VITE_SITE_URL || 'https://abrillantadospuldc.com'

export const seoConfig = {
  home: {
    title: 'Pulido profesional de mármol en Dos Hermanas | Pul D.C',
    description: 'Pulidores profesionales de suelos en Dos Hermanas, Sevilla. Especialistas en mármol, terrazo, granito y hormigón. Pulidos sin polvo, presupuestos sin compromiso. +34 615 43 49 56',
    keywords: 'pulidos suelos Dos Hermanas, abrillantado mármol Sevilla, restauración suelos mármol, pulido terrazo, granito, hormigón, sin polvo, profesionales',
    canonical: BASE_URL + '/',
  },
  about: {
    title: 'Sobre Nosotros | Pulidos Pul D.C - Dos Hermanas, Sevilla',
    description: 'Pul D.C: más de 30 años de experiencia en pulido de suelos. Máquinas profesionales, pulidos sin polvo y acabados premium en Dos Hermanas y Sevilla.',
    keywords: 'pulidores profesionales Sevilla, maquinaria pulido suelos, experiencia pulido mármol',
    canonical: BASE_URL + '/sobre-nosotros',
  },
  gallery: {
    title: 'Proyectos de Pulido | Galería Pul D.C - Dos Hermanas',
    description: 'Galería de trabajos de pulido de mármol, terrazo, granito y hormigón. Acabados profesionales en Dos Hermanas, Sevilla y provincia.',
    keywords: 'proyectos pulido mármol, galería abrillantado suelos, trabajos pulido Sevilla',
    canonical: BASE_URL + '/proyectos',
  },
  contact: {
    title: 'Contacto | Pul D.C - Presupuesto sin compromiso',
    description: 'Contacta con Pul D.C. Pulidos en Dos Hermanas, Utrera, Alcalá, Sevilla, Mairena del Alcor. Llámanos o WhatsApp para presupuesto.',
    keywords: 'contacto pulidores Dos Hermanas, presupuesto pulido suelos Sevilla',
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
  description: 'Pulidores profesionales de suelos en Dos Hermanas, Sevilla. Especialistas en mármol, terrazo, granito y hormigón.',
  url: BASE_URL,
  image: BASE_URL + '/images/puvicor2.png',
  locale: 'es_ES',
}
