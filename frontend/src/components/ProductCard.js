import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <h2 className="text-xl font-bold my-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500">View Details</Link>
    </div>
  );
}

export default ProductCard;
