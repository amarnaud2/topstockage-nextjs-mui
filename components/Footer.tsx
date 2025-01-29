'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import Link from 'next/link';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';

const FOOTER_LINKS = [
  {
    title: 'Politique de confidentialité',
    href: '/politique-de-confidentialite',
    ariaLabel: 'Lire la politique de confidentialité',
  },
  {
    title: 'Mentions légales',
    href: '/mentions-legales',
    ariaLabel: 'Lire les mentions légales',
  },
  {
    title: 'À propos',
    href: '/a-propos',
    ariaLabel: 'En savoir plus sur Top Stockage',
  },
];

const SOCIAL_LINKS = [
  {
    icon: XIcon,
    href: 'https://twitter.com/topstockage',
    label: 'Suivez-nous sur X',
  },
  {
    icon: PinterestIcon,
    href: 'https://pinterest.com/topstockage',
    label: 'Suivez-nous sur Pinterest',
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      role="contentinfo"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <Typography variant="h6" gutterBottom>
              Top Stockage
            </Typography>
            <Box
              component="nav"
              aria-label="Navigation du pied de page"
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
                mb: 2,
              }}
            >
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  passHref
                  legacyBehavior
                >
                  <MuiLink
                    underline="hover"
                    color="inherit"
                    aria-label={link.ariaLabel || link.title}
                    sx={{ textDecoration: 'none' }}
                  >
                    {link.title}
                  </MuiLink>
                </Link>
              ))}
            </Box>
          </Grid2>
          
          <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Suivez-nous
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {SOCIAL_LINKS.map((social) => (
                  <MuiLink
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    <social.icon sx={{ width: 24, height: 24 }} />
                  </MuiLink>
                ))}
              </Box>
            </Box>
          </Grid2>
        </Grid2>

        <Typography 
          variant="body2" 
          color="inherit"
          align="center"
          sx={{ 
            opacity: 0.8,
            mt: 4,
          }}
        >
          <Box
            component="span"
            role="note"
            aria-label="Information sur les liens d'affiliation"
          >
            Top Stockage participe au programme d'affiliation Amazon. Les liens d'achat présents sur ce site peuvent générer une commission pour nous, sans coût supplémentaire pour vous. Les prix et la disponibilité des produits sont exacts à la date et à l'heure indiquées et sont susceptibles de changer. Toute information sur les prix et la disponibilité affichée au moment de l'achat s'appliquera à l'achat du produit. CERTAINS CONTENUS QUI APPARAISSENT SUR CE SITE PROVIENNENT DES SERVICES D'AMAZON LLC. CES CONTENUS SONT FOURNIS "EN L'ÉTAT" ET PEUVENT ÊTRE MODIFIÉS OU SUPPRIMÉS À TOUT MOMENT.
          </Box>
        </Typography>

        <Typography 
          variant="body2" 
          color="inherit"
          align="center"
          sx={{ 
            mt: 2, 
            opacity: 0.8,
          }}
        >
          <Box
            component="span"
            role="contentinfo"
            aria-label="Informations de copyright"
          >
            {new Date().getFullYear()} Top Stockage. Tous droits réservés.
          </Box>
        </Typography>
      </Container>
    </Box>
  );
}
