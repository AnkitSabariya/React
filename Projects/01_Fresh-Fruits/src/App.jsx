import React from "react";
import Navbar from "./components/Navbar";
import Herosec from "./components/Herosec";
import Menufruits from "./components/Menufruits";
import BrandInfo, { BrandInfo2, BrandInfo3 } from "./components/BrandInfo";
import Footer from "./components/Footer";
{
/* Images import */}
import Apple from "./assets/imgi_3_apple-dU8UKi7U.png";
import Orange from "./assets/imgi_4_orange-SYYSet8r.png";
import Avocado from "./assets/imgi_5_avocado-CLmYh0bp.png";
import Cherry from "./assets/imgi_6_cherry-K8SpylM9.png";

function App() {
  return (
    <>
      <Navbar />
      <Herosec />

      <h1 className="container mx-auto text-center md:text-left md:pl-24 text-2xl font-bold mt-12 md:mt-32">OUR MENU</h1>
      {/* parent k  */}
      <div className=" container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row flex-wrap items-center  gap-8 justify-center mt-12">
        <Menufruits img={Apple} title="Fresh Red Apples" price="$3.99" />
        <Menufruits img={Orange} title="Fresh Oranges" price="$4.99" />
        <Menufruits img={Avocado} title="Fresh Avocado" price="$5.99" />
        <Menufruits img={Cherry} title="Fresh Cherries" price="$2.99" />
      </div>
      <BrandInfo/>
      <BrandInfo2/>
      <BrandInfo3/>
      <Footer/>
    </>
  );
}

export default App;
