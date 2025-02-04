import React from "react";

const FavoritesCard = ({ movie }) => {
    return (
        <div className="favorites_card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    );
};

export default FavoritesCard;
