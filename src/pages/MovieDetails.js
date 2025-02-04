import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const { id } = useParams();
    return <div>Movie Details for {id}</div>;
};

export default MovieDetails;