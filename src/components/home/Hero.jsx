import { useConversionTracking } from '@/hooks/useConversionTracking'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP || '34615434956'
const WHATSAPP_MESSAGE = 'Hola, me gustaría solicitar un presupuesto de pulido/abrillantado'

export default function Hero() {
  const { trackWhatsAppClick, trackPhoneClick } = useConversionTracking()
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section className="hero" style={{
      backgroundImage: 'url(/images/bgTop.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    }}>
      <div className="hero__overlay" style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
      }} />
      <div className="hero__content" style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        color: 'white',
        padding: 'var(--spacing-xl)',
        maxWidth: '800px',
      }}>
        <h1 className="hero__title">Pulido profesional de mármol en Dos Hermanas | Pul D.C</h1>
        <p className="hero__subtitle">
          30 años de experiencia. Presupuesto sin compromiso. Pulidos sin polvo.
        </p>
        <div className="cta-group cta-group--hero">
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
      </div>
    </section>
  )
}
