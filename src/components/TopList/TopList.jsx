import React from "react";
import Image1 from "../../assets/3.png";
import Image2 from "../../assets/4.png";
import Image3 from "../../assets/5.png";

const FoodData = [
  {
    image: Image1,
    rating: "⭐⭐⭐⭐⭐",
    price: "Rs 100",
    name: "Chole Bhature",
    desc: "Fluffy bhature with spicy chickpeas – North India’s comfort classic, irresistible and hearty!",
  },
  {
    image: Image2,
    rating: "⭐⭐⭐⭐⭐",
    price: "Rs 199",
    name: "Salad",
    desc: "Fresh, crunchy greens with zesty dressing – healthy, colorful, and totally Insta-worthy!",
  },
  {
    image: Image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "Rs 99",
    name: "Dosa",
    desc: "Crispy golden South Indian crepe with sambar & coconut chutney – breakfast perfection!",
  },
];

const TopList = () => {
  return (
    <div className="bg-gray-900 text-white py-14">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-yellow-400">Top Picks</h1>
        <p className="text-gray-300 mt-2">Our most loved dishes, handpicked for you!</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg p-6 rounded-3xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-48 h-48 sm:w-40 sm:h-40 lg:w-52 lg:h-52 mx-auto object-cover rounded-full img-shadow mb-4"
            />
            <p className="text-yellow-400">{item.rating}</p>
            <h3 className="text-xl font-semibold mt-2 text-white">{item.name}</h3>
            <p className="text-gray-300 mt-2">{item.desc}</p>
            <p className="text-lg font-bold text-yellow-400 mt-3">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
