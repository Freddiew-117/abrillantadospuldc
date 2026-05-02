import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import MetaTags from '@/components/seo/MetaTags'
import JsonLd from '@/components/seo/JsonLd'
import { seoConfig } from '@/data/seoKeywords'

const GalleryGrid = lazy(() => import('@/components/gallery/GalleryGrid'))

export default function GalleryPage() {
  const seo = seoConfig.gallery
  return (
    <>
      <MetaTags
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        keywords={seo.keywords}
      />
      <JsonLd page="gallery" />
      <section className="section">
        <div className="section__inner">
          <h1>Proyectos de pulido y abrillantado de suelos en Sevilla</h1>
          <p>
            Galería de trabajos de pulido, cristalizado y restauración de suelos en
            Sevilla capital, Aljarafe, Dos Hermanas y provincia. Mármol, terrazo, granito,
            barro cocido y hormigón en casas, garajes, oficinas y comunidades de vecinos.
            Antes y después de cada proyecto.
          </p>
          <p>
            ¿Tu suelo necesita un trabajo similar? Pide{' '}
            <Link to="/contacto">presupuesto sin compromiso</Link> o conoce más sobre
            nuestro <Link to="/sobre-nosotros">método de pulido sin polvo</Link>.
          </p>
          <Suspense fallback={<div style={{ minHeight: 300 }}>Cargando galería...</div>}>
            <GalleryGrid />
          </Suspense>
        </div>
      </section>
    </>
  )
}
