import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 bg-gray-100 h-pt-20  min-h-[91.1vh]">
      <h2 className="text-5xl font-bold text-blue-600">Welcome to My Website</h2>
      <p className="max-w-2xl mt-4 text-lg text-center text-gray-700">
        A modern website built with React + TailwindCSS.
      </p>
    </div>
  );
};

export default Home;
