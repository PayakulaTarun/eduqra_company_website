import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEOManager Component
 * Handles Technical SEO (Schema.org, Canonical) and AEO (Answer Engine Optimization)
 */
const SEOManager = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogTitle, 
  ogDescription, 
  ogImage,
  schemaType = 'Organization',
  schemaData = {} 
}) => {
  const siteUrl = 'https://eduqra.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Default Organization Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Eduqra",
    "url": siteUrl,
    "logo": `${siteUrl}/images/eduqra_logo_white.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "302, c162, Allwyn Colony",
      "addressLocality": "Kukatpally, Hyderabad",
      "postalCode": "500072",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7337312325",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.instagram.com/eduqra/",
      "https://www.linkedin.com/company/eduqra/"
    ]
  };

  const finalSchema = schemaType === 'Organization' 
    ? { ...defaultSchema, ...schemaData }
    : { "@context": "https://schema.org", "@type": schemaType, ...schemaData };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Social */}
      <meta property="og:site_name" content="Eduqra" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      <meta name="twitter:site" content="@eduqra" />

      {/* JSON-LD Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEOManager;
