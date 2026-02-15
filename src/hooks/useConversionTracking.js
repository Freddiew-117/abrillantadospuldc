/**
 * Hook para centralizar tracking de conversiones
 * - Llamadas (clics en teléfono)
 * - WhatsApp
 * - Formulario de contacto
 * Respeta Consent Mode v2: solo dispara si el usuario ha aceptado marketing
 */
const CONVERSION_ID = import.meta.env.VITE_ADS_CONVERSION_ID || 'AW-952479133/r57mCLnbq_MCEJ3blsYD';

function trackConversion() {
  if (typeof window === 'undefined' || !window.gtag) return
  // Solo disparar conversiones si el usuario ha aceptado cookies de marketing
  if (window.__consent_marketing !== true) return
  window.gtag('event', 'conversion', { send_to: CONVERSION_ID });
}

export function useConversionTracking() {
  const trackPhoneClick = () => {
    trackConversion('phone_click');
  };

  const trackWhatsAppClick = () => {
    trackConversion('whatsapp_click');
  };

  const trackFormSubmit = () => {
    trackConversion('form_submit');
  };

  return { trackPhoneClick, trackWhatsAppClick, trackFormSubmit };
}
