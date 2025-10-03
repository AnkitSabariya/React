import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import Navbar from "./components/Navbar";
import EditUser from "./pages/EditUser";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edit/:userid" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
