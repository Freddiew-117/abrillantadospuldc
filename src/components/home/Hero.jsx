import { useState, useEffect, useRef } from 'react'
import { useConversionTracking } from '@/hooks/useConversionTracking'
import { heroVerticalImages, heroLandscapeImages } from '@/data/heroData'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP || '34615434956'
const WHATSAPP_MESSAGE = 'Hola, me gustaría solicitar un presupuesto de pulido/abrillantado'

const WHATSAPP_SVG = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

function HeroContent({ whatsappUrl, trackWhatsAppClick }) {
  return (
    <>
      <h1 className="hero__title hero__title--main">Tu suelo como nuevo en 24–48h – Pulido y abrillantado profesional de lujo</h1>
      <p className="hero__subtitle hero__subtitle--main" style={{ color: 'white' }}>
        25 años de experiencia restaurando suelos de mármol, granito y terrazos históricos.
      </p>
      <p className="hero__desc" style={{ color: 'white' }}>
        Garantía de acabado sin polvo y duradero
      </p>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-hero-whatsapp"
        onClick={trackWhatsAppClick}
      >
        {WHATSAPP_SVG}
        Escríbenos por WhatsApp
      </a>
    </>
  )
}

export default function Hero() {
  const { trackWhatsAppClick } = useConversionTracking()
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  const [layoutType, setLayoutType] = useState('split') // split = imagen vertical + texto; full = apaisada centrada
  const [verticalIndex, setVerticalIndex] = useState(0)
  const [landscapeIndex, setLandscapeIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timersRef = useRef([])
  const isBusyRef = useRef(false)

  const verticalImg = heroVerticalImages[verticalIndex]
  const landscapeImg = heroLandscapeImages[landscapeIndex]

  const clearTimers = () => {
    timersRef.current.forEach((id) => clearTimeout(id))
    timersRef.current = []
  }

  useEffect(() => {
    const runTransition = () => {
      if (isBusyRef.current) return
      isBusyRef.current = true
      setIsTransitioning(true)

      const t1 = setTimeout(() => {
        setLayoutType((prev) => {
          if (prev === 'full') {
            setVerticalIndex((v) => (v + 1) % heroVerticalImages.length)
            return 'split'
          }
          setLandscapeIndex((l) => (l + 1) % heroLandscapeImages.length)
          return 'full'
        })
        const t2 = setTimeout(() => {
          setIsTransitioning(false)
          isBusyRef.current = false
        }, 400)
        timersRef.current.push(t2)
      }, 350)
      timersRef.current.push(t1)
    }

    const interval = setInterval(runTransition, 10000)
    return () => {
      clearInterval(interval)
      clearTimers()
    }
  }, [])

  return (
    <section
      className={`hero hero--home hero--${layoutType} ${isTransitioning ? 'hero--transitioning' : ''}`}
    >
      {layoutType === 'full' ? (
        /* Layout full: imagen apaisada de fondo, texto centrado */
        <div
          className="hero__bg"
          style={{ backgroundImage: `url(${landscapeImg})` }}
          key={`full-${landscapeIndex}`}
        />
      ) : (
        /* Layout split: texto a la izquierda, imagen vertical a la derecha */
        <div className="hero__split">
          <div className="hero__split-dark" />
          <div className="hero__split-image" key={`split-${verticalIndex}`}>
            <img src={verticalImg} alt="Pulido profesional de suelos" />
          </div>
        </div>
      )}

      <div className={`hero__content hero__content--${layoutType}`}>
        <HeroContent whatsappUrl={whatsappUrl} trackWhatsAppClick={trackWhatsAppClick} />
      </div>
    </section>
  )
}
