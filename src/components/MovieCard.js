import React from "react";

const MovieCard = ({ movie, addToFavorites }) => {
    return (
        <div className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <button onClick={() => addToFavorites(movie)} className="mt-2 text-blue-500 hover:underline">
                Add to Favorites
            </button>
        </div>
    );
};

export default MovieCard;
