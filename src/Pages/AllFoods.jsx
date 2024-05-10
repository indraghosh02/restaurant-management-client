import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../Components/FoodCard";


const AllFoods = () => {
    const foods = useLoaderData();

    return (
        <div className=" ">
             <Helmet>
          
          <title>Dish & Dine | All Food </title>
        </Helmet>
           
            <div className="w-full h-32 bg-gradient-to-r from-black to-yellow-400 flex items-center justify-center"> {/* Flexbox for centering */}
                <h1 className="text-black text-6xl font-bold font-serif">All Foods</h1> {/* Centered title */}
            </div>
            
           <div className="grid lg:grid-cols-3 m-10 gap-6 ">
           {
                foods.map(food => <FoodCard
                key={food._id}
                food={food}
                ></FoodCard>)
            }
           </div>
        </div>
    );
};

export default AllFoods;