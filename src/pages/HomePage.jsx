import MetaTags from '@/components/seo/MetaTags'
import JsonLd from '@/components/seo/JsonLd'
import { seoConfig } from '@/data/seoKeywords'
import Hero from '@/components/home/Hero'
import BeforeAfter from '@/components/home/BeforeAfter'
import Testimonials from '@/components/shared/Testimonials'
import ServicesPremium from '@/components/home/ServicesPremium'
import AljarafeZonesSection from '@/components/home/AljarafeZonesSection'
import GuaranteeSection from '@/components/shared/GuaranteeSection'

export default function HomePage() {
  const seo = seoConfig.home
  return (
    <>
      <MetaTags title={seo.title} description={seo.description} canonical={seo.canonical} />
      <JsonLd page="home" />
      <Hero />
      <BeforeAfter />
      <Testimonials />
      <ServicesPremium />
      <AljarafeZonesSection />
      <GuaranteeSection />
    </>
  )
}
