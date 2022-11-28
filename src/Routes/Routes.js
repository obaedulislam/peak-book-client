import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProducts from "../Pages/DashBoard/AddAProduct/AddProducts";
import AllBuyers from "../Pages/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/DashBoard/AllSelers/AllSellers";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import MyOrders from "../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../Pages/DashBoard/My Products/MyProducts";
import SingleBookCategory from "../Pages/Home/BookCategroies/SingleBookCategory";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AdminRoutes from "./AdminRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BuyerRoutes from "./BuyerRoutes";
import SellerRoutes from "./SellerRoutes";
import MyBuyers from "../Pages/DashBoard/MyBuyers/MyBuyers";
import ReportedItems from "../Pages/DashBoard/ReportedItems/ReportedItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "category/:id",
        element: <SingleBookCategory></SingleBookCategory>,
        loader: ({ params }) =>
          fetch(`https://peakbook-server.vercel.app/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/myorders",
        element: (
          <BuyerRoutes>
            <MyOrders></MyOrders>
          </BuyerRoutes>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoutes>
            <MyProducts></MyProducts>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/mybuyers",
        element: (
          <SellerRoutes>
            <MyBuyers></MyBuyers>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/addaproduct",
        element: (
          <SellerRoutes>
            <AddProducts></AddProducts>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoutes>
            <AllSellers></AllSellers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoutes>
            <AllBuyers></AllBuyers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/reporteditems",
        element: (
          <AdminRoutes>
            <ReportedItems></ReportedItems>
          </AdminRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
