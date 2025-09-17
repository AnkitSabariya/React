import React from "react";
import useCounter from "../src/useCounter";
import "./App.css"; // CSS file import

export default function App() {
  const { count, increment, decrement, reset,ankit } = useCounter(0);

  return (
    <div className="container">
      <h1>Custom Hook: useCounter {ankit}</h1>
      <p>Count: {count}</p>

      <div className="buttons">
        <button onClick={increment} className="btn increment">➕ Increment</button>
        <button onClick={decrement} className="btn decrement">➖ Decrement</button>
        <button onClick={reset} className="btn reset">🔄 Reset</button>
      </div>
    </div>
  );
}
