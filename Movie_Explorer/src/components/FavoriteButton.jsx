import { useState, useEffect } from "react";

export default function FavoriteButton({ movie }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFav(favs.some((m) => m.id === movie.id));
  }, [movie.id]);

  const toggleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    let updated;
    if (isFav) {
      updated = favs.filter((m) => m.id !== movie.id);
    } else {
      updated = [...favs, movie];
    }
    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFav(!isFav);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`text-xl ${
        isFav ? "text-red-500" : "text-gray-300"
      } hover:scale-110`}
      title={isFav ? "Remove from favorites" : "Add to favorites"}
    >
      {isFav ? "❤️" : "🤍"}
    </button>
  );
}
