import React, { useState } from "react";
import { useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  // Heavy calculation
  // const heavyTask = () => {
  //   console.log("Heavy calculation running...");
  //   let total = 0;
  //   for (let i = 0; i < 100000; i++) {
  //     total += i;
  //     console.log(total);

  //   }
  //   return total + count;
  // };

  // const result = heavyTask(); // Run every Render

  //Use memo Hook heavy calculation Stop Evry Re-Render Re-Calculation
  const result = useMemo(() => {
    console.log("🟢 useMemo calculation running...");
    let total = 0;
    for (let i = 0; i < 10000000000; i++) {
      total += i;
    }
    return total + count;
  }, [count]); // Count Change
  console.log("🔄 Component Rendered");
  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Result: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setOther(!other)}>
        Toggle Other State {other ? "True" : "False"}
      </button>
    </div>
  );
}

export default App;
