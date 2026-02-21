import { useState, useEffect, useMemo } from 'react'
import { beforeAfterPairs, getBeforeAfterImagePath } from '@/data/beforeAfterData'

// Shuffle array function
const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function BeforeAfter() {
  // Randomize pairs on mount
  const randomizedPairs = useMemo(() => shuffleArray(beforeAfterPairs), [])
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const currentPair = randomizedPairs[currentIndex] || randomizedPairs[0]
  const nextIndex = (currentIndex + 1) % randomizedPairs.length
  const nextPair = randomizedPairs[nextIndex]

  // Preload next images
  useEffect(() => {
    if (nextPair) {
      const beforeImg = new Image()
      beforeImg.src = getBeforeAfterImagePath(nextPair.before)
      const afterImg = new Image()
      afterImg.src = getBeforeAfterImagePath(nextPair.after)
    }
  }, [currentIndex, nextPair])

  useEffect(() => {
    if (randomizedPairs.length === 0 || randomizedPairs.length === 1) return

    const interval = setInterval(() => {
      // Start fade-out
      setIsFading(true)
      
      // After fade-out completes, change image
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % randomizedPairs.length)
        // Start fade-in after a brief moment
        setTimeout(() => {
          setIsFading(false)
        }, 10)
      }, 500) // Match CSS transition duration
    }, 10000) // 10 seconds

    return () => clearInterval(interval)
  }, [randomizedPairs.length])

  if (!currentPair || randomizedPairs.length === 0) {
    return null // No images available
  }

  return (
    <section className="section before-after">
      <div className="section__inner">
        <h2 className="section-title">Antes & Después</h2>
        <div className="before-after__grid">
          <figure className="before-after__item">
            <div className="before-after__image-wrapper">
              <img
                src={getBeforeAfterImagePath(currentPair.before)}
                alt={`Suelo antes del pulido - ${currentPair.name}`}
                width={400}
                height={300}
                loading="lazy"
                key={`before-${currentIndex}`}
                className={`before-after__image ${isFading ? 'before-after__image--fade-out' : 'before-after__image--fade-in'}`}
              />
            </div>
            <figcaption>ANTES</figcaption>
          </figure>
          <figure className="before-after__item">
            <div className="before-after__image-wrapper">
              <img
                src={getBeforeAfterImagePath(currentPair.after)}
                alt={`Suelo después del pulido profesional - ${currentPair.name}`}
                width={400}
                height={300}
                loading="lazy"
                key={`after-${currentIndex}`}
                className={`before-after__image ${isFading ? 'before-after__image--fade-out' : 'before-after__image--fade-in'}`}
              />
            </div>
            <figcaption>DESPUÉS</figcaption>
          </figure>
        </div>
        <p className="before-after__desc">
          Transformamos sus suelos en superficies brillantes y seguras.
        </p>
        {randomizedPairs.length > 1 && (
          <div className="before-after__indicators" aria-label="Indicadores de imágenes">
            {randomizedPairs.map((_, index) => (
              <span
                key={index}
                className={`before-after__indicator ${index === currentIndex ? 'before-after__indicator--active' : ''}`}
                aria-hidden="true"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
