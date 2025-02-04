const addToFavorites = (movie) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Check if the movie is already in favorites
    if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
        favorites.push(movie);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
};


export default addToFavorites;