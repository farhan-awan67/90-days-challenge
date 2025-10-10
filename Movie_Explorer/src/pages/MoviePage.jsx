import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FavoriteButton from "../components/FavoriteButton";


export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const found = allMovies.find((m) => m.id === parseInt(id));
    setMovie(found);
  }, [id]);

  if (!movie) return <div className="p-4">Movie not found.</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full md:w-1/3 rounded shadow"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-gray-700 mb-2">⭐ {movie.rating}</p>
          <p className="text-gray-600">{movie.overview}</p>
          <div className="mt-4">
            <FavoriteButton movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
}
