export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="glass p-4">Total Clients</div>
        <div className="glass p-4">Samples in Testing</div>
        <div className="glass p-4">Completed Results</div>
        <div className="glass p-4">Pending Samples</div>
      </div>
    </div>
  );
}