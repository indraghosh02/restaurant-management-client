import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const Modal = () => {
    const { user } = useContext(AuthContext)

    const handleAddImage = event =>{
        event.preventDefault();

        const form = event.target;

        const username = form.username.value;
        const email = form.email.value;
        
        const feedback = form.feedback.value;
        const image = form.image.value;
        
        

        const newImage = {  username, email,feedback, image }
        console.log(newImage);

        // send data to server
        fetch('http://localhost:5000/image',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newImage)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Image Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
       <div className="modal-box">
    <h3 className="font-bold text-2xl"> Welcome to Dish <span className="text-yellow-400">&</span> Dine</h3>
    <p className="py-4">Please provide an Image and Your valuable Feedback</p>
    <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-black text-white">Close</button>
      </form>
    <div className="modal-action">
      <form  onSubmit={handleAddImage} >
      <div className="md:flex gap-6">
               
               {/* 1 */}
               <div className="form-control w-full">

               <label className="label">
               <span className="label-text text-black font-semibold">Added by</span>
               </label>
               <label className="input-group">

               <input type="text"
               name="username"
               placeholder="Username"
               readOnly
               className="input input-bordered w-full"
               defaultValue={user?.displayName || ''}
               />
               </label>
               </div> 
               <div className="form-control w-full  ">

                   <label className="label">
                   <span className="label-text text-black font-semibold">User Email</span>
                   </label>
                   <label className="input-group">

                   <input type="email" name="email" placeholder="User Email" readOnly className="input input-bordered w-full" 
                    defaultValue={user?.email || ''}
                   
                    />
                   </label>
                   </div> 

               </div>


      
      
                {/* row-1 */}
                <div className="">
              

                {/* 2 */}
                 
                </div>

                <div className="form-control w-full">

                    <label className="label">
                    <span className="label-text text-black font-semibold"> FeedBack</span>
                    </label>
                    <label className="input-group">

                    <input type="text" name="feedback" placeholder="feedBack" className="input input-bordered w-full " />
                    </label>
                    </div> 
                    <div className="form-control w-full">

                <label className="label">
                <span className="label-text text-black font-semibold">Food Image URL</span>
                </label>
                <label className="input-group">

                <input type="text" name="image" placeholder="Food Image URL" className="input input-bordered w-full " />
                </label>
                </div>
                                    
              


                 {/* row-5*/}
                
               
                

               
      <input type="submit" value="Add Item" className="btn btn-block bg-black text-white mt-8"  />
      
        





        
      </form>
      
    </div>
  </div>
 

        </div>
    );
};

export default Modal;