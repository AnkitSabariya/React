import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  const handleCall = useCallback(() => {
    console.log("🟢 useCallBack running...");
    setCount(count + 1);
  }, [count]);
  console.log("🔄 Component Rendered");
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleCall}>Increment Count</button>
      <button onClick={() => setOther(!other)}>
        Toggle Other ({other.toString()})
      </button>
    </div>
  );
}

export default App;
