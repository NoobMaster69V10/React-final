import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
import ThemeProvider from "./context/ThemeContext";
import "./styles/global.css";

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <div>
                    <Navbar />
                    <AppRoutes />
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
