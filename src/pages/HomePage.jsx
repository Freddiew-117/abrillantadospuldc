import MetaTags from '@/components/seo/MetaTags'
import JsonLd from '@/components/seo/JsonLd'
import { seoConfig } from '@/data/seoKeywords'
import Hero from '@/components/home/Hero'
import BeforeAfter from '@/components/home/BeforeAfter'
import Testimonials from '@/components/shared/Testimonials'
import ServicesPremium from '@/components/home/ServicesPremium'
import AljarafeZonesSection from '@/components/home/AljarafeZonesSection'
import EspaciosSection from '@/components/home/EspaciosSection'
import HowWeWork from '@/components/home/HowWeWork'
import FaqSection from '@/components/home/FaqSection'
import GuaranteeSection from '@/components/shared/GuaranteeSection'

export default function HomePage() {
  const seo = seoConfig.home
  return (
    <>
      <MetaTags
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        keywords={seo.keywords}
      />
      <JsonLd page="home" />
      <Hero />
      <EspaciosSection />
      <BeforeAfter />
      <Testimonials />
      <ServicesPremium part="sevilla" />
      <AljarafeZonesSection />
      <ServicesPremium part="barro" />
      <HowWeWork />
      <FaqSection />
      <GuaranteeSection />
    </>
  )
}
