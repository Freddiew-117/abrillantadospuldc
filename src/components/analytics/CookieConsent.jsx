import { useEffect } from 'react'

/**
 * Inicializa cookieconsent (orestbida) y actualiza gtag Consent Mode v2
 * Al aceptar marketing: permite conversiones de Google Ads
 */
export default function CookieConsent() {
  useEffect(() => {
    const initCookieConsent = () => {
      if (typeof window.CookieConsent === 'undefined') {
        setTimeout(initCookieConsent, 500)
        return
      }

      const updateGtagConsent = (categories = []) => {
        const consentUpdate = {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          functionality_storage: 'denied',
          personalization_storage: 'denied',
          security_storage: 'granted',
        }
        if (categories.includes('analytics')) {
          consentUpdate.analytics_storage = 'granted'
          consentUpdate.functionality_storage = 'granted'
        }
        if (categories.includes('marketing')) {
          consentUpdate.ad_storage = 'granted'
          consentUpdate.ad_user_data = 'granted'
          consentUpdate.ad_personalization = 'granted'
          consentUpdate.personalization_storage = 'granted'
          window.__consent_marketing = true
        } else {
          window.__consent_marketing = false
        }
        if (window.gtag) {
          window.gtag('consent', 'update', consentUpdate)
        }
      }

      window.CookieConsent.run({
        guiOptions: {
          consentModal: {
            layout: 'box',
            position: 'bottom left',
            equalWeightButtons: true,
            flipButtons: false,
          },
          preferencesModal: {
            layout: 'box',
            position: 'right',
            equalWeightButtons: true,
            flipButtons: false,
          },
        },
        categories: {
          necessary: { readOnly: true },
          analytics: {
            autoClear: {
              cookies: [{ name: /^_ga/ }, { name: '_gid' }],
            },
          },
          marketing: {
            autoClear: {
              cookies: [{ name: /^_gcl/ }, { name: /^_fbp/ }],
            },
          },
        },
        language: {
          default: 'es',
          translations: {
            es: {
              consentModal: {
                title: '🍪 Utilizamos cookies',
                description: 'Utilizamos cookies para mejorar su experiencia, personalizar contenido y analizar el tráfico. Al aceptar, consiente nuestro uso de cookies.',
                acceptAllBtn: 'Aceptar todo',
                acceptNecessaryBtn: 'Solo necesarias',
                showPreferencesBtn: 'Gestionar preferencias',
                footer: '<a href="/gpdr.html">Política de privacidad</a> · <a href="/contacto">Contacto</a>',
              },
              preferencesModal: {
                title: 'Gestionar preferencias de cookies',
                acceptAllBtn: 'Aceptar todo',
                acceptNecessaryBtn: 'Rechazar todo',
                savePreferencesBtn: 'Guardar preferencias',
                closeIconLabel: 'Cerrar',
                serviceCounterLabel: 'Servicio|Servicios',
                sections: [
                  {
                    title: 'Uso de cookies',
                    description: 'Utilizamos cookies para asegurar las funcionalidades básicas del sitio. Puede elegir habilitar o deshabilitar cada categoría. Lea la <a href="/gpdr.html" class="cc-link">política de privacidad</a>.',
                  },
                  {
                    title: 'Cookies necesarias <span class="pm__badge">Siempre activas</span>',
                    description: 'Esenciales para el funcionamiento del sitio web.',
                    linkedCategory: 'necessary',
                  },
                  {
                    title: 'Cookies de análisis',
                    description: 'Nos permiten medir visitas y fuentes de tráfico.',
                    linkedCategory: 'analytics',
                  },
                  {
                    title: 'Cookies de marketing',
                    description: 'Se utilizan para que los anuncios sean más relevantes.',
                    linkedCategory: 'marketing',
                  },
                ],
              },
            },
          },
        },
        onConsent: ({ categories = [] }) => {
          updateGtagConsent(categories)
        },
        onChange: ({ changedCategories = [], cookie }) => {
          const categories = cookie?.categories || []
          updateGtagConsent(categories)
        },
        onFirstConsent: ({ cookie }) => {
          const categories = cookie?.categories || []
          updateGtagConsent(categories)
        },
      })
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initCookieConsent)
    } else {
      initCookieConsent()
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', initCookieConsent)
    }
  }, [])

  return null
}
