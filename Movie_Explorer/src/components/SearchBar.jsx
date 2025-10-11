import { useMovieContext } from "../context/moviesContext";

const SearchBar = () => {
  const { search, setSearch, onKeyDown, searchByButton } = useMovieContext();
  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        placeholder="Search for movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
        className="w-full max-w-xl px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        onClick={searchByButton}
        className="cursor-pointer rounded-sm px-2.5 py-1 bg-blue-700 text-white ml-3"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
