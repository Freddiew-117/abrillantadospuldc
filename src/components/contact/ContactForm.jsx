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
        <button type="submit" className="btn btn-call" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
      <p className="contact-form__alt">
        O escríbenos por{' '}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
          WhatsApp
        </a>
      </p>
    </div>
  )
}
