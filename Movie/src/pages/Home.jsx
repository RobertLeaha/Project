import { useState } from "react";
import "../css/Home.css";

import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Iron Man 1 ", release_date: "2021" },
    { id: 2, title: "Iron Man 2 ", release_date: "2022" },
    { id: 3, title: "Iron Man 3 ", release_date: "2023" },
    { id: 4, title: "Iron Man 4 ", release_date: "2024" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movie"
          className="search-input "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
export default Home;
