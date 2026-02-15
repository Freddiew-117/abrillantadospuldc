import { testimonials } from '@/data/testimonialsData'

export default function Testimonials() {
  if (!testimonials?.length) return null

  return (
    <section className="testimonials section">
      <div className="section__inner">
        <h2>Lo que dicen nuestros clientes</h2>
        <p className="testimonials__intro">Experiencia premium, puntualidad y resultados de alto nivel.</p>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="testimonial-card">
              {t.photo && (
                <div className="testimonial-card__photo">
                  <img src={t.photo} alt={t.name} width={80} height={80} loading="lazy" />
                </div>
              )}
              {t.rating && (
                <div className="testimonial-card__rating" aria-hidden="true">
                  {'★'.repeat(t.rating)}
                </div>
              )}
              <p className="testimonial-card__text">"{t.text}"</p>
              <cite className="testimonial-card__author">— {t.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
