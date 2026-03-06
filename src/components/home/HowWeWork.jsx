export default function HowWeWork() {
  const points = [
    'Empleamos los mejores métodos para garantizar acabados en brillo espejo en nuestras restauraciones de solerías.',
    'Utilizamos masilla específica para tapar agujeros y grietas; sellado de juntas para mármol y terrazo.',
    'Cuando el suelo lo requiere utilizamos cemento para el retapado de microporos y tratamiento de porosidad mezclándolo con resina.',
    'Pulido diamantado con discos de alta calidad para un acabado de brillo natural (sin químicos).',
    'Eliminación de arañazos y decapado cuando hace falta. Trabajo sin polvo con máquinas aspiradoras en centros comerciales o casas habitadas.',
    'Nos llevamos los residuos para evitar atascos en los desagües.',
    'Cristalizado con sales, cristalizadores de alta calidad y ceras para protección del resultado y mantenimiento duradero.',
    'Hormigón y hormigón impreso: pulido diamantado y acondicionamiento de pavimentos.',
  ]

  return (
    <section className="how-we-work section">
      <div className="section__inner">
        <div className="how-we-work__grid">
          <div className="how-we-work__image">
            <img
              src="/images/maquina4.jpg"
              alt="Maquinaria para restauración y pulido diamantado de suelos en trabajo en Dos Hermanas y Aljarafe"
              loading="lazy"
              width={600}
              height={400}
            />
          </div>
          <div className="how-we-work__content">
            <h2>Cómo trabajamos: cristalizado, diamantado y acabado profesional en Sevilla</h2>
            <ul>
              {points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
