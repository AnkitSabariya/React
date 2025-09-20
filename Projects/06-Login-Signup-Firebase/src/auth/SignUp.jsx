// Firebase Auth
import { app } from "../Firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const auth = getAuth(app);

const SignUp = () => {
  const [signupName, setSignupName] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, signupName, signupPassword)
    .then(()=>{
      toast.success("Account Created Successfully 🎉")
    })
    .catch((error)=>{
      toast.error(error.message)
    })
   

    setSignupName("");
    setSignupPassword("");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-pink-900 via-purple-900 to-black">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl border border-white/20">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-md h-16 w-16">
            ✨
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-2 text-3xl font-extrabold text-center text-white">
          Create Account
        </h2>
        <p className="mb-8 text-sm text-center text-gray-300">
          Sign up to start your journey
        </p>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-200">Full Name</label>
          <input
            onChange={(e) => setSignupName(e.target.value)}
            value={signupName}
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-3 text-white placeholder-gray-400 bg-white/10 border border-white/30 shadow-sm rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-200">Password</label>
          <input
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            type="password"
            minLength={6}
            placeholder="••••••••"
            className="w-full px-4 py-3 text-white placeholder-gray-400 bg-white/10 border border-white/30 shadow-sm rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 font-semibold text-white transition transform bg-gradient-to-r from-pink-500 to-purple-500 shadow-md rounded-xl hover:shadow-lg hover:scale-105"
        >
          Sign Up
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-3 text-sm text-gray-400">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Social Signup */}
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

export default SignUp;
