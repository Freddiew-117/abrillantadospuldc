export default function Map() {
  return (
    <div className="contact-map" aria-label="Mapa de ubicación">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50792.85050129966!2d-5.9632365186289915!3d37.28202189199964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12705c945f7355%3A0x1f6735c306757c59!2sDos+Hermanas%2C+Sevilla!5e0!3m2!1ses!2ses!4v1511706710936"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Pul D.C - Dos Hermanas, Sevilla"
      />
    </div>
  )
}
