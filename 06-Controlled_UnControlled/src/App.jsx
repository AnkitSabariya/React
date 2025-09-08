import React from "react";
import Controlled from "./Controlled";
import Uncontrolled from "./Uncontrolled";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-900">
        Controlled vs Uncontrolled Inputs
      </h1>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        <Controlled />
        <Uncontrolled />
      </div>

      <footer className="mt-10 text-sm text-center text-gray-500">
        Built with React + Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
