import Image from "next/image";
import React from "react";

export const CategoiesTile = ({ icon, name, count }) => {
  return (
    <div className="rounded-lg p-6 text-center transition-transform hover:scale-105 cursor-pointer bg-gray-100 text-gray-800">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-sm capitalize text-gray-500">
        {count} items
      </p>
    </div>
  );
};

export const DishesCard = ({ image, name, price , description, rating, reviews }) => {

  return (
    <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-3bg-white">
      <div className="relative h-48">
        <Image
          src={image}
          alt={"load dish"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-gray-800">
            {name}
          </h3>
          <span className="font-bold text-rose-500">{price}</span>
        </div>
        <p className="text-sm mb-4 text-gray-600">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-smtext-gray-800">
              {rating} ({reviews})
            </span>
          </div>
          <button className="bg-rose-500 hover:bg-rose-600 text-white py-2 px-4 rounded-md text-sm transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
