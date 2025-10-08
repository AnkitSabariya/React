import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBox, FaPlus } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const active = (path) =>
    location.pathname === path
      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
      : "text-gray-700 hover:bg-blue-100";

  return (
    <aside className="hidden md:block w-64 min-h-screen bg-white/70 backdrop-blur-lg border-r border-gray-200 shadow-md">
      <div className="p-5 font-bold text-gray-800 text-xl border-b">Menu</div>
      <ul className="p-3 space-y-2">
        <li>
          <Link
            to="/"
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${active("/")}`}
          >
            <FaHome /> Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${active("/products")}`}
          >
            <FaBox /> Products
          </Link>
        </li>
        <li>
          <Link
            to="/add-product"
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${active("/add-product")}`}
          >
            <FaPlus /> Add Product
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
