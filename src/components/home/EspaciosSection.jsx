import { ESPACIOS } from '@/data/espaciosData'

const ICONS = {
  casa: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
    </svg>
  ),
  garaje: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <path d="M7 14h10" />
      <path d="M7 18h10" />
    </svg>
  ),
  oficina: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
    </svg>
  ),
  comunidad: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 21V9l5-4 5 4v12" />
      <path d="M13 21V11l4-3 4 3v10" />
      <path d="M3 21h18" />
      <path d="M7 13v2M7 17v2M17 14v2M17 18v2" />
    </svg>
  ),
}

export default function EspaciosSection() {
  return (
    <section
      className="espacios-section section"
      aria-labelledby="espacios-section-title"
    >
      <div className="section__inner">
        <header className="espacios-section__header">
          <h2 id="espacios-section-title" className="espacios-section__title">
            ¿Dónde puedes pulir el suelo? Casas, garajes, oficinas y comunidades en Sevilla
          </h2>
          <p className="espacios-section__lead">
            Adaptamos el pulido y abrillantado a cada espacio. Trabajamos para
            particulares, administradores de fincas, oficinas y empresas en Sevilla
            capital, Aljarafe, Dos Hermanas y toda la provincia.
          </p>
        </header>
        <div className="espacios-section__grid">
          {ESPACIOS.map((item) => (
            <article
              key={item.id}
              className="espacios-section__card"
              aria-labelledby={`espacio-${item.id}-title`}
            >
              <span className="espacios-section__icon">{ICONS[item.id]}</span>
              <h3
                id={`espacio-${item.id}-title`}
                className="espacios-section__card-title"
              >
                {item.title}
              </h3>
              <p className="espacios-section__card-intro">{item.intro}</p>
              <ul className="espacios-section__list">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
