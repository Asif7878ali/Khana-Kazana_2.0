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
