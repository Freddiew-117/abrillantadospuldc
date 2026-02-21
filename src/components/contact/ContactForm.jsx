import { useState } from 'react'
import { useConversionTracking } from '@/hooks/useConversionTracking'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP || '34615434956'
const WHATSAPP_MESSAGE = 'Hola, me gustaría solicitar información o presupuesto'

export default function ContactForm() {
  const { trackFormSubmit, trackWhatsAppClick } = useConversionTracking()
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', website: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // Teléfono español: 9 dígitos (6xx, 7xx, 8xx, 9xx) o con +34
    const phoneRegex = /^(\+34)?[6-9]\d{8}$/
    const phoneNormalized = formData.phone?.replace(/[\s-]/g, '') || ''
    if (!formData.name?.trim()) return 'Introduce tu nombre'
    if (!formData.email?.trim()) return 'Introduce tu email'
    if (!emailRegex.test(formData.email)) return 'Email no válido'
    if (formData.phone?.trim() && !phoneRegex.test(phoneNormalized)) return 'Teléfono no válido (formato español: 9 dígitos)'
    if (!formData.message?.trim()) return 'Introduce tu mensaje'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.website) return // Honeypot: bot rellenó el campo oculto
    const err = validate()
    if (err) {
      setStatus(err)
      return
    }
    setStatus('sending')
    const formId = import.meta.env.VITE_FORMSPREE_ID
    if (!formId || formId === 'YOUR_FORM_ID') {
      setStatus('Configura VITE_FORMSPREE_ID en .env o usa WhatsApp')
      return
    }
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        trackFormSubmit()
        setStatus('sent')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <label className="contact-form__honeypot" aria-hidden="true">
          <input type="text" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Nombre *
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Teléfono
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Mensaje *
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </label>
        {status && status !== 'idle' && status !== 'sending' && (
          <p className={`contact-form__status contact-form__status--${status === 'sent' ? 'success' : 'error'}`}>
            {status === 'sent' ? 'Mensaje enviado. Te responderemos pronto.' : status}
          </p>
        )}
        <button type="submit" className="contact-form__submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
      <div className="contact-form__alt">
        <span className="contact-form__alt-label">O escríbenos por WhatsApp</span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-form__whatsapp-btn"
          onClick={trackWhatsAppClick}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Escribir por WhatsApp
        </a>
      </div>
    </div>
  )
}
