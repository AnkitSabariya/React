import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { CounterProvider } from "../context/context";


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
      <CounterProvider value={{ count, setCount }}>
        <Navbar />
      </CounterProvider>
    </div>
  );
}

export default App;
