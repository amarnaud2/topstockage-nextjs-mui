'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid2 from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const footerLinks = [
  { title: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
  { title: 'Mentions légales', href: '/mentions-legales' },
  { title: 'À propos', href: '/a-propos' },
];

const socialLinks = [
  { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
  { icon: XIcon, href: 'https://x.com', label: 'X (Twitter)' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              Top Stockage
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  color="inherit"
                  sx={{ '&:hover': { color: 'secondary.main' } }}
                >
                  {link.title}
                </Link>
              ))}
            </Box>
          </Grid2>
          <Grid2 xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Suivez-nous
              </Typography>
              <Box>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <IconButton
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      sx={{ '&:hover': { color: 'secondary.main' } }}
                      aria-label={social.label}
                    >
                      <Icon />
                    </IconButton>
                  );
                })}
              </Box>
            </Box>
          </Grid2>
        </Grid2>
        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block', 
            mt: 4, 
            textAlign: 'justify',
            opacity: 0.8,
            fontSize: '0.7rem'
          }}
        >
          Top Stockage participe au programme d'affiliation Amazon. Les liens d'achat présents sur ce site peuvent générer une commission pour nous, sans coût supplémentaire pour vous. Les prix et la disponibilité des produits sont exacts à la date et à l'heure indiquées et sont susceptibles de changer. Toute information sur les prix et la disponibilité affichée au moment de l'achat s'appliquera à l'achat du produit. CERTAINS CONTENUS QUI APPARAISSENT SUR CE SITE PROVIENNENT DES SERVICES D'AMAZON LLC. CES CONTENUS SONT FOURNIS "EN L'ÉTAT" ET PEUVENT ÊTRE MODIFIÉS OU SUPPRIMÉS À TOUT MOMENT.
        </Typography>
      </Container>
    </Box>
  );
}
