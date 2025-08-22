import React from "react";
import Herofruits from "../assets/herofruits.png";
import Leaf from "../assets/leaf-CCkW9aP6.png"; // import leaf image

function Herosec() {
  return (
    <div className="flex flex-col md:flex-row w-[90%] md:w-[70%] justify-between items-center mx-auto font-sans relative mt-10">
      {/* Left Section */}
      <div className="relative md:w-1/2">
        <div className="font-averia text-[60px] font-semibold leading-tight">
          <h1>Healthy</h1>
          <h1>Fresh Fruits!</h1>
        </div>
        <h4 className="text-[23px] font-medium mt-2">
          Order Now For Fresh Healthy Life
        </h4>
        <p className="text-[#9CA3AF] text-[16px] mt-4">
          Healthy and yummy food for fresh morning breakfast. Eat Daily for good
          health and mind. Order now and get 20% off on your first order
        </p>
        <button className="mt-6 px-6 py-2 bg-primary text-white bg-red-600 rounded-lg hover:bg-primary/80 transition">
          Order Now
        </button>

        {/* Leaf Image */}
        <div className="absolute top-12 md:top-0 left-[200px] blur-sm opacity-80 rotate-[40deg]">
          <img
            src={Leaf}
            alt="leaf"
            className="w-32 md:w-72"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img src={Herofruits} alt="fruits" className="w-full max-w-md md:max-w-lg" />
      </div>
    </div>
  );
}

export default Herosec;
