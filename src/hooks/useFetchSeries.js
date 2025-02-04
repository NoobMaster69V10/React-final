import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../config/apiConfig";
import axios from "axios";

const useFetchSeries = (query) => {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${BASE_URL}?s=${query}&type=series&apikey=${API_KEY}`);
                setSeries(response.data.Search || []);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchSeries();
        }
    }, [query]);

    return { series, loading, error };
};

export default useFetchSeries;