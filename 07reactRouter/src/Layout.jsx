import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom"; // outlet ley layout ma vako header ra footer lae same rakhxa
// ane outlet lekheko thauma  dynamically change gardinxa

function Layout() {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
