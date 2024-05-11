// import { Helmet } from "react-helmet";
// import { useLoaderData } from "react-router-dom";
// import FoodCard from "../Components/FoodCard";


// const AllFoods = () => {
//     const foods = useLoaderData();

//     return (
//         <div className=" ">
//              <Helmet>
          
//           <title>Dish & Dine | All Food </title>
//         </Helmet>
           
//             <div className="w-full h-32 bg-gradient-to-r from-black to-yellow-400 flex items-center justify-center"> {/* Flexbox for centering */}
//                 <h1 className="text-black text-6xl font-bold font-serif">All Foods</h1> {/* Centered title */}
//             </div>
            
//            <div className="grid lg:grid-cols-3 m-10 gap-6 ">
//            {
//                 foods.map(food => <FoodCard
//                 key={food._id}
//                 food={food}
//                 ></FoodCard>)
//             }
//            </div>
//         </div>
//     );
// };

// export default AllFoods;





import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import FoodCard from "../Components/FoodCard";

const AllFoods = () => {
    const [foods, setFoods] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 

    useEffect(() => {
        const fetchFoods = async () => {
            let url = "http://localhost:5000/food";

            if (searchTerm) { 
                url += `?name=${encodeURIComponent(searchTerm)}`;
            }

            const response = await fetch(url);
            const result = await response.json();
            setFoods(result);
        };

        fetchFoods(); 
    }, [searchTerm]); 
    return (
        <div>
            <Helmet>
                <title>Dish & Dine | All Foods</title>
            </Helmet>

            <div className="w-full h-32 bg-gradient-to-r from-black to-yellow-400 flex items-center justify-center">
                <h1 className="text-black text-6xl font-bold font-serif">All Foods</h1>
            </div>

            {/* Search Bar */}
            <div className="my-8 text-center">
                <input
                    type="text"
                    placeholder="Search food by name..."
                    className="border rounded p-2 w-1/2"
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
            </div>

            {/* Food Cards */}
            <div className="grid lg:grid-cols-3 m-10 gap-6">
                {foods.map((food) => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default AllFoods;
