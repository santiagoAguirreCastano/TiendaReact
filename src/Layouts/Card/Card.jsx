import React from 'react';

export const Card = (products) => {
  const { title, price, description, category, image } = products;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-80 hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="rounded-xl h-40 w-full object-cover mb-4"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <span className="text-xs text-gray-400 uppercase">{category}</span>
        <div className="text-lg font-bold text-green-600">${price}</div>
        
      </div>
    </div>
  );
};
