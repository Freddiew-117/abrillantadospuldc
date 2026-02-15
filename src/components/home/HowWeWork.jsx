export default function HowWeWork() {
  const points = [
    'Empleamos los mejores métodos para garantizar los mejores acabados en nuestras restauraciones de solerías.',
    'Utilizamos masilla específica para suelos de uso profesional para tapar agujeros y grietas.',
    'Cuando el suelo lo requiere utilizamos cemento para el retapado de microporos mezclándolo con resina.',
    'El pulido lo realizamos con diamantes de alta calidad para un acabado de brillo natural (sin químicos).',
    'Pulidos sin polvo: disponemos de máquinas aspiradoras para trabajar en centros comerciales o casas habitadas.',
    'Nos llevamos los residuos del pulido para evitar atascos en los desagües.',
    'Acristalamos con sales, cristalizadores de alta calidad y ceras para la protección del resultado.',
    'Pulidos de hormigón: máquinas específicas para pulido y acondicionamiento de pavimentos.',
  ]

  return (
    <section className="how-we-work section">
      <div className="section__inner">
        <div className="how-we-work__grid">
          <div className="how-we-work__image">
            <img
              src="/images/maquina4.jpg"
              alt="Máquinas profesionales para pulido de suelos - Pul D.C Dos Hermanas"
              loading="lazy"
              width={600}
              height={400}
            />
          </div>
          <div className="how-we-work__content">
            <h2>Cómo trabajamos: pulido profesional en Sevilla</h2>
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
