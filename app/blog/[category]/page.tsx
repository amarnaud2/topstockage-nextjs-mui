import { Container, Typography, Box, CircularProgress } from '@mui/material';
import ClientLayout from '@/components/ClientLayout';
import { getAllPosts } from '@/lib/blog';
import { Suspense } from 'react';
import CategoryPosts from '@/components/CategoryPosts';
import { notFound } from 'next/navigation';

const titles: { [key: string]: { title: string; subtitle: string } } = {
  ssd: {
    title: 'Articles sur les SSD',
    subtitle: 'Découvrez nos derniers articles sur les SSD',
  },
  hdd: {
    title: 'Articles sur les disques durs',
    subtitle: 'Découvrez nos derniers articles sur les disques durs',
  },
  nas: {
    title: 'Articles sur les NAS',
    subtitle: 'Découvrez nos derniers articles sur les NAS',
  },
};

// Activer la génération statique avec revalidation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalider toutes les heures

function LoadingPosts() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
      <CircularProgress />
    </Box>
  );
}

type Props = {
  params: {
    category: string;
  };
};

type CategoryData = {
  category: string;
  posts: any[];
  title: string;
  subtitle: string;
} | null;

// Cache pour stocker les données pré-générées
let categoryDataCache: { [key: string]: CategoryData } = {};

// Pré-générer les données pour toutes les catégories
async function generateAllCategoryData() {
  if (Object.keys(categoryDataCache).length > 0) {
    return categoryDataCache;
  }

  const posts = await getAllPosts();
  const categories = [...new Set(posts.map(post => post.category))];

  categories.forEach(category => {
    const categoryPosts = posts.filter(post => post.category === category);
    if (categoryPosts.length > 0) {
      const categoryInfo = titles[category] || {
        title: `Articles ${category.toUpperCase()}`,
        subtitle: `Découvrez nos derniers articles sur ${category.toUpperCase()}`,
      };

      categoryDataCache[category] = {
        category,
        posts: categoryPosts,
        ...categoryInfo,
      };
    } else {
      categoryDataCache[category] = null;
    }
  });

  return categoryDataCache;
}

// Générer les chemins statiques pour toutes les catégories
export async function generateStaticParams() {
  await generateAllCategoryData();
  return Object.keys(categoryDataCache).map(category => ({ category }));
}

export default async function CategoryPage({ params }: Props) {
  const categoryData = await generateAllCategoryData();
  const data = categoryData[params.category];

  if (!data) {
    notFound();
  }

  return (
    <ClientLayout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ mb: 4 }}>
          {data.subtitle}
        </Typography>

        <Suspense fallback={<LoadingPosts />}>
          <CategoryPosts posts={data.posts} />
        </Suspense>
      </Container>
    </ClientLayout>
  );
}
