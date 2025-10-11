import { useMovieContext } from "../context/moviesContext";
import MovieCard from "./MovieCard";

const MovieList = ({ movieList }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {/* Replace with dynamic mapping */}
      {movieList.map((movie, i) => (
        <MovieCard
          key={i}
          title={movie.Title}
          poster={movie.Poster}
          rating={
            movie.Ratings?.find((r) => r.Source === "Internet Movie Database")
              ?.Value || "N/A"
          }
          linkToMovie={movie.imdbID}
          overview={movie.Plot}
        />
      ))}
    </div>
  );
};

export default MovieList;
