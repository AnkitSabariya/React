import React from "react";
import AdminPanel from "./components/AdminPanel";
import ProductsPage from "./components/ProductsPage";

export default function App() {
  return (
    <div className="space-y-10">
      <AdminPanel />
      <h2 className="mt-6 text-2xl font-bold text-center">Product Page</h2>
      <ProductsPage />
    </div>
  );
}
