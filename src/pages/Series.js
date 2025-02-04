import React, { useState } from "react";
import addToFavorites from "../hooks/addToFavorites"
import SeriesCard from "../components/SeriesCard";
import useFetchSeries from "../hooks/useFetchSeries";

const Series = () => {
    const [query, setQuery] = useState("Breaking Bad");
    const { series, loading, error } = useFetchSeries(query);

    return (
        <div className="series_main">
            <h1 className="series_title">Series</h1>

            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search tv series..."
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error loading tv series.</p>}
            <div className="series">
                {series.map((series) => (
                    <SeriesCard key={series.imdbID} series={series}  addToFavorites={addToFavorites}/>
                ))}
            </div>
        </div>
    );
};

export default Series;