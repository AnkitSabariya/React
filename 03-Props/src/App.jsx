import React from "react";
import Card from "./components/Card";
import Data from "./api/cards.json";
import Contectdata from "./api/contectdata.json";
import Contect from './components/Contect';
import "./App.css";

function App() {
  return (
    <>
      <Card properties={Data} />
      <hr></hr>
      {Contectdata.map((a) => {
        return <Contect names={a.name} emails={a.email} active={a.isActive ? "Yes" : "NO"} key={a.id}/>;
      })}
    </>
  );
}

export default App;
