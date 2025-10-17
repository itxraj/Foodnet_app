import React from "react";
import HeroImg from "../../assets/1.png";

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 text-center md:text-left pt-24 md:p-0 pb-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-yellow-400">
            Eat Bold. Live Tasty.
          </h1>
          <p className="text-lg text-gray-300">
            Explore mouth-watering dishes, quick recipes, and seamless ordering. 
            Fresh flavors, fast service, and pure foodie joy – that’s{" "}
            <span className="font-semibold text-yellow-400">FoodNet</span>!
          </p>
          <div className="flex gap-4 items-center md:justify-start justify-center mt-4">
            <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200">
              Explore Menu
            </button>
            <button className="bg-gray-800 text-yellow-400 font-semibold px-6 py-3 rounded-full border border-yellow-400 hover:scale-105 transition-transform duration-200">
              Reserve Table
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col justify-center">
          <img
            src={HeroImg}
            alt="Delicious food"
            className="animate-spin-slow w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
