import React from "react";
import FruitImage1 from "../assets/imgi_7_fruits-splash-BeZYLA1d.png";
import FruitImage2 from "../assets/imgi_8_fruit-plate2-BK55XwYa.png";
import FruitImage3 from "../assets/banner-bg-z4y1lx0D.jpg";
import { IoBagHandleOutline } from "react-icons/io5";
export default function BrandInfo1() {
  return (
    <section className="bg-[#FFF5F0] py-12 mt-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2    px-4 md:px-8 lg:px-16 gap-8">
        {/* Left Image */}
        <div className="w-[250px] md:w-[300px] mx-auto md:h-[480px] flex justify-center items-center">
          <img
            src={FruitImage1}
            alt="Fruits Splash"
            className="w-80 md:w-auto"
          />
        </div>

        {/* Right Text */}
        <div className="w-full text-center md:text-left  flex flex-col justify-center items-cente md:items-start ">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 ">BRAND INFO</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <br className="hidden md:block" /> Recusandae iusto minima ad ut id
            eos accusantium <br className="hidden md:block" /> aut, aperiam quis
            incidunt!
          </p>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <br className="hidden md:block" /> Recusandae iusto minima ad ut id
            eos accusantium <br className="hidden md:block" /> aut, aperiam quis
            incidunt!
          </p>
          <button className=" px-[25px] py-[12px] bg-primary flex items-center justify-center hover:scale-110 mx-auto border-none outline-none md:mx-0  text-white text-[16px] font-semibold shadow-mysh bg-[#DE2C4C] rounded-xl hover:bg-primary/80 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
export function BrandInfo2() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2     gap-8">
        {/* Left Image */}
        <div className="w-[300px] order-2 md:w-[400px] mx-auto md:h-[480px] flex justify-center items-center">
          <img
            src={FruitImage2}
            alt="Fruits Splash"
            className="w-full md:w-full"
          />
        </div>

        {/* Right Text */}
        <div className="w-full text-center md:text-left  flex flex-col justify-center items-cente md:items-start ">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 uppercase">
            Online Fruit <br /> Store
          </h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <br className="hidden md:block" /> Recusandae iusto minima ad ut id
            eos accusantium <br className="hidden md:block" /> aut, aperiam quis
            incidunt!
          </p>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <br className="hidden md:block" /> Recusandae iusto minima ad ut id
            eos accusantium <br className="hidden md:block" /> aut, aperiam quis
            incidunt!
          </p>
          <button className=" px-[25px] py-[12px] bg-primary flex items-center justify-center hover:scale-110 mx-auto border-none outline-none md:mx-0  text-white text-[16px] font-semibold shadow-mysh bg-[#DE2C4C] rounded-xl hover:bg-primary/80 transition">
            Download the App
          </button>
        </div>
      </div>
    </section>
  );
}

export function BrandInfo3() {
  return (
     <div className="container mx-auto px-4 md:px-8 lg:px-16">
    <section
      className="bg-[#FFF5F0]    rounded-[30px] bg-cover bg-fixed   bg-center"
      style={{ backgroundImage: `url(${FruitImage3})` }}
    >
      <div className=" grid grid-cols-1 md:grid-cols-2     gap-8">
        {/* Left Image */}
        <div className="w-[250px] md:w-[300px] mx-auto md:h-[448px] flex justify-center items-center"></div>

        {/* Right Text */}
        <div className="w-full text-center md:text-left  flex flex-col justify-center items-cente md:items-start px-4 py-20 md:py-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">Get Fresh <br className="hidden md:block"/> Fruits Today</h2>
          <p className=" mb-4 text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <br className="hidden md:block" /> Recusandae iusto minima ad ut id
            eos accusantium <br className="hidden md:block" /> aut, aperiam quis
            incidunt!
          </p>

          <button className="mt-7 px-[25px] py-[12px] bg-primary flex items-center justify-center hover:scale-110 mx-auto border-none outline-none md:mx-0  text-white text-[16px] font-semibold shadow-mysh bg-[#DE2C4C] rounded-xl hover:bg-primary/80 transition">
            <IoBagHandleOutline size={20} className="mr-[8px]" /> Order Now
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}
