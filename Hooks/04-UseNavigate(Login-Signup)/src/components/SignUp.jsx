import { useState } from "react";
const SignUp = () => {
  const [signupName, setSignupName] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const handleSubmit = () => {
   if (signupName.trim() !== "" && signupPassword.trim() !== "") {
      alert("Account Create Succefully...");
      localStorage.setItem("name", JSON.stringify(signupName));
      localStorage.setItem("password", JSON.stringify(signupPassword));
      setSignupName("");
      setSignupPassword("");
    } else {
      alert("Invalid Input");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-900 via-indigo-900 to-black">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="p-8 transition duration-500 transform bg-white shadow-2xl rounded-2xl md:p-10 hover:scale-105 hover:shadow-indigo-500/30">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center text-lg font-bold text-white bg-pink-500 rounded-full shadow-md h-14 w-14">
              ✨
            </div>
          </div>

          {/* Title */}
          <h2 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            Create Account
          </h2>
          <p className="mb-8 text-sm text-center text-gray-500">
            Sign up to get started with your journey
          </p>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-700">
              Full Name
            </label>
            <input
              onChange={(e) => setSignupName(e.target.value)}
              value={signupName}
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 text-gray-700 border border-gray-300 shadow-sm rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-700">Password</label>
            <input
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 text-gray-700 border border-gray-300 shadow-sm rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          {/* Sign Up Button */}
       
          <button
            onClick={handleSubmit}
            className="w-full py-3 font-semibold text-white transition transform bg-pink-500 shadow-md rounded-xl hover:bg-pink-600 hover:-translate-y-1 hover:shadow-lg"
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-sm text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Signup */}
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

export default SignUp;
