import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

export default function App() {
  // Parent me state rakha → single source of truth
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Parent Component</h1>
      <hr />

      {/* Child1: Input box to change text */}
      <Child1 text={text} setText={setText} />
      <hr />

      {/* Child2: Display the text */}
      <Child2 text={text} />
      <hr />

      {/* Child3: Mirror display */}
      <Child3 text={text} />
    </div>
  );
}
