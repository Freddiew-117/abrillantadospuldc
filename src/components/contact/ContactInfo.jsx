import PhoneButton from '@/components/shared/PhoneButton'
import { googleBusiness } from '@/data/googleBusiness'

const PHONE_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const PIN_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const STAR_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-info__card">
        <span className="contact-info__icon" aria-hidden="true">{PIN_ICON}</span>
        <h3 className="contact-info__title">Ubicación</h3>
        <p className="contact-info__text">Dos Hermanas, Sevilla 41702</p>
      </div>
      <div className="contact-info__card">
        <span className="contact-info__icon" aria-hidden="true">{PHONE_ICON}</span>
        <h3 className="contact-info__title">Teléfono</h3>
        <p className="contact-info__phones">
          <PhoneButton number="+34615434956" className="contact-info__link" />
          <br />
          <PhoneButton number="+34679478500" className="contact-info__link" />
        </p>
      </div>
      {googleBusiness.profileUrl && googleBusiness.profileUrl !== 'https://maps.app.goo.gl/...' && (
        <div className="contact-info__card contact-info__card--google">
          <span className="contact-info__icon" aria-hidden="true">{STAR_ICON}</span>
          <h3 className="contact-info__title">Valoración</h3>
          <a
            href={googleBusiness.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info__google-link"
          >
            Ver reseñas en Google
            {googleBusiness.rating.count > 0 && (
              <span className="contact-info__rating">
                {googleBusiness.rating.value}/5 · {googleBusiness.rating.count} reseñas
              </span>
            )}
          </a>
        </div>
      )}
    </div>
  )
}
