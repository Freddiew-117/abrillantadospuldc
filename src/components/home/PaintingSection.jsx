import { useConversionTracking } from '@/hooks/useConversionTracking'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP || '34615434956'
const WHATSAPP_MESSAGE = 'Hola, me gustaría información sobre servicios de pintura de interiores'

export default function PaintingSection() {
  const { trackWhatsAppClick } = useConversionTracking()
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  const points = [
    { title: 'Calidad Superior', text: 'Utilizamos pinturas de alta calidad para un acabado duradero.' },
    { title: 'Técnicas Avanzadas', text: 'Técnicas modernas y eficientes que completan los proyectos con rapidez.' },
    { title: 'Limpieza y Orden', text: 'Entorno de trabajo limpio durante todo el proceso.' },
    { title: 'Presupuestos a Medida', text: 'Presupuesto sin compromiso. Reserva evaluación técnica gratuita, diagnóstico en sitio, evaluación para comunidades y chalets.' },
    { title: 'Profesionalismo Garantizado', text: 'Equipo de pintores profesionales y experimentados.' },
  ]

  return (
    <section className="painting-section section">
      <div className="section__inner">
        <div className="painting-section__grid">
          <div className="painting-section__content">
            <h2>Servicios de pintura en Sevilla y provincia</h2>
            <p>
              Servicio profesional de pintura de interiores en Dos Hermanas, Utrera, Alcalá, Mairena del Alcor y toda el área metropolitana de Sevilla. Rapidez, limpieza y garantía de calidad.
            </p>
            <ul>
              {points.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.text}
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-call"
              style={{ background: 'var(--color-whatsapp)' }}
              onClick={trackWhatsAppClick}
            >
              Consulta por WhatsApp
            </a>
          </div>
          <div className="painting-section__image">
            <img
              src="/images/pintores.jpeg"
              alt="Servicios de pintura de interiores profesional - Pul D.C Dos Hermanas"
              loading="lazy"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
