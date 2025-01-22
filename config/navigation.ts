export interface Category {
  title: string;
  slug: string;
  path: string;
  description: string;
  subtitle: string;
}

const CATEGORIES: Category[] = [
  {
    title: 'SSD',
    slug: 'ssd',
    path: '/blog/ssd',
    description: 'Guides d\'achat et comparatifs des meilleurs SSD du marché',
    subtitle: 'Découvrez nos derniers articles sur les SSD, tests et comparatifs pour faire le meilleur choix',
  },
  {
    title: 'HDD',
    slug: 'hdd',
    path: '/blog/hdd',
    description: 'Guides d\'achat et comparatifs des meilleurs disques durs externes',
    subtitle: 'Explorez nos articles sur les disques durs, conseils et tests pour trouver le stockage idéal',
  },
  {
    title: 'NAS',
    slug: 'nas',
    path: '/blog/nas',
    description: 'Guides d\'achat et comparatifs des meilleurs NAS pour particuliers et professionnels',
    subtitle: 'Consultez nos guides sur les NAS, analyses et recommandations pour votre stockage en réseau',
  },
];

// Routes statiques pour la génération ISR
const STATIC_ROUTES = {
  categories: CATEGORIES.map(cat => ({
    category: cat.slug,
  })),
  // Les slugs des articles seront générés dynamiquement via getAllPosts
};

// Navigation principale
const MAIN_NAVIGATION = CATEGORIES.map(({ title, path, description }) => ({
  title,
  path,
  description,
}));

// Navigation du footer
const FOOTER_NAVIGATION = {
  main: [
    { name: 'Accueil', href: '/' },
    ...CATEGORIES.map(({ title, path }) => ({
      name: title,
      href: path,
    })),
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/yourusername',
    },
  ],
};

export {
  CATEGORIES as categories,
  STATIC_ROUTES as staticRoutes,
  MAIN_NAVIGATION as mainNavigation,
  FOOTER_NAVIGATION as footerNavigation,
};
