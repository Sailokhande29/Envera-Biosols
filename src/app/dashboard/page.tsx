export default function Dashboard() {
  return (
    <main className="p-8">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <p className="text-gray-700 mb-8">Welcome to your business dashboard. Here you can quickly access your customers, transactions, and reports.</p>
      {/* Placeholder for stats/quick links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Customers</h3>
          <p className="text-gray-500">Manage your customer list</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Transactions</h3>
          <p className="text-gray-500">View and add transactions</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Reports</h3>
          <p className="text-gray-500">Generate business reports</p>
        </div>
      </div>
    </main>
  );
} 