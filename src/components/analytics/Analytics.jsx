import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * GTM SPA: push page_view en cambios de ruta para tracking correcto
 */
export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: location.pathname + location.search,
        page_title: document.title,
      })
    }
  }, [location.pathname, location.search])

  return null
}
