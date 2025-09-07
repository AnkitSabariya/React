// src/pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="mb-4 text-6xl font-bold text-red-600">404</h1>
      <p className="mb-6 text-xl text-gray-700">Page Not Found!</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
