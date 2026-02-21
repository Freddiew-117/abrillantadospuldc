import { useConversionTracking } from '@/hooks/useConversionTracking'
import MetaTags from '@/components/seo/MetaTags'
import JsonLd from '@/components/seo/JsonLd'
import { seoConfig } from '@/data/seoKeywords'
import { ZONAS_SERVICIO, SEGMENTOS_CLIENTE, EQUIPAMIENTO } from '@/data/aboutData'
import { PRESUPUESTO_BENEFICIOS } from '@/data/presupuestoData'
import Machinery from '@/components/about/Machinery'
import GuaranteeSection from '@/components/shared/GuaranteeSection'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP || '34615434956'
const WHATSAPP_MESSAGE = 'Hola, me gustaría solicitar presupuesto de pulido de suelos'

const ICONS = {
  building: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" />
    </svg>
  ),
  briefcase: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  heritage: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 21h18" />
      <path d="M12 21V8" />
      <path d="M5 21V8l7-4 7 4v13" />
    </svg>
  ),
}

export default function AboutPage() {
  const { trackWhatsAppClick } = useConversionTracking()
  const seo = seoConfig.about
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <>
      <MetaTags title={seo.title} description={seo.description} canonical={seo.canonical} />
      <JsonLd page="about" />
      <article className="about-page">
        {/* Hero */}
        <header className="about-page__hero">
          <div className="about-page__hero-inner">
            <h1 className="about-page__title">
              Pulido de suelo en Aljarafe y Sevilla
            </h1>
            <p className="about-page__lead">
              25 años de experiencia. Especialistas en comunidades de vecinos, oficinas y suelos históricos. Método sin polvo, acabado duradero.
            </p>
          </div>
        </header>

        {/* Intro SEO */}
        <section className="about-page__intro section" aria-labelledby="about-intro-heading">
          <div className="section__inner">
            <h2 id="about-intro-heading" className="about-page__section-title">
              Especialistas en pulido y abrillantado de suelos en el Aljarafe
            </h2>
            <p className="about-page__intro-text">
              <strong>Pul D.C</strong> ofrece servicios de <strong>pulido de suelo en Aljarafe</strong> y provincia de Sevilla desde hace más de 25 años. 
              Atendemos en <strong>Espartinas, Tomares, Mairena del Aljarafe, Sanlúcar la Mayor, Palomares del Río, Almensilla, Bormujos</strong> y por supuesto 
              <strong> Sevilla capital y Dos Hermanas</strong>. Trabajamos para <strong>comunidades de vecinos</strong>, empresas, oficinas y particulares con 
              suelos de mármol, terrazo, granito y hormigón. Resultados sin polvo y con garantía.
            </p>
          </div>
        </section>

        {/* Segmentos: Comunidades, Oficinas, Suelos históricos */}
        <section className="about-page__segmentos section section--alt" aria-labelledby="segmentos-heading">
          <div className="section__inner">
            <h2 id="segmentos-heading" className="about-page__section-title about-page__section-title--center">
              A quién nos dirigimos
            </h2>
            <div className="about-page__segmentos-grid">
              {SEGMENTOS_CLIENTE.map((seg, i) => (
                <div key={i} className="about-page__segmento-card">
                  <span className="about-page__segmento-icon">{ICONS[seg.icon]}</span>
                  <h3 className="about-page__segmento-title">{seg.titulo}</h3>
                  <p className="about-page__segmento-desc">{seg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zonas de servicio */}
        <section className="about-page__zonas section" aria-labelledby="zonas-heading">
          <div className="section__inner">
            <h2 id="zonas-heading" className="about-page__section-title about-page__section-title--center">
              Pulido de suelo en estas localidades del Aljarafe y Sevilla
            </h2>
            <p className="about-page__zonas-intro">
              Realizamos trabajos de pulido y abrillantado en portales, viviendas, oficinas y edificios históricos en:
            </p>
            <ul className="about-page__zonas-list">
              {ZONAS_SERVICIO.map((z) => (
                <li key={z.slug}>
                  <strong>Pulido de suelo en {z.nombre}</strong>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Maquinaria */}
        <Machinery />

        {/* Equipamiento */}
        <section className="about-page__equipamiento section section--alt" aria-labelledby="equipamiento-heading">
          <div className="section__inner">
            <h2 id="equipamiento-heading" className="about-page__section-title about-page__section-title--center">
              Maquinaria profesional para cada tipo de suelo
            </h2>
            <ul className="about-page__equipamiento-list">
              {EQUIPAMIENTO.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Garantía */}
        <GuaranteeSection />

        {/* CTA */}
        <section className="about-page__cta section" aria-labelledby="cta-heading">
          <div className="section__inner about-page__cta-inner">
            <h2 id="cta-heading" className="about-page__cta-title">
              Presupuesto sin compromiso
            </h2>
            <ul className="about-page__cta-beneficios" aria-label="Incluye">
              {PRESUPUESTO_BENEFICIOS.map((b, i) => (
                <li key={i}>👉 {b}</li>
              ))}
            </ul>
            <p className="about-page__cta-text">
              Comunidades de vecinos, oficinas, particulares. Atendemos en todo el Aljarafe y Sevilla.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="about-page__cta-btn"
              onClick={trackWhatsAppClick}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar presupuesto por WhatsApp
            </a>
          </div>
        </section>
      </article>
    </>
  )
}
