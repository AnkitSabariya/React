import React from "react";
import Card from "./components/card";
import Data from "../src/api/cards.json";
import "./App.css";

function App() {
  return (
    <>
      <Card properties={Data} />
    </>
  );
}

export default App;
