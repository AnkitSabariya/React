import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import IPhoneChat from "./IPhoneChat";
import SamsungChat from "./SamsungChat";

export default function PhoneMockups() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme", !darkMode);
  };

  return (
    <Router>
      <div className={`phone-mockups ${darkMode ? "dark-theme" : ""}`}>
        {/* Navbar */}
        <div className="phone-navbar">
          <div className="nav-buttons">
            <NavLink
              to="/iphone"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              iPhone
            </NavLink>
            <NavLink
              to="/samsung"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Samsung
            </NavLink>
          </div>

          {/* Theme Toggle */}
       <div className="theme-toggle">
  <button onClick={toggleTheme} className="glass-btn">
    <span className="icon">{darkMode ? "☀️" : "🌙"}</span>
  </button>
</div>

        </div>

        {/* Phone Screens */}
        <div className="phone-container">
          <Routes>
            <Route path="/iphone" element={<IPhoneChat />} />
            <Route path="/samsung" element={<SamsungChat />} />
            <Route path="*" element={<IPhoneChat />} /> {/* default */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
