export default function ServicesIntro() {
  const zonas = 'Dos Hermanas, Utrera, Alcalá de Guadaíra, Sevilla, Mairena del Alcor y El Viso'
  return (
    <section className="services-intro section">
      <div className="section__inner">
        <div className="services-intro__grid">
          <div className="services-intro__card">
            <h3>Quiénes somos</h3>
            <p>
              Pulidores profesionales con más de 30 años de experiencia en todo tipo de suelos: mármol, terrazo, granito y hormigón. Trabajamos en {zonas} y toda la provincia de Sevilla.
            </p>
          </div>
          <div className="services-intro__card">
            <h3>Qué ofrecemos</h3>
            <p>
              Restauraciones de solerías en mal estado, pulido profesional de hormigón, acristalados con encerado para protección del acabado y servicios de pintura de interiores. Resultados con garantía.
            </p>
          </div>
          <div className="services-intro__card">
            <h3>Pulidores profesionales</h3>
            <p>
              Avalados por más de 30 años de experiencia en el sector. Servicio premium con acabados de alto nivel y presupuesto sin compromiso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
