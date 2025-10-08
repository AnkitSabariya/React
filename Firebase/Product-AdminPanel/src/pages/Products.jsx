import { FaStar, FaRegStar } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../../../Student-Database/src/Firebase/db";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "AllProducts"));
      const productArray = [];
      querySnapshot.forEach((doc) => {
        productArray.push({ id: doc.id, ...doc.data() });
      });
      setProducts(productArray);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading products...</p>;
  }

  if (products.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No products found.</p>;
  }

  return (
    <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((e) => (
        <div
          key={e.id}
          className="bg-white/10 backdrop-blur-md rounded-3xl shadow-md p-4 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
        >
          {/* Image */}
          <div className="relative w-full rounded-2xl overflow-hidden">
            <img
              src={e.imgUrl}
              alt={e.name}
              className="h-44 w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-2xl"></div>
            <span className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-sm text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg">
              ₹{e.price}
            </span>
          </div>

          {/* Product Info */}
          <h3 className="text-lg font-semibold text-gray-800 text-center mt-3">
            {e.name}
          </h3>
          <span className="bg-gray-200/50 text-gray-700 text-xs px-3 py-1 rounded-full mb-2">
            {e.category}
          </span>

          {/* Rating */}
          <div className="flex items-center gap-1 text-sm mt-1">
            {Array.from({ length: 5 }, (_, i) =>
              i < Math.floor(e.rating) ? (
                <FaStar key={i} className="text-yellow-400 bg-white/10 rounded-full p-[1px]" />
              ) : (
                <FaRegStar key={i} className="text-gray-300 bg-white/10 rounded-full p-[1px]" />
              )
            )}
            <span className="text-gray-700 font-medium ml-1">{e.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
