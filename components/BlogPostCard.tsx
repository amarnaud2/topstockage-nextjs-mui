'use client';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';
import Link from 'next/link';
import BlogPostDate from './BlogPostDate';
import PlaceholderImage from './PlaceholderImage';
import type { BlogPostCardProps } from '@/types/blog';
import { useState } from 'react';

interface BlogPostCardProps {
  post: BlogPostCardProps;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { title, description, image, slug, category, datePublished, author } = post;
  const [imageError, setImageError] = useState(false);

  return (
    <Card 
      component="article"
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardActionArea
        component={Link}
        href={`/blog/${category}/${slug}`}
        sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        aria-labelledby={`post-title-${slug}`}
      >
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={`Illustration de l'article : ${title}`}
          sx={{ objectFit: 'cover' }}
          onError={() => setImageError(true)}
        />
        {imageError && (
          <PlaceholderImage />
        )}
        <CardContent sx={{ flex: 1 }}>
          <Typography 
            variant="h5" 
            component="h2"
            id={`post-title-${slug}`}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            paragraph
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              mb: 2
            }}
          >
            {description}
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              mt: 'auto'
            }}
            aria-label="Informations sur l'article"
          >
            <Typography 
              variant="body2" 
              color="text.secondary"
              component="span"
            >
              Par {author}
            </Typography>
            <BlogPostDate 
              date={datePublished} 
              variant="body2"
              aria-label={`Publié le ${new Date(datePublished).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}`}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
