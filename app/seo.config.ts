import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'Top Stockage',
  titleTemplate: '%s | Top Stockage',
  description: "Découvrez Top Stockage, votre guide pour choisir le stockage idéal : comparatifs, conseils pratiques et liens d'achat pour SSD, disques durs et plus.",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://topstockage.fr/',
    siteName: 'Top Stockage',
    title: 'Top Stockage - Guide complet sur les solutions de stockage',
    description: "Découvrez Top Stockage, votre guide pour choisir le stockage idéal : comparatifs, conseils pratiques et liens d'achat pour SSD, disques durs et plus.",
    images: [
      {
        url: 'https://topstockage.fr/logo.png',
        width: 512,
        height: 512,
        alt: 'Top Stockage - Solutions de stockage',
      },
    ],
  },
  twitter: {
    handle: '@topstockage',
    site: '@topstockage',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      href: '/favicon-16x16.png',
      type: 'image/png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      href: '/favicon-32x32.png',
      type: 'image/png',
      sizes: '32x32',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
};

export default config;
