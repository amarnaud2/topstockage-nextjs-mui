'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import ClientLayout from '@/components/ClientLayout';

export default function AProposContent() {
  return (
    <ClientLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: '1 0 auto' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            À Propos de Top Stockage
          </Typography>

          <Grid2 container spacing={4}>
            <Grid2 component="div" size={{ xs: 12, md: 8 }}>
              <Typography variant="body1" gutterBottom>
                Top Stockage est votre guide de référence pour tout ce qui concerne le choix de périphériques de stockage numérique. 
                Notre mission est de vous aider à faire les meilleurs choix en matière de stockage de données, 
                que ce soit pour un usage personnel ou professionnel.
              </Typography>

              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Notre Mission
              </Typography>
              <Typography variant="body1" gutterBottom>
                Nous nous engageons à fournir des informations précises, régulièrement mises à jour sur les 
                solutions de stockage disponibles sur le marché. 
              </Typography>

              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Notre Expertise
              </Typography>
              <Typography variant="body1" gutterBottom>
                Notre équipe combine expertise technique et connaissance approfondie du marché pour 
                vous guider dans vos choix.
              </Typography>

              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Nos Valeurs
              </Typography>
              <Typography variant="body1" gutterBottom>
                - Transparence dans nos analyses et recommandations
                <br />
                - Indépendance vis-à-vis des fabricants
                <br />
                - Engagement pour la qualité de l'information
                <br />
                - Focus sur les besoins des utilisateurs
              </Typography>
            </Grid2>

            <Grid2 component="div" size={{ xs: 12, md: 4 }}>
              <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 1 }}>
                <Typography variant="h6" gutterBottom>
                  Contact
                </Typography>
                <Typography variant="body2">
                  Email: <a href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`} className="text-blue-600 underline">{process.env.NEXT_PUBLIC_COMPANY_EMAIL}</a>
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </ClientLayout>
  );
}
