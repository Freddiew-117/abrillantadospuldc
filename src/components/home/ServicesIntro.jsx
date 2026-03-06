import { PRESUPUESTO_BENEFICIOS } from '@/data/presupuestoData'

export default function ServicesIntro() {
  const zonas = 'Dos Hermanas, Utrera, Alcalá de Guadaíra, Sevilla, Mairena del Alcor y El Viso'
  return (
    <section className="services-intro section">
      <div className="section__inner">
        <div className="services-intro__grid">
          <div className="services-intro__card">
            <h3>Quiénes somos</h3>
            <p>
              Especialistas en restauración y cristalizado con más de 30 años de experiencia en todo tipo de suelos: mármol, terrazo, granito, hormigón impreso y gres porcelánico. Trabajamos en {zonas} y toda la provincia de Sevilla.
            </p>
          </div>
          <div className="services-intro__card">
            <h3>Qué ofrecemos</h3>
            <p>
              Restauraciones de solerías, pulido diamantado, cristalizado, sellado de juntas y mantenimiento. Eliminación de arañazos y acabado en brillo espejo. Servicios de pintura de interiores. Resultados con garantía.
            </p>
          </div>
          <div className="services-intro__card">
            <h3>Equipo especializado</h3>
            <p>
              Avalados por más de 30 años de experiencia. Cristalizado, sellado de juntas y mantenimiento con acabados de alto nivel y presupuesto sin compromiso.
            </p>
            <ul className="services-intro__beneficios" aria-label="Incluye">
              {PRESUPUESTO_BENEFICIOS.map((b, i) => (
                <li key={i}>👉 {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
