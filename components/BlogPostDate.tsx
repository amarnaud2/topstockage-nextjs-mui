'use client';

import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

interface BlogPostDateProps {
  date: string;
  variant?: "caption" | "body2";
  color?: string;
}

export default function BlogPostDate({ date, variant = "caption", color = "text.secondary" }: BlogPostDateProps) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(new Date(date).toLocaleDateString('fr-FR'));
  }, [date]);

  if (!formattedDate) {
    return null;
  }

  return (
    <Typography variant={variant} color={color}>
      {formattedDate}
    </Typography>
  );
}
