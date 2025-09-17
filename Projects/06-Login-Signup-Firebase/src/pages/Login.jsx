import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const savedName =localStorage.getItem("name");
  const savedPassword = localStorage.getItem("password");

  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginName.trim() === "" || loginPassword.trim() === "") {
      alert("Please enter both fields");
      return;
    }
    if (savedName === loginName && savedPassword === loginPassword) {
      alert("Login Successfully");
     
    } else {
      alert("Invalid Input");
    }
    setLoginName("");
    setLoginPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl border border-white/20">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-md h-16 w-16">
            🔐
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-2 text-3xl font-extrabold text-center text-white">
          Welcome Back
        </h2>
        <p className="mb-8 text-sm text-center text-gray-300">
          Sign in to continue to your account
        </p>

        {/* Username */}
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-200">Name</label>
          <input
            value={loginName}
            onChange={(e) => setLoginName(e.target.value)}
            type="text"
            placeholder="Enter your Name"
            className="w-full px-4 py-3 text-white placeholder-gray-400 bg-white/10 border border-white/30 shadow-sm rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-200">Password</label>
          <input
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 text-white placeholder-gray-400 bg-white/10 border border-white/30 shadow-sm rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleLogin}
            className="w-1/2 py-3 font-semibold text-white transition bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md rounded-xl hover:shadow-lg hover:scale-105"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="w-1/2 py-3 font-semibold text-gray-900 transition bg-white shadow-md rounded-xl hover:bg-gray-100 hover:scale-105"
          >
            Sign Up
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-3 text-sm text-gray-400">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

       {/* Social Login */}
<div className="flex flex-col gap-3">
  <div className="flex gap-3">
    <button className="flex items-center justify-center w-1/2 gap-2 py-3 text-white bg-white/10 border border-white/30 rounded-xl hover:bg-white/20 hover:shadow-md">
      <img
        src="https://www.svgrepo.com/show/355037/google.svg"
        alt="Google"
        className="w-5 h-5"
      />
      Google
    </button>
    <button className="flex items-center justify-center w-1/2 gap-2 py-3 text-white bg-white/10 border border-white/30 rounded-xl hover:bg-white/20 hover:shadow-md">
      <img
        src="https://www.svgrepo.com/show/475647/facebook-color.svg"
        alt="Facebook"
        className="w-5 h-5"
      />
      Facebook
    </button>
  </div>

  {/* GitHub login */}
  <button className="flex items-center justify-center gap-2 py-3 text-white bg-white/10 border border-white/30 rounded-xl hover:bg-white/20 hover:shadow-md">
    <img
      src="https://www.svgrepo.com/show/475654/github-color.svg"
      alt="GitHub"
      className="w-5 h-5"
    />
    GitHub
  </button>
</div>

      </div>
    </div>
  );
};

export default Login;
