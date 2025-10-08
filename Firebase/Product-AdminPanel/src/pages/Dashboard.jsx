import { FaBox, FaPlus, FaEdit, FaTrash, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    image: "https://via.placeholder.com/80",
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    image: "https://via.placeholder.com/80",
    category: "Wearables",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1299,
    image: "https://via.placeholder.com/80",
    category: "Accessories",
    rating: 4.8,
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-8 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          Dashboard <FaBox className="text-blue-600" />
        </h1>
        <Link
          to="/add-product"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl flex items-center gap-2 transition-all transform hover:scale-105"
        >
          <FaPlus /> Add Product
        </Link>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-5 flex justify-between items-center border border-gray-200">
          <div className="text-gray-600 font-medium">Products</div>
          <div className="text-blue-600 font-bold text-xl">{products.length}</div>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-5 flex justify-between items-center border border-gray-200">
          <div className="text-gray-600 font-medium">Users</div>
          <div className="text-green-600 font-bold text-xl">54</div>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-5 flex justify-between items-center border border-gray-200">
          <div className="text-gray-600 font-medium">Sales</div>
          <div className="text-purple-600 font-bold text-xl">₹45,000</div>
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-2xl border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700 w-12">#</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700 w-60">Product</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700 w-36">Category</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700 w-32">Price (₹)</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700 w-40">Rating</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700 w-40 text-center">Actions</th>
            </tr>
          </thead>
  <tbody className="divide-y divide-gray-200">
  {products.map((product, i) => (
    <tr
      key={product.id}
      className="hover:bg-blue-50 transition-colors duration-200"
    >
      <td className="px-6 py-4 text-gray-700">{i + 1}</td>
      <td className="px-6 py-4 flex items-center gap-3">
        <img
          src={product.image}
          alt={product.name}
          className="h-12 w-12 object-cover rounded-lg"
        />
        <span className="text-gray-800 font-medium">{product.name}</span>
      </td>
      <td className="px-6 py-4 text-gray-600">{product.category}</td>
      <td className="px-6 py-4 text-gray-700 font-semibold">₹{product.price}</td>
      <td className="px-6 py-4 flex items-center gap-1">
        {Array.from({ length: 5 }, (_, idx) => (
          <FaStar
            key={idx}
            className={`text-sm ${
              idx < Math.round(product.rating)
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-gray-600 font-medium">{product.rating}</span>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="flex justify-center gap-2">
          <button className="bg-yellow-400 hover:bg-yellow-500 hover:scale-105 transform transition-all text-white p-2 rounded-lg shadow-md">
            <FaEdit />
          </button>
          <button className="bg-red-500 hover:bg-red-600 hover:scale-105 transform transition-all text-white p-2 rounded-lg shadow-md">
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default Dashboard;
