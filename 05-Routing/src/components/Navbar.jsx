import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Github from './Github';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full text-white bg-blue-600 shadow-md">
    
      <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold">MyWebsite</h1>
        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <ul className="hidden gap-6 md:flex">
          <NavLink to="/" className={({isActive}) => isActive ? "text-yellow-300" : "cursor-pointer "}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? "text-yellow-300" : "cursor-pointer "}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-yellow-300" : "cursor-pointer "}>Contact</NavLink>
          <NavLink to="/github" className={({isActive}) => isActive ? "text-yellow-300" : "cursor-pointer "}>Github</NavLink>
        </ul>
      </div>

      {open && (
        <ul className="flex flex-col gap-4 p-4 bg-blue-500 md:hidden">
          <NavLink to="/" onClick={() => setOpen(false)} className={({isActive}) => isActive ? "text-yellow-300" : "cursor-pointer "}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className={({isActive}) => isActive ? "text-yellow-300" : "cursor-pointer "}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className={({isActive}) => isActive ? "text-yellow-300" : "cursor-pointer "}>Contact</NavLink>
          <NavLink to="/githubt" onClick={() => setOpen(false)} className={({isActive}) => isActive ? "text-yellow-300" : "cursor-pointer "}>Github</NavLink>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
