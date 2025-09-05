import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=a2d86755e5d6eac04182233d4c6dcb1e&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies((prev) => [...prev, ...data.results]);
      });
  }, [page]);

  return (
    <div className="container">
      <h1>Trending Movies</h1>
      <div className="grid">
        {movies.map((movie) => (
          <div key={movie.id} className="card">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="info">
              <h3>{movie.title}</h3>
              <p>{movie.release_date || "N/A"}</p>
              <span>⭐ {movie.vote_average}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="view-more" onClick={() => setPage((prev) => prev + 1)}>
        Load More
      </button>
    </div>
  );
}

export default App;
