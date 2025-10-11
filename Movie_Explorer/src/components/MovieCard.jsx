import { Link } from "react-router-dom";
import { useMovieContext } from "../context/moviesContext";

const MovieCard = ({ title, poster, rating, overview, linkToMovie }) => {
  const { addToFvrt, fvrtMovies } = useMovieContext();
  return (
    <Link
      to={`/movies/${linkToMovie}/details`}
      className="bg-white shadow-md rounded-lg overflow-hidden w-64"
    >
      <img src={poster} alt={title} className="w-full h-96 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>

        {rating && <p className="text-sm text-gray-600 mb-2">⭐ {rating}</p>}

        <p className="text-sm text-gray-700 line-clamp-3">{overview}</p>

        <button
          onClick={(e) => {
            e.preventDefault(); // prevent navigation
            addToFvrt(linkToMovie); // run your favorite logic
          }}
          disabled={fvrtMovies.includes(linkToMovie)} // 🔥 Disables if already added
          className={`mt-4 w-full py-2 rounded text-white 
    ${
      fvrtMovies.includes(linkToMovie)
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
    }
  `}
        >
          {fvrtMovies.includes(linkToMovie)
            ? "Added to Favorites"
            : "Add to Favorites"}
        </button>
      </div>
    </Link>
  );
};

export default MovieCard;
