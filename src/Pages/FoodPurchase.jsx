// import { useContext, useState } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import Swal from 'sweetalert2';

// const FoodPurchase = ({ food }) => {
//     const { user } = useContext(AuthContext);
//     const [quantity, setQuantity] = useState(1); // Initialize quantity state with 1
    

//     const handlePurchase = (event) => {
//         event.preventDefault();

//         // Create a new purchase object
//         const purchase = {
//             // foodName: name, // Use the food name passed as a prop
//             // price: food.price,
//             // quantity: quantity,
//             buyerName: user.displayName || '',
//             buyerEmail: user.email || '',
//             buyingDate: Date.now() // Use Date.now() to get the current timestamp
//         };

//         // Send the purchase data to the server
//         fetch('http://localhost:5000/purchase', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(purchase)
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             if (data.insertedId) {
//                 Swal.fire({
//                     title: 'Success!',
//                     text: 'Purchase Successful',
//                     icon: 'success',
//                     confirmButtonText: 'Cool'
//                 });
//             }
//         });
//     };

//     return (
//         <div>
//             <h3 className='text-4xl text-center text-black font-bold mb-4 font-serif'>Purchase Food</h3>
//             <form onSubmit={handlePurchase}>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-black font-semibold">Food Name</span>
//                     </label>
//                     <input type="text" name="foodName" value={name} readOnly className="input input-bordered" />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-black font-semibold">Price</span>
//                     </label>
//                     <input type="text" name="price"  readOnly className="input input-bordered" />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-black font-semibold">Quantity</span>
//                     </label>
//                     <input type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="input input-bordered" />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-black font-semibold">Buyer Name</span>
//                     </label>
//                     <input type="text" name="buyerName" value={user.displayName || ''} readOnly className="input input-bordered" />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-black font-semibold">Buyer Email</span>
//                     </label>
//                     <input type="email" name="buyerEmail" value={user.email || ''} readOnly className="input input-bordered" />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-black font-semibold">Buying Date</span>
//                     </label>
//                     <input type="text" name="buyingDate" value={new Date().toLocaleString()} readOnly className="input input-bordered" />
//                 </div>
//                 <input type="submit" value="Purchase" className="btn btn-block bg-black text-white mt-8" />
//             </form>
//         </div>
//     );
// };

// export default FoodPurchase;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FoodPurchase = ({ food }) => {
    // State variables for form fields
    const [quantity, setQuantity] = useState(1);
    const [buyerName, setBuyerName] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");
    const [buyingDate, setBuyingDate] = useState("");

    // Effect to fetch buyer name and email from logged-in user's information
    useEffect(() => {
        // Fetch buyer name and email from the logged-in user's information
        // Assuming you have a method to fetch user's information
        // Replace 'fetchUserInfo' with your actual method
        fetchUserInfo().then(userInfo => {
            setBuyerName(userInfo.displayName);
            setBuyerEmail(userInfo.email);
        });

        // Set buying date to the current time
        setBuyingDate(Date.now());
    }, []);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can send the purchase request to the server
        // Include food ID, quantity, buyer name, buyer email, and buying date
        // You can use fetch or any other library for making HTTP requests
        // Example:
        const purchaseData = {
            foodId: food._id,
            quantity,
            buyerName,
            buyerEmail,
            buyingDate
        };
        // Send the purchase request to the server
        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(purchaseData)
        })
        .then(response => {
            // Handle response as needed
        })
        .catch(error => {
            // Handle error
        });
    };

    return (
        <div className="max-w-4xl bg-yellow-400 mx-auto p-8">
            <h1 className="text-4xl font-bold text-black font-serif mb-4">Food Purchase</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Food Name</label>
                    <input type="text" value={food.name} readOnly className="input input-bordered w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Price</label>
                    <input type="text" value={food.price} readOnly className="input input-bordered w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Quantity</label>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="input input-bordered w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Buyer Name</label>
                    <input type="text" value={buyerName} readOnly className="input input-bordered w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Buyer Email</label>
                    <input type="email" value={buyerEmail} readOnly className="input input-bordered w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Buying Date</label>
                    <input type="text" value={new Date(buyingDate).toLocaleString()} readOnly className="input input-bordered w-full" />
                </div>
                <button type="submit" className="btn bg-black text-white mt-4">Purchase</button>
            </form>
            <Link to="/" className="block text-center mt-4 text-yellow-400 hover:underline">Back to Home</Link>
        </div>
    );
};

export default FoodPurchase;

