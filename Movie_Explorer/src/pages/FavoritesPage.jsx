import { useState, useEffect } from "react";
import MovieGrid from "../components/MovieGrid";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);


  return (
    <div>
      <h2 className="text-2xl font-bold p-4">❤️ Your Favorites</h2>
      {favorites.length > 0 ? (
        <MovieGrid movies={favorites} />
      ) : (
        <p className="p-4 text-gray-500">No favorite movies added yet.</p>
      )}
    </div>
  );
}
