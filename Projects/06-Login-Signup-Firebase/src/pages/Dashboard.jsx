import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined); // undefined = checking

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged in:", user.email);
  
        setCurrentUser(user);
      } else {
        console.log("Not logged in");
        setCurrentUser(null);
        navigate("/login", { replace: true }); // only after state updated
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully 👋");
      navigate("/login", { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (currentUser === undefined) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );
  }

  if (currentUser === null) {
    // Optional safeguard: avoid rendering Dashboard while redirecting
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      <div className="p-8 bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl border border-white/20 w-full max-w-2xl text-center">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome to Dashboard 🎉
        </h1>
        <p className="text-gray-300 mb-8">
          You are logged in as <span className="font-bold">{currentUser.email}</span>
        </p>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-xl hover:scale-105 shadow-md transition transform"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
