import { lazy, Suspense } from 'react'
import MetaTags from '@/components/seo/MetaTags'
import JsonLd from '@/components/seo/JsonLd'
import { seoConfig } from '@/data/seoKeywords'
import Hero from '@/components/home/Hero'
import ServicesIntro from '@/components/home/ServicesIntro'
import HowWeWork from '@/components/home/HowWeWork'
import PaintingSection from '@/components/home/PaintingSection'
import Testimonials from '@/components/shared/Testimonials'

const GalleryGrid = lazy(() => import('@/components/gallery/GalleryGrid'))
import GuaranteeSection from '@/components/shared/GuaranteeSection'

export default function HomePage() {
  const seo = seoConfig.home
  return (
    <>
      <MetaTags title={seo.title} description={seo.description} canonical={seo.canonical} />
      <JsonLd page="home" />
      <Hero />
      <ServicesIntro />
      <HowWeWork />
      <PaintingSection />
      <section className="section">
        <div className="section__inner">
          <h2>Nuestros trabajos</h2>
          <p>Clientes siempre satisfechos, acabados perfectos</p>
          <Suspense fallback={<div style={{ minHeight: 200 }}>Cargando galería...</div>}>
            <GalleryGrid />
          </Suspense>
        </div>
      </section>
      <Testimonials />
      <GuaranteeSection />
    </>
  )
}
