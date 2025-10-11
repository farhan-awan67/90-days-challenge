import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold cursor-pointer"
      >
        🎬 Movie Explorer
      </h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/favorites" className="hover:text-gray-300">
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
