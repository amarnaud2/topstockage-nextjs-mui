'use client';

import { Grid, Typography } from '@mui/material';
import BlogPostCard from './BlogPostCard';
import { BlogPost } from '@/lib/blog';

interface CategoryPostsProps {
  posts: BlogPost[];
}

export default function CategoryPosts({ posts }: CategoryPostsProps) {
  if (posts.length === 0) {
    return (
      <Typography variant="h6" sx={{ textAlign: 'center', py: 4 }}>
        Aucun article trouvé dans cette catégorie
      </Typography>
    );
  }

  return (
    <Grid container spacing={4}>
      {posts.map((post) => (
        <Grid item key={post.slug} xs={12} sm={6} md={4}>
          <BlogPostCard 
            post={{
              title: post.title,
              description: post.description,
              image: post.image,
              slug: post.slug.split('/')[1],
              category: post.category,
              datePublished: post.datePublished,
              author: post.author,
            }} 
          />
        </Grid>
      ))}
    </Grid>
  );
}
