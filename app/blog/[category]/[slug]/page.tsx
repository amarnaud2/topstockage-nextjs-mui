import { Container, Typography, Box } from '@mui/material';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ClientLayout from '@/components/ClientLayout';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import BlogPostDate from '@/components/BlogPostDate';
import { notFound } from 'next/navigation';
import BlogImage from '@/components/BlogImage';

// Activer la génération statique avec revalidation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalider toutes les heures

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

// Cache pour stocker les données pré-générées
let postDataCache: { [key: string]: any } = {};

// Pré-générer les données pour tous les articles
async function generateAllPostData() {
  if (Object.keys(postDataCache).length > 0) {
    return postDataCache;
  }

  const posts = await getAllPosts();
  
  for (const post of posts) {
    const [category, slug] = post.slug.split('/');
    const fullPost = await getPostBySlug(post.slug);
    if (fullPost) {
      postDataCache[`${category}/${slug}`] = fullPost;
    }
  }

  return postDataCache;
}

// Générer les chemins statiques pour tous les articles
export async function generateStaticParams() {
  await generateAllPostData();
  return Object.keys(postDataCache).map(path => {
    const [category, slug] = path.split('/');
    return { category, slug };
  });
}

export default async function BlogPost({ params }: Props) {
  const postData = await generateAllPostData();
  const post = postData[`${params.category}/${params.slug}`];

  if (!post) {
    notFound();
  }

  return (
    <ClientLayout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {post.title}
        </Typography>

        <Box sx={{ position: 'relative', height: '400px', mb: 4 }}>
          <BlogImage
            src={post.image}
            alt={post.title}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
            {post.imageCopyright}
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Par {post.author} •
            </Typography>
            <BlogPostDate date={post.datePublished} variant="body2" />
          </Box>
        </Box>

        <Box className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </Box>
      </Container>
    </ClientLayout>
  );
}
