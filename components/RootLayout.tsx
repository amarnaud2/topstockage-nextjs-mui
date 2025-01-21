'use client';

import Box from '@mui/material/Box';
import Header from '@/components/Header';

const sections = [
  { title: 'SSD', url: '/blog/ssd', key: 'ssd' },
  { title: 'HDD', url: '/blog/hdd', key: 'hdd' },
  { title: 'NAS', url: '/blog/nas', key: 'nas' },
];

{/* title: 'Stockage en ligne', url: '/stockage-en-ligne' */}
{/* title: 'Comparatifs', url: '/comparatifs' */}
{/* title: 'Guides d\'achat', url: '/guides-achat' */}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header title="Top Stockage" sections={sections} />
      {children}
    </Box>
  );
}
