import { Container, Typography, Box, CircularProgress, Grid2 } from '@mui/material';
import ClientLayout from '@/components/ClientLayout';
import { getAllPosts } from '@/lib/blog';
import { Suspense } from 'react';
import BlogPosts from '@/components/BlogPosts';

// Activer la génération statique avec revalidation
export const revalidate = 3600; // Revalider toutes les heures

function LoadingPosts() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
      <CircularProgress />
    </Box>
  );
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <ClientLayout>
      <Container maxWidth="lg">
        <Container 
          sx={{ 
            mt: 4, 
            mb: 4,
            px: { xs: 2, sm: 3 },
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Blog Top Stockage
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ mb: 4 }}>
            Tous nos articles sur le stockage numérique
          </Typography>

          <Suspense fallback={<LoadingPosts />}>
            <BlogPosts posts={posts} />
          </Suspense>
        </Container>
      </Container>
    </ClientLayout>
  );
}
