import { IConfig } from 'next-sitemap'

const config: IConfig = {
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
  transform: async (config: IConfig, path: string) => {
    // Page d'accueil avec mise à jour hebdomadaire
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }

    // Articles de blog avec mise à jour annuelle
    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'yearly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    // Configuration par défaut pour les autres pages
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}

export default config
