import { Helmet } from 'react-helmet-async'
import { siteData } from '@/data/seoKeywords'
import { googleBusiness } from '@/data/googleBusiness'

const PHONE_1 = '+34615434956'
const PHONE_2 = '+34679478500'

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Pulidos y Abrillantados Pul D.C',
  image: siteData.url + '/images/puvicor2.png',
  url: siteData.url,
  telephone: [PHONE_1, PHONE_2],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '', // Add street address if available
    addressLocality: 'Dos Hermanas',
    addressRegion: 'Sevilla',
    postalCode: '41702',
    addressCountry: 'ES',
  },
  geo: googleBusiness.geo ? {
    '@type': 'GeoCoordinates',
    latitude: googleBusiness.geo.latitude,
    longitude: googleBusiness.geo.longitude,
  } : undefined,
  priceRange: '€€',
  areaServed: [
    'Dos Hermanas', 'Sevilla', 'Utrera', 'Alcalá de Guadaíra', 'Mairena del Alcor', 'El Viso',
    'Espartinas', 'Tomares', 'Mairena del Aljarafe', 'Sanlúcar la Mayor', 'Palomares del Río', 'Almensilla', 'Bormujos', 'Simon Verde',
  ],
  // Google Business Profile integration
  ...(googleBusiness.profileUrl && googleBusiness.profileUrl !== 'https://maps.app.goo.gl/...' ? {
    sameAs: [googleBusiness.profileUrl],
  } : {}),
  // Aggregate rating from Google reviews
  ...(googleBusiness.rating && googleBusiness.rating.count > 0 ? {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: googleBusiness.rating.value,
      reviewCount: googleBusiness.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
  } : {}),
  // Opening hours (if available)
  ...(googleBusiness.openingHours ? {
    openingHoursSpecification: googleBusiness.openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.split(' ')[0],
      opens: hours.split(' ')[1]?.split('-')[0],
      closes: hours.split(' ')[1]?.split('-')[1],
    })),
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
  { name: 'Pulido de mármol', description: 'Pulido profesional de suelos de mármol' },
  { name: 'Pulido de terrazo', description: 'Abrillantado y restauración de terrazo' },
  { name: 'Pulido de granito', description: 'Pulido de suelos de granito' },
  { name: 'Pulido de hormigón', description: 'Pulido diamantado de hormigón' },
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
  if (page === 'landingMarmol') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Pulido profesional de mármol en Dos Hermanas',
      description: 'Especialistas en pulido y abrillantado de mármol de alto nivel. Resultados duraderos, sin polvo y con garantía profesional.',
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
        name: `Pulido de suelo en ${city}`,
        description: `Pulido y abrillantado profesional de suelos en ${city}. Mármol, terrazo, granito y hormigón. Comunidades de vecinos, oficinas y suelos históricos. Método sin polvo.`,
        provider: { '@type': 'LocalBusiness', name: 'Pulidos y Abrillantados Pul D.C' },
        areaServed: { '@type': 'City', name: city },
      })
    })
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Pulido de suelo en Aljarafe y Sevilla | Sobre Nosotros - Pul D.C',
      description: 'Especialistas en pulido de suelos en el Aljarafe sevillano. Comunidades de vecinos, oficinas y suelos históricos.',
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
