import React, { useState } from "react";
import NavLogo from "../assets/navlogo.svg";
import { GrCart } from "react-icons/gr";
import { RiMenu5Fill, RiCloseFill } from "react-icons/ri";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%] lg:w-[75%] z-50 
        backdrop-blur-lg bg-white/30 border border-white/20 rounded-2xl shadow-lg 
        transition-all duration-500 ease-in-out">
        
        <div className="px-4 md:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-[#DE2C4C] text-2xl font-bold font-sans flex items-center gap-2">
              FRUIT<span className="text-[#F5923C]">STORE</span>
            </div>
            <img src={NavLogo} alt="Logo" className="w-5 h-5" />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 text-[#4E5866] text-base font-semibold">
            {["Home", "Products", "About", "Shop", "Contacts"].map((link, i) => (
              <a
                key={i}
                href="#"
                className="border-b-2 border-transparent hover:border-[#DE2C4C] leading-8 hover:text-[#DE2C4C] transition duration-300"
              >
                {link}
              </a>
            ))}

            <div className="inline-flex items-center justify-center p-2 rounded-full hover:bg-[#DE2C4C] transition duration-300 cursor-pointer">
              <GrCart size={22} className="text-[#4E5866] hover:text-white" />
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="block lg:hidden">
            {isOpen ? (
              <RiCloseFill
                size={32}
                className="text-[#DE2C4C] cursor-pointer transition-transform duration-300 hover:rotate-90"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <RiMenu5Fill
                size={28}
                className="text-[#4E5866] cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Separate box with 4 side rounded) */}
      <div
        className={`lg:hidden fixed left-1/2 -translate-x-1/2 w-[92%] md:w-[85%] lg:w-[75%] mt-[88px] 
          backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl rounded-2xl z-40 
          transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-[#4E5866] text-lg font-semibold">
          {["Home", "Products", "About", "Shop", "Contacts"].map((link, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-[#DE2C4C] transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}

          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#DE2C4C] text-white cursor-pointer hover:scale-110 transition-transform duration-300">
            <GrCart size={22} />
          </div>
        </div>
      </div>

      {/* Spacer so Hero section not cut */}
      <div className="h-28 md:h-32"></div>
    </>
  );
}

export default Navbar;
