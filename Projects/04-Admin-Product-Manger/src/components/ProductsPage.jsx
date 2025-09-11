
import { FaStar, FaRupeeSign } from "react-icons/fa";

export default function ProductsPage({products}) {


 

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <h1 className=" mb-8 container mx-auto text-3xl font-bold text-gray-800">Our Products</h1>
      <div className="grid container mx-auto gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((e, i) => {
          return (
            <div
              key={i}
              className="overflow-hidden transition-transform duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-2"
            >
              {/* Product Image */}
              <img
                src={e.imgUrl}
                alt="product"
                className="object-cover w-full transition-transform duration-500 h-52 hover:scale-105"
              />

              {/* Product Info */}
              <div className="p-5">
                <h3 className="mb-1 text-lg font-semibold text-gray-800 transition hover:text-indigo-600">
                  {e.title}
                </h3>
                <p className="mb-3 text-sm text-gray-600 line-clamp-2">
                  {e.dec}
                </p>

                {/* Price + Rating */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 font-semibold text-indigo-600">
                    <FaRupeeSign /> {e.price}
                  </span>
                  <span className="flex items-center gap-1 text-yellow-500">
                    <FaStar /> {e.rating}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="px-5 pb-5">
                <button className="w-full px-4 py-2 text-sm font-medium text-white transition rounded-lg shadow-md bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 hover:shadow-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
        {/* Dummy Product Card */}
      </div>
    </div>
  );
}
