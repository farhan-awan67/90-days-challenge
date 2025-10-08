import React from "react";

const SearchBar = ({ city, setCity, searchByCity }) => {
  return (
    <div className="flex items-center gap-2 justify-center">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchByCity();
          }
        }}
        className="px-4 py-2 rounded-md bg-white/20 backdrop-blur-md text-white placeholder-white focus:outline-none w-64"
      />
      <button
        onClick={() => searchByCity()}
        className="bg-white/30 text-white px-4 py-2 rounded-md hover:bg-white/50 transition cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
