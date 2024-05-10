import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyAddedFood from "../Pages/MyAddedFood";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<NotFound></NotFound>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/all-foods",
            element: <AllFoods></AllFoods>,
        },
        {
            path: "/gallery",
            element: <Gallery></Gallery>,
        },
        {
          path: "/login",
          element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
    },
    {
      path: "/my-added-foods",
      element: <MyAddedFood></MyAddedFood>,
  },
      ]
    },
  ]);

  export default router;