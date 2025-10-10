import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">
        🎬 Movie Explorer
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400">
          Home
        </Link>
        <Link to="/favorites" className="hover:text-yellow-400">
          Favorites
        </Link>
      </div>
    </nav>
  );
}
