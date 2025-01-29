const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.topstockage.fr',
  generateRobotsTxt: true,
  changefreq: 'yearly',
  priority: 0.7,
  exclude: ['/mentions-legales', '/404'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/mentions-legales', '/404'],
      },
    ],
  },
  transform: async (config, path) => {
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'yearly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

// ✅ Utiliser `export default` pour l'ESM
export default config;
