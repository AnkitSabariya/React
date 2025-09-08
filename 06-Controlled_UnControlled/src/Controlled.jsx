import React, { useState } from "react";

const Controlled = () => {
  const [controle, setControle] = useState("Defult State in Save visible in value={}"); // ✅ empty string better than undefined

  const handleSubmit = () => {
    console.log(controle);
  };

  return (
    <div className="w-full max-w-md p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-xl font-semibold text-gray-800">Controlled Input</h2>
      <p className="mt-1 text-sm text-gray-500">
        {controle} is controlled by parent component.
      </p>

      <label className="block mt-4 mb-1 text-sm font-medium text-gray-700">
        Name
      </label>
      <input
        value={controle} // ✅ add this for proper "controlled" behavior
        onChange={(e) => setControle(e.target.value)}
        type="text"
        placeholder="Type your name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        onClick={handleSubmit}
        className="w-full py-2 mt-4 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
      >
        Submit
      </button>
    </div>
  );
};

export default Controlled;
