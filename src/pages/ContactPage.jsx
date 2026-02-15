import { lazy, Suspense } from 'react'
import MetaTags from '@/components/seo/MetaTags'
import JsonLd from '@/components/seo/JsonLd'
import { seoConfig } from '@/data/seoKeywords'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactForm from '@/components/contact/ContactForm'

const Map = lazy(() => import('@/components/contact/Map'))

export default function ContactPage() {
  const seo = seoConfig.contact
  return (
    <>
      <MetaTags title={seo.title} description={seo.description} canonical={seo.canonical} />
      <JsonLd page="contact" />
      <section className="section">
        <div className="section__inner">
          <h1>Contacto</h1>
          <p>
            Pulidos profesionales y tratamientos de suelos en Dos Hermanas, Utrera, Alcalá de Guadaíra, Sevilla, Mairena del Alcor y El Viso. Nos desplazamos por toda la provincia con experiencia y garantía de acabado.
          </p>
          <div className="contact-page__grid">
            <ContactInfo />
            <ContactForm />
          </div>
          <p>
            Equipo de profesionales cualificados con más de 30 años de experiencia. Trabajamos para empresas, comunidades de vecinos y particulares en Sevilla y provincia. Resultados premium y clientes siempre satisfechos.
          </p>
        </div>
      </section>
      <Suspense fallback={<div className="contact-map" style={{ minHeight: 200 }} />}>
        <Map />
      </Suspense>
    </>
  )
}
