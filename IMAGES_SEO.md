# Guía SEO Visual: Nombres de archivo e imágenes

Antes de subir imágenes, renómbralas con nombres descriptivos (evitar IMG_001.jpg, pic6.jpg, etc.). Así Google y los usuarios pueden entender el contenido por la URL del archivo.

## Formato recomendado
`[tipo-trabajo]-[material]-[contexto]-[localidad].(jpg|webp|png)`

Ejemplo: `pulido-suelo-marmol-sevilla-reforma.jpg`  
Ejemplo: `abrillantado-terrazo-vivienda-tomares-aljarafe.jpg`

---

## Hero (`public/images/hero/`)

| Archivo actual   | Nombre SEO sugerido |
|------------------|----------------------|
| vertical1.jpg    | abrillantado-marmol-vivienda-tomares-aljarafe.jpg |
| vertical2.jpg    | cristalizado-terrazo-portal-mairena-aljarafe.jpg |
| vertical3.jpg    | restauracion-suelo-brillo-espejo-chalet-bormujos.jpg |
| vertical4.jpg    | pulido-abrillantado-vivienda-espartinas.jpg |
| 1.webp           | restauracion-suelos-gines-sevilla.webp |
| 2.webp           | cristalizado-vivienda-castilleja-cuesta.webp |
| 4.jpg            | abrillantado-terrazo-comunidad-nervion-sevilla.jpg |
| 5.jpg            | marmol-restaurado-triana-sevilla.jpg |

---

## Antes / Después (`public/images/beforeafter/`)

| Archivo actual   | Nombre SEO sugerido |
|------------------|----------------------|
| blanco-1.jpeg    | suelo-blanco-antes-pulido-tomares.jpeg |
| blanco-2.jpeg    | resultado-abrillantado-blanco-tomares.jpeg |
| encimera-1.jpeg  | encimera-antes-tratamiento-mairena.jpeg |
| encimera-2.jpeg  | encimera-restaurada-mairena-aljarafe.jpeg |
| escalera-1.jpeg   | escalera-antes-pulido-bormujos.jpeg |
| escalera-2.jpeg  | resultado-abrillantado-escalera-bormujos.jpeg |
| hormigon-1.jpeg  | hormigon-antes-pulido-diamantado-espartinas.jpeg |
| hormigon-2.jpeg  | hormigon-pulido-diamantado-espartinas.jpeg |
| marmol-1.jpeg    | marmol-antes-cristalizado-gines.jpeg |
| marmol-2.jpeg    | resultado-abrillantado-marmol-gines-aljarafe.jpeg |
| pasillo-1.jpeg   | pasillo-antes-castilleja-cuesta.jpeg |
| pasillo-2.jpeg   | pasillo-restaurado-brillo-espejo-castilleja.jpeg |
| rellano-1.jpeg   | rellano-portal-antes-nervion.jpeg |
| rellano-2.jpeg   | abrillantado-rellano-comunidad-nervion-sevilla.jpeg |
| terrazo-1.jpeg   | terrazo-antes-cristalizado-dos-hermanas.jpeg |
| terrazo-2.jpeg   | resultado-abrillantado-terrazo-dos-hermanas.jpeg |

**Importante:** Si renombras estos archivos, actualiza los nombres en `src/data/beforeAfterData.js` (campos `before` y `after`) para que coincidan.

---

## Galería (`public/images/prettyPhotoImages/`)

Misma idea: nombres que describan material y resultado. Ejemplos:

| Ejemplo actual | Nombre SEO sugerido |
|----------------|----------------------|
| Marmol20.jpeg  | resultado-abrillantado-marmol-vivienda-tomares.jpeg |
| Terrazo2.jpeg | abrillantado-terrazo-vivienda-mairena-aljarafe.jpeg |
| pic6.jpg       | pulido-diamantado-hormigon-nave-dos-hermanas.jpg |
| marmol3.jpg    | marmol-diseno-restaurado-bormujos.jpg |
| escalera1.jpeg | pulido-escalera-marmol-rosa-portugues-gines.jpeg |

Si renombras archivos de la galería, actualiza `src` y `thumb` en `src/data/galleryData.js` para cada ítem.

---

## Otros recursos

| Archivo actual   | Nombre SEO sugerido |
|------------------|----------------------|
| maquina4.jpg     | maquinaria-restauracion-pulido-diamantado-dos-hermanas.jpg |
| maquinas.jpeg    | maquinaria-profesional-aljarafe-sevilla.jpeg |
| puvicor2.png    | logo-pulidos-abrillantados-puldc-sevilla.png |
| pintores.jpeg    | pintura-interiores-viviendas-comunidades-dos-hermanas.jpeg |
| bgTop.jpg        | fondo-hero-suelos-sevilla-aljarafe.jpg |

---

## Atributo ALT

Todas las imágenes de la web tienen ya un **texto alternativo (ALT)** descriptivo con localización, por ejemplo:

- *"Resultado de abrillantado de terrazo en una vivienda de Tomares, Aljarafe"*
- *"Cristalizado de terrazo en portal de comunidad en Mairena del Aljarafe"*

Las localizaciones se reparten entre: Tomares, Mairena del Aljarafe, Bormujos, Espartinas, Gines, Castilleja de la Cuesta, Nervión, Triana, Sevilla, Dos Hermanas, Palomares del Río, Almensilla, Sanlúcar la Mayor, Simon Verde, Aljarafe, Utrera.

No hace falta repetir "Pul D.C" en cada ALT; basta con describir el resultado y el lugar.
