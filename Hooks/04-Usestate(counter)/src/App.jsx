import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  function handleInc() {
    count = count + 1;
    setCount(count);
    console.log(count); // Print To hoga ui Render nhi isi liye state ka use hoga
  }
  let handleDec = () => {
    if (count >= 0) {
      setCount(count);
      count = count - 1;
      console.log(count);
    }
  };
  return (
    <>
      <div>Counter : {count}</div>
      <button onClick={handleInc}>+</button>&nbsp;
      <button onClick={handleDec}>-</button>
    </>
  );
}

export default App;
