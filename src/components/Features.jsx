import React from "react";
import Laptops from "../images/laptops.png";
import Tvs from "../images/tvs.png";
import Phones from "../images/phones.png";
import HeadPhones from "../images/headphones.png";

function Features() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-pink-500">Featured Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-pink-500">Laptops</h3>
          <img
            src={Laptops}
            alt="Laptops"
            className="w-full h-64 object-contain mb-4"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            View More
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-pink-500">Phones</h3>
          <img
            src={Phones}
            alt="Phones"
            className="w-full h-64 object-contain mb-4"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            View More
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-pink-500">
            Headphones
          </h3>
          <img
            src={HeadPhones}
            alt="Headphones"
            className="w-full h-64 object-contain mb-4"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            View More
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-pink-500">TVs</h3>
          <img
            src={Tvs}
            alt="TVS"
            className="w-full h-64 object-contain mb-4"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
