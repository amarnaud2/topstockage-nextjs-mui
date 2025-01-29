import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Container, Box, Typography } from '@mui/material';
import ClientLayout from '@/components/ClientLayout';
import BlogImage from '@/components/BlogImage';
import BlogPostDate from '@/components/BlogPostDate';
import MDXComponents from '@/components/MDXComponents';
import { staticRoutes } from '@/config/navigation';

// Activer ISR avec revalidation
export const dynamic = 'force-static'; // Utilise le rendu statique
export const revalidate = 3600; // Revalider toutes les heures

// Typage des paramètres de la route
interface BlogParams {
  category: string;
  slug: string;
}

// Génération des chemins statiques
export async function generateStaticParams() {
  const posts = await getAllPosts(); // Récupérer tous les articles
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

// Fonction pour récupérer l'article
async function getArticle(params: BlogParams) {
  const { category, slug } = params;

  // Vérifier si la catégorie est valide
  const isValidCategory = staticRoutes.categories.some(
    (cat) => cat.category === category
  );

  if (!isValidCategory) {
    return null; // Retourner null si la catégorie est invalide
  }

  // Récupérer l'article
  return await getPostBySlug(`${category}/${slug}`);
}

// Composant de page
export default async function BlogPost({ params }: { params: Promise<BlogParams> }) {
  // Attendre que `params` soit résolu
  const resolvedParams = await params;

  // Récupérer l'article à l'aide des paramètres déstructurés
  const post = await getArticle(resolvedParams);

  // Si aucun article n'est trouvé, renvoyer une page 404
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
          {/* Image de l'article */}
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

          {/* Métadonnées de l'article */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Par {post.author}
              </Typography>
              <BlogPostDate date={post.datePublished} variant="body2" />
            </Box>
          </Box>

          {/* Contenu principal en MDX */}
          <Box className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} components={MDXComponents} />
          </Box>
        </Box>
      </Container>
    </ClientLayout>
  );
}
