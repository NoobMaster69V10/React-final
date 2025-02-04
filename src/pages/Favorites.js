import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import FavoritesCard from "../components/FavoritesCard";

const Favorites = () => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="p-4 favorites">
      <h2 className="text-2xl font-bold mb-4">Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 favorites_inner">
          {favorites.map((movie) => (
            <div key={movie.id} className="border rounded-lg p-2 shadow-md favorites_item">
              <FavoritesCard key={movie.imdbID} movie={movie}/>
              <button
                className="mt-2 text-red-500 hover:underline"
                onClick={() => removeFavorite(movie.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
