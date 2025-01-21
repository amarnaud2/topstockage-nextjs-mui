'use client';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { BlogPost } from '@/lib/blog';
import BlogPostCard from './BlogPostCard';

type CategoryPostsProps = {
  posts: BlogPost[];
};

export default function CategoryPosts({ posts }: CategoryPostsProps) {
  if (posts.length === 0) {
    return (
      <Typography variant="h6" sx={{ textAlign: 'center', py: 4 }}>
        Aucun article trouvé dans cette catégorie
      </Typography>
    );
  }

  return (
    <Box 
      sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: '1fr 1fr'
        },
        gap: 3,
        width: '100%'
      }}
    >
      {posts.map((post: BlogPost) => (
        <Box key={post.slug}>
          <BlogPostCard post={post} />
        </Box>
      ))}
    </Box>
  );
}
