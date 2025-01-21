'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { DefaultSeo } from 'next-seo';
import theme from '../theme/theme';
import seoConfig from '../app/seo.config';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DefaultSeo {...seoConfig} />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
