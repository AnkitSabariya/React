import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const savedName = localStorage.getItem("name"); // check if user is logged in
  if (!savedName) {
    return <Navigate to="/login" replace />;
  }
  return children; // logged in → show page
}
