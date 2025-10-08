import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm flex justify-between items-center p-[18px]">
      <h1 className="text-2xl font-bold text-gray-800 tracking-tight hover:tracking-wide transition-all">
        Admin Dashboard
      </h1>
      <FaUserCircle
        size={30}
        className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200"
      />
    </nav>
  );
};

export default Navbar;
