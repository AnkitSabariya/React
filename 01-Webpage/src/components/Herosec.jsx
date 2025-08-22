import React from "react";
import Herofruits from "../assets/herofruits.png";
import Leaf from "../assets/leaf-CCkW9aP6.png"; // import leaf image
import { IoBagHandleOutline } from "react-icons/io5";

function Herosec() {
  return (
    <div className="flex flex-col md:flex-row w-[90%] md:w-[70%] md:justify-between items-center mx-auto font-sans relative mt-10">
      {/* Left Section */}
      <div className="relative md:w-1/2 text-center md:text-left">
        <div className="font-averia text-[50px] md:text-[60px] font-semibold leading-tight space-y-4">
          <h1>Healthy</h1>
          <h1>
            Fresh<span className="text-[#F5923C]"> Fruits!</span>
          </h1>
        </div>
        <h4 className="text-[24px]  mt-2 tracking-wide">
          Order Now For Fresh Healthy Life
        </h4>
        <p className="text-[#9CA3AF] text-[16px] mt-4 tracking-normal">
          Healthy and yummy food for fresh morning breakfast. <br /> Eat Daily
          for good health and mind. Order now and get <br /> 20% off on your
          first order
        </p>
        <button className="mt-6 px-6 py-[11px] bg-primary flex items-center hover:scale-110 mx-auto md:mx-0  text-white text-[16px] font-semibold shadow-mysh bg-[#DE2C4C] rounded-xl hover:bg-primary/80 transition">
          <IoBagHandleOutline size={20} className="mr-[8px]" /> Order Now
        </button>

        {/* Leaf Image */}
        <div
          className="
    absolute
    top-10 left-[120px]     
    md:top-0 md:left-1/2       
    md:-translate-x-1/2
    blur-sm opacity-80 rotate-[40deg]
  "
        >
          <img src={Leaf} alt="leaf" className="w-32 md:w-72" />
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={Herofruits}
          alt="fruits"
          className="w-full max-w-md md:max-w-[550px] animate-slowspin "
        />
      </div>
    </div>
  );
}

export default Herosec;
