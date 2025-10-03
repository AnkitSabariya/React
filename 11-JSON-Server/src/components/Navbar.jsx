import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Project Title */}
      <div className="logo">User Management</div>

      {/* Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Users</Link>
        <Link to="/adduser">Add User</Link>
      </div>

      {/* Hamburger (Mobile) */}
      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
