import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../Firebase.config";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged
} from "firebase/auth";
import { toast } from "react-toastify";
import ButtonLoader from "../components/ButtonLoader";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const provider2 = new GithubAuthProvider();

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState("continue to your account");

  // loading states
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingGithub, setLoadingGithub] = useState(false);
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/", { replace: true }); // 👈 already logged in → redirect
    }
  });
  return () => unsubscribe();
}, [ navigate]);

  const handleLogin = async () => {
    setLoadingEmail(true);
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setUser(result.user.email);
      toast.success("Login Successful 🎉");
      navigate("/"); 
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoadingEmail(false);
      setLoginEmail("");
      setLoginPassword("");
    }
  };

  const handleWithGoogle = async () => {
    setLoadingGoogle(true);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user.email);
      console.log(result.user.email);
      toast.success("Google Login Successful 🎉");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoadingGoogle(false);
    }
  };
  const handleWithGithub = async () => {
    setLoadingGithub(true)
    try {
      const result = await signInWithPopup(auth, provider2);
      setUser(result.user.message);
      console.log(result.user);
      
      toast.success("Github Login Successful 🎉");
    } catch (error) {
      toast.error(error.message);
    }
    finally{
      setLoadingGithub(false)
    }
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
          Sign in to {user}
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-200">Email</label>
          <input
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            type="email"
            placeholder="Enter your Email"
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
        <div className="flex gap-4 mb-6">
          <button
            disabled={loadingEmail}
            onClick={handleLogin}
            className="w-1/2 py-3 font-semibold text-white transition bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md rounded-xl hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ButtonLoader loading={loadingEmail} spinnerText="Logging in...">
              Login
            </ButtonLoader>
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
            <button
              onClick={handleWithGoogle}
              disabled={loadingGoogle}
              className="flex items-center justify-center w-1/2 gap-2 py-3 text-white bg-white/10 border border-white/30 rounded-xl hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ButtonLoader loading={loadingGoogle} spinnerText="Signing in...">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Google
              </ButtonLoader>
            </button>

            <button
              onClick={handleWithGithub}
              className="flex items-center justify-center w-1/2 gap-2 py-3 text-white bg-white/10 border border-white/30 rounded-xl hover:bg-white/20 hover:shadow-md"
            >
              <ButtonLoader loading={loadingGithub} spinnerText="Signing in...">
                <img
                  src="https://www.svgrepo.com/show/475654/github-color.svg"
                  alt="GitHub"
                  className="w-5 h-5"
                />
                GitHub
              </ButtonLoader>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
