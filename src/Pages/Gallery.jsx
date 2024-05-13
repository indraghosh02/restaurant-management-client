import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "../Components/Modal";
import ImageCard from "../Components/ImageCard";
import { AuthContext } from "../providers/AuthProvider";




const Gallery = () => {
    const { user } = useContext(AuthContext)
    
    // const foods = useLoaderData();
    const images = useLoaderData()

   
    console.log(images);
    

    
    
   
    return (
        <div>
             <Helmet>
          
          <title>Dish & Dine | Gallery </title>
    </Helmet>
    <div className="w-full h-32 bg-gradient-to-r from-black to-yellow-400 flex items-center justify-center"> 
        <h1 className="text-black text-6xl font-bold font-serif">Photo Gallery</h1>
    </div>

   <div>


    
   {
        user? 
        (
            <div className="flex items-center justify-center mt-10 mb-10">
            <button className="btn bg-yellow-400 text-black font-bold" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Feedback & Image
            
            
            </button>
            </div>
        )
        :
        (
           <Link to="/login">
                <div className="flex items-center justify-center mt-10 mb-10">
<button className="btn bg-yellow-400 text-black font-bold">Add Feedback & Image</button>
</div>
           </Link>
      
        )
    }
   </div>

{/* <div className="flex items-center justify-center mt-10 mb-10">
<button className="btn bg-yellow-400 text-black font-bold" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Feedback & Image</button>
</div> */}



{/* image cards */}
        <div className="grid lg:grid-cols-4 mb-10 ml-6 mr-6 gap-6">
                    {
                images.map(image => <ImageCard
                key={image._id}
                image={image}
                ></ImageCard>)
            }
        </div>




<dialog id="my_modal_1" className="modal">
 <Modal></Modal>

</dialog>
          
        </div>
    );
};

export default Gallery;