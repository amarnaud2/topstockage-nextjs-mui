'use client';

import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  [key: string]: any;
}

export function H1(props: TypographyProps) {
  return <Typography variant="h1" component="h1" gutterBottom {...props} />;
}

export function H2(props: TypographyProps) {
  return <Typography variant="h2" component="h2" gutterBottom {...props} />;
}

export function H3(props: TypographyProps) {
  return <Typography variant="h3" component="h3" gutterBottom {...props} />;
}

export function H4(props: TypographyProps) {
  return <Typography variant="h4" component="h4" gutterBottom {...props} />;
}

export function H5(props: TypographyProps) {
  return <Typography variant="h5" component="h5" gutterBottom {...props} />;
}

export function H6(props: TypographyProps) {
  return <Typography variant="h6" component="h6" gutterBottom {...props} />;
}

export function Paragraph(props: TypographyProps) {
  return <Typography variant="body1" component="p" gutterBottom {...props} />;
}
