import { useState, useEffect, useRef } from 'react'
import { testimonials } from '@/data/testimonialsData'
import { googleBusiness } from '@/data/googleBusiness'

export default function Testimonials() {
  if (!testimonials?.length) return null

  const scrollContainerRef = useRef(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isUserScrolling, setIsUserScrolling] = useState(false)
  const scrollTimeoutRef = useRef(null)

  const googleLogo = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )

  // Auto-scroll function
  useEffect(() => {
    if (!scrollContainerRef.current || testimonials.length <= 3 || isUserScrolling) return

    const container = scrollContainerRef.current
    const cardWidth = container.querySelector('.testimonial-card')?.offsetWidth || 0
    const gap = 24 // 1.5rem = 24px
    const scrollAmount = cardWidth + gap

    const autoScroll = () => {
      if (isUserScrolling) return

      const maxScroll = container.scrollWidth - container.clientWidth
      const currentScroll = container.scrollLeft

      if (currentScroll >= maxScroll - 10) {
        // Reset to beginning smoothly
        container.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        // Scroll to next card
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }

    const interval = setInterval(autoScroll, 5000) // Scroll every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length, isUserScrolling])

  // Handle user scroll interaction
  const handleScroll = () => {
    setIsUserScrolling(true)
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    // Reset user scrolling flag after 3 seconds of no interaction
    scrollTimeoutRef.current = setTimeout(() => {
      setIsUserScrolling(false)
    }, 3000)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section className="testimonials section">
      <div className="section__inner">
        <h2 className="section-title">Testimonios</h2>
        
        {/* Disclaimer Banner */}
        <div className="testimonials__disclaimer">
          <div className="testimonials__disclaimer-content">
            <span className="testimonials__disclaimer-stars">★★★★★</span>
            <span className="testimonials__disclaimer-text">
              Reviews Reales de Clientes en Google, tenemos 5 estrellas!
            </span>
            {googleBusiness.profileUrl  && (
              <a
                href={googleBusiness.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonials__disclaimer-link"
              >
                Ver en Google
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Testimonials Horizontal Scroll */}
        <div 
          ref={scrollContainerRef}
          className="testimonials__scroll-container"
          onScroll={handleScroll}
        >
          {testimonials.map((testimonial, idx) => (
            <blockquote key={idx} className="testimonial-card">
              {/* Google Logo outside banner */}
              <div className="testimonial-card__header">
                <div className="testimonial-card__google-logo">
                  {googleLogo}
                </div>
                {/* Google Review Banner */}
                <div className="testimonial-card__google-banner">
                  <span>Review de Google</span>
                </div>
              </div>
              
              {/* Rating Stars */}
              <div className="testimonial-card__rating" aria-label="5 estrellas">
                <span className="testimonial-card__star">★</span>
                <span className="testimonial-card__star">★</span>
                <span className="testimonial-card__star">★</span>
                <span className="testimonial-card__star">★</span>
                <span className="testimonial-card__star">★</span>
              </div>
              
              {/* Testimonial Text */}
              <p className="testimonial-card__text">"{testimonial.text}"</p>
              
              {/* Author */}
              <cite className="testimonial-card__author">— {testimonial.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
