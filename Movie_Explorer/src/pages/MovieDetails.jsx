import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";
import Loading from "../components/Loading";
import { useMovieContext } from "../context/moviesContext";

const MovieDetails = () => {
  const { specificMovie } = useMovieContext();
  const { imdbID } = useParams();
  const movie = specificMovie.find((movie) => movie.imdbID === imdbID);
  const relatedMovies = specificMovie.filter(
    (movie) => movie.Genre === movie.Genre
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [imdbID]);

  return movie ? (
    <div className="max-w-7xl mx-auto p-6">
      {/* Movie Header */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full md:w-72 rounded-lg shadow-lg object-cover"
        />

        {/* Movie Info */}
        <div className="flex-1 flex flex-col space-y-4">
          <h1 className="text-3xl font-extrabold">
            {movie.Title}{" "}
            <span className="text-gray-500 text-xl font-normal">
              ({movie.Year})
            </span>
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>
              <strong>Rated:</strong> {movie.Rated}
            </span>
            <span>
              <strong>Released:</strong> {movie.Released}
            </span>
            <span>
              <strong>Runtime:</strong> {movie.Runtime}
            </span>
            <span>
              <strong>Genre:</strong> {movie.Genre}
            </span>
            <span>
              <strong>Language:</strong> {movie.Language}
            </span>
            <span>
              <strong>Country:</strong> {movie.Country}
            </span>
          </div>

          <p className="text-gray-700">{movie.Plot}</p>

          {/* Ratings */}
          <div className="flex flex-wrap gap-6 mt-2 text-gray-800">
            <div>
              <strong>IMDB Rating:</strong> {movie.imdbRating} ⭐
            </div>
            <div>
              <strong>Metascore:</strong> {movie.Metascore}
            </div>
            <div>
              <strong>Votes:</strong> {movie.imdbVotes}
            </div>
            <div>
              <strong>Box Office:</strong> {movie.BoxOffice}
            </div>
          </div>

          {/* Director, Writer, Actors */}
          <div className="space-y-1 mt-4 text-gray-800">
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Writer:</strong> {movie.Writer}
            </p>
            <p>
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p>
              <strong>Awards:</strong> {movie.Awards}
            </p>
            <p>
              <strong>DVD Release:</strong> {movie.DVD}
            </p>
            <p>
              <strong>Production:</strong> {movie.Production}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              {movie.Website === "N/A" ? (
                "N/A"
              ) : (
                <a
                  href={movie.Website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  {movie.Website}
                </a>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Related Movies */}
      {/* <section className="mt-12"> */}
      {/* <h2 className="text-2xl font-bold mb-6">Related Movies</h2> */}
      {/* <div className="flex flex-wrap justify-center gap-6"> */}
      {/* Dummy related movies */}
      {/* {[...Array(6)].map((_, i) => (
            <MovieCard
              key={i}
              title={`Related Movie ${i + 1}`}
              poster="https://via.placeholder.com/300x450?text=Movie+Poster"
              rating="7.0"
              overview="A brief overview of this related movie to attract interest."
            />
          ))} */}
      {/* </div> */}
      {/* </section> */}
    </div>
  ) : (
    <Loading className={"mt-6"} />
  );
};

export default MovieDetails;
