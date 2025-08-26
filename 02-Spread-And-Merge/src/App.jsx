import React from "react";

function App() {
  // Original arrays
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  // 1. Spread to copy an array
  const copyArr = [...arr1];
  console.log("Copy of arr1:", copyArr); // [1,2,3]

  // 2. Spread to merge arrays
  const mergedArr = [...arr1, ...arr2];
  console.log("Merged arrays:", mergedArr); // [1,2,3,4,5,6]

  // 3. Spread to add extra elements
  const extendedArr = [...arr1, 7, 8];
  console.log("Extended arr1:", extendedArr); // [1,2,3,7,8]

  
  // Original objects
  const movie = { name: "Movie A", rating: 9 };
  const details = { genre: "Action", year: 2025 };

  // 1. Spread to copy an object
  const copyMovie = { ...movie };
  console.log("Copy:", copyMovie);
  // { name: "Movie A", rating: 9 }

  // 2. Spread to merge objects
  const mergedMovie = { ...movie, ...details };
  console.log("Merged:", mergedMovie);
  // { name: "Movie A", rating: 9, genre: "Action", year: 2025 }

  // 3. Spread with overwriting
  const updatedMovie = { ...movie, rating: 10, director: "John" };
  console.log("Updated:", updatedMovie);
  // { name: "Movie A", rating: 10, director: "John" }

  return <div>App</div>;
}

export default App;
