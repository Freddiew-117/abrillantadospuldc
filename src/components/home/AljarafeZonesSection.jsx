import { PRESUPUESTO_BENEFICIOS } from '@/data/presupuestoData'

/**
 * Sección SEO: Restauración de suelos en chalets del Aljarafe y zonas cubiertas.
 * Imágenes de fondo en /images/sitios (nombre de archivo por zona).
 */
const ZONAS_ALJARAFE = [
  'Espartinas',
  'Tomares',
  'Mairena del Aljarafe',
  'Sanlúcar la Mayor',
  'Palomares del Río',
  'Almensilla',
  'Bormujos',
  'Simon Verde',
]

const ZONA_IMAGEN = {
  'Espartinas': 'espartinas.jpg',
  'Tomares': 'tomares.webp',
  'Mairena del Aljarafe': 'mairenadelaljarafe.jpg',
  'Sanlúcar la Mayor': 'sanlucarlamayor.jpg',
  'Palomares del Río': 'palomaresdelrio.jpg',
  'Almensilla': 'almensilla.jpg',
  'Bormujos': 'bormujos.jpg',
  'Simon Verde': 'simonverde.jpg',
}

function getImagenSitio(zona) {
  const file = ZONA_IMAGEN[zona]
  return file ? `/images/sitios/${file}` : null
}

export default function AljarafeZonesSection() {
  return (
    <section className="aljarafe-zones" aria-labelledby="aljarafe-heading">
      <div className="aljarafe-zones__inner">
        <div className="aljarafe-zones__content">
          <h2 id="aljarafe-heading" className="aljarafe-zones__title">
            Restauración de suelos de mármol en chalets del Aljarafe
          </h2>
          <p className="aljarafe-zones__lead">
            Ofrecemos <strong>restauración de suelos de mármol en chalets del Aljarafe sin necesidad de reforma</strong>.
            Sí, también: pulido y abrillantado profesional en toda la comarca, con los mismos estándares de calidad y
            sin obras. Recuperamos el brillo de su mármol, terrazo o granito en su vivienda o comunidad.
          </p>
          <p className="aljarafe-zones__intro">
            Atendemos en las siguientes localidades del Aljarafe sevillano:
          </p>
        </div>
        <ul className="aljarafe-zones__list">
          {ZONAS_ALJARAFE.map((zona) => {
            const bgImage = getImagenSitio(zona)
            return (
              <li
                key={zona}
                className="aljarafe-zones__card"
                style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
              >
                <span className="aljarafe-zones__card-overlay" aria-hidden="true" />
                <span className="aljarafe-zones__pin" aria-hidden="true">📍</span>
                <span className="aljarafe-zones__name">Pulido y abrillantado en {zona}</span>
              </li>
            )
          })}
        </ul>
        <p className="aljarafe-zones__outro">
          En Espartinas, Tomares, Mairena del Aljarafe, Sanlúcar la Mayor, Palomares del Río, Almensilla, Bormujos, Simon Verde y alrededores.
          Presupuesto sin compromiso. Llámanos o escríbenos por WhatsApp.
        </p>
        <ul className="aljarafe-zones__beneficios" aria-label="Incluye">
          {PRESUPUESTO_BENEFICIOS.map((b, i) => (
            <li key={i}>👉 {b}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
