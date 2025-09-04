import React, { useState } from 'react'
import './App.css'
function App() {
  let [color,setColor] = useState(false);
  let handleColor = () =>{
    setColor(!color)
  }
  // let dark = {
  //   backgroundColor : "black"
  // }
  // let light = {
  //   backgroundColor : "white"
  // }
  // style={color ? dark :  light}
  return (
    <div className={`container ${color ? "dark" :  "light" }`}>
      <button type="" className="" onClick={() => handleColor()}>{color ? "Light" : "Dark"}</button>

    </div>
  )
}

export default App