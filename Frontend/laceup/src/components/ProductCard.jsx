// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      {/* Product Details */}
      <div className="p-4">
        {/* Name & Price */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <span className="text-xl font-bold text-green-600">
            RS {product.price}
          </span>
        </div>

        {/* Brand & Category */}
        <p className="text-sm text-gray-500">
          {product.brand} • {product.category}
        </p>

        {/* Stock Info */}
        <p
          className={`mt-1 text-sm font-medium ${
            product.inStock ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>

        {/* Description */}
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">
          {product.description}
        </p>

        {/* View Button */}
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition cursor-pointer">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
