import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="glass fixed top-0 w-full px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-primary">LCITS</h1>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="btn-primary">Get Started</Link>
      </div>
    </nav>
  );
}