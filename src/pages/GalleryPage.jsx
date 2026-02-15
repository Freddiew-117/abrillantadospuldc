import { lazy, Suspense } from 'react'
import MetaTags from '@/components/seo/MetaTags'
import JsonLd from '@/components/seo/JsonLd'
import { seoConfig } from '@/data/seoKeywords'

const GalleryGrid = lazy(() => import('@/components/gallery/GalleryGrid'))

export default function GalleryPage() {
  const seo = seoConfig.gallery
  return (
    <>
      <MetaTags title={seo.title} description={seo.description} canonical={seo.canonical} />
      <JsonLd page="gallery" />
      <section className="section">
      <div className="section__inner">
        <h1>Nuestros trabajos</h1>
        <p>Clientes siempre satisfechos, acabados perfectos</p>
        <Suspense fallback={<div style={{ minHeight: 300 }}>Cargando galería...</div>}>
          <GalleryGrid />
        </Suspense>
      </div>
    </section>
    </>
  )
}
