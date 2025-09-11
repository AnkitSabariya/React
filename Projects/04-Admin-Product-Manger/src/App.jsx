import React from "react";
import AdminPanel from "./components/AdminPanel";
import ProductsPage from "./components/ProductsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
export default function App() {
  const [products, setProduct] = useState(JSON.parse(localStorage.getItem("items")) || []);
  // optional
   // useEffect(() => {
  //   let items = JSON.parse(localStorage.getItem("items")) || [];
  // }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductsPage products={products} />,
    },
    {
      path: "/admin",
      element: <AdminPanel products={products} setProduct={setProduct} />,
    },
  ]);
  return (
    <div className="space-y-10">
      <h2 className="mt-6 text-2xl font-bold text-center">Product Page</h2>
      <RouterProvider router={router}/>
  

    </div>
  );
}
