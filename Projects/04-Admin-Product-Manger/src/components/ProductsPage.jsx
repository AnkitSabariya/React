import { FaStar, FaRupeeSign, FaShoppingCart, FaBoxOpen } from "react-icons/fa";

export default function ProductsPage({ products }) {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <h1 className="mb-10 text-4xl font-extrabold text-center text-gray-800 drop-shadow-sm">
        ✨ Our Premium Products
      </h1>

      {products.length === 0 ? (
        // ================= EMPTY STATE =================
        <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600">
          <FaBoxOpen className="text-6xl text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">
            No Products Available
          </h2>
          <p className="mt-2 text-gray-500">
            Please check back later or add new products in the Admin Panel.
          </p>
        </div>
      ) : (
        // ================= PRODUCT GRID =================
        <div className="grid container mx-auto gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((e, i) => (
            <div
              key={i}
              className="overflow-hidden transition-all duration-500 bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 group"
            >
              {/* Product Image with overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={e.imgUrl}
                  alt="product"
                  className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:opacity-100"></div>
              </div>

              {/* Product Info */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 transition group-hover:text-indigo-600 line-clamp-1">
                  {e.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{e.dec}</p>

                {/* Price + Rating */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-lg font-bold text-indigo-600">
                    <FaRupeeSign /> {e.price}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-yellow-500">
                    <FaStar /> {e.rating}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="px-5 pb-5">
                <button className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-white transition-all rounded-xl shadow-md bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 hover:scale-[1.02] hover:shadow-lg active:scale-95">
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
