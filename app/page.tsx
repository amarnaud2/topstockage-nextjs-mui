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
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Bienvenue sur Top Stockage
          </Typography>
          <Typography variant="h2" gutterBottom>
            Votre guide pour choisir le meilleur stockage
          </Typography>
          <Typography variant="body1" paragraph>
            Découvrez notre sélection des meilleurs SSD et disques durs, avec des comparatifs détaillés et des conseils d'experts.
          </Typography>
          {products.length > 0 && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h3" gutterBottom>
                Nos dernières recommandations
              </Typography>
              <ProductDataGrid products={products} />
            </Box>
          )}
        </Box>
      </Container>
    </ClientLayout>
  );
}
