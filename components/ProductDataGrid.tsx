'use client';

import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import {
  DataGrid,
  GridToolbar,
} from '@mui/x-data-grid';
import { frFR } from '@mui/x-data-grid/locales';
import { Product } from '@/types/product';
import { Typography } from '@mui/material';

interface ProductDataGridProps {
  products: Product[];
}

// Créer une version du DataGrid qui ne sera rendue que côté client
const ClientSideDataGrid = dynamic(
  () => import('@mui/x-data-grid').then((mod) => mod.DataGrid),
  { ssr: false }
);

export default function ProductDataGrid({ products }: ProductDataGridProps) {
  const rows = products.map((product) => ({
    id: product.asin,
    ...product,
  }));

  const columns = [
    {
      field: 'title',
      headerName: 'Produit avec Lien d\'affiliation Amazon',
      width: 400,
      renderCell: (params: any) => (
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
      renderCell: (params: any) => (
        <span>{params.value?.toFixed(2)} €</span>
      ),
    },
    {
      field: 'pricePerTb',
      headerName: 'Prix/To',
      width: 100,
      type: 'number',
      renderCell: (params: any) => (
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
      renderCell: (params) => params.value.join(', '),
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
            quickFilterProps: { 
              debounceMs: 500,
              InputProps: {
                id: 'quick-filter-input',
                name: 'quick-filter'
              }
            },
          },
          pagination: {
            labelRowsPerPage: 'Lignes par page:',
            labelDisplayedRows: ({ from, to, count }) => `${from}-${to} sur ${count}`,
            rowsPerPageOptions: [10, 25, 50],
            SelectProps: {
              id: 'rows-per-page-select',
              name: 'rows-per-page'
            }
          }
        }}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 25, 50]}
        localeText={{
          toolbarColumns: "Colonnes",
          toolbarFilters: "Filtres",
          toolbarDensity: "Densité",
          toolbarExport: "Exporter",
          toolbarQuickFilterPlaceholder: "Rechercher...",
          filterPanelInputLabel: "Valeur",
          filterPanelColumns: "Colonnes",
          filterPanelOperator: "Opérateur",
          filterOperatorContains: "contient",
          filterOperatorEquals: "égal à",
          filterOperatorStartsWith: "commence par",
          filterOperatorEndsWith: "se termine par",
          filterOperatorIsEmpty: "est vide",
          filterOperatorIsNotEmpty: "n'est pas vide",
          filterOperatorIsAnyOf: "est l'un de",
          columnsPanelTextFieldLabel: "Rechercher une colonne",
          columnsPanelTextFieldPlaceholder: "Titre de la colonne",
          columnsPanelShowAllButton: "Tout afficher",
          columnsPanelHideAllButton: "Tout masquer",
          ...frFR.components.MuiDataGrid.defaultProps.localeText,
        }}
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
        Données actualisées le 25/01/2025 à 22h30 (Paris)
      </Typography>
    </Box>
  );
}
