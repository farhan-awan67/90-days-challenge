import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import { useMovieContext } from "../context/moviesContext";
// import Pagination from "../components/Pagination";

const HomePage = () => {
  const { specificMovie, loading } = useMovieContext();
  return (
    <div className="p-4">
      <SearchBar />
      {loading ? <Loading /> : <MovieList movieList={specificMovie} />}
      {/* <Pagination /> */}
    </div>
  );
};

export default HomePage;
