// Google Business Profile data - Update with your actual Google Business Profile URL
// Find your Place ID: https://developers.google.com/maps/documentation/places/web-service/place-id

export const googleBusiness = {
  // Your Google Business Profile URL (get from share link or Google Maps)
  profileUrl: 'https://share.google/WaJdspGoxUSwFbUiA', // UPDATE THIS with your actual Google Business Profile URL

  // Place ID (optional, for Places API integration)
  placeId: null, // e.g., 'ChIJ...' - Get from Place ID finder

  // Dirección física (para Schema.org LocalBusiness)
  // Rellena streetAddress cuando tengas la dirección exacta
  address: {
    streetAddress: '', // Ej: 'Calle Ejemplo, 12' — dejar '' si no hay dirección pública
    addressLocality: 'Dos Hermanas',
    addressRegion: 'Sevilla',
    postalCode: '41702',
    addressCountry: 'ES',
  },

  // Business coordinates (for LocalBusiness schema)
  geo: {
    latitude: 37.2861, // UPDATE with your actual coordinates
    longitude: -5.9209, // UPDATE with your actual coordinates (Dos Hermanas approximate)
  },

  // Aggregate rating (update manually or fetch via API)
  rating: {
    value: 5.0, // UPDATE with your actual average rating
    count: 0, // UPDATE with total review count
  },

  // Opening hours (optional - add if you have fixed hours)
  openingHours: null, // e.g. ['Mo-Fr 09:00-18:00', 'Sa 09:00-14:00']
}
