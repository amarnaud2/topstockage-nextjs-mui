'use client';

import { Card, CardContent, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import BlogPostDate from './BlogPostDate';
import PlaceholderImage from './PlaceholderImage';
import type { BlogPostCardProps } from '@/types/blog';
import { useState } from 'react';

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { title, description, image, slug, category, datePublished, author } = post;
  const [imageError, setImageError] = useState(false);

  return (
    <Card 
      component={Link}
      href={`/blog/${category}/${slug}`}
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        textDecoration: 'none',
        '&:hover': {
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', height: 200 }}>
        {imageError ? (
          <PlaceholderImage />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            priority
            onError={() => setImageError(true)}
          />
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1, pt: 2 }}>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="h2"
          sx={{ 
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'text.primary',
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 'auto',
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Par {author}
          </Typography>
          <BlogPostDate date={datePublished} />
        </Box>
      </CardContent>
    </Card>
  );
}
