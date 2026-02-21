import { Link } from 'react-router-dom'
import PhoneButton from '@/components/shared/PhoneButton'

const PHONE_1 = '+34615434956'
const PHONE_2 = '+34679478500'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-text)',
      color: 'white',
      padding: 'var(--spacing-xl) var(--spacing-md)',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-lg)',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <div>
          <strong>Pulidos y Abrillantados Pul D.C</strong>
          <p style={{ margin: 'var(--spacing-sm) 0', opacity: 0.9 }}>
            Dos Hermanas, Sevilla 41702
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <PhoneButton number={PHONE_1} className="footer-link" />
            <PhoneButton number={PHONE_2} className="footer-link" />
          </div>
        </div>
        <nav style={{ display: 'flex', gap: 'var(--spacing-lg)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" style={{ color: 'white', opacity: 0.9 }}>Inicio</Link>
          <Link to="/sobre-nosotros" style={{ color: 'white', opacity: 0.9 }}>Sobre Nosotros</Link>
          <Link to="/proyectos" style={{ color: 'white', opacity: 0.9 }}>Proyectos</Link>
          <Link to="/contacto" style={{ color: 'white', opacity: 0.9 }}>Contacto</Link>
        </nav>
        <p style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>
          <Link to="/aviso-legal" style={{ color: 'white' }}>Aviso legal</Link>
          {' · '}
          Abrillantados Pul D.C
        </p>
        {/* Google Business Profile link - Update with your actual URL */}
        {import.meta.env.VITE_GOOGLE_BUSINESS_URL && (
          <a
            href={import.meta.env.VITE_GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', opacity: 0.9, fontSize: 'var(--font-size-sm)' }}
            aria-label="Ver reseñas en Google"
          >
            ⭐ Ver reseñas en Google
          </a>
        )}
      </div>
    </footer>
  )
}
