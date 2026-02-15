import { useConversionTracking } from '@/hooks/useConversionTracking'

const PHONE_1 = '+34615434956'
const PHONE_2 = '+34679478500'
const WHATSAPP_NUMBER = '34615434956'
const WHATSAPP_MESSAGE = 'Hola, me gustaría solicitar un presupuesto de pulido/abrillantado'

export default function ContactBar() {
  const { trackPhoneClick, trackWhatsAppClick } = useConversionTracking()

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <div className="contact-bar" role="banner">
      <div className="contact-bar__content">
        <span className="contact-bar__slogan">
          Háblanos por WhatsApp o llámanos para un presupuesto sin compromiso
        </span>
        <span className="contact-bar__slogan">|</span>
        <div className="contact-bar__ctas">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-bar__link contact-bar__link--whatsapp"
            onClick={trackWhatsAppClick}
            aria-label="Contactar por WhatsApp"
          >
            WhatsApp
          </a>
          <a
            href={`tel:${PHONE_1}`}
            className="contact-bar__link"
            onClick={trackPhoneClick}
            aria-label="Llamar al 615 43 49 56"
          >
            📞 +34 615 43 49 56
          </a>
          <a
            href={`tel:${PHONE_2}`}
            className="contact-bar__link"
            onClick={trackPhoneClick}
            aria-label="Llamar al 679 47 85 00"
          >
            📞 +34 679 47 85 00
          </a>
        </div>
      </div>
    </div>
  )
}
