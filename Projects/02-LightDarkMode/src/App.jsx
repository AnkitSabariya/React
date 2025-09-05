import React, { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <div className={`container ${dark ? "dark" : "light"}`}>
      <div className="toggle-wrapper">
        <label className="switch">
          <input type="checkbox" checked={dark} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
        <span className="mode-text">
          {dark ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </span>
      </div>

      <h1 className="title">Creative Dark / Light Mode</h1>
      <p className="text">
        Smooth transitions, glowing toggle, and responsive design across all
        devices ✨
      </p>
    </div>
  );
}

export default App;
