'use client';

import { MDXProvider } from '@mdx-js/react';

const Table = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-x-auto my-8">
    <table className="min-w-full border rounded-lg">
      {children}
    </table>
  </div>
);

const components = {
  table: Table,
  th: (props: React.ComponentPropsWithoutRef<'th'>) => (
    <th
      {...props}
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b bg-gray-50"
    />
  ),
  td: (props: React.ComponentPropsWithoutRef<'td'>) => (
    <td {...props} className="px-6 py-4 text-sm text-gray-500 border-b" />
  ),
  tr: (props: React.ComponentPropsWithoutRef<'tr'>) => (
    <tr {...props} className="even:bg-gray-50" />
  ),
};

export function MDXContent({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={components}>
      <div className="prose max-w-none">
        {children}
      </div>
    </MDXProvider>
  );
}
