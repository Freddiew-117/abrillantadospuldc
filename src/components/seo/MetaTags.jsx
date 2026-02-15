import { Helmet } from 'react-helmet-async'
import { siteData } from '@/data/seoKeywords'

export default function MetaTags({ title, description, canonical, noindex }) {
  const fullTitle = title ? `${title}` : siteData.name
  const fullDescription = description || siteData.description
  const fullCanonical = canonical || siteData.url + '/'
  const fullImage = siteData.url + '/images/bgTop.jpg'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription.slice(0, 160)} />
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription.slice(0, 160)} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={siteData.locale} />
      <meta property="og:site_name" content={siteData.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription.slice(0, 160)} />
    </Helmet>
  )
}
