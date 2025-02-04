import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../config/apiConfig";
import axios from "axios";

const useFetchMovies = (query) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${BASE_URL}?s=${query}&type=movie&apikey=${API_KEY}`);
                setMovies(response.data.Search || []);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchMovies();
        }
    }, [query]);

    return { movies, loading, error };
};

export default useFetchMovies;