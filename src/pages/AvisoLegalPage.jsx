import MetaTags from '@/components/seo/MetaTags'

export default function AvisoLegalPage() {
  return (
    <>
      <MetaTags
        title="Aviso legal y política de privacidad | Pul D.C"
        description="Aviso legal, política de privacidad y cookies de Pulidos y Abrillantados Pul D.C."
        canonical={import.meta.env.VITE_SITE_URL + '/aviso-legal'}
      />
      <section className="section">
        <div className="section__inner" style={{ maxWidth: 720 }}>
          <h1>Aviso legal</h1>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
          </p>
          <h2>Identificación</h2>
          <p><strong>Pulidos y Abrillantados Pul D.C</strong></p>
          <p>Dos Hermanas, Sevilla 41702</p>
          <h2>Política de privacidad</h2>
          <p>
            Los datos personales que nos proporcione a través del formulario de contacto serán tratados de forma confidencial y utilizados únicamente para responder a su consulta.
          </p>
          <h2>Cookies</h2>
          <p>
            Este sitio utiliza cookies para mejorar la experiencia de navegación. Puede gestionar sus preferencias en cualquier momento a través del banner de cookies.
          </p>
          <p>
            <a href="/gpdr.html" target="_blank" rel="noopener">
              Ver aviso legal completo y política de privacidad
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
