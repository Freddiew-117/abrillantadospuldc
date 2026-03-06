# Integración Google Business Profile - Guía de Configuración

## ✅ Beneficios SEO

1. **Schema markup mejorado** - Google reconoce tu perfil oficial
2. **Rich snippets** - Estrellas y reseñas en resultados de búsqueda
3. **Trust signals** - Enlaces cruzados entre tu web y Google Business
4. **Local SEO** - Mejor posicionamiento en búsquedas locales
5. **Consistencia NAP** - Name, Address, Phone sincronizados

## 📋 Pasos para Configurar

### 1. Obtener tu Google Business Profile URL

**Opción A: Desde Google Maps**
1. Busca tu negocio en Google Maps
2. Haz clic en "Compartir" → "Copiar enlace"
3. El enlace será algo como: `https://maps.app.goo.gl/...` o `https://www.google.com/maps/place/...`

**Opción B: Desde Google Business Profile**
1. Ve a [business.google.com](https://business.google.com)
2. Selecciona tu negocio
3. Ve a "Información" → "Compartir perfil"
4. Copia el enlace

### 2. Obtener Place ID (opcional, para API)

1. Ve a [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Busca tu negocio
3. Copia el Place ID (ej: `ChIJ...`)

### 3. Obtener Coordenadas GPS

1. Abre Google Maps
2. Busca tu dirección exacta
3. Clic derecho → "¿Qué hay aquí?"
4. Copia las coordenadas (lat, lng)

### 4. Actualizar Datos

Edita `src/data/googleBusiness.js`:

```javascript
export const googleBusiness = {
  profileUrl: 'https://maps.app.goo.gl/TU_ENLACE_AQUI',
  placeId: 'ChIJ...', // Opcional
  // Dirección física (para Schema.org LocalBusiness)
  address: {
    streetAddress: 'Calle Ejemplo, 12', // Opcional: deja '' si no hay dirección pública
    addressLocality: 'Dos Hermanas',
    addressRegion: 'Sevilla',
    postalCode: '41702',
    addressCountry: 'ES',
  },
  geo: {
    latitude: 37.2861, // Tu latitud
    longitude: -5.9209, // Tu longitud
  },
  rating: {
    value: 5.0, // Promedio de reseñas
    count: 12, // Número total de reseñas
  },
  // Horario (opcional): formato ['Mo-Fr 09:00-18:00', 'Sa 09:00-14:00']
  openingHours: null,
}
```

### 4.1 Marcado JSON-LD LocalBusiness (Schema)

El sitio ya incluye **datos estructurados** en formato JSON-LD para decirle a Google:

- **Que eres una empresa física** (`@type: LocalBusiness`)
- **Dónde estás** (`address` + `geo`)
- **Qué servicio das** (`description` + `serviceType` + schemas de `Service`)

Se inyecta en el `<head>` en todas las páginas desde `src/components/seo/JsonLd.jsx`. La dirección y el resto de datos se leen de `googleBusiness.js`. Si rellenas `streetAddress` y `openingHours`, el schema los incluirá automáticamente.

### 5. Actualizar Reseñas Manualmente

Para mostrar reseñas 5/5 en el sitio:

1. Ve a tu Google Business Profile
2. Copia las reseñas 5 estrellas
3. Actualiza `src/data/testimonialsData.js`:

```javascript
export const testimonials = [
  {
    name: 'Nombre Cliente',
    text: 'Texto de la reseña...',
    rating: 5,
    photo: null,
    googleReviewUrl: 'https://maps.app.goo.gl/...', // Enlace directo a la reseña
  },
]
```

### 6. Variable de Entorno (Opcional)

Si quieres usar una variable de entorno para el URL:

1. Añade a `.env`:
```
VITE_GOOGLE_BUSINESS_URL=https://maps.app.goo.gl/...
```

2. El footer ya está configurado para usarla automáticamente.

## 🔍 Verificar Schema Markup

1. Ve a [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Introduce tu URL
3. Verifica que aparezca:
   - ✅ **LocalBusiness** (nombre, dirección, teléfono, descripción, serviceType, areaServed)
   - ✅ **PostalAddress** (localidad, provincia, código postal; streetAddress si lo rellenaste)
   - ✅ **ContactPoint** (teléfono, tipo customer service)
   - ✅ **AggregateRating** (si tienes reseñas y count > 0)
   - ✅ **sameAs** con tu Google Business URL
   - ✅ Varios **Service** (pulido mármol, terrazo, cristalizado, etc.)

## 📊 Monitoreo

- **Google Search Console**: Verifica que Google indexe tu schema
- **Google Business Profile**: Mantén NAP consistente
- **Actualiza reseñas**: Sincroniza reseñas 5/5 periódicamente

## 🚀 Próximos Pasos (Opcional)

### Integración con Places API

Para automatizar reseñas:

1. Crea proyecto en [Google Cloud Console](https://console.cloud.google.com)
2. Habilita Places API
3. Obtén API key
4. Configura en `.env`:
   ```
   VITE_GOOGLE_PLACES_API_KEY=tu_api_key
   VITE_GOOGLE_PLACE_ID=tu_place_id
   ```

Luego puedes crear un hook `useGoogleReviews` para fetch automático.
