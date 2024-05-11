

const Chef = () => {
    return (
       
       
        <div className="mb-10">
            <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl text-yellow-400 font-bold mb-5 font-serif">Our Team</h2>
        <p className="text-gray-700 text-sm md:text-lg lg:text-base xl:text-lg  mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2"> Our team of talented chefs, led by Executive Chef Marco Rossi, brings a wealth of culinary expertise and passion to every dish, ensuring an unforgettable dining experience</p>
    </div>
            <div className=" ml-28 mr-28  grid lg:grid-cols-5 gap-4">
                <div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="relative">
                        <img className="w-full h-auto" src="https://i.ibb.co/Wt7S40H/C1ure.jpg" alt="User's Image"/>
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex flex-col justify-center items-center">
                        <h3 className=" text-lg font-semibold text-yellow-400">Chef Marco Rossi</h3>
                        <p className="text-white text-sm p-2">Executive Chef</p>
                        </div>
              </div>
            </div> 

           

            </div>

            {/* 2 */}
            <div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="relative">
                        <img className="w-full h-auto" src="https://i.ibb.co/4jxRXmn/medium-shot-man-with-delicious-muffins.jpg" alt="User's Image"/>
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex flex-col justify-center items-center">
                        <h3 className=" text-lg font-semibold text-yellow-400">Chef Alejandro Hernandez</h3>
                        <p className="text-white text-sm p-2">Head Chef</p>
                        </div>
              </div>
            </div> 

            </div>

            {/* 3 */}
            <div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="relative">
                        <img className="w-full h-auto" src="https://i.ibb.co/Wt7S40H/C1ure.jpg" alt="User's Image"/>
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex flex-col justify-center items-center">
                        <h3 className=" text-lg font-semibold text-yellow-400">Chef Nayan</h3>
                        <p className="text-white text-sm p-2">Chef de Cuisine</p>
                        </div>
              </div>
            </div> 

            </div>


            {/* 4 */}
            <div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="relative">
                        <img className="w-full h-auto" src="https://i.ibb.co/Wt7S40H/C1ure.jpg" alt="User's Image"/>
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex flex-col justify-center items-center">
                        <h3 className=" text-lg font-semibold text-yellow-400">Chef Xavier Martinez</h3>
                        <p className="text-white text-sm p-2">Sous Chef</p>
                        </div>
              </div>
            </div> 

            </div>
            {/* 5 */}
            <div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="relative">
                        <img className="w-full h-auto" src="https://i.ibb.co/Wt7S40H/C1ure.jpg" alt="User's Image"/>
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex flex-col justify-center items-center">
                        <h3 className=" text-lg font-semibold text-yellow-400">Chef Gabrielle Nguyen</h3>
                        <p className="text-white text-sm p-2">Pastry Chef</p>
                        </div>
              </div>
            </div> 

            </div>
            </div>
        </div>
    );
};

export default Chef;