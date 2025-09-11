import React, { useState } from "react";
import { FaEdit, FaTrash, FaStar, FaRupeeSign, FaPlus } from "react-icons/fa";

export default function AdminPanel({products,setProduct}) {
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState(0);
  let [rating, setRating] = useState(0);
  let [dec, setDec] = useState("");
  let [imgUrl, setImgURl] = useState("");

 
  // product Add
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (
      title.trim() === "" ||
      price < 0 ||
      rating < 0 ||
      dec.trim() === "" ||
      imgUrl.trim() === ""
    )
      return alert("Something is Invalid");
    let newproduct = { title, price, rating, dec, imgUrl };
    // let exits = products.find((e) => e.title === title || e.imgUrl === imgUrl);
    // if (exits) {
    //   alert("title Same");
    // } else {
      let updatedProducts = [...products, newproduct]; // Because delay 1 product problem first state update with latest value then state
      setProduct(updatedProducts);
      localStorage.setItem("items", JSON.stringify(updatedProducts));
    // }

    // Empty Inputs
    setTitle("");
    setPrice(0);
    setRating(0);
    setDec("");
    setImgURl("");
  };
  // Deleate Product
const handleDelete = (index) =>{
let filter = products.filter((e,i)=> i != index)
setProduct(filter)
localStorage.setItem("items", JSON.stringify(filter));

}
// console.log(pro);

  return (
    <div className="min-h-screen p-10 overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="grid gap-10 md:grid-cols-2">
        {/* ================= FORM SECTION ================= */}
        <div className="relative p-8 rounded-2xl shadow-lg bg-white/80 backdrop-blur-xl border border-gray-200 hover:scale-[1.01] transition-transform">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Add / Edit Product
          </h2>
          <form className="grid gap-6">
            {/* Input */}
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Product Title"
              className="p-3 text-gray-800 placeholder-gray-400 transition border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="Price"
              className="p-3 text-gray-800 placeholder-gray-400 transition border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              type="number"
              placeholder="Rating (1-5)"
              className="p-3 text-gray-800 placeholder-gray-400 transition border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <textarea
              value={dec}
              onChange={(e) => setDec(e.target.value)}
              placeholder="Description"
              className="p-3 text-gray-800 placeholder-gray-400 transition border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows="3"
            ></textarea>
            <input
              value={imgUrl}
              onChange={(e) => setImgURl(e.target.value)}
              type="url"
              placeholder="Image URL"
              className="p-3 text-gray-800 placeholder-gray-400 transition border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Button */}
            <button
              onClick={(e) => handleAddProduct(e)}
              type="submit"
              className="flex items-center justify-center gap-2 px-5 py-3 text-lg font-semibold text-white transition-all shadow-md rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-105 hover:shadow-lg hover:from-indigo-700 hover:to-blue-700"
            >
              <FaPlus /> Add Product
            </button>
          </form>
        </div>

        {/* ================= PRODUCT LIST SECTION ================= */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Product List
          </h2>
          <div className="space-y-6">
            {products.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center justify-between p-5 rounded-2xl bg-white/90 backdrop-blur-lg border border-gray-200 shadow-md transition hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={e.imgUrl}
                      alt="product"
                      className="object-cover w-20 h-20 border border-gray-200 shadow-sm rounded-xl"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {e.title}
                      </h3>
                      <p className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1 font-semibold text-emerald-600">
                          <FaRupeeSign />
                          {e.price}
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-yellow-500">
                          <FaStar /> {e.rating}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 transition border border-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white hover:scale-105">
                      <FaEdit /> Edit
                    </button>
                    <button onClick={()=> handleDelete(i)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition rounded-lg bg-rose-500 hover:bg-rose-600 hover:scale-105">
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
              );
            })}
            {/* Dummy Product Card */}
          </div>
        </div>
      </div>
    </div>
  );
}