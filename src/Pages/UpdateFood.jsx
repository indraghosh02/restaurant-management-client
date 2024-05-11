import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const UpdateFood = () => {
    const food = useLoaderData();
    const {_id, name, image, category, origin, description, price, quantity} = food;
   

    const { user } = useContext(AuthContext)
    const handleUpdateFood = event =>{
       event.preventDefault();

       const form = event.target;

       const name = form.name.value;
       const image = form.image.value;
       const category = form.category.value;
       const origin = form.origin.value;
       const description = form.description.value;
       const price = form.price.value;
       const quantity = form.quantity.value;
       const username = form.username.value;
       const email = form.email.value;

       const updatedFood = {name, image, category, origin, description, price, quantity, username, email}
       console.log(updatedFood);

       //send data to server
       fetch(`http://localhost:5000/food/${_id}`,{
           method: 'PUT',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(updatedFood)
       })
       .then(res => res.json())
       .then(data =>{
           console.log(data);
           if(data.modifiedCount > 0){
               Swal.fire({
                   title: 'Success!',
                   text: 'Food updated Successfully',
                   icon: 'success',
                   confirmButtonText: 'Cool'
                 })
           }
       })
    }
   
    return (
        <div>
            


        <div className="bg-gradient-to-r from-yellow-400 to-slate-500 p-24  ">
         <h3 className='text-4xl text-center text-black font-bold mb-4 font-serif'> UpDate Food <br /><span className="text-green-900">({name})</span> </h3>
         <form onSubmit={handleUpdateFood}  >

            {/* row-1 */}
            <div className="md:flex gap-6">
            <div className="form-control md:w-1/2  ">

            <label className="label">
            <span className="label-text text-black font-semibold">Food Name</span>
            </label>
            <label className="input-group">

            <input type="text" name="name" defaultValue={name} placeholder="Food Name" className="input input-bordered w-full " />
            </label>
            </div> 

            {/* 2 */}
            <div className="form-control md:w-1/2">

            <label className="label">
            <span className="label-text text-black font-semibold">Food Image URL</span>
            </label>
            <label className="input-group">

            <input type="text" name="image" defaultValue={image} placeholder="Food Image URL" className="input input-bordered w-full " />
            </label>
            </div> 
            </div>

             {/* row-2 */}
             
             <div className=" ">
             <div className="mb-4 form-control w-full">
            <label className="label text-black font-semibold" >Choose a Category:</label>
            <select
                id="category"
                name="category"
                 
                className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
                <option  defaultValue={category}>{category}</option>
                <option value="Breakfast & Brunch">Breakfast & Brunch</option>
                <option value="Main Courses">Main Courses</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Drinks">Drinks</option>
                <option value="Desserts">Desserts</option>
                <option value="Appetizers & Starters">Appetizers & Starters</option>
                
               
            </select>
        </div>
            </div>
            <div className=" ">
             <div className="mb-4 form-control w-full">
            <label className="label text-black font-semibold" >Choose a Food Origin:</label>
            <select
                id="origin"
                name="origin"
                className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >

                <option defaultValue={origin}>{origin}</option>
                <option value="Bengali Cousine">Bengali Cousine</option>
                <option value="Italian Cousine">Italian Cuisine</option>
                <option value="Chinese Cousine">Chinese Cuisine</option>
                <option value="Indian Cousine">Indian Cuisine</option>
                <option value="Mexican Cousine">Mexican Cuisine</option>
            
            </select>
        </div>
            </div>
            <div className="form-control w-full">

                <label className="label">
                <span className="label-text text-black font-semibold">Short Description</span>
                </label>
                <label className="input-group">

                <input type="text" name="description"  defaultValue={description} placeholder="Short Description" className="input input-bordered w-full " />
                </label>
                </div> 
                                
             {/* row-3 */}
             <div className="md:flex gap-6">
            <div className="form-control md:w-1/2  ">

            <label className="label">
            <span className="label-text text-black font-semibold">Price</span>
            </label>
            <label className="input-group">

            <input type="text" name="price"  defaultValue={price} placeholder="Price" className="input input-bordered w-full " />
            </label>
            </div> 

            {/* 2 */}
            <div className="form-control md:w-1/2">

            <label className="label">
            <span className="label-text text-black font-semibold"> Quantity</span>
            </label>
            <label className="input-group">

            <input type="text" name="quantity"  defaultValue={quantity} placeholder="Quantity" className="input input-bordered w-full " />
            </label>
            </div> 
            </div>


             {/* row-5*/}
             <div className="md:flex gap-6">
           
            {/* 1 */}
            <div className="form-control md:w-1/2">

            <label className="label">
            <span className="label-text text-black font-semibold">Added by</span>
            </label>
            <label className="input-group">

            <input type="text"
            name="username"
            placeholder="Username"
            className="input input-bordered w-full"
            defaultValue={user?.displayName || ''}
            />
            </label>
            </div> 
            <div className="form-control md:w-1/2  ">

                <label className="label">
                <span className="label-text text-black font-semibold">Added by Email</span>
                </label>
                <label className="input-group">

                <input type="email" name="email" placeholder="User Email" className="input input-bordered w-full" 
                 defaultValue={user?.email || ''}
                
                 />
                </label>
                </div> 

            </div>
           
            <input type="submit" value="Update Food" className="btn btn-block bg-green-900 text-white mt-8"  />

            
         </form>

         
    </div>
    
    </div>
    );
};

export default UpdateFood;