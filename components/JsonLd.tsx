'use client';

import { ArticleJsonLd, OrganizationJsonLd } from 'next-seo';

interface ArticleJsonLdData {
  url: string;
  title: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  description: string;
}

interface WebPageJsonLdData {
  url?: string;
  description?: string;
}

interface JsonLdProps {
  type: 'article' | 'webpage' | 'website';
  data?: ArticleJsonLdData | WebPageJsonLdData;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  if (type === 'article' && data) {
    const articleData = data as ArticleJsonLdData; // Cast de data pour éviter les erreurs TypeScript

    return (
      <ArticleJsonLd
        type="BlogPosting"
        url={`https://topstockage.fr${articleData.url}`}
        title={articleData.title}
        images={[articleData.image]}
        datePublished={articleData.datePublished}
        dateModified={articleData.dateModified}
        authorName={articleData.author}
        description={articleData.description}
      />
    );
  }

  if (type === 'webpage' && data) {
    const webPageData = data as WebPageJsonLdData; // Cast en WebPageJsonLdData

    return (
      <OrganizationJsonLd
        type="Corporation"
        id={`https://topstockage.fr${webPageData.url || ''}`}
        description={webPageData.description || "Découvrez Top Stockage, votre guide pour choisir le stockage idéal"}
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
