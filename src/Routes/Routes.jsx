import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyAddedFood from "../Pages/MyAddedFood";
import AddFoodItem from "../Pages/AddFoodItem";
import SingleFoodPage from "../Pages/SingleFoodPage";
import UpdateFood from "../Pages/UpdateFood";
import PrivateRoute from "../Components/PrivateRoute";

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
            element:<AllFoods></AllFoods>,
            loader: () => fetch('http://localhost:5000/food')
        },
         {
         path: "/single-food/:id", 
          element: <SingleFoodPage></SingleFoodPage>, 
          loader: ({ params }) =>  fetch(`http://localhost:5000/food/${params.id}`)
             
           },
        {
            path: "/gallery",
            element:  <Gallery></Gallery>,
            loader: () => fetch('http://localhost:5000/image')
          
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
      element: <PrivateRoute> <MyAddedFood></MyAddedFood> </PrivateRoute>,
  },
  {
    path: "/add-food",
    element: <PrivateRoute> <AddFoodItem></AddFoodItem></PrivateRoute>,
},
{
  path: "/update-food/:id",
  element: <UpdateFood></UpdateFood>,
  loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
},
      ]
    },
  ]);

  export default router;