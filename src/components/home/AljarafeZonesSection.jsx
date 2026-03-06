import { PRESUPUESTO_BENEFICIOS } from '@/data/presupuestoData'

/**
 * Sección SEO: Restauración de suelos en chalets del Aljarafe y zonas cubiertas.
 * Imágenes de fondo en /images/sitios (nombre de archivo por zona).
 */
const ZONAS_ALJARAFE = [
  'Mairena del Aljarafe',
  'Tomares',
  'Castilleja de la Cuesta',
  'Bormujos',
  'Gines',
  'Espartinas',
  'Sanlúcar la Mayor',
  'Palomares del Río',
  'Almensilla',
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
            Abrillantado de suelos en el Aljarafe: Mairena, Tomares y Bormujos.
          </h2>
          <p className="aljarafe-zones__lead">
            Somos <strong>especialistas en restauración y cristalizado de suelos en Sevilla</strong>: mármol, terrazo, barro cocido, granito, hormigón impreso y gres porcelánico. Restauración en chalets del Aljarafe, comunidades en Triana y Nervión, y en toda la provincia — sin necesidad de reforma. Sellado de juntas, mantenimiento de comunidades y abrillantado económico. Recuperamos el brillo con los mismos estándares de calidad y sin obras.
          </p>
          <p className="aljarafe-zones__localidades">
            Damos servicio a toda la zona metropolitana, destacando nuestros trabajos de restauración y abrillantado en Mairena del Aljarafe, Tomares, Castilleja de la Cuesta, Bormujos y Gines.
          </p>
          <p className="aljarafe-zones__contexto-local">
            Conocemos el tipo de suelo típico de las urbanizaciones del Aljarafe: mármol y terrazo en recibidores y salones, barro cocido en zonas de paso y porches, y suelos de piedra natural en exteriores. Trabajamos la eliminación de arañazos, reducción de porosidad y acabado en brillo espejo. Ese conocimiento nos permite ofrecer el tratamiento adecuado en cada vivienda unifamiliar y comunidad.
          </p>
          <p className="aljarafe-zones__intro">
            Atendemos en el Aljarafe sevillano y en barrios de Sevilla capital (Triana, Nervión y alrededores):
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
                role="img"
                aria-label={`Resultado de abrillantado y cristalizado de suelos en ${zona}, Aljarafe`}
              >
                <span className="aljarafe-zones__card-overlay" aria-hidden="true" />
                <span className="aljarafe-zones__pin" aria-hidden="true">📍</span>
                <span className="aljarafe-zones__name">Restauración y abrillantado en {zona}</span>
              </li>
            )
          })}
        </ul>
        <p className="aljarafe-zones__outro">
          Zona metropolitana y Aljarafe: Mairena del Aljarafe, Tomares, Castilleja de la Cuesta, Bormujos, Gines, Espartinas, Sanlúcar la Mayor, Palomares del Río, Almensilla, Simon Verde. Sevilla capital: Triana, Nervión y resto de barrios. Presupuesto sin compromiso. Llámanos o escríbenos por WhatsApp.
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
