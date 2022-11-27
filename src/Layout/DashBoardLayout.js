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
      <div className="shadow sticky top-0 z-50">
        <Header></Header>
      </div>

      <div className="drawer drawer-mobile w-[1250px] mx-auto">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content pl-5 py-12">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-primary">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu px-4 py-10 w-64  text-base-content ">
            <li className="p-0 ">
              <Link to="/dashboard" className="p-0 ">
                <button className="   w-full py-2 px-2 rounded-lg font-3xl font-bold text-center hover:bg-secondary duration-200 bg-white  text-black">
                  My Orders
                </button>
              </Link>
            </li>

            <li className="p-0 mt-3">
              <Link to="/dashboard/addaproduct" className="p-0 ">
                <button className="   w-full py-2 px-2 rounded-lg font-3xl font-bold text-center hover:bg-secondary duration-200 bg-white  text-black">
                  Add A Product
                </button>
              </Link>
            </li>

            <li className="p-0 mt-3">
              <Link to="/dashboard/allusers" className="p-0 ">
                <button className="   w-full py-2 px-2 rounded-lg font-3xl font-bold text-center hover:bg-secondary duration-200 bg-white  text-black">
                  All Users
                </button>
              </Link>
            </li>

            <li className="p-0 mt-3">
              <Link to="/dashboard/allsellers" className="p-0 ">
                <button className="   w-full py-2 px-2 rounded-lg font-3xl font-bold text-center hover:bg-secondary duration-200 bg-white  text-black">
                  All Sellers
                </button>
              </Link>
            </li>

            <li className="p-0 mt-3">
              <Link to="/dashboard/allbuyers" className="p-0 ">
                <button className="   w-full py-2 px-2 rounded-lg font-3xl font-bold text-center hover:bg-secondary duration-200 bg-white  text-black">
                  All Buyers
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
