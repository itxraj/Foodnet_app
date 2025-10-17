import React from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { MdOutlineFastfood, MdFoodBank } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

const OurServices = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-yellow-400">Our Services</h1>
        <p className="text-gray-300 mt-2">What we offer to make your food experience amazing!</p>
      </div>

      {/* Icons Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12 text-center">
        <div className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <FaMobileScreen className="text-4xl text-yellow-400" />
          <p className="text-xl font-semibold">Online Booking</p>
        </div>
        <div className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <MdOutlineFastfood className="text-4xl text-yellow-400" />
          <p className="text-xl font-semibold">Fast Food</p>
        </div>
        <div className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <MdFoodBank className="text-4xl text-yellow-400" />
          <p className="text-xl font-semibold">Healthy Food</p>
        </div>
        <div className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <CiDeliveryTruck className="text-4xl text-yellow-400" />
          <p className="text-xl font-semibold">Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
