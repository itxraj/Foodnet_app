import React from "react";
import BannerImg from "../../assets/2.png";

const Banner = () => {
  return (
    <div className="bg-gray-900 text-white py-14">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={BannerImg}
            alt="Delicious Food"
            className="w-full max-w-md "
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-4">
            Food Is Always Good
          </h1>
          <p className="text-gray-300 font-medium leading-relaxed">
            Your ultimate destination for delicious meals and culinary inspiration! From sizzling street food to gourmet delights, we bring flavors from around the world right to your screen. Explore mouth-watering recipes, discover easy cooking tips, and order your favorite dishes with ease. Whether you’re a home chef or a food lover seeking the next great bite, <span className="text-yellow-400 font-semibold">FoodNet</span> makes every meal an experience to savor. Fresh, fast, and flavorful – join our community and let your taste buds embark on a journey they won’t forget!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
