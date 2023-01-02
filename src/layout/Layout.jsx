import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="min-h-[calc(100vh-10.5rem)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
