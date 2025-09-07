import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import User from "./components/user";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Github, { githubInfoLoader } from "./components/Github";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router";
import Layout from "./Layout";
import NotFound from "./NotFound";
import ErrorPage from "./ErrorPage";
// Advance pending Chai aur Code React Routing 43:00
const App = () => {
  //  RouterProvider is required to enable routing in your app.
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, //Navbar + Footer + <Outlet />
       errorElement: <ErrorPage />, // <— global for all children you can add in child
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/user/:id",
          element: <User />,
        },
        {
          loader: githubInfoLoader,
          path: "/github",
          element: <Github />,
        },
        {
          path: "*", // catch-all for any unmatched route
          element: <NotFound/>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* Old Method Esay but can't Use loder and etc */}
      {/* <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={ <User/>} />
          <Route loader={githubInfoLoader} path="/github" element={ <Github/>} /> // Show error
        </Routes>
      <Footer />
      </BrowserRouter> */}
    </>
  );
};

export default App;
