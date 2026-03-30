import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-bgSecondary p-4 fixed">
      <h2 className="text-xl font-bold text-primary mb-6">LCITS</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/tracking">Tracking</Link>
        <Link to="/results">Results</Link>
        <Link to="/search">Search</Link>
      </nav>
    </div>
  );
}