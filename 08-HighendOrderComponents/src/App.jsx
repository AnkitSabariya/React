import React from "react";
import Display from "./components/Display";
import Component from "./components/Component";

 const App = () => {
  const url =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=a2d86755e5d6eac04182233d4c6dcb1e&page=2";
  const Hoc = Component(Display, url);
  return (
    <div>
      <Hoc />
    </div>
  );
};
export default App