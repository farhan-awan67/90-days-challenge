import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieDetails from "./pages/MovieDetails";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/movies/:imdbID/details" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
