import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    {/* Parent layout visible on every page  */}
    <Navbar/> {/* Always fixed at top */}
    <Outlet />   {/* Placeholder (slot) Child page content goes here */}
    <Footer/> {/* Always fixed at bottom */}
    </>
  )
}

export default Layout