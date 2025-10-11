import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { useMovieContext } from "../context/moviesContext";
import Loading from "../components/Loading";

const FavoritesPage = () => {
  const { fvrtMovies, setSpecificMovie, specificMovie, loading } =
    useMovieContext();

  // Filter out favorite movies from the full list
  const favoriteMovieObjects = specificMovie.filter((movie) =>
    fvrtMovies.includes(movie.imdbID)
  );

  // find fvrt movies and list
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // if no movie added to fvrt then retrun this
  if (!fvrtMovies || fvrtMovies.length === 0) {
    return (
      <p className="text-center mt-8">You haven't added any favorites yet.</p>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Your Favorite Movies
      </h2>
      {loading ? <Loading /> : <MovieList movieList={favoriteMovieObjects} />}
    </div>
  );
};

export default FavoritesPage;
