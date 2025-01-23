'use client';

import Box from '@mui/material/Box';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flex: '1 0 auto',
          width: '100%',
          pt: { xs: 2, sm: 3 },
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
