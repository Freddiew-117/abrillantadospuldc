import { useConversionTracking } from '@/hooks/useConversionTracking'
import MetaTags from '@/components/seo/MetaTags'
import JsonLd from '@/components/seo/JsonLd'
import { seoConfig } from '@/data/seoKeywords'
import Testimonials from '@/components/shared/Testimonials'
import GuaranteeSection from '@/components/shared/GuaranteeSection'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP || '34615434956'
const WHATSAPP_MESSAGE = 'Hola, me gustaría información sobre abrillantado profesional de mármol'

export default function LandingPremium() {
  const { trackWhatsAppClick, trackPhoneClick } = useConversionTracking()
  const seo = seoConfig.landingPremium
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <>
      <MetaTags title={seo.title} description={seo.description} canonical={seo.canonical} />
      <JsonLd page="landingPremium" />
      <section className="section page-hero landing-hero">
        <div className="section__inner">
          <h1>Abrillantado profesional de suelos de mármol en Sevilla</h1>
          <p className="landing-hero__subtitle">
            Experiencia, precisión y resultado. Recuperamos mármoles deteriorados con técnicas profesionales. Servicio premium para viviendas exigentes y empresas.
          </p>
          <div className="cta-group cta-group--landing">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-call cta-primary"
              style={{ background: 'var(--color-whatsapp)' }}
              onClick={trackWhatsAppClick}
            >
              Valoración directa por WhatsApp
            </a>
            <a
              href="tel:+34615434956"
              className="btn btn-call cta-primary"
              onClick={trackPhoneClick}
            >
              Llamar
            </a>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section__inner">
          <h2>Para viviendas de lujo y empresas</h2>
          <p>
            Pulido y abrillantado de mármol para viviendas premium. Trabajo limpio, preciso y orientado al resultado final. Servicios profesionales para hoteles, oficinas y comunidades.
          </p>
          <ul className="landing-benefits">
            <li>Pisos y casas de alto nivel</li>
            <li>Hoteles, oficinas y comunidades</li>
            <li>Experiencia, precisión y resultado</li>
            <li>Servicio profesional garantizado</li>
          </ul>
        </div>
      </section>

      <Testimonials />

      <section className="cta-section">
        <h2>Responde en menos de 24h</h2>
        <p>Solo clientes serios. Escríbenos por WhatsApp o llámanos.</p>
        <div className="cta-group">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-call cta-primary"
            style={{ background: 'var(--color-whatsapp)' }}
            onClick={trackWhatsAppClick}
          >
            WhatsApp
          </a>
          <a
            href="tel:+34615434956"
            className="btn btn-call cta-primary"
            onClick={trackPhoneClick}
          >
            Llamar
          </a>
        </div>
      </section>

      <GuaranteeSection />
    </>
  )
}
