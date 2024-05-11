import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";


const Gallery = () => {
    const foods = useLoaderData();
    return (
        <div>
             <Helmet>
          
          <title>Dish & dine | Gallery </title>
        </Helmet>
        <div className="w-full h-32 bg-gradient-to-r from-black to-yellow-400 flex items-center justify-center"> {/* Flexbox for centering */}
               <h1 className="text-black text-6xl font-bold font-serif">Photo Gallery</h1> {/* Centered title */}
           </div>
          
        </div>
    );
};

export default Gallery;