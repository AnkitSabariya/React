// Firebase Auth
import { app } from "../Firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonLoader from "../components/ButtonLoader";

const auth = getAuth(app);
const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [signupName, setSignupName] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        signupName,
        signupPassword
      );
      toast.success(`Account Created Successfully ${result.user.email} 🎉`);
      setTimeout(() => {
      navigate("/login");
      }, 1500);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false)
      setSignupName("");
      setSignupPassword("");
    }
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
        disabled={loading}
          onClick={handleSubmit}
          className="w-full py-3 font-semibold text-white transition transform bg-gradient-to-r from-pink-500 to-purple-500 shadow-md rounded-xl hover:shadow-lg hover:scale-105"
        >
          <ButtonLoader loading={loading} spinnerText="Sign up..."> Sign Up </ButtonLoader>
        </button>

      

       
      </div>
    </div>
  );
};

export default SignUp;
