import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";



const SingleFoodPage = () => {
    const { user } = useContext(AuthContext)
    const food = useLoaderData(); // Fetch food details from the loader

    
    if (!food) {
        return <p>Art not found</p>;
    }
    const {_id, name, image, category, price,  username, email, origin, description, quantity } = food;
    return (
       
    

            <div className="max-w-4xl bg-yellow-400 mx-auto p-8"> {/* Container with some padding */}
               <Helmet>
          
                    <title>Dish & Dine | Single Food </title>
                  </Helmet>
                     
                <div className="bg-black shadow-lg rounded-lg overflow-hidden"> {/* Card style for displaying food details */}
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-60 object-cover"
                    />
                    <div className="p-6">
                        <h1 className="text-4xl font-bold text-yellow-400 font-serif mb-4">{name}</h1> 
                        <p className=" mb-2 text-white">Category: {category}</p> 
                        <p className="text-white mb-2">Price: ${price}</p> 
                        <p className="text-white mb-2">quantity: {quantity}</p> 
                        
                        <p className="text-white mb-2">Made By: {username}</p> 
                        <p className="text-white mb-2">Origin: {origin}</p> 
                        <p className="text-white mb-4">{description}</p>
                        <p className="text-white mb-4">{email}</p>
                        
                        {/* <p className="text-white mb-4">{_id}</p>  */}
                        


                        {user && user.email!=email && quantity > 0? (<div>
                    <Link to={`/food-purchase/${_id}`}><button className="btn bg-orange-500" >Purchase</button></Link>
                   </div>):( <div>{!user && quantity > 0 ? (
                    <Link to={`/food-purchase/${_id}`}><button className="btn bg-orange-500" >Purchase</button></Link>
                ) : (
                        <div>
                            <p className="text-red-500">This food is not available for purchase.</p>
                            <button className="btn bg-orange-500" disabled>Purchase</button>
                        </div>
                    ) }</div>)}
                       



                        
                      
                    </div>
                </div>
            </div>
        );
};

export default SingleFoodPage;






//original
// {
//     quantity > 0 ? (
//         <Link to={`/food-purchase/${_id}`}>
//         <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"> {/* Purchase button */}
//              Purchase
//          </button>
         
//         </Link>
//     ):
//     (
//         <div>
//              <Link to={`/food-purchase/${_id}`}>
// <button className="bg-red-800 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200" disabled> {/* Purchase button */}
//     Purchase
// </button>
// <p className="text-red-800 font-bold">Not Available for purchase</p>

// </Link>
//         </div>
//     )
// }









// 2

// {
//     quantity < 1 || user.email === email ? (
//         <div>
//             <button className="bg-red-800 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200" disabled>
//                 Purchase
//             </button>
//             <p className="text-red-800 font-bold">Not Available for purchase</p>
//         </div>
//     ) : (
//         <Link to={`/food-purchase/${_id}`}>
//             <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
//                 Purchase
//             </button>
//         </Link>
//     )
// }


//3

// {user && user.email!= email? 
                        
//     (
//          <div>{quantity > 0 ? 
//             (
//         <Link to={`/food-purchase/${_id}`} className="btn bg-orange-500">Purchase</Link>
//     ) : 
//     (
//         <div>
//             <p className="text-red-500">This item is currently not available for purchase.</p>
//             <button className="btn bg-orange-500" disabled>Purchase</button>
//         </div>
//     ) }</div>)


//    :

//    (<div>
//    <Link to={`/food-purchase/${_id}`} > <button className="btn bg-orange-500" >Purchase</button></Link> 
//    </div>)





// }