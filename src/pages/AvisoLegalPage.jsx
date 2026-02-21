import { Link } from 'react-router-dom'
import MetaTags from '@/components/seo/MetaTags'

export default function AvisoLegalPage() {
  return (
    <>
      <MetaTags
        title="Aviso legal y política de privacidad | Pul D.C"
        description="Aviso legal, política de privacidad y cookies de Pulidos y Abrillantados Pul D.C."
        canonical={import.meta.env.VITE_SITE_URL + '/aviso-legal'}
      />
      <article className="aviso-legal-page">
        <header className="aviso-legal-page__hero">
          <div className="aviso-legal-page__hero-inner">
            <Link to="/" className="aviso-legal-page__back">← Volver al inicio</Link>
            <h1 className="aviso-legal-page__title">Aviso legal y Política de Privacidad</h1>
            <p className="aviso-legal-page__lead">Pulidos y Abrillantados Pul D.C</p>
          </div>
        </header>
        <div className="aviso-legal-page__content section__inner">
          <div className="aviso-legal-page__inner">
            <p>
              Siguiendo los principios de licitud, lealtad y transparencia, ponemos a su disposición la presente{' '}
              <strong>Política de Privacidad</strong>.
            </p>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
            </p>

            <h2>Identificación del responsable</h2>
            <p>
              <strong>Pulidos y Abrillantados Pul D.C</strong><br />
              Responsable: David Villalón Coronado<br />
              CIF/DNI: 52669755P<br />
              Domicilio: Dos Hermanas, Sevilla 41702<br />
              Email: contactopuldc@gmail.com
            </p>

            <h2>¿Con qué finalidad tratamos sus datos personales?</h2>
            <p>
              En <strong>abrillantadospuldc.com</strong> tratamos la información que nos facilita con la finalidad de gestionar la relación contractual que nos une, gestionar el envío de la información que nos solicita, facilitar a los interesados ofertas de nuestros servicios y/o productos de su interés y/o gestionar su candidatura.
            </p>

            <h2>¿Por cuánto tiempo conservaremos sus datos personales?</h2>
            <p>
              Sus datos serán conservados el tiempo mínimo necesario para la correcta prestación del servicio ofrecido así como para atender las responsabilidades que se pudieran derivar del mismo y de cualquier otra exigencia legal.
            </p>

            <h2>¿Cuál es la legitimación para el tratamiento de sus datos?</h2>
            <p>
              La base legal para el tratamiento de sus datos personales puede ser la ejecución de una relación contractual potencial y/o suscrita, el interés legítimo, la habilitación legal y/o el consentimiento del propio interesado. Los datos que le solicitamos son adecuados, pertinentes y estrictamente necesarios y en ningún caso está obligado a facilitárnoslos, pero su no comunicación podrá afectar a la finalidad del servicio o la imposibilidad de prestarlo.
            </p>

            <h2>¿A qué destinatarios se comunicarán sus datos?</h2>
            <p>
              Pulidos y Abrillantados Pul D.C no comunicará sus datos a ningún tercero, salvo que se informe de ello expresamente.
            </p>

            <h2>¿Cuáles son sus derechos cuando nos facilita sus datos?</h2>
            <p>
              Los derechos de protección de datos de los que son titulares los interesados son:
            </p>
            <ul>
              <li>Derecho a solicitar el acceso a los datos personales relativos al interesado</li>
              <li>Derecho de rectificación o supresión</li>
              <li>Derecho de oposición</li>
              <li>Derecho a solicitar la limitación de su tratamiento</li>
              <li>Derecho a la portabilidad de los datos</li>
            </ul>
            <p>
              Los titulares de los datos personales obtenidos podrán ejercer sus derechos dirigiendo una comunicación por escrito al correo electrónico <strong>contactopuldc@gmail.com</strong>, incluyendo fotocopia de su DNI u otro documento de identificación equivalente.
            </p>
            <p>
              Modelos, formularios y más información disponible sobre sus derechos en la página web de la autoridad de control nacional, Agencia Española de Protección de Datos (AEPD): <a href="https://www.agpd.es" target="_blank" rel="noopener noreferrer">www.agpd.es</a>
            </p>

            <h2>¿Puedo retirar el consentimiento?</h2>
            <p>
              Usted tiene la posibilidad y el derecho a retirar el consentimiento para cualquiera finalidad específica otorgada en su momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.
            </p>

            <h2>¿Dónde puedo reclamar?</h2>
            <p>
              Si algún interesado considera que sus datos no son tratados correctamente puede dirigir sus reclamaciones a contactopuldc@gmail.com o a la autoridad de protección de datos que corresponda, siendo la AEPD la indicada en el territorio nacional: <a href="https://www.agpd.es" target="_blank" rel="noopener noreferrer">www.agpd.es</a>
            </p>

            <h2>Seguridad y actualización de sus datos personales</h2>
            <p>
              Con el objetivo de salvaguardar la seguridad de sus datos personales, le informamos que hemos adoptado todas las medidas de índole técnica y organizativa necesarias para garantizar la seguridad de los datos personales suministrados. Todo ello para evitar su alteración, pérdida y/o tratamientos o accesos no autorizados, tal como exige la normativa, si bien la seguridad absoluta no existe.
            </p>
            <p>
              Es importante que, para que podamos mantener sus datos personales actualizados, nos informe siempre que se produzca una modificación de los mismos.
            </p>

            <h2>Confidencialidad</h2>
            <p>
              <strong>Pulidos y Abrillantados Pul D.C</strong> le informa que sus datos serán tratados con el máximo celo y confidencialidad por todo el personal que intervenga en cualquiera de las fases del tratamiento. No cederemos ni comunicaremos a ningún tercero sus datos, excepto en los casos legalmente previstos, o salvo que el interesado nos hubiera autorizado expresamente.
            </p>

            <h2>Cookies</h2>
            <p>
              Este sitio utiliza cookies para mejorar la experiencia de navegación. Puede gestionar sus preferencias en cualquier momento a través del banner de cookies.
            </p>

            <p className="aviso-legal-page__back-link">
              <Link to="/" className="aviso-legal-page__link">← Volver al inicio</Link>
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
