import PhoneButton from '@/components/shared/PhoneButton'
import { useConversionTracking } from '@/hooks/useConversionTracking'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP || '34615434956'
const WHATSAPP_MESSAGE = 'Hola, me gustaría solicitar un presupuesto de pulido/abrillantado'

export default function CTASection() {
  const { trackWhatsAppClick } = useConversionTracking()
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section className="cta-section" aria-label="Solicitar presupuesto">
      <h2>Solicita presupuesto sin compromiso</h2>
      <p>Servicio profesional en Dos Hermanas, Sevilla y provincia. Llámanos o escríbenos por WhatsApp. Respondemos en menos de 24h.</p>
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
        <PhoneButton variant="button" label="Llamar ahora" />
      </div>
    </section>
  )
}
