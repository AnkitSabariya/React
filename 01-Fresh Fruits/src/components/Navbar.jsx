import React from "react";
import NavLogo from "../assets/navlogo.svg";
import { GrCart } from "react-icons/gr";
import { RiMenu5Fill } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="bg-white w-full max-w-[1500px] mx-auto py-6 sm:py-9 px-4 md:px-8 lg:px-16">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-[#DE2C4C] text-2xl font-bold font-sans flex items-center gap-2">
            FRUIT<span className="text-[#F5923C]">STORE</span>
          </div>
          <img src={NavLogo} alt="Logo" className="w-5 h-5" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-[#4E5866] text-base font-semibold">
          <a
            href=""
            className="border-b-2 border-transparent hover:border-[#DE2C4C] leading-8 hover:text-[#DE2C4C] transition duration-200"
          >
            Home
          </a>
          <a
            href=""
            className="border-b-2 border-transparent hover:border-[#DE2C4C] leading-8 hover:text-[#DE2C4C] transition duration-200"
          >
            Products
          </a>
          <a
            href=""
            className="border-b-2 border-transparent hover:border-[#DE2C4C] leading-8 hover:text-[#DE2C4C] transition duration-200"
          >
            About
          </a>
          <a
            href=""
            className="border-b-2 border-transparent hover:border-[#DE2C4C] leading-8 hover:text-[#DE2C4C] transition duration-200"
          >
            Shop
          </a>
          <a
            href=""
            className="border-b-2 border-transparent hover:border-[#DE2C4C] leading-8 hover:text-[#DE2C4C] transition duration-200"
          >
            Contacts
          </a>

          <div className="inline-flex items-center justify-center p-2 rounded-full hover:bg-[#DE2C4C] transition duration-200 cursor-pointer">
            <GrCart size={22} className="text-[#4E5866] hover:text-white" />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="block lg:hidden">
          <RiMenu5Fill size={28} className="text-[#4E5866] cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
