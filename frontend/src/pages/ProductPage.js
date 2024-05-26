import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-8">
      <div className="flex">
        <img src={product.image} alt={product.name} className="w-1/2 h-auto object-cover" />
        <div className="ml-8">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-600">${product.price}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
