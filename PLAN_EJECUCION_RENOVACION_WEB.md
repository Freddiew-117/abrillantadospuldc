# PLAN DE EJECUCIÓN COMPLETO – Renovación Web Abrillantados Pul D.C

## Documento de referencia
Basado en: `PRESUPUESTO_RENOVACION_WEB.md`, documentos en `req/` (SEOPlan, GoogleAdsPlan, Renovacion de web, optimizar_seo) y web actual.

**Objetivo:** Convertir la web HTML+CSS actual en una aplicación React+Vite completa, con máximo SEO, diseño mobile-first orientado a conversiones (llamadas/WhatsApp) y uso de los assets existentes.

---

## FASE 0: INVENTARIO Y PREPARACIÓN

### 0.1 Inventario de assets disponibles

| Asset | Ubicación | Uso previsto |
|-------|-----------|--------------|
| Logo | `images/puvicor2.png` | Header, footer, favicon |
| Hero/Background | `images/bgTop.jpg` | Hero section homepage |
| Maquinaria | `images/maquina4.jpg`, `images/maquinas.jpeg` | Sección "Cómo lo hacemos", Sobre nosotros |
| Pintura | `images/pintores.jpeg` | Sección servicios pintura |
| Galería | `images/prettyPhotoImages/*` (45+ imágenes) | Galería proyectos React con filtros |
| Slides | `images/slides/blank.gif` | Reemplazar por hero estático o slider con imágenes reales |
| Favicon | `images/favicon.png` | Favicon actual |

### 0.2 Inventario de contenido actual

- **Empresa:** Pulidos y Abrillantados Pul D.C
- **Ubicación:** Dos Hermanas, Sevilla 41702
- **Teléfonos:** +34 615 43 49 56 | +34 679 47 85 00
- **Servicios:** Mármol, terrazo, granito, hormigón, pintura interior, pulido sin polvo, acristalado
- **Mensajes clave:** 30+ años experiencia, sin polvo, presupuesto sin compromiso, limpieza absoluta
- **Zonas:** Dos Hermanas, Utrera, Alcalá de Guadaíra, Sevilla, Mairena del Alcor, El Viso

### 0.3 Herramientas ya configuradas (conservar)

- Google Tag Manager: `GTM-PG6K8NX7`
- Google Ads: `AW-952479133`, conversión contacto: `AW-952479133/r57mCLnbq_MCEJ3blsYD`
- Cookie Consent (cookieconsent v3)
- Google Consent Mode v2
- AdSense: `ca-pub-2765006404861481` (opcional según preferencias)

### 0.4 Estructura de datos de la galería (extraer del index actual)

Categorías: `branding` (mármol), `web` (terrazo), `polygraphy` (hormigón), `text_styles` (granito).  
Mapear cada imagen con: `src`, `alt`, `title`, `category`, `description`.

---

## FASE 1: CONFIGURACIÓN REACT + VITE

### 1.1 Crear proyecto React con Vite

1. Crear proyecto: `npm create vite@latest abrillantadospuldc -- --template react`
2. Entrar al proyecto: `cd abrillantadospuldc`
3. Instalar dependencias base: `npm install`

### 1.2 Dependencias adicionales

4. React Router: `npm install react-router-dom`
5. Librería para lightbox/galería (ej. yet-another-react-lightbox o similar): `npm install yet-another-react-lightbox`
6. Utilidades de imágenes (opcional): `npm install -D vite-plugin-image-optimizer` o similar para optimización en build
7. React Helmet para SEO: `npm install react-helmet-async`

### 1.3 Estructura de carpetas

```
src/
├── assets/
│   └── (imágenes optimizadas / referencias)
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ContactBar.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── ServicesIntro.jsx
│   │   ├── HowWeWork.jsx
│   │   ├── PaintingSection.jsx
│   │   └── CTASection.jsx
│   ├── about/
│   │   ├── Machinery.jsx
│   │   └── EquipmentList.jsx
│   ├── gallery/
│   │   ├── GalleryFilter.jsx
│   │   ├── GalleryGrid.jsx
│   │   ├── GalleryItem.jsx
│   │   └── Lightbox.jsx
│   ├── contact/
│   │   ├── ContactInfo.jsx
│   │   ├── ContactForm.jsx
│   │   └── Map.jsx
│   ├── shared/
│   │   ├── WhatsAppButton.jsx
│   │   ├── PhoneButton.jsx
│   │   ├── Testimonials.jsx
│   │   └── GuaranteeSection.jsx
│   └── seo/
│       ├── JsonLd.jsx
│       └── MetaTags.jsx
├── data/
│   ├── galleryData.js
│   ├── servicesData.js
│   ├── testimonialsData.js
│   └── seoKeywords.js
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── GalleryPage.jsx
│   ├── ContactPage.jsx
│   ├── LandingMarmol.jsx
│   └── LandingPremium.jsx
├── hooks/
│   └── useConversionTracking.js
├── App.jsx
├── main.jsx
└── index.css
public/
├── images/
│   ├── (copiar y organizar desde raíz)
│   └── ...
└── favicon.png
```

### 1.4 Vite config

8. Añadir alias para rutas limpias: `@/components`, `@/pages`, `@/data`
9. Configurar optimización de imágenes en build si se usa plugin
10. Definir `base` para deploy (ej. `/` o subdirectorio según hosting)

### 1.5 Variables de entorno

11. Crear `.env` para IDs de analytics/ads (evitar hardcodear en código)
12. Ejemplo: `VITE_GTM_ID=GTM-PG6K8NX7`, `VITE_GA_ID=...`, `VITE_ADS_ID=AW-952479133`, `VITE_WHATSAPP=34615434956`

---

## FASE 2: DISEÑO MOBILE-FIRST Y CONVERSIÓN

### 2.1 Principios de diseño (mobile-first)

13. Definir breakpoints: `320px`, `375px`, `768px`, `1024px`, `1280px`
14. Tipografía base: mínimo 16px en móvil, legible sin zoom
15. Espaciado táctil: botones mínimo 44x44px
16. Colores: conservar `#1fcdff` (acento actual), definir paleta consistente (primario, secundario, neutros)
17. Contraste: cumplir WCAG AA mínimo
18. Fuentes: Roboto existente o alternativa más distintiva; evitar genéricas

### 2.2 Barra de contacto sticky (conversión prioritaria)

19. Barra superior fija en móvil: "Llámanos" + "WhatsApp" siempre visibles
20. Colores de alto contraste para CTA (verde WhatsApp, azul llamada)
21. En scroll down: barra reducida o flotante que no oculte el contenido principal

### 2.3 Botón WhatsApp flotante

22. Posición: esquina inferior derecha, fijo
23. Diseño: círculo verde con icono WhatsApp, tamaño móvil 56px+
24. Mensaje predefinido: "Hola, me gustaría solicitar un presupuesto de pulido/abrillantado"
25. Apertura en nueva pestaña con `wa.me/34615434956?text=...`
26. Tracking: evento `gtag` en clic para conversión
27. Animación sutil para llamar atención sin ser intrusiva

### 2.4 Teléfonos clicables

28. Todos los teléfonos como `tel:+34615434956` y `tel:+34679478500`
29. Formato visible: +34 615 43 49 56 | +34 679 47 85 00
30. Evento de conversión en clic (mantener lógica actual de GTM/gtag)
31. En móvil: botón "Llamar ahora" destacado en secciones clave

### 2.5 Jerarquía visual para conversión

32. Hero: CTA principal = WhatsApp o Llamar (texto corto y directo)
33. Cada sección de servicio: CTA secundario (WhatsApp/teléfono)
34. Antes de footer: CTA final "Solicita presupuesto sin compromiso"
35. Evitar formularios largos; priorizar contacto directo (llamada/WhatsApp)

---

## FASE 3: COMPONENTES CORE Y PÁGINAS

### 3.1 Layout base

36. `Header`: logo (enlace a home), navegación (Inicio, Sobre Nosotros, Proyectos, Contacto), menú hamburguesa en móvil
37. `ContactBar`: barra superior con slogan + teléfonos + WhatsApp
38. `Footer`: links, teléfonos, aviso legal (gpdr.html), copyright
39. `Navbar`: scroll suave a secciones (single-page) o React Router para SPA multi-página

### 3.2 Hero / Homepage

40. Hero principal: imagen `bgTop.jpg` o collage de trabajos con overlay
41. Título: "Pulidos y Abrillantados Pul D.C" o variante optimizada SEO
42. Subtítulo: propuesta de valor corta (ej. "30 años de experiencia. Presupuesto sin compromiso.")
43. CTA principal: "WhatsApp" + "Llamar" (2 botones visibles)
44. Altura en móvil: ~70vh; en desktop: ~85vh

### 3.3 Sección intro servicios (3 columnas)

45. Quiénes somos / Qué ofrecemos / Pulidores profesionales
46. Mantener texto actual, mejorar tipografía y espaciado
47. Iconos o ilustraciones mínimas si aportan claridad

### 3.4 Sección "Cómo lo hacemos"

48. Imagen `maquina4.jpg` a un lado (responsive: arriba en móvil)
49. Texto actual sobre métodos, masilla, diamantes, pulido sin polvo, acristalados
50. Lista o bullets para escaneo rápido en móvil

### 3.5 Sección pintura

51. Imagen `pintores.jpeg` con `alt` descriptivo
52. Lista de puntos: Calidad, Técnicas, Limpieza, Presupuestos, Profesionalismo
53. CTA: "Consulta por WhatsApp" o teléfono

### 3.6 Sección Sobre nosotros / Maquinaria

54. Imagen `maquinas.jpeg`
55. Lista de equipos: pulidoras alta revolución, hormigón, pequeñas, grandes, rincones/peldaños, rotativas

### 3.7 Galería de proyectos (React)

56. Filtros: Todos, Hormigón, Mármol, Terrazos, Granitos
57. Grid responsivo: 1 col móvil, 2 tablet, 3 desktop
58. Lazy loading de imágenes con `loading="lazy"`
59. Lightbox al clic (sin depender de prettyPhoto/jQuery)
60. Datos en `galleryData.js`: extraer del HTML actual las 45+ imágenes con categoria, título, alt
61. Cada imagen: `alt` SEO (ej. "Pulido de mármol profesional en Dos Hermanas - Proyecto Pul D.C")

### 3.8 Sección Testimonios (nueva)

62. Componente `Testimonials.jsx` con slider o grid
63. Datos en `testimonialsData.js` (cliente debe proporcionar 3–5 testimonios según req)
64. Estructura: nombre, texto, valoración (opcional), foto (opcional)
65. Posición: después de galería o antes de contacto
66. Copy según req: experiencia premium, puntualidad, resultados

### 3.9 Sección garantías (según req Renovación)

67. "Garantía de 1 año en brillo y acabado"
68. "25+ años transformando suelos de alto valor"
69. Logos de clientes/empresas si se proporcionan

### 3.10 Contacto

70. Texto descriptivo de cobertura (Dos Hermanas, Utrera, etc.)
71. Dirección: Dos Hermanas, Sevilla 41702
72. Teléfonos clicables
73. Mapa: iframe Google Maps actual (mantener embed)
74. Formulario de contacto funcional (envío por email o servicio backend/Formspree)
75. Campos: nombre, email, teléfono, mensaje; validación básica
76. CTA secundario: "O escríbenos por WhatsApp" con enlace directo

---

## FASE 4: SEO COMPLETO

### 4.1 Meta tags por página

77. `index.html`: charset, viewport, lang="es"
78. Títulos únicos por ruta (máx. 60 caracteres) con palabra clave + ciudad
79. Meta description única por página (máx. 155–160 caracteres)
80. Open Graph: og:title, og:description, og:image, og:url, og:type
81. Twitter Card: twitter:card, twitter:title, twitter:description
82. Canonical URL en cada página
83. Usar `react-helmet-async` para meta dinámicos en SPA

### 4.2 Palabras clave (según req SEOPlan y GoogleAdsPlan)

84. Grupos principales:
   - Pulido mármol: "pulido de mármol profesional", "abrillantado de suelos de mármol", "restauración de suelos de mármol"
   - Local: "en Dos Hermanas", "en Sevilla", "Sevilla"
   - Premium: "pulido mármol pisos de lujo", "suelos de alto valor"
   - Empresas: "pulido mármol hoteles", "suelos comerciales premium"
85. Crear `seoKeywords.js` con mapeo página → keywords
86. Integrar keywords en H1, H2, primeros párrafos, alt de imágenes

### 4.3 Estructura de encabezados

87. Una sola H1 por página con keyword principal
88. H2/H3 para subsecciones lógicas
89. Ejemplo Home: H1 "Pulido profesional de mármol en Dos Hermanas | Pul D.C"
90. H2: "Nuestros servicios", "Cómo trabajamos", "Proyectos", etc.

### 4.4 Imágenes

91. Todas las imágenes con atributo `alt` descriptivo y local (ej. "Pulido de terrazo profesional en Sevilla - Pul D.C")
92. Nombres de archivo descriptivos (evitar números genéricos donde sea posible)
93. Formatos modernos: WebP con fallback JPG/PNG si el navegador no soporta
94. Lazy loading para imágenes fuera del viewport inicial
95. Dimensiones explícitas (width/height) para evitar CLS

### 4.5 Schema markup (JSON-LD)

96. `LocalBusiness`: nombre, dirección, teléfono, horario, url, sameAs (redes si hay)
97. `Service`: para cada servicio principal (pulido mármol, terrazo, granito, hormigón, pintura)
98. `Organization`: para el logo y datos corporativos
99. Componente `JsonLd.jsx` que inyecte script en head según la página actual

### 4.6 URLs y routing

100. Rutas SEO-friendly: `/`, `/sobre-nosotros`, `/proyectos`, `/contacto`
101. Landing pages adicionales: `/pulido-marmol-dos-hermanas`, `/abrillantado-profesional-sevilla` (o según plan Ads)
102. React Router en modo `BrowserRouter` con rutas definidas
103. Para SPA: prerender o SSG si se usa (opcional en fase inicial)

### 4.7 Sitemap y robots

104. Generar `sitemap.xml` con todas las URLs públicas
105. `robots.txt` con Sitemap y reglas básicas (allow /, disallow admin si aplica)
106. Incluir sitemap en Google Search Console tras deploy

### 4.8 Core Web Vitals

107. LCP: imágenes críticas optimizadas, preload de hero si es necesario
108. FID/INP: evitar JavaScript bloqueante, delegación de eventos
109. CLS: dimensiones fijas en imágenes, evitar inserción dinámica de contenido arriba del fold
110. Minificación y code splitting con Vite por defecto

---

## FASE 5: LANDING PAGES PARA GOOGLE ADS (OPCIÓN 2)

### 5.1 Landing "Pulido de mármol profesional"

111. Ruta: `/pulido-marmol-dos-hermanas` o `/pulido-marmol-sevilla`
112. H1 alineado con anuncio: "Pulido profesional de mármol en Dos Hermanas"
113. Contenido: beneficios, proceso, galería filtrada por mármol
114. CTA principal: WhatsApp y teléfono (sin formulario largo)
115. Schema Service específico para pulido de mármol
116. Meta title/description con keyword exacta del anuncio

### 5.2 Landing "Restauración / Abrillantado premium"

117. Ruta: `/abrillantado-profesional-sevilla` o similar
118. H1: "Abrillantado profesional de suelos de mármol en Sevilla"
119. Contenido orientado a clientes premium (viviendas lujo, empresas)
120. Testimonios destacados
121. Sección garantías

### 5.3 Consistencia con Google Ads

122. Títulos y descripciones de landing = mensaje del anuncio (según GoogleAdsPlan)
123. Extensiones de anuncio: teléfono, enlace a landing
124. Evitar "barato", "económico", "precio" en copy (palabras negativas en Ads)

---

## FASE 6: TRACKING Y ANALYTICS

### 6.1 Google Tag Manager

125. Mantener GTM `GTM-PG6K8NX7` en `index.html`
126. Cargar script GTM en React (en `index.html` o componente `Analytics.jsx`)
127. Asegurar que GTM se carga en SPA (historia de cambios de ruta si aplica)

### 6.2 Conversiones

128. Conversión llamada: mantener `gtag('event','conversion',{'send_to':'AW-952479133/r57mCLnbq_MCEJ3blsYD'})` en clic en teléfono
129. Conversión WhatsApp: crear evento equivalente para clics en botón WhatsApp
130. Conversión formulario: evento al enviar formulario de contacto correctamente
131. Crear hook `useConversionTracking` que centralice estos eventos
132. Consent Mode v2: respetar preferencias de cookies (analytics/marketing)
133. No disparar conversiones si el usuario ha rechazado marketing

### 6.3 Cookie consent

134. Integrar cookieconsent o alternativa React-friendly
135. Al aceptar analytics: activar GA4 si se usa
136. Al aceptar marketing: activar conversiones de Ads
137. Enlazar aviso legal / política de privacidad (gpdr.html)

---

## FASE 7: FORMULARIO Y FUNCIONALIDADES FINALES

### 7.1 Formulario de contacto

138. Campos: nombre, email, teléfono, mensaje
139. Validación: email válido, teléfono formato español, campos obligatorios
140. Opción A: Formspree / Netlify Forms / similar (sin backend propio)
141. Opción B: endpoint propio (requiere backend)
142. Mensaje de éxito/error visible
143. No bloquear con captcha agresivo; considerar honeypot si hay spam

### 7.2 Integración WhatsApp mejorada

144. Botón flotante siempre visible
145. Enlaces contextuales en CTAs ("Consulta por WhatsApp")
146. Mensaje personalizado por sección (ej. "Hola, quiero información sobre pulido de mármol")

### 7.3 Optimización de rendimiento

147. Code splitting por rutas (React.lazy + Suspense)
148. Lazy load de componentes pesados (galería, mapa)
149. Preconnect a dominios externos (fonts, maps, analytics)
150. Comprimir assets en build (Vite ya minifica)

---

## FASE 8: CONTENIDO Y COPYWRITING

### 8.1 Textos SEO (según req optimizar_seo)

151. Redacción de H1/H2/H3 con keywords locales
152. Párrafos de valor en cada página (no keyword stuffing)
153. Zonas de cobertura mencionadas: Dos Hermanas, Utrera, Alcalá, Sevilla, Mairena, El Viso
154. Palabras premium: "profesional", "premium", "experiencia", "garantía"

### 8.2 Testimonios

155. Solicitar al cliente 3–5 testimonios con: nombre, valoración, texto, foto (opcional)
156. Colocar en `testimonialsData.js`
157. Formato: tarjeta con foto, nombre, texto, estrellas si procede

### 8.3 Aviso legal / GDPR

158. Mantener `gpdr.html` y enlazarlo desde footer
159. Si se migra a React: ruta `/aviso-legal` con contenido equivalente

---

## FASE 9: PRUEBAS Y DESPLIEGUE

### 9.1 Pruebas funcionales

160. Navegación en móvil y desktop
161. Formulario: envío real y validación
162. Todos los enlaces (internos, tel, WhatsApp, mailto)
163. Galería: filtros, lightbox, lazy load
164. Cookie consent y respeto de Consent Mode
165. Eventos de conversión (comprobar en modo debug de GTM/Ads)

### 9.2 Pruebas SEO

166. Meta tags en cada ruta (validar con herramienta o inspección)
167. Schema con Google Rich Results Test
168. Imágenes: alt, tamaños razonables
169. Velocidad: Lighthouse (móvil y desktop)

### 9.3 Despliegue

170. Build: `npm run build`
171. Subir `dist/` a hosting (FTP, Netlify, Vercel, etc.)
172. Configurar dominio y HTTPS
173. Redirigir tráfico antiguo si cambia estructura de URLs
174. Enviar sitemap a Google Search Console
175. Verificar GTM y conversiones en entorno real
176. Comprobar que `gpdr.html` y recursos estáticos (imágenes) cargan correctamente

---

## FASE 10: GOOGLE BUSINESS PROFILE (OPCIONAL PREMIUM)

177. Completar perfil: nombre, dirección, teléfono, horario, fotos
178. Categorías: "Pulido de suelos", "Restauración de suelos", "Servicios de limpieza profesional"
179. Enlace a la web renovada
180. Solicitar reseñas a clientes satisfechos
181. Publicaciones periódicas si el negocio lo permite

---

## RESUMEN DE ENTREGABLES

| Entregable | Descripción |
|------------|-------------|
| Proyecto React+Vite | Código fuente en carpeta `abrillantadospuldc/` o similar |
| Build de producción | Carpeta `dist/` lista para subir |
| Páginas | Home, Sobre Nosotros, Proyectos, Contacto |
| Landing pages | 2 páginas para Google Ads (según opción) |
| SEO | Meta, Schema, sitemap, robots, keywords integradas |
| Conversiones | Tracking llamadas, WhatsApp, formulario |
| Diseño | Mobile-first, CTAs prioritarios, uso de assets existentes |
| Contenido | Textos optimizados, testimonios (cuando se proporcionen) |

---

## CRONOGRAMA SUGERIDO (en líneas generales)

| Semana | Foco principal |
|--------|----------------|
| 1 | Config React+Vite, estructura, diseño base, Hero, layout |
| 2 | Componentes home, about, galería React, datos de galería |
| 3 | SEO meta/schema, testimonios, formulario, WhatsApp mejorado |
| 4 | Pruebas, ajustes, despliegue, CTA y conversiones |
| 5–6 (opción 2) | Landing pages Ads, tracking avanzado, contenido premium |

---

## NOTAS FINALES

- **Assets:** Usar imágenes existentes en `images/` y `images/prettyPhotoImages/`; optimizar en build si es posible.
- **Contenido del cliente:** Textos actualizados, testimonios e imágenes adicionales según disponibilidad.
- **Hosting:** No incluido; preparar build estático compatible con cualquier hosting.
- **Revisiones:** Incluir 1 ronda de revisiones menores por fase; cambios mayores se cotizan aparte.
- **Garantía:** Corrección de errores funcionales durante 1 mes post-lanzamiento.

---

*Plan elaborado a partir de PRESUPUESTO_RENOVACION_WEB.md y documentos en `req/`. Validez y priorización sujeta a acuerdo con el cliente.*
