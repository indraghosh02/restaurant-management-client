import { useLoaderData } from "react-router-dom";


const SingleFoodPage = () => {
    const food = useLoaderData(); // Fetch food details from the loader

    
    if (!food) {
        return <p>Art not found</p>;
    }
    const { name, image, category, price,  username, origin, description } = food;
    return (
       
    

            <div className="max-w-4xl bg-yellow-400 mx-auto p-8"> {/* Container with some padding */}
                <div className="bg-black shadow-lg rounded-lg overflow-hidden"> {/* Card style for displaying food details */}
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-60 object-cover"
                    />
                    <div className="p-6">
                        <h1 className="text-4xl font-bold text-yellow-400 font-serif mb-4">{name}</h1> {/* Food name */}
                        <p className=" mb-2 text-white">Category: {category}</p> {/* Category */}
                        <p className="text-white mb-2">Price: ${price}</p> {/* Price */}
                        
                        <p className="text-white mb-2">Made By: {username}</p> {/* Who added the food */}
                        <p className="text-white mb-2">Origin: {origin}</p> {/* Origin */}
                        <p className="text-white mb-4">{description}</p> {/* Description */}
                        
                        <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"> {/* Purchase button */}
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
        );
};

export default SingleFoodPage;