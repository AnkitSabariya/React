import { FaPlus } from "react-icons/fa";
import "../App.css"; // Floating label CSS
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/FireStore";
import { toast } from "react-toastify";
const AddProductForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    price: "",
    imgUrl: "",
    des: "",
    rating: "",
    category: "",
  });
  const { name, price, imgUrl, des, rating, category } = form;

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      price === "" ||
      price === null ||
      rating === "" ||
      rating === null ||
      imgUrl.trim() === "" ||
      category.trim() === "" ||
      des.trim() === ""
    ) {
      toast.error("Please Fill All Fields Correctly");
      return;
    }

    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, "AllProducts"), {
        name,
        price,
        imgUrl,
        des,
        rating,
        category,
      });
      console.log("Document written with ID: ", docRef.id);
      toast.success("Product Add ID: " + docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setLoading(false);
      setForm({
        name: "",
        price: "",
        imgUrl: "",
        des: "",
        rating: "",
        category: "",
      });
    }
  };
  return (
    <div className="flex justify-center items-center   p-6">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-3xl p-10">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
            <FaPlus className="text-blue-600" /> Add New Product
          </h2>
          <p className="text-gray-500 mt-2">
            Fill in the product details below to add a new product.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6" onSubmit={handleAddProduct}>
          {/* Product Name & Price */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 input-group">
              <input
                value={name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                placeholder=" "
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              />
              <label className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all">
                Product Name
              </label>
            </div>

            <div className="relative flex-1 input-group">
              <input
                value={price}
                onChange={(e) =>
                  setForm({ ...form, price: Number(e.target.value) })
                }
                type="number"
                placeholder=" "
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              />
              <label className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all">
                Price (₹)
              </label>
            </div>
          </div>

          {/* Image URL */}
          <div className="relative input-group">
            <input
              value={imgUrl}
              onChange={(e) => setForm({ ...form, imgUrl: e.target.value })}
              type="text"
              placeholder=" "
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
            />
            <label className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all">
              Image URL
            </label>
          </div>

          {/* Description */}
          <div className="relative input-group">
            <textarea
              value={des}
              onChange={(e) => setForm({ ...form, des: e.target.value })}
              placeholder=" "
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24 peer"
            />
            <label className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all">
              Description
            </label>
          </div>

          {/* Rating & Category in one row */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Rating Slider */}
            <div className="relative flex-1 mt-8">
              <input
                value={rating}
                onChange={(e) =>
                  setForm({ ...form, rating: Number(e.target.value) })
                }
                type="range"
                min="0"
                max="5"
                step="0.1"
                className="w-full h-4 rounded-full bg-gray-200 accent-blue-600 cursor-pointer"
                style={{ height: "15px" }} // Thoda chhota aur sleek
              />
              {/* Selected value */}
              <span className="absolute right-0 -top-6 text-blue-600 font-bold text-sm">
                {rating}
              </span>
              {/* Floating label */}
              <label className="absolute left-0 -top-6 text-gray-500 font-medium text-sm">
                Rating (0-5)
              </label>
            </div>

            {/* Category Input */}
            <div className="relative flex-1 input-group">
              <input
                value={category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                type="text"
                placeholder=" "
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              />
              <label className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all">
                Category
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl text-lg transition-colors mt-4">
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
