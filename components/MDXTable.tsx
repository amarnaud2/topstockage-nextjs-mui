'use client';

import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { ReactNode } from 'react';

interface MDXTableProps {
  children: ReactNode;
}

export default function MDXTable({ children }: MDXTableProps) {
  return (
    <TableContainer component={Paper} sx={{ my: 4 }}>
      <Table sx={{ minWidth: 650 }}>
        {children}
      </Table>
    </TableContainer>
  );
}
