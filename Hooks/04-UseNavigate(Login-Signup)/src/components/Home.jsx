import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600">
      <div className="w-full max-w-lg p-10 text-center transition duration-500 transform bg-white shadow-2xl rounded-2xl hover:scale-105 hover:shadow-green-500/40">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">🎉 Welcome!</h1>
        <p className="mb-6 text-gray-600">
          You have successfully logged in.  
          This is your <span className="font-semibold">Home Page</span>.
        </p>
        <button
        onClick={()=> navigate("/")} 
          className="px-6 py-3 font-semibold text-white transition transform bg-green-600 shadow-md rounded-xl hover:bg-green-700 hover:-translate-y-1 hover:shadow-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
