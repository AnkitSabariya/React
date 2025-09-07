// src/components/ErrorPage.jsx
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="mb-4 text-6xl font-bold text-red-600">⚠ Something went wrong!</h1>
      <p className="mb-2 text-gray-700">{error.statusText || "Unknown Error"}</p>
      <p className="text-gray-500">{error.message}</p>
      <a 
        href="/" 
        className="px-6 py-2 mt-4 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
      >
        Go Home
      </a>
    </div>
  );
};

export default ErrorPage;
