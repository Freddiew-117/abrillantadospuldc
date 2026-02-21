# Configuración de Antes & Después - Rotación Automática

## 📁 Estructura de Carpetas

Coloca las imágenes en:
```
public/images/beforeafter/
```

## 📸 Formato de Nombres

Las imágenes deben seguir este patrón:
- **Antes**: `nombre-1.jpeg` (o `.jpg`, `.png`, `.webp`)
- **Después**: `nombre-2.jpeg` (debe coincidir el nombre base)

### Ejemplos:
- `blanco-1.jpeg` y `blanco-2.jpeg` ✅
- `marmol-1.jpg` y `marmol-2.jpg` ✅
- `terrazo-1.png` y `terrazo-2.png` ✅

## 🔧 Agregar Nuevas Imágenes (Automático)

1. **Sube las imágenes** a `public/images/beforeafter/`
   - Ejemplo: `cocina-1.jpeg` y `cocina-2.jpeg`

2. **Ejecuta el script de generación**:
   ```bash
   npm run generate-beforeafter
   ```

3. **¡Listo!** El script detecta automáticamente todos los pares y actualiza `beforeAfterData.js`
   - Las imágenes se mostrarán con rotación cada 10 segundos
   - Orden aleatorio al cargar la página

### ¿Cómo funciona?

El script `generateBeforeAfterPairs.mjs` escanea la carpeta `public/images/beforeafter/` y:
- Detecta archivos que siguen el patrón `nombre-1.ext` y `nombre-2.ext`
- Genera automáticamente el archivo `src/data/beforeAfterData.js`
- Solo incluye pares completos (ambas imágenes deben existir)

## ⚙️ Características

- ✅ **Rotación automática**: Cambia cada 10 segundos
- ✅ **Orden aleatorio**: Se mezclan al cargar la página
- ✅ **Transiciones suaves**: Fade entre imágenes
- ✅ **Indicadores**: Muestra qué par se está mostrando
- ✅ **Dinámico**: Solo agrega pares al array, el resto es automático

## 🎨 Personalización

### Cambiar intervalo de rotación

En `BeforeAfter.jsx`, línea con `10000`:
```javascript
}, 10000) // Cambia a 5000 para 5 segundos, 15000 para 15 segundos
```

### Desactivar rotación

Comenta el `useEffect` en `BeforeAfter.jsx` si quieres mostrar solo el primer par.
