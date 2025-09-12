import React from "react";
import AdminPanel from "./components/AdminPanel";
import ProductsPage from "./components/ProductsPage";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { useState } from "react";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import ProtectedRoute from "./auth/ProtectedRoute";
export default function App() {
  const [products, setProduct] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const [isLogine, setIsLogin] = useState(false);
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
      element: (
        <ProtectedRoute isLogine={isLogine}>
          <AdminPanel products={products} setProduct={setProduct} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login setIsLogin={setIsLogin} />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <div className="space-y-10">
      <RouterProvider router={router} />
    </div>
  );
}
