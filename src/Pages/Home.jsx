import { Helmet } from 'react-helmet';
import Slider from '../Components/Slider';
import Chef from '../Components/Chef';


const Home = () => {
    return (
       <div>
         <Helmet>
          
          <title>Dish & dine | Home </title>
        </Helmet>

        <Slider></Slider>

        <Chef></Chef>

        <div className="flex justify-center items-center bg-black py-8">
  <div className="container mx-auto flex flex-col md:flex-row">
    {/* Image on the left */}
    <div className="md:w-1/2">
      <img src="https://i.ibb.co/Th4f1zV/jsdgjre.jpg" alt="Restaurant Image" className="w-full h-auto md:max-h-80 rounded-md shadow-md ml-6" />
    </div>
    {/* Text on the right */}
    
    <div className="md:w-1/2 md:ml-8">
       <h2 className="text-3xl font-semibold mb-4 text-yellow-400 font-serif">Welcome to Dish & Dine</h2>
        <p className="text-lg mb-4 text-white"> Dish and Dine, where culinary excellence meets unmatched hospitality. Situated in the heart of Your City, we pride ourselves on offering a diverse array of delectable dishes that cater to every palate.</p>
        <p className="text-lg mb-4 text-white">At Dish and Dine, we believe that food is not just nourishment; it's an experience. Whether you're craving traditional comfort food, exotic flavors from around the globe, or innovative fusion cuisine, our extensive menu has something for everyone.</p>
        <p className="text-lg mb-4 text-white">Our talented chefs are passionate about crafting each dish with the finest ingredients, ensuring every bite is a symphony of flavors and textures. From hearty breakfast options to mouthwatering main courses and decadent desserts, every meal at Dish and Dine is a celebration of culinary craftsmanship.</p>
       
      </div>
  </div>
</div>

       </div>
      
    );
};

export default Home;