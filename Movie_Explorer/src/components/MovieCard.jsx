import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden relative group transition transform hover:scale-105">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-72 object-cover"
        />
      </Link>
      <div className="p-4">
        <h2 className="font-bold text-lg">{movie.title}</h2>
        <p className="text-gray-600 text-sm">⭐ {movie.rating}</p>
      </div>
      <div className="absolute top-2 right-2">
        <FavoriteButton movie={movie} />
      </div>
    </div>
  );
}
