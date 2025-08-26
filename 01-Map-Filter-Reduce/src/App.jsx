import React from "react";
import "./App.css"; // we'll add basic CSS

function App() {
  // Dummy data: list of movies
  const movies = [
    { id: 1, name: "Movie A", rating: 9, genre: "Action" },
    { id: 2, name: "Movie B", rating: 7.5, genre: "Comedy" },
    { id: 3, name: "Movie C", rating: 8.8, genre: "Drama" },
    { id: 4, name: "Movie D", rating: 6.5, genre: "Horror" },
  ];

  // 1️⃣ filter: get movies with rating >= 8
  const highRated = movies.filter(movie => movie.rating >= 8);

  // 2️⃣ map: create JSX cards for each high rated movie
  const movieCards = highRated.map(movie => (
    <div className="card" key={movie.id}>
      <h2>{movie.name}</h2>
      <p>Rating: {movie.rating}</p>
      <p>Genre: {movie.genre}</p>
    </div>
  ));

  // 3️⃣ reduce: calculate average rating of high rated movies
  // total count and first store
  const avgRating = highRated.reduce((acc, movie) => acc + movie.rating, 0) / highRated.length;

  return (
    <div className="App">
      <h1>Movies Dashboard</h1>
      <p>Average Rating of High Rated Movies: {avgRating.toFixed(1)}</p>
      <div className="cards-container">
        {movieCards.length > 0 ? movieCards : <p>No high rated movies found.</p>}
      </div>
    </div>
  );
}

export default App;
