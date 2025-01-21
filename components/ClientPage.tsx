'use client';

import { NextSeo } from 'next-seo';
import JsonLd from './JsonLd';

interface ClientPageProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  url?: string;
  type?: 'article' | 'webpage' | 'website';
  jsonLdData?: any;
}

export default function ClientPage({
  children,
  title = "Accueil",
  description = "Découvrez Top Stockage, votre guide pour choisir le stockage idéal : comparatifs, conseils pratiques et liens d'achat pour SSD, disques durs et plus.",
  url = "",
  type = "website",
  jsonLdData
}: ClientPageProps) {
  return (
    <main>
      <NextSeo
        title={title}
        description={description}
        canonical={`https://topstockage.fr${url}`}
      />
      <JsonLd type={type} data={jsonLdData} />
      {children}
    </main>
  );
}
