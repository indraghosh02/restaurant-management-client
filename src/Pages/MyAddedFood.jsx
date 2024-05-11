
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import FoodCard from '../Components/FoodCard';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import MyFoodCard from '../Components/MyFoodCard';

const MyAddedFood = () => {
    const { user } = useContext(AuthContext); // Get the current user from context
  const [myFoodItems, setMyFoodItems] = useState([]); // State to store food items
  const navigate = useNavigate(); // For navigating to update page

  useEffect(() => {
    const fetchMyFoodItems = async () => {
      if (user?.email) {
        const response = await fetch(`http://localhost:5000/food?email=${encodeURIComponent(user.email)}`);
        const data = await response.json();
        setMyFoodItems(data); // Store fetched food items
      }
    };

    fetchMyFoodItems(); // Fetch food items when the component mounts or user changes
  }, [user?.email]); // Only refetch when user changes

  return (
    <div>
      <Helmet>
        <title>My Food Items</title>
      </Helmet>

      <div className="w-full h-32 bg-gradient-to-r from-black to-yellow-400 flex items-center justify-center">
        <h1 className="text-black text-6xl font-bold font-serif">My Food Items</h1>
      </div>

      <div className="grid lg:grid-cols-3 m-10 gap-6">
        {myFoodItems.map((food) => (
          <div key={food._id}>
            <MyFoodCard food={food} />
            <div className="p-4 flex justify-end">
            {/* <Link to=>
            <button
                className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
              
              >
                Update
              </button></Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedFood;