import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <div className="shadow sticky top-0 z-50 bg-white">
        <Header></Header>
      </div>
      <div className="max-w-[1250px] mx-auto">
        <Outlet></Outlet>
        <ScrollRestoration />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
