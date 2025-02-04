import React, { useState } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieCard from "../components/MovieCard";
import addToFavorites from "../hooks/addToFavorites"

const Home = () => {
    const [query, setQuery] = useState("Batman");
    const { movies, loading, error } = useFetchMovies(query);

    return (
        <div className="movies_main"> 
            <h1 className="movies_title">Movies</h1>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search movies..."
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error loading movies.</p>}
            <div className="movies">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie}  addToFavorites={addToFavorites}/>
                ))}
            </div>
        </div>
    );
};

export default Home;
