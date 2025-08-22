import React from "react";
import NavLogo from "../assets/navlogo.svg"; 
import { GrCart } from "react-icons/gr";
import { RiMenu5Fill } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="bg-white w-[70%] mx-auto py-4 sm:py-9">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-[#DE2C4C] text-2xl font-bold font-sans flex items-center gap-2">
            FRUIT<span className="text-[#F5923C]">STORE</span>
          </div>
          <img src={NavLogo} alt="Logo" className="w-5 h-5" />
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-6 text-[#4E5866] space-x-6 text-base font-semibold">
          <a href="">Home</a>
          <a href="">Products</a>
          <a href="">About</a>
          <a href="">Shop</a>
          <a href="">Contacts</a>
          <GrCart size={22}  />
        </div>

        {/* Mobile Menu Icon */}
        <div className="block sm:hidden">
          <RiMenu5Fill size={28} className="text-[#4E5866] cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
