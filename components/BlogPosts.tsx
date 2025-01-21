'use client';

import { Box } from '@mui/material';
import { BlogPost } from '@/lib/blog';
import BlogPostCard from './BlogPostCard';

type BlogPostsProps = {
  posts: BlogPost[];
};

export default function BlogPosts({ posts }: BlogPostsProps) {
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
