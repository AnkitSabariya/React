// src/pages/User.jsx
import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
// http://localhost:5173/user/ankit
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-[#2563EB] mb-4">User Details</h1>
        <p className="text-gray-700">
          <span className="font-semibold">User ID : {id}</span> 
        </p>
        {/* You can add more dynamic info here later */}
        <p className="mt-2 text-sm text-gray-500">This is a dynamic route example.</p>
      </div>
    </div>
  );
};

export default User;
