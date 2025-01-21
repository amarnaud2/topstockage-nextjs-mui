'use client';

import { ArticleJsonLd, OrganizationJsonLd } from 'next-seo';

interface JsonLdProps {
  type: 'article' | 'webpage' | 'website';
  data?: any;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  if (type === 'article' && data) {
    return (
      <ArticleJsonLd
        type="BlogPosting"
        url={`https://topstockage.fr${data.url}`}
        title={data.title}
        images={[data.image]}
        datePublished={data.datePublished}
        dateModified={data.dateModified}
        authorName={data.author}
        description={data.description}
      />
    );
  }

  if (type === 'webpage') {
    return (
      <OrganizationJsonLd
        type="Corporation"
        id={`https://topstockage.fr${data?.url || ''}`}
        description={data?.description || "Découvrez Top Stockage, votre guide pour choisir le stockage idéal"}
        name="Top Stockage"
        url="https://topstockage.fr"
        logo="https://topstockage.fr/logo.png"
        contactPoint={[
          {
            contactType: "customer service",
            email: "contact@topstockage.fr",
            areaServed: "FR"
          }
        ]}
      />
    );
  }

  // Default website JSON-LD
  return (
    <OrganizationJsonLd
      type="Corporation"
      name="Top Stockage"
      url="https://topstockage.fr"
      logo="https://topstockage.fr/logo.png"
      sameAs={[
        'https://twitter.com/topstockage',
        'https://facebook.com/topstockage'
      ]}
    />
  );
}
