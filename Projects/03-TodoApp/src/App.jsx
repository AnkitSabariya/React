import React from "react";
import { useState } from "react";

function App() {
  // This State For Get New Input Value
  const [input, setInput] = useState("");
  // This State For Previous State Value Store in Array
  const [tasks, settask] = useState([]);

  const handleInput = (value) => {
    setInput(value);
    console.log("consol", value);
  };
  const handleAdd = () => {
    if (input.trim() === "") return alert("Your Tasks Input Is Empty");
    let exits = tasks.includes(input);
    if (exits) {
      alert("This all Ready Exits");
    } else {
      settask([...tasks, input]);
      setInput("");
    }
  };
  return (
    <>
      <header>
        <h1>📝 Todo App</h1>
        <input
          placeholder="Add Your Tasks"
          onChange={(e) => handleInput(e.target.value)}
          value={input}
        />
        <button onClick={handleAdd}>Add</button>
      </header>
      <footer className="">
        {tasks.map((e, i) => {
          return (
            <ul key={i}>
              <li>{e}</li>
            </ul>
          );
        })}
      </footer>
    </>
  );
}

export default App;
