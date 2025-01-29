'use client';

import Table from '@mui/material/Table';
import TableBody, { TableBodyProps } from '@mui/material/TableBody';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead, { TableHeadProps } from '@mui/material/TableHead';
import TableRow, { TableRowProps } from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ReactNode } from 'react';

interface MDXTableProps {
  children: ReactNode;
}

export function ClientTableHead(props: TableHeadProps) {
  return <TableHead sx={{ bgcolor: 'primary.main' }} {...props} />;
}

export function ClientTableBody(props: TableBodyProps) {
  return <TableBody {...props} />;
}

export function ClientTableRow(props: TableRowProps) {
  return <TableRow {...props} />;
}

export function ClientTableCell(props: TableCellProps) {
  if (props.component === 'th') {
    return (
      <TableCell
        component="th"
        sx={{
          color: 'white',
          fontWeight: 600,
          textTransform: 'uppercase',
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
        }}
        {...props}
      />
    );
  }
  return <TableCell {...props} />;
}

export default function ClientMDXTable({ children }: MDXTableProps) {
  return (
    <TableContainer component={Paper} sx={{ my: 4 }}>
      <Table sx={{ minWidth: 650 }}>
        {children}
      </Table>
    </TableContainer>
  );
}
