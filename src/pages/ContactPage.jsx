import { lazy, Suspense } from 'react'
import MetaTags from '@/components/seo/MetaTags'
import { PRESUPUESTO_BENEFICIOS } from '@/data/presupuestoData'
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
      <article className="contact-page">
        <header className="contact-page__hero">
          <div className="contact-page__hero-inner">
            <h1 className="contact-page__title">Contacto</h1>
            <p className="contact-page__lead">
              Presupuesto sin compromiso. Atendemos en Dos Hermanas, Sevilla y provincia.
            </p>
            <ul className="contact-page__beneficios" aria-label="Incluye">
              {PRESUPUESTO_BENEFICIOS.map((b, i) => (
                <li key={i}>👉 {b}</li>
              ))}
            </ul>
          </div>
        </header>
        <div className="contact-page__content section__inner">
          <p className="contact-page__intro">
            Pulidos profesionales y tratamientos de suelos con más de 25 años de experiencia. Trabajamos para empresas, comunidades y particulares con garantía de acabado sin polvo.
          </p>
          <div className="contact-page__grid">
            <ContactInfo />
            <ContactForm />
          </div>
          <p className="contact-page__outro">
            Equipo cualificado. Resultados premium. Clientes satisfechos en toda la provincia de Sevilla.
          </p>
        </div>
      </article>
      <Suspense fallback={<div className="contact-map-skeleton" />}>
        <Map />
      </Suspense>
    </>
  )
}
