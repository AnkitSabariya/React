import React, { useRef } from "react";

import Reference from '../node_modules/eslint-scope/lib/reference';

const Uncontrolled = () => {
    const Reference = useRef()
    const handleSave = () =>{
        console.log(Reference.current.value);
        
    }
  return (
    <div className="w-full max-w-md p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-xl font-semibold text-gray-800">Uncontrolled Input</h2>
      <p className="mt-1 text-sm text-gray-500">
        Value is handled internally by the input itself.
      </p>

      <label className="block mt-4 mb-1 text-sm font-medium text-gray-700">
        Name
      </label>
      <input
        
        type="text"
        defaultValue="John Doe"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button ref={Reference} onClick={handleSave} className="w-full py-2 mt-4 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700">
        Save
      </button>
    </div>
  );
};

export default Uncontrolled;
