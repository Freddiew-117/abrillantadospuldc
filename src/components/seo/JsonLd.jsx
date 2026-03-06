import { Helmet } from 'react-helmet-async'
import { siteData } from '@/data/seoKeywords'
import { googleBusiness } from '@/data/googleBusiness'

const PHONE_1 = '+34615434956'
const PHONE_2 = '+34679478500'

// Dirección para Schema.org (sin streetAddress si está vacío)
const buildPostalAddress = () => {
  const a = googleBusiness.address || {}
  const address = {
    '@type': 'PostalAddress',
    addressLocality: a.addressLocality || 'Dos Hermanas',
    addressRegion: a.addressRegion || 'Sevilla',
    postalCode: a.postalCode || '41702',
    addressCountry: a.addressCountry || 'ES',
  }
  if (a.streetAddress && a.streetAddress.trim()) {
    address.streetAddress = a.streetAddress.trim()
  }
  return address
}

// LocalBusiness: "Soy una empresa física, estoy en esta dirección y doy este servicio"
const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Pulidos y Abrillantados Pul D.C',
  description: siteData.description,
  image: siteData.url + '/images/puvicor2.png',
  url: siteData.url,
  telephone: [PHONE_1, PHONE_2],
  address: buildPostalAddress(),
  geo: googleBusiness.geo ? {
    '@type': 'GeoCoordinates',
    latitude: googleBusiness.geo.latitude,
    longitude: googleBusiness.geo.longitude,
  } : undefined,
  priceRange: '€€',
  // areaServed: Sevilla y Aljarafe primero (SEO local), luego resto de zonas
  areaServed: [
    { '@type': 'City', name: 'Sevilla' },
    { '@type': 'AdministrativeArea', name: 'Aljarafe' },
    { '@type': 'Place', name: 'Dos Hermanas' },
    { '@type': 'Place', name: 'Triana' },
    { '@type': 'Place', name: 'Nervión' },
    { '@type': 'City', name: 'Utrera' },
    { '@type': 'City', name: 'Alcalá de Guadaíra' },
    { '@type': 'City', name: 'Mairena del Alcor' },
    { '@type': 'City', name: 'Espartinas' },
    { '@type': 'City', name: 'Tomares' },
    { '@type': 'City', name: 'Mairena del Aljarafe' },
    { '@type': 'City', name: 'Sanlúcar la Mayor' },
    { '@type': 'City', name: 'Palomares del Río' },
    { '@type': 'City', name: 'Almensilla' },
    { '@type': 'City', name: 'Bormujos' },
    { '@type': 'City', name: 'Gines' },
    { '@type': 'City', name: 'Castilleja de la Cuesta' },
  ],
  serviceType: [
    'Pulido de suelos',
    'Abrillantado de mármol y terrazo',
    'Cristalizado de suelos',
    'Restauración de suelos',
    'Pulido diamantado de hormigón',
    'Sellado de juntas',
    'Mantenimiento de comunidades',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE_1,
    contactType: 'customer service',
    areaServed: 'ES',
    availableLanguage: 'Spanish',
  },
  ...(googleBusiness.profileUrl && googleBusiness.profileUrl !== 'https://maps.app.goo.gl/...' ? {
    sameAs: [googleBusiness.profileUrl],
  } : {}),
  ...(googleBusiness.rating && googleBusiness.rating.count > 0 ? {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: googleBusiness.rating.value,
      reviewCount: googleBusiness.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
  } : {}),
  ...(googleBusiness.openingHours && googleBusiness.openingHours.length > 0 ? {
    openingHoursSpecification: googleBusiness.openingHours.map((hours) => {
      const parts = hours.split(' ')
      const dayRange = parts[0]   // e.g. Mo-Fr
      const timeRange = parts[1]  // e.g. 09:00-18:00
      const [opens, closes] = timeRange ? timeRange.split('-') : []
      const spec = { '@type': 'OpeningHoursSpecification' }
      if (dayRange) spec.dayOfWeek = dayRange
      if (opens) spec.opens = opens
      if (closes) spec.closes = closes
      return spec
    }),
  } : {}),
}

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Pulidos y Abrillantados Pul D.C',
  url: siteData.url,
  logo: siteData.url + '/images/puvicor2.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE_1,
    contactType: 'customer service',
    areaServed: 'ES',
  },
}

const services = [
  { name: 'Pulido de mármol', description: 'Restauración, cristalizado y brillo espejo en suelos de mármol en Sevilla' },
  { name: 'Pulido de terrazo', description: 'Abrillantado, sellado de juntas y restauración de terrazo en Sevilla y provincia' },
  { name: 'Pulido de barro cocido', description: 'Cristalizado y mantenimiento de barro cocido en Sevilla' },
  { name: 'Pulido de granito', description: 'Pulido diamantado y acabado en brillo espejo para granito' },
  { name: 'Cristalizado de suelos', description: 'Cristalizado, sellado de juntas y mantenimiento de comunidades en Sevilla' },
  { name: 'Pulido de hormigón', description: 'Pulido diamantado de hormigón e hormigón impreso' },
  { name: 'Pintura de interiores', description: 'Servicios de pintura profesional' },
]

const serviceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Pulidos y Abrillantados Pul D.C',
  },
})

export default function JsonLd({ page = 'home' }) {
  const schemas = [localBusiness, organization]

  if (page === 'home' || page === 'landingMarmol' || page === 'landingPremium') {
    schemas.push(...services.map(serviceSchema))
  }
  if (page === 'home') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Pulidor de Suelos en Sevilla',
      description: 'Restauración y cristalizado de mármol, terrazo y barro cocido en Sevilla. Sellado de juntas, eliminación de arañazos, brillo espejo y mantenimiento. Triana, Nervión, Aljarafe y provincia.',
      provider: { '@type': 'LocalBusiness', name: 'Pulidos y Abrillantados Pul D.C' },
      areaServed: [{ '@type': 'City', name: 'Sevilla' }, { '@type': 'Place', name: 'Triana' }, { '@type': 'Place', name: 'Nervión' }, { '@type': 'Place', name: 'Aljarafe' }],
    })
  }
  if (page === 'landingMarmol') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Pulido profesional de mármol en Dos Hermanas',
      description: 'Restauración y cristalizado de mármol de alto nivel. Eliminación de arañazos, brillo espejo y sellado de juntas. Resultados duraderos, sin polvo y con garantía profesional.',
      provider: { '@type': 'LocalBusiness', name: 'Pulidos y Abrillantados Pul D.C' },
      areaServed: { '@type': 'City', name: 'Dos Hermanas' },
    })
  }
  if (page === 'landingPremium') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Abrillantado profesional de suelos de mármol en Sevilla',
      description: 'Recuperamos mármoles deteriorados con técnicas profesionales. Servicio premium para viviendas exigentes y empresas.',
      provider: { '@type': 'LocalBusiness', name: 'Pulidos y Abrillantados Pul D.C' },
      areaServed: { '@type': 'City', name: 'Sevilla' },
    })
  }
  if (page === 'about') {
    const aboutLocations = [
      'Espartinas', 'Tomares', 'Mairena del Aljarafe', 'Sanlúcar la Mayor',
      'Palomares del Río', 'Almensilla', 'Bormujos', 'Sevilla', 'Dos Hermanas',
    ]
    aboutLocations.forEach((city) => {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `Restauración y cristalizado en ${city}`,
        description: `Restauración, cristalizado y pulido diamantado en ${city}. Mármol, terrazo, granito, hormigón impreso. Sellado de juntas y brillo espejo. Comunidades, oficinas y suelos históricos. Método sin polvo.`,
        provider: { '@type': 'LocalBusiness', name: 'Pulidos y Abrillantados Pul D.C' },
        areaServed: { '@type': 'City', name: city },
      })
    })
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Restauración y cristalizado en Aljarafe y Sevilla | Sobre Nosotros - Pul D.C',
      description: 'Especialistas en restauración y cristalizado de suelos en el Aljarafe. Sellado de juntas, brillo espejo y mantenimiento. Comunidades de vecinos, oficinas y suelos históricos.',
      provider: { '@type': 'LocalBusiness', name: 'Pulidos y Abrillantados Pul D.C' },
    })
  }

  return (
    <Helmet>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
