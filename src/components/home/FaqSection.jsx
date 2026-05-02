import { FAQS } from '@/data/faqData'

export default function FaqSection({ heading = 'Preguntas frecuentes sobre pulido de suelos en Sevilla' }) {
  return (
    <section className="faq-section section" aria-labelledby="faq-section-title">
      <div className="section__inner">
        <h2 id="faq-section-title" className="faq-section__title">{heading}</h2>
        <p className="faq-section__intro">
          Resolvemos las dudas más habituales antes de pulir el suelo de una casa,
          un garaje, una oficina o una comunidad de vecinos en Sevilla y provincia.
        </p>
        <div className="faq-section__list">
          {FAQS.map((item, i) => (
            <details key={i} className="faq-section__item">
              <summary className="faq-section__question">
                <span>{item.q}</span>
                <span className="faq-section__chevron" aria-hidden="true">+</span>
              </summary>
              <div className="faq-section__answer">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
