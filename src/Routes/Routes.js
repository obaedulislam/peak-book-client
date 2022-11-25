import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import SingleBookCategory from "../Pages/Home/BookCategroies/SingleBookCategory";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

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
          fetch(`http://localhost:4500/category/${params.id}`),
      },
    ],
  },
]);

export default router;
