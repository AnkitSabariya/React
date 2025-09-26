import React, { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaStar,
  FaRupeeSign,
  FaPlus,
  FaBoxes,
  FaSave,
  FaSignOutAlt,
  FaBroom,
  FaBoxOpen
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AdminPanel({ products, setProduct }) {
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState(0);
  let [rating, setRating] = useState(0);
  let [dec, setDec] = useState("");
  let [imgUrl, setImgURl] = useState("");
  let [editIndex, setEditIndex] = useState(null);

  const navigate = useNavigate();

  // product Add / Update
  const handleAddOrUpdateProduct = (e) => {
    e.preventDefault();
    if (
      title.trim() === "" ||
      price < 0 ||
      rating < 0 && rating > 5 || 
      dec.trim() === "" ||
      imgUrl.trim() === ""
    )
      return alert("⚠️ Something is Invalid:");

    if (editIndex == null) {
      let newproduct = { title, price, rating, dec, imgUrl };
      let exits = products.find(
        (e) =>
          e.title.toLowerCase() === title.toLowerCase() || e.imgUrl === imgUrl
      );
      if (exits) {
        alert("title Same");
      } else {
        let addProducts = [...products, newproduct];
        setProduct(addProducts);
        localStorage.setItem("items", JSON.stringify(addProducts));
      }
    } else {
      let saveproduct = [...products];
      saveproduct[editIndex].title = title;
      saveproduct[editIndex].price = price;
      saveproduct[editIndex].rating = rating;
      saveproduct[editIndex].dec = dec;
      saveproduct[editIndex].imgUrl = imgUrl;
      setProduct(saveproduct);
      setEditIndex(null);
      localStorage.setItem("items", JSON.stringify(saveproduct));
    }

    // Empty Inputs
    setTitle("");
    setPrice(0);
    setRating(0);
    setDec("");
    setImgURl("");
  };

  // Delete Single Product
  const handleDelete = (index) => {
    let filter = products.filter((e, i) => i !== index);
    setProduct(filter);
    setEditIndex(null);
    localStorage.setItem("items", JSON.stringify(filter));
  };

  // Edit Product
  const handleEdit = (index) => {
    setTitle(products[index].title);
    setPrice(products[index].price);
    setRating(products[index].rating);
    setDec(products[index].dec);
    setImgURl(products[index].imgUrl);
    setEditIndex(index);
  };

  // ✅ Clear All Products
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all products?")) {
      setProduct([]);
      setEditIndex(null);
      localStorage.removeItem("items");
    }
  };

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("name"); 
    localStorage.removeItem("password"); 
    navigate("/login");
  };

  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6 sm:p-10">
      
      {/* ================= MAIN HEADING ================= */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-3">
          <FaBoxes className="text-indigo-600 text-4xl drop-shadow-md" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 drop-shadow-sm">
            Admin Panel
          </h1>
        </div>
        <p className="mt-2 text-gray-600 text-center text-sm sm:text-base">
          Manage your store products – add, edit, or remove with ease 🚀
        </p>

        {/* ✅ Action Buttons */}
    <div className="flex gap-4 mt-6">
  {/* Clear All */}
  <button
    onClick={handleClearAll}
    className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-lg bg-red-600 hover:bg-red-700 hover:scale-105 shadow-lg transition-transform duration-200"
  >
    <FaBroom className="text-white" /> Clear All
  </button>

  {/* Logout */}
  <button
    onClick={handleLogout}
    className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-700 hover:scale-105 shadow-lg transition-transform duration-200"
  >
    <FaSignOutAlt className="text-white" /> Logout
  </button>

  {/* Product Page */}
  <button
    onClick={() => navigate("/products")}
    className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-lg bg-green-600 hover:bg-green-700 hover:scale-105 shadow-lg transition-transform duration-200"
  >
    <FaBoxOpen className="text-white" /> Product Page
  </button>
</div>

      </div>

      {/* ================= CONTENT ================= */}
      <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
        {/* ================= FORM SECTION ================= */}
        <div className="relative p-6 sm:p-8 rounded-2xl shadow-lg bg-white/90 backdrop-blur-xl border border-gray-200 hover:scale-[1.01] transition-transform">
          <h2 className="mb-6 text-xl sm:text-2xl font-bold text-gray-800">
            {editIndex == null ? "➕ Add Product" : "✏️ Edit Product"}
          </h2>
          <form className="grid gap-4 sm:gap-6">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Product Title"
              className="p-3 text-gray-800 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              type="number"
              placeholder="Price"
              className="p-3 text-gray-800 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              type="number"
              placeholder="Rating (1-5)"
              className="p-3 text-gray-800 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <textarea
              value={dec}
              onChange={(e) => setDec(e.target.value)}
              placeholder="Description"
              className="p-3 text-gray-800 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows="3"
            ></textarea>
            <input
              value={imgUrl}
              onChange={(e) => setImgURl(e.target.value)}
              type="url"
              placeholder="Image URL"
              className="p-3 text-gray-800 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              onClick={(e) => handleAddOrUpdateProduct(e)}
              type="submit"
              className="flex items-center justify-center gap-2 px-4 py-3 text-lg font-semibold text-white rounded-xl shadow-md bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-105 hover:shadow-lg hover:from-indigo-700 hover:to-blue-700"
            >
              {editIndex == null ? (
                <>
                  <FaPlus /> Add Product
                </>
              ) : (
                <>
                  <FaSave /> Update Product
                </>
              )}
            </button>
          </form>
        </div>

        {/* ================= PRODUCT LIST SECTION ================= */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white/90 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-lg max-h-[600px] overflow-y-auto custom-scrollbar">
          <h2 className="mb-6 text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
            📦 Product List
          </h2>
          <div className="space-y-5 sm:space-y-6">
            {products.map((e, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white to-gray-50 border border-gray-200 shadow-md transition hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                  <img
                    src={e.imgUrl}
                    alt="product"
                    className="object-cover w-full sm:w-20 h-40 sm:h-20 border border-gray-200 shadow-sm rounded-xl"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {e.title}
                    </h3>
                    <p className="flex items-center justify-center sm:justify-start gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1 font-semibold text-emerald-600">
                        <FaRupeeSign /> {e.price}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-yellow-500">
                        <FaStar /> {e.rating}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-3">
                  <button
                    onClick={() => handleEdit(i)}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white hover:scale-105"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-white rounded-lg bg-rose-500 hover:bg-rose-600 hover:scale-105"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
