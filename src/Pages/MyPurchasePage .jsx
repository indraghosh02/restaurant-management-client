import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';


//import useAxiosSecure from '../Hook/useAxiosSecure'; //new


const MyPurchasePage = () => {
    const { user } = useContext(AuthContext);
    const [purchasedFoods, setPurchasedFoods] = useState([]);
    
    //const axiosSecure = useAxiosSecure(); //new

    // useEffect(() => {
    //     if (user) {
            // fetch(`https://resturent-management-server.vercel.app/my-purchases?email=${user.email}`, {credentials:'include'})
            // fetch(`/my-purchases?email=${user.email}`, {credentials:'include'})
           
                // .then(res => res.json())
                // .then(data => setPurchasedFoods(data))
                // .catch(error => console.error('Error fetching purchased foods:', error));

    //             axiosSecure.get(`/my-purchases?email=${user.email}`)
    //             .then(res=> setPurchasedFoods(res.data))
    //     }
    // }, [user, axiosSecure]);


    useEffect(() => {
      if (user) {
          fetch(`https://resturent-management-server.vercel.app/my-purchases?email=${user.email}`)
              .then(res => res.json())
              .then(data => setPurchasedFoods(data))
              .catch(error => console.error('Error fetching purchased foods:', error));
      }
  }, [user]);



    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
          title: "Are you sure to Delete?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, keep it",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://resturent-management-server.vercel.app/my-purchases/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                    setPurchasedFoods((prevPurchase) =>
                        prevPurchase.filter((purchase) => purchase._id !== _id)
                  ); // Update the state to remove the deleted craft
                  Swal.fire("Deleted!", "Your craft has been deleted.", "success");
                }
              });
           
          }
        });
      };

    return (
        <div>
         <div className="w-full h-32 bg-gradient-to-r from-black to-yellow-400 flex items-center justify-center">
                <h1 className="text-black text-6xl font-bold font-serif">My ordered foods</h1>
            </div>
           <div className='grid lg:grid-cols-3 m-10 gap-6'>
           {purchasedFoods.map(food => (
                    

                    <div key={food._id} className="  bg-black shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"> {/* Card container */}
                    <img
                        src={food.image} 
                        alt={food.name}
                        className="w-full h-40 object-cover"
                    />
    
                    <div className="p-4">
                        <h3 className="text-2xl text-yellow-400 font-serif font-semibold mb-2">{food.foodName}</h3> {/* Food name */}
                        
                         
                        <p className="text-white ">Price: ${food.price}</p> 
                        <p className="text-white ">Food Owner:{food.buyerName}</p> 
                        <p className="text-white ">Ordered Date: {food.buyingDate}</p> 
    
                    </div>
    
                    <div className="p-4 grid grid-cols-1 justify-end gap-4"> {/* Section for the "Details" button */}
                        
                        <button onClick={() => handleDelete(food._id)} className="bg-red-800 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"> {/* Button with hover effect */}
                            Delete
                        </button>
                    </div>
                    </div>

                    
    
                    
                  
                ))}
           </div>
        </div>
    );
};

export default MyPurchasePage;




