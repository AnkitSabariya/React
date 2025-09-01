import React, { useState } from "react";

function App() {
  // Render WIth State
  let [data] = useState([
    { name: "David", age: 30, email: "david@example.com" },
    { name: "Alice", age: 22, email: "alice@example.com" },
    { name: "Eve", age: 35, email: "eve@example.com" },
    { name: "Charlie", age: 28, email: "charlie@example.com" },
    { name: "Bob", age: 25, email: "bob@example.com" },
  ]);
  // Derived State
  const length = data.length
  return (
    <div>
      <h1 className="">Data Render Using State</h1>
      {
        data.map((e)=>{
          return(
            <div >Name : {e.name} Age : {e.age}</div>
          )
        })
      }
      <h1 className="">Derived State {length}</h1>
    </div>
  );
}

export default App;
