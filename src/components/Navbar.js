import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="nav_link">Movies</Link>
            <Link to="/series" className="nav_link">Tv Series</Link>
            <Link to="/favorites" className="nav_link">Favorites</Link>
            <ThemeToggle  className="theme_btn"/>
        </nav>
    );
};

export default Navbar;