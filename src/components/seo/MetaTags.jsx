import { Helmet } from 'react-helmet-async'
import { defaultOgImageAlt, siteData } from '@/data/seoKeywords'

const DESC_MAX = 160

export default function MetaTags({
  title,
  description,
  canonical,
  keywords,
  noindex,
  ogImage,
  ogImageAlt,
}) {
  const fullTitle =
    title ||
    `${siteData.name} — Pulidores de suelo en Sevilla y provincia`
  const fullDescription = description || siteData.description
  const trimmedDesc = fullDescription.slice(0, DESC_MAX)
  const fullCanonical = canonical || `${siteData.url}/`
  const imageUrl = ogImage || `${siteData.url}/images/bgTop.jpg`
  const imageAlt = ogImageAlt || defaultOgImageAlt

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={trimmedDesc} />
      <link rel="canonical" href={fullCanonical} />
      {keywords ? (
        <meta name="keywords" content={keywords} />
      ) : null}

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}

      {/* Local / idioma */}
      <meta name="language" content="Spanish" />
      <meta httpEquiv="content-language" content="es" />
      <meta name="geo.region" content="ES-AN" />
      <meta name="geo.placename" content={siteData.regionName} />
      <link rel="alternate" hrefLang="es-es" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={trimmedDesc} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={siteData.locale} />
      <meta property="og:site_name" content={siteData.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={trimmedDesc} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  )
}
