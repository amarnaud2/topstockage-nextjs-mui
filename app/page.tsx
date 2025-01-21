'use client';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ClientLayout from '@/components/ClientLayout';
import ProductDataGrid from '@/components/ProductDataGrid';
import { Product } from '@/types/product';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/devices.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ClientLayout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Comparateur de solutions de stockage
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ mb: 4 }}>
          Trouvez le meilleur rapport qualité/prix pour votre stockage
        </Typography>
        <ProductDataGrid products={products} />
      </Container>
    </ClientLayout>
  );
}
