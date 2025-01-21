'use client';

import Box from '@mui/material/Box';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme/theme';

const sections = [
  { title: 'SSD', url: '/blog/ssd', key: 'ssd' },
  { title: 'HDD', url: '/blog/hdd', key: 'hdd' },
  { title: 'NAS', url: '/blog/nas', key: 'nas' },
];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header title="Top Stockage" sections={sections} />
          {children}
          <Footer />
        </Box>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
