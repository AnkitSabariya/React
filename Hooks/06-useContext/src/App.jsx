import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { counterContext } from "../context/context";

function App() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="">
     Context Api
      </h1>
      <button type="" className="" onClick={() => setCount(count + 1)}>
       App.jsx +
      </button>
      <counterContext.Provider value={{ count, setCount }}>
        <Navbar />
      </counterContext.Provider>
    </div>
  );
}

export default App;
