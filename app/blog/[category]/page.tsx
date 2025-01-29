import { notFound } from 'next/navigation';
import { Container, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import { getPostsByCategory } from '@/lib/blog';
import { categories, staticRoutes } from '@/config/navigation';
import ClientLayout from '@/components/ClientLayout';
import BlogPostCard from '@/components/BlogPostCard';
import type { BlogPost } from '@/types/blog';

// Activer la génération statique avec revalidation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalider toutes les heures

interface CategoryPageParams {
  category: string;
}

// Typage du post pour BlogPostCard
//interface BlogPost {
//  slug: string;
//  title: string;
//  image: string;
//  excerpt: string;
//  date: string;
//  author: string;
//}

// Générer les chemins statiques pour toutes les catégories
export async function generateStaticParams() {
  return staticRoutes.categories;
}

// Fonction pour obtenir les informations de la catégorie
async function getCategoryInfo(categorySlug: string) {
  try {
    const category = categories.find(cat => cat.slug === categorySlug);
    if (!category) return null;

    const posts = await getPostsByCategory(categorySlug);
    if (!posts || !posts.length) return null;

    return {
      ...category,
      posts,
    };
  } catch (error) {
    console.error('Error in getCategoryInfo:', error);
    return null;
  }
}

export default async function CategoryPage({ params }: { params: Promise<CategoryPageParams>; }) {
  const resolvedParams = await params;
  const { category } = resolvedParams;

  const data = await getCategoryInfo(category);

  if (!data) {
    notFound();
  }

  return (
    <ClientLayout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {data.title}
        </Typography>
        
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          {data.subtitle}
        </Typography>

        <Grid2 container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} component="div">
        {data.posts.map((post: Omit<BlogPost, 'content' | 'imageCopyright'>) => (
            <Grid2 key={post.slug} size={{ xs: 4, sm: 4, md: 4 }}>
              <BlogPostCard post={post} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </ClientLayout>
  );
}

