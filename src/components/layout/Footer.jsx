import { Link } from 'react-router-dom'
import PhoneButton from '@/components/shared/PhoneButton'
import { googleBusiness } from '@/data/googleBusiness'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP || '34615434956'
const WHATSAPP_MESSAGE = 'Hola, me gustaría solicitar presupuesto de pulido de suelos'

const PHONE_1 = '+34615434956'
const PHONE_2 = '+34679478500'

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  const hasGoogleProfile = googleBusiness.profileUrl && googleBusiness.profileUrl !== 'https://maps.app.goo.gl/...'

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__accent" aria-hidden="true" />
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo">Pul D.C</span>
            <p className="footer__tagline">Pulidos y Abrillantados</p>
            <p className="footer__location">Dos Hermanas, Sevilla 41702</p>
          </div>
          <nav className="footer__nav" aria-label="Enlaces del sitio">
            <span className="footer__nav-title">Enlaces</span>
            <Link to="/" className="footer__link">Inicio</Link>
            <Link to="/sobre-nosotros" className="footer__link">Sobre Nosotros</Link>
            <Link to="/proyectos" className="footer__link">Proyectos</Link>
            <Link to="/contacto" className="footer__link">Contacto</Link>
          </nav>
          <div className="footer__contact">
            <span className="footer__nav-title">Contacto</span>
            <div className="footer__phones">
              <PhoneButton number={PHONE_1} className="footer__phone" />
              <PhoneButton number={PHONE_2} className="footer__phone" />
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__whatsapp"
              aria-label="Escríbenos por WhatsApp"
            >
              WhatsApp
            </a>
            {hasGoogleProfile && (
              <a
                href={googleBusiness.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__google"
                aria-label="Ver reseñas en Google"
              >
                Ver reseñas en Google
              </a>
            )}
          </div>
        </div>
        <div className="footer__bottom">
          <Link to="/aviso-legal" className="footer__legal">Aviso legal</Link>
          <span className="footer__copy">© {new Date().getFullYear()} Pulidos y Abrillantados Pul D.C</span>
        </div>
      </div>
    </footer>
  )
}
