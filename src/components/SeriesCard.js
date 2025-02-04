import React from "react";

const SeriesCard = ({ series, addToFavorites }) => {
    return (
        <div className="series-card">
            <img src={series.Poster} alt={series.Title} />
            <h3>{series.Title}</h3>
            <p>{series.Year}</p>
            <button onClick={() => addToFavorites(series)} className="mt-2 text-blue-500 hover:underline">
                Add to Favorites
            </button>
        </div>
    );
};

export default SeriesCard;
