import { Link, useNavigate } from "react-router-dom";


const MyFoodCard = ({ food }) => {
    const navigate = useNavigate()
    const {_id, name, image, category, price, quantity} = food;

    const viewDetails = () => {
        navigate(`/single-food/${_id}`); 
    };
    
    return (
    
    <div className="bg-black shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"> {/* Card container */}
            <img
                src={image} /* Food image at the top */
                alt={name}
                className="w-full h-40 object-cover"
            />

            <div className="p-4">
                <h3 className="text-2xl text-yellow-400 font-serif font-semibold mb-2">{name}</h3> {/* Food name */}
                <p className="text-white ">Category: {category}</p> 
                <p className="text-white ">Price: ${price}</p> 
                
            </div>

            <div className="p-4 flex justify-end"> {/* Section for the "Details" button */}
              <Link to={`/update-food/${_id}`}>
              <button  className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"> {/* Button with hover effect */}
                    Update
                </button>
              </Link>
            </div>
        </div>
    );
};

export default MyFoodCard;