import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";

import Footer from "../Shared/Footer/Footer";

import Header from "../Shared/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  console.log(isAdmin);

  return (
    <div>
      <div className="shadow sticky top-0 z-50">
        <Header></Header>
      </div>

      <div className="grid grid-cols-12 lg:max-w-[97%] max-w-[100%]">
        <div className="bg-primary lg:col-span-2 md:col-span-3 col-span-12 flex justify-center">
          <ul className="  lg:py-10 md:py-8 py-5 md:space-x-0 space-x-3  text-base-content md:block flex justify-between">
            {isBuyer && (
              <li className="p-0 ">
                <Link to="/dashboard/myorders" className="p-0 ">
                  <button className="   w-full py-2 px-2 rounded-lg  md:text-lg sm:text-sm text-xs font-bold text-center hover:bg-secondary duration-200 bg-white  text-black">
                    My Orders
                  </button>
                </Link>
              </li>
            )}

            {/* Seller Route Protection Start*/}
            {isSeller && (
              <>
                <li className="p-0 md:mt-0 mt-3">
                  <Link to="/dashboard/addaproduct" className="p-0 ">
                    <button className="   w-full py-2 px-2 rounded-lg  md:text-lg sm:text-sm text-xs font-bold text-center hover:bg-secondary duration-200 bg-white  text-black">
                      Add A Product
                    </button>
                  </Link>
                </li>

                <li className="p-0 mt-3">
                  <Link to={`/dashboard/myproducts`} className="p-0 ">
                    <button className="   w-full py-2 px-2 rounded-lg  md:text-lg sm:text-sm text-xs font-bold text-center hover:bg-secondary duration-200 bg-white  text-black">
                      My Products
                    </button>
                  </Link>
                </li>
                <li className="p-0 mt-3">
                  <Link to={`/dashboard/mybuyers`} className="p-0 ">
                    <button className="   w-full py-2 px-2 rounded-lg  md:text-lg sm:text-sm text-xs font-bold text-center hover:bg-secondary duration-200 bg-white  text-black">
                      My Buyers
                    </button>
                  </Link>
                </li>
              </>
            )}

            {/* Seller Route Protection Start*/}

            {/* All Admin Protected Route */}
            {isAdmin && (
              <>
                <li className="p-0  ">
                  <Link to="/dashboard/allusers" className="p-0 ">
                    <button className="   w-full py-2 px-3 rounded-lg  md:text-lg sm:text-sm text-xs font-bold text-center hover:bg-secondary duration-200 bg-white  text-black">
                      All Users
                    </button>
                  </Link>
                </li>

                <li className="p-0 mt-3">
                  <Link to="/dashboard/allsellers" className="p-0 ">
                    <button className="   w-full py-2 px-3 rounded-lg  md:text-lg sm:text-sm text-xs font-bold text-center hover:bg-secondary duration-200 bg-white  text-black">
                      All Sellers
                    </button>
                  </Link>
                </li>

                <li className="p-0 mt-3">
                  <Link to="/dashboard/allbuyers" className="p-0 ">
                    <button className="   w-full py-2 px-3 rounded-lg  md:text-lg sm:text-sm text-xs font-bold text-center hover:bg-secondary duration-200 bg-white  text-black">
                      All Buyers
                    </button>
                  </Link>
                </li>

                <li className="p-0 mt-3">
                  <Link to="/dashboard/reporteditems" className="p-0 ">
                    <button className="   w-full py-2 px-3 rounded-lg  md:text-lg sm:text-sm text-xs font-bold text-center hover:bg-secondary duration-200 bg-white  text-black">
                      Reported Items
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="md:px-5 px-4 md:py-12 ms:py-8 py-5 lg:col-span-10 md:col-span-9 col-span-12">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
