export default function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto my-8 border rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        {children}
      </table>
    </div>
  );
}
