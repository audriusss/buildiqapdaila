import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
}

export function SEO({ title, description, path, image = '/assets/hero.jpg', type = 'website' }: SEOProps) {
  const url = `https://voniosr.lt${path}`;
  const fullTitle = `${title} | Vonios Remontas Klaipėdoje`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={`https://voniosr.lt${image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://voniosr.lt${image}`} />
    </Helmet>
  );
}
