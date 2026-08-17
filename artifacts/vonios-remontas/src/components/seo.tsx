import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://buildiq.lt';
const SITE_NAME = 'BuildIQ — Vonios Remontas Klaipėdoje';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
}

export function SEO({ title, description, path, image = '/assets/hero.jpg', type = 'website' }: SEOProps) {
  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title} | BuildIQ`;
  const ogImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
