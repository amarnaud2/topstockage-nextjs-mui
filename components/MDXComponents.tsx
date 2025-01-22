import { Typography, Link as MuiLink, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import ProductDataGrid from './ProductDataGrid';

const MDXComponents = {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <Typography variant="h1" component="h1" gutterBottom sx={{ mt: 4, mb: 2 }}>
      {children}
    </Typography>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
      {children}
    </Typography>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <Typography variant="h3" component="h3" gutterBottom sx={{ mt: 3, mb: 2 }}>
      {children}
    </Typography>
  ),
  h4: ({ children }: { children?: React.ReactNode }) => (
    <Typography variant="h4" component="h4" gutterBottom sx={{ mt: 3, mb: 2 }}>
      {children}
    </Typography>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <Typography variant="body1" paragraph sx={{ mb: 2, lineHeight: 1.7 }}>
      {children}
    </Typography>
  ),
  a: ({ href = '', children }: { href?: string; children?: React.ReactNode }) => {
    if (href.startsWith('/') || href.startsWith('#')) {
      return (
        <Link href={href} style={{ color: 'inherit', textDecoration: 'none' }}>
          {children}
        </Link>
      );
    }
    return (
      <MuiLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textDecoration: 'none' }}
      >
        {children}
      </MuiLink>
    );
  },
  ul: ({ children }: { children?: React.ReactNode }) => (
    <Box component="ul" sx={{ mt: 1, mb: 2, pl: 4 }}>
      {children}
    </Box>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <Box component="ol" sx={{ mt: 1, mb: 2, pl: 4 }}>
      {children}
    </Box>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <Typography component="li" variant="body1">
      {children}
    </Typography>
  ),
  table: ({ children }: { children?: React.ReactNode }) => (
    <TableContainer component={Paper} sx={{ my: 4 }}>
      <Table>{children}</Table>
    </TableContainer>
  ),
  thead: ({ children }: { children?: React.ReactNode }) => (
    <TableHead>{children}</TableHead>
  ),
  tbody: ({ children }: { children?: React.ReactNode }) => (
    <TableBody>{children}</TableBody>
  ),
  tr: ({ children }: { children?: React.ReactNode }) => (
    <TableRow>{children}</TableRow>
  ),
  th: ({ children }: { children?: React.ReactNode }) => (
    <TableCell component="th" sx={{ fontWeight: 600 }}>
      {children}
    </TableCell>
  ),
  td: ({ children }: { children?: React.ReactNode }) => (
    <TableCell>{children}</TableCell>
  ),
  ProductDataGrid,
};

export default MDXComponents;
