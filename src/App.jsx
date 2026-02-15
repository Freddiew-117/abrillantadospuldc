import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Analytics from '@/components/analytics/Analytics'
import CookieConsent from '@/components/analytics/CookieConsent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactBar from '@/components/layout/ContactBar'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import CTASection from '@/components/home/CTASection'
import './App.css'

const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const GalleryPage = lazy(() => import('@/pages/GalleryPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const LandingMarmol = lazy(() => import('@/pages/LandingMarmol'))
const LandingPremium = lazy(() => import('@/pages/LandingPremium'))
const AvisoLegalPage = lazy(() => import('@/pages/AvisoLegalPage'))

function PageFallback() {
  return <div className="page-fallback" style={{ minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Cargando...</div>
}

function App() {
  return (
    <BrowserRouter>
      <CookieConsent />
      <Analytics />
      <ContactBar />
      <Header />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
          <Route path="/proyectos" element={<GalleryPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/pulido-marmol-dos-hermanas" element={<LandingMarmol />} />
          <Route path="/abrillantado-profesional-sevilla" element={<LandingPremium />} />
          <Route path="/aviso-legal" element={<AvisoLegalPage />} />
        </Routes>
      </Suspense>
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App
