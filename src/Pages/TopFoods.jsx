import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopFoods = () => {
    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/topfoods')
            .then(response => response.json())
            .then(data => {
                setTopFoods(data);
            })
            .catch(error => console.error('Error fetching top foods:', error));
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className='lg:text-5xl md:text-4xl text-xl text-center  font-bold font-serif  mb-6 text-black mt-14 '>Top Foods</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center ml-4 mr-4 ">
                {topFoods.map(food => (
                    <div key={food._id} className="card card-compact bg-black shadow-xl ">
                        <figure className="h-64 w-full">
                            <img src={food.image} alt={food.image} className="image" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-yellow-400 font-bold font-serif">{food.name}</h2>
                            <p>{food.shortDescription}</p>
                            <div className='flex justify-between'>
                                <p className='text-white font-paragraph'>Category: {food.category}</p>
                                <p className='text-white text-lg'>Price: ${food.price}</p>
                            </div>
                            <div className="card-actions justify-end">
                            <Link to={`/single-food/${food._id}`} className="btn  hover:bg-green-800 bg-yellow-400 text-black">Details</Link>                            
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
    <div className="w-full sm:w-auto">
        <Link to="/all-foods">
            <button className="btn btn-wide bg-yellow-400 hover:bg-green-800 text-black font-bold mb-16 mt-10 ">See ALL Foods</button>
        </Link>
    </div>
</div>
        </div>
    );
};

export default TopFoods;