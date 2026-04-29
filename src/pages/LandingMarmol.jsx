import { useConversionTracking } from '@/hooks/useConversionTracking'
import MetaTags from '@/components/seo/MetaTags'
import JsonLd from '@/components/seo/JsonLd'
import { seoConfig } from '@/data/seoKeywords'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import GuaranteeSection from '@/components/shared/GuaranteeSection'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP || '34615434956'
const WHATSAPP_MESSAGE = 'Hola, me gustaría solicitar un presupuesto de pulido de mármol'

export default function LandingMarmol() {
  const { trackWhatsAppClick, trackPhoneClick } = useConversionTracking()
  const seo = seoConfig.landingMarmol
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  const beneficios = [
    'Resultados duraderos con acabado en brillo espejo',
    'Restauración sin polvo – adaptados a casas habitadas',
    'Garantía en eliminación de arañazos y sellado de juntas',
    'Masilla y cemento profesional para retapado y porosidad',
    'Pulido diamantado – brillo natural sin químicos',
  ]

  return (
    <>
      <MetaTags
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        keywords={seo.keywords}
      />
      <JsonLd page="landingMarmol" />
      <section className="section page-hero landing-hero">
        <div className="section__inner">
          <h1>Pulido profesional de mármol en Dos Hermanas</h1>
          <p className="landing-hero__subtitle">
            25 años de experiencia · Acabado en brillo espejo. Restauración, cristalizado y eliminación de arañazos en mármol de alto nivel.
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
              Contacte por WhatsApp
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
          <h2>Beneficios del cristalizado y restauración de mármol</h2>
          <ul className="landing-benefits">
            {beneficios.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <h2>Nuestro proceso</h2>
          <p>
            Empleamos masilla específica para tapar agujeros y grietas. Sellado de juntas y tratamiento de porosidad cuando el mármol lo requiere. Decapado previo si hay ceras antiguas. Pulido diamantado con discos de alta calidad para un acabado en brillo espejo sin químicos. Máquinas aspiradoras para trabajar sin levantar polvo. Cristalizado con sales y cristalizadores de alta calidad para proteger el resultado y un mantenimiento duradero.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section__inner">
          <h2>Trabajos de mármol realizados</h2>
          <p>Transformamos suelos antiguos en superficies brillantes e impecables.</p>
          <GalleryGrid initialFilter="marmol" showFilter={false} />
        </div>
      </section>

      <section className="cta-section">
        <h2>Valoración directa por WhatsApp o llamada</h2>
        <p>Respondemos en menos de 24h.</p>
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
