import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import '../Styles/slider.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="flex justify-center items-center w-full h-full mt-10 mb-10">
      <div className="w-full md:w-5/6">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative slide slide1">
              <div className="text-content">
                <h1 className="text-yellow-400 text-4xl font-bold font-serif"> Welcome to <span className="text-white">  Dish</span> & <span className="text-white">  Dine</span> </h1>
                <p className="text-white text-lg">Discover a world of culinary delights</p>
                <Link to="/all-foods"> 
               <button className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded font-bold font-sans">All Foods</button></Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative slide slide2">
              <div className="text-content">
                <h1 className=" text-yellow-400 text-4xl font-bold font-serif">Sweet Delights</h1>
                <p className="text-white text-lg">Indulge in our desserts and pastries,where every bite is a journey through decadent flavors and irresistible treats</p>
                <Link to="/all-foods"> 
               <button className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded font-bold font-sans">All Foods</button></Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative slide slide3">
              <div className="text-content">
                <h1 className="text-yellow-400 text-4xl font-bold font-serif">Italian Cuisine</h1>
                <p className="text-white text-lg">Experience authentic Italian dishes, featuring classic pastas, rich sauces, and traditional flavors that transport you to the streets of Rome</p>
                <Link to="/all-foods"> 
               <button className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded font-bold font-sans">All Foods</button></Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="relative slide slide4">
              <div className="text-content">
                <h1 className="text-yellow-400 text-4xl font-bold font-serif">Healthy & Organic Food</h1>
                <p className="text-white text-lg">Experience the vibrant tastes of our Healthy & Organic dishes, where every dish is a testament to quality, sustainability, and pure deliciousness</p>
               <Link to="/all-foods"> 
               <button className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded font-bold font-sans">All Foods</button></Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
