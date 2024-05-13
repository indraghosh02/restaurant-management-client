

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
        fetch('https://resturent-management-server.vercel.app/purchase', {
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

