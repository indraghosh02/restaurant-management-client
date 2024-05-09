import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import NotFound from "../Pages/NotFound";

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
      ]
    },
  ]);

  export default router;