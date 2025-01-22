import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Container, Box, Typography } from '@mui/material';
import ClientLayout from '@/components/ClientLayout';
import BlogImage from '@/components/BlogImage';
import BlogPostDate from '@/components/BlogPostDate';
import MDXComponents from '@/components/MDXComponents';
import { staticRoutes } from '@/config/navigation';

// Activer la génération statique avec revalidation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalider toutes les heures

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

// Générer les chemins statiques pour tous les articles
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

// Fonction pour récupérer l'article
async function getArticle(paramsPromise: Promise<Props['params']>) {
  // Attendre la résolution des paramètres dynamiques
  const params = await paramsPromise;

  // Vérifier si la catégorie est valide
  const isValidCategory = staticRoutes.categories.some(
    (cat) => cat.category === params.category
  );

  if (!isValidCategory) {
    return null;
  }

  // Récupérer l'article
  return await getPostBySlug(`${params.category}/${params.slug}`);
}


export default async function BlogPost({ params }: Props) {
  const post = await getArticle(Promise.resolve(params));

  if (!post) {
    notFound();
  }

  return (
    <ClientLayout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box
          sx={{
            maxWidth: 800,
            mx: 'auto',
            px: { xs: 2, sm: 3 },
            py: { xs: 3, sm: 4 },
          }}
        >
          {/* 
          <Typography variant="h3" component="h1" gutterBottom>
            {post.title}
          </Typography>
          */}
          <Box sx={{ position: 'relative', height: '400px', mb: 4 }}>
            <BlogImage
              src={post.image}
              alt={post.title}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
            {post.imageCopyright && (
              <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
                {post.imageCopyright}
              </Typography>
            )}
          </Box>

          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Par {post.author}
              </Typography>
              <BlogPostDate date={post.datePublished} variant="body2" />
            </Box>
          </Box>

          <Box className="prose prose-lg max-w-none">
            <MDXRemote 
              source={post.content} 
              components={MDXComponents}
            />
          </Box>
        </Box>
      </Container>
    </ClientLayout>
  );
}
