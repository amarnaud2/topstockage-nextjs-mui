'use client';

import { Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import {
  GridToolbar,
  GridColDef,
  GridRenderCellParams,
  GridValidRowModel
} from '@mui/x-data-grid';
import { frFR } from '@mui/x-data-grid/locales';
import { Product } from '@/types/product';

interface ProductDataGridProps {
  products: Product[];
}

// Créer une version du DataGrid qui ne sera rendue que côté client
const ClientSideDataGrid = dynamic(
  () => import('@mui/x-data-grid').then((mod) => mod.DataGrid),
  { ssr: false }
);

export default function ProductDataGrid({ products }: ProductDataGridProps) {
  // 🔥 Correction : Utilisation de GridValidRowModel pour rows
  const rows: GridValidRowModel[] = products;

  // 🔥 Correction : Utilisation de GridValidRowModel pour columns
  const columns: GridColDef<GridValidRowModel>[] = [
    {
      field: 'title',
      headerName: 'Produit avec Lien d\'affiliation Amazon',
      width: 400,
      renderCell: (params: GridRenderCellParams<GridValidRowModel, string>) => (
        <a href={params.row.amazonLink} target="_blank" rel="noopener noreferrer">
          {params.value}
        </a>
      ),
    },
    {
      field: 'category',
      headerName: 'Catégorie',
      width: 130,
    },
    {
      field: 'capacity',
      headerName: 'Capacité',
      width: 100,
    },
    {
      field: 'formFactor',
      headerName: 'Format',
      width: 130,
    },
    {
      field: 'price',
      headerName: 'Prix',
      width: 100,
      type: 'number',
      renderCell: (params: GridRenderCellParams<GridValidRowModel, number>) => (
        <span>{params.value?.toFixed(2)} €</span>
      ),
    },
    {
      field: 'pricePerTb',
      headerName: 'Prix/To',
      width: 100,
      type: 'number',
      renderCell: (params: GridRenderCellParams<GridValidRowModel, number>) => (
        <span>{params.value?.toFixed(2)} €</span>
      ),
    },
    {
      field: 'warranty',
      headerName: 'Garantie',
      width: 100,
    },
    {
      field: 'features',
      headerName: 'Caractéristiques',
      width: 300,
      renderCell: (params: GridRenderCellParams<GridValidRowModel, string[]>) => (
        <span>{params.value?.join(', ')}</span>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%', height: 600, mb: 4 }}>
      <ClientSideDataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 25, 50]}
        localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
      />
      <Typography 
        variant="caption" 
        sx={{ 
          display: 'block',
          mt: 1,
          textAlign: 'right',
          color: 'text.secondary',
          fontSize: '0.75rem'
        }}
      >
        Données actualisées le {process.env.NEXT_PUBLIC_DATA_UPDATE}.
      </Typography>
    </Box>
  );
}
