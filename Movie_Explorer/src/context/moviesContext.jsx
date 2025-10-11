import axios from "axios";
import { createContext } from "react";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const MoviesContext = createContext();

export const Moviesprovider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [specificMovie, setSpecificMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fvrtMovies, setFvrtMovies] = useState([]);

  const fetchMovies = async (movieName) => {
    setLoading(true);
    try {
      // movie by name
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${movieName}&apikey=${
          import.meta.env.VITE_OMDBI_KEY
        }`
      );
      const Movies = response.data.Search;

      if (!Movies) {
        return;
      }

      // 2. Fetch full details for each movie
      const detailedMovies = await Promise.all(
        Movies.map((movie) =>
          axios
            .get(
              `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${
                import.meta.env.VITE_OMDBI_KEY
              }`
            )
            .then((res) => res.data)
        )
      );
      setSpecificMovie(detailedMovies);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  //on enter button
  const onKeyDown = (e) => {
    if (search.trim() !== "" && e.key === "Enter") {
      fetchMovies(search.trim()).then(() => {
        setSearch(""); // only clear after fetch finishes
      });
    }
  };

  // search by button
  const searchByButton = () => {
    if (search.trim() !== "") {
      fetchMovies(search.trim()).then(() => {
        setSearch(""); // only clear after fetch finishes
      });
    }
  };

  // add to fvrt
  const addToFvrt = (linkToMovie) => {
    setFvrtMovies((prev) => {
      const updated = [...prev, linkToMovie];
      localStorage.setItem("fvrtMovies", JSON.stringify(updated));
      return updated;
    });
    toast.success("movie added to favourite");
  };

  useEffect(() => {
    fetchMovies("star");
    const favouriteMovies =
      JSON.parse(localStorage.getItem("fvrtMovies")) || [];
    setFvrtMovies(favouriteMovies);
  }, []);

  const value = {
    search,
    setSearch,
    specificMovie,
    onKeyDown,
    loading,
    addToFvrt,
    fvrtMovies,
    setSpecificMovie,
    specificMovie,
    searchByButton,
  };
  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MoviesContext);
};
