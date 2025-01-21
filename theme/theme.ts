'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  // Palette configuration
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  // Typography configuration with responsive font sizes
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
    },
  },
  // Components default props and style overrides
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (min-width:600px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
  },
  // Breakpoints configuration (mobile first)
  breakpoints: {
    values: {
      xs: 0,      // Mobile phones
      sm: 600,    // Tablets
      md: 960,    // Small laptops
      lg: 1280,   // Desktops
      xl: 1920,   // Large screens
    },
  },
});

// Apply responsive font sizes
theme = responsiveFontSizes(theme);

export default theme;
