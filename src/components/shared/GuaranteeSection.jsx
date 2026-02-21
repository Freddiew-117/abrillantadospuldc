export default function GuaranteeSection() {
  const items = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Garantía 1 año',
      desc: 'En el acabado de tu suelo. Sin condiciones ocultas.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: '25 años',
      desc: 'De experiencia en pulidos y abrillantados en Sevilla.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: 'Acabado sin polvo',
      desc: 'Método profesional con resultado duradero y limpio.',
    },
  ]

  return (
    <section className="guarantee-section section">
      <div className="section__inner">
        <h2 className="guarantee-section__title">Garantía & Confianza</h2>
        <p className="guarantee-section__intro">
          Compromiso con cada proyecto desde 1999
        </p>
        <div className="guarantee-section__grid">
          {items.map((item, i) => (
            <article key={i} className="guarantee-section__card">
              <span className="guarantee-section__icon">{item.icon}</span>
              <h3 className="guarantee-section__card-title">{item.title}</h3>
              <p className="guarantee-section__card-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
