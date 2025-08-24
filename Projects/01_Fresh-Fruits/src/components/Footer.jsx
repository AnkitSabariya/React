import React from "react";
import NavLogo from "../assets/navlogo.svg";
import Instalogo from '../assets/insta.svg'
import Facebooklogo from '../assets/facebook.svg'
import Youtubelogo  from '../assets/youtube.svg'
import Twiterlogo from '../assets/twiter.svg'
function Footer() {
  return (
    <footer className="bg-[#FBECEE] ">
      <div className="flex justify-between container  mx-auto px-4 md:px-8 lg:px-16 items-center  py-6 sm:py-9 mt-10  h-[80px] md:h-[150px]">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="text-[#DE2C4C] text-xl md:text-2xl font-bold font-sans flex items-center gap-2">
            FRUIT<span className="text-[#F5923C]">STORE</span>
          </div>
          <img src={NavLogo} alt="Logo" className="w-5 h-5" />
        </div>
        <div className="flex gap-3 md:gap-5">
            <img src={Instalogo} alt="" className="w-[20px] md:w-[30px] cursor-pointer text-[#374150]" />
            <img src={Facebooklogo} alt="" className="w-[20px] md:w-[30px] cursor-pointer text-[#374150]" />
            <img src={Youtubelogo} alt="" className="w-[20px] md:w-[30px] cursor-pointer text-[#374150]" />
            <img src={Twiterlogo} alt="" className="w-[20px] md:w-[30px] cursor-pointer text-[#374150]" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
