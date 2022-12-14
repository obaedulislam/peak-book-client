import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import "./Header.css";
import logo from "../../assets/logo.png";
import { BiLogInCircle } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard" className="flex items-center">
              <AiFillDashboard className="md:text-2xl text-lg text-primary "></AiFillDashboard>
              <span className="ml-1">Dashboard</span>
            </Link>
          </li>
          <li className="font-semibold p-0 m-0 user-photo ">
            <Link>
              {user?.photoURL ? (
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL}
                  alt={user.displayName}
                  title={user.displayName}
                />
              ) : (
                <FaUserCircle
                  className="text-3xl"
                  title={user?.displayName}
                ></FaUserCircle>
              )}
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button
                className=" bg-primary duration-300 hover:bg-secondary rounded  sm:px-4 px-2 md:mt-0 mt-2 py-1 md:text-lg sm:text-md text-xs text-white flex items-center"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="md:text-xl text-lg "></FaSignOutAlt>
                <span className=" uppercase ml-1">Sign Out</span>
              </button>
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">
            <button
              className=" bg-primary duration-300 hover:bg-secondary rounded  sm:px-4 px-2 md:mt-0 mt-2 py-1 md:text-lg sm:text-md text-xs text-white flex items-center"
              onClick={handleLogout}
              to="/login"
            >
              <BiLogInCircle className="md:text-2xl text-lg "></BiLogInCircle>
              <span className=" uppercase ml-1">Login</span>
            </button>
          </Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div className="bg-white">
      <div className="max-w-[1250px] mx-auto">
        <div className="navbar flex justify-between bg-base-100">
          <div className="">
            <div className="dropdown flex ">
              <ul
                tabIndex={0}
                className="menu-compact dropdown-content mt-8 p-2 shadow bg-base-100 rounded-box w-52 text-md font-bold font-specially uppercase"
              >
                {menuItems}
              </ul>
              <label tabIndex={0} className=" lg:hidden md:hidden">
                <HiMenuAlt1 className="text-3xl bg-accent text-white font-bold p-1  rounded"></HiMenuAlt1>
              </label>
            </div>

            {/* Logo Insert Here */}
            <div className="md:ml-0 ml-5">
              <Link to="/" className="  flex items-center">
                <img
                  className="md:w-12 md:h-16 sm:w-10 sm:h-12 w-8 h-10"
                  src={logo}
                  alt="Peak Book"
                />
                <h1 className="ml-2 uppercase lg:text-3xl md:text-2xl sm:text-xl text-lg font-extrabold text-primary ">
                  Peak <span className="text-accent">Book</span>
                </h1>
              </Link>
            </div>
          </div>
          <div className=" hidden lg:flex md:flex">
            <ul className="lg-menu menu-horizontal flex items-center uppercase p-0 font-specially text-lg font-semibold">
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
