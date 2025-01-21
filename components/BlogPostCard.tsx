'use client';

import { Card, CardContent, Typography, Box } from '@mui/material';
import { BlogPost } from '@/lib/blog';
import Link from 'next/link';
import BlogPostDate from './BlogPostDate';
import BlogImage from './BlogImage';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { category, slug } = post;
  const postUrl = `/blog/${category}/${slug.split('/')[1]}`;

  return (
    <Link href={postUrl} style={{ textDecoration: 'none', display: 'block' }}>
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex', 
          flexDirection: 'column',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: (theme) => theme.shadows[4],
          },
        }}
      >
        <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
          <BlogImage
            src={post.image}
            alt={post.title}
            fill
            style={{ 
              objectFit: 'cover',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
            }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="h2"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              lineHeight: 1.2,
              minHeight: '2.4em',
            }}
          >
            {post.title}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              mb: 2,
            }}
          >
            {post.description}
          </Typography>
          <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              Par {post.author}
            </Typography>
            <BlogPostDate date={post.datePublished} />
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
