import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = ({setIsLogin}) => {
  // local Storage
  const savedName = JSON.parse(localStorage.getItem("name"));
  const savedPassword = JSON.parse(localStorage.getItem("password"));
  // Hooks
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate()
  const handleLogin = () => {
    if (loginName.trim() === "" || loginPassword.trim() === "") {
      alert("Please enter both fields");
      return;
    }

    if (savedName === loginName && savedPassword === loginPassword) {
      alert("Login Successfully");
      navigate("/admin")
      setIsLogin(true)
    } else {
      alert("Invalid Input");
    }
    setLoginName("");
    setLoginPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-900 via-indigo-900 to-black">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="p-8 transition duration-500 transform bg-white shadow-2xl rounded-2xl md:p-10 hover:scale-105 hover:shadow-indigo-500/30">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center text-lg font-bold text-white bg-indigo-600 rounded-full shadow-md h-14 w-14">
              🔒
            </div>
          </div>

          {/* Title */}
          <h2 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            Welcome Back
          </h2>
          <p className="mb-8 text-sm text-center text-gray-500">
            Sign in to continue to your account
          </p>

          {/* Username */}
          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-700">Name</label>
            <input
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
              type="Name"
              placeholder="Enter your Name"
              className="w-full px-4 py-3 text-gray-700 border border-gray-300 shadow-sm rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-700">Password</label>
            <input
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 text-gray-700 border border-gray-300 shadow-sm rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Buttons: Login + Signup side by side */}
          <div className="flex gap-4">
            <button
              onClick={handleLogin}
              className="w-1/2 py-3 font-semibold text-white transition transform bg-indigo-600 shadow-md rounded-xl hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-lg"
            >
              Login
            </button>
            <button onClick={()=> navigate("/signup")} className="w-1/2 py-3 font-semibold text-indigo-600 transition transform bg-gray-100 border border-gray-300 shadow-sm rounded-xl hover:bg-gray-200 hover:-translate-y-1 hover:shadow-md">
              Sign Up
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-sm text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex gap-3">
            <button className="flex items-center justify-center w-1/2 gap-2 py-3 text-gray-700 transition border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Google
            </button>
            <button className="flex items-center justify-center w-1/2 gap-2 py-3 text-gray-700 transition border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
