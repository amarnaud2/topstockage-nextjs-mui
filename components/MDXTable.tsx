'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
