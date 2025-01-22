import type { MDXComponents } from 'mdx/types';

const TableWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-x-auto my-8 border rounded-lg">
    <table className="min-w-full divide-y divide-gray-200">
      {children}
    </table>
  </div>
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    table: (props) => (
      <TableWrapper>
        <table {...props} />
      </TableWrapper>
    ),
    thead: (props) => (
      <thead className="bg-gray-50" {...props} />
    ),
    th: (props) => (
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />
    ),
    td: (props) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" {...props} />
    ),
    tr: (props) => (
      <tr className="even:bg-gray-50" {...props} />
    ),
  };
}
