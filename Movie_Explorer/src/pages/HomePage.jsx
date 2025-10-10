import { useState, useEffect } from "react";
import MovieGrid from "../components/MovieGrid";
import SearchBar from "../components/SearchBar";


export default function HomePage() {
  const [movies, setMovies] = useState(mockMovies);
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <MovieGrid movies={filtered} />
    </div>
  );
}
