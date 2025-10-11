import FavoriteButton from "../components/FavoriteButton";

export default function MoviePage() {
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
