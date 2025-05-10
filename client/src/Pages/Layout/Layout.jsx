import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Navbar from "./../../Components/Navbar/Navbar"
import Footer from "./../../Components/Footer/Footer"

const Layout = () => {
  return (
    <>
    
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
</>
  )
}

export default Layout