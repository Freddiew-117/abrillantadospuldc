import MetaTags from '@/components/seo/MetaTags'
import JsonLd from '@/components/seo/JsonLd'
import { seoConfig } from '@/data/seoKeywords'
import Machinery from '@/components/about/Machinery'
import EquipmentList from '@/components/about/EquipmentList'
import GuaranteeSection from '@/components/shared/GuaranteeSection'

export default function AboutPage() {
  const seo = seoConfig.about
  return (
    <>
      <MetaTags title={seo.title} description={seo.description} canonical={seo.canonical} />
      <JsonLd page="about" />
      <section className="section page-hero">
        <div className="section__inner">
          <h1>Sobre Nosotros</h1>
          <p>Pulidores profesionales en Dos Hermanas y Sevilla con más de 30 años de experiencia. Maquinaria de alto nivel para acabados premium.</p>
        </div>
      </section>
      <Machinery />
      <EquipmentList />
      <GuaranteeSection />
    </>
  )
}
