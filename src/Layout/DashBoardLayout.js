import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Footer from "../Shared/Footer/Footer";

import Header from "../Shared/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  //const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <div className="shadow sticky top-0 z-10">
        <Header></Header>
      </div>

      <div className="drawer drawer-mobile w-[1250px] mx-auto">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content px-4 py-12">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-primary">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu px-4 py-10 w-64  text-base-content ">
            <li className="p-0 ">
              <Link to="/dashboard" className="p-0 -z-0">
                <button className=" btn  w-full font-3xl font-bold text-center bg-accent duration-200 hover:bg-white  text-white hover:text-accent">
                  My Orders
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
